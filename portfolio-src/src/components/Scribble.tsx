import type { ReactNode } from 'react';

/**
 * A handwritten note in the margin. Only shown on the paper half of the page (see .scribble
 * in index.css); purely decorative, so screen readers skip it. On large
 * screens it floats beside the heading, on small screens it sits under it.
 */
export default function Scribble({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span aria-hidden className={`scribble pointer-events-none mt-3 text-[24px] sm:text-[28px] -rotate-3 lg:absolute lg:mt-0 ${className}`}>
      {children}
    </span>
  );
}
