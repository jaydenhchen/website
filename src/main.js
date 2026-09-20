import './styles.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { World, PALETTES } from './scene.js'
import { LiquidText } from './liquidText.js'
import { SonicField } from './audio.js'
import {
  createCursor,
  splitWarp,
  renderWarps,
  revealWarps,
  tiltCards,
  magnetic,
  triggerImpact
} from './interact.js'

gsap.registerPlugin(ScrollTrigger)

const loader = document.getElementById('loader')
const loaderCount = document.getElementById('loader-count')
const loaderBar = document.getElementById('loader-bar')
const shapeName = document.getElementById('shape-name')
const scrollRead = document.getElementById('scroll-read')
const ptrRead = document.getElementById('ptr-read')
const energyRead = document.getElementById('energy-read')
const progressBar = document.getElementById('progress-bar')
const sonicBtn = document.getElementById('sonic')
const dots = document.getElementById('shape-dots')
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches

function bootLoader() {
  return new Promise((resolve) => {
    const obj = { n: 0 }
    gsap.to(obj, {
      n: 100,
      duration: reduce ? 0.15 : 2.1,
      ease: 'power3.inOut',
      onUpdate() {
        const v = Math.round(obj.n)
        const glitch = !reduce && Math.random() > 0.86 ? Math.floor(Math.random() * 100) : v
        loaderCount.textContent = String(glitch).padStart(2, '0')
        loaderBar.style.width = `${v}%`
      },
      onComplete() {
        loaderCount.textContent = '100'
        resolve()
      }
    })
  })
}

async function start() {
  const world = new World(document.getElementById('world'))
  const liquid = new LiquidText(document.getElementById('liquid-text'), ['JAYDEN', 'CHEN'])
  const sonic = new SonicField()
  const cursor = createCursor()
  const ptr = { x: 0, y: 0 }
  let last = performance.now()
  let lastShape = ''
  let warps = []
  let lenis = { scroll: 0 }
  let uiReady = false

  window.addEventListener('pointermove', (e) => {
    ptr.x = e.clientX / innerWidth
    ptr.y = e.clientY / innerHeight
  })

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    const limit = Math.max(1, document.documentElement.scrollHeight - innerHeight)
    const t = Math.min(1, Math.max(0, (lenis.scroll || window.scrollY) / limit))
    const level = sonic.update(t, world.shock)
    world.setProgress(t)
    world.setAudio(level)
    liquid.stencil = world.impact.stencil
    world.render()
    liquid.render(dt)
    if (uiReady) {
      const accent = `#${world.palette.b.getHexString()}`
      cursor.render(accent)
      renderWarps(warps, now / 1000)
      const pct = Math.round(t * 100)
      progressBar.style.height = `${pct}%`
      scrollRead.textContent = `${String(pct).padStart(3, '0')}%`
      shapeName.textContent = world.shapeName
      ptrRead.textContent = `${ptr.x.toFixed(2)} ${ptr.y.toFixed(2)}`
      energyRead.textContent = `${Math.round(world.shock * 100).toString().padStart(3, '0')}%`
      if (world.shapeName !== lastShape) {
        lastShape = world.shapeName
        document.documentElement.style.setProperty('--accent', accent)
        document.documentElement.style.setProperty('--accent-2', `#${world.palette.c.getHexString()}`)
        document.documentElement.style.setProperty('--accent-3', `#${world.palette.a.getHexString()}`)
        liquid.setTint(accent)
        dots?.querySelectorAll('i').forEach((el, i) => el.classList.toggle('is-on', i === world.shapeIndex))
      }
    }
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)

  await Promise.all([document.fonts.ready.then(() => liquid.drawTexture()), bootLoader()])
  loader.classList.add('is-done')

  warps = [...document.querySelectorAll('[data-warp]')].map(splitWarp)
  revealWarps(warps, gsap, ScrollTrigger)
  tiltCards(document.querySelectorAll('[data-tilt]'))
  magnetic(document.querySelectorAll('[data-magnetic]'))

  if (dots) {
    dots.innerHTML = PALETTES.map((_, i) => `<i data-i="${i}"></i>`).join('')
  }

  lenis = new Lenis({
    lerp: reduce ? 1 : 0.075,
    smoothWheel: !reduce
  })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  if (!reduce) {
    gsap.to('#rail', {
      x: () => -(document.getElementById('rail').scrollWidth - innerWidth + 64),
      ease: 'none',
      scrollTrigger: {
        trigger: '#studies',
        start: 'top top',
        end: () => `+=${Math.max(innerWidth * 1.2, 1600)}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1
      }
    })
  }

  sonicBtn?.addEventListener('click', async () => {
    const on = await sonic.toggle()
    sonicBtn.classList.toggle('is-on', on)
    sonicBtn.textContent = on ? 'Sonic on' : 'Sonic'
  })

  window.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button')) return
    const color = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#d6ff3f'
    triggerImpact(e.clientX, e.clientY, color)
    sonic.bang()
    window.setTimeout(() => liquid.pulse(), 200)
  })

  uiReady = true
}

start()
