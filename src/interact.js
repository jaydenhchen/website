export function createCursor() {
  const root = document.querySelector('.cursor')
  const ring = document.querySelector('.cursor-ring')
  const dot = document.querySelector('.cursor-dot')
  if (!root || matchMedia('(pointer: coarse)').matches) {
    document.body.classList.add('is-touch')
    return { render() {} }
  }
  const pos = { x: innerWidth / 2, y: innerHeight / 2 }
  const ringPos = { x: pos.x, y: pos.y }
  window.addEventListener('pointermove', (e) => {
    pos.x = e.clientX
    pos.y = e.clientY
  })
  const hoverables = 'a, button, .signal-card, .study, .cta, .liquid-text, [data-warp]'
  document.addEventListener('pointerover', (e) => {
    if (e.target.closest(hoverables)) root.classList.add('is-hover')
  })
  document.addEventListener('pointerout', (e) => {
    if (e.target.closest(hoverables)) root.classList.remove('is-hover')
  })
  return {
    render() {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`
      dot.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`
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
      const space = document.createElement('span')
      space.className = 'char space'
      space.textContent = '\u00a0'
      el.appendChild(space)
      chars.push({ el: space, x: 0, y: 0, r: 0, s: 0, tx: 0, ty: 0, tr: 0, ts: 0 })
      continue
    }
    const wrap = document.createElement('span')
    wrap.className = 'word'
    for (const ch of word) {
      const span = document.createElement('span')
      span.className = 'char'
      span.textContent = ch
      wrap.appendChild(span)
      chars.push({ el: span, x: 0, y: 0, r: 0, s: 0, tx: 0, ty: 0, tr: 0, ts: 0 })
    }
    el.appendChild(wrap)
  }
  const state = { chars, active: false }
  el.addEventListener('pointerenter', () => {
    state.active = true
  })
  el.addEventListener('pointerleave', () => {
    state.active = false
    for (const c of chars) {
      c.tx = 0
      c.ty = 0
      c.tr = 0
      c.ts = 0
    }
  })
  el.addEventListener('pointermove', (e) => {
    const rect = el.getBoundingClientRect()
    for (const c of chars) {
      const r = c.el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy) + 0.001
      const force = Math.max(0, 1 - dist / 180)
      const mag = force * 42
      c.tx = (dx / dist) * -mag
      c.ty = (dy / dist) * -mag * 0.7
      c.tr = (dx / dist) * force * 18
      c.ts = force * 0.22
    }
  })
  return state
}

export function renderWarps(states) {
  for (const state of states) {
    for (const c of state.chars) {
      c.x += (c.tx - c.x) * 0.16
      c.y += (c.ty - c.y) * 0.16
      c.r += (c.tr - c.r) * 0.16
      c.s += (c.ts - c.s) * 0.16
      const skew = c.x * 0.12
      c.el.style.transform = `translate(${c.x}px, ${c.y}px) rotate(${c.r}deg) skewX(${skew}deg) scale(${1 + c.s})`
    }
  }
}

export function tiltCards(nodes) {
  for (const el of nodes) {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 12}deg) translateZ(12px)`
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
      el.style.transform = `translate(${x * 0.28}px, ${y * 0.32}px)`
    })
    el.addEventListener('pointerleave', () => {
      el.style.transform = 'translate(0,0)'
    })
  }
}
