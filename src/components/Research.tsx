import { useState } from 'react';
import { X, Calendar, Target, FlaskConical } from 'lucide-react';
import { research, type ResearchPaper } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Research() {
  const [active, setActive] = useState<ResearchPaper | null>(null);
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="research"
      ref={ref}
      className="py-12 sm:py-16 px-6 sm:px-10 max-w-4xl mx-auto"
    >
      <div className="reveal mb-10">
        <span className="text-[11px] tracking-[0.25em] uppercase text-white/40 font-light">
          Scholarship
        </span>
        <h2 className="mt-5 text-4xl sm:text-6xl font-medium text-white tracking-tight">
          Academic Research
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-px bg-white/10">
        {research.map((paper, i) => (
          <button
            key={paper.id}
            onClick={() => setActive(paper)}
            className="reveal text-left group bg-black p-8 hover:bg-white/[0.03] transition-colors duration-500"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-[10px] tracking-wide px-2.5 py-0.5 rounded-full border border-white/15 text-white/50">
                {paper.type}
              </span>
              <span className="text-[11px] text-white/30">{paper.period}</span>
            </div>
            <h3 className="mt-5 text-xl font-medium text-white group-hover:text-white transition-colors duration-300">
              {paper.title}
            </h3>
            <p className="mt-3 text-[13px] text-white/50 leading-[1.65] line-clamp-2 font-light">
              {paper.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {paper.methods.slice(0, 3).map((m) => (
                <span
                  key={m}
                  className="text-[10px] px-2 py-0.5 rounded-full text-white/30 border border-white/10"
                >
                  {m}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-[fadeIn_0.3s_ease]"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-[28px] border border-white/15 bg-[#0a0a0a] p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="text-[10px] tracking-wide px-2.5 py-0.5 rounded-full border border-white/15 text-white/50">
              {active.type}
            </span>
            <h3 className="mt-5 text-3xl font-medium text-white leading-tight">
              {active.title}
            </h3>

            <div className="mt-5 space-y-3 text-[13px]">
              <div className="flex items-center gap-2 text-white/50">
                <Calendar className="h-3.5 w-3.5" />
                {active.period}
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <Target className="h-3.5 w-3.5" />
                {active.scope}
              </div>
            </div>

            <p className="mt-6 text-[14px] text-white/60 leading-[1.75] font-light">
              {active.summary}
            </p>

            <div className="mt-7">
              <div className="flex items-center gap-2 text-[11px] tracking-wide uppercase text-white/30 mb-3">
                <FlaskConical className="h-3.5 w-3.5" />
                Methods & frameworks
              </div>
              <div className="flex flex-wrap gap-2">
                {active.methods.map((m) => (
                  <span
                    key={m}
                    className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/60"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
