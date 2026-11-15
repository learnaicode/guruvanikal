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

const $ = (s) => document.querySelector(s);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const ease = (t) => t * t * (3 - 2 * t);
const sstep = (a, b, x) => ease(clamp((x - a) / (b - a), 0, 1));
const params = new URLSearchParams(location.search);
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
const FOV = 58;

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

const composer = new EffectComposer(renderer);
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
// Two tracks from the same beginning to the same Light:
//   out: the mark · Earth · Solar System · Milky Way · Universe · Multiverse · the Light
//   in:  the mark · Cell · DNA · Atom · Nucleus · the Light
const seed = createSeed();
const worlds = buildRealms();
const tracks = { out: [seed, ...worlds.out], in: [seed, ...worlds.in] };
const groups = [seed, ...worlds.out, ...worlds.in].map((r) => r.group);
groups.forEach((g) => { g.visible = false; scene.add(g); });
let lotus = null, ui = null;
const sound = createSound();

// p = the station number plus how far through it we are
const S = { dir: 'out', p: 0, tp: 0, mode: 'intro', auto: false, hold: 0, last: null, sayAt: -1 };
// the passage in progress: t runs from 1 to 0; dir +1 closes the old world into the centre, -1 opens the new one from it
const X = { t: 0, dir: 1, sec: 2.6 };
let shown = null, lw = 0, tun = 0;
// the space around the lotus: cosmos (the stars, the rashis and nakshatras), white, or dark
const SPACES = ['cosmos', 'white', 'dark'];
let space = SPACES.includes(localStorage.getItem('gv-space')) ? localStorage.getItem('gv-space') : 'cosmos';
let white = space === 'white';
let cosmos = null;
let rotate = localStorage.getItem('gv-rotate') !== 'off';     // the slow turning of the view at the lotus
const T = () => tracks[S.dir];
const LAST = () => T().length - 1;                       // the Light
const controls = new OrbitControls(camera, canvas);
controls.enabled = false; controls.enableDamping = true; controls.dampingFactor = 0.06;
controls.minDistance = 14; controls.maxDistance = 330; controls.maxPolarAngle = 1.46; controls.enablePan = false;
controls.rotateSpeed = 0.5; controls.zoomSpeed = 0.7;
const far = () => (camera.aspect < 1 ? 1.75 : 1);
const HOME = () => (space === 'cosmos'
  ? { pos: new THREE.Vector3(0, 40 * far(), 150 * far()), tgt: new THREE.Vector3(0, 6, 0) }     // lower, so the ring of the zodiac rises behind the lotus
  : { pos: new THREE.Vector3(0, 66 * far(), 124 * far()), tgt: new THREE.Vector3(0, 3, 0) });
// in the cosmos the seeker may travel far out among the stars and all around the lotus
function setFreedom() {
  const c = space === 'cosmos';
  controls.maxDistance = c ? 1500 : 330; controls.maxPolarAngle = c ? Math.PI - 0.05 : 1.46; controls.enablePan = c;
  controls.autoRotate = rotate; controls.autoRotateSpeed = 0.28;
}

