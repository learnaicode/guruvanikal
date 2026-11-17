import * as THREE from 'three';
import { LOW } from './gl.js';
import { G, NOISE, AURORA, createPoints, petalGeometry, lotusPetalGeometry } from './gl.js';
import AUM from './aum-shape.json';

// The Light: the lotus that holds every Guruvani.
//
//   the light at the centre .......... where the Guru resides: the AUM, in white light, in three
//                                      dimensions (traced from brand/aum.png by tools/trace-aum.py).
//                                      No image is invented. It is the door to every journey.
//   the golden crown ................. the 1,001 sayings
//   the white petals ................. all 7,955 paragraphs of the Guruvanikal, in the order of the
//                                      books, flowing outward from 1977 to 2006 (each year a ring)
//   the great white petals ........... four whorls, as on a white lotus. The 30 of the innermost whorl
//                                      are the 30 years; each opens its months and talks
//
// The lotus rests in white space without edge or horizon.
// Petals follow the golden angle, the way a lotus head arranges its seeds.

const GOLDEN = Math.PI * (3 - Math.sqrt(5));
const SKY = {
  white: { top: [2.15, 2.15, 2.2], bot: [2.2, 2.12, 2.06], glow: [0, 0, 0], dir: [0, 1, 0], stars: 0, milk: 0, aur: 0, floor: 1 },
  dark: { top: [0.004, 0.003, 0.02], bot: [0.03, 0.012, 0.05], glow: [0.35, 0.2, 0.4], dir: [0, 1, -0.2], stars: 1, milk: 0.7, aur: 0, floor: 0.35 },
  cosmos: { top: [0.002, 0.006, 0.03], bot: [0.006, 0.016, 0.06], glow: [0.04, 0.07, 0.18], dir: [0, 1, 0], stars: 0, milk: 0, aur: 0, floor: 0.8 },
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
        wp.xz *= mix(0.22, 1.0, b);
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
        float vf = (vUv.x - 0.5)*70.0; float vein = 0.94 + 0.06*sin(vf)*(1.0 - smoothstep(0.25, 0.9, fwidth(vf)));
        vec3 L = normalize(vec3(0.0, 9.0, 0.0) - vW);                     // the light at the centre
        float dif = max(dot(N, L), 0.0)*0.6 + 0.4;
        float fall = 1.0 / (1.0 + vR*0.028);
        float fr = pow(max(1.0 - max(dot(N, V), 0.0), 0.0), 2.5);
        float depth = mix(0.3, 1.0, smoothstep(0.0, 0.85, along));                // shade where petals overlap
        vec3 c = base*vein*depth*(0.16 + dif*(0.34 + 0.4*fall)) + vec3(1.0, 0.86, 0.7)*fr*0.14;
        c += base * smoothstep(0.55, 1.0, along) * 0.12;                 // tips hold a little light
        c = mix(c*1.15 + base*0.03, c*1.25 + base*mix(vec3(0.4, 0.13, 0.24), vec3(0.2), smoothstep(0.0, 0.8, along)), uWhite);   // white space lights them from everywhere
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

  // ---------- the great white petals ----------
  // They open as a real lotus opens. At first they are a closed bud: every petal stands upright,
  // furled and narrow, leaning in so the points meet over the light at the centre, which glows through
  // them. Then the outermost whorl loosens and bends back, then the next, and the innermost (the years)
  // last of all, uncovering the heart. Each petal turns on its base; it slowly loses its furl and
  // widens, its point relaxes a little backward at the end, and the petals of one whorl move together
  // with small natural differences, never one after another round the ring. Their bases always rest on
  // the edge of the heart of small petals, so no gap ever opens between them.
  const big = lotusPetalGeometry(LOW ? 12 : 18, LOW ? 24 : 36);
  const yearMeshes = [], whorls = [];
  const uB = { value: 0 }, uK = { value: 0.22 };              // how far the flower has opened; how wide its heart is
  const bigMat = (w, start, alt, rcF) => new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: { uTime: G.uTime, uOn: { value: 0 }, uB, uK, uRing: { value: w.ring }, uStart: { value: start }, uLift: { value: w.lift }, uClosed: { value: w.closed },
      uZc: { value: w.zc }, uReflex: { value: w.reflex }, uCurl: { value: w.curl }, uSc: { value: w.sc }, uRise: { value: w.rise },
      uAlt: { value: alt }, uCupK: { value: w.cupK }, uRcF: { value: rcF }, uRc: { value: w.rc }, uL: { value: w.L }, uWide: { value: w.wide }, uWhite: W },
    vertexShader: /* glsl */ `uniform float uTime, uB, uK, uOn, uRing, uStart, uLift, uClosed, uZc, uReflex, uCurl, uSc, uRise, uAlt, uCupK, uRcF, uRc, uL, uWide;
      varying vec2 vUv; varying vec3 vN, vW; varying float vO;
      void main(){
        vUv = uv; vec3 p = position; vec3 n = normal;
        float x = clamp((uB - uStart)/0.52, 0.0, 1.0);
        float o = x*x*x*(x*(x*6.0 - 15.0) + 10.0);                  // loosening slowly, opening, settling slowly
        vO = o;
        float a = (uv.x - 0.5)*2.0, v = uv.y;
        p.z *= mix(mix(min(uZc*1.8, 1.0), uZc, smoothstep(0.0, 0.35, v)), 1.0, o);   // furled narrow in the bud, broad at its foot so the bud is closed
        // In the bud each petal bends across exactly as much as the round bud it wraps (no ridges),
        // swells, and is drawn in so that its point meets the others.
        // the cup of the petal: deep in the inner whorls, gentle in the outer ones, so that each layer rests
        // on the one beneath without its raised edges passing through it; none at all in the closed bud
        p.y -= (1.0 - mix(0.0, uCupK, o))*0.2*a*a*sin(3.14159*min(v*1.15, 1.0))*(1.0 - 0.5*v);
        float zL = p.z*uWide;
        float reff = max(1.5, (uRc + 2.5*sin(3.14159*min(v*1.4, 1.0)))*(1.0 - 0.95*v*v));
        p.y += (1.0 - o)*(zL*zL*uL*uSc/(2.0*reff) + uCurl*pow(v, 2.5));
        // Each petal is turned very slightly on its own length, so that it lies over the neighbour on
        // one side and under the one on the other, as the petals of a real lotus do; they never cut through.
        p.y += zL*mix(0.05, 0.13, o);
        p.y -= o*o*uReflex*v*v*v;                                    // fully open, the point relaxes backward
        float ang = (1.0 - o)*(uClosed - uLift) + o*uAlt*0.07 + sin(uTime*0.4 + modelMatrix[3].x)*0.018*v*o + uOn*0.1;
        float cs = cos(ang), sn = sin(ang);
        p.xy = vec2(p.x*cs - p.y*sn, p.x*sn + p.y*cs); n.xy = vec2(n.x*cs - n.y*sn, n.x*sn + n.y*cs);
        p *= mix(uSc, 1.0, o);
        vec4 wp = modelMatrix*vec4(p, 1.0);
        float s = clamp((uK - 0.22)/0.78, 0.0, 1.0);
        wp.xz -= modelMatrix[3].xz*(1.0 - mix(uRcF, 1.0, s));        // the base rests round the edge of the heart
        wp.y += uRise*(1.0 - s);                                     // and all the whorls rise from one level until the flower is open
        vW = wp.xyz; vN = normalize(mat3(modelMatrix)*n);
        gl_Position = projectionMatrix*viewMatrix*wp;
      }`,
    fragmentShader: /* glsl */ `uniform float uTime, uOn, uRing, uWhite; varying vec2 vUv; varying vec3 vN, vW; varying float vO;
      void main(){
        vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); float facing = dot(N, V); if (facing < 0.0) N = -N;
        float along = vUv.y, across = abs(vUv.x - 0.5)*2.0;
        // a white lotus: pearl white, warm where the light of the centre falls at its base, the faintest rose at its point
        vec3 base = mix(vec3(1.0, 0.9, 0.74), vec3(1.0, 0.985, 0.975), smoothstep(0.0, 0.42, along));
        base = mix(base, vec3(1.0, 0.84, 0.89), smoothstep(0.6, 1.0, along)*mix(0.6, 0.42, vO));   // a bud is a little rosier at its points
        base *= mix(vec3(1.0), vec3(0.93, 0.95, 1.0), uRing*0.3);                        // the outer whorls a breath cooler
        // the fine veins, faded where they would be finer than a pixel (so they never shimmer)
        float vf = (vUv.x - 0.5)*(26.0 + 30.0*along); float vw = fwidth(vf);
        float vein = 1.0 - 0.07*pow(abs(sin(vf)), 3.0)*smoothstep(0.02, 0.3, along)*(1.0 - smoothstep(0.25, 0.9, vw));
        vec3 L = normalize(vec3(0.0, 16.0, 0.0) - vW);
        float dif = max(dot(N, L), 0.0);
        float through = pow(max(dot(-N, L), 0.0), 1.5)*mix(0.7, 0.35, vO);              // light passing through; strongest in the bud
        float sh = 0.5 + 0.4*dif + through;
        sh *= 1.0 - 0.22*smoothstep(0.3, 0.0, along)*(1.0 - across*0.4)*vO;           // shade deep in the cup, where petals meet
        sh *= 0.9 + 0.1*smoothstep(0.0, 0.7, across);                                    // the midrib lies a little deeper
        sh *= 1.0 - 0.1*uRing;
        float fr = pow(max(1.0 - abs(facing), 0.0), 2.6);
        vec3 c = base*vein*sh*mix(0.82, 1.2, uWhite) + vec3(1.0, 0.95, 0.9)*fr*mix(0.16, 0.3, uWhite);
        c += vec3(1.0, 0.92, 0.85)*smoothstep(0.82, 1.0, across)*0.05;                   // a fine bright edge
        c += vec3(1.0, 0.6, 0.15)*uOn*(0.35 + 0.5*along);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const NY = index.years.length;
  //            count, base radius, length, lift, width, height, opens at, bends back
  const WHORL = [[NY, RIM - 3.5, 24, 0.5, 0.62, 0.2, 0.4, 0.0], [NY, RIM - 1.5, 32, 0.33, 0.6, -1.5, 0.27, 0.035],
    [20, RIM + 0.5, 40, 0.17, 0.64, -3.4, 0.14, 0.06], [15, RIM + 1.5, 46, 0.04, 0.7, -5.2, 0.01, 0.09]];
  WHORL.forEach(([n, r, L, lift, wide, dy, opens, reflex], ring) => {
    // The bud: each whorl a little outside the one within it, all round the gathered heart. Each petal
    // leaves its base leaning a little outward, swells, and curves in so that its point meets the
    // others over the centre: a teardrop. The inner whorls are smaller in the bud and lie nested inside
    // the outer ones, which alone are seen. In each whorl the petals alternate, one a little inside and
    // more upright, the next a little outside, so that they lie over one another and never cross.
    const sc = [0.86, 0.84, 0.84, 0.92][ring], rc = RIM * 0.22 + 0.6 + ring * 1.3, Lc = L * sc, A = 0.2;
    const closed = Math.PI / 2 - A;
    const curl = (Math.sin(A) + (rc - 0.6) / Lc) / Math.cos(A) - 0.25;      // the inward bend that brings the point to the centre
    const zc = THREE.MathUtils.clamp((1.7 * 2 * Math.PI * rc) / (n * 2 * 0.54 * Lc * wide), 0.1, 1);
    const rise = (0.0026 * (RIM - 3.5) ** 2 + 0.2) - (0.0026 * r * r + dy);
    const cupK = [1.0, 0.5, 0.36, 0.28][ring];
    const w = { ring, lift, closed, zc, reflex, curl, sc, rise, rc, L, wide, cupK };
    for (let k = 0; k < n; k++) {
      const th = ((k + (ring % 2) * 0.5) / n) * Math.PI * 2 - Math.PI / 2;
      const alt = k % 2;
      const rr = r - alt * 1.2;
      const mesh = new THREE.Mesh(big, bigMat(w, opens + (Math.random() - 0.5) * 0.05, alt, (rc - alt * 0.45) / rr));
      mesh.position.set(Math.cos(th) * rr, 0.0026 * r * r + dy + alt * 0.5, Math.sin(th) * rr);
      qy.setFromAxisAngle(Y, -th); qz.setFromAxisAngle(Z, lift);
      mesh.quaternion.copy(qy).multiply(qz);
      mesh.scale.set(L, L, L * wide).multiplyScalar(alt ? 0.97 : 1);
      group.add(mesh); whorls.push(mesh);
      if (ring === 0) {
        mesh.userData.year = k;
        yearMeshes.push(mesh);
        const label = yearLabel(index.years[k].y);
        const tr = r + L * (Math.cos(lift) - 0.25 * Math.sin(lift)) * 1.03;                 // just beyond the point of the petal
        label.position.set(Math.cos(th) * tr, mesh.position.y + L * (Math.sin(lift) + 0.25 * Math.cos(lift)) + 2.4, Math.sin(th) * tr);
        mesh.userData.label = label; label.material.opacity = 0;
        group.add(label);
      }
    }
  });
  // The calyx: the smooth round cup the bud rises from, so that its underside is one soft curve and
  // the feet of the petals are never seen. As the flower opens it widens and settles beneath it.
  const calyxPts = []; for (let i = 0; i <= 20; i++) { const t = (i / 20) * Math.PI / 2; calyxPts.push(new THREE.Vector2(Math.sin(t), -Math.cos(t))); }
  const budTop = 0.0026 * (RIM - 3.5) ** 2 + 0.2 + 4.2, budR = RIM * 0.22 + 0.6 + 3 * 1.3 + 1.3;
  const calyx = new THREE.Mesh(new THREE.LatheGeometry(calyxPts, 96), new THREE.ShaderMaterial({
    side: THREE.DoubleSide, uniforms: { uK, uWhite: W },
    vertexShader: /* glsl */ `uniform float uK; varying vec3 vN, vW; varying float vY;
      void main(){
        float s = clamp((uK - 0.22)/0.78, 0.0, 1.0);
        float R = mix(${budR.toFixed(2)}, ${(RIM - 2).toFixed(2)}, s), D = mix(9.5, 5.0, s), top = mix(${budTop.toFixed(2)}, 0.3, s);
        vY = -position.y;
        vec3 p = vec3(position.x*R, top + position.y*D, position.z*R);
        vec4 w = modelMatrix*vec4(p, 1.0); vW = w.xyz;
        vN = normalize(mat3(modelMatrix)*vec3(normal.x/R, normal.y/D, normal.z/R));
        gl_Position = projectionMatrix*viewMatrix*w;
      }`,
    fragmentShader: /* glsl */ `uniform float uWhite; varying vec3 vN, vW; varying float vY;
      void main(){
        vec3 N = normalize(vN), V = normalize(cameraPosition - vW); if (dot(N, V) < 0.0) N = -N;
        // pearl white where it meets the petals, a breath of pale green toward the stem
        vec3 base = mix(vec3(1.0, 0.985, 0.97), vec3(0.8, 0.88, 0.74), smoothstep(0.15, 1.0, vY));
        float dif = 0.55 + 0.35*max(dot(N, normalize(vec3(0.3, 1.0, 0.4))), 0.0);
        float fr = pow(max(1.0 - abs(dot(N, V)), 0.0), 2.6);
        vec3 c = base*dif*mix(0.82, 1.2, uWhite) + vec3(1.0, 0.95, 0.9)*fr*0.18;
        gl_FragColor = vec4(c, 1.0);
      }`,
  }));
  group.add(calyx);
  // the receptacle: the pale body of the flower under the small petals, so that nothing shows between them
  const bowlPts = []; for (let i = 0; i <= 24; i++) { const r = (i / 24) * (RIM + 1); bowlPts.push(new THREE.Vector2(r, 0.0026 * r * r - 0.7)); }
  const bowl = new THREE.Mesh(new THREE.LatheGeometry(bowlPts, 96), new THREE.ShaderMaterial({
    side: THREE.DoubleSide, uniforms: { uWhite: W },
    vertexShader: 'varying float vR; void main(){ vR = length(position.xz); gl_Position = projectionMatrix*modelViewMatrix*vec4(position, 1.0); }',
    fragmentShader: 'uniform float uWhite; varying float vR; void main(){ vec3 c = mix(vec3(0.62, 0.5, 0.36), vec3(0.5, 0.47, 0.46), smoothstep(4.0, 30.0, vR)); gl_FragColor = vec4(c*mix(0.75, 2.0, uWhite), 1.0); }',
  }));
  group.add(bowl);

  // ---------- the light at the centre: AUM ----------
  // The mark is extruded so that it has body, and it is made of white light. It sways very slowly.
  const CY = 13, AH = 12;                                   // where it floats, and how tall it is
  const shapes = AUM.parts.map((part) => {
    const sh = new THREE.Shape(part.outer.map(([x, y]) => new THREE.Vector2(x * AH, y * AH)));
    part.holes.forEach((h) => sh.holes.push(new THREE.Path(h.map(([x, y]) => new THREE.Vector2(x * AH, y * AH)))));
    return sh;
  });
  const aumGeo = new THREE.ExtrudeGeometry(shapes, { depth: 1.7, bevelEnabled: true, bevelThickness: 0.3, bevelSize: 0.18, bevelSegments: 4, curveSegments: 1 });
  aumGeo.translate(0, 0, -0.85); aumGeo.computeVertexNormals();
  const aumMat = new THREE.ShaderMaterial({
    uniforms: { uTime: G.uTime, uWhite: W, uA: { value: 1 } }, transparent: true,
    vertexShader: 'varying vec3 vN, vW; void main(){ vec4 w = modelMatrix*vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }',
    fragmentShader: /* glsl */ `varying vec3 vN, vW; uniform float uTime, uWhite, uA;
      void main(){
        vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
        float nd = abs(dot(N, V));
        // white light: the faces blaze, the cut edges are a little softer so the form is seen
        vec3 c = vec3(1.0, 0.985, 0.96) * (0.5 + 1.15*pow(nd, 1.6)) * (0.94 + 0.06*sin(uTime*0.9));
        // in white space the same white is given a body of pale gold at its edges, or it could not be seen
        c = mix(c, mix(vec3(0.95, 0.66, 0.2), vec3(2.6, 2.45, 2.2), pow(nd, 2.0)), uWhite);
        gl_FragColor = vec4(c, uA);
      }`,
  });
  const aum = new THREE.Mesh(aumGeo, aumMat);
  aum.position.y = CY; aum.onBeforeRender = () => { aum.rotation.y = Math.sin(G.uTime.value * 0.22) * 0.55; };
  group.add(aum);
  // what is touched: an unseen sphere around the AUM
  const core = new THREE.Mesh(new THREE.SphereGeometry(6.4, 16, 12), new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false }));
  core.position.y = CY; core.renderOrder = -5;
  group.add(core);
  const halo = new THREE.Mesh(new THREE.PlaneGeometry(64, 64), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uTime: G.uTime, uBloom: uni.uBloom },
    vertexShader: /* glsl */ `varying vec2 vUv; varying float vFar; void main(){ vUv = uv;
      vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); vFar = smoothstep(6.0, 60.0, -mv.z);   // from very near, the glare gives way to what is inside
      mv.xy += position.xy; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: /* glsl */ `varying vec2 vUv; varying float vFar; uniform float uTime, uBloom; ${NOISE}
      void main(){
        vec2 p = vUv*2.0 - 1.0; float r = length(p); float a = atan(p.y, p.x);
        float rays = pow(abs(sin(a*6.0 + uTime*0.12)), 10.0) + 0.6*pow(abs(sin(a*11.0 - uTime*0.09 + 1.0)), 16.0);
        float g = exp(-r*4.2)*0.4 + rays*exp(-r*3.2)*0.22;                 // a soft glory behind the AUM, never hiding it
        gl_FragColor = vec4(vec3(1.0, 0.96, 0.88)*g*smoothstep(1.0, 0.6, r)*(0.4 + 0.6*uBloom)*vFar*0.8, 1.0);
      }`,
  }));
  halo.position.y = CY; halo.frustumCulled = false;
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
        float fr = pow(max(1.0 - max(Vd.y, 0.0), 0.0), 3.0);
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
    space: 'white',
    get sky() { return SKY[this.space]; },
    // white: the lotus in white space · dark: on dark water · cosmos: floating among the stars
    setSpace(mode) { this.space = mode; W.value = mode === 'white' ? 1 : 0; water.visible = mode !== 'cosmos'; motes.visible = mode !== 'cosmos'; yearMeshes.forEach((mm) => mm.userData.label.material.color.set(mode === 'white' ? 0x8c1440 : 0xfff0d2)); },
    veil: [1.9, 1.75, 1.5],
    // inside the AUM, looking out: the mark and its glare step aside
    setWithin(on) { aum.visible = !on; halo.visible = !on; },
    // b: 0 a closed bud, 1 fully open. The heart of small petals opens with the innermost whorl.
    setBloom(b) {
      const bs = Math.min(1, Math.max(0, (b - 0.3) / 0.7)), k = Math.min(1, Math.max(0, bs * 1.7 - 0.7)), K = 0.22 + 0.78 * k * k * (3 - 2 * k);
      uni.uBloom.value = bs; uB.value = b; uK.value = K; bowl.scale.set(K, 1, K);
      const lo = Math.min(1, Math.max(0, (b - 0.93) * 14)); yearMeshes.forEach((mm) => { mm.userData.label.material.opacity = 0.95 * lo; });
    },
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
