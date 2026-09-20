export const meshVertex = /* glsl */ `
  varying vec3 vPos;
  varying vec3 vView;
  varying float vLift;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;

  const float PI = 3.14159265;
  const float TAU = 6.2831853;

  vec3 sphere(float u, float v) {
    float theta = u * PI;
    float phi = v * TAU;
    return vec3(sin(theta) * cos(phi), cos(theta), sin(theta) * sin(phi)) * 1.55;
  }

  vec3 torus(float u, float v) {
    float theta = u * TAU;
    float phi = v * TAU;
    float R = 1.18;
    float r = 0.44;
    return vec3(
      (R + r * cos(theta)) * cos(phi),
      r * sin(theta) * 1.15,
      (R + r * cos(theta)) * sin(phi)
    );
  }

  vec3 knot(float u, float v) {
    float t = u * TAU;
    float p = 2.0;
    float q = 3.0;
    vec3 core = vec3(
      sin(p * t) * (1.7 + cos(q * t)),
      sin(q * t) * 1.05,
      cos(p * t) * (1.7 + cos(q * t))
    ) * 0.52;
    float a = v * TAU;
    vec3 n = normalize(vec3(cos(p * t), 0.25, sin(p * t)));
    vec3 tanv = normalize(vec3(p * cos(p * t), q * cos(q * t), -p * sin(p * t)));
    vec3 b = normalize(cross(tanv, n));
    return core + (n * cos(a) + b * sin(a)) * 0.2;
  }

  vec3 helix(float u, float v) {
    float t = (v - 0.5) * 9.0;
    float strand = step(0.5, u);
    float off = strand * PI;
    float r = 0.62 + 0.12 * sin(t * 2.2 + u * TAU);
    return vec3(r * cos(t * 2.4 + off), t * 0.38, r * sin(t * 2.4 + off));
  }

  vec3 crystal(float u, float v) {
    vec3 s = sphere(u, v);
    vec3 a = abs(s);
    float m = max(a.x, max(a.y, a.z));
    vec3 cube = (s / max(m, 0.0008)) * 1.18;
    float spikes = pow(abs(sin(u * PI * 5.0) * sin(v * PI * 6.0)), 1.8);
    return mix(cube, normalize(s) * (1.22 + spikes * 0.55), 0.42);
  }

  vec3 wave(float u, float v) {
    float x = (v - 0.5) * 3.5;
    float z = (u - 0.5) * 3.5;
    float y = sin(x * 2.3 + z * 1.2) * 0.32 + cos(z * 3.1 + x) * 0.16;
    return vec3(x, y, z);
  }

  vec3 morph(float u, float v, float p) {
    float x = clamp(p, 0.0, 0.999) * 5.0;
    float i = floor(x);
    float f = smoothstep(0.0, 1.0, fract(x));
    vec3 a = sphere(u, v);
    vec3 b = torus(u, v);
    if (i < 0.5) { a = sphere(u, v); b = torus(u, v); }
    else if (i < 1.5) { a = torus(u, v); b = knot(u, v); }
    else if (i < 2.5) { a = knot(u, v); b = helix(u, v); }
    else if (i < 3.5) { a = helix(u, v); b = crystal(u, v); }
    else { a = crystal(u, v); b = wave(u, v); }
    return mix(a, b, f);
  }

  float hash(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }

  void main() {
    vec2 grid = uv;
    vec3 pos = morph(grid.x, grid.y, uProgress);
    float n = hash(pos * 2.2 + uTime * 0.15);
    pos += normalize(pos + 0.0001) * (n - 0.5) * 0.08;
    vec3 pull = vec3(uMouse.x * 2.4, uMouse.y * 1.6, 0.8);
    vec3 d = pull - pos;
    float falloff = exp(-dot(d, d) * 0.35) * uHover * 0.55;
    pos += d * falloff;
    vLift = falloff;
    vec4 world = modelMatrix * vec4(pos, 1.0);
    vPos = world.xyz;
    vView = cameraPosition - world.xyz;
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

  void main() {
    vec3 n = normalize(cross(dFdx(vPos), dFdy(vPos)));
    vec3 v = normalize(vView);
    vec3 l1 = normalize(vec3(0.55, 0.8, 0.35));
    vec3 l2 = normalize(vec3(-0.6, 0.2, 0.7));
    float diff = max(dot(n, l1), 0.0) * 0.75 + max(dot(n, l2), 0.0) * 0.4;
    float spec = pow(max(dot(reflect(-l1, n), v), 0.0), 42.0);
    float fres = pow(1.0 - max(dot(n, v), 0.0), 2.6);
    vec3 irid = mix(uColorA, uColorB, fres);
    irid = mix(irid, uColorC, 0.5 + 0.5 * sin(uProgress * 6.283 + vPos.y * 1.4 + uTime * 0.4));
    vec3 col = irid * (0.1 + diff) + vec3(1.15, 1.05, 0.95) * spec * 1.1 + fres * uColorB * 1.25;
    col += uColorC * vLift * 1.8;
    gl_FragColor = vec4(col, 0.96);
  }
`