// Arriving: we come out of the light at the centre of the lotus, rise from the opening bud and draw
// back until the whole lotus is seen in white space. It ends exactly where HOME is.
const CORE = new THREE.Vector3(0, 4.2, 0);
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
const tA = new THREE.Vector3();

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
    const b = document.createElement('button'); b.dataset.name = k === 0 ? 'The beginning' : r.name; b.setAttribute('aria-label', b.dataset.name);
    b.onclick = () => jumpTo(k);
    rail.append(b);
  });
}
let realmTimer = 0;
function announce(k) {
  const r = T()[k];
  realmEl.children[0].textContent = k === 0 ? (S.dir === 'out' ? 'Outward · into the vast' : 'Inward · into the subtle') : ROMAN[k];
  realmEl.children[1].textContent = r.name;
  realmEl.children[2].textContent = r.sub;
  realmEl.children[3].textContent = r.scale || '';
  realmEl.classList.add('on');
  clearTimeout(realmTimer); realmTimer = setTimeout(() => realmEl.classList.remove('on'), 5600);
  [...rail.children].forEach((b, i) => b.classList.toggle('on', i === k));
  sayEl.classList.remove('on'); layerEl.classList.remove('on');
}
function showSaying() {
  // only from the opening topics: the Guru, God, worship and devotion
  const short = DB.sayings.items.filter((it) => it.topic < 5 && it.text.length < 150 && !it.text.includes('\n'));
  const it = short[(Math.random() * short.length) | 0];
  sayEl.children[0].textContent = it.text;
  sayEl.children[1].textContent = `Guruvani · saying ${it.i}`;
  sayEl.classList.add('on');
}

function jumpTo(k) {
  if (S.mode === 'lotus') leaveLotus();
  S.p = S.tp = k + 0.02; S.auto = true; S.hold = 0; S.last = null; S.sayAt = -1;
}
function begin(dir, at) {
  S.dir = dir; buildRail();
  if (S.mode === 'lotus') { leaveLotus(); S.fromLotus = true; }
  $('#intro').classList.add('gone');
  $('#hud').hidden = false;
  S.mode = 'journey'; S.auto = true; S.hold = 0; S.last = null; S.sayAt = -1;
  S.p = S.tp = at || 0;
  $('#sound').hidden = false; if (!S.muted) { sound.toggle(true); syncSound(); }
  hint.classList.remove('off'); setTimeout(() => hint.classList.add('off'), 9000);
}
function arrive() {
  S.mode = 'lotus'; S.auto = false; S.p = S.tp = LAST() + 1;
  const h = HOME(); camera.up.set(0, 1, 0); camera.position.copy(h.pos); controls.target.copy(h.tgt); setFreedom(); controls.enabled = true; controls.update();
  museAt = performance.now() + 20000;
  $('#bar').hidden = false; $('#legend').hidden = false; $('#copy').hidden = false; $('#hud').hidden = true;
  $('#legend').style.opacity = 1;
  setTimeout(() => { $('#legend').style.transition = 'opacity 2s'; $('#legend').style.opacity = 0; }, 14000);
}
function leaveLotus() {
  S.mode = 'journey'; controls.enabled = false; ui.closeAll(); lotus.hover(null); lotus.select(null);
  $('#bar').hidden = true; $('#legend').hidden = true; $('#copy').hidden = true; $('#hud').hidden = false; fly = null; muse.classList.remove('on');
}

