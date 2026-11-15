// Builds src/sky.json: the real night sky for the cosmos around the lotus.
//
//   node tools/build-sky.mjs <folder with the source files>
//
// Source files (not kept in this repository):
//   stars.6.json, starnames.json, constellations.json, constellations.lines.json
//       from d3-celestial by Olaf Frohn (BSD 3-Clause), github.com/ofrohn/d3-celestial
//       every star to magnitude 6 (Hipparcos numbers, J2000 positions) and the lines of the 88 constellations
//   hyg.csv
//       the HYG star database v4.0 by David Nash (CC BY-SA 4.0), github.com/astronexus/HYG-Database
//       used only for each star's distance in parsecs
//
// Output: stars as [RA°, Dec°, magnitude, B-V colour, distance pc], the constellation lines as pairs of
// star numbers, the constellation names with a place for each name, and the proper names of stars.
import fs from 'node:fs';
import path from 'node:path';

const dir = process.argv[2];
if (!dir) { console.error('usage: node tools/build-sky.mjs <source folder>'); process.exit(1); }
const J = (f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
const ra360 = (lon) => ((lon % 360) + 360) % 360;

// distances by Hipparcos number
const dist = new Map();
{
  const rows = fs.readFileSync(path.join(dir, 'hyg.csv'), 'utf8').split('\n');
  const split = (line) => { const out = []; let cur = '', q = false; for (const ch of line) { if (ch === '"') q = !q; else if (ch === ',' && !q) { out.push(cur); cur = ''; } else cur += ch; } out.push(cur); return out; };
  const head = split(rows[0]); const iH = head.indexOf('hip'), iD = head.indexOf('dist');
  for (let i = 1; i < rows.length; i++) { const c = split(rows[i]); if (c[iH]) { const d = Number(c[iD]); if (d > 0 && d < 99999) dist.set(Number(c[iH]), d); } }
}

const names = J('starnames.json');
const feats = J('stars.6.json').features;
const stars = [], hip = [], proper = {};
let noDist = 0;
feats.forEach((f, i) => {
  const [lon, dec] = f.geometry.coordinates;
  let d = dist.get(f.id);
  if (!d) { d = 0; noDist++; }
  stars.push(+ra360(lon).toFixed(4), +dec.toFixed(4), f.properties.mag, +Number(f.properties.bv || 0.6).toFixed(2), +d.toFixed(1));
  hip.push(f.id);
  const n = names[f.id];
  if (n && n.name && f.properties.mag < 3.6) proper[i] = n.name;
});

// each vertex of a constellation line is a star: find it
const N = feats.length;
const vec = (raD, decD) => { const a = raD * Math.PI / 180, d = decD * Math.PI / 180; return [Math.cos(d) * Math.cos(a), Math.cos(d) * Math.sin(a), Math.sin(d)]; };
const sv = feats.map((f) => vec(ra360(f.geometry.coordinates[0]), f.geometry.coordinates[1]));
function nearest(lon, dec) {
  const v = vec(ra360(lon), dec); let best = -1, bd = -2;
  for (let i = 0; i < N; i++) { const d = v[0] * sv[i][0] + v[1] * sv[i][1] + v[2] * sv[i][2]; if (d > bd) { bd = d; best = i; } }
  return [best, Math.acos(Math.min(1, bd)) * 180 / Math.PI];
}
const cons = {}; let worst = 0, far = 0;
for (const f of J('constellations.json').features) {
  const id = f.id; if (!cons[id]) cons[id] = { name: f.properties.name, at: [], lines: [] };
  cons[id].at.push([+ra360(f.geometry.coordinates[0]).toFixed(2), +f.geometry.coordinates[1].toFixed(2)]);
}
const extra = [];        // line vertices that are not among the stars to magnitude 6: kept as places only
for (const f of J('constellations.lines.json').features) {
  const c = cons[f.id]; if (!c) { console.error('no constellation', f.id); continue; }
  for (const line of f.geometry.coordinates) {
    const ids = line.map(([lon, dec]) => {
      const [i, sep] = nearest(lon, dec); worst = Math.max(worst, sep);
      if (sep < 0.2) return i;
      far++; extra.push(+ra360(lon).toFixed(4), +dec.toFixed(4)); return -(extra.length / 2);      // -1, -2, ...: index into extra
    });
    for (let k = 0; k < ids.length - 1; k++) c.lines.push(ids[k], ids[k + 1]);
  }
}
const out = {
  _source: 'Stars to magnitude 6 and constellation lines: d3-celestial by Olaf Frohn (BSD 3-Clause). Distances: HYG database v4.0 by David Nash (CC BY-SA 4.0). Built by tools/build-sky.mjs.',
  stars, proper, extra, cons,
};
const file = new URL('../src/sky.json', import.meta.url);
fs.writeFileSync(file, JSON.stringify(out));
console.log(`${N} stars (${noDist} without a distance), ${Object.keys(cons).length} constellations, ${Object.values(cons).reduce((a, c) => a + c.lines.length / 2, 0)} line segments`);
console.log(`line vertices not matched to a star: ${far}; ${Object.keys(proper).length} proper names; ${(fs.statSync(file).size / 1024).toFixed(0)} KB`);
