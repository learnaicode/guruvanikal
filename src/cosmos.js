import * as THREE from 'three';
import { G, LOW } from './gl.js';

// The cosmos around the lotus: a deep blue sky with the real stars of the twelve rashis (the zodiac)
// and the yogataras of the twenty-seven nakshatras, set where they stand in the sky (right ascension
// and declination, J2000), turned so that the ecliptic, the path of the Sun, runs as a great ring
// around the lotus. Behind them, the Milky Way and thousands of stars at many depths.
//
// Star positions are from the standard star catalogues, rounded to about a tenth of a degree; colours
// follow each star's known colour. The many fainter stars and the Milky Way glow are drawn to look
// like the sky, not star by star.

const R = 2400;                                   // the sphere of the constellations
const EPS = THREE.MathUtils.degToRad(23.44);      // tilt of the Earth's axis
const AYANAMSA = 24.2;                            // sidereal zodiac offset (Lahiri), degrees, for 2026

// colour: b blue-white, w white, y yellow-white, o orange, r red-orange
const COL = { b: [0.74, 0.84, 1.0], w: [0.96, 0.97, 1.0], y: [1.0, 0.95, 0.84], o: [1.0, 0.84, 0.64], r: [1.0, 0.7, 0.52] };

// [name, RA hours, Dec degrees, magnitude, colour]
const STARS = {
  // Aries
  hamal: [2.12, 23.46, 2.0, 'o'], sheratan: [1.91, 20.81, 2.6, 'w'], mesarthim: [1.89, 19.29, 3.9, 'w'], ari41: [2.83, 27.26, 3.6, 'b'], ari35: [2.73, 27.71, 4.7, 'b'],
  // Taurus
  aldebaran: [4.60, 16.51, 0.9, 'r'], elnath: [5.44, 28.61, 1.7, 'b'], tauZeta: [5.63, 21.14, 3.0, 'b'], tauGamma: [4.33, 15.63, 3.6, 'o'], tauDelta: [4.38, 17.54, 3.8, 'o'],
  tauEps: [4.48, 19.18, 3.5, 'o'], tauTheta: [4.48, 15.87, 3.4, 'w'], tauLambda: [4.01, 12.49, 3.4, 'b'], tauOmicron: [3.41, 9.03, 3.6, 'y'],
  alcyone: [3.79, 24.11, 2.9, 'b'], atlas: [3.82, 24.05, 3.6, 'b'], electra: [3.75, 24.11, 3.7, 'b'], maia: [3.76, 24.37, 3.9, 'b'], merope: [3.77, 23.95, 4.2, 'b'], taygeta: [3.75, 24.47, 4.3, 'b'], pleione: [3.82, 24.14, 5.0, 'b'],
  // Gemini
  castor: [7.58, 31.89, 1.6, 'w'], pollux: [7.76, 28.03, 1.1, 'o'], alhena: [6.63, 16.40, 1.9, 'w'], gemMu: [6.38, 22.51, 2.9, 'r'], gemEta: [6.25, 22.51, 3.3, 'r'],
  mebsuta: [6.73, 25.13, 3.0, 'y'], wasat: [7.34, 21.98, 3.5, 'w'], gemZeta: [7.07, 20.57, 3.9, 'y'], gemXi: [6.75, 12.90, 3.4, 'w'], gemLambda: [7.30, 16.54, 3.6, 'w'],
  gemKappa: [7.74, 24.40, 3.6, 'y'], gemTau: [7.19, 30.25, 4.4, 'o'], gemTheta: [6.88, 33.96, 3.6, 'w'],
  // Cancer
  cncBeta: [8.28, 9.19, 3.5, 'o'], cncDelta: [8.74, 18.15, 3.9, 'o'], cncGamma: [8.72, 21.47, 4.7, 'w'], cncIota: [8.78, 28.76, 4.0, 'y'], acubens: [8.97, 11.86, 4.3, 'w'],
  // Leo
  regulus: [10.14, 11.97, 1.4, 'b'], leoEta: [10.12, 16.76, 3.5, 'w'], algieba: [10.33, 19.84, 2.0, 'o'], adhafera: [10.28, 23.42, 3.4, 'y'], leoMu: [9.88, 26.01, 3.9, 'o'],
  leoEps: [9.76, 23.77, 3.0, 'y'], zosma: [11.24, 20.52, 2.6, 'w'], chertan: [11.24, 15.43, 3.3, 'w'], denebola: [11.82, 14.57, 2.1, 'w'],
  // Virgo
  spica: [13.42, -11.16, 1.0, 'b'], porrima: [12.69, -1.45, 2.7, 'w'], virDelta: [12.93, 3.40, 3.4, 'r'], vindemiatrix: [13.04, 10.96, 2.8, 'y'], virZeta: [13.58, -0.60, 3.4, 'w'],
  zavijava: [11.84, 1.76, 3.6, 'y'], virEta: [12.33, -0.67, 3.9, 'w'], virIota: [14.27, -6.00, 4.1, 'y'], virMu: [14.72, -5.66, 3.9, 'w'], vir109: [14.77, 1.89, 3.7, 'w'],
  // Libra
  zubenelgenubi: [14.85, -16.04, 2.8, 'w'], zubeneschamali: [15.28, -9.38, 2.6, 'b'], libGamma: [15.59, -14.79, 3.9, 'o'], libSigma: [15.07, -25.28, 3.3, 'r'], libUpsilon: [15.62, -28.14, 3.6, 'o'],
  // Scorpius
  antares: [16.49, -26.43, 1.0, 'r'], acrab: [16.09, -19.81, 2.6, 'b'], dschubba: [16.01, -22.62, 2.3, 'b'], scoPi: [15.98, -26.11, 2.9, 'b'], scoSigma: [16.35, -25.59, 2.9, 'b'],
  scoTau: [16.60, -28.22, 2.8, 'b'], scoEps: [16.84, -34.29, 2.3, 'o'], scoMu: [16.86, -38.05, 3.0, 'b'], scoZeta: [16.90, -42.36, 3.6, 'o'], scoEta: [17.20, -43.24, 3.3, 'w'],
  sargas: [17.62, -43.00, 1.9, 'y'], scoIota: [17.79, -40.13, 3.0, 'y'], scoKappa: [17.71, -39.03, 2.4, 'b'], shaula: [17.56, -37.10, 1.6, 'b'], lesath: [17.51, -37.30, 2.7, 'b'],
  // Sagittarius
  kausAustralis: [18.40, -34.38, 1.8, 'b'], kausMedia: [18.35, -29.83, 2.7, 'o'], kausBorealis: [18.47, -25.42, 2.8, 'o'], alnasl: [18.10, -30.42, 3.0, 'o'], sgrPhi: [18.76, -26.99, 3.2, 'b'],
  nunki: [18.92, -26.30, 2.0, 'b'], sgrTau: [19.12, -27.67, 3.3, 'o'], ascella: [19.04, -29.88, 2.6, 'w'],
  // Capricornus
  algedi: [20.30, -12.54, 3.6, 'y'], dabih: [20.35, -14.78, 3.1, 'y'], capPsi: [20.77, -25.27, 4.1, 'w'], capOmega: [20.86, -26.92, 4.1, 'r'], capZeta: [21.44, -22.41, 3.7, 'y'],
  nashira: [21.67, -16.66, 3.7, 'w'], denebAlgedi: [21.78, -16.13, 2.9, 'w'], capTheta: [21.10, -17.23, 4.1, 'w'], capIota: [21.37, -16.83, 4.3, 'y'],
  // Aquarius
  sadalmelik: [22.10, -0.32, 3.0, 'y'], sadalsuud: [21.53, -5.57, 2.9, 'y'], aqrGamma: [22.36, -1.39, 3.8, 'w'], aqrZeta: [22.48, -0.02, 3.6, 'w'], aqrEta: [22.59, -0.12, 4.0, 'b'],
  aqrPi: [22.42, 1.38, 4.7, 'b'], aqrTheta: [22.28, -7.78, 4.2, 'y'], aqrLambda: [22.88, -7.58, 3.7, 'r'], skat: [22.91, -15.82, 3.3, 'w'], aqrEps: [20.79, -9.50, 3.8, 'w'],
  aqrPsi: [23.26, -9.09, 4.2, 'o'], aqr88: [23.16, -21.17, 3.7, 'o'],
  // Pisces
  alrescha: [2.03, 2.76, 3.8, 'w'], pscEta: [1.52, 15.35, 3.6, 'y'], pscOmicron: [1.76, 9.16, 4.3, 'y'], pscEps: [1.05, 7.89, 4.3, 'y'], pscDelta: [0.81, 7.59, 4.4, 'o'],
  pscOmega: [23.99, 6.86, 4.0, 'w'], pscIota: [23.67, 5.63, 4.1, 'w'], pscTheta: [23.47, 6.38, 4.3, 'o'], pscGamma: [23.29, 3.28, 3.7, 'y'], pscKappa: [23.45, 1.26, 4.9, 'w'],
  pscLambda: [23.70, 1.78, 4.5, 'w'], pscNu: [1.69, 5.49, 4.4, 'o'], pscMu: [1.50, 6.14, 4.8, 'o'], pscZetaR: [1.23, 7.58, 5.2, 'w'], pscChi: [1.19, 21.03, 4.7, 'o'], pscPhi: [1.23, 24.58, 4.7, 'o'],
  // Orion, which holds Makayiram and Thiruvathira
  betelgeuse: [5.92, 7.41, 0.5, 'r'], rigel: [5.24, -8.20, 0.1, 'b'], bellatrix: [5.42, 6.35, 1.6, 'b'], alnitak: [5.68, -1.94, 1.8, 'b'], alnilam: [5.60, -1.20, 1.7, 'b'],
  mintaka: [5.53, -0.30, 2.2, 'b'], saiph: [5.80, -9.67, 2.1, 'b'], meissa: [5.59, 9.93, 3.4, 'b'],
  // Pegasus, which holds Pooruruttathi and Uthrattathi
  markab: [23.08, 15.21, 2.5, 'b'], scheat: [23.06, 28.08, 2.4, 'r'], algenib: [0.22, 15.18, 2.8, 'b'], alpheratz: [0.14, 29.09, 2.1, 'b'],
  // other nakshatra stars
  aylHya: [8.78, 6.42, 3.4, 'y'], algorab: [12.50, -16.52, 2.9, 'w'], gienah: [12.26, -17.54, 2.6, 'b'], crvBeta: [12.57, -23.40, 2.7, 'y'], crvEps: [12.17, -22.62, 3.0, 'o'],
  arcturus: [14.26, 19.18, -0.05, 'o'], altair: [19.85, 8.87, 0.8, 'w'], tarazed: [19.77, 10.61, 2.7, 'o'], alshain: [19.92, 6.41, 3.7, 'y'],
  rotanev: [20.63, 14.60, 3.6, 'y'], sualocin: [20.66, 15.91, 3.8, 'b'], delGamma: [20.78, 16.12, 3.9, 'y'], delDelta: [20.73, 15.07, 4.4, 'w'],
};

