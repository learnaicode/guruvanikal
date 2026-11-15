// Builds public/data from the canonical Guruvanikal extraction. Not one paragraph may be lost:
// the script fails unless all 7,955 source paragraphs are written, each exactly once, unchanged.
//
//   node tools/build-data.mjs
//
// Sources (read only):
//   GURUVANIKAL_PORTABLE_COMPLETE_2026-07-12/extracted_guruvanis/guruvanis.json   (Malayalam, canonical)
//   GURUVANIKAL_PORTABLE_COMPLETE_2026-07-12/month_wise_guruvanis/sections.json   (months and titles)
//   Guruvanikal English/*.docx                                                   (English renderings)
//   Guruvanikal English/ഗുരുമാർഗ്ഗം quotes.en-in.docx via the Sree lotus build    (the 1,001 sayings)

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { align, confident } from './align.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const FILES = path.resolve(ROOT, '..');
const SRC = path.join(FILES, 'GURUVANIKAL_PORTABLE_COMPLETE_2026-07-12');
const EN_DIR = path.join(FILES, 'Guruvanikal English');
const OUT = path.join(ROOT, 'public/data');
const EN_FILES = {
  GV1: 'ഗുരുവാണി All set 1 en.docx',
  GV2: 'ഗുരുവാണി All_set_2_till_may_1999.docx',
  GV3: 'ഗുരുവാണി All set 3.en.docx',
  GV4: 'ഗുരുവാണി All set 4 en.docx',
};
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const corpus = JSON.parse(fs.readFileSync(path.join(SRC, 'extracted_guruvanis/guruvanis.json'), 'utf8'));
const secFile = JSON.parse(fs.readFileSync(path.join(SRC, 'month_wise_guruvanis/sections.json'), 'utf8'));
const sections = (secFile.sections || secFile).slice().sort((a, b) => a.sequence - b.sequence);
const byId = new Map(corpus.paragraphs.map((p) => [p.id, p]));

