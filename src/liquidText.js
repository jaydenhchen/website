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

void main() {
  vec2 uv = vUv;
  vec2 mouse = uMouse;
  vec2 delta = uv - mouse;
  float dist = length(delta * vec2(uRes.x / uRes.y, 1.0));
  float fall = exp(-dist * 6.2) * uHover;
  float wave = sin(dist * 48.0 - uTime * 4.2);
  float idle = 0.08 + uHover * 0.92;
  uv += normalize(delta + 0.0001) * wave * 0.055 * fall;
  uv.x += sin(uv.y * 28.0 + uTime * 1.4) * 0.01 * idle;
  uv.y += cos(uv.x * 18.0 - uTime) * 0.008 * idle;
  vec2 ca = delta * fall * 0.035;
  float r = texture2D(uTex, uv + ca).r;
  float g = texture2D(uTex, uv).g;
  float b = texture2D(uTex, uv - ca).b;
  float a = texture2D(uTex, uv).a;
  vec2 grain = uv * uRes * 0.4;
  float n = fract(sin(dot(grain, vec2(12.9898, 78.233))) * 43758.5453);
  vec3 col = vec3(r, g, b);
  col += (n - 0.5) * 0.08 * a;
  col += vec3(0.82, 1.0, 0.28) * fall * 0.35 * a;
  gl_FragColor = vec4(col, a);
}
`

export class LiquidText {
  constructor(canvas, text = 'JAYDEN') {
    this.canvas = canvas
    this.text = text
    this.mouse = [0.5, 0.52]
    this.target = [0.5, 0.52]
    this.hover = 0
    this.targetHover = 0
    this.time = 0
    this.gl = canvas.getContext('webgl', { premultipliedAlpha: false, alpha: true })
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
    let size = h * 0.9
    ctx.letterSpacing = '-0.06em'
    ctx.font = `800 ${size}px Syne, sans-serif`
    let measured = ctx.measureText(this.text).width
    if (measured > w * 0.96) {
      size *= (w * 0.96) / measured
      ctx.font = `800 ${size}px Syne, sans-serif`
    }
    ctx.fillText(this.text, w * 0.02, h * 0.54)
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
      this.targetHover = 0
    })
    window.addEventListener('pointermove', (e) => {
      const rect = host.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = 1 - (e.clientY - rect.top) / rect.height
      this.target[0] = x
      this.target[1] = y
      const inside = x >= -0.15 && x <= 1.15 && y >= -0.4 && y <= 1.4
      this.targetHover = inside ? 1 : 0.35
    })
    window.addEventListener('resize', () => this.drawTexture())
  }

  render(dt) {
    if (!this.gl) return
    const gl = this.gl
    this.time += dt
    this.mouse[0] += (this.target[0] - this.mouse[0]) * 0.12
    this.mouse[1] += (this.target[1] - this.mouse[1]) * 0.12
    this.hover += (this.targetHover - this.hover) * 0.08
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
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
  }
}
