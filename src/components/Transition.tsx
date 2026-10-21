import { ArrowDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * The bridge between the professional black & white world
 * and the vibrant, colorful creative world.
 */
export default function Transition() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      {/* Smoother multi-stop gradient from black to white */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #000000 0%, #050008 10%, #0d0218 22%, #1a0a2e 32%, #2d0f3e 42%, #ec4899 56%, #facc15 68%, #06b6d4 78%, #c7d4e0 90%, #ffffff 100%)',
        }}
      />

      {/* Floating color blobs — kept vibrant */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-pink-500/35 blur-[100px] animate-[fadeInSlow_2s_ease]" />
        <div className="absolute top-1/2 right-1/3 h-72 w-72 rounded-full bg-cyan-400/30 blur-[110px] animate-[fadeInSlow_2.5s_ease]" />
        <div className="absolute bottom-1/4 left-1/3 h-56 w-56 rounded-full bg-yellow-400/30 blur-[90px] animate-[fadeInSlow_3s_ease]" />
      </div>

      {/* Bottom edge fades into white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[5]"
      />

      {/* Center text — pushed down slightly; "meets color" stays solid white with a vibrant underline accent so it's readable against any background color */}
      <div className="reveal relative z-10 h-full flex flex-col items-center justify-center px-6 pt-[12vh]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/60 mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
          The other side
        </p>
        <h2 className="text-4xl sm:text-6xl font-medium text-white text-center leading-[1.05] tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
          Where structure
          <br />
          <span className="italic inline-block [text-shadow:0_2px_14px_rgba(0,0,0,0.55)]">
            meets color
          </span>
        </h2>
        <ArrowDown className="mt-10 h-5 w-5 text-white/60 animate-bounce [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]" />
      </div>
    </section>
  );
}
