import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import {
  meshVertex,
  meshFragment,
  particleVertex,
  particleFragment,
  starVertex,
  starFragment
} from './shaders.js'

const SHAPES = ['SPHERE', 'TORUS', 'KNOT', 'HELIX', 'CRYSTAL', 'WAVE']

function parametricGeometry(segU, segV) {
  const geo = new THREE.BufferGeometry()
  const pos = []
  const uv = []
  const idx = []
  for (let i = 0; i <= segU; i++) {
    for (let j = 0; j <= segV; j++) {
      const u = i / segU
      const v = j / segV
      uv.push(u, v)
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

export class World {
  constructor(canvas) {
    this.canvas = canvas
    this.clock = new THREE.Clock()
    this.progress = 0
    this.targetProgress = 0
    this.mouse = new THREE.Vector2(0, 0)
    this.targetMouse = new THREE.Vector2(0, 0)
    this.hover = 0
    this.dragging = false
    this.drag = new THREE.Vector2(0, 0)
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    this.mobile = innerWidth < 800
    this.shapeName = SHAPES[0]

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    })
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, this.mobile ? 1.25 : 1.75))
    this.renderer.setSize(innerWidth, innerHeight)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.05

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 80)
    this.camera.position.set(0, 0.2, 6.2)

    const segs = this.mobile ? 56 : 96
    this.uniforms = {
      uProgress: { value: 0 },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uHover: { value: 0 },
      uColorA: { value: new THREE.Color('#79e7ff') },
      uColorB: { value: new THREE.Color('#d6ff3f') },
      uColorC: { value: new THREE.Color('#ff5a36') },
      uSize: { value: this.mobile ? 0.9 : 1.15 }
    }

    const mat = new THREE.ShaderMaterial({
      vertexShader: meshVertex,
      fragmentShader: meshFragment,
      uniforms: this.uniforms,
      transparent: true,
      side: THREE.DoubleSide,
      toneMapped: false
    })
    this.mesh = new THREE.Mesh(parametricGeometry(segs, segs), mat)
    this.scene.add(this.mesh)

    const wire = new THREE.ShaderMaterial({
      vertexShader: meshVertex,
      fragmentShader: meshFragment,
      uniforms: this.uniforms,
      transparent: true,
      side: THREE.DoubleSide,
      wireframe: true,
      toneMapped: false
    })
    this.wire = new THREE.Mesh(this.mesh.geometry, wire)
    this.wire.scale.setScalar(1.012)
    this.scene.add(this.wire)

    const pCount = this.mobile ? 2200 : 6500
    this.particles = new THREE.Points(
      particleGeometry(pCount),
      new THREE.ShaderMaterial({
        vertexShader: particleVertex,
        fragmentShader: particleFragment,
        uniforms: this.uniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false
      })
    )
    this.scene.add(this.particles)

    const starCount = this.mobile ? 800 : 1800
    const stars = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      stars[i * 3] = (Math.random() - 0.5) * 40
      stars[i * 3 + 1] = (Math.random() - 0.5) * 24
      stars[i * 3 + 2] = (Math.random() - 0.5) * 30 - 8
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.BufferAttribute(stars, 3))
    this.stars = new THREE.Points(
      starGeo,
      new THREE.ShaderMaterial({
        vertexShader: starVertex,
        fragmentShader: starFragment,
        uniforms: this.uniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false
      })
    )
    this.scene.add(this.stars)

    this.satellites = new THREE.Group()
    const satGeo = new THREE.IcosahedronGeometry(0.07, 0)
    const satMat = new THREE.MeshStandardMaterial({
      color: '#d6ff3f',
      emissive: '#3a4a10',
      metalness: 0.7,
      roughness: 0.25
    })
    this.satCount = this.mobile ? 8 : 14
    for (let i = 0; i < this.satCount; i++) {
      const m = new THREE.Mesh(satGeo, satMat)
      this.satellites.add(m)
    }
    this.scene.add(this.satellites)
    this.scene.add(new THREE.AmbientLight('#9bb4c8', 0.45))
    const key = new THREE.PointLight('#79e7ff', 12, 18)
    key.position.set(3, 2, 4)
    this.scene.add(key)
    const fill = new THREE.PointLight('#ff5a36', 8, 16)
    fill.position.set(-3, -1, 2)
    this.scene.add(fill)

    this.composer = new EffectComposer(this.renderer)
    this.composer.addPass(new RenderPass(this.scene, this.camera))
    this.bloom = new UnrealBloomPass(
      new THREE.Vector2(innerWidth, innerHeight),
      this.mobile ? 0.22 : 0.34,
      0.48,
      0.2
    )
    this.composer.addPass(this.bloom)
    this.composer.addPass(new OutputPass())

    this._onPointer = this.onPointer.bind(this)
    this._onDown = () => {
      this.dragging = true
    }
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
      this.drag.x += e.movementX * 0.004
      this.drag.y += e.movementY * 0.004
    }
  }

  setProgress(t) {
    this.targetProgress = Math.min(Math.max(t, 0), 1)
  }

  currentShape() {
    const i = Math.min(SHAPES.length - 1, Math.floor(Math.min(this.targetProgress, 0.999) * 5))
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
  }

  render() {
    const dt = this.clock.getDelta()
    const t = this.clock.elapsedTime
    const ease = this.reduced ? 1 : 1 - Math.pow(0.001, dt)
    this.progress += (this.targetProgress - this.progress) * (this.reduced ? 1 : 0.08)
    this.mouse.lerp(this.targetMouse, 0.08)
    this.hover += ((this.dragging ? 1 : 0.35) - this.hover) * 0.05

    this.uniforms.uProgress.value = this.progress
    this.uniforms.uTime.value = t
    this.uniforms.uMouse.value.copy(this.mouse)
    this.uniforms.uHover.value = this.hover

    const p = this.progress
    const angle = p * Math.PI * 1.25 + this.drag.x
    const dist = 6.1 - p * 1.35
    const cy = 0.25 + Math.sin(p * Math.PI) * 1.05 - this.drag.y
    this.camera.position.x = Math.sin(angle) * dist + this.mouse.x * 0.45
    this.camera.position.z = Math.cos(angle) * dist
    this.camera.position.y = cy + this.mouse.y * 0.25
    this.camera.lookAt(0, 0, 0)

    this.mesh.rotation.y = t * 0.08 + this.drag.x * 0.4
    this.wire.rotation.copy(this.mesh.rotation)
    this.particles.rotation.y = this.mesh.rotation.y * 0.85
    this.stars.rotation.y = t * 0.012

    const sats = this.satellites.children
    for (let i = 0; i < sats.length; i++) {
      const u = i / sats.length
      const spin = t * 0.35 + u * Math.PI * 2
      const ring = 2.1
      const helixY = (u - 0.5) * 3.2
      const ax = Math.cos(spin) * ring
      const az = Math.sin(spin) * ring
      const bx = Math.cos(spin * 1.7) * (0.7 + u)
      const by = helixY
      const bz = Math.sin(spin * 1.7) * (0.7 + u)
      const f = p
      sats[i].position.set(
        ax * (1 - f) + bx * f,
        Math.sin(spin + t) * 0.25 * (1 - f) + by * f,
        az * (1 - f) + bz * f
      )
    }

    this.currentShape()
    this.composer.render()
  }

  dispose() {
    window.removeEventListener('pointermove', this._onPointer)
    window.removeEventListener('pointerdown', this._onDown)
    window.removeEventListener('pointerup', this._onUp)
  }
}
