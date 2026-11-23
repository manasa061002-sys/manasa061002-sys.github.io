import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, X } from 'lucide-react';
import { research } from '@/data/portfolio';
import SectionHead from '@/components/SectionHead';

const RINGS = 16;
const years = research.flatMap((r) => r.period.match(/\d{4}/g) ?? []).map(Number);
const SPAN = `${Math.min(...years)}–${Math.max(...years)}`;

/**
 * The research papers, kept in a spiral-bound notebook (black and white, like
 * the rest of the dark half). It starts closed: a cover titled "Research
 * Papers". Open it and the cover flips up over the rings onto the contents
 * page; pick a paper to turn to it, go back to the contents, or close the
 * notebook again. Each page turn swings the new page down from the binding.
 */
export default function Research() {
  const [open, setOpen] = useState(false);
  // null = the contents page, otherwise the paper's index
  const [page, setPage] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLButtonElement>(null);
  const firstRender = useRef(true);

  // Move keyboard focus with the page, so screen-reader and keyboard users follow the turn.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (open) pageRef.current?.focus({ preventScroll: true });
    else coverRef.current?.focus({ preventScroll: true });
  }, [open, page]);

  const paper = page === null ? null : research[page];
  const go = (i: number) => setPage((i + research.length) % research.length);

  return (
    <section id="research" data-section="research" className="py-16 sm:py-24 px-6 sm:px-10 max-w-5xl mx-auto">
      <SectionHead no="03" label="SCHOLARSHIP" title="Academic Research" />

      <div className={`notebook relative mx-auto max-w-4xl ${open ? 'is-open' : ''}`}>
        {/* the spiral binding */}
        <div className="notebook-rings" aria-hidden>
          {Array.from({ length: RINGS }).map((_, i) => (
            <span key={i} className="notebook-ring" />
          ))}
        </div>

        {/* the pages (under the cover until it is opened) */}
        <div
          ref={pageRef}
          tabIndex={-1}
          aria-hidden={!open}
          key={open ? `p-${page}` : 'closed'}
          className="notebook-page focus:outline-none"
        >
          {paper === null ? (
            <>
              <div className="flex items-baseline justify-between gap-3">
                <p className="notebook-stamp">Contents</p>
                <button type="button" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="notebook-turn">
                  <X className="h-4 w-4" aria-hidden /> Close the notebook
                </button>
              </div>
              <h3 className="mt-6 text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-[1.08] text-gray-900">Research papers</h3>
              <ol className="mt-6 divide-y divide-gray-300 border-y border-gray-300">
                {research.map((r, i) => (
                  <li key={r.id}>
                    <button type="button" onClick={() => setPage(i)} tabIndex={open ? 0 : -1} className="notebook-entry group">
                      <span className="w-6 shrink-0 text-[13px] tabular-nums text-gray-500">{i + 1}.</span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[17px] text-gray-900 group-hover:underline group-hover:underline-offset-4">{r.title}</span>
                        <span className="mt-0.5 block text-[13px] text-gray-600">
                          {r.type} · {r.period}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-gray-500 transition-transform group-hover:translate-x-1" aria-hidden />
                    </button>
                  </li>
                ))}
              </ol>
            </>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button type="button" onClick={() => setPage(null)} className="notebook-turn">
                  <ArrowLeft className="h-4 w-4" aria-hidden /> Contents
                </button>
                <span className="text-[13px] text-gray-600">{paper.period}</span>
              </div>
              <p className="notebook-stamp mt-5">{paper.type}</p>
              <h3 className="mt-5 text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-[1.08] text-gray-900">{paper.title}</h3>
              <p className="mt-5 max-w-2xl text-[16px] leading-[1.75] text-gray-700">{paper.summary}</p>
              {paper.keyFinding && (
                <p className="mt-5 max-w-2xl border-l-2 border-gray-900 pl-4 text-[16px] leading-[1.7] text-gray-900">
                  <span className="mr-2 text-[12px] font-semibold uppercase tracking-[0.15em]">Key finding</span>
                  {paper.keyFinding}
                </p>
              )}
              <div className="mt-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gray-500">Methods</p>
                <ul className="mt-2 space-y-1.5 text-[15px] text-gray-800">
                  {paper.methods.map((m) => (
                    <li key={m} className="flex gap-2.5">
                      <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-gray-800" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-[14px] text-gray-600">{paper.scope}</p>

              <div className="mt-8 flex items-center justify-between gap-3 border-t border-gray-300 pt-4">
                <button type="button" onClick={() => go((page ?? 0) - 1)} className="notebook-turn">
                  <ArrowLeft className="h-4 w-4" aria-hidden /> Previous paper
                </button>
                <span className="text-[13px] tabular-nums text-gray-500">
                  {(page ?? 0) + 1} / {research.length}
                </span>
                <button type="button" onClick={() => go((page ?? 0) + 1)} className="notebook-turn">
                  Next paper <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </>
          )}
        </div>

        {/* the cover: flips up over the rings when opened */}
        <button
          ref={coverRef}
          type="button"
          onClick={() => {
            setPage(null);
            setOpen(true);
          }}
          tabIndex={open ? -1 : 0}
          aria-hidden={open}
          aria-label="Open the notebook of research papers"
          className="notebook-cover"
        >
          <span className="notebook-label">
            <span className="block text-[12px] font-semibold uppercase tracking-[0.25em] text-gray-500">Manasa Rammohan</span>
            <span className="mt-3 block text-[clamp(2.4rem,5.4vw,3.9rem)] leading-none text-gray-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Research Papers</span>
            <span className="mt-3 block text-[14px] text-gray-600">
              {research.length} papers · {SPAN}
            </span>
          </span>
          <span className="notebook-open-hint">
            <BookOpen className="h-4 w-4" aria-hidden /> Open the notebook
          </span>
        </button>
      </div>
    </section>
  );
}
