import { Bot, Boxes, GraduationCap, HeartHandshake, TrendingUp } from 'lucide-react';
import { skills } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Bee, HoneyPot } from '@/components/Critters';

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="skills"
      data-section="skills"
      ref={ref}
      className="relative isolate overflow-x-clip py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto"
    >
      {/* A swarm of busy bees. They fly behind the cards and text (never over
      them), so they only show in the gaps and margins. */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <Bee className="absolute right-[4%] top-[8%] w-48 h-28" variant="a" />
        <Bee className="absolute left-[2%] top-[30%] w-52 h-28" variant="b" style={{ animationDuration: '9s', animationDelay: '-2s' }} />
        <Bee className="absolute right-[30%] top-[44%] w-48 h-28 hidden sm:block" variant="a" style={{ animationDuration: '6s', animationDelay: '-3s' }} />
        <Bee className="absolute right-[2%] top-[62%] w-52 h-28" variant="b" style={{ animationDuration: '8s', animationDelay: '-5s' }} />
        <Bee className="absolute left-[20%] top-[78%] w-48 h-28 hidden sm:block" variant="c" style={{ animationDuration: '5s', animationDelay: '-1s' }} />
        <Bee className="absolute left-[60%] bottom-4 w-48 h-24" variant="a" style={{ animationDuration: '10s', animationDelay: '-4s' }} />
        <Bee className="absolute left-[70%] top-[36%] w-48 h-28" variant="a" style={{ animationDuration: '8s', animationDelay: '-5s' }} />
      </div>
      <div className="relative reveal mb-10">
        <span className="text-[11px] tracking-[0.25em] uppercase text-cyan-600 font-medium">
          Capabilities
        </span>
        <h2 className="mt-5 text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight">
          Skills & Certifications
          <HoneyPot className="inline-block align-middle ml-3 w-12 sm:w-16 -mt-3" />
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Core — pink, split by role */}
        <div
          className="reveal sm:col-span-2 rounded-[24px] bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 border-t-4 border-pink-400"
          style={{ transitionDelay: '0ms' }}
        >
          <h3 className="text-[11px] tracking-[0.15em] uppercase text-pink-500 font-medium mb-6">
            Core Competencies
          </h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: 'Growth', Icon: TrendingUp, items: skills.growth },
              { title: 'Product', Icon: Boxes, items: skills.product },
            ].map(({ title, Icon, items }) => (
              <div key={title}>
                <div className="flex items-center gap-2 mb-4 text-gray-900">
                  <Icon className="h-4 w-4 text-pink-500" />
                  <span className="font-serif text-2xl">{title}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="text-[13px] px-3.5 py-1.5 rounded-full text-gray-700 bg-pink-50 border border-pink-200/50 hover:border-pink-400 hover:bg-pink-100/50 transition-colors duration-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
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

        {/* Soft skills — emerald */}
        <div
          className="reveal rounded-[24px] bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 border-t-4 border-emerald-400"
          style={{ transitionDelay: '320ms' }}
        >
          <div className="flex items-center gap-2 text-emerald-500 mb-5">
            <HeartHandshake className="h-3.5 w-3.5" />
            <h3 className="text-[11px] tracking-[0.15em] uppercase font-medium">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((s) => (
              <span
                key={s}
                className="text-[13px] px-3.5 py-1.5 rounded-full text-gray-700 bg-emerald-50 border border-emerald-200/50 hover:border-emerald-400 hover:bg-emerald-100/50 transition-colors duration-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
