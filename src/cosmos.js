import * as THREE from 'three';
import { G, LOW } from './gl.js';
import SKY from './sky.json';
import { AYAN_J2000, RASHIS, NAKSHATRAS, GRAHAS, skyNow } from './ephem.js';

// The cosmos around the lotus: the real night sky.
//
//   the stars ........... all 5,044 stars to magnitude 6 (every star the eye can see), each in its true
//                         direction (J2000) with its true colour and brightness. Depth follows each
//                         star's measured distance, compressed, so the sky can be travelled through.
//   the figures ......... the lines of all 88 constellations; the twelve of the zodiac drawn in gold
//   the zodiac .......... the ecliptic, the path of the Sun, runs as a great ring around the lotus. On it
//                         the twelve rashis (30° each) and the twenty-seven nakshatras (13°20' each) of
//                         the sidereal zodiac of Indian astrology, measured from the point opposite
//                         Chithira (Spica): the Lahiri ayanamsa.
//   the grahas .......... the Sun, Moon, planets, Rahu and Ketu where they stand at this very moment
//
// Seen from the lotus every direction is exact. Behind the stars, the Milky Way.

const R = 2400;                                   // the ring of the zodiac
const EPS = THREE.MathUtils.degToRad(23.4393);    // tilt of the Earth's axis at J2000
const D2R = Math.PI / 180;
const ZODIAC = ['Ari', 'Tau', 'Gem', 'Cnc', 'Leo', 'Vir', 'Lib', 'Sco', 'Sgr', 'Cap', 'Aqr', 'Psc'];
// the yogatara (junction star) of each nakshatra, by right ascension (hours) and declination
const YOGATARA = [[1.91, 20.81], [2.83, 27.26], [3.79, 24.11], [4.60, 16.51], [5.59, 9.93], [5.92, 7.41], [7.76, 28.03], [8.74, 18.15], [8.78, 6.42],
  [10.14, 11.97], [11.24, 20.52], [11.82, 14.57], [12.50, -16.52], [13.42, -11.16], [14.26, 19.18], [14.85, -16.04], [16.01, -22.62], [16.49, -26.43],
  [17.56, -37.10], [18.35, -29.83], [18.92, -26.30], [19.85, 8.87], [20.63, 14.60], [22.88, -7.58], [23.08, 15.21], [0.22, 15.18], [1.23, 7.58]];
const COL = { b: [0.74, 0.84, 1.0], w: [0.96, 0.97, 1.0], y: [1.0, 0.95, 0.84], o: [1.0, 0.84, 0.64], r: [1.0, 0.7, 0.52] };
// colour of a star from its B-V index
const BV = [[-0.3, [0.62, 0.74, 1.0]], [0.0, [0.8, 0.87, 1.0]], [0.3, [0.97, 0.97, 1.0]], [0.62, [1.0, 0.95, 0.84]], [1.0, [1.0, 0.84, 0.62]], [1.5, [1.0, 0.7, 0.48]], [2.2, [1.0, 0.58, 0.4]]];
function bvCol(bv) {
  if (bv <= BV[0][0]) return BV[0][1];
  for (let i = 1; i < BV.length; i++) if (bv <= BV[i][0]) { const t = (bv - BV[i - 1][0]) / (BV[i][0] - BV[i - 1][0]); return BV[i - 1][1].map((c, k) => c + (BV[i][1][k] - c) * t); }
  return BV[BV.length - 1][1];
}
// depth: 1 parsec to 1,000 parsecs is laid between 1,500 and 3,500 units from the lotus
const depth = (pc) => (pc > 0 ? 1500 + 2000 * Math.min(1, Math.log10(1 + pc) / 3) : 2600);
// a point on the ecliptic of J2000 (longitude, latitude in degrees) in the scene
function eclVec(lon, lat, r, out = new THREE.Vector3()) {
  const l = lon * D2R, b = lat * D2R;
  return out.set(Math.cos(b) * Math.cos(l) * r, Math.sin(b) * r, -Math.cos(b) * Math.sin(l) * r);
}

