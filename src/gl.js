import * as THREE from 'three';

// Shared clock and pixel scale for every shader in the journey.
export const G = { uTime: { value: 0 }, uPx: { value: 600 } };

// phones and small tablets get fewer points and a lighter picture, so the journey stays smooth
export const LOW = matchMedia('(pointer: coarse)').matches || Math.min(screen.width, screen.height) < 760;

export const NOISE = /* glsl */ `
float hash11(float n){ return fract(sin(n)*43758.5453123); }
float hash21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7)))*43758.5453123); }
float hash31(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7)))*43758.5453123); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash21(i), hash21(i+vec2(1,0)), f.x), mix(hash21(i+vec2(0,1)), hash21(i+vec2(1,1)), f.x), f.y);
}
float vnoise3(vec3 p){
  vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  float n = dot(i, vec3(1.0, 57.0, 113.0));
  return mix(mix(mix(hash11(n), hash11(n+1.0), f.x), mix(hash11(n+57.0), hash11(n+58.0), f.x), f.y),
             mix(mix(hash11(n+113.0), hash11(n+114.0), f.x), mix(hash11(n+170.0), hash11(n+171.0), f.x), f.y), f.z);
}
float fbm3(vec3 p){ float a = 0.5, s = 0.0; for(int i=0;i<6;i++){ s += a*vnoise3(p); p = p*2.02 + 9.7; a *= 0.5; } return s; }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for(int i=0;i<5;i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
`;

// the colours of the aurora: green, ice blue, violet, rose
export const AURORA = /* glsl */ `
vec3 aur(float t){ t = fract(t)*4.0; vec3 a = vec3(0.1, 1.0, 0.55), b = vec3(0.1, 0.75, 1.0), c = vec3(0.6, 0.3, 1.0), d = vec3(1.0, 0.3, 0.7);
  return t < 1.0 ? mix(a, b, t) : t < 2.0 ? mix(b, c, t - 1.0) : t < 3.0 ? mix(c, d, t - 2.0) : mix(d, a, t - 3.0); }
`;

