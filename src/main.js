import './styles.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { World } from './scene.js'
import { LiquidText } from './liquidText.js'
import { createCursor, splitWarp, renderWarps, tiltCards, magnetic } from './interact.js'

gsap.registerPlugin(ScrollTrigger)

const loader = document.getElementById('loader')
const loaderCount = document.getElementById('loader-count')
const loaderBar = document.getElementById('loader-bar')
const shapeName = document.getElementById('shape-name')
const scrollRead = document.getElementById('scroll-read')
const ptrRead = document.getElementById('ptr-read')
const progressBar = document.getElementById('progress-bar')

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches

function bootLoader() {
  return new Promise((resolve) => {
    const obj = { n: 0 }
    gsap.to(obj, {
      n: 100,
      duration: reduce ? 0.2 : 1.6,
      ease: 'power2.inOut',
      onUpdate() {
        const v = Math.round(obj.n)
        loaderCount.textContent = String(v).padStart(2, '0')
        loaderBar.style.width = `${v}%`
      },
      onComplete: resolve
    })
  })
}

async function start() {
  await Promise.all([document.fonts.ready, bootLoader()])
  loader.classList.add('is-done')

  const world = new World(document.getElementById('world'))
  const liquid = new LiquidText(document.getElementById('liquid-text'), 'JAYDEN')
  const cursor = createCursor()
  const warps = [...document.querySelectorAll('[data-warp]')].map(splitWarp)
  tiltCards(document.querySelectorAll('[data-tilt]'))
  magnetic(document.querySelectorAll('[data-magnetic]'))

  const lenis = new Lenis({
    lerp: reduce ? 1 : 0.085,
    smoothWheel: !reduce
  })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  if (!reduce) {
    gsap.to('#rail', {
      x: () => -(document.getElementById('rail').scrollWidth - innerWidth + 48),
      ease: 'none',
      scrollTrigger: {
        trigger: '#studies',
        start: 'top top',
        end: () => `+=${Math.max(innerWidth, 1400)}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1
      }
    })
  }

  let last = performance.now()
  const ptr = { x: 0, y: 0 }
  window.addEventListener('pointermove', (e) => {
    ptr.x = e.clientX / innerWidth
    ptr.y = e.clientY / innerHeight
  })

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    const limit = Math.max(1, document.documentElement.scrollHeight - innerHeight)
    const t = Math.min(1, Math.max(0, window.scrollY / limit))
    world.setProgress(t)
    world.render()
    liquid.render(dt)
    cursor.render()
    renderWarps(warps)
    const pct = Math.round(t * 100)
    progressBar.style.height = `${pct}%`
    scrollRead.textContent = `${String(pct).padStart(3, '0')}%`
    shapeName.textContent = world.shapeName
    ptrRead.textContent = `${ptr.x.toFixed(2)} ${ptr.y.toFixed(2)}`
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

start()
