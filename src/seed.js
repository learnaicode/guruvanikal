import * as THREE from 'three';
import { G, NOISE, createPoints } from './gl.js';
import shape from './logo-shape.json';

// The beginning: the Guruvanikal mark in three dimensions, as a living cell.
//
// The crimson disc is traced point for point from the logo (tools/trace-logo.py). The Guru and the
// child are not drawn: they are the space cut out of the disc, and the light comes through them.
// From here the journey goes two ways to the same Light: outward into the vast (the camera draws
// back) or inward into the subtle (the camera passes through the Guru's outline).

const R = 10;
const ease = (t) => t * t * (3 - 2 * t);

export function createSeed() {
  const group = new THREE.Group();
  const outline = shape.disc[0].pts;
  const color = new THREE.Color(shape.color);

  // ---------- the disc, extruded ----------
  const disc = new THREE.Shape(outline.map(([x, y]) => new THREE.Vector2(x * R, y * R)));
  const geo = new THREE.ExtrudeGeometry(disc, { depth: 1.1, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.05, bevelSegments: 3, curveSegments: 1 });
  geo.translate(0, 0, -0.55);
  geo.computeVertexNormals();
  const body = new THREE.Mesh(geo, new THREE.ShaderMaterial({
    uniforms: { uTime: G.uTime, uCol: { value: color } },
    vertexShader: 'varying vec3 vN, vW, vP; void main(){ vP = position; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }',
    fragmentShader: /* glsl */ `varying vec3 vN, vW, vP; uniform vec3 uCol; uniform float uTime; ${NOISE}
      void main(){
        vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
        float face = smoothstep(0.5, 0.9, N.z);                       // the flat front
        float wall = 1.0 - smoothstep(0.1, 0.6, abs(N.z));            // the cut edges
        float dif = max(dot(N, normalize(vec3(-0.4, 0.6, 0.7))), 0.0);
        float cellTex = 0.92 + 0.08*fbm(vP.xy*0.9 + uTime*0.03);      // the faint grain of a living thing
        vec3 c = uCol * cellTex * (0.42 + 0.62*dif);
        c += uCol * pow(1.0 - max(dot(N, V), 0.0), 3.0) * 0.6;
        // the light from behind catches the walls of the outline
        float glow = wall * (0.55 + 0.45*sin(uTime*0.8 + vP.y*0.4));
        float nearFig = smoothstep(11.0, 2.0, length(vP.xy - vec2(-1.2, -4.0)));
        c += vec3(1.5, 1.05, 0.55) * glow * (0.2 + 0.8*nearFig);
        c = mix(c, c*0.25, (1.0 - face)*(1.0 - wall)*step(N.z, -0.5)); // the back is in shadow
        gl_FragColor = vec4(c, 1.0);
      }`,
  }));
  group.add(body);

  // ---------- the figures: the run of the outline that leaves the rim and returns to it ----------
  const inside = outline.map(([x, y]) => Math.hypot(x, y) < 0.985);
  let start = inside.findIndex((v, i) => v && !inside[(i - 1 + inside.length) % inside.length]);
  const fig = [];
  for (let k = 0; k < outline.length; k++) { const p = outline[(start + k) % outline.length]; if (!inside[(start + k) % outline.length]) break; fig.push(p); }
  const guru = fig.filter((p) => p[0] < 0.05);
  const gx = (guru.reduce((a, p) => a + p[0], 0) / guru.length) * R, gy = (guru.reduce((a, p) => a + p[1], 0) / guru.length) * R + 1.2;
  const figGeo = new THREE.ShapeGeometry(new THREE.Shape(fig.map(([x, y]) => new THREE.Vector2(x * R, y * R))));

  // ---------- the light behind ----------
  const light = new THREE.Mesh(new THREE.CircleGeometry(R * 0.985, 96), new THREE.ShaderMaterial({
    uniforms: { uTime: G.uTime, uC: { value: new THREE.Vector2(gx, gy) }, uPow: { value: 1 } },
    vertexShader: 'varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: /* glsl */ `varying vec2 vP; uniform vec2 uC; uniform float uTime, uPow; ${NOISE}
      void main(){
        vec2 d = vP - uC; float r = length(d); float a = atan(d.y, d.x);
        float rays = 0.75 + 0.25*sin(a*9.0 + uTime*0.3 + fbm(vec2(a*2.0, uTime*0.2))*4.0);
        float g = 0.75 + 2.3*exp(-r*r*0.05)*rays;
        gl_FragColor = vec4(vec3(1.0, 0.9, 0.72)*g*uPow, 1.0);
      }`,
  }));
  light.position.z = -0.7;
  group.add(light);

  // ---------- shafts of light pouring out through the figures ----------
  const LAYERS = 34;
  const shafts = new THREE.InstancedMesh(figGeo, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uTime: G.uTime, uC: { value: new THREE.Vector2(gx, gy) }, uPow: { value: 1 } },
    vertexShader: /* glsl */ `attribute float aL; uniform vec2 uC; varying float vL; varying vec2 vP;
      void main(){
        vL = aL; vec3 p = position;
        p.xy = uC + (p.xy - uC)*(1.0 + aL*0.75);     // the beam widens as it leaves
        p.z = 0.6 + aL*aL*26.0;
        vP = position.xy;
        gl_Position = projectionMatrix*modelViewMatrix*vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */ `varying float vL; varying vec2 vP; uniform vec2 uC; uniform float uTime, uPow; ${NOISE}
      void main(){
        vec2 d = vP - uC; float a = atan(d.y, d.x);
        float f = 0.6 + 0.4*fbm(vec2(a*5.0 + uTime*0.15, vL*3.0 - uTime*0.4));
        gl_FragColor = vec4(vec3(1.0, 0.82, 0.5) * f * (1.0 - vL) * 0.028 * uPow, 1.0);
      }`,
  }), LAYERS);
  const aL = new Float32Array(LAYERS), I = new THREE.Matrix4();
  for (let i = 0; i < LAYERS; i++) { aL[i] = i / LAYERS; shafts.setMatrixAt(i, I); }
  figGeo.setAttribute('aL', new THREE.InstancedBufferAttribute(aL, 1));
  shafts.frustumCulled = false;
  group.add(shafts);

  // ---------- the cell around it ----------
  const membrane = new THREE.Mesh(new THREE.SphereGeometry(13.5, 64, 48), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uTime: G.uTime, uCol: { value: color } },
    vertexShader: /* glsl */ `uniform float uTime; varying vec3 vN, vV; ${NOISE}
      void main(){ vec3 p = position * (1.0 + 0.035*sin(uTime*0.6 + position.y*0.5) + 0.03*sin(uTime*0.45 + position.x*0.6));
        vec4 mv = modelViewMatrix*vec4(p, 1.0); vV = -mv.xyz; vN = normalMatrix*normal; gl_Position = projectionMatrix*mv; }`,
    fragmentShader: 'uniform vec3 uCol; varying vec3 vN, vV; void main(){ float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 3.2); gl_FragColor = vec4((uCol*1.2 + vec3(0.5, 0.25, 0.2))*f*0.3, 1.0); }',
  }));
  group.add(membrane);
  const motes = createPoints(1600, () => { const u = Math.random() * 2 - 1, t = Math.random() * 6.283, r = 4 + Math.random() * 12, s = Math.sqrt(1 - u * u); return { p: [r * s * Math.cos(t), r * u, r * s * Math.sin(t) * 0.8 + 2] }; }, `
    p += vec3(sin(uTime*0.3 + aSeed.x*40.0), cos(uTime*0.25 + aSeed.y*40.0), sin(uTime*0.2 + aSeed.z*40.0))*0.8;
    a = 0.3 + 0.5*sin(uTime*1.2 + aSeed.w*60.0); c = mix(vec3(1.0, 0.45, 0.55), vec3(1.0, 0.85, 0.6), aSeed.w); s = 0.4 + aSeed.w;`, { size: 0.16, maxPx: 30 });
  group.add(motes);
  // other cells, far off and out of focus
  const others = createPoints(240, () => { const a = Math.random() * 6.283, r = 60 + Math.random() * 260; return { p: [Math.cos(a) * r, (Math.random() - 0.5) * 240, -40 - Math.random() * 300] }; }, `
    p.y += sin(uTime*0.1 + aSeed.x*30.0)*6.0; a = 0.1 + 0.08*aSeed.w; c = vec3(0.85, 0.12, 0.33); s = 4.0 + aSeed.w*10.0;`, { size: 3, maxPx: 180 });
  group.add(others);

  const DOOR = new THREE.Vector3(gx, gy + 0.8, 0);
  return {
    name: 'Guruvanikal', sub: 'the Guru and the disciple', scale: 'a single living cell', beat: 14, band: 'beta',
    isSeed: true,
    // travelling freely: pass through the Guru's outline to go within; draw far back to find the Earth
    free: { u: 0, outer: 300, door: () => DOOR, doorR: 1.5 },
    group, sky: { top: [0.02, 0.002, 0.012], bot: [0.07, 0.006, 0.03], glow: [0.5, 0.08, 0.2], dir: [0, 0, -1], stars: 0, milk: 0, aur: 0 },
    veil: [1.9, 1.6, 1.2],
    // dir 0: resting, 1: outward (draw back), -1: inward (through the Guru's outline, into the light)
    update(u, cam, dir, far = 1) {
      const t = G.uTime.value, e = ease(u);
      const sx = Math.sin(t * 0.22) * 7, sy = Math.sin(t * 0.17) * 2.2;
      if (dir >= 0) {
        const d = (44 + 900 * e * e) * far;
        cam.position.set(sx * (1 - e), (sy - 2) * (1 - e), d);
        cam.lookAt(0, -8.5 * (1 - e), 0);
      } else {
        const z = THREE.MathUtils.lerp(44 * far, -0.4, Math.pow(e, 0.8));
        const k = ease(Math.min(1, u * 1.6));
        cam.position.set(THREE.MathUtils.lerp(sx, gx, k), THREE.MathUtils.lerp(sy - 2, gy + 0.8, k), z);
        cam.lookAt(gx * k, THREE.MathUtils.lerp(-8.5, gy + 0.8, k), -6);
      }
      light.material.uniforms.uPow.value = shafts.material.uniforms.uPow.value = 1 + (dir < 0 ? e * 1.5 : 0);
    },
  };
}
