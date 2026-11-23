import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';
import TicTacToe from '@/components/TicTacToe';
import { useScrollLock, useSite } from '@/lib/site';

/** Random facts about Manasa: her own fun facts, plus a few from the portfolio. */
const FACTS = [
  // her fun facts
  'As a young child, Manasa lived on a ship for about two months.',
  'She lived in Singapore for five years, all through middle school.',
  'She’s a hoarder and a maximalist at heart. (Not a good thing, she admits.)',
  'People tell her she has really good handwriting.',
  'During her Bachelor’s, she was the class representative for a batch of 60+ students.',
  'In her Social Economics Policy course, her policy paper was highly praised for its innovative idea: protecting school students and their environment, with a focus on India’s POCSO Act.',
  'Her dream is to save up and go on a world tour one day.',
  'She’s a night owl.',
  'She has no favourite colour. She loves all of them.',
  'She loves photography because it’s the best way she knows to show how much she loves the person, or thing, on the other side of the camera.',
  // from the portfolio
  'Manasa speaks 7 languages, from Tamil and Kannada to Japanese and Korean.',
  'She has lived in 4 countries: India, Singapore, Switzerland and Germany.',
  'Her team came 1st in Switzerland in the Bloomberg Global Trading Challenge, top 50 out of 1,750+ teams worldwide.',
  'Her bachelor’s thesis asked whether Bitcoin could be a viable alternative to fiat money.',
  'She took a cold-outreach response rate from 3% to about 15% in two weeks.',
  'Professionally, she likes making content that communicates with ease. Personally, she likes being funny.',
  'Two cats live in her photo gallery: Catto and Lucy. Find them in Life & Interests.',
  'She designed the posters, banners and brochure for the Young Economists Summit 2023.',
];

/** A spider, hanging upside down from its thread. */
function Spider() {
  return (
    <svg viewBox="0 0 64 60" className="h-auto w-full overflow-visible" aria-hidden>
      <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" className="spider-legs">
        <path d="M24 26 C 14 20, 8 22, 4 14 M24 30 C 12 28, 6 32, 2 28 M24 34 C 12 36, 8 42, 4 44 M26 38 C 18 44, 16 50, 12 56" />
        <path d="M40 26 C 50 20, 56 22, 60 14 M40 30 C 52 28, 58 32, 62 28 M40 34 C 52 36, 56 42, 60 44 M38 38 C 46 44, 48 50, 52 56" />
      </g>
      <ellipse cx="32" cy="24" rx="9" ry="8" fill="#000" stroke="#fff" strokeWidth="2.2" />
      <ellipse cx="32" cy="38" rx="11" ry="12" fill="#000" stroke="#fff" strokeWidth="2.2" />
      <circle cx="28.5" cy="25" r="2.4" fill="#fff" />
      <circle cx="35.5" cy="25" r="2.4" fill="#fff" />
      <circle cx="28.8" cy="25.6" r="1" fill="#000" />
      <circle cx="35.8" cy="25.6" r="1" fill="#000" />
    </svg>
  );
}

/** The challenge: beat the spider at tic-tac-toe for a fact about Manasa. */
function Challenge({ onClose }: { onClose: () => void }) {
  const [fact, setFact] = useState<string | null>(null);
  const used = useRef<number[]>([]);
  const close = useRef<HTMLButtonElement>(null);
  useScrollLock(true);

  useEffect(() => {
    close.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // A new fact each win, without repeats until all have been told.
  const tellFact = () => {
    if (used.current.length === FACTS.length) used.current = [];
    const left = FACTS.map((_, i) => i).filter((i) => !used.current.includes(i));
    const i = left[Math.floor(Math.random() * left.length)];
    used.current.push(i);
    setFact(FACTS[i]);
  };

  return (
    <m.div
      className="zone-keep fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <m.div
        role="dialog"
        aria-modal="true"
        aria-label="Tic-tac-toe with the spider"
        className="relative w-full max-w-md rounded-[28px] border border-white/15 bg-[#0a0a0a] p-7 text-white sm:p-9"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={close} type="button" onClick={onClose} aria-label="Close the game" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-white/70 hover:bg-white/10 hover:text-white">
          <X className="h-5 w-5" aria-hidden />
        </button>
        <div className="mx-auto w-16">
          <Spider />
        </div>
        <h2 className="mt-3 text-center font-serif text-[28px] leading-tight">Beat me, and I’ll spill a secret.</h2>
        <p className="mt-2 text-center text-[14px] text-white/70">Win a round of tic-tac-toe for a random fact about Manasa.</p>

        <AnimatePresence mode="wait">
          {fact && (
            <m.p
              key={fact}
              className="mt-5 rounded-2xl border border-white/20 bg-white/[0.06] p-4 text-center text-[15px] leading-relaxed"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              role="status"
            >
              <span className="mb-1 block text-[12px] uppercase tracking-[0.2em] text-white/60">Did you know?</span>
              {fact}
            </m.p>
          )}
        </AnimatePresence>

        <div className="mt-6 flex justify-center">
          <TicTacToe onWin={tellFact} />
        </div>
      </m.div>
    </m.div>
  );
}

/**
 * A spider on a loooong thread down the left edge of the page. As you scroll
 * it travels down with you (its silk paying out from the top of the page)
 * until it lands on the rainbow line at the top of the footer, and stays
 * there. White on the black half, ink on the paper half. Click it for the game.
 */
export default function SpiderGame() {
  const [open, setOpen] = useState(false);
  const { light } = useSite();
  const hang = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const place = () => {
      raf = 0;
      const el = hang.current;
      if (!el) return;
      const small = window.innerWidth < 640;
      const spiderH = small ? 40 : 58;
      // where the rainbow line at the top of the footer is, in page coordinates
      const footer = document.querySelector<HTMLElement>('footer[data-section="footer"]');
      const line = footer ? footer.getBoundingClientRect().top + window.scrollY : Infinity;
      // On phones the name fills the width, so the thread starts just below it
      // instead of at the top of the page (where it would cross the M).
      const name = small ? document.querySelector<HTMLElement>('.name-board') : null;
      const top = name ? name.getBoundingClientRect().bottom + window.scrollY + 16 : 0;
      const want = window.scrollY + window.innerHeight * (small ? 0.62 : 0.55);
      const y = Math.max(120, top + 60, Math.min(want, line - spiderH));
      el.style.setProperty('--top', `${Math.round(top)}px`);
      el.style.setProperty('--y', `${Math.round(y)}px`);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(place);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    // the sections below mount a little later and change the page's height
    const ro = new ResizeObserver(on);
    ro.observe(document.body);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={hang} className={`spider-hang ${light ? 'on-paper' : ''}`}>
        <span className="spider-thread" aria-hidden />
        <button type="button" onClick={() => setOpen(true)} aria-label="The spider: play tic-tac-toe for a fact about Manasa" className="spider-btn">
          <Spider />
          <span className="spider-tag">play?</span>
        </button>
      </div>

      <AnimatePresence>{open && <Challenge onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
