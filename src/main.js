import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/noto-serif-malayalam/400.css';
import '@fontsource/noto-serif-malayalam/600.css';
import '@fontsource/nunito/900.css';
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { G, LOW, createSky, FinalShader, PassageShader } from './gl.js';
import { buildRealms } from './realms.js';
import { createSeed } from './seed.js';
import { createLotus } from './lotus.js';
import { createCosmos } from './cosmos.js';
import { DB, loadCore } from './data.js';
import { initUI, NAMA_AI_URL } from './ui.js';
import { createSound, STATES, stateName } from './sound.js';
import { skyNow, RASHIS, NAKSHATRAS, GRAHAS } from './ephem.js';

const $ = (s) => document.querySelector(s);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const ease = (t) => t * t * (3 - 2 * t);
const sstep = (a, b, x) => ease(clamp((x - a) / (b - a), 0, 1));
const params = new URLSearchParams(location.search);
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
const FOV = 58;
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : v; } catch { return d; } }, set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } } };

// ------------------------------------------------------------------ renderer
const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, LOW ? 1.25 : 1.75));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, innerWidth / innerHeight, 0.1, 9000);
const sky = createSky();
scene.add(sky);

// the picture is drawn with several samples to each point, so the edges of the petals are smooth
const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: LOW ? 0 : 4 }));
composer.setPixelRatio(renderer.getPixelRatio());
composer.addPass(new RenderPass(scene, camera));
// the passage between worlds: the world we leave is kept as a picture and closes or opens like an iris
const snap = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: true });
const passage = new ShaderPass(PassageShader);
passage.uniforms.tPrev.value = snap.texture;
composer.addPass(passage);
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.5, 0.7, 0.88);
if (LOW) bloom.nMips = 4;
composer.addPass(bloom);
const final = new ShaderPass(FinalShader);
composer.addPass(final);
composer.addPass(new OutputPass());

function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  composer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  G.uPx.value = renderer.domElement.height * 0.9;
  final.uniforms.uAspect.value = passage.uniforms.uAspect.value = camera.aspect;
  const px = renderer.getPixelRatio() * 0.75;
  snap.setSize(Math.round(innerWidth * px), Math.round(innerHeight * px));
}
addEventListener('resize', resize);
resize();

// ------------------------------------------------------------------ worlds
// Every journey begins at the mark and ends in the same Light:
//   out:   the mark · Earth · Solar System · Milky Way · Universe · Multiverse · the Light
//   in:    the mark · Cell · DNA · Atom · Nucleus · the Light
//   up:    Nucleus · Atom · DNA · Cell · the mark · Earth · ... · Multiverse · the Light   (smallest to vastest)
//   down:  Multiverse · ... · Earth · the mark · Cell · DNA · Atom · Nucleus · the Light   (vastest to smallest)
const seed = createSeed();
const worlds = buildRealms();
// a world travelled the other way: the same path, from its end to its beginning
const back = (R) => Object.create(R, { base: { value: R }, update: { value(u, cam, f) { R.update(1 - u, cam, f); } }, caption: { value: R.caption ? (u) => R.caption(1 - u) : null } });
const seedGo = (dir) => Object.create(seed, { base: { value: seed }, update: { value(u, cam, f) { seed.update(u, cam, dir, f); } } });
const seedOut = seedGo(1), seedIn = seedGo(-1);
const tracks = {
  out: [seedOut, ...worlds.out],
  in: [seedIn, ...worlds.in],
  up: [...worlds.in.map(back).reverse(), seedOut, ...worlds.out],
  down: [...worlds.out.map(back).reverse(), seedIn, ...worlds.in],
};
const ZOOM = { out: 1, in: -1, up: 1, down: -1 };       // do the worlds grow or shrink as we go
const TITLE = { out: 'Outward · into the vast', in: 'Inward · into the subtle', up: 'From the smallest to the vastest', down: 'From the vastest to the smallest' };
// the ladder of scale, smallest first. Travelling freely, one climbs or descends it; beyond both ends is the Light.
const LADDER = [...worlds.in.slice().reverse(), seed, ...worlds.out];
const groups = [seed, ...worlds.out, ...worlds.in].map((r) => r.group);
groups.forEach((g) => { g.visible = false; scene.add(g); });
let lotus = null, ui = null;
const sound = createSound();

// p = the station number plus how far through it we are
const S = { dir: 'out', p: 0, tp: 0, mode: 'intro', auto: false, hold: 0, last: null, paused: false, sayT: 0, sayGap: 0, annT: 0, sayOn: false, minutes: 0, t0: 0 };
// the passage in progress: t runs from 1 to 0; dir +1 closes the old world into the centre, -1 opens the new one from it
const X = { t: 0, dir: 1, sec: 2.6 };
// travelling freely, as consciousness: R is the world we are in
const F = { R: null, vel: 0, side: 0, sens: Number(store.get('gv-sens', 0.5)), pending: null, mx: 0, my: 0, over: false, drag: null, keys: {}, hold: 0, t0: 0 };
const blend = { t: 0, p: new THREE.Vector3(), q: new THREE.Quaternion() };
let shown = null, lw = 0, tun = 0, dim = 0;
// the space around the lotus: cosmos (the real night sky), white, or dark
const SPACES = ['cosmos', 'white', 'dark'];
let space = SPACES.includes(store.get('gv-space')) ? store.get('gv-space') : 'cosmos';
let white = space === 'white';
let cosmos = null;
let rotate = store.get('gv-rotate') !== 'off';     // the slow turning of the view at the lotus
const T = () => tracks[S.dir];
const LAST = () => T().length - 1;                       // the Light
const baseOf = (R) => (R && R.base) || R;
const atLotus = () => S.mode === 'lotus' || (S.mode === 'free' && F.R === lotus);
const controls = new OrbitControls(camera, canvas);
controls.enabled = false; controls.enableDamping = true; controls.dampingFactor = 0.06;
controls.minDistance = 14; controls.maxDistance = 330; controls.maxPolarAngle = 1.46; controls.enablePan = false;
controls.rotateSpeed = 0.5; controls.zoomSpeed = 0.7;
const far = () => (camera.aspect < 1 ? 1.75 : 1);
const HOME = () => (space === 'cosmos'
  ? { pos: new THREE.Vector3(0, 74 * far(), 168 * far()), tgt: new THREE.Vector3(0, 6, 0) }     // lower, so the ring of the zodiac rises behind the lotus
  : { pos: new THREE.Vector3(0, 90 * far(), 150 * far()), tgt: new THREE.Vector3(0, 4, 0) });