// ------------------------------------------------------------------ travelling
function push(d) {
  if (S.mode !== 'journey') return;
  S.tp = clamp(S.tp + d, 0, LAST() + 1);
  if (d < 0) { S.auto = false; S.hold = 5; }
  hint.classList.add('off');
}
addEventListener('wheel', (e) => { if (S.mode === 'journey') push(clamp(e.deltaY, -120, 120) * 0.0011); }, { passive: true });
let ty = null;
canvas.addEventListener('touchstart', (e) => { ty = e.touches[0].clientY; }, { passive: true });
canvas.addEventListener('touchmove', (e) => { if (S.mode === 'journey' && ty != null) { const y = e.touches[0].clientY; push((ty - y) * 0.004); ty = y; } }, { passive: true });
addEventListener('keydown', (e) => {
  if (S.mode !== 'journey') return;
  if (['ArrowDown', 'PageDown', ' ', 'ArrowRight'].includes(e.key)) push(0.18);
  if (['ArrowUp', 'PageUp', 'ArrowLeft'].includes(e.key)) push(-0.18);
});

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
  flyToYear() { flyTo(new THREE.Vector3(0, 128 * far(), 62 * far()), new THREE.Vector3(0, 0, 0)); },
  flyHome() { const h = HOME(); flyTo(h.pos, h.tgt); },
};
let down = null, lastPick = 0;
canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY }; });
canvas.addEventListener('pointermove', (e) => {
  if (S.mode !== 'lotus' || e.buttons) { if (ui) ui.showTip(null); return; }
  const now = performance.now(); if (now - lastPick < 55) return; lastPick = now;
  const hit = lotus.pick(e.clientX, e.clientY, camera);
  if (hit && hit.core) { lotus.hover(null); lotus.hoverYear(-1); canvas.style.cursor = 'pointer'; ui.showTip('<small>The light at the centre</small>Touch to speak with NAMA', e.clientX, e.clientY); return; }
  lotus.hover(hit && hit.petal != null ? hit.petal : null);
  lotus.hoverYear(hit && hit.year != null ? hit.year : -1);
  canvas.style.cursor = hit ? 'pointer' : 'grab';
  ui.showTip(hit ? (hit.petal != null ? ui.petalLabel(hit.petal) : ui.yearLabel(hit.year)) : null, e.clientX, e.clientY);
});
canvas.addEventListener('pointerup', (e) => {
  if (S.mode !== 'lotus' || !down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 7) return;
  const hit = lotus.pick(e.clientX, e.clientY, camera);
  if (!hit) return;
  ui.showTip(null);
  if (hit.core) { window.open(NAMA_AI_URL, '_blank', 'noopener'); return; }
  if (hit.petal != null) ui.openPetal(hit.petal); else ui.openYear(hit.year);
});
canvas.addEventListener('pointerleave', () => { if (ui) ui.showTip(null); if (lotus) lotus.hover(null); });

// ------------------------------------------------------------------ sound: on or off, how loud, which state
const sndBtn = $('#sndBtn'), sndPanel = $('#sndPanel'), sndOn = $('#sndOn'), sndVol = $('#sndVol'), sndMode = $('#sndMode'), sndNow = $('#sndNow');
sndMode.innerHTML = '<option value="auto">Automatic · follows the journey</option>'
  + STATES.map((st) => `<option value="${st.hz}">${st.name} · ${st.hz ? st.hz + ' Hz' : '136.1 Hz'} · ${st.note}</option>`).join('');
function syncSound() {
  const hz = sound.hz;
  sndOn.checked = sound.on; sndVol.value = Math.round(sound.volume * 100); sndMode.value = String(sound.mode);
  sndBtn.classList.toggle('gold', sound.on);
  const what = hz > 0 ? `${stateName(hz)} · ${hz} Hz` : 'OM · 136.1 Hz';
  sndBtn.querySelector('span').textContent = sound.on ? what : 'Sound off';
  sndNow.textContent = sound.on ? `Now: ${what}${sound.mode === 'auto' ? ' (automatic)' : ' (held)'}` : 'Sound is off';
}
sndBtn.onclick = () => { sndPanel.hidden = !sndPanel.hidden; };
sndOn.onchange = () => { S.muted = !sndOn.checked; sound.toggle(sndOn.checked); syncSound(); };
sndVol.oninput = () => sound.setVolume(sndVol.value / 100);
sndMode.onchange = () => { sound.setMode(sndMode.value); syncSound(); };
addEventListener('pointerdown', (e) => { if (!sndPanel.hidden && !e.target.closest('#sound')) sndPanel.hidden = true; });
syncSound();

