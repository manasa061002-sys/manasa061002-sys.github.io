import { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import TicTacToe from './TicTacToe';
import { profile } from '@/data/portfolio';

export default function Landing({ onUnlock }: { onUnlock: () => void }) {
  const [unlocking, setUnlocking] = useState(false);

  const triggerUnlock = () => {
    if (unlocking) return;
    setUnlocking(true);
    setTimeout(() => onUnlock(), 1200);
  };

  return (
    <div
      className={`min-h-screen w-full bg-black relative overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        unlocking
          ? 'opacity-0 scale-[1.03]'
          : 'opacity-100'
      }`}
    >
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 sm:px-10 py-7">
          <div className="flex items-center gap-2 text-white/40">
            <Lock className="h-3.5 w-3.5" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-light">
              Portfolio
            </span>
          </div>
          <span className="text-[11px] tracking-wide text-white/30 hidden sm:block">
            Berlin · Kreuzberg
          </span>
        </header>

        {/* Main */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 pb-12">
          <div className="text-center max-w-3xl mb-10 sm:mb-14">
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-6 animate-[fadeInSlow_1s_ease]">
              Welcome to Manasa's Pandora
            </p>
            <h1 className="text-5xl sm:text-7xl font-medium text-white tracking-tight leading-[1.02] animate-[fadeIn_0.8s_ease]">
              {profile.name}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/50 italic max-w-xl mx-auto leading-relaxed font-serif animate-[fadeIn_1s_ease]">
              {profile.quote}
            </p>
          </div>

          {/* Tic-Tac-Toe — centered */}
          <div className="flex flex-col items-center gap-5 rounded-[28px] border border-white/10 bg-white/[0.02] p-7 sm:p-9 animate-[fadeIn_1.2s_ease] w-full max-w-md">
            <div className="text-center">
              <h2 className="text-2xl font-medium text-white">
                Beat the AI to unlock
              </h2>
              <p className="text-[12px] text-white/40 mt-1.5">
                Play Tic-Tac-Toe · you are{' '}
                <span className="text-white font-medium">✕</span> · AI is{' '}
                <span className="text-white/50 font-medium">◯</span>
              </p>
            </div>
            <TicTacToe onWin={triggerUnlock} />
          </div>

          {/* Skip button */}
          <button
            onClick={triggerUnlock}
            className="mt-12 group flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 text-white font-light text-[13px] tracking-wide hover:bg-white hover:text-black transition-all duration-500 animate-[fadeIn_1.4s_ease]"
          >
            Skip & Unlock Portfolio
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </main>
      </div>
    </div>
  );
}
