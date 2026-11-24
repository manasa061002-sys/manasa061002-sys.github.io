import { useEffect, type ReactNode } from 'react';
import { links } from './data';

type View = 'customer' | 'partner';

/** The product spec, in a panel that slides over the page. */
export default function Spec({ close, onOpen }: { close: () => void; onOpen: (v: View) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [close]);

  const See = ({ v, children }: { v: View; children: ReactNode }) => (
    <button
      className="spec-see"
      onClick={() => {
        onOpen(v);
        close();
      }}
    >
      {children} <span aria-hidden="true">→</span>
    </button>
  );

  return (
    <div className="spec-wrap" role="dialog" aria-modal="true" aria-label="Product Spec" onClick={close}>
      <article className="spec" onClick={(e) => e.stopPropagation()}>
        <button className="spec-close" onClick={close} aria-label="Close">
          ✕
        </button>
        <span className="spec-kick">Product Spec · KayYSee</span>
        <h1>
          What happens <mark>after</mark> sign-up
        </h1>
        <p className="lead">What the problem is, what I decided and why, and how I’d know whether it worked.</p>

        <h2>The problem</h2>
        <p>
          A lot of design effort goes into opening an account. Much less goes into what happens after. ID cards expire, people move house and change jobs, and the platform is required to keep those details current. This is re-KYC: checking the
          “know your customer” details again.
        </p>
        <p>
          Today it usually arrives as an email with a long form and a deadline. If the customer misses the deadline, their account is restricted and they can’t trade until it’s sorted. For the app they use, that means an annoyed customer and a
          support ticket.
        </p>

        <h2>Who it’s for</h2>
        <div className="spec-three">
          <div>
            <b>The customer</b>
            <p>Wants it over with in a couple of minutes, without typing everything in again.</p>
          </div>
          <div>
            <b>The partner app</b>
            <p>Wants customers to stay active and compliant, without a pile of support tickets every time a batch of IDs expires.</p>
          </div>
          <div>
            <b>Compliance</b>
            <p>Needs accurate, current data and a record of exactly what changed.</p>
          </div>
        </div>

        <h2>What I built</h2>
        <p>KayYSee is a made-up investing platform that other apps run on. Kumquat is a made-up app built on top of it. The customer only ever sees Kumquat. I built two things:</p>
        <div className="spec-two">
          <div>
            <b>Customer view</b>
            <p>Kumquat’s re-KYC flow for the most common case, an expired ID card.</p>
            <See v="customer">Try it</See>
          </div>
          <div>
            <b>Partner view</b>
            <p>A dashboard showing where customers drop off between sign-up and re-KYC, with something worth testing at each step.</p>
            <See v="partner">Open it</See>
          </div>
        </div>
        <p>Not covered: first-time onboarding, proof-of-address documents, and the tool compliance staff would use to review submissions.</p>

        <h2>Decisions and trade-offs</h2>
        <div className="spec-decision">
          <h4>1. Pre-fill every field and default it to “Still correct”</h4>
          <p>Most people have nothing to change, so they shouldn’t have to type anything.</p>
          <p className="tradeoff">
            <b>Trade-off:</b> people might confirm without reading. The review step lists every field again, marks what changed, and asks for one explicit confirmation.
          </p>
          <See v="customer">See it in the customer view</See>
        </div>
        <div className="spec-decision">
          <h4>2. Only ask for the document that expired</h4>
          <p>Asking for the whole onboarding pack again is the quickest way to lose people halfway through.</p>
          <p className="tradeoff">
            <b>Trade-off:</b> this depends on having a reliable expiry date for every document. When one is missing, the flow falls back to asking for the full set.
          </p>
          <See v="customer">See it in the customer view</See>
        </div>
        <div className="spec-decision">
          <h4>3. Keep trading open while the check runs</h4>
          <p>Freezing someone’s account for a routine check punishes exactly the people who did it on time.</p>
          <p className="tradeoff">
            <b>Trade-off:</b> this only holds before the regulatory deadline. After it, restrictions do apply, and the app has to say so plainly.
          </p>
          <See v="customer">See it in the customer view</See>
        </div>
        <div className="spec-decision">
          <h4>4. Put a suggested test next to every drop-off</h4>
          <p>A funnel shows where people leave. It doesn’t tell the partner what to do about it.</p>
          <p className="tradeoff">
            <b>Trade-off:</b> the suggestions are hypotheses, and each one needs an A/B test before it goes out to everyone.
          </p>
          <See v="partner">See it in the partner view</See>
        </div>

        <h2>What I’d measure</h2>
        <ul>
          <li>Share of re-KYCs finished before the deadline (the main one)</li>
          <li>Median time to finish</li>
          <li>Share of customers restricted after the deadline</li>
          <li>How often documents get rejected</li>
          <li>Support tickets per 1,000 re-KYCs</li>
        </ul>

        <h2>What I’d test next</h2>
        <ul>
          <li>Push notification against email, and the best time to send each</li>
          <li>Showing the in-app reminder 30 days before the deadline instead of 14</li>
          <li>Short examples under “source of money”, the field people hesitate on the most</li>
        </ul>

        <h2>Why I built this</h2>
        <p>
          At Axis Bank, I contacted more than 200 customers about KYC updates, from people with their first account to senior citizens. Nobody enjoys being asked to do it. I wanted to see how short and painless it could get.
        </p>

        <div className="spec-foot">
          <b>Manasa Rammohan</b>
          <span>Banking and finance graduate (MSc, HSLU), Berlin. Moving into product management.</span>
          <div className="spec-links">
            <a href={links.website} target="_blank" rel="noreferrer">
              My website
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={links.email}>Email me</a>
          </div>
        </div>
      </article>
    </div>
  );
}
