import type { ReactNode } from 'react';
import Scribble from '@/components/Scribble';

/**
 * The one section header used by every section: a pink number and the title,
 * set together in the same large type, with an optional lead line underneath.
 * `tone` follows the zone the section sits in (dark = the black top half,
 * light = Products onwards).
 */
export default function SectionHead({
  no,
  title,
  lead,
  scribble,
  tone = 'dark',
}: {
  no: string;
  title: ReactNode;
  lead?: ReactNode;
  scribble?: ReactNode;
  tone?: 'dark' | 'light';
}) {
  const ink = tone === 'light' ? 'text-gray-900' : 'text-white';
  const soft = tone === 'light' ? 'text-gray-600' : 'text-white/70';

  return (
    <header className="relative mb-10 sm:mb-12">
      <h2 className={`text-4xl sm:text-6xl font-medium tracking-tight leading-[1.02] ${ink}`}>
        <span className="section-no">{no}</span>
        {title}
      </h2>
      {lead && <p className={`mt-4 max-w-2xl text-[15px] leading-relaxed ${soft}`}>{lead}</p>}
      {scribble && <Scribble className="lg:right-0 lg:-top-3">{scribble}</Scribble>}
    </header>
  );
}
