// Everything here is made up: KayYSee and Kumquat are invented names and every
// number is mock data.

export type Step = 'home' | 'details' | 'document' | 'review' | 'status';
export const STEPS: Step[] = ['home', 'details', 'document', 'review', 'status'];

export const customer = {
  fields: [
    { key: 'name', label: 'Full name', value: 'Manasa Rammohan' },
    { key: 'address', label: 'Home address', value: 'Weserstraße 42, 12045 Berlin' },
    { key: 'tax', label: 'Tax residency', value: 'Germany' },
    { key: 'job', label: 'Occupation', value: 'Product designer' },
    { key: 'funds', label: 'Source of money you invest', value: 'Salary' },
  ],
  holdings: [
    { name: 'MSCI World ETF', value: '€2,940.10' },
    { name: 'Global Clean Energy ETF', value: '€812.30' },
    { name: 'Cash', value: '€466.00' },
  ],
};

export const kpis = [
  { label: 'Active customers', value: '18,420', delta: '+3.1% vs last month' },
  { label: 'Re-KYC due in 30 days', value: '1,284', delta: '62% already reminded' },
  { label: 'Re-KYC completed on time', value: '69%', delta: '+15 pts vs old flow' },
  { label: 'Median time to complete', value: '2m 40s', delta: 'was 9m 10s' },
];

export type FunnelRow = { step: string; n: number };

export const lifecycle: FunnelRow[] = [
  { step: 'Signed up', n: 10000 },
  { step: 'Identity verified', n: 7400 },
  { step: 'Account funded', n: 5180 },
  { step: 'First trade', n: 4350 },
  { step: 'Savings plan set up', n: 2180 },
];

export const rekyc: FunnelRow[] = [
  { step: 'Reminded', n: 1000 },
  { step: 'Opened reminder', n: 860 },
  { step: 'Started', n: 790 },
  { step: 'Details confirmed', n: 760 },
  { step: 'Document uploaded', n: 720 },
  { step: 'Submitted', n: 710 },
  { step: 'Approved', n: 690 },
];

/** Re-KYCs falling due in each of the next eight weeks. */
export const dueByWeek = [210, 340, 402, 332, 180, 150, 226, 260];

export const stuck = [
  { from: 'Reminded', to: 'Opened reminder', reason: 'Email reminder not opened', fix: 'Add a push notification 3 days before the deadline' },
  { from: 'Opened reminder', to: 'Started', reason: 'Opened at a bad moment, never came back', fix: 'Keep the in-app banner until done; "Remind me tomorrow" option' },
  { from: 'Details confirmed', to: 'Document uploaded', reason: 'Blurry or cut-off ID photo', fix: 'On-device quality check before upload' },
  { from: 'Started', to: 'Details confirmed', reason: 'Unsure what "source of money" means', fix: 'Plain-language examples under the field' },
];

/** How many of the previous step made it to this one (1 for the first step). */
export const kept = (rows: FunnelRow[], i: number) => (i === 0 ? 1 : rows[i].n / rows[i - 1].n);

/** The step that keeps the smallest share of the one before it. */
export const worstStep = (rows: FunnelRow[]) => {
  let w = 1;
  for (let i = 2; i < rows.length; i++) if (kept(rows, i) < kept(rows, w)) w = i;
  return w;
};

/** The note beside the phone for each step. */
export const notes: Record<Step, { label: string; title: string; text: string[] }> = {
  home: {
    label: 'Step 0 · The reminder',
    title: 'A reminder, not a roadblock',
    text: [
      'The reminder lives on the home screen 18 days before the deadline. It says what is needed and how long it takes, in one sentence.',
      '"Remind me tomorrow" is a real option. Forcing the flow at the wrong moment is how people abandon it.',
    ],
  },
  details: {
    label: 'Step 1 · Details',
    title: 'Confirm, don’t re-type',
    text: [
      'Everything we already know is filled in, and every row starts as "Still correct". A customer with nothing to change taps Continue once.',
      '"Why we ask" explains the rule in plain words instead of hiding it in the terms.',
    ],
  },
  document: {
    label: 'Step 2 · Document',
    title: 'Only ask for what expired',
    text: ['Only the expired ID card is requested, not the whole onboarding pack again.', 'The photo is checked on the spot, so a blurry picture is caught now and not in a rejection email two days later.'],
  },
  review: {
    label: 'Step 3 · Review',
    title: 'One honest summary',
    text: ['The customer sees exactly what will change before sending it. One clear confirmation, no wall of legal text.', 'This is also the safeguard for the "Still correct" defaults: every field is shown once more.'],
  },
  status: {
    label: 'After submitting',
    title: 'No dead ends',
    text: ['The customer can keep investing while the check runs and knows how long it usually takes.', 'A clear status page answers "did it work?" before it becomes a support ticket.'],
  },
};

export const compare: { step: Step; what: string; old: string; now: string }[] = [
  { step: 'home', what: 'Reminder', old: 'An email with a deadline', now: 'A banner in the app, plus “Remind me tomorrow”' },
  { step: 'details', what: 'Details', old: 'Type every field again', now: 'Pre-filled, so you just tap “Still correct”' },
  { step: 'document', what: 'Document', old: 'Upload the full onboarding pack', now: 'Only the ID that expired, checked on the spot' },
  { step: 'review', what: 'Review', old: 'Pages of legal text', now: 'One summary of what changes' },
  { step: 'status', what: 'After sending', old: 'Trading paused until approved', now: 'Keep investing while it’s checked' },
];

export const stepNames: Record<Step, string> = { home: 'Reminder', details: 'Details', document: 'Document', review: 'Review', status: 'Status' };

export const links = {
  website: 'https://manasa061002-sys.github.io/',
  linkedin: 'https://www.linkedin.com/in/manasa-rammohan',
  email: 'mailto:Manasa.Rammohan@outlook.com',
};