// ---------- sky: a dome that travels with the camera ----------
export function createSky() {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, depthTest: false,
    uniforms: {
      uTime: G.uTime,
      uTop: { value: new THREE.Color(0, 0, 0) }, uBot: { value: new THREE.Color(0, 0, 0) },
      uGlow: { value: new THREE.Color(0, 0, 0) }, uGlowDir: { value: new THREE.Vector3(0, 0, -1) },
      uStars: { value: 1 }, uMilk: { value: 0 }, uAur: { value: 0 }, uFloor: { value: 0.35 },
    },
    vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */ `
      #define AUR_N ${LOW ? 12 : 20}
      #define AUR_STEP ${LOW ? '4.2' : '2.5'}
      varying vec3 vD; uniform float uTime, uStars, uMilk, uAur, uFloor; uniform vec3 uTop, uBot, uGlow, uGlowDir;
      ${NOISE} ${AURORA}
      // The aurora is not painted on the sky. Each ray of sight is walked upward through many thin
      // layers of light, one behind another, so the curtains have depth, fold over each other and
      // rise as rays (after the method of nimitz, "Auroras").
      mat2 rot2(float a){ float c = cos(a), s = sin(a); return mat2(c, s, -s, c); }
      float tri(float x){ return clamp(abs(fract(x) - 0.5), 0.01, 0.49); }
      vec2 tri2(vec2 p){ return vec2(tri(p.x) + tri(p.y), tri(p.y + tri(p.x))); }
      float triNoise(vec2 p, float spd){
        float z = 1.8, z2 = 2.5, rz = 0.0; p *= rot2(p.x*0.06); vec2 bp = p;
        for (int i = 0; i < 5; i++) {
          vec2 dg = tri2(bp*1.85)*0.75; dg *= rot2(uTime*spd);
          p -= dg/z2; bp *= 1.3; z2 *= 0.45; z *= 0.42; p *= 1.21 + (rz - 1.0)*0.02;
          rz += tri(p.x + tri(p.y))*z; p *= -mat2(0.95534, 0.29552, -0.29552, 0.95534);
        }
        return clamp(1.0/pow(rz*29.0, 1.3), 0.0, 0.55);
      }
      vec3 curtain(vec3 rd, float sd){
        vec3 col = vec3(0.0), avg = vec3(0.0);
        float jit = hash21(gl_FragCoord.xy + sd);
        for (int k = 0; k < AUR_N; k++) {
          float i = float(k)*AUR_STEP;
          float pt = (0.8 + pow(i, 1.4)*0.002)/(rd.y*2.0 + 0.4) - 0.006*jit*smoothstep(0.0, 15.0, i);
          vec3 bp = pt*rd;
          float rz = triNoise(bp.zx + sd, 0.05);
          vec3 c2 = (sin(1.0 - vec3(2.15, -0.5, 1.2) + i*0.043)*0.5 + 0.5)*rz;      // green below, rose and violet above
          avg = mix(avg, c2, 0.5);
          col += avg*exp2(-i*0.065 - 2.5)*smoothstep(0.0, 5.0, i)*AUR_STEP;
        }
        return col*clamp(rd.y*15.0 + 0.4, 0.0, 1.0)*1.8;
      }
      float starLayer(vec3 d, float sc, float th){
        vec3 p = d*sc; vec3 i = floor(p); vec3 f = fract(p)-0.5; float h = hash31(i);
        float s = smoothstep(0.16, 0.0, length(f)) * step(th, h);
        return s * (0.55 + 0.45*sin(uTime*1.7 + h*90.0));
      }
      void main(){
        vec3 d = normalize(vD);
        float h = d.y;
        vec3 c = mix(uBot, uTop, smoothstep(-0.08, 0.62, h));
        c = mix(c, uBot*uFloor, smoothstep(0.0, -0.5, h));
        float g = max(dot(d, normalize(uGlowDir)), 0.0);
        c += uGlow * (pow(g, 12.0)*0.22 + pow(g, 90.0)*0.5);
        float st = starLayer(d, 150.0, 0.985) + starLayer(d, 260.0, 0.99)*0.6;
        c += vec3(0.85, 0.9, 1.0) * st * uStars * smoothstep(-0.05, 0.3, h + 0.2);
        float band = fbm(d.xz*3.0 + d.y*2.0) * smoothstep(0.55, 0.0, abs(d.y*1.2 + d.x*0.6 - 0.25));
        c += vec3(0.35, 0.3, 0.6) * band * uMilk;
        if (uAur > 0.001) c += (h > 0.0 ? curtain(d, 0.0) : curtain(vec3(d.x, -d.y, d.z), 7.3)) * uAur * 0.7 * smoothstep(0.04, 0.42, abs(h));
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(900, 48, 24), mat);
  mesh.renderOrder = -10; mesh.frustumCulled = false;
  return mesh;
}

// ---------- a portal: the light at the end of each realm ----------
export function createPortal(color, radius, rays = 0.5, rings = 1) {
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uTime: G.uTime, uCol: { value: new THREE.Color(...color) }, uRays: { value: rays }, uRings: { value: rings }, uOpen: { value: 1 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */ `
      varying vec2 vUv; uniform float uTime, uRays, uRings, uOpen; uniform vec3 uCol;
      ${NOISE}
      void main(){
        vec2 p = vUv*2.0 - 1.0; float r = length(p); float a = atan(p.y, p.x);
        vec2 q = vec2(cos(a), sin(a));
        float sw = fbm(q*2.2 + vec2(r*5.0 - uTime*0.35, uTime*0.12));
        float core = exp(-r*r*60.0);
        float halo = exp(-r*7.0);
        float ring = smoothstep(0.05, 0.0, abs(r - 0.34 - 0.05*sw)) + 0.5*smoothstep(0.035, 0.0, abs(r - 0.52 - 0.07*sw));
        float ry = pow(abs(sin(a*7.0 + sw*3.0 + uTime*0.15)), 8.0) * exp(-r*2.4) * uRays;
        float swirl = pow(fbm(q*3.0 + vec2(r*9.0 + uTime*0.5, a)), 2.0) * exp(-r*3.0) * 0.9;
        vec3 c = uCol*(halo*0.55 + (ring*0.55 + swirl*0.55)*uRings + ry*0.6) + vec3(1.0)*core*1.5;
        float e = smoothstep(1.0, 0.72, r) * uOpen;
        gl_FragColor = vec4(c*e, 1.0);
      }`,
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 2), mat);
  m.frustumCulled = false;
  return m;
}

// ---------- soft additive points whose motion lives in the vertex shader ----------
export function createPoints(count, seedFn, body, { size = 1, fns = '', uniforms = {}, blending = THREE.AdditiveBlending, maxPx = 220 } = {}) {
  if (LOW && count > 4000) { count = Math.round(count * 0.45); size *= 1.25; }
  const pos = new Float32Array(count * 3), seed = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    const s = seedFn(i);
    pos.set(s.p || [0, 0, 0], i * 3); seed.set(s.s || [Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending,
    uniforms: { uTime: G.uTime, uPx: G.uPx, uSize: { value: size }, ...uniforms },
    vertexShader: /* glsl */ `
      attribute vec4 aSeed; uniform float uTime, uPx, uSize; varying float vA; varying vec3 vC;
      ${NOISE} ${fns}
      void main(){
        vec3 p = position; float a = 1.0; vec3 c = vec3(1.0); float s = 1.0;
        ${body}
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = min(uSize * s * uPx / max(-mv.z, 0.1), ${maxPx.toFixed(1)});
        vA = a * smoothstep(0.5, 5.0, -mv.z); vC = c;
      }`,
    fragmentShader: /* glsl */ `
      varying float vA; varying vec3 vC;
      void main(){ float d = length(gl_PointCoord - 0.5); float f = smoothstep(0.5, 0.0, d); f = f*f; gl_FragColor = vec4(vC*f*vA, f*vA); }`,
  });
  const pts = new THREE.Points(g, mat);
  pts.frustumCulled = false;
  return pts;
}

// ---------- the last pass: lens of the dewdrop, veil of light between worlds, vignette, grain ----------
export const FinalShader = {
  uniforms: {
    tDiffuse: { value: null }, uTime: G.uTime, uVeil: { value: 0 }, uVeilCol: { value: new THREE.Color(1, 1, 1) },
    uLens: { value: 0 }, uAspect: { value: 1.6 }, uDim: { value: 0 }, uVig: { value: 0.72 },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: /* glsl */ `
    varying vec2 vUv; uniform sampler2D tDiffuse; uniform float uTime, uVeil, uLens, uAspect, uDim, uVig; uniform vec3 uVeilCol;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)))*43758.5453); }
    void main(){
      vec2 c = vUv - 0.5; vec2 ca = vec2(c.x*uAspect, c.y); float r2 = dot(ca, ca);
      vec2 uv = 0.5 + c * (1.0 + uLens*(r2*2.6 - 0.42));
      float k = 0.0012 + r2*0.0045 + uLens*0.012;
      vec3 col = vec3(texture2D(tDiffuse, uv + c*k).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv - c*k).b);
      float rim = smoothstep(0.05, 0.0, abs(sqrt(r2) - 0.47)) + smoothstep(0.47, 0.62, sqrt(r2))*0.6;
      col += vec3(0.8, 0.95, 1.0) * rim * uLens * 0.9;
      col *= 1.0 - smoothstep(0.18, 0.95, r2)*uVig;
      col *= 1.0 - uDim;
      col = mix(col, uVeilCol, uVeil);
      col += (h(vUv*vec2(1920.0, 1080.0)) - 0.5) * 0.012;
      gl_FragColor = vec4(col, 1.0);
    }`,
};

// ---------- the passage between worlds ----------
// No fade. The world we are leaving is kept as a picture (tPrev) and closes like an iris into the
// centre (going outward) or opens from the centre (going inward) while the next world is already
// there behind it. Around it runs a tunnel of light in the colours of the aurora.
export const PassageShader = {
  uniforms: {
    tDiffuse: { value: null }, tPrev: { value: null }, uTime: G.uTime, uAspect: { value: 1.6 },
    uMix: { value: 0 }, uDir: { value: 1 }, uTunnel: { value: 0 }, uWhite: { value: 0 },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: /* glsl */ `
    precision highp float;
    varying vec2 vUv; uniform sampler2D tDiffuse, tPrev; uniform float uTime, uAspect, uMix, uDir, uTunnel, uWhite;
    ${NOISE} ${AURORA}
    // turn about the centre of the screen, true on a screen of any shape
    vec2 twist(vec2 c, float k){ float cs = cos(k), sn = sin(k); c.x *= uAspect; return vec2((c.x*cs - c.y*sn)/uAspect, c.x*sn + c.y*cs); }
    // beyond its edge a picture is mirrored, so no edge is ever seen
    vec2 mir(vec2 u){ return 1.0 - abs(1.0 - mod(u, 2.0)); }
    // the same soft rush of speed is given to both worlds, so nothing jumps when one replaces the other
    vec3 rush(sampler2D t, vec2 c){
      vec3 s = vec3(0.0);
      for (int i = 0; i < 5; i++) { float k = 1.0 - float(i)*0.028*uTunnel; s += texture2D(t, mir(0.5 + c*k)).rgb; }
      return s*0.2;
    }
    void main(){
      vec2 c = vUv - 0.5; vec2 ca = vec2(c.x*uAspect, c.y); float r = length(ca); float a = atan(ca.y, ca.x);
      float e = uMix*uMix*(3.0 - 2.0*uMix);                         // 1 at the start of a passage, 0 at its end
      float corner = 0.5*length(vec2(uAspect, 1.0));               // from the centre of the screen to its corner
      float t = 1.0 - uMix;                                        // 0 at the start, 1 at the end; it runs evenly, so the motion never rests
      vec3 col;
      if (uMix <= 0.0005) col = rush(tDiffuse, c);
      else if (uDir > 0.0) {
        // Outward: one unbroken drawing back. The world we leave keeps shrinking toward the centre
        // until it is a point of light, and the greater world that holds it is already there around
        // it, itself drawing back into place. Nothing is cut out and no edge is drawn: the smaller
        // world simply melts into the larger at its soft edge.
        float k = exp(-3.6*t);                                       // the old world: 1 down to a point
        col = rush(tDiffuse, c / exp(1.15*uMix));                    // the new world: seen close, easing out to its true size
        vec3 old = rush(tPrev, c / k);
        float R = (corner + 0.16)*pow(k, 0.82);
        float fade = smoothstep(0.0, 0.3, uMix);
        // at its soft edge only what is bright in the old world remains (its dark sky does not cover the new one)
        col = mix(col, max(col, old), (1.0 - smoothstep(R*0.5, R, r)) * fade);
        col = mix(col, old, (1.0 - smoothstep(R*0.16, R*0.62, r)) * fade);
        col += vec3(1.0, 0.95, 0.85)*exp(-r*r/(R*R*0.35 + 0.0006))*0.35*smoothstep(0.55, 0.15, uMix)*smoothstep(0.0, 0.12, uMix);
      } else {
        // Inward: one unbroken going in. The world we leave grows past us and thins from the centre,
        // where the finer world within it is already coming up to meet us.
        float M = exp(3.0*t);
        col = rush(tDiffuse, c * (1.0 + 0.9*uMix));
        vec3 old = rush(tPrev, c / M);
        float R = t*(corner + 0.3);
        float w = smoothstep(R*0.35, R + 0.02, r) * smoothstep(0.0, 0.3, uMix);
        col = mix(col, old, w);
      }
      if (uTunnel > 0.0005) {
        // the tunnel: walls of flowing light and a brightness at the far end
        float dep = 0.3/(r + 0.05);
        vec2 q = vec2(cos(a), sin(a));
        float tw = dep*0.5 + uTime*0.1;
        vec3 pp = vec3(twist(q, tw)*2.2, dep*1.7 - uTime*1.2*sign(uDir + 0.001));
        float n = fbm3(pp);
        float streak = pow(n, 3.0)*2.2 + pow(abs(sin(a*9.0 + tw*3.0 + n*4.0)), 18.0)*0.25;
        float wall = smoothstep(0.03, 0.42, r);
        vec3 tc = aur(n*1.3 + dep*0.07 + uTime*0.04) * streak * wall * 0.5;
        tc += vec3(1.0, 0.96, 0.88) * (exp(-r*r*90.0)*1.4 + exp(-r*9.0)*0.2);
        tc = mix(tc, vec3(2.2), uWhite*exp(-r*1.2));
        col = col*(1.0 - 0.6*uTunnel) + tc*uTunnel;
      }
      gl_FragColor = vec4(col, 1.0);
    }`,
};

// one small lotus petal: pointed, cupped, its tip lifting (length along +x, width along z)
export function petalGeometry(SU = 6, SV = 10) {
  const g = new THREE.BufferGeometry();
  const pos = [], uv = [], idx = [];
  for (let j = 0; j <= SV; j++) {
    const v = j / SV;
    const w = 0.46 * Math.pow(Math.sin(Math.PI * Math.pow(v, 0.8)), 0.72) * (1 - 0.22 * v * v);
    for (let i = 0; i <= SU; i++) {
      const u = (i / SU) * 2 - 1;
      pos.push(v, 0.17 * v * v + 0.1 * (1 - u * u) * Math.sin(Math.PI * v) - 0.07 * u * u * Math.sin(Math.PI * v), u * w * 0.5);
      uv.push((u + 1) / 2, v);
    }
  }
  for (let j = 0; j < SV; j++) for (let i = 0; i < SU; i++) {
    const a = j * (SU + 1) + i, b = a + 1, c = a + SU + 1, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  g.setIndex(idx);
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  return g;
}

// one great lotus petal: broad from its very base so that neighbours overlap, deeply cupped like a
// spoon, drawn to a soft point that lifts and curls back a little (length along +x, width along z)
export function lotusPetalGeometry(SU = 18, SV = 36) {
  const g = new THREE.BufferGeometry();
  const pos = [], uv = [], idx = [];
  for (let j = 0; j <= SV; j++) {
    const v = j / SV;
    // half-width: already wide at the base, widest a little past the middle, then a rounded shoulder into the point
    const w = (0.3 + 0.24 * Math.pow(Math.sin(Math.PI * Math.pow(v, 0.7) * 0.92), 0.85)) * Math.pow(1 - Math.pow(v, 3.4), 0.62);
    for (let i = 0; i <= SU; i++) {
      const u = (i / SU) * 2 - 1;
      const cup = 0.2 * (u * u) * Math.sin(Math.PI * Math.min(1, v * 1.15)) * (1 - 0.5 * v);     // the edges rise: a cupped petal
      const spine = 0.2 * v * v - 0.07 * Math.sin(Math.PI * v) + 0.05 * Math.pow(v, 6);            // it sags, then its point lifts
      pos.push(v, spine + cup, u * w);
      uv.push((u + 1) / 2, v);
    }
  }
  for (let j = 0; j < SV; j++) for (let i = 0; i < SU; i++) {
    const a = j * (SU + 1) + i, b = a + 1, c = a + SU + 1, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  g.setIndex(idx);
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  return g;
}