// equatorial (RA, Dec) to the scene: the ecliptic becomes the horizontal ring around the lotus
function eqVec(raH, decD) {
  const a = (raH / 24) * Math.PI * 2, d = THREE.MathUtils.degToRad(decD);
  return [Math.cos(d) * Math.cos(a), Math.cos(d) * Math.sin(a), Math.sin(d)];
}
function toScene([x, y, z], r, out = new THREE.Vector3()) {
  const ye = y * Math.cos(EPS) + z * Math.sin(EPS), ze = -y * Math.sin(EPS) + z * Math.cos(EPS);
  return out.set(x, ze, -ye).normalize().multiplyScalar(r);
}
// galactic (l, b in degrees) to equatorial, for the Milky Way
function galVec(l, b) {
  const L = THREE.MathUtils.degToRad(l), B = THREE.MathUtils.degToRad(b);
  const g = [Math.cos(B) * Math.cos(L), Math.cos(B) * Math.sin(L), Math.sin(B)];
  const T = [[-0.0548755604, -0.8734370902, -0.4838350155], [0.4941094279, -0.4448296300, 0.7469822445], [-0.8676661490, -0.1980763734, 0.4559837762]];
  return [0, 1, 2].map((i) => T[0][i] * g[0] + T[1][i] * g[1] + T[2][i] * g[2]);
}
const gauss = () => { let u = 0; for (let i = 0; i < 4; i++) u += Math.random(); return (u - 2) / 0.577; };

// ---------- stars drawn as they look: a sharp core, a soft halo, and faint rays on the brightest
function starMaterial(fixedPx, boost = 1) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: G.uTime, uPR: { value: Math.min(devicePixelRatio, LOW ? 1.25 : 1.75) }, uFade: { value: 1 }, uBoost: { value: boost } },
    vertexShader: /* glsl */ `
      attribute float aMag; attribute vec3 aCol; attribute float aSeed;
      uniform float uTime, uPR, uFade, uBoost; varying vec3 vCol; varying float vB, vSpike, vSize;
      void main(){
        vec4 mv = modelViewMatrix*vec4(position, 1.0);
        gl_Position = projectionMatrix*mv;
        float b = pow(2.512, -(aMag - 1.0))*uBoost;                  // brightness, 1 at magnitude 1
        float tw = 1.0 + 0.12*sin(uTime*(1.3 + aSeed*2.0) + aSeed*90.0);   // a gentle twinkle
        vB = clamp(pow(b, 0.55), 0.1, 2.4)*tw*uFade;       // as the eye sees: faint stars still show
        vCol = aCol; vSpike = smoothstep(0.6, 2.5, b);
        float px = ${fixedPx ? 'clamp(length(position)/max(-mv.z, 1.0), 0.75, 4.0)' : 'clamp(2600.0/max(-mv.z, 1.0), 0.45, 1.6)'};
        gl_PointSize = max(clamp(3.5 + 9.0*sqrt(b), 2.5, 26.0)*uPR*px, 3.0); vSize = gl_PointSize;
      }`,
    fragmentShader: /* glsl */ `
      varying vec3 vCol; varying float vB, vSpike, vSize;
      void main(){
        vec2 p = gl_PointCoord - 0.5; float r = length(p); float d = r*vSize;   // d: distance from the centre in pixels
        float core = exp(-d*d*0.55), halo = exp(-r*r*32.0)*0.28;
        float spike = (exp(-abs(p.x)*70.0)*exp(-abs(p.y)*7.0) + exp(-abs(p.y)*70.0)*exp(-abs(p.x)*7.0))*0.35*vSpike;
        float f = (core + halo + spike)*smoothstep(0.5, 0.42, r);
        vec3 c = mix(vCol, vec3(1.0), core*0.6);
        gl_FragColor = vec4(c*f*vB, 1.0);
      }`,
  });
}
function pointsGeo(list) {
  const n = list.length, pos = new Float32Array(n * 3), mag = new Float32Array(n), col = new Float32Array(n * 3), sd = new Float32Array(n);
  list.forEach((s, i) => { pos.set([s.p.x, s.p.y, s.p.z], i * 3); mag[i] = s.mag; col.set(s.col, i * 3); sd[i] = Math.random(); });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aMag', new THREE.BufferAttribute(mag, 1));
  g.setAttribute('aCol', new THREE.BufferAttribute(col, 3)); g.setAttribute('aSeed', new THREE.BufferAttribute(sd, 1));
  return g;
}