// ---- English renderings, paragraph list per volume ----
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
// A line break inside a paragraph (<w:br/>) is a space, so words do not run together. In Volume 2
// the translator also used line breaks to set headings ("Guruvani", "February 1993") above the
// text in the same paragraph: with splitHeadings, such short unpunctuated opening lines become
// paragraphs of their own.
function docxParas(file, splitHeadings = false) {
  const xml = execFileSync('unzip', ['-p', file, 'word/document.xml'], { maxBuffer: 256 * 1024 * 1024 }).toString('utf8');
  const out = [];
  for (const m of xml.matchAll(/<w:p[ >][\s\S]*?<\/w:p>/g)) {
    const raw = decode([...m[0].replace(/<w:(br|cr)\s*\/>/g, '<w:t>\n</w:t>').replace(/<w:tab\s*\/>/g, '<w:t> </w:t>').matchAll(/<w:t(?: [^>]*)?>([\s\S]*?)<\/w:t>/g)].map((t) => t[1]).join(''));
    const lines = raw.split('\n').map((l) => l.replace(/\s+/g, ' ').trim()).filter(Boolean);
    if (!lines.length) continue;
    if (!splitHeadings) { out.push(lines.join(' ')); continue; }
    let cur = '';
    lines.forEach((l, i) => {
      const heading = l.length < 42 && !/[.,;:?!]$/.test(l) && !cur && lines[i + 1] && /^["'“‘(]?[A-Z]/.test(lines[i + 1]);
      if (heading) out.push(l); else cur += (cur ? ' ' : '') + l;
    });
    if (cur) out.push(cur);
  }
  return out;
}
const isDateHeading = (t) => t.length < 70 && /\b(19|20)\d\d\b/.test(t) && MONTHS.some((m) => t.includes(m)) && !/[.?!]$/.test(t);

// English for a volume: the plain paragraph list. Months are found by looking, from the last
// month onward, for the short line that carries this month's name and year.
function englishVolume(doc) {
  const f = path.join(EN_DIR, EN_FILES[doc]);
  return fs.existsSync(f) ? { ps: docxParas(f), at: 0 } : null;
}
function findHeading(E, months, year, from) {
  for (let j = from; j < E.ps.length; j++) {
    const t = E.ps[j];
    if (t.length < 70 && t.includes(String(year)) && months.some((m) => t.includes(m))) return j;
  }
  return -1;
}

// English may sit beside Malayalam only when the two demonstrably run in step. Equal counts are
// not proof, so every line is tested: question lines against question lines, answer lines against
// answer lines, headings against headings, and lengths in proportion throughout.
function aligned(ml, en) {
  let odd = 0, tested = 0;
  for (let i = 0; i < ml.length; i++) {
    const m = ml[i], e = en[i];
    const mq = /^ചോദ്യം/.test(m), eq = /^(Question|Q\s*[:.])/i.test(e);
    const ma = /^ഉത്തരം/.test(m), ea = /^(Answer|A\s*[:.])/i.test(e);
    if (mq !== eq || ma !== ea) return false;
    if (/\d{4}/.test(m) && m.length < 40 && !(m.match(/\d{4}/g) || []).every((y) => e.includes(y))) return false;
    if ((m.length < 45) !== (e.length < 90) && (m.length < 30 || e.length > 200)) return false;   // a heading beside a paragraph
    if (m.length >= 80) { tested++; const r = e.length / m.length; if (r < 0.55 || r > 2.4) odd++; }
  }
  return odd <= Math.max(1, tested * 0.06);
}

// A month's English shown as a whole must still be that month and nothing more: about the same
// number of paragraphs and a length in proportion to the Malayalam.
function plausible(ml, en) {
  const a = ml.join('').length, b = en.join('').length;
  return b > a * 0.6 && b < a * 2.2 && Math.abs(en.length - ml.length) <= Math.max(3, ml.length * 0.25);
}

// Volume 2: its English file is cut into paragraphs differently (speaker labels on their own
// lines, many heading lines left out), so it is lined up with the Gale-Church aligner. The length
// ratio and its spread are learned from Volume 1, which runs line for line.
let A2 = null, RATIO = 1.1, SPREAD = 9.5;
{
  const m1 = corpus.paragraphs.filter((p) => p.doc_id === 'GV1').map((p) => p.text);
  const e1 = docxParas(path.join(EN_DIR, EN_FILES.GV1));
  if (e1.length === m1.length) {
    let sm = 0, se = 0; m1.forEach((t, i) => { sm += t.length; se += e1[i].length; }); RATIO = se / sm;
    let v = 0, k = 0; m1.forEach((t, i) => { if (t.length > 30) { const d = e1[i].length - t.length * RATIO; v += d * d / t.length; k++; } }); SPREAD = v / k;
  }
  const m2 = corpus.paragraphs.filter((p) => p.doc_id === 'GV2').map((p) => p.text);
  const e2 = docxParas(path.join(EN_DIR, EN_FILES.GV2), true);
  A2 = { ...align(m2, e2, RATIO, SPREAD), ml: m2, ps: e2 };
}
const fullEnglish = [];   // every month's English, for the plain-text copies

// ---- walk the corpus in the order of the books ----
const years = [];        // { y, start, n, months: [...] }
const yearFiles = new Map(); // y -> { ids, ml, en }
const seen = new Set();
let g = 0;               // running paragraph number, in book order
const stats = { paired: 0, block: 0, none: 0, secPaired: 0, secBlock: 0, secNone: 0 };
const docFirst = new Set();
const enByDoc = {};
for (const d of Object.keys(EN_FILES)) enByDoc[d] = englishVolume(d);
const docSecCount = {};
for (const s of sections) docSecCount[s.doc_id] = (docSecCount[s.doc_id] || 0) + 1;
const docSecSeen = {};

for (const s of sections) {
  const y = s.date.year;
  let ids = s.paragraph_ids.slice();
  // the volume's own heading ("ഗുരുവാണി", paragraph 1) stands before the first month: keep it there
  let leadCount = 0;
  if (!docFirst.has(s.doc_id)) {
    docFirst.add(s.doc_id);
    const firstOrd = byId.get(ids[0]).ordinal;
    const lead = corpus.paragraphs.filter((p) => p.doc_id === s.doc_id && p.ordinal < firstOrd).map((p) => p.id);
    leadCount = lead.length;
    ids = lead.concat(ids);
  }
  // English for this month: from this month's heading to the next month's heading
  const k = (docSecSeen[s.doc_id] = (docSecSeen[s.doc_id] || 0) + 1) - 1;
  const E = enByDoc[s.doc_id];
  let enParas = null;
  if (E) {
    const j = findHeading(E, s.date.months.map((m) => m.english), y, E.at);
    if (j >= 0) {
      const nxt = sections.find((x) => x.doc_id === s.doc_id && x.sequence > s.sequence);
      let end = E.ps.length;
      if (nxt) { const j2 = findHeading(E, nxt.date.months.map((m) => m.english), nxt.date.year, j + 1); if (j2 > 0) end = j2; }
      enParas = E.ps.slice(k === 0 ? Math.max(0, j - leadCount) : j, end);
      E.at = j + 1; E.found = (E.found || 0) + 1;
    }
  }
  let en = null, enBlock = null;
  if (s.doc_id === 'GV2' && A2) {
    const ord = (id) => byId.get(id).ordinal - 1;
    const nxt = sections.find((x) => x.doc_id === 'GV2' && x.sequence > s.sequence);
    const j0 = A2.at[ord(ids[0])], j1 = nxt ? A2.at[ord(nxt.paragraph_ids[0])] : A2.ps.length;
    enBlock = A2.ps.slice(j0, j1);
    en = ids.map((id) => {
      const i = ord(id), e = A2.en[i], m = A2.ml[i];
      if (!e || A2.how[i] !== 'one') return null;
      return (m.length < 60 ? e.length < 110 : confident(m, e.replace(/^(Question|Answer|Guru|Disciple)\s*:\s*/i, ''), RATIO, SPREAD)) ? e : null;
    });
    const got = en.filter(Boolean).length;
    stats.paired += got; stats.v2 = (stats.v2 || 0) + got; stats.v2all = (stats.v2all || 0) + ids.length; stats.secPaired++;
    enParas = null;
  }
  if (en) { /* Volume 2, done above */ }
  else if (enParas && enParas.length === ids.length && aligned(ids.map((id) => byId.get(id).text), enParas)) { en = enParas; stats.paired += ids.length; stats.secPaired++; }
  else if (enParas && plausible(ids.map((id) => byId.get(id).text), enParas)) { enBlock = enParas; stats.block += ids.length; stats.secBlock++; }
  else { stats.none += ids.length; stats.secNone++; }

  // talks: the month is cut at each title the source marks
  const titleAt = new Map(s.all_titles.map((t) => [t.id, t]));
  const talks = [];   // { t: title, ti: where the title line is, o: first paragraph }
  let lastTitle = -9;
  ids.forEach((id, i) => {
    const t = titleAt.get(id);
    if (!t) return;
    if (i === lastTitle + 1 && talks.length) talks[talks.length - 1].t += ' · ' + t.text;  // title lines in a row are one title
    else talks.push({ t: t.text, ti: i, o: i });
    lastTitle = i;
  });
  if (!talks.length) talks.push({ t: null, ti: -1, o: 0 });
  // the month heading and anything before the first title open the first talk
  talks[0].o = 0;

  fullEnglish.push({ s, ids, en, enBlock });
  let Y = years[years.length - 1];
  if (!Y || Y.y !== y) { Y = { y, start: g, n: 0, months: [] }; years.push(Y); yearFiles.set(y, { ids: [], ml: [], en: [], blocks: {} }); }
  const F = yearFiles.get(y);
  const month = {
    ml: s.date.label,
    en: s.date.months.map((m) => m.english).join(' & ') + ' ' + y,
    vol: s.doc_id,
    start: g, n: ids.length,
    talks: talks.map((t, i) => ({
      t: t.t, te: en && t.ti >= 0 ? en[t.ti] : null,
      start: g + t.o, n: (i + 1 < talks.length ? talks[i + 1].o : ids.length) - t.o,
    })),
  };
  if (enBlock) F.blocks[Y.months.length] = enBlock;
  Y.months.push(month);
  ids.forEach((id, i) => {
    if (seen.has(id)) throw new Error('paragraph written twice: ' + id);
    seen.add(id);
    F.ids.push(id); F.ml.push(byId.get(id).text); F.en.push(en ? en[i] : null);
  });
  Y.n += ids.length; g += ids.length;
}

// ---- the proof: nothing lost, nothing changed ----
if (seen.size !== corpus.paragraphs.length || g !== corpus.paragraphs.length) throw new Error(`lost paragraphs: wrote ${g}, source has ${corpus.paragraphs.length}`);
const hash = (arr) => crypto.createHash('sha256').update(arr.join('\n')).digest('hex');
const srcHash = hash(corpus.paragraphs.map((p) => p.id + '\t' + p.text).sort());
const outRows = [];
for (const F of yearFiles.values()) F.ids.forEach((id, i) => outRows.push(id + '\t' + F.ml[i]));
const outHash = hash(outRows.sort());
if (srcHash !== outHash) throw new Error('text changed between source and output');
const talkCount = years.reduce((a, Y) => a + Y.months.reduce((b, m) => b + m.talks.length, 0), 0);
for (const Y of years) for (const m of Y.months) {
  let at = m.start;
  for (const t of m.talks) { if (t.start !== at || t.n < 1) throw new Error('talk ranges broken in ' + m.ml); at += t.n; }
  if (at !== m.start + m.n) throw new Error('talks do not fill ' + m.ml);
}

fs.mkdirSync(path.join(OUT, 'y'), { recursive: true });
for (const [y, F] of yearFiles) {
  const anyEn = F.en.some(Boolean);
  fs.writeFileSync(path.join(OUT, 'y', y + '.json'), JSON.stringify({ ids: F.ids, ml: F.ml, en: anyEn ? F.en : null, blocks: Object.keys(F.blocks).length ? F.blocks : null }));
}
fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify({
  total: g, months: sections.length, talks: talkCount, sha256: outHash,
  volumes: corpus.documents.map((d) => ({ id: d.doc_id, n: d.paragraph_count })),
  years,
}));

