import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import {
  meshVertex,
  meshFragment,
  particleVertex,
  particleFragment,
  starVertex,
  starFragment,
  gridVertex,
  gridFragment,
  nebulaVertex,
  nebulaFragment,
  ribbonVertex,
  ribbonFragment,
  coreVertex,
  coreFragment,
  cinematicShader
} from './shaders.js'

export const SHAPES = ['SPHERE', 'TORUS', 'KNOT', 'HELIX', 'CRYSTAL', 'MÖBIUS', 'GALAXY']

export const PALETTES = [
  { a: '#6ee7ff', b: '#d6ff3f', c: '#ff5a36' },
  { a: '#ff7ad9', b: '#ffe08a', c: '#79e7ff' },
  { a: '#b38cff', b: '#79e7ff', c: '#ff8bd2' },
  { a: '#d6ff3f', b: '#ff7a3c', c: '#9bffce' },
  { a: '#c8f4ff', b: '#ffffff', c: '#7ad7ff' },
  { a: '#ff5a36', b: '#ffd36e', c: '#ff8ad4' },
  { a: '#7c5cff', b: '#79e7ff', c: '#ff5a36' }
]

function parametricGeometry(segU, segV) {
  const geo = new THREE.BufferGeometry()
  const pos = []
  const uv = []
  const idx = []
  for (let i = 0; i <= segU; i++) {
    for (let j = 0; j <= segV; j++) {
      uv.push(i / segU, j / segV)
      pos.push(0, 0, 0)
    }
  }
  const cols = segV + 1
  for (let i = 0; i < segU; i++) {
    for (let j = 0; j < segV; j++) {
      const a = i * cols + j
      const b = a + cols
      idx.push(a, b, a + 1, a + 1, b, b + 1)
    }
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2))
  geo.setIndex(idx)
  return geo
}

function particleGeometry(count) {
  const geo = new THREE.BufferGeometry()
  const pos = new Float32Array(count * 3)
  const nrm = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    pos[i * 3] = Math.random()
    pos[i * 3 + 1] = Math.random()
    pos[i * 3 + 2] = 0
    nrm[i * 3] = Math.random() * 2 - 1
    nrm[i * 3 + 1] = Math.random() * 2 - 1
    nrm[i * 3 + 2] = Math.random() * 2 - 1
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geo.setAttribute('normal', new THREE.BufferAttribute(nrm, 3))
  return geo
}

function shaderMat(vs, fs, uniforms, extra = {}) {
  return new THREE.ShaderMaterial({
    vertexShader: vs,
    fragmentShader: fs,
    uniforms,
    transparent: true,
    toneMapped: false,
    ...extra
  })
}

