// One Euro filter for position/scale, normalized lerp for rotation. Plain data in/out.
class OneEuro {
  constructor(minCutoff, beta, dCutoff = 1) { Object.assign(this, { minCutoff, beta, dCutoff }); this.x = null; }
  static alpha(c, dt) { const tau = 1 / (2 * Math.PI * c); return 1 / (1 + tau / dt); }
  filter(v, t) {
    if (this.x === null) { this.x = v; this.dx = 0; this.t = t; return v; }
    const dt = Math.max(t - this.t, 1e-3); this.t = t;
    this.dx += OneEuro.alpha(this.dCutoff, dt) * ((v - this.x) / dt - this.dx);
    this.x += OneEuro.alpha(this.minCutoff + this.beta * Math.abs(this.dx), dt) * (v - this.x);
    return this.x;
  }
}

export class PoseSmoother {
  constructor({ minCutoff = 1.0, beta = 0.02, qAlpha = 0.35 } = {}) {
    this.qAlpha = qAlpha;
    this.opts = { minCutoff, beta };
    this.reset();
  }
  reset() {
    const { minCutoff, beta } = this.opts;
    this.pos = [0, 1, 2].map(() => new OneEuro(minCutoff, beta));
    this.sc = new OneEuro(0.5, 0.005);
    this.q = null;
  }
  apply(p, t) {
    const position = p.position.map((v, i) => this.pos[i].filter(v, t));
    const scale = this.sc.filter(p.scale, t);
    let q = p.quaternion;
    if (this.q) {
      const dot = q.reduce((s, v, i) => s + v * this.q[i], 0);
      const sign = dot < 0 ? -1 : 1, a = this.qAlpha;
      q = q.map((v, i) => this.q[i] + a * (sign * v - this.q[i]));
      const n = Math.hypot(...q); q = q.map(v => v / n);
    }
    this.q = q;
    return { position, quaternion: q, scale };
  }
}
