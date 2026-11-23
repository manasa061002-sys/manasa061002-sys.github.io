import type { ReactNode } from 'react';
import { Bot, Boxes, GraduationCap, HeartHandshake, TrendingUp, Wrench } from 'lucide-react';
import { skills } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHead from '@/components/SectionHead';
import NaiveDoodle from '@/components/NaiveDoodle';


/** A small group heading: icon in the signature colour, label in grey. */
function GroupHead({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <h3 className="mb-5 flex items-center gap-2 font-[Inter,sans-serif] text-[12px] font-medium uppercase tracking-[0.15em] text-gray-600">
      <span className="text-signature">{icon}</span>
      {children}
    </h3>
  );
}

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>();
  const chips = (items: string[]) => (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li key={s} className="naive-chip">
          {s}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id="skills"
      data-section="skills"
      ref={ref}
      className="relative isolate overflow-x-clip py-16 sm:py-24 px-6 sm:px-10 max-w-5xl mx-auto"
    >
      <NaiveDoodle kind="squiggle" className="right-0 top-28 w-10" />
      <NaiveDoodle kind="heart" className="left-0 top-[60%] w-9" delay={0.3} />
      <SectionHead
        no="06"
        label="CAPABILITIES"
        title="Skills & Certifications"
        tone="light"
        scribble="the toolkit"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Core competencies, split by role */}
        <div className="card sketch-box p-7 sm:col-span-2 sm:p-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              { title: 'Growth', Icon: TrendingUp, items: skills.growth },
              { title: 'Product', Icon: Boxes, items: skills.product },
            ].map(({ title, Icon, items }) => (
              <div key={title}>
                <GroupHead icon={<Icon className="h-4 w-4" />}>{title}</GroupHead>
                {chips(items)}
              </div>
            ))}
          </div>
        </div>

        <div className="card sketch-box p-7 sm:p-8">
          <GroupHead icon={<Wrench className="h-4 w-4" />}>Tools</GroupHead>
          {chips(skills.tools)}
        </div>

        <div className="card sketch-box p-7 sm:p-8">
          <GroupHead icon={<Bot className="h-4 w-4" />}>AI tools</GroupHead>
          {chips(skills.ai)}
        </div>

        <div className="card sketch-box p-7 sm:p-8">
          <GroupHead icon={<GraduationCap className="h-4 w-4" />}>Certifications</GroupHead>
          <ul className="space-y-3">
            {skills.certifications.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-[15px] leading-snug text-gray-700">
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="card sketch-box p-7 sm:p-8">
          <GroupHead icon={<HeartHandshake className="h-4 w-4" />}>Soft skills</GroupHead>
          {chips(skills.soft)}
        </div>
      </div>
    </section>
  );
}
