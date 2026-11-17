import * as THREE from 'three';
import { G, NOISE, AURORA, createPortal, createPoints } from './gl.js';

// Two ways to the same Light, after Kees Boeke's "Cosmic View": from the beginning the journey can
// go outward, each world vaster than the last, or inward, each world finer than the last.
//
//   outward:  Earth · Solar System · Milky Way · Universe · Multiverse
//   inward:   Cell · DNA · Atom · Nucleus
//
// These worlds are a visual path only. They do not sort or interpret the Guru's words.

const rnd = (a = 0, b = 1) => a + Math.random() * (b - a);
// the motion in each world eases, but never comes to rest at its ends: one world flows into the next
const ease = (t) => 0.42 * t + 0.58 * t * t * (3 - 2 * t);
const lerp = THREE.MathUtils.lerp;
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const tA = V(), tB = V(), tC = V(), ORIGIN = V();

const fresnelVert = 'varying vec3 vN, vV, vP; void main(){ vP = position; vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; vN = normalMatrix*normal; gl_Position = projectionMatrix*mv; }';

// ================================================================== OUTWARD
// ------------------------------------------------------------------ Earth
function earth() {
  const group = new THREE.Group();
  const R = 60;
  const up = V(0.2, 0.62, 0.76).normalize();                // the place we rise from
  const tangent = V().crossVectors(V(0, 1, 0), up).normalize().negate();
  const sun = up.clone().multiplyScalar(0.45).addScaledVector(tangent, 0.9).normalize();   // morning: the Sun low ahead
  const globe = new THREE.Mesh(new THREE.SphereGeometry(R, 160, 96), new THREE.ShaderMaterial({
    uniforms: { uTime: G.uTime, uSun: { value: sun } },
    vertexShader: 'varying vec3 vP, vW; void main(){ vP = normalize(position); vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
    fragmentShader: /* glsl */ `varying vec3 vP, vW; uniform vec3 uSun; uniform float uTime; ${NOISE}
      void main(){
        vec3 N = normalize(vW), Vw = normalize(cameraPosition - vW), p = vP;
        float h = fbm3(p*2.1 + 4.0) + 0.22*fbm3(p*7.0 + 1.3) + 0.05*fbm3(p*40.0);
        float land = smoothstep(0.585, 0.615, h);
        float lat = abs(p.y);
        vec3 sea = mix(vec3(0.004, 0.025, 0.1), vec3(0.01, 0.1, 0.2), smoothstep(0.45, 0.6, h));
        vec3 green = mix(vec3(0.04, 0.15, 0.035), vec3(0.11, 0.2, 0.05), fbm3(p*14.0));
        vec3 dry = vec3(0.34, 0.25, 0.13);
        vec3 ground = mix(green, dry, smoothstep(0.64, 0.74, h + 0.12*smoothstep(0.1, 0.32, lat)*smoothstep(0.5, 0.3, lat)));
        ground = mix(ground, vec3(0.3, 0.27, 0.24), smoothstep(0.78, 0.9, h));
        vec3 surf = mix(sea, ground, land);
        surf = mix(surf, vec3(0.9, 0.94, 1.0), smoothstep(0.8, 0.9, lat + (h - 0.6)*0.35));       // ice
        vec3 drift = vec3(uTime*0.012, 0.0, uTime*0.006);
        float cl = smoothstep(0.5, 0.7, 0.5*fbm3(p*3.4 + drift) + 0.3*fbm3(p*14.0 + drift*3.0) + 0.24*fbm3(p*55.0 + drift*9.0));
        float day = dot(N, uSun); float lit = smoothstep(-0.12, 0.22, day);
        vec3 c = mix(surf, vec3(1.0), cl*0.9) * (0.02 + 1.15*max(day, 0.0));
        c += vec3(1.0, 0.9, 0.7) * pow(max(dot(reflect(-uSun, N), Vw), 0.0), 70.0) * (1.0 - land)*(1.0 - cl) * 0.9;
        float cn = fbm3(p*130.0), cw = fwidth(cn)*1.5 + 0.004;           // the lights of towns, smoothed to the pixel so they never sparkle
        float city = smoothstep(0.7 - cw, 0.7 + cw, cn) * (1.0 - smoothstep(0.06, 0.3, cw)*0.6) * smoothstep(0.53, 0.57, fbm3(p*9.0 + 2.0)) * land * (1.0 - smoothstep(0.7, 0.85, lat));
        c += vec3(1.0, 0.7, 0.32) * city * (1.0 - lit) * 0.4 * (1.0 - cl);
        float rim = pow(max(1.0 - max(dot(N, Vw), 0.0), 0.0), 2.6);
        c += vec3(0.25, 0.55, 1.0) * rim * (0.12 + lit) * 0.9;
        c += vec3(1.0, 0.45, 0.2) * rim * smoothstep(0.25, 0.0, abs(day)) * 0.5;                       // dawn along the edge
        gl_FragColor = vec4(c, 1.0);
      }`,
  }));
  group.add(globe);
  // the air: a thin shell of light
  const air = new THREE.Mesh(new THREE.SphereGeometry(R * 1.045, 96, 64), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.BackSide, uniforms: { uSun: { value: sun } },
    vertexShader: 'varying vec3 vW, vN; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }',
    fragmentShader: `varying vec3 vW, vN; uniform vec3 uSun;
      void main(){ vec3 Vw = normalize(cameraPosition - vW); float k = abs(dot(vN, Vw));
        float lit = smoothstep(-0.25, 0.3, dot(normalize(vW), uSun));
        gl_FragColor = vec4(vec3(0.22, 0.5, 1.0) * pow(max(1.0 - k, 0.0), 0.6) * pow(k, 1.6) * 2.2 * (0.08 + lit), 1.0); }`,
  }));
  group.add(air);
  // aurora near the poles, in the thermosphere
  const aurora = createPoints(9000, () => ({}), `
    float an = aSeed.x*6.2831; float latr = 0.36 + 0.05*sin(an*3.0 + uTime*0.2) + aSeed.y*0.03;
    float hh = ${(R * 1.012).toFixed(2)} + aSeed.z*aSeed.z*2.6;
    float sg = aSeed.w < 0.5 ? 1.0 : -1.0;
    p = vec3(sin(latr)*cos(an), sg*cos(latr), sin(latr)*sin(an)) * hh;
    c = mix(vec3(0.2, 1.0, 0.5), vec3(0.6, 0.3, 1.0), aSeed.z); a = 0.5*(0.5 + 0.5*sin(uTime*1.5 + an*8.0)); s = 0.6 + aSeed.z;`, { size: 0.5, maxPx: 16 });
  group.add(aurora);
  const moon = new THREE.Mesh(new THREE.SphereGeometry(8, 48, 32), new THREE.ShaderMaterial({
    uniforms: { uSun: { value: sun } },
    vertexShader: 'varying vec3 vN, vP; void main(){ vP = position; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: `varying vec3 vN, vP; uniform vec3 uSun; ${NOISE} void main(){ float d = max(dot(normalize(vN), uSun), 0.0); float n = 0.55 + 0.45*fbm3(vP*0.7); gl_FragColor = vec4(vec3(0.62, 0.6, 0.58)*n*d, 1.0); }`,
  }));
  moon.position.set(-190, 46, -150);
  group.add(moon);

  const LAYERS = [
    [0.03, 'Troposphere', '0 to 12 km · clouds and weather'], [0.13, 'Stratosphere', '12 to 50 km · the ozone layer'],
    [0.23, 'Mesosphere', '50 to 85 km · where meteors burn'], [0.33, 'Thermosphere', '85 to 600 km · the auroras'],
    [0.43, 'Exosphere', '600 to 10,000 km · the edge of space'], [0.54, null, null],
  ];
  return {
    name: 'Earth', sub: 'the ground of life and its five layers of air', scale: '10⁷ metres', beat: 10, band: 'alpha',
    group, sky: { top: [0.0, 0.002, 0.012], bot: [0.0, 0.004, 0.02], glow: [1.0, 0.9, 0.7], dir: sun.toArray(), stars: 1, milk: 0.8 },
    veil: [1.3, 1.5, 1.9],
    caption(u) { let c = null; for (const L of LAYERS) if (u >= L[0]) c = L[1] ? L : null; return c; },
    update(u, cam, far = 1) {
      const A = 0.54;
      if (u < A) {
        const a = u / A, alt = 0.22 + 17 * Math.pow(a, 1.7);
        cam.position.copy(up).multiplyScalar(R + alt).addScaledVector(tangent, -a * 6);
        tA.copy(cam.position).addScaledVector(tangent, 40).addScaledVector(up, -(3 + 13 * a));
        cam.up.copy(up); cam.lookAt(tA);
      } else {
        const b = (u - A) / (1 - A), e = ease(b);
        cam.position.copy(up).multiplyScalar(R + 17.22 + 520 * e * e * far).addScaledVector(tangent, -6 + e * 60);
        tA.copy(up).multiplyScalar(R + 17.22).addScaledVector(tangent, 34).addScaledVector(up, -16);
        tA.lerp(tB.set(0, 0, 0), ease(Math.min(1, b * 2.2)));
        cam.up.copy(up).lerp(tC.copy(tangent), ease(Math.min(1, b * 2.2)) * 0.9).normalize(); cam.lookAt(tA);
      }
      globe.rotation.y = G.uTime.value * 0.004;
    },
    leave(cam) { cam.up.set(0, 1, 0); },
    // travelling freely: touch the Earth anywhere to enter a living cell; leave it far behind to see the Sun's family
    free: { u: 0.8, outer: 700, door: () => ORIGIN, doorR: R + 0.6, level: false },
  };
}