// ---- the complete English as plain text, one file per month, to read outside the site ----
const TXT = path.join(ROOT, 'english-text');
fs.rmSync(TXT, { recursive: true, force: true });
fs.mkdirSync(TXT, { recursive: true });
const volText = {};
let nTxt = 0, noEn = [];
for (const { s, ids, en, enBlock } of fullEnglish) {
  const label = s.date.months.map((m) => m.english).join(' & ') + ' ' + s.date.year;
  let body;
  if (enBlock) body = enBlock.join('\n\n');                                             // the month's English in full, as the translator wrote it
  else if (en) body = ids.map((id, i) => `[${id}] ${en[i]}`).join('\n\n');               // line for line, with source numbers
  else { noEn.push(label + ' (' + s.doc_id + ')'); continue; }
  const head = `GURUVANIKAL · ${label} · Volume ${s.doc_id.slice(2)}\nMalayalam source paragraphs ${ids[0]} to ${ids[ids.length - 1]}\n${enBlock ? 'English of the whole month, in the translator\'s own paragraphs.' : 'English line for line; each paragraph carries its Malayalam source number.'}\n\n`;
  const name = `${s.date.sort_key || s.date.year}_${String(s.sequence).padStart(3, '0')}_${label.replace(/[^A-Za-z0-9]+/g, '-')}_${s.doc_id}.txt`;
  fs.writeFileSync(path.join(TXT, name), head + body + '\n');
  (volText[s.doc_id] = volText[s.doc_id] || []).push(head + body);
  nTxt++;
}
for (const [d, parts] of Object.entries(volText)) fs.writeFileSync(path.join(TXT, `_Volume-${d.slice(2)}-complete.txt`), parts.join('\n\n' + '='.repeat(60) + '\n\n') + '\n');
console.log(`English text copies: ${nTxt} month files in english-text/. Months with no English found: ${noEn.length ? noEn.join(', ') : 'none'}.`);
if (A2) console.log(`Volume 2 aligned: ${JSON.stringify({ ...A2.tally, enAlone: A2.tally.enAlone.length })}; ${stats.v2} of ${stats.v2all} paragraphs shown line for line, and every month also carries its full English.`);

// the 1,001 sayings, already built and proofread for the Lotus of Sree
const say = path.join(FILES, 'Amma Eagle Story/lotus-threejs/public/guruvanis.json');
fs.copyFileSync(say, path.join(OUT, 'sayings.json'));
const nSay = JSON.parse(fs.readFileSync(say, 'utf8')).items.length;

console.log(`${g} paragraphs, ${years.length} years, ${sections.length} months, ${talkCount} talks. sha256 ${outHash.slice(0, 16)} matches the source.`);
console.log(`English: ${stats.paired} paragraphs paired line by line (${stats.secPaired} months), ${stats.block} shown month by month (${stats.secBlock} months), ${stats.none} Malayalam only (${stats.secNone} months).`);
for (const d of Object.keys(EN_FILES)) { const E = enByDoc[d]; console.log(`  ${d}: English month headings found ${E ? E.found || 0 : '-'} of ${docSecCount[d]}`); }
console.log(`${nSay} sayings copied.`);
