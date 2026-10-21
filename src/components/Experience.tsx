import { ChevronRight } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function Experience() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-12 sm:py-16 px-6 sm:px-10 max-w-4xl mx-auto"
    >
      <div className="reveal mb-10">
        <span className="text-[11px] tracking-[0.25em] uppercase text-white/40 font-light">
          Career
        </span>
        <h2 className="mt-5 text-4xl sm:text-6xl font-medium text-white tracking-tight">
          Work Experience
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/15" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <div
              key={job.company}
              className="reveal relative pl-12"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white/30 bg-black" />

              <div className="group hover:bg-white/[0.02] transition-colors duration-500 rounded-[20px] p-7 -ml-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-medium text-white">
                      {job.role}
                    </h3>
                    <p className="text-[13px] mt-0.5 text-white/40">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="text-[11px] text-white/40 px-3 py-1 rounded-full border border-white/10">
                    {job.period}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] tracking-wide px-2.5 py-0.5 rounded-full border border-white/10 text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-3">
                  {job.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-[14px] text-white/60 leading-[1.7]"
                    >
                      <ChevronRight className="h-4 w-4 mt-0.5 shrink-0 text-white/25" />
                      <span>{renderBold(pt)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
