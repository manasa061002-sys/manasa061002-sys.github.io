// heroMotion.ts
// Smooth, physics-based motions for the MANASA RAMMOHAN letter tiles.
// Every motion is sampled at 60 samples/sec from a continuous function
// (springs, parabolas, smootherstep) and played with linear easing, so there
// are no stop-start dips between keyframes.

export type MotionKind =
  | "hop" | "bounce" | "stretch" | "morph" | "orbit" | "ripple" | "flip" | "glitch";

type Pose = { x?: number; y?: number; r?: number; sx?: number; sy?: number; rx?: number };
interface Plan {
  T: number;               // seconds
  body: Keyframe[];        // the wrapper span (the element you pass in)
  tile?: Keyframe[];       // .nflap  (the tile)
  char?: Keyframe[];       // .nflap-char (the letter)
  origin?: string;         // temporary transform-origin for the wrapper
}

const TAU = Math.PI * 2;
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
const smooth = (x: number) => { x = clamp01(x); return x * x * x * (x * (6 * x - 15) + 10); };
const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const dirOf = () => (Math.random() < 0.5 ? -1 : 1);

/** damped spring step response, 0 -> 1 (t in seconds) */
const spring = (t: number, zeta = 0.5, w = 16) => {
  if (t <= 0) return 0;
  const wd = w * Math.sqrt(1 - zeta * zeta);
  return 1 - Math.exp(-zeta * w * t) * (Math.cos(wd * t) + ((zeta * w) / wd) * Math.sin(wd * t));
};

/** landing squash: eases in over 45ms, rings, decays. Positive = squashed. */
const impact = (t: number, A: number, f = 2.4, k = 7) =>
  t <= 0 ? 0 : A * smooth(t / 0.045) * Math.exp(-k * t) * Math.cos(TAU * f * t);

const css = (p: Pose, d3 = false) => {
  const t =
    `translate(${(p.x ?? 0).toFixed(4)}em, ${(p.y ?? 0).toFixed(4)}em) ` +
    `rotate(${(p.r ?? 0).toFixed(3)}deg) ` +
    `scale(${(p.sx ?? 1).toFixed(4)}, ${(p.sy ?? 1).toFixed(4)})`;
  return d3 ? `perspective(8em) ${t} rotateX(${(p.rx ?? 0).toFixed(2)}deg)` : t;
};

function sample(T: number, fn: (t: number, u: number) => Pose, d3 = false): Keyframe[] {
  const n = Math.max(2, Math.round(T * 60));
  const out: Keyframe[] = [];
  for (let i = 0; i <= n; i++) {
    const u = i / n;
    out.push({ offset: u, transform: css(fn(u * T, u), d3) });
  }
  return out;
}

/* ───────────────────────── motions ───────────────────────── */

function hop(): Plan {
  const dir = dirOf(), H = rnd(0.3, 0.4);
  const tA = 0.14, tAir = 0.44, tL = tA + tAir, T = 1;
  const body = sample(T, (t) => {
    let y = 0, d = 0, r = 0; // d > 0 squash, d < 0 stretch
    if (t < tA) {
      const k = smooth(t / tA);
      d = 0.2 * k;
      r = -dir * 3 * k;
    } else if (t < tL) {
      const a = (t - tA) / tAir;
      y = -4 * H * a * (1 - a);
      const release = 1 - smooth((t - tA) / 0.07);
      const stretch = 0.13 * Math.abs(1 - 2 * a) * smooth((t - tA) / 0.07) * (1 - smooth((a - 0.75) / 0.25));
      d = 0.2 * release - stretch;
      r = dir * 14 * Math.sin(Math.PI * a) - dir * 3 * (1 - smooth(a * 3));
    } else {
      const tl = t - tL, m = 1 - smooth((t - 0.85) / 0.15);
      d = impact(tl, 0.2, 2.4, 7) * m;
      r = -dir * 4 * Math.exp(-8 * tl) * Math.sin(TAU * 2.2 * tl) * m;
    }
    return { y, r, sy: 1 - d, sx: 1 + d * 0.75 };
  });
  return { T, body };
}

