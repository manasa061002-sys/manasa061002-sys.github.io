import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

/**
 * prefers-reduced-motion that is safe to use during hydration: it reports
 * `false` on the first render (matching the pre-rendered HTML), then the real
 * value once mounted. Use it for anything that changes rendered output.
 */
export function useReducedMotionSafe(): boolean {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? !!reduced : false;
}