// ------------------------------------------------------------------ Solar System
function solar() {
  const group = new THREE.Group();
  const sunBall = new THREE.Mesh(new THREE.SphereGeometry(5, 48, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(3.4, 2.5, 1.3) }));
  group.add(sunBall);
  const halo = createPortal([1.0, 0.62, 0.25], 20, 0.3, 0); group.add(halo);
  const P = [ // name, orbit, size, colour, speed, bands
    ['Mercury', 13, 0.5, [0.6, 0.56, 0.52], 1.6, 0], ['Venus', 19, 0.9, [0.95, 0.8, 0.5], 1.2, 0], ['Earth', 27, 1.0, [0.2, 0.45, 1.0], 1.0, 0],
    ['Mars', 35, 0.7, [0.9, 0.38, 0.2], 0.8, 0], ['Jupiter', 60, 3.3, [0.85, 0.68, 0.5], 0.43, 1], ['Saturn', 84, 2.8, [0.9, 0.8, 0.58], 0.32, 1],
    ['Uranus', 108, 1.9, [0.55, 0.85, 0.9], 0.23, 0], ['Neptune', 130, 1.8, [0.25, 0.4, 1.0], 0.18, 0],
  ];
  const planets = P.map(([name, orbit, size, col, speed, bands], i) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(size, 40, 28), new THREE.ShaderMaterial({
      uniforms: { uCol: { value: new THREE.Color(...col) }, uBands: { value: bands } },
      vertexShader: 'varying vec3 vN, vW, vP; void main(){ vP = position; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }',
      fragmentShader: `varying vec3 vN, vW, vP; uniform vec3 uCol; uniform float uBands; ${NOISE}
        void main(){ vec3 L = normalize(-vW); float d = max(dot(normalize(vN), L), 0.0);
          float b = mix(1.0, 0.72 + 0.28*sin(vP.y*9.0 + fbm(vP.xy*2.0)*3.0), uBands);
          vec3 c = uCol*b*(0.03 + d*1.25) + uCol*pow(max(1.0 - max(dot(normalize(vN), normalize(cameraPosition - vW)), 0.0), 0.0), 3.0)*0.25*d;
          gl_FragColor = vec4(c, 1.0); }`,
    }));
    group.add(m);
    const pts = []; for (let k = 0; k <= 180; k++) { const a = (k / 180) * Math.PI * 2; pts.push(Math.cos(a) * orbit, 0, Math.sin(a) * orbit); }
    const ring = new THREE.Line(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)),
      new THREE.LineBasicMaterial({ color: i === 2 ? 0x6fa8ff : 0x8a93b8, transparent: true, opacity: i === 2 ? 0.55 : 0.22, depthWrite: false }));
    group.add(ring);
    if (name === 'Saturn') {
      const rg = new THREE.Mesh(new THREE.RingGeometry(size * 1.35, size * 2.3, 96), new THREE.MeshBasicMaterial({ color: 0xc9b98f, side: THREE.DoubleSide, transparent: true, opacity: 0.55 }));
      rg.rotation.x = Math.PI / 2 - 0.45; m.add(rg);
    }
    return { m, orbit, speed, a0: i * 2.4 + 0.7 };
  });
  const belt = createPoints(7000, () => { const a = rnd(0, 6.283), r = rnd(43, 52); return { p: [Math.cos(a) * r, rnd(-0.8, 0.8), Math.sin(a) * r] }; }, `
    float an = uTime*0.02; float cs = cos(an), sn = sin(an); p.xz = mat2(cs, -sn, sn, cs)*p.xz;
    a = 0.5; c = vec3(0.75, 0.7, 0.62); s = 0.3 + aSeed.w*0.8;`, { size: 0.2, maxPx: 6 });
  group.add(belt);
  const far0 = createPoints(5000, () => { const a = rnd(0, 6.283), r = rnd(150, 230); return { p: [Math.cos(a) * r, rnd(-6, 6), Math.sin(a) * r] }; }, `
    a = 0.35; c = vec3(0.6, 0.75, 1.0); s = 0.3 + aSeed.w;`, { size: 0.25, maxPx: 6 });   // the icy bodies beyond Neptune
  group.add(far0);
  return {
    name: 'Solar System', sub: 'the family of the Sun', scale: '10¹³ metres', beat: 7.83, band: 'alpha to theta',
    group, sky: { top: [0.0, 0.0, 0.008], bot: [0.004, 0.002, 0.016], glow: [0.2, 0.15, 0.3], dir: [0, 0.3, -1], stars: 1, milk: 1 },
    veil: [1.7, 1.5, 1.2],
    update(u, cam, far = 1) {
      const t = G.uTime.value * 0.05 + 2;
      planets.forEach((p) => { const a = p.a0 + t * p.speed; p.m.position.set(Math.cos(a) * p.orbit, 0, Math.sin(a) * p.orbit); p.m.rotation.y += 0.004; });
      const E = planets[2].m.position, e = ease(u);
      tA.copy(E).add(tB.set(1.6, 0.9, 3.2));
      tB.set(0, 210 * far, 330 * far);
      cam.position.lerpVectors(tA, tB, e * e * (0.3 + 0.7 * e));
      tA.copy(E).lerp(tC.set(0, 0, 0), ease(Math.min(1, u * 1.7)));
      cam.lookAt(tA);
      this.face(cam);
    },
    face(cam) { halo.quaternion.copy(cam.quaternion); },
    free: { u: 0.6, outer: 400, door: () => planets[2].m.position, doorR: 1.7 },
  };
}