// the twelve rashis: English, Malayalam, and the lines of each figure
const RASHI = [
  ['Aries', 'മേടം', [['ari41', 'hamal', 'sheratan', 'mesarthim']]],
  ['Taurus', 'ഇടവം', [['tauOmicron', 'tauLambda', 'tauGamma', 'tauTheta', 'aldebaran', 'tauZeta'], ['tauGamma', 'tauDelta', 'tauEps', 'elnath']]],
  ['Gemini', 'മിഥുനം', [['gemTheta', 'castor', 'gemTau', 'mebsuta', 'gemMu', 'gemEta'], ['castor', 'pollux', 'gemKappa', 'wasat', 'gemZeta', 'alhena'], ['wasat', 'gemLambda', 'gemXi']]],
  ['Cancer', 'കർക്കടകം', [['cncBeta', 'cncDelta', 'cncGamma', 'cncIota'], ['cncDelta', 'acubens']]],
  ['Leo', 'ചിങ്ങം', [['regulus', 'leoEta', 'algieba', 'adhafera', 'leoMu', 'leoEps'], ['algieba', 'zosma', 'denebola', 'chertan', 'regulus'], ['zosma', 'chertan']]],
  ['Virgo', 'കന്നി', [['zavijava', 'virEta', 'porrima', 'virDelta', 'vindemiatrix'], ['porrima', 'spica'], ['virDelta', 'virZeta', 'spica'], ['virZeta', 'vir109'], ['spica', 'virIota', 'virMu']]],
  ['Libra', 'തുലാം', [['libSigma', 'zubenelgenubi', 'zubeneschamali', 'libGamma', 'zubenelgenubi'], ['libGamma', 'libUpsilon']]],
  ['Scorpius', 'വൃശ്ചികം', [['acrab', 'dschubba', 'scoPi'], ['dschubba', 'scoSigma', 'antares', 'scoTau', 'scoEps', 'scoMu', 'scoZeta', 'scoEta', 'sargas', 'scoIota', 'scoKappa', 'shaula', 'lesath']]],
  ['Sagittarius', 'ധനു', [['alnasl', 'kausMedia', 'kausAustralis', 'alnasl'], ['kausMedia', 'kausBorealis', 'sgrPhi', 'kausMedia'], ['sgrPhi', 'nunki', 'sgrTau', 'ascella', 'sgrPhi'], ['ascella', 'kausAustralis']]],
  ['Capricornus', 'മകരം', [['algedi', 'dabih', 'capPsi', 'capOmega', 'capZeta', 'denebAlgedi', 'nashira', 'capIota', 'capTheta', 'algedi']]],
  ['Aquarius', 'കുംഭം', [['aqrEps', 'sadalsuud', 'sadalmelik', 'aqrGamma', 'aqrZeta', 'aqrEta'], ['aqrZeta', 'aqrPi'], ['sadalmelik', 'aqrTheta', 'aqrLambda', 'aqrPsi'], ['aqrLambda', 'skat', 'aqr88']]],
  ['Pisces', 'മീനം', [['pscGamma', 'pscKappa', 'pscLambda', 'pscIota', 'pscTheta', 'pscGamma'], ['pscIota', 'pscOmega', 'pscDelta', 'pscEps', 'pscZetaR', 'pscMu', 'pscNu', 'alrescha', 'pscOmicron', 'pscEta', 'pscChi', 'pscPhi']]],
];
const OTHER_LINES = [
  ['meissa', 'betelgeuse', 'bellatrix', 'meissa'], ['betelgeuse', 'alnitak', 'saiph'], ['bellatrix', 'mintaka', 'rigel'], ['alnitak', 'alnilam', 'mintaka'],   // Orion
  ['markab', 'scheat', 'alpheratz', 'algenib', 'markab'],                                                                       // the square of Pegasus
  ['gienah', 'algorab', 'crvBeta', 'crvEps', 'gienah'],                                                                         // Corvus, which holds Atham
  ['tarazed', 'altair', 'alshain'],                                                                                             // Altair, Thiruvonam
  ['rotanev', 'sualocin', 'delGamma', 'delDelta', 'rotanev'],                                                                   // Delphinus, Avittam
];
// the twenty-seven nakshatras, each at its yogatara (junction star)
const NAKSHATRA = [
  ['അശ്വതി', 'Ashwathi', 'sheratan'], ['ഭരണി', 'Bharani', 'ari35'], ['കാർത്തിക', 'Karthika', 'alcyone'], ['രോഹിണി', 'Rohini', 'aldebaran'],
  ['മകയിരം', 'Makayiram', 'meissa'], ['തിരുവാതിര', 'Thiruvathira', 'betelgeuse'], ['പുണർതം', 'Punartham', 'pollux'], ['പൂയം', 'Pooyam', 'cncDelta'],
  ['ആയില്യം', 'Ayilyam', 'aylHya'], ['മകം', 'Makam', 'regulus'], ['പൂരം', 'Pooram', 'zosma'], ['ഉത്രം', 'Uthram', 'denebola'],
  ['അത്തം', 'Atham', 'algorab'], ['ചിത്തിര', 'Chithira', 'spica'], ['ചോതി', 'Chothi', 'arcturus'], ['വിശാഖം', 'Vishakham', 'zubenelgenubi'],
  ['അനിഴം', 'Anizham', 'dschubba'], ['തൃക്കേട്ട', 'Thrikketta', 'antares'], ['മൂലം', 'Moolam', 'shaula'], ['പൂരാടം', 'Pooradam', 'kausMedia'],
  ['ഉത്രാടം', 'Uthradam', 'nunki'], ['തിരുവോണം', 'Thiruvonam', 'altair'], ['അവിട്ടം', 'Avittam', 'rotanev'], ['ചതയം', 'Chathayam', 'aqrLambda'],
  ['പൂരുരുട്ടാതി', 'Pooruruttathi', 'markab'], ['ഉത്രട്ടാതി', 'Uthrattathi', 'algenib'], ['രേവതി', 'Revathi', 'pscZetaR'],
];

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
        vB = clamp(pow(b, 0.55), 0.1, 2.4)*tw*uFade;       // as the eye sees: faint stars still show vCol = aCol; vSpike = smoothstep(0.6, 2.5, b);
        float px = ${fixedPx ? '1.0' : 'clamp(2600.0/max(-mv.z, 1.0), 0.45, 1.6)'};
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
function label(lines, color, glow) {
  const c = document.createElement('canvas'), x = c.getContext('2d');
  const W = 520, H = lines.length > 1 ? 150 : 84; c.width = W; c.height = H;
  x.textAlign = 'center'; x.textBaseline = 'middle'; x.shadowColor = glow; x.shadowBlur = 16;
  lines.forEach(([text, font, col], i) => { x.font = font; x.fillStyle = col || color; x.fillText(text, W / 2, lines.length > 1 ? 44 + i * 62 : H / 2); });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, sizeAttenuation: false, opacity: 0.9, toneMapped: false }));
  const s = LOW ? 0.34 : 0.3; sp.scale.set(s, s * H / W, 1);
  return sp;
}

