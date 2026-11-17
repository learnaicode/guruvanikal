// Plays stretches of the journey frame by frame and measures flicker.
// pop:     the biggest jump in mean brightness between two frames (a whole-picture flash)
// sparkle: the share of pixels that flash on then off, or off then on, within three frames
window.__flicker = async function (path, starts, frames = 260) {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const cv = document.querySelector('#gl');
  const gl = cv.getContext('webgl2');
  window.requestAnimationFrame = () => 0;
  if (window.__pump) clearInterval(window.__pump);
  const out = [];
  for (const p0 of starts) {
    gv.begin(path, p0); gv.S.muted = true; gv.sound.toggle(false);
    gv.S.auto = true; gv.S.hold = 0;
    for (let i = 0; i < 20; i++) { gv.frame(); await wait(16); }
    const W = gl.drawingBufferWidth, H = gl.drawingBufferHeight, buf = new Uint8Array(W * H * 4);
    const step = 6, n = Math.floor(W / step) * Math.floor(H / step);
    let a = null, b = null, maxPop = 0, popAt = 0, maxSp = 0, spAt = 0, sumSp = 0, prevMean = null;
    for (let f = 0; f < frames; f++) {
      gv.frame();
      gl.readPixels(0, 0, W, H, gl.RGBA, gl.UNSIGNED_BYTE, buf);
      const c = new Float32Array(n); let k = 0, mean = 0;
      for (let y = 0; y + step <= H; y += step) for (let x = 0; x + step <= W; x += step) {
        const o = (y * W + x) * 4; const L = (buf[o] * 0.2126 + buf[o + 1] * 0.7152 + buf[o + 2] * 0.0722) / 255;
        c[k++] = L; mean += L;
      }
      mean /= n;
      if (prevMean != null) { const d = Math.abs(mean - prevMean); if (d > maxPop) { maxPop = d; popAt = gv.S.p; } }
      if (a && b) {
        let sp = 0;
        for (let i = 0; i < n; i++) { const d1 = b[i] - a[i], d2 = c[i] - b[i]; if (Math.abs(d1) > 0.1 && Math.abs(d2) > 0.1 && d1 * d2 < 0) sp++; }
        const r = sp / n; sumSp += r; if (r > maxSp) { maxSp = r; spAt = gv.S.p; }
      }
      a = b; b = c; prevMean = mean;
      await wait(16);
    }
    out.push(`${path} from ${p0}: pop max ${(maxPop * 100).toFixed(2)}% at p=${popAt.toFixed(2)} | sparkle avg ${(sumSp / frames * 100).toFixed(3)}% max ${(maxSp * 100).toFixed(2)}% at p=${spAt.toFixed(2)}`);
  }
  return out.join('\n');
};
// every frame's mean brightness from p0 for n frames, with where the journey is
window.__trace = async function (path, p0, n = 120, every = 1) {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const gl = document.querySelector('#gl').getContext('webgl2');
  window.requestAnimationFrame = () => 0;
  gv.begin(path, p0); gv.S.muted = true; gv.sound.toggle(false); gv.S.auto = true; gv.S.hold = 0;
  for (let i = 0; i < 10; i++) { gv.frame(); await wait(16); }
  const W = gl.drawingBufferWidth, H = gl.drawingBufferHeight, buf = new Uint8Array(W * H * 4), rows = [];
  let prev = null;
  for (let f = 0; f < n; f++) {
    gv.frame(); gl.readPixels(0, 0, W, H, gl.RGBA, gl.UNSIGNED_BYTE, buf);
    let m = 0, c = 0; for (let i = 0; i < buf.length; i += 4 * 37) { m += buf[i] * 0.2126 + buf[i + 1] * 0.7152 + buf[i + 2] * 0.0722; c++; }
    m = m / c / 2.55;
    if (f % every === 0 || (prev != null && Math.abs(m - prev) > 3)) rows.push(`${f} p=${gv.S.p.toFixed(3)} X=${gv.X.t.toFixed(2)} tun=${(gv.passageTun ?? 0)} mean=${m.toFixed(1)}${prev != null && Math.abs(m - prev) > 3 ? '  <<< jump ' + (m - prev).toFixed(1) : ''}`);
    prev = m; await wait(16);
  }
  return rows.join('\n');
};
