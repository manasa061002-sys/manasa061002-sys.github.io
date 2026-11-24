import { dueByWeek, kept, kpis, lifecycle, rekyc, stuck, worstStep, type FunnelRow } from './data';

function Funnel({ data }: { data: FunnelRow[] }) {
  const top = data[0].n;
  const worst = worstStep(data);
  return (
    <div className="funnel">
      {data.map((r, i) => (
        <div key={r.step} className={`frow${i === worst ? ' worst' : ''}`}>
          <span>{r.step}</span>
          <div className="bar">
            <span style={{ width: `${(r.n / top) * 100}%` }} />
          </div>
          <span className="num">
            {r.n.toLocaleString('en-GB')}
            {i > 0 && <span className="conv">{Math.round(kept(data, i) * 100)}% of prev.</span>}
          </span>
        </div>
      ))}
    </div>
  );
}

/** The dashboard a partner app would see on the platform. */
export default function Partner() {
  const lw = worstStep(lifecycle);
  const rw = worstStep(rekyc);
  const peak = Math.max(...dueByWeek);
  const lost = (from: string, to: string) => {
    const a = rekyc.find((r) => r.step === from)!.n;
    const b = rekyc.find((r) => r.step === to)!.n;
    return ((a - b) / a) * 100;
  };
  const ranked = [...stuck].sort((x, y) => lost(y.from, y.to) - lost(x.from, x.to));

  return (
    <div className="partner wrap">
      <div className="dash-head">
        <div>
          <h2>Kumquat · Customer lifecycle</h2>
          <p>What a partner app sees on the platform. Last 30 days, mock data.</p>
        </div>
      </div>
      <div className="kpis">
        {kpis.map((k) => (
          <div key={k.label} className="kpi">
            <small>{k.label}</small>
            <strong>{k.value}</strong>
            <span className="delta">{k.delta}</span>
          </div>
        ))}
      </div>
      <div className="panel-grid">
        <div className="panel">
          <h3>From sign-up to savings plan</h3>
          <p>New customers in the last 30 days</p>
          <Funnel data={lifecycle} />
          <div className="insight">
            <b>
              Biggest drop: {lifecycle[lw - 1].step} → {lifecycle[lw].step}
            </b>
            Only {Math.round(kept(lifecycle, lw) * 100)}% of customers who trade once set up a savings plan.
          </div>
          <div className="suggest">
            <span className="suggest-label">Idea to test</span>
            <p>Offer a €25 monthly plan right on the first trade confirmation screen.</p>
          </div>
        </div>
        <div className="panel">
          <h3>Re-KYC funnel</h3>
          <p>Customers reminded in the last 30 days</p>
          <Funnel data={rekyc} />
          <div className="insight">
            <b>
              Biggest drop: {rekyc[rw - 1].step} → {rekyc[rw].step}
            </b>
            {Math.round((1 - kept(rekyc, rw)) * 100)}% never open the email.
          </div>
          <div className="suggest">
            <span className="suggest-label">Idea to test</span>
            <p>Send a push notification 3 days before the deadline.</p>
          </div>
        </div>
        <div className="panel">
          <h3>Re-KYC due, next 8 weeks</h3>
          <p>Plan reminders and support capacity ahead of the peaks</p>
          <div className="weeks" role="img" aria-label={`Re-KYC due per week: ${dueByWeek.join(', ')}`}>
            {dueByWeek.map((v, i) => (
              <div key={i} className={`wk${i < 4 ? ' soon' : ''}`}>
                <span>{v}</span>
                <div className="b" style={{ height: `${(v / peak) * 100}%` }} />
                <span className="lbl">Wk {i + 1}</span>
              </div>
            ))}
          </div>
          <div className="legend">
            <span>
              <i style={{ background: 'var(--lemon-deep)' }} />
              Due in the next 30 days
            </span>
            <span>
              <i style={{ background: '#d9d6ca' }} />
              Later
            </span>
          </div>
        </div>
        <div className="panel">
          <h3>Where customers get stuck</h3>
          <p>Ranked by drop-off, with a likely reason and an idea to test</p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Drop-off</th>
                  <th>Likely reason</th>
                  <th>Idea to test</th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((s, i) => (
                  <tr key={s.from}>
                    <td>{s.to}</td>
                    <td className="n">
                      {lost(s.from, s.to).toFixed(1)}% {i === 0 && <span className="tag">Top</span>}
                    </td>
                    <td>{s.reason}</td>
                    <td>{s.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p className="mock-note">All numbers are invented to show how the dashboard would work. Reasons and fixes are hypotheses to test, not results.</p>
    </div>
  );
}
