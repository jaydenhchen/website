export class SonicField {
  constructor() {
    this.enabled = false
    this.ready = false
    this.level = 0
  }

  async toggle() {
    if (!this.ready) this.init()
    this.enabled = !this.enabled
    if (this.enabled) await this.ctx.resume()
    else await this.ctx.suspend()
    return this.enabled
  }

  init() {
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const osc3 = ctx.createOscillator()
    osc.type = 'sine'
    osc2.type = 'triangle'
    osc3.type = 'sawtooth'
    osc.frequency.value = 49
    osc2.frequency.value = 73.5
    osc3.frequency.value = 98
    const filt = ctx.createBiquadFilter()
    filt.type = 'lowpass'
    filt.frequency.value = 420
    filt.Q.value = 0.7
    const gain = ctx.createGain()
    gain.gain.value = 0.035
    const gain3 = ctx.createGain()
    gain3.gain.value = 0.012
    const analyser = ctx.createAnalyser()
    analyser.fftSize = 256
    osc.connect(filt)
    osc2.connect(filt)
    osc3.connect(gain3)
    gain3.connect(filt)
    filt.connect(gain)
    gain.connect(analyser)
    analyser.connect(ctx.destination)
    osc.start()
    osc2.start()
    osc3.start()
    this.ctx = ctx
    this.osc = osc
    this.osc2 = osc2
    this.osc3 = osc3
    this.filt = filt
    this.gain = gain
    this.analyser = analyser
    this.data = new Uint8Array(analyser.frequencyBinCount)
    this.ready = true
  }

  async bang() {
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    if (!this.bangCtx) this.bangCtx = new AC()
    if (this.bangCtx.state === 'suspended') await this.bangCtx.resume()
    const ctx = this.bangCtx
    const t = ctx.currentTime
    const rate = ctx.sampleRate
    const len = Math.floor(rate * 0.16)
    const buffer = ctx.createBuffer(1, len, rate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < len; i++) {
      const env = Math.pow(1 - i / len, 2.4)
      data[i] = (Math.random() * 2 - 1) * env
    }
    const noise = ctx.createBufferSource()
    noise.buffer = buffer
    const bp = ctx.createBiquadFilter()
    bp.type = 'bandpass'
    bp.frequency.setValueAtTime(220, t)
    bp.frequency.exponentialRampToValueAtTime(70, t + 0.12)
    bp.Q.value = 0.7
    const ng = ctx.createGain()
    ng.gain.setValueAtTime(0.55, t)
    ng.gain.exponentialRampToValueAtTime(0.001, t + 0.16)
    noise.connect(bp)
    bp.connect(ng)
    ng.connect(ctx.destination)
    noise.start(t)

    const thump = ctx.createOscillator()
    thump.type = 'sine'
    thump.frequency.setValueAtTime(78, t)
    thump.frequency.exponentialRampToValueAtTime(28, t + 0.2)
    const tg = ctx.createGain()
    tg.gain.setValueAtTime(0.5, t)
    tg.gain.exponentialRampToValueAtTime(0.001, t + 0.22)
    thump.connect(tg)
    tg.connect(ctx.destination)
    thump.start(t)
    thump.stop(t + 0.24)

    const tick = ctx.createOscillator()
    tick.type = 'square'
    tick.frequency.setValueAtTime(420, t)
    tick.frequency.exponentialRampToValueAtTime(90, t + 0.04)
    const kg = ctx.createGain()
    kg.gain.setValueAtTime(0.08, t)
    kg.gain.exponentialRampToValueAtTime(0.001, t + 0.05)
    tick.connect(kg)
    kg.connect(ctx.destination)
    tick.start(t)
    tick.stop(t + 0.06)
  }

  update(progress, shock) {
    if (!this.enabled || !this.ready) {
      this.level *= 0.9
      return this.level
    }
    const now = this.ctx.currentTime
    this.osc.frequency.setTargetAtTime(46 + progress * 36, now, 0.12)
    this.osc2.frequency.setTargetAtTime(69 + progress * 88, now, 0.12)
    this.osc3.frequency.setTargetAtTime(92 + progress * 50, now, 0.18)
    this.filt.frequency.setTargetAtTime(260 + progress * 1400 + shock * 800, now, 0.08)
    this.gain.gain.setTargetAtTime(0.028 + shock * 0.04, now, 0.05)
    this.analyser.getByteFrequencyData(this.data)
    let s = 0
    for (let i = 0; i < 20; i++) s += this.data[i]
    this.level = s / (20 * 255)
    return this.level
  }
}