// ------------------------------------------------------------------ the frame
const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.05);
  G.uTime.value += dt;
  const track = T(), last = LAST();

  if (S.mode === 'journey') {
    if (S.hold > 0) { S.hold -= dt; if (S.hold <= 0) S.auto = true; }
    if (S.auto) S.tp = clamp(S.tp + dt / 15, 0, last + 1);
    S.p += (S.tp - S.p) * (1 - Math.exp(-dt * 3.2));
    if (S.p >= last + 0.994 && lotus) arrive();
  }

  const k = clamp(Math.floor(S.p), 0, last), u = clamp(S.p - k, 0, 1);
  const R = track[k];
  if (!R) return;                                           // the Light is still loading
  if (R !== shown) {
    // keep a picture of the world we are leaving, exactly as it was last seen
    if (shown) {
      camera.updateMatrixWorld(); sky.position.copy(camera.position);
      renderer.setRenderTarget(snap); renderer.clear(); renderer.render(scene, camera); renderer.setRenderTarget(null);
      const fwd = T().indexOf(shown) < 0 || k > T().indexOf(shown);
      X.t = 1; X.dir = S.fromLotus ? -1 : (S.dir === 'out' ? 1 : -1) * (fwd ? 1 : -1); X.sec = S.fromLotus ? 3.2 : 2.6;
      S.fromLotus = false;
    }
    applySky(R.sky, !shown);
    shown = R;
  }
  X.t = Math.max(0, X.t - dt / X.sec);
  moveSky(1 - Math.exp(-dt * 2.2));
  groups.forEach((g) => { g.visible = g === R.group; });
  if (lotus) lotus.group.visible = k === last;
  if (cosmos) cosmos.group.visible = k === last && space === 'cosmos';
  if (R !== S.last) {
    S.last = R; camera.up.set(0, 1, 0); S.sayAt = -1;
    if (S.mode === 'journey') announce(k);
    sound.state(R.beat || 0, k === last); syncSound();
  }

  if (S.mode === 'lotus') {
    if (fly) {
      fly.t = Math.min(1, fly.t + dt / fly.sec); const e = ease(fly.t);
      camera.position.lerpVectors(fly.p0, fly.p1, e); controls.target.lerpVectors(fly.t0, fly.t1, e);
      if (fly.t >= 1) fly = null;
    }
    controls.autoRotate = rotate && !fly && reader.hidden && side.hidden;    // be still while someone reads
    controls.update();
    lotus.setBloom(1);
    museTick();
  } else if (k === last) lotusPath(u, camera);
  else if (k === 0) seed.update(u, camera, S.mode === 'intro' ? 0 : S.dir === 'out' ? 1 : -1, far());
  else {
    R.update(u, camera, far());
    if (S.mode === 'journey' && DB.sayings) {
      if (S.sayAt < 0 && u > 0.5 && u < 0.72) { S.sayAt = k; showSaying(); }
      if (u > 0.8) sayEl.classList.remove('on');
    }
    const cap = R.caption ? R.caption(u) : null;
    if (cap) { layerEl.children[0].textContent = cap[1]; layerEl.children[1].textContent = cap[2]; }
    layerEl.classList.toggle('on', !!cap);
  }

  // the tunnel of light: it gathers as a world ends and thins as the next one opens
  const toLight = k === last - 1 && S.mode === 'journey';
  let want = 0;
  if (S.mode === 'journey' && k < last) want = sstep(toLight ? 0.7 : 0.8, 1, u) * 0.8;
  want = Math.max(want, ease(X.t) * 0.65);
  tun += (want - tun) * (1 - Math.exp(-dt * 6));
  passage.uniforms.uTunnel.value = tun; passage.uniforms.uMix.value = X.t; passage.uniforms.uDir.value = X.dir;
  passage.uniforms.uWhite.value = toLight ? sstep(0.8, 1, u) : k === last ? X.t : 0;
  const fov = FOV + 26 * tun * (S.mode === 'lotus' ? 0 : 1);
  if (Math.abs(fov - camera.fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }

  // white space at the lotus: no dark corners, and only the strongest light blooms
  const near = k === last ? 1.2 : 0.1;                       // a deeper near plane at the lotus keeps the petals from shimmering
  if (camera.near !== near) { camera.near = near; camera.updateProjectionMatrix(); }
  lw += ((k === last && white ? 1 : 0) - lw) * (1 - Math.exp(-dt * 2.5));
  bloom.threshold = THREE.MathUtils.lerp(0.88, 2.5, lw); bloom.strength = THREE.MathUtils.lerp(0.5, 0.42, lw);
  final.uniforms.uVig.value = THREE.MathUtils.lerp(0.72, 0.06, lw);
  document.body.classList.toggle('light', k === last && white && X.t < 0.5);

  sky.position.copy(camera.position);
  // the last passage ends in white
  let veil = toLight ? sstep(0.84, 1, u) * 0.8 : 0;
  if (k === last && white) veil = Math.max(veil, ease(X.t) * 0.8 * (X.sec < 3 ? 1 : 0));
  final.uniforms.uVeil.value = veil; final.uniforms.uVeilCol.value.setRGB(2.1, 2.1, 2.1);
  final.uniforms.uLens.value = 0; final.uniforms.uDim.value = 0;

  composer.render();
}
requestAnimationFrame(frame);

