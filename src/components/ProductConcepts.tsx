import { useState } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { productConcepts, type ProductConcept } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProductConcepts() {
  const [active, setActive] = useState<ProductConcept | null>(null);
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="products"
      ref={ref}
      className="py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto"
    >
      <div className="reveal mb-10">
        <span className="text-[11px] tracking-[0.25em] uppercase text-cyan-600 font-medium">
          Innovation
        </span>
        <h2 className="mt-5 text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight">
          Product Concepts & Prototypes
        </h2>
        <p className="mt-4 text-[15px] text-gray-500 max-w-xl font-light leading-relaxed">
          From grocery aggregators to blockchain land registries — turning
          ideas into tangible prototypes.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productConcepts.map((proj, i) => (
          <button
            key={proj.id}
            onClick={() => setActive(proj)}
            className="reveal group text-left rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${proj.accent} opacity-25 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] tracking-wide px-2.5 py-1 rounded-full bg-white/90 text-gray-800 font-medium backdrop-blur-md">
                  {proj.period}
                </span>
              </div>
            </div>
            <div className="p-6 bg-white h-full flex flex-col gap-2">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                {proj.title}
              </h3>
              <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-3">
                {proj.summary}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-[fadeIn_0.3s_ease]"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-[28px] bg-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/30 rounded-full p-2 backdrop-blur-md transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-video">
              <img
                src={active.image}
                alt={active.title}
                className="h-full w-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${active.accent} opacity-20 mix-blend-overlay`} />
            </div>
            <div className="p-9">
              <h3 className="text-3xl font-medium text-gray-900 leading-tight">
                {active.title}
              </h3>
              <div className="mt-4 flex items-center gap-2 text-[13px] text-gray-500">
                <Calendar className="h-3.5 w-3.5 text-pink-500" />
                {active.period}
              </div>
              <p className="mt-5 text-[14px] text-gray-600 leading-[1.75]">
                {active.summary}
              </p>
              <div className="mt-7">
                <div className="text-[11px] tracking-wide uppercase text-gray-400 mb-3 font-medium">
                  Key highlights
                </div>
                <ul className="space-y-2.5">
                  {active.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-[14px] text-gray-700"
                    >
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
