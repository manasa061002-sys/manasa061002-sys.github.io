import { Bot, GraduationCap } from 'lucide-react';
import { skills } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto"
    >
      <div className="reveal mb-10">
        <span className="text-[11px] tracking-[0.25em] uppercase text-cyan-600 font-medium">
          Capabilities
        </span>
        <h2 className="mt-5 text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight">
          Skills & Certifications
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Core — pink */}
        <div
          className="reveal rounded-[24px] bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 border-t-4 border-pink-400"
          style={{ transitionDelay: '0ms' }}
        >
          <h3 className="text-[11px] tracking-[0.15em] uppercase text-pink-500 font-medium mb-5">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.core.map((s) => (
              <span
                key={s}
                className="text-[13px] px-3.5 py-1.5 rounded-full text-gray-700 bg-pink-50 border border-pink-200/50 hover:border-pink-400 hover:bg-pink-100/50 transition-colors duration-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Tools — cyan */}
        <div
          className="reveal rounded-[24px] bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 border-t-4 border-cyan-400"
          style={{ transitionDelay: '80ms' }}
        >
          <h3 className="text-[11px] tracking-[0.15em] uppercase text-cyan-500 font-medium mb-5">
            Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((s) => (
              <span
                key={s}
                className="text-[13px] px-3.5 py-1.5 rounded-full text-gray-700 bg-cyan-50 border border-cyan-200/50 hover:border-cyan-400 hover:bg-cyan-100/50 transition-colors duration-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* AI — yellow */}
        <div
          className="reveal rounded-[24px] bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 border-t-4 border-yellow-400"
          style={{ transitionDelay: '160ms' }}
        >
          <div className="flex items-center gap-2 text-yellow-500 mb-5">
            <Bot className="h-3.5 w-3.5" />
            <h3 className="text-[11px] tracking-[0.15em] uppercase font-medium">
              AI Tools
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.ai.map((s) => (
              <span
                key={s}
                className="text-[13px] px-3.5 py-1.5 rounded-full text-gray-700 bg-yellow-50 border border-yellow-200/50 hover:border-yellow-400 hover:bg-yellow-100/50 transition-colors duration-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications — violet */}
        <div
          className="reveal rounded-[24px] bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 border-t-4 border-violet-400"
          style={{ transitionDelay: '240ms' }}
        >
          <div className="flex items-center gap-2 text-violet-500 mb-5">
            <GraduationCap className="h-3.5 w-3.5" />
            <h3 className="text-[11px] tracking-[0.15em] uppercase font-medium">
              Certifications
            </h3>
          </div>
          <ul className="space-y-3">
            {skills.certifications.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2.5 text-[14px] text-gray-700 leading-snug"
              >
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