// ---------- names, drawn crisply and always the same size on screen
function label(lines, glow, size = 1) {
  const c = document.createElement('canvas'), x = c.getContext('2d');
  const two = lines.length > 1, W = two ? 420 : 340, H = two ? 124 : 56; c.width = W; c.height = H;
  x.textAlign = 'center'; x.textBaseline = 'middle'; x.shadowColor = glow; x.shadowBlur = 12;
  lines.forEach(([text, font, col], i) => { x.font = font; x.fillStyle = col; x.fillText(text, W / 2, two ? 36 + i * 52 : H / 2); });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, sizeAttenuation: false, opacity: 0.9, toneMapped: false }));
  const s = (LOW ? 0.27 : 0.24) * size * (W / 420); sp.scale.set(s, s * H / W, 1);
  return sp;
}
function discTexture(stops) {
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); stops.forEach(([o, col]) => g.addColorStop(o, col));
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function createCosmos() {
  const group = new THREE.Group();
  const v = new THREE.Vector3();
  const ML = '600 38px "Noto Serif Malayalam", serif', EN = '500 34px "Cormorant Garamond", Georgia, serif', IT = 'italic 400 30px "Cormorant Garamond", Georgia, serif';

  // 1. every star the eye can see
  const S = SKY.stars, NS = S.length / 5, P = [];
  for (let i = 0; i < NS; i++) P.push({ p: toScene(eqVec(S[i * 5] / 15, S[i * 5 + 1]), depth(S[i * 5 + 4])), mag: S[i * 5 + 2], col: bvCol(S[i * 5 + 3]) });
  const stars = new THREE.Points(pointsGeo(P), starMaterial(true, 1.3));
  stars.frustumCulled = false; stars.renderOrder = 2; group.add(stars);
  const starAt = (i) => (i >= 0 ? P[i].p : toScene(eqVec(SKY.extra[(-i - 1) * 2] / 15, SKY.extra[(-i - 1) * 2 + 1]), 2600));
  function nearestStar(raH, dec) {
    toScene(eqVec(raH, dec), 1, v); let best = 0, bd = -2;
    for (let i = 0; i < NS; i++) { const p = P[i].p, d = (p.x * v.x + p.y * v.y + p.z * v.z) / p.length() - (P[i].mag > 5.2 ? 0.0002 : 0); if (d > bd) { bd = d; best = i; } }
    return best;
  }

  // 2. the figures of all 88 constellations, as in the star maps; the zodiac in gold
  const seg = [], segCol = [];
  for (const [id, c] of Object.entries(SKY.cons)) {
    const col = ZODIAC.includes(id) ? [1.0, 0.78, 0.42] : [0.42, 0.6, 1.0];
    for (const i of c.lines) { const p = starAt(i); seg.push(p.x, p.y, p.z); segCol.push(...col); }
  }
  const lg = new THREE.BufferGeometry();
  lg.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3)); lg.setAttribute('color', new THREE.Float32BufferAttribute(segCol, 3));
  const lines = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending }));
  lines.frustumCulled = false; group.add(lines);

  // 3. the ecliptic with the twelve rashis and the twenty-seven nakshatras of the sidereal zodiac
  const ring = [];
  for (let i = 0; i <= 360; i++) { eclVec(i, 0, R, v); ring.push(v.x, v.y, v.z); }
  const eclMat = new THREE.LineBasicMaterial({ color: new THREE.Color(0.9, 0.5, 0.6), transparent: true, opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending });
  const ecl = new THREE.Line(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(ring, 3)), eclMat);
  ecl.frustumCulled = false; group.add(ecl);
  const ticks = [];
  const tick = (lon, h) => { eclVec(lon, -h, R, v); ticks.push(v.x, v.y, v.z); eclVec(lon, h, R, v); ticks.push(v.x, v.y, v.z); };
  for (let k = 0; k < 12; k++) tick(AYAN_J2000 + k * 30, 5);
  for (let k = 0; k < 27; k++) tick(AYAN_J2000 + k * (360 / 27), 1.3);
  const tk = new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(ticks, 3)), eclMat);
  tk.frustumCulled = false; group.add(tk);

  // 4. the Milky Way: a river of faint stars and glowing dust along the galactic plane
  const far = [];
  const NB = LOW ? 9000 : 22000;
  for (let i = 0; i < NB; i++) {
    let e;
    if (Math.random() < 0.6) {
      const l = Math.random() < 0.35 ? gauss() * 40 : Math.random() * 360, b = gauss() * (Math.random() < 0.7 ? 4 : 12);
      e = galVec(l, b);
    } else { const u = Math.random() * 2 - 1, t = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u); e = [s * Math.cos(t), s * Math.sin(t), u]; }
    const tC = Math.random();
    far.push({ p: toScene(e, 3700 + Math.random() * 1900), mag: 5.4 + Math.pow(Math.random(), 0.45) * 2.2, col: tC < 0.3 ? COL.b : tC < 0.75 ? COL.w : tC < 0.94 ? COL.y : COL.o });
  }
  const farStars = new THREE.Points(pointsGeo(far), starMaterial(false, 2.6));
  farStars.frustumCulled = false; group.add(farStars);
  const NG = LOW ? 16000 : 42000, gp = new Float32Array(NG * 3), gc = new Float32Array(NG * 3);
  for (let i = 0; i < NG; i++) {
    const l = Math.random() < 0.45 ? gauss() * 35 : Math.random() * 360;
    const off = Math.abs(((l + 540) % 360) - 180);
    const b = gauss() * (3 + 9 * Math.exp(-(off ** 2) / 3000) * (off < 60 ? 1 : 0.4)) * 0.6;
    toScene(galVec(l, b), 4200 + Math.random() * 1400, v); gp.set([v.x, v.y, v.z], i * 3);
    const warm = Math.exp(-(off ** 2) / 2500);
    gc.set([0.35 + 0.35 * warm, 0.42 + 0.2 * warm, 0.75 - 0.1 * warm].map((c) => c * (0.6 + Math.random() * 0.4)), i * 3);
  }
  const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.BufferAttribute(gp, 3)); gg.setAttribute('color', new THREE.BufferAttribute(gc, 3));
  const soft = discTexture([[0, 'rgba(255,255,255,1)'], [1, 'rgba(255,255,255,0)']]);
  const glow = new THREE.Points(gg, new THREE.PointsMaterial({ map: soft, size: LOW ? 16 : 13, sizeAttenuation: false, vertexColors: true, transparent: true, opacity: 0.045, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.frustumCulled = false; group.add(glow);
  const cloud = discTexture([[0, 'rgba(255,255,255,0.5)'], [0.4, 'rgba(255,255,255,0.12)'], [1, 'rgba(255,255,255,0)']]);
  for (let i = 0; i < (LOW ? 40 : 70); i++) {
    const l = i < 25 ? gauss() * 28 : Math.random() * 360, b = gauss() * 3.5;
    const near = Math.exp(-((((l + 540) % 360) - 180) ** 2) / 2200);
    const tint = [[0.5, 0.6, 1.0], [0.62, 0.48, 1.0], [0.9, 0.62, 0.8], [1.0, 0.82, 0.6]][(Math.random() * 4) | 0];
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloud, color: new THREE.Color(...tint), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.05 + 0.09 * near, rotation: Math.random() * 6.28 }));
    toScene(galVec(l, b), 5000, sp.position); sp.scale.setScalar(5000 * (0.18 + Math.random() * 0.22) * (1 + near));
    group.add(sp);
  }

  // 5. the names
  const names = new THREE.Group(); group.add(names);
  RASHIS.forEach(([ml, mlScript, en], k) => {                 // each rashi over the middle of its own 30°
    const sp = label([[mlScript, ML, '#ffe9a8'], [`${ml} · ${en}`, EN, '#f3d9b0']], 'rgba(200,90,40,0.8)');
    eclVec(AYAN_J2000 + k * 30 + 15, 8.5, R, sp.position); names.add(sp);
  });
  NAKSHATRAS.forEach(([en, ml], k) => {                        // each nakshatra at its yogatara
    const sp = label([[ml, '600 30px "Noto Serif Malayalam", serif', '#ffcf7a'], [en, IT, 'rgba(255,230,190,0.85)']], 'rgba(255,170,60,0.55)', 0.74);
    sp.center.set(0.5, -0.12); sp.position.copy(P[nearestStar(...YOGATARA[k])].p); names.add(sp);
  });
  if (!LOW) {
    for (const [id, c] of Object.entries(SKY.cons)) c.at.forEach(([ra, dec], n) => {     // the 88 constellations
      const sp = label([[id === 'Ser' ? (n ? 'Serpens Cauda' : 'Serpens Caput') : c.name, EN, ZODIAC.includes(id) ? 'rgba(255,215,150,0.75)' : 'rgba(170,200,255,0.62)']], 'rgba(30,60,160,0.8)', 0.8);
      toScene(eqVec(ra / 15, dec), R, sp.position); names.add(sp);
    });
    for (const [i, name] of Object.entries(SKY.proper)) if (P[i].mag < 1.7) {          // the brightest stars by name
      const sp = label([[name, IT, 'rgba(255,255,255,0.8)']], 'rgba(0,0,0,0.9)', 0.62);
      sp.center.set(0.5, 1.5); sp.position.copy(P[i].p); names.add(sp);
    }
  }

  // 6. the grahas, where they stand now
  const GLOOK = { sun: ['#fff1c0', '#ffb347', 0.085], moon: ['#ffffff', '#cfd8ff', 0.06], mars: ['#ffd0b0', '#ff5a30', 0.03], mercury: ['#ffffff', '#9fe0c0', 0.024], jupiter: ['#fff6d8', '#ffc870', 0.036],
    venus: ['#ffffff', '#fff0d0', 0.036], saturn: ['#fff0c8', '#c9a560', 0.03], rahu: ['#b0a0d0', '#5a4a90', 0.026], ketu: ['#d0a0a0', '#904a4a', 0.026] };
  const grahas = new THREE.Group(); group.add(grahas);
  const gObj = {};
  GRAHAS.forEach(([k, en, ml]) => {
    const [c0, c1, size] = GLOOK[k];
    const disc = new THREE.Sprite(new THREE.SpriteMaterial({ map: discTexture([[0, c0], [0.16, c0], [0.3, c1], [1, 'rgba(0,0,0,0)']]), transparent: true, depthWrite: false, sizeAttenuation: false, blending: THREE.AdditiveBlending, toneMapped: false }));
    disc.scale.setScalar(size * (LOW ? 1.2 : 1)); disc.renderOrder = 3;
    const name = label([[ml, '600 30px "Noto Serif Malayalam", serif', '#ffffff'], [en, IT, 'rgba(255,255,255,0.85)']], 'rgba(0,0,0,0.95)', 0.74);
    name.center.set(0.5, 1.25);
    grahas.add(disc); names.add(name); gObj[k] = { disc, name };
  });
  let now = null, nextAt = 0;
  function update() {
    const t = Date.now(); if (t < nextAt) return; nextAt = t + 20000;
    now = skyNow(new Date(t));
    for (const [k] of GRAHAS) { eclVec(now[k].lon, now[k].lat, R * 0.96, gObj[k].disc.position); gObj[k].name.position.copy(gObj[k].disc.position); }
  }
  update();

  return {
    group,
    showNames(on) { names.visible = on; },
    get now() { return now; },
    update,
  };
}
