import { useEffect, useRef, useState } from 'react';

/**
 * A split-flap departure board (like a Swiss station or an old trading floor).
 * Each cell clicks through the alphabet until it reaches its letter. Changing
 * `text` makes the cells flip again to the new word. Colours come from the
 * theme, so the board is dark in Analyst mode and paper in Artist mode.
 * With `instant` (reduced motion) the final text is shown straight away.
 */

const CHARS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ&-.';
const STEP_MS = 42;

function FlapCell({ target, delay, instant, onStep }: { target: string; delay: number; instant: boolean; onStep?: () => void }) {
  const [idx, setIdx] = useState(() => (instant ? Math.max(0, CHARS.indexOf(target)) : 0));
  const cur = useRef(idx);
  const stepRef = useRef(onStep);
  stepRef.current = onStep;

  useEffect(() => {
    const goal = Math.max(0, CHARS.indexOf(target));
    if (instant) {
      cur.current = goal;
      setIdx(goal);
      return;
    }
    let timer = 0;
    const tick = () => {
      if (cur.current === goal) return;
      cur.current = (cur.current + 1) % CHARS.length;
      setIdx(cur.current);
      stepRef.current?.();
      timer = window.setTimeout(tick, STEP_MS);
    };
    timer = window.setTimeout(tick, delay);
    return () => window.clearTimeout(timer);
  }, [target, delay, instant]);

  const ch = CHARS[idx];
  return (
    <span className="flap-cell">
      {/* keyed by letter so each change replays the flap */}
      <span key={idx} className={instant ? 'flap-char' : 'flap-char flap-anim'}>
        {ch === ' ' ? ' ' : ch}
      </span>
    </span>
  );
}

export default function SplitFlap({
  text,
  length,
  startDelay = 0,
  instant = false,
  onStep,
  className = '',
}: {
  text: string;
  /** Number of cells (shorter text is padded with blanks). */
  length?: number;
  startDelay?: number;
  instant?: boolean;
  onStep?: () => void;
  className?: string;
}) {
  const n = length ?? text.length;
  const chars = text.toUpperCase().padEnd(n, ' ').slice(0, n).split('');
  return (
    <span className={`flap-row ${className}`} aria-hidden>
      {chars.map((c, i) => (
        <FlapCell key={i} target={c} delay={startDelay + i * 70} instant={instant} onStep={onStep} />
      ))}
    </span>
  );
}

/* ---- the optional flap sound (off by default) ---- */

let audio: AudioContext | null = null;
let noise: AudioBuffer | null = null;
let last = 0;

/** Prepare the click sound. Must be called from a user gesture (the sound toggle). */
export function primeFlapSound() {
  if (audio) return;
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  audio = new Ctx();
  noise = audio.createBuffer(1, Math.round(audio.sampleRate * 0.018), audio.sampleRate);
  const d = noise.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 5);
}

/** One flap click: a tiny filtered noise burst. Throttled so many cells don't roar. */
export function flapClick() {
  if (!audio || !noise) return;
  const now = performance.now();
  if (now - last < 28) return;
  last = now;
  const src = audio.createBufferSource();
  src.buffer = noise;
  const hp = audio.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 1400 + Math.random() * 900;
  const gain = audio.createGain();
  gain.gain.value = 0.18;
  src.connect(hp).connect(gain).connect(audio.destination);
  src.start();
}
