import * as THREE from 'three';
import { G, NOISE, AURORA, createPoints, petalGeometry } from './gl.js';

// The Light: the lotus that holds every Guruvani.
//
//   the light at the centre .......... where the Guru resides (light only; no image is invented).
//                                      Seen from very near, every star and universe is inside it.
//   the golden crown ................. the 1,001 sayings
//   the white petals ................. all 7,955 paragraphs of the Guruvanikal, in the order of the
//                                      books, flowing outward from 1977 to 2006 (each year a ring)
//   the 30 great petals .............. the 30 years; each opens its months and talks
//
// The lotus rests in white space without edge or horizon.
// Petals follow the golden angle, the way a lotus head arranges its seeds.

const GOLDEN = Math.PI * (3 - Math.sqrt(5));
const SKY = {
  white: { top: [2.15, 2.15, 2.2], bot: [2.2, 2.12, 2.06], glow: [0, 0, 0], dir: [0, 1, 0], stars: 0, milk: 0, aur: 0, floor: 1 },
  dark: { top: [0.004, 0.003, 0.02], bot: [0.03, 0.012, 0.05], glow: [0.35, 0.2, 0.4], dir: [0, 1, -0.2], stars: 1, milk: 0.7, aur: 0, floor: 0.35 },
};
const SPREAD = 0.5, OFFSET = 46;