function bounce(): Plan {
  const hs = [0.36, 0.16, 0.065];               // each bounce ~45% of the last
  const t0 = 0.1, k = 0.7;                      // air time grows with sqrt(height)
  const seg: { s: number; e: number; h: number }[] = [];
  let c = t0;
  for (const h of hs) { const a = k * Math.sqrt(h); seg.push({ s: c, e: c + a, h }); c += a; }
  const T = c + 0.3;
  const body = sample(T, (t) => {
    let y = 0, d = 0;
    if (t < t0) d = 0.18 * smooth(t / t0);
    seg.forEach((g, i) => {
      if (t >= g.s && t < g.e) {
        const a = (t - g.s) / (g.e - g.s);
        y = -4 * g.h * a * (1 - a);
        if (i === 0) d += 0.18 * (1 - smooth((t - g.s) / 0.07));
        d -= 0.12 * (g.h / hs[0]) * Math.abs(1 - 2 * a) * smooth((t - g.s) / 0.07) * (1 - smooth((a - 0.75) / 0.25));
      }
      if (t >= g.e) d += impact(t - g.e, 0.2 * Math.pow(g.h / hs[0], 0.6), 3, 9);
    });
    d *= 1 - smooth((t - (T - 0.12)) / 0.12);
    return { y, sy: 1 - d, sx: 1 + d * 0.75 };
  });
  return { T, body };
}

function stretch(): Plan {
  const T = 1.1, tA = 0.12, amp = 0.42;
  const body = sample(T, (t) => {
    const ant = 0.14 * (t < tA ? smooth(t / tA) : 1 - smooth((t - tA) / 0.06));
    const e = amp * (spring(t - tA, 0.42, 15) - spring(t - 0.5, 0.5, 15)); // pull up, then let go
    const m = 1 - smooth((t - 0.95) / 0.15);
    const sy = 1 + (e - ant) * m;
    return { sy, sx: 1 / Math.sqrt(Math.max(0.2, sy)) };
  });
  return { T, body };
}

function morph(): Plan {
  const T = 1.2, ph = rnd(0, TAU);
  const n = Math.round(T * 60);
  const body: Keyframe[] = [], tile: Keyframe[] = [], char: Keyframe[] = [];
  const bx = 11.5, by = 8; // the tile's normal corner radius (0.09em) in % of 0.78em x 1.12em
  for (let i = 0; i <= n; i++) {
    const u = i / n;
    const w = smooth(u / 0.3) * (1 - smooth((u - 0.62) / 0.38)); // 0 -> 1 -> 0
    const a = ph + u * TAU * 1.5;
    const hx = [0, 1, 2, 3].map((c) => bx + (50 - bx + 10 * Math.sin(a + c * 1.7)) * w);
    const vy = [0, 1, 2, 3].map((c) => by + (50 - by + 10 * Math.cos(a + c * 2.1)) * w);
    tile.push({ offset: u, borderRadius: `${hx.map((v) => v.toFixed(2)).join("% ")}% / ${vy.map((v) => v.toFixed(2)).join("% ")}%` });
    char.push({ offset: u, transform: `scale(${(1 - 0.16 * w).toFixed(4)})` });
    body.push({ offset: u, transform: css({ sx: 1 + 0.09 * w * Math.sin(a * 1.3), sy: 1 + 0.09 * w * Math.cos(a * 1.3) }) });
  }
  return { T, body, tile, char };
}

function orbit(): Plan {
  const T = 1.3, R = 0.19, dir = dirOf();
  const body = sample(T, (_t, u) => {
    const th = TAU * smooth(u); // one full lap, slow start, slow finish
    return {
      x: dir * R * Math.sin(th),
      y: -R * (1 - Math.cos(th)),
      r: dir * 6 * Math.sin(th),
      sx: 1 + 0.05 * Math.sin(th),
      sy: 1 + 0.05 * Math.sin(th),
    };
  });
  return { T, body };
}