// in the cosmos the seeker may travel far out among the stars and all around the lotus
function setFreedom() {
  const c = space === 'cosmos';
  controls.maxDistance = c ? 1500 : 380; controls.maxPolarAngle = c ? Math.PI - 0.05 : 1.46; controls.enablePan = c;
  controls.autoRotate = rotate; controls.autoRotateSpeed = 0.28;
}

// Arriving: we come out of the light at the centre of the lotus, rise from the opening bud and draw
// back until the whole lotus is seen. It ends exactly where HOME is.
const CORE = new THREE.Vector3(0, 13, 0);                // the AUM
const tA = new THREE.Vector3(), tB = new THREE.Vector3(), tC = new THREE.Vector3(), tQ = new THREE.Quaternion(), tO = new THREE.Object3D();
function lotusPath(u, cam) {
  const h = HOME(), e = ease(u);
  const endD = h.pos.distanceTo(h.tgt), endPhi = Math.atan2(h.pos.z, h.pos.y - h.tgt.y);
  const d = THREE.MathUtils.lerp(9.5, endD, e * e * (3 - 2 * e) * (0.35 + 0.65 * e));
  const phi = THREE.MathUtils.lerp(0.04, endPhi, ease(Math.min(1, u * 1.15)));
  const az = (1 - e) * 1.9;
  const tgt = tA.copy(CORE).lerp(h.tgt, e);
  cam.position.set(tgt.x + Math.sin(phi) * Math.sin(az) * d, tgt.y + Math.cos(phi) * d, tgt.z + Math.sin(phi) * Math.cos(az) * d);
  cam.lookAt(tgt);
  lotus.setBloom(sstep(0.04, 0.86, u));
}

// the sky moves toward each world's colours instead of jumping to them
const skyTo = { top: new THREE.Color(), bot: new THREE.Color(), glow: new THREE.Color(), dir: new THREE.Vector3(0, 0, -1), stars: 0, milk: 0, aur: 0, floor: 0.35 };
function applySky(s, now) {
  skyTo.top.setRGB(...s.top); skyTo.bot.setRGB(...s.bot); skyTo.glow.setRGB(...s.glow); skyTo.dir.set(...s.dir);
  skyTo.stars = s.stars; skyTo.milk = s.milk; skyTo.aur = s.aur ?? 0; skyTo.floor = s.floor ?? 0.35;
  if (now) moveSky(1);
}
function moveSky(a) {
  const u = sky.material.uniforms, L = THREE.MathUtils.lerp;
  u.uTop.value.lerp(skyTo.top, a); u.uBot.value.lerp(skyTo.bot, a); u.uGlow.value.lerp(skyTo.glow, a); u.uGlowDir.value.lerp(skyTo.dir, a);
  u.uStars.value = L(u.uStars.value, skyTo.stars, a); u.uMilk.value = L(u.uMilk.value, skyTo.milk, a);
  u.uAur.value = L(u.uAur.value, skyTo.aur, a); u.uFloor.value = L(u.uFloor.value, skyTo.floor, a);
}

// ------------------------------------------------------------------ journey HUD
const rail = $('#rail'), realmEl = $('#realm'), sayEl = $('#say'), hint = $('#hint'), layerEl = $('#layer');
function buildRail() {
  rail.innerHTML = '';
  T().forEach((r, k) => {
    const b = document.createElement('button'); b.dataset.name = r.isSeed ? 'The beginning' : r.name; b.setAttribute('aria-label', b.dataset.name);
    b.onclick = () => jumpTo(k);
    rail.append(b);
  });
}
let realmTimer = 0;
function announce(R, k) {
  const first = S.mode === 'free' ? 'Consciousness' : k === 0 ? TITLE[S.dir] : ROMAN[k];
  realmEl.children[0].textContent = first;
  realmEl.children[1].textContent = R.name;
  realmEl.children[2].textContent = R.sub;
  realmEl.children[3].textContent = R.scale || '';
  realmEl.classList.add('on'); S.annT = 0;
  clearTimeout(realmTimer); realmTimer = setTimeout(() => realmEl.classList.remove('on'), 5600);
  [...rail.children].forEach((b, i) => b.classList.toggle('on', i === k));
  sayEl.classList.remove('on'); layerEl.classList.remove('on'); S.sayOn = false; S.sayT = 0; S.sayGap = 0;
}
function showSaying() {
  // only from the opening topics: the Guru, God, worship and devotion
  const short = DB.sayings.items.filter((it) => it.topic < 5 && it.text.length < 150 && !it.text.includes('\n'));
  const it = short[(Math.random() * short.length) | 0];
  sayEl.children[0].textContent = it.text;
  sayEl.children[1].textContent = `Guruvani · saying ${it.i}`;
  sayEl.classList.add('on');
}
// what is on the screen follows where we are
function chrome() {
  const atL = atLotus();
  $('#bar').hidden = !atL; $('#copy').hidden = !atL; $('#legend').hidden = S.mode !== 'lotus';
  $('#med').hidden = S.mode !== 'lotus';
  $('#hud').hidden = S.mode === 'intro' || S.mode === 'lotus';
  $('#fly').hidden = S.mode !== 'free';
  document.body.classList.toggle('free', S.mode === 'free');
  $('#freeBtn').textContent = S.mode === 'free' ? 'Return to the path' : 'Move freely'; $('#freeBtn').classList.toggle('on', S.mode === 'free');
  hint.textContent = S.mode === 'free' ? 'Scroll to move toward the pointer · drag to look · C to return' : 'Scroll, swipe or press ↓ to travel';
}