// ------------------------------------------------------------------ Milky Way
function cloudTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d');
  for (let i = 0; i < 46; i++) {
    const px = rnd(60, 196), py = rnd(60, 196), r = rnd(24, 70);
    const g = x.createRadialGradient(px, py, 0, px, py, r);
    g.addColorStop(0, 'rgba(255,255,255,0.09)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 256, 256);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function galaxy() {
  const group = new THREE.Group();
  const stars = createPoints(120000, () => {
    const arm = (Math.random() * 4) | 0, r = Math.pow(Math.random(), 0.6) * 180;
    const bulge = Math.random() < 0.16;
    const ang = arm * 1.5708 + r * 0.03 + (Math.random() - 0.5) * (1.0 - r / 320) + (Math.random() < 0.22 ? rnd(0, 6.28) : 0);
    const rr = bulge ? Math.pow(Math.random(), 1.5) * 26 : r;
    const th = (Math.random() + Math.random() + Math.random() - 1.5) * (bulge ? 14 : 7 - r * 0.025);
    return { p: [Math.cos(ang) * rr, th, Math.sin(ang) * rr], s: [rr / 180, Math.random(), Math.random(), Math.random()] };
  }, `
    float an = uTime*0.012*(1.3 - aSeed.x*0.8); float cs = cos(an), sn = sin(an); p.xz = mat2(cs, -sn, sn, cs)*p.xz;
    c = mix(vec3(1.0, 0.85, 0.62), mix(vec3(0.5, 0.62, 1.0), vec3(1.0, 0.45, 0.75), step(0.86, aSeed.y)), smoothstep(0.08, 0.5, aSeed.x));
    a = 0.55 + 0.35*sin(uTime*1.3 + aSeed.z*80.0); s = 0.5 + aSeed.w*1.3 + (1.0 - aSeed.x)*0.7;`, { size: 0.5, maxPx: 26 });
  group.add(stars);
  const tex = cloudTexture();
  const cols = [[0.55, 0.3, 1.0], [0.2, 0.55, 0.9], [1.0, 0.35, 0.6], [0.9, 0.7, 0.5]];
  for (let i = 0; i < 40; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: rnd(0.05, 0.14), color: new THREE.Color(...cols[i % 4]), rotation: rnd(0, 6.28) }));
    const a = rnd(0, 6.28), r = rnd(20, 170);
    sp.position.set(Math.cos(a) * r, rnd(-4, 4), Math.sin(a) * r); sp.scale.setScalar(rnd(40, 110));
    group.add(sp);
  }
  const core = createPortal([1.0, 0.8, 0.55], 44, 0.25); group.add(core);
  // our Sun: one small light about two thirds of the way out
  const home = V(Math.cos(2.1) * 105, 0.5, Math.sin(2.1) * 105);
  const sunDot = createPortal([1.0, 0.9, 0.6], 2.2, 0.0, 0); sunDot.position.copy(home); group.add(sunDot);
  return {
    name: 'Milky Way', sub: 'our home among the stars', scale: '10²¹ metres', beat: 6, band: 'theta',
    group, sky: { top: [0.004, 0.0, 0.014], bot: [0.012, 0.004, 0.03], glow: [0.3, 0.2, 0.5], dir: [0, 1, 0], stars: 0.5, milk: 0 },
    veil: [1.3, 1.1, 1.8],
    update(u, cam, far = 1) {
      const e = ease(u);
      tA.copy(home).add(tB.set(3, 2.4, 7));
      tB.set(-40, 290 * far, 250 * far);
      cam.position.lerpVectors(tA, tB, e * (0.25 + 0.75 * e));
      tA.copy(home).lerp(tC.set(0, 0, 0), ease(Math.min(1, u * 1.5)));
      cam.lookAt(tA);
      sunDot.material.uniforms.uOpen.value = 1 - ease(Math.min(1, u * 2.2));
      this.face(cam);
    },
    face(cam) { core.quaternion.copy(cam.quaternion); sunDot.quaternion.copy(cam.quaternion); },
    free: { u: 0, outer: 470, door: () => home, doorR: 3.2 },
  };
}

