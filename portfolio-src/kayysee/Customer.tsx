import { useEffect, useMemo, useState } from 'react';
import { STEPS, compare, customer, notes, stepNames, type Step } from './data';

const fresh = <T,>(f: (v: string) => T) => Object.fromEntries(customer.fields.map((x) => [x.key, f(x.value)])) as Record<string, T>;

const stepNo: Partial<Record<Step, number>> = { details: 1, document: 2, review: 3 };
const left: Partial<Record<Step, string>> = { details: 'about 2 min left', document: 'about 1 min left', review: 'almost done' };

/** The Kumquat app on a phone, with the design notes beside it. */
export default function Customer() {
  const [step, setStep] = useState<Step>('home');
  const [doneBefore, setDoneBefore] = useState(false);
  const [toast, setToast] = useState('');
  const [same, setSame] = useState(() => fresh(() => true));
  const [values, setValues] = useState(() => fresh((v) => v));
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [check, setCheck] = useState(0);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    if (step !== 'status') return;
    setCheck(1);
    const t = setTimeout(() => setCheck(2), 3200);
    return () => clearTimeout(t);
  }, [step]);

  const changed = useMemo(() => customer.fields.filter((f) => !same[f.key] && values[f.key].trim() !== f.value), [same, values]);

  const restart = () => {
    setStep('home');
    setDoneBefore(false);
    setSame(fresh(() => true));
    setValues(fresh((v) => v));
    setFront(false);
    setBack(false);
    setAgreed(false);
    setCheck(0);
  };

  const note = notes[step];
  const n = stepNo[step];

  return (
    <div className="customer wrap">
      <div className="phone" aria-label="Mock investing app">
        <div className="screen">
          <div className="statusbar">
            <span>9:41</span>
            <span>5G ▮▮▮</span>
          </div>
          <div className="appbar">
            {step === 'home' || step === 'status' ? (
              <span className="appname">
                <i /> Kumquat
              </span>
            ) : (
              <button className="back" onClick={() => setStep(STEPS[STEPS.indexOf(step) - 1])}>
                ← Back
              </button>
            )}
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>{step === 'home' ? 'Hi Manasa' : ''}</span>
          </div>

          {n && (
            <div className="progress">
              <div className="progress-bar">
                <span style={{ width: `${(n / 3) * 100}%` }} />
              </div>
              <div className="progress-meta">
                <span>Step {n} of 3</span>
                <span>{left[step]}</span>
              </div>
            </div>
          )}

          {step === 'home' && (
            <div className="body">
              <div className="balance">
                <small>Your portfolio</small>
                <strong>€4,218.40</strong>
                <span className="gain">+€62.10 this month</span>
              </div>
              {doneBefore ? (
                <div className="notice" style={{ background: 'var(--green-soft)', borderColor: '#bfe3cd' }}>
                  <h4>Your details are up to date</h4>
                  <p>Nothing to do. We’ll let you know well before anything expires again.</p>
                </div>
              ) : (
                <div className="notice" role="status">
                  <h4>Your ID card expires on 30 November</h4>
                  <p>Update your details in about 2 minutes to keep investing without interruption.</p>
                  <div className="row">
                    <button className="btn small" onClick={() => setStep('details')}>
                      Update now
                    </button>
                    <button className="btn small ghost" onClick={() => setToast('We’ll remind you tomorrow at 9:00.')}>
                      Remind me tomorrow
                    </button>
                  </div>
                </div>
              )}
              <div className="holdings">
                <h4>Holdings</h4>
                {customer.holdings.map((h) => (
                  <div key={h.name} className="holding">
                    <span>{h.name}</span>
                    <span>{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 'details' && (
            <>
              <div className="body">
                <h2 className="screen-title">Is this still you?</h2>
                <p className="screen-sub">We’ve filled in what we already know. Confirm it, or change what’s different.</p>
                {customer.fields.map((f) => (
                  <div key={f.key} className="field">
                    <div className="field-top">
                      <div>
                        <label htmlFor={`f-${f.key}`}>{f.label}</label>
                        {same[f.key] && <div className="value">{values[f.key]}</div>}
                      </div>
                      <div className="pills">
                        <button
                          className="pill"
                          aria-pressed={same[f.key]}
                          onClick={() => {
                            setSame({ ...same, [f.key]: true });
                            setValues({ ...values, [f.key]: f.value });
                          }}
                        >
                          Still correct
                        </button>
                        <button className="pill" aria-pressed={!same[f.key]} onClick={() => setSame({ ...same, [f.key]: false })}>
                          Change
                        </button>
                      </div>
                    </div>
                    {!same[f.key] && <input id={`f-${f.key}`} value={values[f.key]} onChange={(e) => setValues({ ...values, [f.key]: e.target.value })} autoFocus />}
                  </div>
                ))}
                <details className="why">
                  <summary>Why do we ask?</summary>
                  <p>Investment providers have to keep customer details up to date to protect you and prevent fraud and money laundering. We only ask for what we need.</p>
                </details>
              </div>
              <div className="footer-cta">
                <button className="btn" onClick={() => setStep('document')}>
                  Continue
                </button>
              </div>
            </>
          )}

          {step === 'document' && (
            <>
              <div className="body">
                <h2 className="screen-title">Your ID card has expired</h2>
                <p className="screen-sub">Add a photo of your new one. Everything else stays the same.</p>
                <div className="uploads">
                  {[
                    { label: 'Front', ok: front, set: setFront },
                    { label: 'Back', ok: back, set: setBack },
                  ].map((s) => (
                    <button key={s.label} className={`slot${s.ok ? ' done' : ''}`} onClick={() => s.ok || s.set(true)} aria-label={`Take photo of ${s.label.toLowerCase()} of ID`}>
                      <div>
                        <div className="card-mock" />
                        {s.ok ? <span className="ok">✓ Sharp and readable</span> : <span>Tap to take photo of the {s.label.toLowerCase()}</span>}
                      </div>
                    </button>
                  ))}
                </div>
                <ul className="tips">
                  <li>Lay the card on a flat, dark surface</li>
                  <li>Make sure all four corners are visible</li>
                  <li>Avoid glare from lamps or windows</li>
                </ul>
                <button className="link-btn" onClick={() => setToast('In the full version, you could switch to a passport here.')}>
                  Use a passport instead
                </button>
              </div>
              <div className="footer-cta">
                <button className="btn" disabled={!front || !back} onClick={() => setStep('review')}>
                  Continue
                </button>
              </div>
            </>
          )}

          {step === 'review' && (
            <>
              <div className="body">
                <h2 className="screen-title">Check and send</h2>
                <p className="screen-sub">
                  {changed.length === 0 ? 'No changes to your details, just a new ID photo.' : `${changed.length} change${changed.length > 1 ? 's' : ''} to your details, plus a new ID photo.`}
                </p>
                <div className="summary">
                  {customer.fields.map((f) => {
                    const upd = changed.some((c) => c.key === f.key);
                    return (
                      <div key={f.key} className={upd ? 'updated' : ''}>
                        <span>
                          {f.label}
                          {upd && <em className="new-tag">Updated</em>}
                        </span>
                        <span>{values[f.key]}</span>
                      </div>
                    );
                  })}
                  <div>
                    <span>ID card</span>
                    <span>New photo, front and back</span>
                  </div>
                </div>
                <label className="check">
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                  <span>I confirm my details are correct and complete.</span>
                </label>
              </div>
              <div className="footer-cta">
                <button className="btn" disabled={!agreed} onClick={() => setStep('status')}>
                  Send
                </button>
              </div>
            </>
          )}

          {step === 'status' && (
            <>
              <div className="body">
                <h2 className="screen-title">{check === 2 ? 'You’re all set' : 'Thanks, we’re checking'}</h2>
                <p className="screen-sub">{check === 2 ? 'Your details are up to date.' : 'You can keep investing while we check.'}</p>
                <div className="timeline">
                  <div className="tl done">
                    <div className="dot">✓</div>
                    <div>
                      <h4>Sent</h4>
                      <p>Just now</p>
                    </div>
                  </div>
                  <div className={`tl ${check === 2 ? 'done' : 'active'}`}>
                    <div className="dot">{check === 2 ? '✓' : ''}</div>
                    <div>
                      <h4>Checking your ID</h4>
                      <p>Usually under 10 minutes</p>
                    </div>
                  </div>
                  <div className={`tl ${check === 2 ? 'done' : ''}`}>
                    <div className="dot">{check === 2 ? '✓' : ''}</div>
                    <div>
                      <h4>Done</h4>
                      <p>We’ll send you a notification</p>
                    </div>
                  </div>
                </div>
                {check === 2 && <div className="success">Approved. Nothing else to do.</div>}
              </div>
              <div className="footer-cta">
                <button
                  className="btn"
                  onClick={() => {
                    setDoneBefore(true);
                    setStep('home');
                  }}
                >
                  Back to portfolio
                </button>
              </div>
            </>
          )}

          {toast && (
            <div className="toast" role="status">
              {toast}
            </div>
          )}
        </div>
      </div>

      <div className="notes">
        <div className="note-card">
          <span className="step-label">{note.label}</span>
          <h3>{note.title}</h3>
          {note.text.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <div className="steps-nav" aria-label="Jump to a step">
            {STEPS.map((s) => (
              <button key={s} className="pill" aria-pressed={step === s} onClick={() => setStep(s)}>
                {stepNames[s]}
              </button>
            ))}
            <button className="pill" onClick={restart}>
              Restart
            </button>
          </div>
        </div>
        <div className="compare">
          <div className="compare-head">
            <h4>Before vs. after</h4>
            <div className="compare-time">
              <span className="was">9m 10s</span>
              <span aria-hidden="true">→</span>
              <b>2m 40s</b>
              <small>median time to complete</small>
            </div>
          </div>
          <ol className="compare-rows">
            {compare.map((r) => (
              <li key={r.step}>
                <button className="compare-row" aria-current={step === r.step ? 'step' : undefined} onClick={() => setStep(r.step)}>
                  <span className="compare-what">{r.what}</span>
                  <span className="compare-old">{r.old}</span>
                  <span className="compare-now">{r.now}</span>
                </button>
              </li>
            ))}
          </ol>
          <p className="compare-note">Tap a row to jump to that step. Times are mock data.</p>
        </div>
      </div>
    </div>
  );
}