// ------------------------------------------------------------------ the time given to the journey
// 0 = the natural pace (about a quarter of a minute to each world); otherwise the whole journey takes this many minutes
const MINS = [0, 3, 5, 10, 15, 20, 30, 45, 60];
S.minutes = Math.max(0, Number(store.get('gv-minutes', 0)) || 0);
const secPer = () => (S.minutes > 0 ? (S.minutes * 60) / (LAST() + 1) : 15);
const clockText = (sec) => { sec = Math.max(0, Math.round(sec)); return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`; };
const minsSel = $('#mins'), minsIntro = $('#minsIntro'), minsNum = $('#minsNum');
for (const el of [minsSel, minsIntro]) {
  el.innerHTML = MINS.map((m) => `<option value="${m}">${m ? m + ' minutes' : 'Natural · about 2 minutes'}</option>`).join('') + '<option value="own">My own time…</option>';
  el.onchange = () => {
    if (el.value === 'own') { const v = el === minsIntro ? Number(prompt('How many minutes should the journey take?', S.minutes || 12)) : (S.minutes || 12); setMinutes(v > 0 ? v : 0, true); } else setMinutes(Number(el.value));
  };
}
minsNum.onchange = () => setMinutes(clamp(Number(minsNum.value) || 1, 1, 240), true);
function setMinutes(m, own) {
  S.minutes = clamp(m, 0, 240); store.set('gv-minutes', S.minutes);
  const listed = MINS.includes(S.minutes) && !own;
  minsSel.value = minsIntro.value = listed ? String(S.minutes) : 'own';
  $('#minsOwn').hidden = listed; minsNum.value = S.minutes || '';
}
setMinutes(S.minutes);
$('#pause').onclick = () => { S.paused = !S.paused; $('#pause').textContent = S.paused ? 'Continue' : 'Pause'; $('#pause').classList.toggle('on', S.paused); };

function jumpTo(k) {
  if (S.mode === 'lotus') leaveLotus();
  S.p = S.tp = k + 0.02; S.auto = true; S.hold = 0; S.last = null;
}
// Leaving the lotus, every journey goes through the AUM: the view is drawn slowly into it, into its
// white light, and the first world of the journey opens out of that light.
const LV = { t: 0, sec: 4.2, p0: new THREE.Vector3(), dir: 'out', at: 0, veil: 0 };
function begin(dir, at) {
  if (S.mode === 'leaving') return;
  if (S.mode === 'lotus' && lotus) {
    leaveLotus(); S.mode = 'leaving'; LV.t = 0; LV.p0.copy(camera.position); LV.dir = dir; LV.at = at; chrome();
    return;
  }
  go(dir, at);
}
function go(dir, at) {
  if (S.mode === 'free') { S.mode = 'journey'; F.pending = null; }
  S.dir = dir; buildRail();
  if (S.mode === 'leaving') S.fromLotus = true;
  $('#intro').classList.add('gone');
  S.mode = 'journey'; S.auto = true; S.hold = 0; S.last = null; S.paused = false; $('#pause').textContent = 'Pause'; $('#pause').classList.remove('on');
  S.p = S.tp = at || 0; S.t0 = performance.now();
  $('#sound').hidden = false; if (!S.muted) { sound.toggle(sndKind.value !== 'none'); syncSound(); }
  chrome(); wake();
  hint.classList.remove('off'); setTimeout(() => hint.classList.add('off'), 9000);
}
function arrive() {
  S.mode = 'lotus'; S.auto = false; S.p = S.tp = LAST() + 1;
  const h = HOME(); camera.up.set(0, 1, 0); camera.position.copy(h.pos); controls.target.copy(h.tgt); setFreedom(); controls.enabled = true; controls.update();
  museAt = performance.now() + 20000;
  chrome(); wake();
  $('#legend').style.transition = 'none'; $('#legend').style.opacity = 1;
  setTimeout(() => { $('#legend').style.transition = 'opacity 2s'; $('#legend').style.opacity = 0; }, 14000);
}
function leaveLotus() {
  M.on = false; M.t = 0; lotus.setWithin(false); setMedBtn();
  S.mode = 'journey'; controls.enabled = false; ui.closeAll(); lotus.hover(null); lotus.select(null);
  fly = null; muse.classList.remove('on'); chrome();
}

// ------------------------------------------------------------------ meditating within the AUM
// A choice, at the lotus only: the view is carried into the AUM and rests there, looking out. The
// lotus lies open below, the whole sky with its zodiac and constellations is around, and the view
// turns very slowly. Drag to look anywhere. The same button, or Esc, returns.
const M = { on: false, t: 0, yaw: 0, pitch: 0.1, p0: new THREE.Vector3(), q0: new THREE.Quaternion(), drag: null, idle: 0 };
const EYE = new THREE.Vector3(0, 19.5, 0), tE = new THREE.Euler(0, 0, 0, 'YXZ');
function setMedBtn() { const b = $('#med'); b.textContent = M.on ? 'ॐ Return' : 'ॐ Meditate in AUM'; b.classList.toggle('on', M.on); }
function toggleMed() {
  if (S.mode !== 'lotus') return;
  M.on = !M.on;
  if (M.on) {
    if (M.t <= 0) { M.p0.copy(camera.position); M.q0.copy(camera.quaternion); }
    tA.set(0, 0, -1).applyQuaternion(camera.quaternion); M.yaw = Math.atan2(-tA.x, -tA.z); M.pitch = 0.3;
    controls.enabled = false; fly = null; ui.closeAll();
    if (space !== 'cosmos') setSpace('cosmos');               // within the AUM the whole sky is seen
  }
  setMedBtn(); wake();
}
$('#med').onclick = toggleMed;
canvas.addEventListener('pointerdown', (e) => { if (M.on) M.drag = { x: e.clientX, y: e.clientY }; });
canvas.addEventListener('pointermove', (e) => {
  if (!M.on || !M.drag || !e.buttons) return;
  M.yaw += (e.clientX - M.drag.x) * 0.004; M.pitch = clamp(M.pitch + (e.clientY - M.drag.y) * 0.004, -1.2, 1.45);
  M.drag.x = e.clientX; M.drag.y = e.clientY; M.idle = 0;
});
for (const ev of ['pointerup', 'pointercancel']) canvas.addEventListener(ev, () => { M.drag = null; });

// ------------------------------------------------------------------ travelling along the path
function push(d) {
  if (S.mode !== 'journey') return;
  S.tp = clamp(S.tp + d, 0, LAST() + 1);
  if (d < 0) { S.auto = false; S.hold = 5; }
  hint.classList.add('off');
}
addEventListener('wheel', (e) => {
  if (e.target.closest && e.target.closest('#sndPanel, .panel')) return;
  if (S.mode === 'journey') push(clamp(e.deltaY, -120, 120) * 0.0011);
  else if (S.mode === 'free') { F.vel = clamp(F.vel + clamp(e.deltaY, -120, 120) * 0.0034, -1, 1); hint.classList.add('off'); }
}, { passive: true });
let ty = null, pinch = 0;
canvas.addEventListener('touchstart', (e) => { ty = e.touches[0].clientY; pinch = e.touches.length > 1 ? Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY) : 0; }, { passive: true });
canvas.addEventListener('touchmove', (e) => {
  if (S.mode === 'journey' && ty != null) { const y = e.touches[0].clientY; push((ty - y) * 0.004); ty = y; }
  if (S.mode === 'free' && e.touches.length > 1) {        // spread two fingers to go forward, bring them together to go back
    const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    if (pinch) F.vel = clamp(F.vel + (d - pinch) * 0.012, -1, 1); pinch = d;
  }
}, { passive: true });
const typing = (e) => e.target && e.target.matches && e.target.matches('input, textarea, select');
addEventListener('keydown', (e) => {
  if (typing(e) || e.metaKey || e.ctrlKey || e.altKey) return;
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  if (key === 'h') { setBare(!document.body.classList.contains('bare')); return; }
  if (key === 'Escape' && M.on) { toggleMed(); return; }
  if (key === 'c' && S.mode !== 'intro' && S.mode !== 'leaving' && !M.on) { toggleFree(); return; }
  if (S.mode === 'free') {
    if (key === 'Escape') toggleFree();
    else if (key === ' ') { F.vel = 0; F.side = 0; e.preventDefault(); } else if (key === '[') setSens(F.sens - 0.1); else if (key === ']') setSens(F.sens + 0.1);
    else F.keys[key] = true;
    return;
  }
  if (S.mode !== 'journey') return;
  if (key === 'p') $('#pause').click();
  if (['ArrowDown', 'PageDown', ' ', 'ArrowRight'].includes(key)) push(0.18);
  if (['ArrowUp', 'PageUp', 'ArrowLeft'].includes(key)) push(-0.18);
});
addEventListener('keyup', (e) => { F.keys[e.key.length === 1 ? e.key.toLowerCase() : e.key] = false; });
addEventListener('blur', () => { F.keys = {}; F.hold = 0; });

// ------------------------------------------------------------------ travelling freely, as consciousness
// The pointer is where attention rests; scrolling moves toward it. Each world has a heart (the way to
// the smaller world within it) and an edge (the way to the greater world that holds it).
const LOTUS_FREE = { u: 1, outer: 5200, door: () => CORE, doorR: 4.2, speed: 620 };
const freeOf = (R) => (R === lotus ? LOTUS_FREE : R.free);
const sensSpeed = () => 0.25 * Math.pow(12, F.sens);          // 0.25x to 3x
function setSens(v) { F.sens = clamp(v, 0, 1); store.set('gv-sens', F.sens); $('#sens').value = Math.round(F.sens * 100); }
$('#sens').oninput = () => setSens($('#sens').value / 100);
setSens(F.sens);
function toggleFree() {
  if (S.mode === 'intro' || S.mode === 'leaving') return;
  if (S.mode === 'lotus' && (M.on || M.t > 0)) { M.on = false; M.t = 0; lotus.setWithin(false); setMedBtn(); camera.position.copy(M.p0); camera.quaternion.copy(M.q0); }
  if (S.mode !== 'free') {
    const R = S.mode === 'lotus' ? lotus : baseOf(T()[clamp(Math.floor(S.p), 0, LAST())]);
    if (!R) return;
    if (S.mode === 'lotus') { controls.enabled = false; fly = null; }
    F.R = R; F.vel = 0; F.side = 0; F.pending = null; F.t0 = performance.now(); S.mode = 'free';
    announce(R, -1);
    hint.classList.remove('off'); setTimeout(() => hint.classList.add('off'), 12000);
  } else if (F.R === lotus) {
    S.mode = 'lotus'; camera.up.set(0, 1, 0);
    tA.set(0, 0, -1).applyQuaternion(camera.quaternion); controls.target.copy(camera.position).addScaledVector(tA, Math.min(camera.position.distanceTo(CORE), 200));
    setFreedom(); controls.enabled = true; api.flyHome();
  } else {
    // back to the path, at the world we are in; the view glides from where we are to where the path is
    let k = T().findIndex((r) => r.group === F.R.group);
    if (k < 0) { S.dir = 'up'; buildRail(); k = T().findIndex((r) => r.group === F.R.group); }
    blend.t = 1; blend.p.copy(camera.position); blend.q.copy(camera.quaternion);
    S.mode = 'journey'; S.p = S.tp = k + 0.3; S.auto = true; S.hold = 0; S.last = null;
  }
  chrome(); wake();
}
$('#freeBtn').onclick = toggleFree;
for (const [id, v] of [['flyFwd', 1], ['flyBack', -1]]) {
  const b = $('#' + id);
  b.addEventListener('pointerdown', (e) => { F.hold = v; b.setPointerCapture(e.pointerId); });
  for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) b.addEventListener(ev, () => { F.hold = 0; });
}
// arriving in the next world: from within (we come out of its heart) or from beyond (we stand at its edge)
function place(P) {
  const R = P.R, f = freeOf(R);
  tQ.copy(camera.quaternion);
  if (R === lotus) {
    tA.copy(P.dir).negate(); if (tA.y < 0.22) { tA.y = 0.22; tA.normalize(); }
    camera.position.set(0, 8, 0).addScaledVector(tA, 190 * far()); camera.up.set(0, 1, 0); camera.lookAt(0, 8, 0);
    lotus.setBloom(1); museAt = performance.now() + 20000;
  } else {
    R.update(f.u, camera, far());                             // the world takes its places (the planets, the lights)
    camera.quaternion.copy(tQ);
    if (P.up) camera.position.copy(f.door()).addScaledVector(P.dir, f.doorR * 1.35 + f.outer * 0.006);
    else camera.position.copy(f.center || tA.set(0, 0, 0)).addScaledVector(P.dir, -f.outer * 0.9);
  }
  F.vel *= 0.4;
  announce(R, -1); chrome();
}
function freeStep(dt, R) {
  const f = freeOf(R), sp = sensSpeed();
  // moving: the wheel gives a push that slowly fades; keys and the ▲ ▼ buttons hold it
  const kf = (F.keys.w || F.keys.ArrowUp ? 1 : 0) - (F.keys.s || F.keys.ArrowDown ? 1 : 0) + F.hold;
  const ks = (F.keys.d || F.keys.ArrowRight ? 1 : 0) - (F.keys.a || F.keys.ArrowLeft ? 1 : 0);
  F.vel = clamp(F.vel * Math.exp(-dt * 0.5) + kf * dt * 1.8, -1, 1);
  F.side = clamp(F.side * Math.exp(-dt * 2.5) + ks * dt * 2.4, -1, 1);
  if (fly) {
    fly.t = Math.min(1, fly.t + dt / fly.sec); const e = ease(fly.t);
    camera.position.lerpVectors(fly.p0, fly.p1, e);
    tO.position.copy(camera.position); tO.up.set(0, 1, 0); tO.lookAt(fly.t1); tO.rotateY(Math.PI); camera.quaternion.slerp(tO.quaternion, Math.min(1, dt * 3 + e * e));
    if (fly.t >= 1) fly = null;
    F.vel = 0;
  } else {
    // turning toward where the pointer rests, only while we are moving
    const mv = Math.min(1, Math.abs(F.vel) * 3 + Math.abs(F.side) * 2);
    if (F.over && !F.drag && mv > 0.02) {
      const dz = (v) => Math.sign(v) * Math.pow(Math.max(0, Math.abs(v) - 0.1) / 0.9, 1.5);
      const rate = 0.85 * mv * (0.6 + 0.4 * sp) * dt;
      camera.rotateY(-dz(F.mx) * rate * Math.max(1, camera.aspect * 0.8)); camera.rotateX(dz(F.my) * rate);
    }
    // keep the horizon level, gently (except close to the Earth, where up is away from the ground)
    if (f.level !== false) {
      tA.set(1, 0, 0).applyQuaternion(camera.quaternion); tB.set(0, 1, 0).applyQuaternion(camera.quaternion);
      if (Math.abs(tB.y) > 0.3) camera.rotateZ(clamp(-tA.y / tB.y, -1, 1) * Math.min(1, dt * 0.9));
    }
    // speed follows the size of the world, and eases as we come near its heart
    const door = f.door(), dDoor = camera.position.distanceTo(door);
    const ease2 = clamp((dDoor - f.doorR * 0.55) / (f.outer * 0.3), 0.012, 1);
    const v = (f.speed || f.outer * 0.3) * sp * ease2 * dt;
    tA.set(0, 0, -1).applyQuaternion(camera.quaternion); tB.set(1, 0, 0).applyQuaternion(camera.quaternion);
    camera.position.addScaledVector(tA, F.vel * v).addScaledVector(tB, F.side * v * 0.7);
    // the ways between worlds
    const i = LADDER.indexOf(R), c = f.center || tC.set(0, 0, 0), dC = camera.position.distanceTo(c);
    if (camera.position.distanceTo(door) < f.doorR) {
      // into the heart: the smaller world within. Within the nucleus, and within the Light, is everything.
      const next = R === lotus ? LADDER[LADDER.length - 1] : i > 0 ? LADDER[i - 1] : lotus;
      F.pending = { R: next, up: false, dir: tA.clone(), x: -1 };
    } else if (dC > f.outer) {
      if (R === lotus) camera.position.sub(c).setLength(f.outer).add(c);
      else F.pending = { R: i < LADDER.length - 1 ? LADDER[i + 1] : lotus, up: true, dir: camera.position.clone().sub(c).normalize(), x: 1 };
    }
  }
}
canvas.addEventListener('pointermove', (e) => {
  if (S.mode !== 'free') return;
  F.mx = (e.clientX / innerWidth) * 2 - 1; F.my = -((e.clientY / innerHeight) * 2 - 1); F.over = e.pointerType === 'mouse';
  if (F.drag && e.buttons) {          // drag to look around
    const k = 0.0034 * (camera.fov / FOV);
    camera.rotateY((e.clientX - F.drag.x) * k); camera.rotateX((e.clientY - F.drag.y) * k);
    F.drag.x = e.clientX; F.drag.y = e.clientY; fly = null;
  }
});
canvas.addEventListener('pointerdown', (e) => { if (S.mode === 'free') { F.drag = { x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); } });
for (const ev of ['pointerup', 'pointercancel']) canvas.addEventListener(ev, () => { F.drag = null; });
canvas.addEventListener('pointerleave', () => { F.over = false; });

// ------------------------------------------------------------------ at the lotus: touch
let fly = null;
function flyTo(pos, tgt, sec = 1.8) { fly = { t: 0, sec, p0: camera.position.clone(), t0: controls.target.clone(), p1: pos, t1: tgt }; }
const tmp = new THREE.Vector3();
const api = {
  get lotus() { return lotus; },
  flyToPetal(i) {
    lotus.petalPosition(i, tmp);
    const r = Math.hypot(tmp.x, tmp.z) || 1, dx = tmp.x / r, dz = tmp.z / r;
    // look from outside the lotus, in toward the petal and the light behind it
    flyTo(new THREE.Vector3(tmp.x + dx * (20 + r * 0.25), tmp.y + 15 + r * 0.22, tmp.z + dz * (20 + r * 0.25)), new THREE.Vector3(tmp.x * 0.86, tmp.y, tmp.z * 0.86));
  },
  flyToYear() { flyTo(new THREE.Vector3(0, 150 * far(), 72 * far()), new THREE.Vector3(0, 0, 0)); },
  flyHome() { const h = HOME(); flyTo(h.pos, h.tgt); },
};
let down = null, lastPick = 0;
canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY }; });
canvas.addEventListener('pointermove', (e) => {
  if (!atLotus() || e.buttons) { if (ui) ui.showTip(null); return; }
  const now = performance.now(); if (now - lastPick < 55) return; lastPick = now;
  const hit = lotus.pick(e.clientX, e.clientY, camera);
  const cur = S.mode === 'free' ? 'crosshair' : 'grab';
  if (hit && hit.core) { lotus.hover(null); lotus.hoverYear(-1); canvas.style.cursor = 'pointer'; ui.showTip(S.mode === 'free' ? '<small>AUM · the light at the centre</small>Touch to speak with NAMA · or travel into it' : '<small>AUM · the light at the centre</small>Touch to speak with NAMA', e.clientX, e.clientY); return; }
  lotus.hover(hit && hit.petal != null ? hit.petal : null);
  lotus.hoverYear(hit && hit.year != null ? hit.year : -1);
  canvas.style.cursor = hit ? 'pointer' : cur;
  ui.showTip(hit ? (hit.petal != null ? ui.petalLabel(hit.petal) : ui.yearLabel(hit.year)) : null, e.clientX, e.clientY);
});
canvas.addEventListener('pointerup', (e) => {
  if (!atLotus() || M.t > 0.5 || !down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 7) return;
  const hit = lotus.pick(e.clientX, e.clientY, camera);
  if (!hit) return;
  ui.showTip(null);
  if (hit.core) { window.open(NAMA_AI_URL, '_blank', 'noopener'); return; }
  if (hit.petal != null) ui.openPetal(hit.petal); else ui.openYear(hit.year);
});
canvas.addEventListener('pointerleave', () => { if (ui) ui.showTip(null); if (lotus) lotus.hover(null); });

// ------------------------------------------------------------------ sound: which frequencies, how loud, or none
const sndBtn = $('#sndBtn'), sndPanel = $('#sndPanel'), sndKind = $('#sndKind'), sndVol = $('#sndVol'), sndMode = $('#sndMode'), sndNow = $('#sndNow'), seqChips = $('#seqChips');
sndMode.innerHTML = STATES.map((st) => `<option value="${st.hz}">${st.name} · ${st.hz ? st.hz + ' Hz' : '136.1 Hz'} · ${st.note}</option>`).join('');
let seq = []; try { seq = JSON.parse(store.get('gv-seq', '[10,6,2.5,0]')).filter((h) => STATES.some((st) => st.hz === h)); } catch { seq = [10, 6, 2.5, 0]; }
sndKind.value = store.get('gv-kind', 'auto'); if (!['auto', 'one', 'seq', 'none'].includes(sndKind.value)) sndKind.value = 'auto';
if (typeof sound.mode === 'number') sndMode.value = String(sound.mode); else sndMode.value = '6';
function drawSeq() {
  seqChips.innerHTML = STATES.map((st) => { const n = seq.indexOf(st.hz); return `<button data-hz="${st.hz}" class="${n >= 0 ? 'on' : ''}">${n >= 0 ? `<b>${n + 1}</b>` : ''}${st.hz ? `${st.name} ${st.hz} Hz` : 'OM 136.1 Hz'}</button>`; }).join('');
}
seqChips.onclick = (e) => {
  const b = e.target.closest('button'); if (!b) return;
  const hz = Number(b.dataset.hz), n = seq.indexOf(hz);
  if (n >= 0) seq.splice(n, 1); else seq.push(hz);
  store.set('gv-seq', JSON.stringify(seq)); drawSeq(); applyKind();
};
// how far through the sitting we are, 0 to 1: along the path, or by the clock when travelling freely
function progress() {
  if (S.mode === 'lotus' || (S.mode === 'free' && !S.minutes)) return 1;
  if (S.mode === 'free') return clamp((performance.now() - F.t0) / (S.minutes * 60000), 0, 1);
  return clamp(S.p / (LAST() + 1), 0, 1);
}
function seqNow() { return seq.length ? seq[Math.min(seq.length - 1, Math.floor(progress() * seq.length))] : 0; }
function applyKind() {
  const k = sndKind.value; store.set('gv-kind', k);
  $('#oneRow').hidden = k !== 'one'; $('#seqRow').hidden = k !== 'seq';
  if (k === 'auto') sound.setMode('auto'); else if (k === 'one') sound.setMode(sndMode.value); else if (k === 'seq') { sound.seq(seqNow()); sound.setMode('seq'); }
  S.muted = k === 'none';
  if (S.mode !== 'intro') sound.toggle(k !== 'none');
  syncSound();
}
function syncSound() {
  const hz = sound.hz;
  sndVol.value = Math.round(sound.volume * 100);
  sndBtn.classList.toggle('gold', sound.on);
  const what = hz > 0 ? `${stateName(hz)} · ${hz} Hz` : 'OM · 136.1 Hz';
  sndBtn.querySelector('span').textContent = sound.on ? what : 'Silence';
  sndNow.textContent = sound.on ? `Now: ${what}` : 'No sound: a journey for the eyes';
}
sndBtn.onclick = () => { sndPanel.hidden = !sndPanel.hidden; if (!sndPanel.hidden) skyText(); };
sndKind.onchange = applyKind;
sndVol.oninput = () => sound.setVolume(sndVol.value / 100);
sndMode.onchange = applyKind;
addEventListener('pointerdown', (e) => { if (!sndPanel.hidden && !e.target.closest('#sound')) sndPanel.hidden = true; });
drawSeq(); applyKind();
const darkBox = $('#dark'); let dark = false;
darkBox.onchange = () => { dark = darkBox.checked; };

// ------------------------------------------------------------------ the sky at this moment
const namesBox = $('#names');
namesBox.checked = store.get('gv-names') !== 'off';
namesBox.onchange = () => { store.set('gv-names', namesBox.checked ? 'on' : 'off'); if (cosmos) cosmos.showNames(namesBox.checked); };
function skyText() {
  const s = skyNow(new Date());
  const line = ([k, en]) => `${en}: ${RASHIS[s[k].rashi][0]} ${s[k].deg.toFixed(1)}° · ${NAKSHATRAS[s[k].nak][0]}`;
  $('#skyNow').textContent = `${new Date().toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}\n${GRAHAS.map(line).join('\n')}\nSidereal zodiac, Lahiri ayanamsa ${s.ayanamsa.toFixed(2)}°. Seen from the lotus, each stands in its true place among the stars.`;
}

// ------------------------------------------------------------------ the controls rest when they are not needed
let awakeAt = performance.now();
function wake() { awakeAt = performance.now(); document.body.classList.remove('calm'); }
function setBare(on) { document.body.classList.toggle('bare', on); if (on) sndPanel.hidden = true; else wake(); }
$('#hideAll').onclick = () => setBare(true);
addEventListener('pointermove', (e) => {
  // travelling freely the pointer is always moving, so only the edges of the screen call the controls back
  if (S.mode !== 'free' || e.pointerType !== 'mouse' || e.clientY < 96 || e.clientY > innerHeight - 96 || e.target !== canvas) wake();
});
addEventListener('pointerdown', (e) => { if (document.body.classList.contains('bare')) { setBare(false); e.stopPropagation(); } wake(); }, true);
addEventListener('keydown', wake);
function calmTick(now) {
  if (S.mode === 'intro' || document.body.classList.contains('calm')) return;
  const busy = !sndPanel.hidden || !reader.hidden || !side.hidden || (document.activeElement && document.activeElement.matches('input, select, textarea'));
  if (busy) { awakeAt = now; return; }
  if (now - awakeAt > 7000) document.body.classList.add('calm');
}

// ------------------------------------------------------------------ every world made ready beforehand
// A world drawn for the first time makes the picture stop for a moment while its shaders and shapes
// are prepared. So each world is drawn once, unseen, while the first screen is showing.
function warmUp() {
  const list = [...groups, lotus.group];
  const step = () => {
    if (X.t > 0) { setTimeout(step, 400); return; }                   // never during a passage: it uses the same picture
    const g = list.shift(); if (!g) { if (!cosmos) { setTimeout(step, 500); return; } if (!cosmos.warm) { cosmos.warm = true; list.push(cosmos.group); setTimeout(step, 200); } return; }
    const was = [], seen = groups.concat(lotus.group, cosmos ? [cosmos.group] : []).map((x) => [x, x.visible]);
    seen.forEach(([x]) => { x.visible = x === g; });
    g.traverse((o) => { if (o.frustumCulled) { was.push(o); o.frustumCulled = false; } });
    renderer.setRenderTarget(snap); renderer.render(scene, camera); renderer.setRenderTarget(null);
    was.forEach((o) => { o.frustumCulled = true; }); seen.forEach(([x, v]) => { x.visible = v; });
    setTimeout(step, 180);
  };
  setTimeout(step, 600);
}

// ------------------------------------------------------------------ the frame
const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.05);
  G.uTime.value += dt;
  const now = performance.now();
  const track = T(), last = LAST(), per = secPer();
  let R, u, k = -1;

  if (S.mode === 'free') {
    if (F.pending) F.R = F.pending.R;
    R = F.R; u = freeOf(R).u;
  } else {
    if (S.mode === 'journey') {
      if (S.hold > 0) { S.hold -= dt; if (S.hold <= 0) S.auto = true; }
      if (S.auto && !S.paused) S.tp = clamp(S.tp + dt / per, 0, last + 1);
      S.p += (S.tp - S.p) * (1 - Math.exp(-dt * 3.2));
      if (S.p >= last + 0.994 && lotus) arrive();
    }
    k = clamp(Math.floor(S.p), 0, last); u = clamp(S.p - k, 0, 1);
    R = track[k];
  }
  if (!R) return;                                           // the Light is still loading
  const atL = R === lotus;
  if (!shown || R.group !== shown.group) {
    // keep a picture of the world we are leaving, exactly as it was last seen
    if (shown) {
      camera.updateMatrixWorld(); sky.position.copy(camera.position);
      renderer.setRenderTarget(snap); renderer.clear(); renderer.render(scene, camera); renderer.setRenderTarget(null);
      if (F.pending) { X.dir = F.pending.x; X.sec = 3.2; } else {
        const j = track.findIndex((r) => r.group === shown.group), fwd = j < 0 || k > j;
        X.dir = S.fromLotus ? -1 : ZOOM[S.dir] * (fwd ? 1 : -1); X.sec = S.fromLotus ? 4 : 3.6;
      }
      X.t = 1; S.fromLotus = false;
    }
    applySky(R.sky, !shown);
  }
  if (F.pending) { if (S.mode === 'free') place(F.pending); F.pending = null; }
  shown = R;
  X.t = Math.max(0, X.t - dt / X.sec);
  moveSky(1 - Math.exp(-dt * 2.2));
  groups.forEach((g) => { g.visible = g === R.group; });
  if (lotus) lotus.group.visible = atL;
  if (cosmos) { cosmos.group.visible = atL && space === 'cosmos'; if (cosmos.group.visible) cosmos.update(); }
  if (R !== S.last) {
    const was = S.last; S.last = R;
    if (S.mode !== 'free') camera.up.set(0, 1, 0);
    if (S.mode === 'journey' && (!was || was.group !== R.group)) announce(R, k);
    sound.state(R.beat || 0, atL); syncSound();
  }
  if (sndKind.value === 'seq') { const h = seqNow(); if (h !== sound.hz) { sound.seq(h); syncSound(); } }

  if (S.mode === 'lotus' && (M.on || M.t > 0)) {
    // into the AUM, or back out of it, slowly
    M.t = clamp(M.t + (M.on ? dt : -dt) / 4.5, 0, 1); const e = ease(M.t);
    M.idle += dt; if (M.on && !M.drag && M.idle > 1.5) M.yaw += dt * 0.03;      // the sky goes round once in about three and a half minutes
    camera.position.lerpVectors(M.p0, EYE, e);
    tE.set(M.pitch, M.yaw, 0); tQ.setFromEuler(tE); camera.quaternion.slerpQuaternions(M.q0, tQ, e);
    lotus.setWithin(M.t > 0.8); lotus.setBloom(1);
    if (!M.on && M.t <= 0) { controls.enabled = true; controls.update(); }
  } else if (S.mode === 'leaving') {
    // drawn into the AUM
    LV.t = Math.min(1, LV.t + dt / LV.sec); const e = ease(LV.t);
    tA.copy(LV.p0).sub(CORE); const d0 = tA.length();
    camera.position.copy(CORE).addScaledVector(tA.normalize(), 1.6 + (d0 - 1.6) * Math.pow(1 - e, 2.2));
    tO.position.copy(camera.position); tO.up.set(0, 1, 0); tO.lookAt(CORE); tO.rotateY(Math.PI); camera.quaternion.slerp(tO.quaternion, Math.min(1, dt * 2.5));
    lotus.setBloom(1); LV.veil = sstep(0.5, 0.97, LV.t);
    if (LV.t >= 1) go(LV.dir, LV.at);
  } else if (S.mode === 'lotus') {
    if (fly) {
      fly.t = Math.min(1, fly.t + dt / fly.sec); const e = ease(fly.t);
      camera.position.lerpVectors(fly.p0, fly.p1, e); controls.target.lerpVectors(fly.t0, fly.t1, e);
      if (fly.t >= 1) fly = null;
    }
    controls.autoRotate = rotate && !fly && reader.hidden && side.hidden;    // be still while someone reads
    controls.update();
    lotus.setBloom(1);
    museTick();
  } else if (S.mode === 'free') {
    if (!atL) {
      // the world lives (planets turn, lights face us) while the view stays our own
      tA.copy(camera.position); tQ.copy(camera.quaternion);
      if (R.isSeed) R.update(0, camera, 0, far()); else R.update(u, camera, far());
      camera.position.copy(tA); camera.quaternion.copy(tQ);
    } else { lotus.setBloom(1); museTick(); }
    freeStep(dt, R);
    if (R.face) R.face(camera);
  } else if (atL) lotusPath(u, camera);
  else if (S.mode === 'intro') seed.update(u, camera, 0, far());
  else {
    R.update(u, camera, far());
    // now and then, one of the sayings; in a long sitting they come and go many times
    if (DB.sayings && !R.isSeed) {
      S.sayT += dt; S.annT += dt;
      if (!S.sayOn && S.sayT > S.sayGap && S.annT > 7 && u > 0.3 && u < 0.86) { showSaying(); S.sayOn = true; S.sayT = 0; }
      else if (S.sayOn && (S.sayT > 18 || u > 0.9)) { sayEl.classList.remove('on'); S.sayOn = false; S.sayT = 0; S.sayGap = 26; }
    }
    const cap = R.caption ? R.caption(u) : null;
    if (cap) { layerEl.children[0].textContent = cap[1]; layerEl.children[1].textContent = cap[2]; }
    layerEl.classList.toggle('on', !!cap);
  }
  // returning from free travel, the view glides back onto the path
  if (blend.t > 0 && S.mode === 'journey') {
    blend.t = Math.max(0, blend.t - dt / 2.6); const e = ease(blend.t);
    camera.position.lerp(blend.p, e); camera.quaternion.slerp(blend.q, e);
  }

  // the tunnel of light: it gathers in the last seconds of a world and thins as the next one opens
  const going = S.mode === 'journey' && k < last, toLight = going && k === last - 1;
  const rem = (1 - u) * per;                                 // seconds left in this world
  // drawing back into the vast it is kept faint, so the eye follows the worlds and not the light around them
  let want = going ? sstep(toLight ? 4.5 : 3.2, 0, rem) * (toLight || ZOOM[S.dir] < 0 ? 0.8 : 0.3) : 0;
  want = Math.max(want, ease(X.t) * (X.dir < 0 ? 0.55 : 0.22));
  tun += (want - tun) * (1 - Math.exp(-dt * 6));
  passage.uniforms.uTunnel.value = tun; passage.uniforms.uMix.value = X.t; passage.uniforms.uDir.value = X.dir;
  passage.uniforms.uWhite.value = toLight ? sstep(3, 0, rem) : atL ? X.t : 0;
  const fov = FOV + 26 * tun * (S.mode === 'lotus' ? 0 : 1) + 16 * ease(M.t);
  if (Math.abs(fov - camera.fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }

  // white space at the lotus: no dark corners, and only the strongest light blooms
  const near = atL ? 1.2 : 0.1;                              // a deeper near plane at the lotus keeps the petals from shimmering
  const farZ = atL ? 14000 : 9000;
  if (camera.near !== near || camera.far !== farZ) { camera.near = near; camera.far = farZ; camera.updateProjectionMatrix(); }
  lw += ((atL && white ? 1 : 0) - lw) * (1 - Math.exp(-dt * 2.5));
  bloom.threshold = THREE.MathUtils.lerp(0.88, 2.5, lw); bloom.strength = THREE.MathUtils.lerp(0.5, 0.42, lw);
  final.uniforms.uVig.value = THREE.MathUtils.lerp(0.72, 0.06, lw);
  document.body.classList.toggle('light', atL && white && X.t < 0.5 && !dark);

  sky.position.copy(camera.position);
  // the last passage ends in white
  let veil = toLight ? sstep(2.4, 0, rem) * 0.8 : 0;
  if (atL && white) veil = Math.max(veil, ease(X.t) * 0.8 * (X.dir > 0 ? 1 : 0));
  // the white of the AUM, as we enter it and as the first world opens out of it
  if (S.mode !== 'leaving') LV.veil = Math.max(0, LV.veil - dt / 2.2);
  veil = Math.max(veil, LV.veil * 0.92);
  final.uniforms.uVeil.value = veil; final.uniforms.uVeilCol.value.setRGB(2.1, 2.1, 2.1);
  dim += ((dark ? 0.97 : 0) - dim) * (1 - Math.exp(-dt * 1.5));
  final.uniforms.uLens.value = 0; final.uniforms.uDim.value = dim;

  // the time that is left
  if (!sndPanel.hidden) {
    $('#left').textContent = S.mode === 'journey' ? `${clockText((last + 1 - S.p) * per)} to the Light` : S.mode === 'free' ? 'travelling freely' : S.mode === 'lotus' ? 'at the Light' : '';
  }
  calmTick(now);
  composer.render();
}
requestAnimationFrame(frame);

// ------------------------------------------------------------------ white or dark space around the lotus
$('#speak').href = NAMA_AI_URL;
const SPACE_NAME = { cosmos: '✦ Cosmos', white: '☀ White space', dark: '☾ Dark space' };
function setSpaceBtn() { $('#space').textContent = SPACE_NAME[space]; $('#space').title = 'Space around the lotus: ' + SPACE_NAME[space].slice(2) + ' (touch to change)'; }
$('#space').onclick = () => setSpace(SPACES[(SPACES.indexOf(space) + 1) % SPACES.length]);
function setSpace(name) {
  space = name; white = space === 'white';
  store.set('gv-space', space);
  lotus.setSpace(space); setSpaceBtn(); setFreedom();
  if (S.mode === 'lotus' && (M.on || M.t > 0)) applySky(lotus.sky);
  else if (S.mode === 'lotus') { applySky(lotus.sky); const h = HOME(); flyTo(h.pos, h.tgt, 2.4); }
  else if (shown === lotus) applySky(lotus.sky);
}
function setRotBtn() { $('#rot').textContent = rotate ? '⟳ Turning' : '⟳ Still'; $('#rot').classList.toggle('on', rotate); }
$('#rot').onclick = () => { rotate = !rotate; store.set('gv-rotate', rotate ? 'on' : 'off'); setRotBtn(); setFreedom(); };
setRotBtn();

// ------------------------------------------------------------------ at the lotus, now and then, one of the sayings
const muse = $('#muse'), reader = $('#reader'), side = $('#side');
let museAt = Infinity, museOff = 0;
function museTick() {
  const now = performance.now();
  if (muse.classList.contains('on') && now > museOff) { muse.classList.remove('on'); museAt = now + 40000; }
  if (now < museAt || !DB.sayings) return;
  if (!reader.hidden || !side.hidden) { museAt = now + 15000; return; }
  const short = DB.sayings.items.filter((it) => it.text.length < 170 && !it.text.includes('\n'));
  const it = short[(Math.random() * short.length) | 0];
  muse.children[0].textContent = it.text; muse.children[1].textContent = `Guruvani · saying ${it.i}`;
  muse.classList.add('on'); museOff = now + 18000; museAt = Infinity;
}

// ------------------------------------------------------------------ the words
for (const d of ['out', 'in', 'up', 'down']) $('#' + d).onclick = () => begin(d);
$('#roam').onclick = () => { begin('out'); toggleFree(); };
$('#goOut').onclick = () => begin('out');
$('#goIn').onclick = () => begin('in');
loadCore().then(() => {
  lotus = createLotus(DB.index, DB.nSay);
  lotus.setSpace(space); setSpaceBtn();
  lotus.group.visible = false; scene.add(lotus.group);
  document.fonts.load('600 40px "Noto Serif Malayalam"').catch(() => {}).then(() => { cosmos = createCosmos(); cosmos.showNames(namesBox.checked); cosmos.group.visible = false; scene.add(cosmos.group); });
  for (const t of Object.values(tracks)) t.push(lotus);
  ui = initUI(api);
  $('#count').textContent = `${DB.index.total.toLocaleString('en-IN')} Guruvanis · ${DB.nSay.toLocaleString('en-IN')} sayings · 1977 to 2006`;
  const s = $('#skip'); s.disabled = false;
  s.onclick = () => begin('out', LAST() + 0.02);
  // for checking: ?path=in&t=2.4 opens that journey stopped at that point; ?lotus opens at the lotus
  const dir = tracks[params.get('path')] ? params.get('path') : 'out';
  if (params.has('t')) { S.muted = true; begin(dir, Number(params.get('t'))); S.auto = false; S.hold = 1e9; }
  if (params.has('lotus')) { S.muted = true; begin(dir, LAST() + 0.9); }
  warmUp();
  window.gv = { frame, M, toggleMed, S, X, F, lotus, camera, controls, ui, jumpTo, begin, toggleFree, sound, worlds, seed, LADDER, get cosmos() { return cosmos; } };
}).catch((err) => { $('#count').textContent = 'The Guruvanis could not be loaded'; console.error(err); });