// ------------------------------------------------------------------ Universe
function universe() {
  const group = new THREE.Group();
  // the cosmic web: galaxies gather along threads between great clusters
  const nodes = [];
  while (nodes.length < 54) { const d = V(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)); if (d.length() <= 1) nodes.push(d.multiplyScalar(300)); }
  const links = [];
  nodes.forEach((n, i) => nodes.map((m, j) => [n.distanceTo(m), j]).sort((a, b) => a[0] - b[0]).slice(1, 4).forEach(([, j]) => links.push([i, j])));
  const web = createPoints(90000, () => {
    const g = () => (Math.random() + Math.random() + Math.random() - 1.5);
    if (Math.random() < 0.3) { const n = nodes[(Math.random() * nodes.length) | 0]; return { p: [n.x + g() * 18, n.y + g() * 18, n.z + g() * 18] }; }
    const [i, j] = links[(Math.random() * links.length) | 0], t = Math.random(), w = 5 + 16 * Math.sin(Math.PI * t);
    return { p: [lerp(nodes[i].x, nodes[j].x, t) + g() * w, lerp(nodes[i].y, nodes[j].y, t) + g() * w, lerp(nodes[i].z, nodes[j].z, t) + g() * w] };
  }, `
    c = mix(vec3(1.0, 0.82, 0.6), mix(vec3(0.6, 0.75, 1.0), vec3(1.0, 0.55, 0.8), step(0.8, aSeed.y)), aSeed.x);
    a = 0.6 + 0.3*sin(uTime*0.8 + aSeed.z*70.0); s = 0.4 + aSeed.w*aSeed.w*2.4;`, { size: 0.85, maxPx: 34 });
  group.add(web);
  const source = createPortal([1.0, 0.86, 0.6], 1500, 0.12, 0);
  const holder = new THREE.Group(); holder.add(source);     // kept outside the turning web
  const ours = createPortal([0.8, 0.85, 1.0], 6, 0.0, 0); holder.add(ours);      // our own galaxy, one light among them all
  return {
    name: 'Universe', sub: 'the web of all the galaxies', scale: '10²⁶ metres', beat: 2.5, band: 'delta',
    group: new THREE.Group().add(group, holder), sky: { top: [0.0, 0.0, 0.004], bot: [0.006, 0.002, 0.012], glow: [0.2, 0.12, 0.3], dir: [0, 0, -1], stars: 0.25, milk: 0 },
    veil: [1.9, 1.75, 1.5],
    update(u, cam, far = 1) {
      const e = ease(u), a = u * 1.1;
      const d = lerp(26, 900 * far, e * e);
      cam.position.set(Math.sin(a) * d * 0.5 + 12, 8 + d * 0.16, Math.cos(a) * d);
      cam.lookAt(0, 0, 0);
      group.rotation.y = G.uTime.value * 0.006;
      source.material.uniforms.uOpen.value = ease(Math.max(0, (u - 0.5) / 0.5)) * 0.9;     // the universe is seen to rest in light
      ours.material.uniforms.uOpen.value = 1 - ease(Math.min(1, u * 2.5));
      this.face(cam);
    },
    face(cam) { source.quaternion.copy(cam.quaternion); source.position.copy(cam.position).multiplyScalar(-0.75); ours.quaternion.copy(cam.quaternion); },
    free: { u: 0, outer: 930, door: () => ORIGIN, doorR: 5 },
  };
}