export const particleVertex = /* glsl */ `
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uSize;
  varying float vAlpha;
  varying float vMix;

  const float PI = 3.14159265;
  const float TAU = 6.2831853;

  vec3 sphere(float u, float v) {
    float theta = u * PI;
    float phi = v * TAU;
    return vec3(sin(theta) * cos(phi), cos(theta), sin(theta) * sin(phi)) * 1.7;
  }
  vec3 torus(float u, float v) {
    float theta = u * TAU;
    float phi = v * TAU;
    return vec3((1.22 + 0.48 * cos(theta)) * cos(phi), 0.48 * sin(theta), (1.22 + 0.48 * cos(theta)) * sin(phi));
  }
  vec3 knot(float u, float v) {
    float t = u * TAU;
    vec3 core = vec3(sin(2.0 * t) * (1.7 + cos(3.0 * t)), sin(3.0 * t), cos(2.0 * t) * (1.7 + cos(3.0 * t))) * 0.58;
    return core + vec3(cos(v * TAU), sin(v * TAU), cos(v * TAU + t)) * 0.12;
  }
  vec3 helix(float u, float v) {
    float t = (v - 0.5) * 10.0;
    float off = step(0.5, u) * PI;
    float r = 0.7;
    return vec3(r * cos(t * 2.5 + off), t * 0.4, r * sin(t * 2.5 + off));
  }
  vec3 crystal(float u, float v) {
    vec3 s = sphere(u, v);
    vec3 a = abs(s);
    float m = max(a.x, max(a.y, a.z));
    return (s / max(m, 0.001)) * 1.35;
  }
  vec3 wave(float u, float v) {
    float x = (v - 0.5) * 3.8;
    float z = (u - 0.5) * 3.8;
    return vec3(x, sin(x * 2.0 + z * 1.6 + uTime) * 0.28, z);
  }

  vec3 morph(float u, float v, float p) {
    float x = clamp(p, 0.0, 0.999) * 5.0;
    float i = floor(x);
    float f = smoothstep(0.0, 1.0, fract(x));
    vec3 a; vec3 b;
    if (i < 0.5) { a = sphere(u, v); b = torus(u, v); }
    else if (i < 1.5) { a = torus(u, v); b = knot(u, v); }
    else if (i < 2.5) { a = knot(u, v); b = helix(u, v); }
    else if (i < 3.5) { a = helix(u, v); b = crystal(u, v); }
    else { a = crystal(u, v); b = wave(u, v); }
    return mix(a, b, f);
  }

  void main() {
    vec3 pos = morph(position.x, position.y, uProgress);
    pos += normal * 0.04 * sin(uTime * 0.8 + position.x * 20.0);
    vec3 pull = vec3(uMouse.x * 2.2, uMouse.y * 1.5, 0.6);
    pos += (pull - pos) * exp(-dot(pull - pos, pull - pos) * 0.4) * 0.35;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (1.2 + 0.4 * sin(uTime + position.x * 30.0)) * (130.0 / -mv.z);
    vAlpha = clamp(1.8 / -mv.z, 0.12, 1.0);
    vMix = fract(uProgress * 5.0);
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
    float glow = pow(1.0 - d, 2.2);
    vec3 col = mix(uColorA, uColorB, vMix);
    gl_FragColor = vec4(col, glow * vAlpha * 0.85);
  }
`

export const starVertex = /* glsl */ `
  uniform float uTime;
  varying float vA;
  void main() {
    vec3 p = position;
    p.xy += vec2(sin(uTime * 0.05 + position.z), cos(uTime * 0.04 + position.x)) * 0.2;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = 1.4 * (80.0 / -mv.z);
    vA = 0.35 + 0.65 * fract(sin(dot(position.xy, vec2(12.9, 78.2))) * 43758.5);
  }
`

export const starFragment = /* glsl */ `
  varying float vA;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = length(p);
    if (d > 0.5) discard;
    gl_FragColor = vec4(0.9, 0.92, 1.0, (1.0 - d * 2.0) * vA * 0.55);
  }
`
