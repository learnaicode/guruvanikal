// The sound of the journey, made in the browser (no audio files).
//
// Everything is tuned to OM at 136.1 Hz, the tone traditionally used for OM. Four layers, in the
// manner of Robert Monroe's Hemi-Sync recordings (layered beats over a soft surf of noise):
//
//   1. A quiet drone: OM with its octave below, its fifth and its octave above.
//   2. Two binaural pairs. The left ear hears a tone a little below the carrier and the right ear a
//      little above; the difference is heard as a slow pulse at the chosen rate. One pair rides on
//      OM (136.1 Hz) and a softer one on its fifth (204.15 Hz). They need headphones.
//   3. Surf: pink noise that rises and falls like slow breathing.
//   4. At the Light, a voice-like A-U-M that opens, rounds and closes into a hum.
//
// The rate is either automatic (it follows the journey downward, world by world) or held at one
// state for the whole journey. STATES lists the commonly published brain-wave bands. Monroe's own
// "Focus" mixes are proprietary and are not copied here. It is meant to soothe; no medical claim.

const OM = 136.1, FIFTH = OM * 1.5;

// The states of awareness, in the order the journey passes through them. Beta is the waking mind,
// alpha relaxed calm, theta deep meditation and dreaming, delta deep dreamless sleep. Gamma is faster
// than beta yet a deeper state: it is the rhythm reported in long-practising meditators, awareness
// gathered and unified. The journey ends in OM, where the beat falls silent.
export const STATES = [
  { hz: 18, name: 'Beta', note: 'the waking, thinking mind' },
  { hz: 14, name: 'Low beta', note: 'awake and at ease' },
  { hz: 10, name: 'Alpha', note: 'relaxed, calm awareness' },
  { hz: 7.83, name: 'Alpha to theta', note: 'the threshold of meditation' },
  { hz: 6, name: 'Theta', note: 'deep meditation, the dreaming mind' },
  { hz: 4.5, name: 'Deep theta', note: 'the edge of sleep' },
  { hz: 2.5, name: 'Delta', note: 'deep, dreamless sleep' },
  { hz: 1, name: 'Deep delta', note: 'the deepest rest' },
  { hz: 40, name: 'Gamma', note: 'awakened, unified awareness' },
  { hz: 0, name: 'OM', note: 'one tone, the beat falls silent' },
];
export const stateName = (hz) => (hz <= 0 ? 'OM' : STATES.reduce((a, b) => (Math.abs(b.hz - hz) < Math.abs(a.hz - hz) ? b : a)).name);

