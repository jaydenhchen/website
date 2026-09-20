export function createCursor() {
  const root = document.querySelector('.cursor')
  const ring = document.querySelector('.cursor-ring')
  const dot = document.querySelector('.cursor-dot')
  const trail = document.getElementById('trail')
  if (!root || matchMedia('(pointer: coarse)').matches) {
    document.body.classList.add('is-touch')
    return { render() {}, pos: { x: 0, y: 0 } }
  }
  const pos = { x: innerWidth / 2, y: innerHeight / 2 }
  const ringPos = { x: pos.x, y: pos.y }
  const points = []
  const tctx = trail ? trail.getContext('2d') : null
  const resize = () => {
    if (!trail) return
    const dpr = Math.min(devicePixelRatio, 2)
    trail.width = innerWidth * dpr
    trail.height = innerHeight * dpr
    trail.style.width = `${innerWidth}px`
    trail.style.height = `${innerHeight}px`
    if (tctx) tctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('pointermove', (e) => {
    pos.x = e.clientX
    pos.y = e.clientY
    points.push({ x: e.clientX, y: e.clientY, a: 1, r: 7 })
    if (points.length > 28) points.shift()
  })
  const hoverables = 'a, button, .signal-card, .study, .cta, .liquid-text, [data-warp]'
  document.addEventListener('pointerover', (e) => {
    if (e.target.closest(hoverables)) root.classList.add('is-hover')
  })
  document.addEventListener('pointerout', (e) => {
    if (e.target.closest(hoverables)) root.classList.remove('is-hover')
  })
  return {
    pos,
    render(hex = '#d6ff3f') {
      ringPos.x += (pos.x - ringPos.x) * 0.2
      ringPos.y += (pos.y - ringPos.y) * 0.2
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`
      dot.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`
      if (!tctx) return
      tctx.clearRect(0, 0, innerWidth, innerHeight)
      tctx.globalCompositeOperation = 'lighter'
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        p.a *= 0.86
        p.r *= 0.96
        tctx.beginPath()
        tctx.fillStyle = hex
        tctx.globalAlpha = p.a * 0.35
        tctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        tctx.fill()
      }
      tctx.globalAlpha = 1
    }
  }
}

export function splitWarp(el) {
  const text = el.textContent
  el.textContent = ''
  const chars = []
  const words = text.split(/(\s+)/)
  for (const word of words) {
    if (/^\s+$/.test(word)) {
      el.appendChild(document.createTextNode(' '))
      continue
    }
    const wrap = document.createElement('span')
    wrap.className = 'word'
    for (const ch of word) {
      const span = document.createElement('span')
      span.className = 'char'
      span.textContent = ch
      wrap.appendChild(span)
      chars.push({ el: span, x: 0, y: 0, r: 0, s: 0, tx: 0, ty: 0, tr: 0, ts: 0, iy: 36, io: 0, seed: Math.random() * 6.28 })
    }
    el.appendChild(wrap)
  }
  const state = { chars, el, active: false }
  el.addEventListener('pointerenter', () => {
    state.active = true
  })
  el.addEventListener('pointerleave', () => {
    state.active = false
    el.style.transform = ''
    for (const c of chars) {
      c.tx = 0
      c.ty = 0
      c.tr = 0
      c.ts = 0
    }
  })
  el.addEventListener('pointermove', (e) => {
    const box = el.getBoundingClientRect()
    const mx = (e.clientX - box.left) / box.width - 0.5
    const my = (e.clientY - box.top) / box.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${mx * 10}deg) rotateX(${-my * 7}deg)`
    for (const c of chars) {
      const r = c.el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy) + 0.001
      const force = Math.max(0, 1 - dist / 210)
      const mag = force * 56
      c.tx = (dx / dist) * -mag
      c.ty = (dy / dist) * -mag * 0.75
      c.tr = (dx / dist) * force * 22
      c.ts = force * 0.28
    }
  })
  return state
}

export function revealWarps(states, gsap, ScrollTrigger) {
  for (const state of states) {
    const proxy = { t: 0 }
    gsap.to(proxy, {
      t: 1,
      ease: 'power3.out',
      duration: 1.15,
      stagger: 0,
      scrollTrigger: {
        trigger: state.el,
        start: 'top 86%',
        once: true
      },
      onUpdate() {
        const t = proxy.t
        state.chars.forEach((c, i) => {
          const local = Math.max(0, Math.min(1, t * 1.4 - i * 0.018))
          c.io = local
          c.iy = (1 - local) * (70 + (c.seed || 0) * 8)
        })
      }
    })
  }
}

export function renderWarps(states, time) {
  for (const state of states) {
    state.chars.forEach((c, i) => {
      c.x += (c.tx - c.x) * 0.16
      c.y += (c.ty - c.y) * 0.16
      c.r += (c.tr - c.r) * 0.16
      c.s += (c.ts - c.s) * 0.16
      const idle = Math.sin(time * 1.6 + (c.seed || i) * 1.7) * (state.active ? 1.1 : 1.2)
      const skew = c.x * 0.14
      c.el.style.opacity = String(0.15 + c.io * 0.85)
      c.el.style.transform = `translate(${c.x}px, ${c.y + c.iy + idle}px) rotate(${c.r}deg) skewX(${skew}deg) scale(${1 + c.s})`
      c.el.style.textShadow = `${c.x * 0.08}px 0 #ff5a36, ${-c.x * 0.08}px 0 #79e7ff`
    })
  }
}

export function tiltCards(nodes) {
  for (const el of nodes) {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 14}deg) translateZ(18px)`
      el.style.setProperty('--gx', `${(x + 0.5) * 100}%`)
      el.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
    })
    el.addEventListener('pointerleave', () => {
      el.style.transform = 'rotateY(0) rotateX(0) translateZ(0)'
    })
  }
}

export function magnetic(nodes) {
  for (const el of nodes) {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${x * 0.32}px, ${y * 0.36}px)`
    })
    el.addEventListener('pointerleave', () => {
      el.style.transform = 'translate(0,0)'
    })
  }
}

export function spawnRipple(x, y, color, extraClass = '') {
  const node = document.createElement('span')
  node.className = extraClass ? `ripple ${extraClass}` : 'ripple'
  node.style.left = `${x}px`
  node.style.top = `${y}px`
  node.style.borderColor = color
  document.body.appendChild(node)
  node.addEventListener('animationend', () => node.remove())
}

export function triggerImpact(x, y, color) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) return

  const root = document.documentElement
  root.classList.remove('is-impact')
  void root.offsetWidth
  root.classList.add('is-impact')
  window.clearTimeout(triggerImpact._t)
  triggerImpact._t = window.setTimeout(() => root.classList.remove('is-impact'), 200)

  window.setTimeout(() => spawnRipple(x, y, '#ffffff', 'ripple-hard'), 190)
  window.setTimeout(() => spawnRipple(x, y, color || '#ffffff', 'ripple-mid'), 240)
}
