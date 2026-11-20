/**
 * Where each skill shows up on the page. Hovering or tapping a skill in the
 * Skills section sends the bees to every spot listed here.
 *
 * `target` is the value of a `data-evidence` attribute somewhere on the page:
 *   exp-<company>-<n>   bullet n (from 0) of a job: asymmetrica, ki, axis, avere
 *   research-<id>       a research paper tile (ids from portfolio.ts)
 *   product-<id>        a product device button (ids from portfolio.ts)
 *   creative-<id>       an item on the creative desk (ids from portfolio.ts)
 *   stat-bloomberg      the Bloomberg trading challenge stat in About
 * `label` is what the "Seen in" list shows.
 *
 * Mappings marked TODO(Manasa) are my best guess from the text on the site:
 * please confirm or remove them. Skills with no entry show "nothing linked yet".
 */
export type Evidence = { target: string; label: string };

export const skillEvidence: Record<string, Evidence[]> = {
  'Go-to-Market & Messaging Strategy': [
    { target: 'exp-asymmetrica-0', label: 'Asymmetrica: rebuilt CRM messaging (3% to ~15%)' },
    { target: 'exp-avere-0', label: 'Avere Advisors: youth-first positioning strategy' },
  ],
  'Campaign & CRM Targeting': [
    { target: 'exp-asymmetrica-0', label: 'Asymmetrica: targeted 100+ HNW stakeholders' },
    { target: 'exp-asymmetrica-3', label: 'Asymmetrica: 4 leads from 50+ family offices' },
    // TODO(Manasa): confirm the UAE database was used for targeting.
    { target: 'exp-avere-1', label: 'Avere Advisors: 500-firm UAE database' },
  ],
  'Market & Competitive Research': [
    { target: 'exp-avere-0', label: 'Avere Advisors: two-country feasibility study' },
    { target: 'exp-avere-1', label: 'Avere Advisors: 500-firm UAE database' },
    { target: 'product-blockchain-land-registry', label: 'Blockchain Land Registry: Sweden & Dubai benchmarks' },
    // TODO(Manasa): confirm the due diligence counts as market research.
    { target: 'exp-asymmetrica-2', label: 'Asymmetrica: on-site feasibility due diligence' },
  ],
  'Presentation & Content Design': [
    { target: 'exp-asymmetrica-1', label: 'Asymmetrica: 5 investor presentations' },
    { target: 'creative-presentation-decks', label: 'Creative desk: decks' },
    { target: 'creative-digital-content', label: 'Creative desk: copy bank' },
    { target: 'product-blockchain-land-registry', label: 'Blockchain Land Registry: presentation' },
  ],
  'Stakeholder Communication': [
    { target: 'exp-asymmetrica-3', label: 'Asymmetrica: converting family-office leads' },
    // TODO(Manasa): confirm.
    { target: 'exp-axis-1', label: 'Axis Bank: guiding 200+ customers through KYC' },
  ],
  'Prompt Engineering': [
    // TODO(Manasa): which work used prompt engineering? Nothing on the page says so yet.
  ],
  'User Research & Customer Discovery': [
    { target: 'product-dash-dine-eco', label: 'Dash & Dine Eco: peer-validated with user feedback' },
  ],
  'Feature Prioritisation & Roadmapping': [
    { target: 'product-kayysee', label: 'KayYSee: product spec with decisions, trade-offs and next tests' },
  ],
  'Prototyping & User Flows': [
    { target: 'product-kayysee', label: 'KayYSee: clickable re-KYC flow' },
    { target: 'product-dash-dine-eco', label: 'Dash & Dine Eco: prototype' },
    { target: 'product-fintech-budget', label: 'Fresh Farm Market: app concept' },
  ],
  'Product Metrics & Funnel Analysis': [
    { target: 'product-kayysee', label: 'KayYSee: lifecycle funnel dashboard' },
    // TODO(Manasa): confirm (diagnosing the 3% baseline).
    { target: 'exp-asymmetrica-0', label: 'Asymmetrica: diagnosed the 3% response baseline' },
  ],
  'Agile & Scrum Delivery': [
    // TODO(Manasa): which work used Agile/Scrum?
  ],
  'Microsoft 365': [{ target: 'exp-ki-0', label: 'Ki Mobility: 1,000+ daily entries in Excel' }],
  'Bloomberg Terminal': [{ target: 'stat-bloomberg', label: 'Bloomberg Global Trading Challenge' }],
  // TODO(Manasa): add Python, PowerBI, Canva, Figma, Marvel, Lovable and the AI tools
  // where they were used (e.g. which desk items were made in Canva or Figma).
  Negotiation: [
    // TODO(Manasa): confirm.
    { target: 'exp-asymmetrica-3', label: 'Asymmetrica: converting family-office leads' },
  ],
};