export function createCosmos() {
  const group = new THREE.Group();
  const P = {}, v = new THREE.Vector3();
  for (const [k, [ra, dec, mag, c]] of Object.entries(STARS)) P[k] = { p: toScene(eqVec(ra, dec), R), mag, col: COL[c] };

  // 1. the named stars
  const named = new THREE.Points(pointsGeo(Object.values(P)), starMaterial(true, 1.3));
  named.frustumCulled = false; named.renderOrder = 2; group.add(named);

  // 2. the figures: fine lines of light between the stars, as in the old star maps
  const seg = [];
  const addLine = (names) => { for (let i = 0; i < names.length - 1; i++) { const a = P[names[i]].p, b = P[names[i + 1]].p; seg.push(a.x, a.y, a.z, b.x, b.y, b.z); } };
  RASHI.forEach(([, , lines]) => lines.forEach(addLine));
  OTHER_LINES.forEach(addLine);
  const lineMat = new THREE.LineBasicMaterial({ color: new THREE.Color(0.45, 0.62, 1.0), transparent: true, opacity: 0.26, depthWrite: false, blending: THREE.AdditiveBlending });
  const lines = new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(seg, 3)), lineMat);
  lines.frustumCulled = false; group.add(lines);

  // 3. the ecliptic, the path of the Sun, with the twelve 30° houses of the sidereal zodiac
  const ring = [];
  for (let i = 0; i <= 360; i++) { const a = THREE.MathUtils.degToRad(i); ring.push(Math.cos(a) * R, 0, -Math.sin(a) * R); }
  const ecl = new THREE.Line(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(ring, 3)),
    new THREE.LineBasicMaterial({ color: new THREE.Color(0.85, 0.42, 0.62), transparent: true, opacity: 0.16, depthWrite: false, blending: THREE.AdditiveBlending }));
  ecl.frustumCulled = false; group.add(ecl);
  const ticks = [];
  for (let k = 0; k < 12; k++) {
    const a = THREE.MathUtils.degToRad(AYANAMSA + k * 30), x = Math.cos(a), z = -Math.sin(a), h = R * 0.035;
    ticks.push(x * R, -h, z * R, x * R, h, z * R);
  }
  const tick = new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(ticks, 3)), ecl.material);
  tick.frustumCulled = false; group.add(tick);

  // 4. the Milky Way: a river of faint stars and glowing dust along the galactic plane
  const far = [];
  const NB = LOW ? 12000 : 30000;
  for (let i = 0; i < NB; i++) {
    let e;
    if (Math.random() < 0.55) {
      const l = Math.random() < 0.35 ? gauss() * 40 : Math.random() * 360, b = gauss() * (Math.random() < 0.7 ? 4 : 12);
      e = galVec(l, b);
    } else { const u = Math.random() * 2 - 1, t = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u); e = [s * Math.cos(t), s * Math.sin(t), u]; }
    const r = R * (1.05 + Math.random() * 1.2);
    const mag = 3.6 + Math.pow(Math.random(), 0.45) * 3.4;
    const tC = Math.random();
    far.push({ p: toScene(e, r), mag, col: tC < 0.3 ? COL.b : tC < 0.75 ? COL.w : tC < 0.94 ? COL.y : COL.o });
  }
  const farStars = new THREE.Points(pointsGeo(far), starMaterial(false, 2.6));
  farStars.frustumCulled = false; group.add(farStars);
  // the glow of uncounted stars
  const NG = LOW ? 16000 : 42000, gp = new Float32Array(NG * 3), gc = new Float32Array(NG * 3);
  for (let i = 0; i < NG; i++) {
    const l = Math.random() < 0.45 ? gauss() * 35 : Math.random() * 360;
    const bw = 3 + 9 * Math.exp(-((((l + 540) % 360) - 180) ** 2) / 3000) * (Math.abs(((l + 540) % 360) - 180) < 60 ? 1 : 0.4);
    const b = gauss() * bw * 0.6 + (Math.abs(l % 360) < 30 && Math.random() < 0.3 ? 0 : 0);
    toScene(galVec(l, b), R * (1.4 + Math.random() * 0.6), v); gp.set([v.x, v.y, v.z], i * 3);
    const warm = Math.exp(-((((l + 540) % 360) - 180) ** 2) / 2500);
    gc.set([0.35 + 0.35 * warm, 0.42 + 0.2 * warm, 0.75 - 0.1 * warm].map((c) => c * (0.6 + Math.random() * 0.4)), i * 3);
  }
  const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.BufferAttribute(gp, 3)); gg.setAttribute('color', new THREE.BufferAttribute(gc, 3));
  const soft = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  const glow = new THREE.Points(gg, new THREE.PointsMaterial({ map: soft, size: LOW ? 16 : 13, sizeAttenuation: false, vertexColors: true, transparent: true, opacity: 0.045, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.frustumCulled = false; group.add(glow);
  // soft clouds of light along the river, brightest toward its heart in Sagittarius
  const cloud = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,0.5)'); g.addColorStop(0.4, 'rgba(255,255,255,0.12)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); const t = new THREE.CanvasTexture(c); return t; })();
  for (let i = 0; i < (LOW ? 40 : 70); i++) {
    const l = i < 25 ? gauss() * 28 : Math.random() * 360, b = gauss() * 3.5;
    const near = Math.exp(-((((l + 540) % 360) - 180) ** 2) / 2200);
    const tint = [[0.5, 0.6, 1.0], [0.62, 0.48, 1.0], [0.9, 0.62, 0.8], [1.0, 0.82, 0.6]][(Math.random() * 4) | 0];
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloud, color: new THREE.Color(...tint), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.05 + 0.09 * near, rotation: Math.random() * 6.28 }));
    toScene(galVec(l, b), R * 1.8, sp.position); sp.scale.setScalar(R * (0.18 + Math.random() * 0.22) * (1 + near));
    group.add(sp);
  }

  // 5. the names
  const names = new THREE.Group(); group.add(names);
  const ML = '600 46px "Noto Serif Malayalam", serif', EN = '500 44px "Cormorant Garamond", Georgia, serif', EN2 = 'italic 400 34px "Cormorant Garamond", Georgia, serif';
  RASHI.forEach(([en, ml, ls]) => {
    const ks = [...new Set(ls.flat())]; v.set(0, 0, 0); ks.forEach((k) => v.add(P[k].p)); v.normalize().multiplyScalar(R);
    // set each rashi name a little beyond its figure, away from the ecliptic, so it does not sit on the stars
    const sp = label([[ml, ML, '#ffe9a8'], [en, EN, '#cfe0ff']], '#fff', 'rgba(40,80,200,0.9)');
    sp.position.copy(v).add(new THREE.Vector3(0, v.y >= 0 ? R * 0.12 : -R * 0.12, 0)).normalize().multiplyScalar(R);
    names.add(sp);
  });
  NAKSHATRA.forEach(([ml, en, k]) => {
    const sp = label([[ml, '600 38px "Noto Serif Malayalam", serif', '#ffcf7a'], [en, EN2, 'rgba(255,230,190,0.85)']], '#fff', 'rgba(255,170,60,0.55)');
    sp.scale.multiplyScalar(0.72); sp.center.set(0.5, -0.1);           // just above its star
    sp.position.copy(P[k].p); names.add(sp);
  });

  return {
    group,
    showNames(on) { names.visible = on; },
    // the lotus remains the centre of all this; the heavens turn very slowly around it
    update() {},
  };
}