// ------------------------------------------------------------------ Multiverse
function multiverse() {
  const group = new THREE.Group();
  // every universe a bubble of light; ours is the one at the centre, where we begin
  const N = 460, geo = new THREE.SphereGeometry(1, 36, 24), seeds = new Float32Array(N * 4);
  const bub = new THREE.InstancedMesh(geo, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uTime: G.uTime },
    vertexShader: `attribute vec4 aSeed; uniform float uTime; varying vec3 vN, vV, vP; varying vec4 vS;
      void main(){ vS = aSeed; vP = position; vec3 p = position*(1.0 + 0.05*sin(uTime*0.7 + aSeed.y*40.0));
        mat4 mm = viewMatrix*modelMatrix*instanceMatrix; vec4 mv = mm*vec4(p, 1.0);
        vV = -mv.xyz; vN = normalize(mat3(mm)*normal); gl_Position = projectionMatrix*mv; }`,
    fragmentShader: `uniform float uTime; varying vec3 vN, vV, vP; varying vec4 vS; ${NOISE} ${AURORA}
      void main(){ float nd = abs(dot(normalize(vN), normalize(vV)));
        vec3 col = aur(vS.x + 0.12*sin(uTime*0.1 + vS.y*20.0));
        float web = pow(fbm3(vP*3.2 + vS.z*50.0 + uTime*0.04), 3.0);
        vec3 c = col*pow(max(1.0 - nd, 0.0), 2.4)*0.9 + col*web*nd*1.5 + vec3(1.0, 0.92, 0.8)*pow(nd, 10.0)*0.1;
        gl_FragColor = vec4(c*0.3, 1.0); }`,
  }), N);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = V(), v = V();
  for (let i = 0; i < N; i++) {
    let sc = 13;
    if (i === 0) v.set(0, 0, 0);
    else { do { v.set(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)); } while (v.length() > 1 || v.length() < 0.11); v.multiplyScalar(330); sc = rnd(5, 21); }
    s.setScalar(sc); bub.setMatrixAt(i, m.compose(v, q, s));
    seeds.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
  }
  geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seeds, 4)); bub.frustumCulled = false; group.add(bub);
  // our own universe, small now, inside its bubble
  const gs = () => Math.random() + Math.random() + Math.random() - 1.5;
  const ours = createPoints(9000, () => ({ p: [gs() * 7, gs() * 7, gs() * 7] }), `
    c = mix(vec3(1.0, 0.82, 0.6), mix(vec3(0.6, 0.75, 1.0), vec3(1.0, 0.55, 0.8), step(0.8, aSeed.y)), aSeed.x);
    a = 0.6 + 0.3*sin(uTime*0.8 + aSeed.z*70.0); s = 0.4 + aSeed.w*aSeed.w*1.6;`, { size: 0.12, maxPx: 12 });
  group.add(ours);
  // the shining foam between them
  const foam = createPoints(30000, () => { do { v.set(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)); } while (v.length() > 1); v.multiplyScalar(350); return { p: [v.x, v.y, v.z] }; }, `
    p += vec3(sin(uTime*0.2 + aSeed.x*50.0), cos(uTime*0.17 + aSeed.y*50.0), sin(uTime*0.15 + aSeed.z*50.0))*3.0;
    c = aur(aSeed.x + aSeed.y*0.3 + uTime*0.01); a = 0.3 + 0.25*sin(uTime*1.1 + aSeed.z*80.0); s = 0.4 + aSeed.w*aSeed.w*2.0;`, { size: 0.5, maxPx: 10, fns: AURORA });
  group.add(foam);
  const heart = createPortal([1.0, 0.86, 0.6], 420, 0.2, 0);
  const outer = new THREE.Group().add(group, heart);      // the light is kept outside the turning cluster
  return {
    name: 'Multiverse', sub: 'universes without number', scale: 'beyond 10²⁶ metres', beat: 40, band: 'gamma',
    group: outer, sky: { top: [0.012, 0.0, 0.03], bot: [0.0, 0.012, 0.03], glow: [0.3, 0.15, 0.45], dir: [0, 0, -1], stars: 0.15, milk: 0, aur: 0.7 },
    veil: [2, 2, 2],
    update(u, cam, far = 1) {
      const e = ease(u), a = u * 0.9, d = lerp(30, 1150 * far, e * e);
      cam.position.set(Math.sin(a) * d * 0.4, 2 + d * 0.14, Math.cos(a) * d);
      cam.lookAt(0, 0, 0);
      group.rotation.y = G.uTime.value * 0.004;
      heart.material.uniforms.uOpen.value = ease(Math.max(0, (u - 0.45) / 0.55)) * 0.8;      // all of them are gathered in one light
      this.face(cam);
    },
    face(cam) { heart.quaternion.copy(cam.quaternion); },
    free: { u: 0.3, outer: 1200, door: () => ORIGIN, doorR: 13.5 },
  };
}