// ------------------------------------------------------------------ white or dark space around the lotus
$('#speak').href = NAMA_AI_URL;
const SPACE_NAME = { cosmos: '✦ Cosmos', white: '☀ White space', dark: '☾ Dark space' };
function setSpaceBtn() { $('#space').textContent = SPACE_NAME[space]; $('#space').title = 'Space around the lotus: ' + SPACE_NAME[space].slice(2) + ' (touch to change)'; }
$('#space').onclick = () => {
  space = SPACES[(SPACES.indexOf(space) + 1) % SPACES.length]; white = space === 'white';
  localStorage.setItem('gv-space', space);
  lotus.setSpace(space); setSpaceBtn(); setFreedom();
  if (S.mode === 'lotus') { applySky(lotus.sky); const h = HOME(); flyTo(h.pos, h.tgt, 2.4); }
  else if (T()[Math.floor(S.p)] === lotus) applySky(lotus.sky);
};
function setRotBtn() { $('#rot').textContent = rotate ? '⟳ Turning' : '⟳ Still'; $('#rot').classList.toggle('on', rotate); }
$('#rot').onclick = () => { rotate = !rotate; localStorage.setItem('gv-rotate', rotate ? 'on' : 'off'); setRotBtn(); setFreedom(); };
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
$('#out').onclick = () => begin('out');
$('#in').onclick = () => begin('in');
$('#goOut').onclick = () => begin('out');
$('#goIn').onclick = () => begin('in');
loadCore().then(() => {
  lotus = createLotus(DB.index, DB.nSay);
  lotus.setSpace(space); setSpaceBtn();
  lotus.group.visible = false; scene.add(lotus.group);
  document.fonts.load('600 40px "Noto Serif Malayalam"').catch(() => {}).then(() => { cosmos = createCosmos(); cosmos.group.visible = false; scene.add(cosmos.group); });
  tracks.out.push(lotus); tracks.in.push(lotus);
  ui = initUI(api);
  $('#count').textContent = `${DB.index.total.toLocaleString('en-IN')} Guruvanis · ${DB.nSay.toLocaleString('en-IN')} sayings · 1977 to 2006`;
  const s = $('#skip'); s.disabled = false;
  s.onclick = () => begin('out', LAST() + 0.02);
  // for checking: ?path=in&t=2.4 opens that journey stopped at that point; ?lotus opens at the lotus
  const dir = params.get('path') === 'in' ? 'in' : 'out';
  if (params.has('t')) { S.muted = true; begin(dir, Number(params.get('t'))); S.auto = false; S.hold = 1e9; }
  if (params.has('lotus')) { S.muted = true; begin(dir, LAST() + 0.9); }
  window.gv = { S, X, lotus, camera, controls, ui, jumpTo, begin, sound, get cosmos() { return cosmos; } };
}).catch((err) => { $('#count').textContent = 'The Guruvanis could not be loaded'; console.error(err); });
