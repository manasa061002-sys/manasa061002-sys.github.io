import { MapPin, Mail, Linkedin, ArrowUp } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative bg-white">
      {/* Gradient strip at top — the colorful world's closing ribbon */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            'linear-gradient(to right, #ec4899, #facc15, #06b6d4, #a855f7, #ec4899)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-2xl font-medium text-gray-900">{profile.name}</p>
            <p className="text-[13px] text-gray-400 mt-2 italic max-w-md leading-relaxed font-serif">
              {profile.tagline}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-[13px] text-gray-400">
              <span className="flex flex-col">
                <span className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-pink-400" />
                  {profile.locationLine1}
                </span>
                <span className="ml-5 text-gray-300">{profile.locationLine2}</span>
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-gray-900 transition-colors duration-300"
              >
                <Mail className="h-3.5 w-3.5 text-cyan-400" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-900 transition-colors duration-300"
              >
                <Linkedin className="h-3.5 w-3.5 text-violet-400" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex sm:justify-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-[13px] text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-all duration-300"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 text-[11px] text-gray-400 text-center tracking-wide">
          © {new Date().getFullYear()} {profile.name}. Designed & built in
          Berlin.
        </div>
      </div>
    </footer>
  );
}