// ================================================================== INWARD
// ------------------------------------------------------------------ Cell
function cell() {
  const group = new THREE.Group();
  const D = 300;
  // the inside of the membrane: the same crimson as the mark we entered through
  const wall = new THREE.Mesh(new THREE.SphereGeometry(360, 64, 48), new THREE.ShaderMaterial({
    side: THREE.BackSide, uniforms: { uTime: G.uTime }, vertexShader: fresnelVert,
    fragmentShader: `varying vec3 vN, vV, vP; uniform float uTime; ${NOISE}
      void main(){ float n = fbm3(vP*0.03 + uTime*0.02); float cells = smoothstep(0.42, 0.5, abs(fract(n*9.0) - 0.5));
        vec3 c = mix(vec3(0.16, 0.012, 0.05), vec3(0.42, 0.04, 0.14), n) * (0.55 + 0.45*cells);
        gl_FragColor = vec4(c*0.5, 1.0); }`,
  }));
  wall.position.z = -D / 2; group.add(wall);
  // organelles drifting in the cytoplasm
  const N = 300, geo = new THREE.SphereGeometry(1, 28, 18), seeds = new Float32Array(N * 4);
  const org = new THREE.InstancedMesh(geo, new THREE.ShaderMaterial({
    uniforms: { uTime: G.uTime },
    vertexShader: `attribute vec4 aSeed; uniform float uTime; varying vec3 vN, vV, vP; varying float vS;
      void main(){ vP = position; vS = aSeed.x; vec3 p = position; p += normal*0.06*sin(uTime*1.2 + position.x*5.0 + aSeed.y*30.0);
        vec4 mv = viewMatrix*modelMatrix*instanceMatrix*vec4(p, 1.0); mv.xy += vec2(sin(uTime*0.3 + aSeed.z*40.0), cos(uTime*0.25 + aSeed.w*40.0))*1.2;
        vV = -mv.xyz; vN = normalize(mat3(viewMatrix*modelMatrix*instanceMatrix)*normal); gl_Position = projectionMatrix*mv; }`,
    fragmentShader: `varying vec3 vN, vV, vP; varying float vS;
      void main(){ float nd = abs(dot(normalize(vN), normalize(vV))); float fr = pow(max(1.0 - nd, 0.0), 2.0);
        vec3 col = vS < 0.45 ? vec3(1.0, 0.45, 0.25) : vS < 0.8 ? vec3(0.3, 0.9, 0.75) : vec3(0.75, 0.5, 1.0);
        float folds = 0.6 + 0.4*sin(vP.x*14.0 + sin(vP.y*6.0)*2.0);                     // inner folds
        vec3 c = col*(0.1 + 0.25*folds*nd) + col*fr*1.1;
        gl_FragColor = vec4(c*smoothstep(330.0, 40.0, length(vV)), 1.0); }`,
  }), N);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = V(), v = V();
  for (let i = 0; i < N; i++) {
    const a = rnd(0, 6.283), r = 9 + Math.pow(Math.random(), 0.7) * 85;
    v.set(Math.cos(a) * r, Math.sin(a) * r * 0.8, rnd(10, -D + 40));
    e.set(rnd(0, 3), rnd(0, 3), rnd(0, 3)); q.setFromEuler(e);
    const kind = Math.random(), sc = rnd(1.4, 4.6);
    s.set(sc * (kind < 0.45 ? 2.4 : 1), sc, sc);
    org.setMatrixAt(i, m.compose(v, q, s));
    seeds.set([kind, Math.random(), Math.random(), Math.random()], i * 4);
  }
  geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seeds, 4)); org.frustumCulled = false; group.add(org);
  const vesicles = createPoints(9000, () => ({ p: [rnd(-110, 110), rnd(-90, 90), rnd(20, -D)] }), `
    p += vec3(sin(uTime*0.4 + aSeed.x*50.0), cos(uTime*0.35 + aSeed.y*50.0), sin(uTime*0.3 + aSeed.z*50.0))*2.0;
    a = 0.5; c = mix(vec3(1.0, 0.6, 0.5), vec3(0.6, 1.0, 0.9), aSeed.w); s = 0.3 + aSeed.w;`, { size: 0.4, maxPx: 22 });
  group.add(vesicles);
  // the nucleus, where the thread of life is kept
  const nuc = new THREE.Mesh(new THREE.SphereGeometry(46, 64, 48), new THREE.ShaderMaterial({
    uniforms: { uTime: G.uTime }, vertexShader: fresnelVert,
    fragmentShader: `varying vec3 vN, vV, vP; uniform float uTime; ${NOISE}
      void main(){ float nd = abs(dot(normalize(vN), normalize(vV))); float pores = smoothstep(0.55, 0.7, fbm3(vP*0.22 + uTime*0.03));
        vec3 c = vec3(0.25, 0.1, 0.5)*(0.25 + 0.5*nd) + vec3(0.7, 0.5, 1.0)*pow(max(1.0 - nd, 0.0), 2.0)*1.2 + vec3(1.0, 0.85, 0.7)*pores*0.9;
        gl_FragColor = vec4(c, 1.0); }`,
  }));
  nuc.position.set(0, 0, -D - 40); group.add(nuc);
  return {
    name: 'Cell', sub: 'the smallest home of life', scale: '10⁻⁵ metres', beat: 10, band: 'alpha',
    group, sky: { top: [0.05, 0.004, 0.02], bot: [0.1, 0.01, 0.04], glow: [0.5, 0.3, 0.8], dir: [0, 0, -1], stars: 0, milk: 0 },
    veil: [1.5, 1.2, 1.9],
    update(u, cam) {
      const ee = ease(u);
      cam.position.set(Math.sin(u * 3.2) * 7, Math.cos(u * 2.6) * 4, -ee * (D - 8));
      cam.lookAt(Math.sin(u * 3.2 + 0.5) * 3, 0, -D - 40);
      cam.rotateZ(Math.sin(u * 4) * 0.12);
    },
    free: { u: 0.2, center: V(0, 0, -D / 2), outer: 340, door: () => nuc.position, doorR: 47.5 },
  };
}

