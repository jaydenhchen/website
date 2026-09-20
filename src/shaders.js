export const MORPH = /* glsl */ `
  const float PI = 3.14159265;
  const float TAU = 6.2831853;

  vec3 sphere(float u, float v) {
    float theta = u * PI;
    float phi = v * TAU;
    float n = sin(theta * 6.0 + v * 8.0) * 0.04;
    return vec3(sin(theta) * cos(phi), cos(theta), sin(theta) * sin(phi)) * (1.52 + n);
  }

  vec3 torus(float u, float v) {
    float theta = u * TAU;
    float phi = v * TAU;
    float R = 1.22;
    float r = 0.46 + 0.06 * sin(phi * 3.0);
    return vec3(
      (R + r * cos(theta)) * cos(phi),
      r * sin(theta) * 1.2,
      (R + r * cos(theta)) * sin(phi)
    );
  }

  vec3 knot(float u, float v) {
    float t = u * TAU;
    float p = 2.0;
    float q = 3.0;
    vec3 core = vec3(
      sin(p * t) * (1.7 + cos(q * t)),
      sin(q * t) * 1.08,
      cos(p * t) * (1.7 + cos(q * t))
    ) * 0.54;
    float a = v * TAU;
    vec3 n = normalize(vec3(cos(p * t), 0.28, sin(p * t)));
    vec3 tanv = normalize(vec3(p * cos(p * t), q * cos(q * t), -p * sin(p * t)));
    vec3 b = normalize(cross(tanv, n));
    return core + (n * cos(a) + b * sin(a)) * 0.22;
  }

  vec3 helix(float u, float v) {
    float t = (v - 0.5) * 9.4;
    float strand = step(0.5, u);
    float off = strand * PI;
    float r = 0.64 + 0.14 * sin(t * 2.2 + u * TAU);
    vec3 a = vec3(r * cos(t * 2.45 + off), t * 0.4, r * sin(t * 2.45 + off));
    float rung = pow(abs(sin(u * PI * 14.0)), 8.0);
    a.x *= 1.0 - rung * 0.35;
    a.z *= 1.0 - rung * 0.35;
    return a;
  }

  vec3 crystal(float u, float v) {
    vec3 s = sphere(u, v);
    vec3 a = abs(s);
    float m = max(a.x, max(a.y, a.z));
    vec3 cube = (s / max(m, 0.0008)) * 1.22;
    float spikes = pow(abs(sin(u * PI * 5.0) * sin(v * PI * 7.0)), 2.2);
    return mix(cube, normalize(s) * (1.18 + spikes * 0.72), 0.5);
  }

  vec3 mobius(float u, float v) {
    float a = u * TAU;
    float t = (v - 0.5) * 2.0;
    float c = 0.55 * t * cos(a * 0.5);
    float x = (1.05 + c) * cos(a);
    float y = (1.05 + c) * sin(a);
    float z = 0.55 * t * sin(a * 0.5);
    return vec3(x, z * 1.15, y) * 1.18;
  }

  vec3 galaxy(float u, float v) {
    float arm = u * TAU * 2.6 + v * 5.5;
    float r = 0.2 + v * 2.15;
    float y = sin(u * TAU * 3.0 + v * 9.0) * 0.08 * (1.0 - v);
    return vec3(r * cos(arm), y, r * sin(arm));
  }

  vec3 morph(float u, float v, float p) {
    float x = clamp(p, 0.0, 0.999) * 6.0;
    float i = floor(x);
    float f = smoothstep(0.0, 1.0, fract(x));
    vec3 a;
    vec3 b;
    if (i < 0.5) { a = sphere(u, v); b = torus(u, v); }
    else if (i < 1.5) { a = torus(u, v); b = knot(u, v); }
    else if (i < 2.5) { a = knot(u, v); b = helix(u, v); }
    else if (i < 3.5) { a = helix(u, v); b = crystal(u, v); }
    else if (i < 4.5) { a = crystal(u, v); b = mobius(u, v); }
    else { a = mobius(u, v); b = galaxy(u, v); }
    return mix(a, b, f);
  }

  float hash13(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }
`

