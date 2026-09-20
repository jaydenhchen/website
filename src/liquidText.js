const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uMouse;
uniform vec2 uRes;
uniform float uTime;
uniform float uHover;
uniform float uShock;
uniform vec3 uTint;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  vec2 mouse = uMouse;
  vec2 delta = uv - mouse;
  float aspect = uRes.x / max(uRes.y, 1.0);
  float dist = length(delta * vec2(aspect, 1.0));
  float fall = exp(-dist * 5.4) * uHover;
  float wave = sin(dist * 52.0 - uTime * 5.0);
  float idle = 0.12 + uHover * 0.88;
  uv += normalize(delta + 0.0001) * wave * (0.07 * fall + uShock * 0.04);
  uv.x += sin(uv.y * 32.0 + uTime * 1.6) * 0.014 * idle;
  uv.y += cos(uv.x * 20.0 - uTime) * 0.01 * idle;

  float slice = floor(uv.y * 22.0);
  float glitch = step(0.965, hash(vec2(slice, floor(uTime * 18.0))));
  uv.x += (hash(vec2(slice, 9.1)) - 0.5) * (0.09 * glitch * uHover + uShock * 0.05);

  vec2 ca = delta * (fall * 0.05 + uShock * 0.03) + vec2(0.004, 0.0) * (uHover + glitch);
  float r = texture2D(uTex, uv + ca).r;
  float g = texture2D(uTex, uv).g;
  float b = texture2D(uTex, uv - ca).b;
  float a = max(max(texture2D(uTex, uv).a, texture2D(uTex, uv + ca).a), texture2D(uTex, uv - ca).a);
  vec3 col = vec3(r, g, b);
  col += (hash(uv * uRes + uTime) - 0.5) * 0.1 * a;
  col = mix(col, col * uTint, 0.22 * a);
  col += uTint * fall * 0.4 * a;
  gl_FragColor = vec4(col, a);
}
`

export class LiquidText {
  constructor(canvas, lines = ['JAYDEN', 'CHEN']) {
    this.canvas = canvas
    this.lines = lines
    this.mouse = [0.28, 0.55]
    this.target = [0.28, 0.55]
    this.hover = 0.2
    this.targetHover = 0.2
    this.shock = 0
    this.time = 0
    this.tint = [0.84, 1.0, 0.25]
    this.gl = canvas.getContext('webgl', { premultipliedAlpha: false, alpha: true, antialias: true })
    if (!this.gl) return
    this.setup()
    this.drawTexture()
    this.bind()
  }

  setup() {
    const gl = this.gl
    const vs = this.compile(gl.VERTEX_SHADER, VERT)
    const fs = this.compile(gl.FRAGMENT_SHADER, FRAG)
    this.prog = gl.createProgram()
    gl.attachShader(this.prog, vs)
    gl.attachShader(this.prog, fs)
    gl.linkProgram(this.prog)
    gl.useProgram(this.prog)
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(this.prog, 'aPos')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
    this.uTex = gl.getUniformLocation(this.prog, 'uTex')
    this.uMouse = gl.getUniformLocation(this.prog, 'uMouse')
    this.uRes = gl.getUniformLocation(this.prog, 'uRes')
    this.uTime = gl.getUniformLocation(this.prog, 'uTime')
    this.uHover = gl.getUniformLocation(this.prog, 'uHover')
    this.uShock = gl.getUniformLocation(this.prog, 'uShock')
    this.uTint = gl.getUniformLocation(this.prog, 'uTint')
    this.texture = gl.createTexture()
  }

  compile(type, src) {
    const gl = this.gl
    const sh = gl.createShader(type)
    gl.shaderSource(sh, src)
    gl.compileShader(sh)
    return sh
  }

  drawTexture() {
    const gl = this.gl
    const dpr = Math.min(devicePixelRatio, 2)
    const w = Math.max(2, Math.floor(this.canvas.clientWidth * dpr))
    const h = Math.max(2, Math.floor(this.canvas.clientHeight * dpr))
    this.canvas.width = w
    this.canvas.height = h
    gl.viewport(0, 0, w, h)
    const off = document.createElement('canvas')
    off.width = w
    off.height = h
    const ctx = off.getContext('2d')
    ctx.clearRect(0, 0, w, h)
    ctx.fillStyle = '#efeae2'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    const size = h * 0.46
    ctx.letterSpacing = '-0.07em'
    ctx.font = `800 ${size}px Syne, sans-serif`
    let top = this.lines[0]
    let measured = ctx.measureText(top).width
    let s1 = size
    if (measured > w * 0.96) {
      s1 *= (w * 0.96) / measured
      ctx.font = `800 ${s1}px Syne, sans-serif`
    }
    ctx.fillText(top, w * 0.02, h * 0.34)
    const s2 = s1 * 0.78
    ctx.font = `italic 400 ${s2}px "Instrument Serif", serif`
    ctx.letterSpacing = '-0.04em'
    ctx.fillText(this.lines[1] || '', w * 0.02, h * 0.78)
    gl.bindTexture(gl.TEXTURE_2D, this.texture)
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, off)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    this.w = w
    this.h = h
  }

  bind() {
    const host = this.canvas
    host.addEventListener('pointerenter', () => {
      this.targetHover = 1
    })
    host.addEventListener('pointerleave', () => {
      this.targetHover = 0.18
    })
    window.addEventListener('pointermove', (e) => {
      const rect = host.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = 1 - (e.clientY - rect.top) / rect.height
      this.target[0] = x
      this.target[1] = y
      const inside = x >= -0.12 && x <= 1.12 && y >= -0.35 && y <= 1.35
      this.targetHover = inside ? 1 : 0.18
    })
    window.addEventListener('resize', () => this.drawTexture())
  }

  setTint(hex) {
    const n = parseInt(hex.replace('#', ''), 16)
    this.tint = [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
  }

  pulse() {
    this.shock = 1.35
  }

  render(dt) {
    if (!this.gl) return
    const gl = this.gl
    this.time += dt
    this.mouse[0] += (this.target[0] - this.mouse[0]) * 0.12
    this.mouse[1] += (this.target[1] - this.mouse[1]) * 0.12
    this.hover += (this.targetHover - this.hover) * 0.08
    this.shock += (0 - this.shock) * 0.045
    gl.useProgram(this.prog)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, this.texture)
    gl.uniform1i(this.uTex, 0)
    gl.uniform2f(this.uMouse, this.mouse[0], this.mouse[1])
    gl.uniform2f(this.uRes, this.w, this.h)
    gl.uniform1f(this.uTime, this.time)
    gl.uniform1f(this.uHover, this.hover)
    gl.uniform1f(this.uShock, this.shock)
    gl.uniform3f(this.uTint, this.tint[0], this.tint[1], this.tint[2])
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
  }
}
