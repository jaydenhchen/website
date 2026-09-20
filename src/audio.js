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