export const meshVertex = /* glsl */ `
  varying vec3 vPos;
  varying vec3 vView;
  varying float vLift;
  varying float vFres;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uShock;
  uniform float uAudio;
  uniform float uWave;
  uniform float uPunch;
  ${MORPH}

  void main() {
    vec2 grid = uv;
    vec3 pos = morph(grid.x, grid.y, uProgress);
    float n = hash13(pos * 2.4 + uTime * 0.12);
    pos += normalize(pos + 0.0001) * (n - 0.5) * 0.07;
    vec3 pull = vec3(uMouse.x * 2.6, uMouse.y * 1.7, 0.85);
    vec3 d = pull - pos;
    float falloff = exp(-dot(d, d) * 0.32) * uHover * 0.62;
    pos += d * falloff;
    float rad = length(pos);
    float ring = exp(-abs(rad - uWave * 4.6) * 3.1) * uPunch;
    float crush = uPunch * (1.0 - uWave) * 0.22;
    pos += normalize(pos + 0.0001) * (ring * 1.55 + crush + uAudio * 0.18);
    pos *= 1.0 + crush * 0.12;
    vLift = falloff + ring + crush;
    vec4 world = modelMatrix * vec4(pos, 1.0);
    vPos = world.xyz;
    vView = cameraPosition - world.xyz;
    vFres = 0.0;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`

export const meshFragment = /* glsl */ `
  varying vec3 vPos;
  varying vec3 vView;
  varying float vLift;
  uniform float uProgress;
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform float uShock;
  uniform float uPunch;
  uniform float uWave;

  void main() {
    vec3 n = normalize(cross(dFdx(vPos), dFdy(vPos)));
    vec3 v = normalize(vView);
    vec3 l1 = normalize(vec3(0.6, 0.85, 0.28));
    vec3 l2 = normalize(vec3(-0.7, 0.15, 0.65));
    float ndv = max(dot(n, v), 0.0);
    float fres = pow(1.0 - ndv, 2.4);
    float diff = max(dot(n, l1), 0.0) * 0.7 + max(dot(n, l2), 0.0) * 0.38;
    float spec = pow(max(dot(reflect(-l1, n), v), 0.0), 48.0);
    vec3 irid = 0.5 + 0.5 * cos(vec3(0.0, 0.33, 0.67) * TAU_PLACEHOLDER + ndv * 9.0 + uProgress * 6.283 + vPos.y * 0.8);
    irid = mix(irid, mix(uColorA, uColorB, fres), 0.55);
    irid = mix(irid, uColorC, 0.35 + 0.35 * sin(uProgress * 6.283 + uTime * 0.35));
    vec3 col = irid * (0.05 + diff * 0.55);
    col += vec3(1.1, 1.04, 0.95) * spec * 0.7;
    col += fres * uColorB * 0.7;
    col += uColorA * pow(fres, 3.0) * 0.35;
    float scan = pow(abs(sin(vPos.y * 5.0 - uTime * 2.4)), 28.0);
    col += uColorB * scan * 0.16;
    col += uColorC * vLift * (0.9 + uPunch * 1.6);
    col += vec3(1.15, 1.12, 1.05) * uPunch * (0.12 + exp(-abs(length(vPos) - uWave * 4.6) * 2.8) * 0.85);
    col += uColorA * uShock * 0.18;
    float fog = 1.0 - exp(-length(vView) * 0.028);
    col = mix(col, vec3(0.02, 0.021, 0.03), fog);
    float alpha = mix(0.88, 0.98, fres);
    gl_FragColor = vec4(col, alpha);
  }
`.replace('TAU_PLACEHOLDER', '6.2831853')