export function createSound() {
  let ctx = null, master = null, filter = null, on = false, pairs = [], aum = null;
  let auto = { hz: 14, light: false }, mode = 'auto', vol = 0.6, beat = 14, chantOn = false;
  try {
    const s = JSON.parse(localStorage.getItem('gv-sound') || '{}');
    if (typeof s.vol === 'number') vol = s.vol;
    if (s.mode === 'auto' || typeof s.mode === 'number') mode = s.mode;
  } catch { /* no saved settings */ }
  const save = () => { try { localStorage.setItem('gv-sound', JSON.stringify({ vol, mode })); } catch { /* private mode */ } };
  const target = () => (mode === 'auto' ? auto.hz : mode);
  const wantChant = () => (mode === 'auto' ? auto.light : mode === 0);

  function start() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    // 1. the drone
    filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 520; filter.Q.value = 0.3;
    const delay = ctx.createDelay(2); delay.delayTime.value = 0.47;
    const fb = ctx.createGain(); fb.gain.value = 0.52;
    filter.connect(master); filter.connect(delay); delay.connect(fb); fb.connect(delay); delay.connect(master);
    [[0.5, 0.34], [1, 0.3], [1.5, 0.16], [2, 0.14], [3, 0.05], [4, 0.035]].forEach(([mul, g], i) => {
      for (const det of [-3, 3]) {
        const o = ctx.createOscillator(); o.type = i < 3 ? 'triangle' : 'sine'; o.frequency.value = OM * mul; o.detune.value = det + i;
        const a = ctx.createGain(); a.gain.value = g * 0.4;
        const l = ctx.createOscillator(); l.frequency.value = 0.035 + i * 0.013;
        const la = ctx.createGain(); la.gain.value = g * 0.22;
        l.connect(la); la.connect(a.gain); o.connect(a); a.connect(filter); o.start(); l.start();
      }
    });
    // 2. the binaural pairs: one pure tone to each ear
    const merge = ctx.createChannelMerger(2); merge.connect(master);
    pairs = [[OM, 0.34], [FIFTH, 0.11]].map(([car, g]) => {
      const L = ctx.createOscillator(), R = ctx.createOscillator(); L.type = R.type = 'sine';
      const gl = ctx.createGain(), gr = ctx.createGain(); gl.gain.value = gr.gain.value = g;
      L.connect(gl); R.connect(gr); gl.connect(merge, 0, 0); gr.connect(merge, 0, 1);
      L.frequency.value = car - beat / 2; R.frequency.value = car + beat / 2; L.start(); R.start();
      return { L, R, car };
    });
    // 3. surf: pink noise, breathing slowly
    const len = ctx.sampleRate * 6, buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch); let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b0 = 0.997 * b0 + 0.03 * w; b1 = 0.985 * b1 + 0.05 * w; b2 = 0.95 * b2 + 0.08 * w; d[i] = (b0 + b1 + b2) * 0.9; }
    }
    const surf = ctx.createBufferSource(); surf.buffer = buf; surf.loop = true;
    const sf = ctx.createBiquadFilter(); sf.type = 'lowpass'; sf.frequency.value = 900;
    const sg = ctx.createGain(); sg.gain.value = 0.16;
    const sl = ctx.createOscillator(); sl.frequency.value = 0.09; const sla = ctx.createGain(); sla.gain.value = 0.09;
    sl.connect(sla); sla.connect(sg.gain); surf.connect(sf); sf.connect(sg); sg.connect(master); surf.start(); sl.start();
    // 4. A-U-M: a soft voice shaped by two moving formants
    const src = ctx.createOscillator(); src.type = 'sawtooth'; src.frequency.value = OM;
    const f1 = ctx.createBiquadFilter(), f2 = ctx.createBiquadFilter(); f1.type = f2.type = 'bandpass'; f1.Q.value = 7; f2.Q.value = 9;
    const g1 = ctx.createGain(), g2 = ctx.createGain(); g1.gain.value = 1; g2.gain.value = 0.5;
    const out = ctx.createGain(); out.gain.value = 0;
    src.connect(f1); src.connect(f2); f1.connect(g1); f2.connect(g2); g1.connect(out); g2.connect(out); out.connect(delay); out.connect(master); src.start();
    aum = { f1, f2, out };
    const chant = () => {
      if (!ctx || !chantOn) return;
      const t = ctx.currentTime, s = (p, v, at, tc) => p.setTargetAtTime(v, t + at, tc);
      s(aum.out.gain, 0.5, 0, 1.2);
      s(f1.frequency, 730, 0, 0.3); s(f2.frequency, 1090, 0, 0.3);      // A
      s(f1.frequency, 320, 4.2, 1.1); s(f2.frequency, 800, 4.2, 1.1);   // U
      s(f1.frequency, 250, 8.2, 0.9); s(f2.frequency, 500, 8.2, 0.9);   // M
      s(aum.out.gain, 0.22, 8.6, 1.4);
      s(aum.out.gain, 0.0, 12.5, 1.3);                                   // the silence after
    };
    setInterval(chant, 17000); aum.chant = chant;
    apply(true);
  }
  function apply(now) {
    const hz = target();
    if (ctx) {
      const t = ctx.currentTime, tc = now ? 0.05 : 2.5;
      // a very fast beat is kept quieter on the fifth so that it stays gentle
      pairs.forEach((p, i) => { const h = i ? Math.min(hz, 14) : hz; p.L.frequency.setTargetAtTime(p.car - h / 2, t, tc); p.R.frequency.setTargetAtTime(p.car + h / 2, t, tc); });
      filter.frequency.setTargetAtTime(hz <= 0 ? 900 : 430 + Math.max(0, 14 - hz) * 22, t, 2);
      const was = chantOn; chantOn = wantChant();
      if (chantOn && !was) aum.chant(); else if (!chantOn) aum.out.gain.setTargetAtTime(0, t, 0.8);
    }
    beat = hz;
  }
  const level = () => { if (ctx) { master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setTargetAtTime(on ? 0.28 * vol : 0, ctx.currentTime, on ? 1.0 : 0.3); } };
  return {
    get on() { return on; }, get mode() { return mode; }, get volume() { return vol; }, get hz() { return target(); },
    toggle(force) {
      on = force == null ? !on : force;
      if (on && !ctx) start();
      if (ctx && on) ctx.resume();
      level();
      return on;
    },
    // the journey tells us which world we are in; used when the rate is automatic
    state(hz, atLight) { auto = { hz, light: !!atLight }; if (target() !== beat || wantChant() !== chantOn) apply(); },
    setMode(m) { mode = m === 'auto' ? 'auto' : Number(m); save(); apply(); },
    setVolume(v) { vol = Math.min(1, Math.max(0, v)); save(); level(); },
  };
}