export class World {
  constructor(canvas) {
    this.canvas = canvas
    this.clock = new THREE.Clock()
    this.progress = 0
    this.targetProgress = 0
    this.mouse = new THREE.Vector2()
    this.targetMouse = new THREE.Vector2()
    this.hover = 0
    this.dragging = false
    this.drag = new THREE.Vector2()
    this.shock = 0
    this.simTime = 0
    this.audio = 0
    this.intro = 0
    this.bloomBase = 0
    this.impact = {
      age: 10,
      frame: 99,
      releaseAge: 10,
      released: true,
      flash: 0,
      invert: 0,
      mono: 0,
      punch: 0,
      wave: 0,
      shake: 0,
      stencil: 0,
      blank: 0,
      origin: new THREE.Vector2(0.5, 0.5)
    }
    this.scrollVel = 0
    this.lastProgress = 0
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    this.mobile = innerWidth < 800
    this.shapeName = SHAPES[0]
    this.shapeIndex = 0
    this.palette = { a: new THREE.Color(PALETTES[0].a), b: new THREE.Color(PALETTES[0].b), c: new THREE.Color(PALETTES[0].c) }
    this.tmpA = new THREE.Color()
    this.tmpB = new THREE.Color()
    this.tmpC = new THREE.Color()

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !this.mobile,
      alpha: true,
      powerPreference: 'high-performance'
    })
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, this.mobile ? 1.1 : 1.5))
    this.renderer.setSize(innerWidth, innerHeight)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.NoToneMapping
    this.renderer.setClearColor(0x050506, 1)

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.08, 120)
    this.camera.position.set(0, 0.25, 5.4)

    const segs = this.mobile ? 48 : 110
    this.uniforms = {
      uProgress: { value: 0 },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2() },
      uHover: { value: 0 },
      uShock: { value: 0 },
      uAudio: { value: 0 },
      uWave: { value: 0 },
      uPunch: { value: 0 },
      uStencil: { value: 0 },
      uColorA: { value: new THREE.Color(PALETTES[0].a) },
      uColorB: { value: new THREE.Color(PALETTES[0].b) },
      uColorC: { value: new THREE.Color(PALETTES[0].c) },
      uSize: { value: this.mobile ? 0.85 : 1.12 }
    }

    this.mesh = new THREE.Mesh(
      parametricGeometry(segs, segs),
      shaderMat(meshVertex, meshFragment, this.uniforms, { side: THREE.DoubleSide, depthWrite: false })
    )
    this.scene.add(this.mesh)

    this.wireUniforms = THREE.UniformsUtils.clone(this.uniforms)
    this.wire = new THREE.Mesh(
      this.mesh.geometry,
      shaderMat(meshVertex, meshFragment, this.wireUniforms, {
        side: THREE.DoubleSide,
        wireframe: true,
        depthWrite: false
      })
    )
    this.wire.scale.setScalar(1.018)
    this.scene.add(this.wire)

    const pCount = this.mobile ? 1400 : 4800
    this.particles = new THREE.Points(
      particleGeometry(pCount),
      shaderMat(particleVertex, particleFragment, this.uniforms, {
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    )
    this.scene.add(this.particles)

    const sparkCount = this.mobile ? 250 : 700
    this.sparks = new THREE.Points(
      particleGeometry(sparkCount),
      shaderMat(particleVertex, particleFragment, this.uniforms, {
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    )
    this.sparks.material.uniforms = this.uniforms
    this.sparks.scale.setScalar(1.35)
    this.scene.add(this.sparks)

    const starCount = this.mobile ? 700 : 2200
    const stars = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      stars[i * 3] = (Math.random() - 0.5) * 50
      stars[i * 3 + 1] = (Math.random() - 0.5) * 28
      stars[i * 3 + 2] = (Math.random() - 0.5) * 36 - 6
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.BufferAttribute(stars, 3))
    this.stars = new THREE.Points(
      starGeo,
      shaderMat(starVertex, starFragment, this.uniforms, {
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    )
    this.scene.add(this.stars)

    this.grid = new THREE.Mesh(
      new THREE.PlaneGeometry(70, 70, 1, 1),
      shaderMat(gridVertex, gridFragment, this.uniforms, {
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      })
    )
    this.grid.rotation.x = -Math.PI / 2
    this.grid.position.y = -2.35
    this.scene.add(this.grid)

    if (!this.mobile) {
      this.nebula = new THREE.Mesh(
        new THREE.SphereGeometry(32, 32, 24),
        shaderMat(nebulaVertex, nebulaFragment, this.uniforms, {
          side: THREE.BackSide,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        })
      )
      this.scene.add(this.nebula)
    }

    this.ribbons = new THREE.Group()
    const ribbonMat = shaderMat(ribbonVertex, ribbonFragment, this.uniforms, {
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    })
    const r1 = new THREE.Mesh(new THREE.TorusKnotGeometry(1.85, 0.012, this.mobile ? 80 : 220, 6, 2, 5), ribbonMat)
    const r2 = new THREE.Mesh(new THREE.TorusKnotGeometry(2.05, 0.01, this.mobile ? 80 : 220, 6, 3, 7), ribbonMat)
    r2.rotation.x = Math.PI / 2
    this.ribbons.add(r1, r2)
    this.scene.add(this.ribbons)

    this.core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.16, 1),
      shaderMat(coreVertex, coreFragment, this.uniforms, {
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    )
    this.scene.add(this.core)

    this.satellites = new THREE.Group()
    const satGeo = new THREE.OctahedronGeometry(0.055, 0)
    const satMat = new THREE.MeshBasicMaterial({ color: '#d6ff3f', transparent: true, opacity: 0.9 })
    this.satCount = this.mobile ? 7 : 16
    for (let i = 0; i < this.satCount; i++) {
      this.satellites.add(new THREE.Mesh(satGeo, satMat.clone()))
    }
    this.scene.add(this.satellites)

    const linePos = new Float32Array(this.satCount * 6)
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3))
    this.fieldLines = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({ color: '#79e7ff', transparent: true, opacity: 0.22 })
    )
    this.scene.add(this.fieldLines)

    const ringMat = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    this.shockRing = new THREE.Mesh(new THREE.RingGeometry(0.92, 1.02, 96), ringMat)
    this.shockRing2 = new THREE.Mesh(new THREE.RingGeometry(0.97, 1.0, 64), ringMat.clone())
    this.scene.add(this.shockRing, this.shockRing2)

    this.key = new THREE.PointLight('#79e7ff', 14, 20)
    this.fill = new THREE.PointLight('#ff5a36', 9, 18)
    this.mouseLight = new THREE.PointLight('#d6ff3f', 8, 12)
    this.key.position.set(3, 2.2, 4)
    this.fill.position.set(-3.2, -1.2, 2.2)
    this.scene.add(this.key, this.fill, this.mouseLight, new THREE.AmbientLight('#8aa4b8', 0.28))

    this.composer = new EffectComposer(this.renderer)
    this.composer.addPass(new RenderPass(this.scene, this.camera))
    this.bloomBase = this.mobile ? 0.1 : 0.14
    this.bloom = new UnrealBloomPass(
      new THREE.Vector2(innerWidth, innerHeight),
      this.bloomBase,
      0.38,
      0.34
    )
    this.composer.addPass(this.bloom)
    this.composer.addPass(new OutputPass())
    this.fx = new ShaderPass(cinematicShader)
    this.fx.uniforms.uRes.value = new THREE.Vector2(innerWidth, innerHeight)
    this.fx.uniforms.uMouse.value = new THREE.Vector2()
    this.fx.uniforms.uHit.value = this.impact.origin
    this.composer.addPass(this.fx)

    this._onPointer = this.onPointer.bind(this)
    this._onDown = this.onDown.bind(this)
    this._onUp = () => {
      this.dragging = false
    }
    window.addEventListener('pointermove', this._onPointer)
    window.addEventListener('pointerdown', this._onDown)
    window.addEventListener('pointerup', this._onUp)
    window.addEventListener('resize', () => this.resize())
  }

  onPointer(e) {
    const x = (e.clientX / innerWidth) * 2 - 1
    const y = -(e.clientY / innerHeight) * 2 + 1
    this.targetMouse.set(x, y)
    this.hover = 1
    if (this.dragging) {
      this.drag.x += e.movementX * 0.0045
      this.drag.y += e.movementY * 0.0045
    }
  }

  onDown(e) {
    this.dragging = true
    if (e.target.closest && e.target.closest('a, button')) return
    const nx = (e.clientX / innerWidth) * 2 - 1
    const ny = -(e.clientY / innerHeight) * 2 + 1
    this.pulse(nx, ny)
  }

  pulse(nx = this.mouse.x, ny = this.mouse.y) {
    this.impact.age = 0
    this.impact.frame = 0
    this.impact.releaseAge = 0
    this.impact.released = false
    this.impact.origin.set(nx * 0.5 + 0.5, ny * 0.5 + 0.5)
    this.shock = 1
    if (this.reduced) {
      this.impact.punch = 0.4
      this.impact.wave = 0
      this.impact.flash = 0
      this.impact.invert = 0
      this.impact.mono = 0
      this.impact.shake = 0
      this.impact.stencil = 0
      this.impact.blank = 0
      this.impact.released = true
    }
  }

  sampleImpact(rawDt) {
    const imp = this.impact
    imp.frame += 1
    if (this.reduced) {
      imp.punch *= 0.9
      imp.wave = Math.min(1, imp.wave + 0.08)
      imp.stencil = 0
      imp.blank = 0
      this.shock = imp.punch
      return 1
    }
    if (imp.age < 0.18) {
      imp.blank = 0
      imp.stencil = 1
      imp.flash = 0
      imp.invert = 0
      imp.mono = 0
      imp.punch = 1
      imp.shake = 0
      imp.wave = 0
      this.shock = 1
      return 0
    }
    if (!imp.released) {
      imp.released = true
      imp.releaseAge = 0
    }
    imp.releaseAge += rawDt
    const t = imp.releaseAge
    const decay = Math.exp(-t * 2.15)
    imp.blank = 0
    imp.stencil = Math.exp(-t * 18)
    imp.flash = 0
    imp.invert = 0
    imp.mono = 0
    imp.punch = decay
    imp.shake = 0
    imp.wave = Math.min(1, t * 1.7)
    this.shock = decay
    return 1
  }

  setProgress(t) {
    this.targetProgress = Math.min(Math.max(t, 0), 1)
  }

  setAudio(v) {
    this.audio = v
  }

  currentShape() {
    const i = Math.min(SHAPES.length - 1, Math.round(Math.min(this.progress, 1) * (SHAPES.length - 1)))
    this.shapeIndex = i
    this.shapeName = SHAPES[i]
    return this.shapeName
  }

  resize() {
    const w = innerWidth
    const h = innerHeight
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
    this.composer.setSize(w, h)
    this.bloom.setSize(w, h)
    this.fx.uniforms.uRes.value.set(w, h)
  }

  render() {
    const rawDt = Math.min(0.05, this.clock.getDelta())
    this.impact.age += rawDt
    const timeScale = this.sampleImpact(rawDt)
    const dt = rawDt * timeScale
    this.simTime += dt
    const t = this.simTime
    if (timeScale > 0.001) {
      this.progress += (this.targetProgress - this.progress) * (this.reduced ? 1 : 0.07)
      this.scrollVel += (this.progress - this.lastProgress - this.scrollVel) * 0.2
      this.lastProgress = this.progress
      this.mouse.lerp(this.targetMouse, 0.09)
      this.hover += ((this.dragging ? 1 : 0.4) - this.hover) * 0.05
      this.intro = Math.min(1, this.intro + dt * 0.42)
    }

    const p = this.progress
    const seg = p * 6
    const i0 = Math.min(6, Math.floor(seg))
    const i1 = Math.min(6, i0 + 1)
    const f = seg - i0
    this.palette.a.set(PALETTES[i0].a).lerp(this.tmpA.set(PALETTES[i1].a), f)
    this.palette.b.set(PALETTES[i0].b).lerp(this.tmpB.set(PALETTES[i1].b), f)
    this.palette.c.set(PALETTES[i0].c).lerp(this.tmpC.set(PALETTES[i1].c), f)

    this.uniforms.uProgress.value = p
    this.uniforms.uTime.value = t
    this.uniforms.uMouse.value.copy(this.mouse)
    this.uniforms.uHover.value = this.hover
    this.uniforms.uShock.value = this.shock
    this.uniforms.uAudio.value = this.audio
    this.uniforms.uWave.value = this.impact.wave
    this.uniforms.uPunch.value = this.impact.punch
    this.uniforms.uStencil.value = this.impact.stencil
    this.uniforms.uColorA.value.copy(this.palette.a)
    this.uniforms.uColorB.value.copy(this.palette.b)
    this.uniforms.uColorC.value.copy(this.palette.c)

    this.wireUniforms.uProgress.value = Math.max(0, p - 0.065)
    this.wireUniforms.uTime.value = t
    this.wireUniforms.uMouse.value.copy(this.mouse)
    this.wireUniforms.uHover.value = this.hover
    this.wireUniforms.uShock.value = this.shock
    this.wireUniforms.uAudio.value = this.audio
    this.wireUniforms.uWave.value = Math.max(0, this.impact.wave - 0.04)
    this.wireUniforms.uPunch.value = this.impact.punch
    this.wireUniforms.uStencil.value = this.impact.stencil
    this.wireUniforms.uColorA.value.copy(this.palette.a)
    this.wireUniforms.uColorB.value.copy(this.palette.b)
    this.wireUniforms.uColorC.value.copy(this.palette.c)

    const introEase = 1 - Math.pow(1 - this.intro, 3)
    const angle = p * Math.PI * 1.7 + this.drag.x + Math.sin(t * 0.12) * 0.08
    const dist = THREE.MathUtils.lerp(4.6, 6.5, introEase) - Math.sin(p * Math.PI) * 1.15
    const cy = 0.15 + Math.sin(p * Math.PI) * 1.25 - this.drag.y
    this.camera.position.x = Math.sin(angle) * dist + this.mouse.x * 0.55
    this.camera.position.z = Math.cos(angle) * dist
    this.camera.position.y = cy + this.mouse.y * 0.32
    this.camera.fov = 38 + Math.sin(p * Math.PI) * 8
    this.camera.updateProjectionMatrix()
    this.camera.lookAt(0, Math.sin(p * Math.PI) * 0.2, 0)
    this.camera.rotateZ(this.scrollVel * 1.8 + this.mouse.x * 0.018)

    this.mesh.rotation.y = t * 0.07 + this.drag.x * 0.45
    this.mesh.rotation.x = Math.sin(t * 0.11) * 0.08
    this.wire.rotation.copy(this.mesh.rotation)
    this.particles.rotation.y = this.mesh.rotation.y * 0.82
    this.sparks.rotation.y = -this.mesh.rotation.y * 0.5
    this.stars.rotation.y = t * 0.014
    this.ribbons.rotation.y = t * 0.18
    this.ribbons.rotation.x = t * 0.07
    this.ribbons.scale.setScalar(1 + this.audio * 0.12 + this.impact.punch * 0.35)
    this.core.rotation.y = t * 0.6
    this.core.rotation.x = t * 0.4
    this.grid.position.y = -2.35 + Math.sin(p * Math.PI) * 0.15

    this.key.color.copy(this.palette.a)
    this.fill.color.copy(this.palette.c)
    this.mouseLight.color.copy(this.palette.b)
    this.mouseLight.position.set(this.mouse.x * 4, this.mouse.y * 2.5, 3)

    const sats = this.satellites.children
    const lp = this.fieldLines.geometry.attributes.position.array
    for (let i = 0; i < sats.length; i++) {
      const u = i / sats.length
      const spin = t * 0.4 + u * Math.PI * 2
      const ring = 2.15 + Math.sin(t + u * 8) * 0.12
      const helixY = (u - 0.5) * 3.4
      const ax = Math.cos(spin) * ring
      const az = Math.sin(spin) * ring
      const bx = Math.cos(spin * 1.7) * (0.75 + u)
      const by = helixY
      const bz = Math.sin(spin * 1.7) * (0.75 + u)
      const x = ax * (1 - p) + bx * p
      const y = Math.sin(spin + t) * 0.28 * (1 - p) + by * p
      const z = az * (1 - p) + bz * p
      sats[i].position.set(x, y, z)
      sats[i].material.color.copy(i % 2 ? this.palette.b : this.palette.a)
      lp[i * 6] = 0
      lp[i * 6 + 1] = 0
      lp[i * 6 + 2] = 0
      lp[i * 6 + 3] = x
      lp[i * 6 + 4] = y
      lp[i * 6 + 5] = z
    }
    this.fieldLines.geometry.attributes.position.needsUpdate = true
    this.fieldLines.material.color.copy(this.palette.a)

    const wave = Math.max(0.001, this.impact.wave)
    this.shockRing.scale.setScalar(0.2 + wave * 7.4)
    this.shockRing2.scale.setScalar(0.12 + wave * 9.2)
    this.shockRing.lookAt(this.camera.position)
    this.shockRing2.lookAt(this.camera.position)
    this.shockRing.material.color.set(this.impact.frame <= 4 ? '#ffffff' : this.palette.b)
    this.shockRing.material.opacity = this.impact.punch * (1 - wave) * 0.95
    this.shockRing2.material.opacity = this.impact.punch * (1 - wave) * 0.55
    this.core.scale.setScalar(1 + this.impact.punch * 0.35 * (1 - this.impact.stencil))

    const cut = this.impact.stencil > 0.5
    this.mesh.visible = cut ? false : true
    this.particles.visible = cut ? false : true
    this.nebula.visible = cut ? false : true
    this.grid.visible = cut ? false : true
    this.core.visible = cut ? false : true
    this.sparks.visible = cut ? false : true
    this.ribbons.visible = cut ? false : true
    this.shockRing.visible = cut ? false : this.impact.punch > 0.02
    this.shockRing2.visible = cut ? false : this.impact.punch > 0.02
    this.renderer.setClearColor(cut ? 0x000000 : 0x050506, 1)
    if (cut) {
      this.fieldLines.material.color.set('#ffffff')
      for (const sat of this.satellites.children) sat.material.color.set('#ffffff')
    }

    if (cut) {
      this.bloom.strength = 0
      this.bloom.threshold = 1
    } else {
      this.bloom.strength = this.bloomBase
      this.bloom.threshold = 0.34
    }
    this.fx.uniforms.uTime.value = t
    this.fx.uniforms.uProgress.value = p
    this.fx.uniforms.uShock.value = this.shock
    this.fx.uniforms.uMouse.value.copy(this.mouse)
    this.fx.uniforms.uAberration.value = 0.0024 + Math.abs(this.scrollVel) * 0.08
    this.fx.uniforms.uFlash.value = 0
    this.fx.uniforms.uInvert.value = 0
    this.fx.uniforms.uMono.value = 0
    this.fx.uniforms.uWave.value = this.impact.wave
    this.fx.uniforms.uPunch.value = this.impact.punch
    this.fx.uniforms.uShake.value = 0
    this.fx.uniforms.uHit.value.copy(this.impact.origin)
    this.fx.uniforms.uStencil.value = this.impact.stencil
    this.fx.uniforms.uBlank.value = this.impact.blank

    this.currentShape()
    this.composer.render()
  }

  dispose() {
    window.removeEventListener('pointermove', this._onPointer)
    window.removeEventListener('pointerdown', this._onDown)
    window.removeEventListener('pointerup', this._onUp)
  }
}
