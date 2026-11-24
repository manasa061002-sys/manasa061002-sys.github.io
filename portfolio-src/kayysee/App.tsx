import { useCallback, useState, type ReactNode } from 'react';
import Customer from './Customer';
import Partner from './Partner';
import Spec from './Spec';

type View = 'customer' | 'partner';

const VIEWS: { id: View; label: string }[] = [
  { id: 'customer', label: 'Customer view' },
  { id: 'partner', label: 'Partner view' },
];

const HERO: Record<View, { eyebrow: string; title: ReactNode; text: string }> = {
  customer: {
    eyebrow: 'Customer view',
    title: (
      <>
        Re-KYC in <mark>about two minutes</mark>.
      </>
    ),
    text: 'Manasa’s ID card is about to expire. Tap through her investing app to update it. The notes alongside explain each decision.',
  },
  partner: {
    eyebrow: 'Partner view',
    title: (
      <>
        See where customers <mark>drop off</mark>, and what to try next.
      </>
    ),
    text: 'The dashboard a partner app would use to follow its customers from sign-up to re‑KYC.',
  },
};

export default function App() {
  const [view, setView] = useState<View>('customer');
  const [specOpen, setSpecOpen] = useState(false);
  const go = (v: View) => {
    setView(v);
    window.scrollTo({ top: 0 });
  };
  const close = useCallback(() => setSpecOpen(false), []);
  const h = HERO[view];

  return (
    <>
      <header className="top">
        <div className="wrap">
          <div className="logo">
            <span className="logo-dot" aria-hidden="true" />
            KayYSee
          </div>
          <nav className="tabs" role="tablist" aria-label="Views">
            {VIEWS.map((v) => (
              <button key={v.id} role="tab" className="tab" aria-selected={view === v.id} onClick={() => go(v.id)}>
                {v.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <div className="hero wrap">
          <span className="eyebrow">{h.eyebrow}</span>
          <h1>{h.title}</h1>
          <p>{h.text}</p>
        </div>
        {view === 'customer' && <Customer />}
        {view === 'partner' && <Partner />}
      </main>
      <footer className="site-foot">
        <div className="wrap">A product concept by Manasa Rammohan. KayYSee and Kumquat are made-up names, all data is invented, the concept isn’t affiliated with any company, and nothing here is investment advice.</div>
      </footer>
      <button className="spec-tab" onClick={() => setSpecOpen(true)} aria-haspopup="dialog" aria-expanded={specOpen}>
        <span className="spec-tab-dot" aria-hidden="true" />
        <span className="spec-tab-text">Product Spec</span>
      </button>
      {specOpen && <Spec close={close} onOpen={go} />}
    </>
  );
}