export const particleVertex = /* glsl */ `
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uSize;
  uniform float uShock;
  uniform float uAudio;
  uniform float uWave;
  uniform float uPunch;
  varying float vAlpha;
  varying float vMix;
  ${MORPH}

  void main() {
    vec3 pos = morph(position.x, position.y, uProgress);
    float burst = uPunch * (0.85 + uWave * 1.8);
    pos += normal * (0.05 * sin(uTime * 0.9 + position.x * 22.0) + burst + uAudio * 0.25);
    vec3 pull = vec3(uMouse.x * 2.3, uMouse.y * 1.5, 0.6);
    pos += (pull - pos) * exp(-dot(pull - pos, pull - pos) * 0.38) * 0.4;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (1.15 + 0.45 * sin(uTime + position.x * 30.0) + uPunch * 2.4) * (140.0 / -mv.z);
    vAlpha = clamp(1.9 / -mv.z, 0.1, 1.0);
    vMix = fract(uProgress * 6.0);
  }
`

export const particleFragment = /* glsl */ `
  varying float vAlpha;
  varying float vMix;
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0;
    float d = dot(p, p);
    if (d > 1.0) discard;
    float glow = pow(1.0 - d, 2.4);
    vec3 col = mix(uColorA, uColorB, vMix);
    gl_FragColor = vec4(col, glow * vAlpha * 0.9);
  }
`

export const starVertex = /* glsl */ `
  uniform float uTime;
  varying float vA;
  void main() {
    vec3 p = position;
    p.xy += vec2(sin(uTime * 0.06 + position.z), cos(uTime * 0.045 + position.x)) * 0.35;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (1.2 + 0.8 * sin(uTime * 2.0 + position.x)) * (90.0 / -mv.z);
    vA = 0.28 + 0.72 * fract(sin(dot(position.xy, vec2(12.9, 78.2))) * 43758.5);
  }
`

export const starFragment = /* glsl */ `
  varying float vA;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = length(p);
    if (d > 0.5) discard;
    gl_FragColor = vec4(0.92, 0.94, 1.0, (1.0 - d * 2.0) * vA * 0.62);
  }
`

export const gridVertex = /* glsl */ `
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`

export const gridFragment = /* glsl */ `
  varying vec3 vWorld;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uTime;

  void main() {
    vec2 pz = vWorld.xz;
    float g1 = min(abs(fract(pz.x * 0.28) - 0.5), abs(fract(pz.y * 0.28) - 0.5));
    float g2 = min(abs(fract(pz.x * 0.07) - 0.5), abs(fract(pz.y * 0.07) - 0.5));
    float line = smoothstep(0.035, 0.0, g1) + smoothstep(0.02, 0.0, g2) * 0.65;
    float pulse = 0.7 + 0.3 * sin(uTime * 0.8 + pz.y * 0.15);
    float fade = 1.0 - smoothstep(3.5, 26.0, length(pz));
    vec3 col = mix(uColorA, uColorB, 0.45) * line * pulse;
    gl_FragColor = vec4(col, clamp(line, 0.0, 1.0) * fade * 0.5);
  }
`

export const nebulaVertex = /* glsl */ `
  varying vec3 vPos;
  void main() {
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

export const nebulaFragment = /* glsl */ `
  varying vec3 vPos;
  uniform float uTime;
  uniform float uProgress;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  float hash(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }
  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
      mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
      f.z
    );
  }
  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.03;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 dir = normalize(vPos);
    float n = fbm(dir * 2.4 + vec3(uTime * 0.03, uProgress, -uTime * 0.02));
    float n2 = fbm(dir * 5.0 - uTime * 0.04);
    float m = smoothstep(0.32, 0.82, n);
    vec3 col = mix(uColorA, uColorB, n) + uColorC * n2 * 0.35;
    float rim = pow(1.0 - abs(dir.y), 1.4);
    gl_FragColor = vec4(col * 0.55, m * rim * 0.12);
  }
