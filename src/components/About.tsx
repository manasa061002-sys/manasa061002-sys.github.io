import { MapPin, Mail, Linkedin, Quote } from 'lucide-react';
import { profile, stats } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import RubiksCube from './RubiksCube';

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 sm:py-16 px-6 sm:px-10 max-w-5xl mx-auto"
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">
        {/* Left: identity */}
        <div className="reveal">
          <span className="text-[11px] tracking-[0.25em] uppercase text-white/40 font-light">
            About
          </span>
          <h1 className="mt-5 text-5xl sm:text-7xl font-medium text-white tracking-tight leading-[1.0]">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-white/50 font-light tracking-wide">
            Aspiring Marketer
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-[12px] text-white/50">
            {profile.roles.map((r) => (
              <span
                key={r}
                className="px-3.5 py-1 rounded-full border border-white/15"
              >
                {r}
              </span>
            ))}
          </div>

          <div className="mt-8 relative pl-6 border-l border-white/15">
            <Quote className="absolute -left-2.5 top-0 h-4 w-4 text-white/30 bg-black p-0.5" />
            <p className="text-white/60 leading-[1.75] text-[15px] font-light">
              {profile.bio}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 text-[12px] text-white/40">
            <span className="flex flex-col">
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                {profile.locationLine1}
              </span>
              <span className="ml-5 text-white/30">{profile.locationLine2}</span>
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <Mail className="h-3.5 w-3.5" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Rubik's cube */}
        <div
          className="reveal relative overflow-hidden"
          style={{ transitionDelay: '120ms' }}
        >
          <div className="w-full h-[300px] sm:h-[380px]">
            <RubiksCube />
          </div>
          <p className="text-center text-[11px] tracking-wide text-white/25 mt-2">
            Press to play around
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 grid sm:grid-cols-3 gap-px bg-white/10">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="reveal bg-black p-8 group hover:bg-white/[0.03] transition-colors duration-500"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="text-5xl sm:text-6xl font-medium text-white">
              {s.value}
            </div>
            <div className="mt-4 text-[12px] tracking-wide uppercase text-white/50 font-medium">
              {s.label}
            </div>
            <div className="mt-2 text-[13px] text-white/30 leading-relaxed font-light">
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