// ------------------------------------------------------------------ DNA
function dna() {
  const group = new THREE.Group();
  const helix = createPoints(150000, () => ({}), `
    float hx = floor(aSeed.x*7.0);                        // which helix: 0 is the one we travel beside
    float t = aSeed.y; float role = aSeed.z;
    float z = 60.0 - t*460.0; float ang = z*0.13 + hx*1.7;
    float rad = 8.0;
    vec3 A = vec3(cos(ang)*rad, sin(ang)*rad, z), B = vec3(cos(ang + 2.5)*rad, sin(ang + 2.5)*rad, z);
    if (role < 0.3) { p = A + (aSeed.xyw - 0.5)*1.5; c = vec3(0.55, 0.8, 1.0); s = 1.0; }
    else if (role < 0.6) { p = B + (aSeed.wxy - 0.5)*1.5; c = vec3(0.55, 0.8, 1.0); s = 1.0; }
    else {
      float st = floor(t*210.0); float zz = 60.0 - (st/210.0)*460.0; float a2 = zz*0.13 + hx*1.7;
      vec3 A2 = vec3(cos(a2)*rad, sin(a2)*rad, zz), B2 = vec3(cos(a2 + 2.5)*rad, sin(a2 + 2.5)*rad, zz);
      float k = fract(aSeed.w*7.13); p = mix(A2, B2, k) + (aSeed.xwy - 0.5)*0.45;
      float base = floor(hash11(st + hx*91.0)*4.0);       // the four letters, in their pairs
      vec3 c1 = base < 1.0 ? vec3(1.0, 0.35, 0.4) : base < 2.0 ? vec3(0.3, 1.0, 0.55) : base < 3.0 ? vec3(1.0, 0.8, 0.3) : vec3(0.45, 0.55, 1.0);
      vec3 c2 = base < 1.0 ? vec3(0.3, 1.0, 0.55) : base < 2.0 ? vec3(1.0, 0.35, 0.4) : base < 3.0 ? vec3(0.45, 0.55, 1.0) : vec3(1.0, 0.8, 0.3);
      c = k < 0.5 ? c1 : c2; s = 0.8;
    }
    if (hx > 0.5) {                                        // the other strands, far around us
      float ha = hx*0.9; float cs = cos(ha), sn = sin(ha);
      p.xy = mat2(cs, -sn, sn, cs)*p.xy; p.yz = mat2(cos(ha*0.4), -sin(ha*0.4), sin(ha*0.4), cos(ha*0.4))*p.yz;
      p += vec3(cos(hx*2.2), sin(hx*2.2), 0.0)*(50.0 + hx*9.0); p.z -= 90.0;
    }
    a = 0.75*(0.7 + 0.3*sin(uTime*1.5 + aSeed.w*50.0));`, { size: 0.42, maxPx: 22 });
  group.add(helix);
  const dust = createPoints(5000, () => ({ p: [rnd(-120, 120), rnd(-100, 100), rnd(40, -420)] }), `
    p += vec3(sin(uTime*0.6 + aSeed.x*50.0), cos(uTime*0.5 + aSeed.y*50.0), 0.0)*2.0; a = 0.4; c = vec3(0.5, 0.75, 1.0); s = 0.3 + aSeed.w*0.8;`, { size: 0.3, maxPx: 14 });
  group.add(dust);
  const door = createPortal([0.55, 0.85, 1.0], 40, 0.8); door.position.set(0, 0, -400); group.add(door);
  return {
    name: 'DNA', sub: 'the thread of life', scale: '10⁻⁹ metres', beat: 6, band: 'theta',
    group, sky: { top: [0.0, 0.006, 0.03], bot: [0.01, 0.03, 0.09], glow: [0.3, 0.6, 1.0], dir: [0, 0, -1], stars: 0, milk: 0 },
    veil: [1.0, 1.5, 1.9],
    update(u, cam) {
      const ee = ease(u), ph = u * 2.6 + 0.6, rr = lerp(24, 3, ease(Math.max(0, (u - 0.7) / 0.3)));
      cam.position.set(Math.cos(ph) * rr, Math.sin(ph) * rr, 50 - ee * 420);
      cam.lookAt(0, 0, cam.position.z - 60);
      cam.rotateZ(u * 0.8);
    },
    free: { u: 0.2, center: V(0, 0, -170), outer: 330, door: () => door.position, doorR: 11 },
  };
}

// ------------------------------------------------------------------ Atom
function atom() {
  const group = new THREE.Group();
  // sodium: two electrons in the first shell, eight in the second, one in the third
  const dir = () => { const u = Math.random() * 2 - 1, t = Math.random() * 6.283, s = Math.sqrt(1 - u * u); return V(s * Math.cos(t), u, s * Math.sin(t)); };
  const gs = () => Math.random() + Math.random() + Math.random() - 1.5;
  const AX = [V(1, 0, 0), V(0, 1, 0), V(0, 0, 1)];
  const cloud = createPoints(110000, () => {
    const k = Math.random(); const d = dir(); let r, sh;
    if (k < 0.2) { r = 14 + gs() * 5; sh = 0; }
    else if (k < 0.82) {
      sh = 1; r = 44 + gs() * 12;
      if (Math.random() < 0.72) d.addScaledVector(AX[(Math.random() * 3) | 0], (Math.random() < 0.5 ? -1 : 1) * 1.7).normalize();   // the three pairs of lobes
    } else { r = 105 + gs() * 26; sh = 2; }
    return { p: [d.x * r, d.y * r, d.z * r], s: [sh / 2, Math.random(), Math.random(), Math.random()] };
  }, `
    // an electron is nowhere and everywhere: each point drifts and breathes in and out of being
    p += vec3(sin(uTime*1.3 + aSeed.y*60.0), sin(uTime*1.1 + aSeed.z*60.0), sin(uTime*0.9 + aSeed.w*60.0)) * (1.0 + aSeed.x*3.0);
    float fl = 0.5 + 0.5*sin(uTime*(0.8 + aSeed.y*1.2) + aSeed.z*90.0);
    c = aSeed.x < 0.25 ? vec3(1.0, 0.85, 0.55) : aSeed.x < 0.75 ? vec3(0.45, 0.7, 1.0) : vec3(0.75, 0.5, 1.0);
    a = smoothstep(0.2, 0.8, fl) * (0.55 - aSeed.x*0.2); s = 0.5 + aSeed.w;`, { size: 0.5, maxPx: 20 });
  group.add(cloud);
  const heart = createPortal([1.0, 0.75, 0.5], 9, 0.9); group.add(heart);
  const dust = createPoints(3000, () => { const d = dir().multiplyScalar(rnd(140, 400)); return { p: [d.x, d.y, d.z] }; }, `a = 0.15 + 0.15*sin(uTime*0.7 + aSeed.x*99.0); c = vec3(0.6, 0.7, 1.0); s = 0.4 + aSeed.w;`, { size: 0.4, maxPx: 10 });
  group.add(dust);
  return {
    name: 'Atom', sub: 'the building block of matter', scale: '10⁻¹⁰ metres', beat: 2.5, band: 'delta',
    group, sky: { top: [0.0, 0.0, 0.012], bot: [0.006, 0.006, 0.03], glow: [0.2, 0.3, 0.6], dir: [0, 0, -1], stars: 0, milk: 0 },
    veil: [1.9, 1.6, 1.3],
    update(u, cam, far = 1) {
      const ee = ease(u), a = u * 2.4, d = lerp(250 * far, 2.2, Math.pow(ee, 0.75));
      cam.position.set(Math.sin(a) * d, Math.sin(u * 3.1) * d * 0.25, Math.cos(a) * d);
      cam.lookAt(0, 0, 0);
      group.rotation.y = G.uTime.value * 0.03;
      this.face(cam);
    },
    face(cam) { heart.quaternion.copy(cam.quaternion); },
    free: { u: 0.2, outer: 330, door: () => ORIGIN, doorR: 3 },
  };
}