`

export const ribbonVertex = /* glsl */ `
  uniform float uTime;
  uniform float uProgress;
  varying float vAlong;
  void main() {
    vec3 p = position;
    float t = uTime * 0.35 + uProgress * 4.0;
    p *= 1.0 + 0.04 * sin(t + position.x * 3.0);
    vAlong = uv.x;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`

export const ribbonFragment = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uTime;
  varying float vAlong;
  void main() {
    float dash = pow(abs(sin(vAlong * 40.0 - uTime * 6.0)), 4.0);
    vec3 col = mix(uColorA, uColorB, dash);
    gl_FragColor = vec4(col * 0.7, 0.32 + dash * 0.28);
  }
`

export const coreVertex = /* glsl */ `
  uniform float uTime;
  uniform float uAudio;
  uniform float uShock;
  void main() {
    vec3 p = position * (1.0 + 0.08 * sin(uTime * 3.0) + uAudio * 0.25 + uShock * 0.3);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`

export const coreFragment = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uTime;
  void main() {
    vec3 col = mix(uColorA, uColorB, 0.5 + 0.5 * sin(uTime * 2.0));
    gl_FragColor = vec4(col * 0.55, 0.55);
  }
`

export const cinematicShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uMouse: { value: { x: 0, y: 0 } },
    uProgress: { value: 0 },
    uShock: { value: 0 },
    uRes: { value: { x: 1, y: 1 } },
    uAberration: { value: 0.0028 },
    uFlash: { value: 0 },
    uInvert: { value: 0 },
    uMono: { value: 0 },
    uWave: { value: 0 },
    uPunch: { value: 0 },
    uShake: { value: 0 },
    uHit: { value: { x: 0.5, y: 0.5 } }
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uProgress;
    uniform float uShock;
    uniform vec2 uRes;
    uniform float uAberration;
    uniform float uFlash;
    uniform float uInvert;
    uniform float uMono;
    uniform float uWave;
    uniform float uPunch;
    uniform float uShake;
    uniform vec2 uHit;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      float aspect = uRes.x / max(uRes.y, 1.0);
      uv += vec2(hash(vec2(uTime, 1.7)), hash(vec2(uTime, 8.3))) * uShake * 0.045 - uShake * 0.022;

      vec2 c = uv - 0.5;
      float dist = length(c);
      float zoom = 1.0 - uPunch * 0.09 + uFlash * 0.04;
      uv = 0.5 + c * zoom;
      c = uv - 0.5;
      dist = length(c);
      uv = 0.5 + c * (1.0 + dist * dist * (0.085 + uPunch * 0.22));

      vec2 from = uv - uHit;
      float hd = length(from * vec2(aspect, 1.0));
      float ring = exp(-abs(hd - uWave * 1.2) * 22.0) * uPunch;
      uv += normalize(from + 0.0001) * ring * 0.11;

      float slice = floor(uv.y * (18.0 + uPunch * 40.0));
      float glitch = step(0.82, hash(vec2(slice, floor(uTime * 60.0)))) * uPunch;
      uv.x += (hash(vec2(slice, 3.1)) - 0.5) * glitch * 0.08;

      vec2 dir = normalize(from + c + uMouse * 0.08 + 0.0001);
      float ab = uAberration + uPunch * 0.04 + uShake * 0.02 + ring * 0.03;
      float r = texture2D(tDiffuse, uv + dir * ab).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, uv - dir * ab).b;
      vec3 col = vec3(r, g, b);

      float vig = smoothstep(1.05, 0.22, dist);
      col *= mix(vig, 1.0, uFlash);
      float scan = 0.96 + 0.04 * sin(uv.y * uRes.y * 1.4 + uTime * 8.0);
      col *= mix(scan, 1.0, uFlash);
      float n = hash(uv * uRes + uTime * 40.0);
      col += (n - 0.5) * (0.03 + uPunch * 0.12);

      col = mix(col, 1.0 - col, uInvert);
      float luma = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(luma), uMono);
      col = mix(col, floor(col * 4.0 + 0.5) / 4.0, uMono * 0.55);
      col += vec3(uFlash);
      col += vec3(1.0, 0.95, 0.75) * ring * 0.65;
      col = mix(col, col * vec3(1.04, 1.0, 0.96), 0.35);
      gl_FragColor = vec4(col, 1.0);
    }
  `
}