function ripple(): Plan {
  const T = 0.95, A = 0.24, f = 1.9, k = 3.2;
  const body = sample(T, (t) => {
    const env = Math.exp(-k * t), m = 1 - smooth((t - 0.8) / 0.15);
    const y = -A * ((1 - Math.cos(TAU * f * t)) / 2) * env * m;
    const s = 0.09 * Math.sin(TAU * f * t) * env * m;
    return { y, sy: 1 + s, sx: 1 - s * 0.7 };
  });
  return { T, body };
}

// Flips over the horizontal axis (rotateX), like a split-flap tile. Swap rotateX for rotateY in css() for a coin-style spin.
function flip(): Plan {
  const T = 1.15, tA = 0.12, dir = dirOf();
  const body = sample(
    T,
    (t) => {
      const ant = -14 * (t < tA ? smooth(t / tA) : 1 - smooth((t - tA) / 0.05));
      const ang = 360 * spring(t - tA, 0.72, 12.5);
      const b = Math.sin(Math.PI * smooth((t - 0.05) / 0.7));
      return { rx: dir * (ang + ant), y: -0.16 * b, sx: 1 + 0.05 * b, sy: 1 + 0.05 * b };
    },
    true,
  );
  return { T, body, origin: "50% 50%" };
}

function glitch(): Plan {
  type F = { t: number; x: number; y: number; k: number; s: number; clip: string };
  const rest = (t: number): F => ({ t, x: 0, y: 0, k: 0, s: 0, clip: "inset(0% -5% 0% -5%)" });
  const frames: F[] = [rest(0)];
  let t = 0.04;
  const burst = (n: number) => {
    for (let i = 0; i < n; i++) {
      t += rnd(0.025, 0.06);
      const a = rnd(0, 55), b = rnd(0, 100 - a - 15);
      frames.push({
        t, x: dirOf() * rnd(0.03, 0.1), y: rnd(-0.02, 0.02), k: dirOf() * rnd(6, 16), s: rnd(0.03, 0.07),
        clip: Math.random() < 0.4 ? `inset(${a.toFixed(0)}% -5% ${b.toFixed(0)}% -5%)` : "inset(0% -5% 0% -5%)",
      });
    }
    t += rnd(0.04, 0.09);
    frames.push(rest(t));
  };
  burst(4); burst(3); burst(5);
  const T = t + 0.06;
  frames.push(rest(T));
  const body: Keyframe[] = frames.map((f) => ({
    offset: f.t / T,
    transform: `translate(${f.x.toFixed(3)}em, ${f.y.toFixed(3)}em) skewX(${f.k.toFixed(1)}deg)`,
    easing: "steps(1, end)",
  }));
  const char: Keyframe[] = frames.map((f) => ({
    offset: f.t / T,
    filter: f.s ? `drop-shadow(${f.s}em 0 0 #ff2bd6) drop-shadow(${-f.s}em 0 0 #22e5ff)` : "none",
    clipPath: f.clip,
    easing: "steps(1, end)",
  }));
  return { T, body, char };
}

const PLANS: Record<MotionKind, () => Plan> = { hop, bounce, stretch, morph, orbit, ripple, flip, glitch };
export const buildMotion = (kind: MotionKind) => PLANS[kind]();

/** Play one motion on a letter wrapper (the span with transform-origin 50% 100%). */
export function playMotion(kind: MotionKind, el: HTMLElement) {
  if (typeof el.animate !== "function") return;
  const plan = PLANS[kind]();
  el.getAnimations().forEach((a) => a.cancel());
  const opts: KeyframeAnimationOptions = { duration: plan.T * 1000, easing: "linear", fill: "none" };
  const tile = el.querySelector<HTMLElement>(".nflap");
  const char = el.querySelector<HTMLElement>(".nflap-char");

  el.style.willChange = "transform";
  if (plan.origin) el.style.transformOrigin = plan.origin;

  const anims = [el.animate(plan.body, opts)];
  if (plan.tile && tile) anims.push(tile.animate(plan.tile, opts));
  if (plan.char && char) anims.push(char.animate(plan.char, opts));

  Promise.allSettled(anims.map((a) => a.finished)).then(() => {
    el.style.willChange = "";
    el.style.transformOrigin = "50% 100%";
  });
}