export function createLotus(index, nSay) {
  const group = new THREE.Group();
  const COUNT = nSay + index.total;

  // year of every paragraph petal, for the faint rings
  const yearOf = new Uint8Array(index.total);
  index.years.forEach((Y, k) => yearOf.fill(k, Y.start, Y.start + Y.n));

  // ---------- the petals ----------
  const geo = petalGeometry(6, 10);
  const aIdx = new Float32Array(COUNT), aTint = new Float32Array(COUNT * 3), aRnd = new Float32Array(COUNT);
  const uni = {
    uTime: G.uTime, uBloom: { value: 0 }, uCount: { value: COUNT }, uSelA: { value: -1 }, uSelB: { value: -1 },
    uHover: { value: -10 }, uOne: { value: -10 }, uSay: { value: nSay }, uWhite: { value: 1 },
  };
  const W = uni.uWhite;          // 1: the lotus rests in white space, 0: in dark space
  const mat = new THREE.ShaderMaterial({
    side: THREE.DoubleSide, uniforms: uni,
    vertexShader: /* glsl */ `
      attribute float aIdx, aRnd; attribute vec3 aTint;
      uniform float uTime, uBloom, uCount, uSelA, uSelB, uHover, uOne;
      varying vec2 vUv; varying vec3 vN, vW, vTint; varying float vSel, vHov, vHas, vR;
      void main(){
        vUv = uv; vTint = aTint;
        float n = aIdx / uCount;
        float b = clamp(uBloom*1.7 - n*0.7, 0.0, 1.0); b = b*b*(3.0 - 2.0*b);
        vec3 p = position;
        float ex = (1.0 - b)*1.15 + sin(uTime*0.6 + aRnd*40.0)*0.04*uv.y;
        float cs = cos(ex), sn = sin(ex);
        p.xy = vec2(p.x*cs - p.y*sn, p.x*sn + p.y*cs);
        vSel = step(uSelA, aIdx) * step(aIdx, uSelB);
        vHas = step(0.0, uSelA);
        vHov = max(1.0 - step(0.5, abs(aIdx - uHover)), 1.0 - step(0.5, abs(aIdx - uOne)));
        p *= 1.0 + vHov*0.9;
        mat4 im = modelMatrix * instanceMatrix;
        vec4 wp = im * vec4(p, 1.0);
        wp.xz *= mix(0.3, 1.0, b);
        wp.y += vHov*0.9 + vSel*0.3;
        vR = length(wp.xz);
        vN = normalize(mat3(im) * normal); vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime, uWhite; varying vec2 vUv; varying vec3 vN, vW, vTint; varying float vSel, vHov, vHas, vR;
      void main(){
        vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); if (dot(N, V) < 0.0) N = -N;
        float along = vUv.y;
        vec3 base = mix(vTint*vec3(0.95, 0.72, 0.62), vTint, smoothstep(0.0, 0.7, along));
        base = mix(base, vec3(1.0, 0.72, 0.8), smoothstep(0.72, 1.0, along)*0.3);
        float vein = 0.94 + 0.06*sin((vUv.x - 0.5)*70.0);
        vec3 L = normalize(vec3(0.0, 9.0, 0.0) - vW);                     // the light at the centre
        float dif = max(dot(N, L), 0.0)*0.6 + 0.4;
        float fall = 1.0 / (1.0 + vR*0.028);
        float fr = pow(1.0 - max(dot(N, V), 0.0), 2.5);
        float depth = mix(0.3, 1.0, smoothstep(0.0, 0.85, along));                // shade where petals overlap
        vec3 c = base*vein*depth*(0.07 + dif*(0.2 + 0.4*fall)) + vec3(1.0, 0.86, 0.7)*fr*0.14;
        c += base * smoothstep(0.55, 1.0, along) * 0.12;                 // tips hold a little light
        c = mix(c*1.15 + base*0.03, c*1.7 + base*mix(vec3(0.4, 0.13, 0.24), vec3(0.2), smoothstep(0.0, 0.8, along)), uWhite);   // white space lights them from everywhere
        c = mix(c, c*0.3, vHas*(1.0 - vSel));
        c += vec3(1.0, 0.6, 0.15) * vSel * (0.7 + 0.3*sin(uTime*2.0));
        c = mix(c, vec3(3.2, 1.7, 0.35), vHov);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const petals = new THREE.InstancedMesh(geo, mat, COUNT);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), qy = new THREE.Quaternion(), qz = new THREE.Quaternion();
  const s = new THREE.Vector3(), v = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0), Z = new THREE.Vector3(0, 0, 1);
  const centers = new Float32Array(COUNT * 3);
  let RIM = 0;
  for (let i = 0; i < COUNT; i++) {
    const r = SPREAD * Math.sqrt(i + OFFSET), th = i * GOLDEN;
    const n = i / COUNT;
    const elev = THREE.MathUtils.lerp(1.25, 0.36, Math.pow(n, 0.55));
    const L = 1.5 + r * 0.036;
    v.set(Math.cos(th) * r, 0.0026 * r * r, Math.sin(th) * r);
    qy.setFromAxisAngle(Y, -th); qz.setFromAxisAngle(Z, elev); q.copy(qy).multiply(qz);
    s.set(L, L, L * 1.05);
    petals.setMatrixAt(i, m.compose(v, q, s));
    centers.set([v.x, v.y, v.z], i * 3);
    aIdx[i] = i; aRnd[i] = Math.random();
    if (i < nSay) aTint.set([1.0, 0.62, 0.2], i * 3);                                  // the golden crown
    else aTint.set(yearOf[i - nSay] % 2 ? [0.9, 0.9, 1.0] : [1.0, 0.92, 0.94], i * 3);    // rings of years
    RIM = r;
  }
  geo.setAttribute('aIdx', new THREE.InstancedBufferAttribute(aIdx, 1));
  geo.setAttribute('aRnd', new THREE.InstancedBufferAttribute(aRnd, 1));
  geo.setAttribute('aTint', new THREE.InstancedBufferAttribute(aTint, 3));
  petals.frustumCulled = false;
  group.add(petals);

  // ---------- the 30 great petals of the years ----------
  const big = petalGeometry(16, 32);
  const yearMeshes = [];
  const bigMat = (kind) => new THREE.ShaderMaterial({
    side: THREE.DoubleSide, transparent: kind === 1, depthWrite: true,
    uniforms: { uTime: G.uTime, uOn: { value: 0 }, uBloom: uni.uBloom, uBack: { value: kind }, uWhite: W },
    vertexShader: /* glsl */ `uniform float uTime, uBloom, uOn; varying vec2 vUv; varying vec3 vN, vW;
      void main(){
        vUv = uv; vec3 p = position;
        float b = smoothstep(0.35, 1.0, uBloom);
        float ex = (1.0 - b)*0.9 + sin(uTime*0.4 + modelMatrix[3].x)*0.025*uv.y + uOn*0.12;
        float cs = cos(ex), sn = sin(ex); p.xy = vec2(p.x*cs - p.y*sn, p.x*sn + p.y*cs);
        vec4 wp = modelMatrix*vec4(p, 1.0); vW = wp.xyz; vN = normalize(mat3(modelMatrix)*normal);
        gl_Position = projectionMatrix*viewMatrix*wp;
      }`,
    fragmentShader: /* glsl */ `uniform float uTime, uOn, uBack, uWhite; varying vec2 vUv; varying vec3 vN, vW;
      void main(){
        vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); if (dot(N, V) < 0.0) N = -N;
        float along = vUv.y;
        vec3 base = mix(vec3(0.5, 0.2, 0.42), vec3(1.0, 0.93, 0.95), smoothstep(0.0, 0.75, along));
        base = mix(base, vec3(1.0, 0.62, 0.74), smoothstep(0.7, 1.0, along)*0.45);
        base = mix(base, base*vec3(0.5, 0.42, 0.75), uBack);
        float vein = 0.9 + 0.1*pow(abs(sin((vUv.x - 0.5)*46.0)), 0.6);
        vec3 L = normalize(vec3(0.0, 14.0, 0.0) - vW);
        float dif = max(dot(N, L), 0.0)*0.65 + 0.35;
        float fr = pow(1.0 - max(dot(N, V), 0.0), 2.2);
        vec3 c = base*vein*dif*mix(0.5, 1.25, uWhite) + vec3(1.0, 0.8, 0.75)*fr*mix(0.25, 0.4, uWhite);
        c += vec3(1.0, 0.6, 0.15)*uOn*(0.6 + 0.6*along);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const NY = index.years.length;
  for (let ring = 0; ring < 2; ring++) {
    for (let k = 0; k < NY; k++) {
      const th = ((k + ring * 0.5) / NY) * Math.PI * 2 - Math.PI / 2;
      const r = RIM + 1.5 + ring * 3, L = ring ? 31 : 22;
      const mesh = new THREE.Mesh(big, bigMat(ring));
      mesh.position.set(Math.cos(th) * r, 0.0026 * r * r - 1 - ring * 2.5, Math.sin(th) * r);
      qy.setFromAxisAngle(Y, -th); qz.setFromAxisAngle(Z, ring ? 0.3 : 0.56);
      mesh.quaternion.copy(qy).multiply(qz);
      mesh.scale.set(L, L, L * (ring ? 1.25 : 1.3));
      group.add(mesh);
      if (ring === 0) {
        mesh.userData.year = k;
        yearMeshes.push(mesh);
        const label = yearLabel(index.years[k].y);
        const tr = r + L * 0.9;
        label.position.set(Math.cos(th) * tr, mesh.position.y + L * 0.62, Math.sin(th) * tr);
        mesh.userData.label = label;
        group.add(label);
      }
    }
  }

  // ---------- the light at the centre ----------
  // Light, and from very near a window into it: all the stars and universes are held inside.
  const core = new THREE.Mesh(new THREE.SphereGeometry(2.6, 64, 40), new THREE.ShaderMaterial({
    uniforms: { uTime: G.uTime },
    vertexShader: 'varying vec3 vN, vW, vP; void main(){ vP = position; vN = normal; vec4 w = modelMatrix*vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
    fragmentShader: /* glsl */ `varying vec3 vN, vW, vP; uniform float uTime; ${NOISE} ${AURORA}
      void main(){
        vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
        float nd = max(dot(N, V), 0.0);
        float see = smoothstep(46.0, 9.0, length(cameraPosition - vW));
        vec3 gold = mix(vec3(3.6, 3.0, 2.0), vec3(2.3, 2.05, 1.6), see);      // near, the glare softens so the inside can be seen
        vec3 c = gold;
        if (see > 0.001) {
          vec3 rd = normalize(refract(-V, N, 0.72)), cosmos = vec3(0.0);
          for (int i = 0; i < 6; i++) {
            vec3 p = vP + rd*(0.35 + float(i)*0.7);
            vec3 g = p*(4.0 + float(i)); vec3 id = floor(g), f = fract(g) - 0.5; float h = hash31(id);
            float st = smoothstep(0.2, 0.0, length(f + (vec3(hash11(h*7.0), hash11(h*13.0), hash11(h*29.0)) - 0.5)*0.5)) * step(0.5, h);
            cosmos += (aur(h*5.0) + 0.5) * st * (0.6 + 0.4*sin(uTime*2.0 + h*60.0)) * 1.5;
            float neb = fbm3(p*0.8 + uTime*0.03);
            cosmos += aur(neb*1.6 + float(i)*0.13) * pow(neb, 3.0) * 0.9;
          }
          vec3 inner = vec3(0.015, 0.008, 0.05) + cosmos;
          c = mix(gold, inner, smoothstep(0.25, 0.8, nd) * see * 0.96);
        }
        gl_FragColor = vec4(c, 1.0);
      }`,
  }));
  core.position.y = 4.2;
  group.add(core);
  const halo = new THREE.Mesh(new THREE.PlaneGeometry(64, 64), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uTime: G.uTime, uBloom: uni.uBloom },
    vertexShader: /* glsl */ `varying vec2 vUv; varying float vFar; void main(){ vUv = uv;
      vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); vFar = smoothstep(14.0, 60.0, -mv.z);   // from very near, the glare gives way to what is inside
      mv.xy += position.xy; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: /* glsl */ `varying vec2 vUv; varying float vFar; uniform float uTime, uBloom; ${NOISE}
      void main(){
        vec2 p = vUv*2.0 - 1.0; float r = length(p); float a = atan(p.y, p.x);
        float rays = pow(abs(sin(a*6.0 + uTime*0.12)), 10.0) + 0.6*pow(abs(sin(a*11.0 - uTime*0.09 + 1.0)), 16.0);
        float g = exp(-r*5.5)*1.1 + exp(-r*16.0)*1.6 + rays*exp(-r*3.6)*0.42;
        gl_FragColor = vec4(vec3(1.0, 0.88, 0.62)*g*smoothstep(1.0, 0.6, r)*(0.4 + 0.6*uBloom)*vFar, 1.0);
      }`,
  }));
  halo.position.y = 4.2; halo.frustumCulled = false;
  group.add(halo);

  // ---------- still water under the lotus, fading into the white on every side ----------
  const water = new THREE.Mesh(new THREE.CircleGeometry(900, 96), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: { uTime: G.uTime, uWhite: W },
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
    fragmentShader: /* glsl */ `varying vec3 vW; uniform float uTime, uWhite; ${NOISE} ${AURORA}
      void main(){
        float r = length(vW.xz);
        float rip = sin(r*0.42 - uTime*0.8)*0.5 + 0.5;
        float n = fbm(vW.xz*0.035 + uTime*0.03);
        vec3 c = mix(vec3(1.5, 1.02, 1.0), vec3(2.1, 1.9, 1.8), smoothstep(40.0, 210.0, r));        // the lotus is mirrored as a rose shadow
        c = mix(c, aur(n*1.4 + r*0.004 + uTime*0.01)*1.3 + 0.9, 0.16*smoothstep(60.0, 150.0, r));    // a breath of aurora on the water
        c *= 0.93 + 0.07*rip*smoothstep(260.0, 60.0, r) + (n - 0.5)*0.08;
        // dark space: deep still water holding the lotus light
        vec3 Vd = normalize(cameraPosition - vW);
        float fr = pow(1.0 - max(Vd.y, 0.0), 3.0);
        vec3 d = mix(vec3(0.006, 0.004, 0.025), vec3(0.12, 0.05, 0.14), fr) + vec3(1.0, 0.72, 0.4)*exp(-r*0.02)*0.18*(0.8 + n);
        d += aur(n*1.4 + r*0.004 + uTime*0.01)*0.05*smoothstep(60.0, 160.0, r)*smoothstep(600.0, 200.0, r);
        c = mix(d, c, uWhite);
        float al = mix(smoothstep(900.0, 300.0, r), smoothstep(560.0, 110.0, r) * 0.85, uWhite);
        gl_FragColor = vec4(c, al);
      }`,
  }));
  water.rotation.x = -Math.PI / 2; water.position.y = -7; water.renderOrder = -1;
  group.add(water);

  const motes = createPoints(7000, () => { const a = Math.random() * 6.283, r = 4 + Math.pow(Math.random(), 0.6) * 150; return { p: [Math.cos(a) * r, 0, Math.sin(a) * r] }; }, `
    float t = fract(aSeed.x + uTime*mix(0.008, 0.03, aSeed.y));
    p.y = -6.0 + t*90.0; p.x += sin(t*7.0 + aSeed.z*40.0)*3.0; p.z += cos(t*6.0 + aSeed.w*40.0)*3.0;
    a = sin(t*3.14159)*0.8*(0.5 + 0.5*sin(uTime*2.0 + aSeed.z*90.0));
    c = mix(vec3(2.6, 1.3, 0.25), vec3(2.4, 0.7, 0.9), step(0.8, aSeed.w)); s = 0.4 + aSeed.w*1.3;`, { size: 0.5, blending: THREE.NormalBlending, maxPx: 40 });
  group.add(motes);

  // ---------- picking ----------
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  function pick(x, y, camera) {
    ndc.set((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hitC = ray.intersectObject(core, false)[0];
    const hitP = ray.intersectObject(petals, false)[0];
    if (hitC && (!hitP || hitC.distance <= hitP.distance + 0.5)) return { core: true };
    const hitY = ray.intersectObjects(yearMeshes, false)[0];
    if (hitP && (!hitY || hitP.distance < hitY.distance)) return { petal: hitP.instanceId };
    if (hitY) return { year: hitY.object.userData.year };
    return null;
  }

  return {
    group, petals, COUNT, RIM, yearMeshes,
    name: 'The Light', sub: 'where the Guru resides', scale: 'beyond measure', beat: 0, band: 'OM',
    get sky() { return W.value > 0.5 ? SKY.white : SKY.dark; },
    get white() { return W.value > 0.5; },
    setSpace(white) { W.value = white ? 1 : 0; yearMeshes.forEach((mm) => mm.userData.label.material.color.set(white ? 0x8c1440 : 0xfff0d2)); },
    veil: [1.9, 1.75, 1.5],
    setBloom(b) { uni.uBloom.value = b; },
    hover(i) { uni.uHover.value = i == null ? -10 : i; },
    mark(i) { uni.uOne.value = i == null ? -10 : i; },
    select(a, b) { uni.uSelA.value = a == null ? -1 : a; uni.uSelB.value = b == null ? -1 : b; },
    hoverYear(k) { yearMeshes.forEach((mm, i) => { mm.material.uniforms.uOn.value = i === k ? 1 : 0; }); },
    petalPosition(i, out) { return out.set(centers[i * 3], centers[i * 3 + 1], centers[i * 3 + 2]); },
    pick,
  };
}

function yearLabel(y) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 96;
  const x = c.getContext('2d');
  x.font = '500 64px "Cormorant Garamond", Georgia, serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.shadowColor = 'rgba(0,0,0,0.35)'; x.shadowBlur = 10; x.fillStyle = '#ffffff';
  x.fillText(String(y), 128, 50);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, opacity: 0.95, toneMapped: false }));
  sp.scale.set(9, 3.4, 1);
  return sp;
}