// ------------------------------------------------------------------ Nucleus
function nucleus() {
  const group = new THREE.Group();
  // 11 protons and 12 neutrons, packed
  const N = 23, pos = [];
  for (let i = 0; i < N; i++) pos.push(V(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)).multiplyScalar(6));
  for (let it = 0; it < 120; it++) for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) { if (i === j) continue; tA.subVectors(pos[i], pos[j]); const d = tA.length(); if (d < 7.6) pos[i].addScaledVector(tA.normalize(), (7.6 - d) * 0.3); }
    pos[i].multiplyScalar(0.985);
  }
  const geo = new THREE.SphereGeometry(4, 48, 32), seeds = new Float32Array(N * 4);
  const balls = new THREE.InstancedMesh(geo, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uTime: G.uTime },
    vertexShader: `attribute vec4 aSeed; uniform float uTime; varying vec3 vN, vV; varying float vK;
      void main(){ vK = aSeed.x; vec4 mv = viewMatrix*modelMatrix*instanceMatrix*vec4(position*(1.0 + 0.05*sin(uTime*3.0 + aSeed.y*40.0)), 1.0);
        mv.xyz += vec3(sin(uTime*2.3 + aSeed.z*30.0), cos(uTime*2.0 + aSeed.w*30.0), 0.0)*0.25;
        vV = -mv.xyz; vN = normalize(mat3(viewMatrix*modelMatrix*instanceMatrix)*normal); gl_Position = projectionMatrix*mv; }`,
    fragmentShader: `varying vec3 vN, vV; varying float vK;
      void main(){ float nd = abs(dot(normalize(vN), normalize(vV)));
        vec3 col = vK < 0.5 ? vec3(1.0, 0.45, 0.4) : vec3(0.45, 0.65, 1.0);
        gl_FragColor = vec4(col*(pow(max(1.0 - nd, 0.0), 1.6)*0.9 + 0.07), 1.0); }`,
  }), N);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = V(1, 1, 1);
  const quarkSeeds = [];
  pos.forEach((p, i) => { balls.setMatrixAt(i, m.compose(p, q, s)); seeds.set([i < 11 ? 0 : 1, Math.random(), Math.random(), Math.random()], i * 4); for (let k = 0; k < 3; k++) quarkSeeds.push({ p: [p.x, p.y, p.z], s: [k / 3, Math.random(), Math.random(), i < 11 ? 0 : 1] }); });
  geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seeds, 4)); balls.frustumCulled = false; group.add(balls);
  // three quarks in each, never at rest
  const quarks = createPoints(quarkSeeds.length, (i) => quarkSeeds[i], `
    float ph = uTime*(4.0 + aSeed.y*3.0) + aSeed.x*6.2831 + aSeed.z*9.0;
    p += vec3(cos(ph), sin(ph*1.3), sin(ph))*1.9;
    c = aSeed.x < 0.3 ? vec3(1.0, 0.4, 0.35) : aSeed.x < 0.6 ? vec3(0.4, 1.0, 0.5) : vec3(0.45, 0.55, 1.0); a = 1.0; s = 1.0;`, { size: 1.6, maxPx: 90 });
  group.add(quarks);
  const field = createPoints(26000, () => { const d = V(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)).multiplyScalar(160); return { p: [d.x, d.y, d.z] }; }, `
    float fl = 0.5 + 0.5*sin(uTime*(0.6 + aSeed.y*1.4) + aSeed.x*300.0);                  // the restless ground beneath all matter, breathing
    a = smoothstep(0.75, 1.0, fl)*0.5; c = mix(vec3(1.0, 0.85, 0.6), vec3(0.7, 0.8, 1.0), aSeed.w); s = 0.4 + aSeed.z;`, { size: 0.45, maxPx: 16 });
  group.add(field);
  const source = createPortal([1.0, 0.86, 0.6], 60, 0.5, 0); group.add(source);
  return {
    name: 'Nucleus', sub: 'the heart of the atom', scale: '10⁻¹⁴ metres', beat: 40, band: 'gamma',
    group, sky: { top: [0.004, 0.0, 0.01], bot: [0.02, 0.008, 0.02], glow: [0.5, 0.35, 0.2], dir: [0, 0, -1], stars: 0, milk: 0 },
    veil: [1.9, 1.75, 1.5],
    update(u, cam, far = 1) {
      const ee = ease(u), a = u * 2.0 + 0.4, d = lerp(74 * far, 0.5, Math.pow(ee, 0.8));
      cam.position.set(Math.sin(a) * d, Math.sin(u * 2.4) * d * 0.2, Math.cos(a) * d);
      cam.lookAt(0, 0, 0);
      group.rotation.y = G.uTime.value * 0.05;
      source.material.uniforms.uOpen.value = ease(Math.max(0, (u - 0.35) / 0.65));          // between the particles there is only light
      this.face(cam);
    },
    face(cam) { source.quaternion.copy(cam.quaternion); },
    free: { u: 0.7, outer: 150, door: () => ORIGIN, doorR: 0.9 },
  };
}

export function buildRealms() {
  return { out: [earth(), solar(), galaxy(), universe(), multiverse()], in: [cell(), dna(), atom(), nucleus()] };
}
