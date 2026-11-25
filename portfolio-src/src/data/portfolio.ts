export const profile = {
  name: 'Manasa Rammohan',
  // the About heading
  positioning: 'Always aspiring to be the best',
  tagline:
    'A jack of all trades is a master of none, but oftentimes better than a master of one.',
  quote:
    "Life is not about finding yourself, it's about creating yourself. (George Bernard Shaw)",
  philosophy:
    "I have never met anybody who became incredibly successful in any area of their life until they have suffered and sweated and sacrificed and kept their focus and fought through tears and trails and tests and if you have a dream and you commit to it, it will come to pass. (T.D. Jakes)",
  locationLine1: 'Kreuzberg',
  locationLine2: 'Berlin, Germany',
  email: 'Manasa.Rammohan@outlook.com',
  linkedin: 'https://www.linkedin.com/in/manasa-rammohan/',
  bio: "Professionally, I like creating content that helps communicate with ease. My work blends strategy, design, and storytelling to deliver content that looks strong and performs well across digital platforms.\nPersonally, I like being funny.",
  roles: [
    'Economics, Banking & Finance Graduate',
    'Private Equity Analyst',
    'Content & Presentation Designer',
  ],
};

export const stats = [
  {
    value: '1st',
    label: 'in Switzerland, Bloomberg Global Trading Challenge',
    sub: 'Top 50 worldwide out of 1,750+ teams (09/2023–12/2023)',
  },
  {
    value: '4',
    label: 'countries lived in',
    sub: 'India · Singapore · Switzerland · Germany',
  },
  {
    value: '7',
    label: 'languages',
    sub: 'English C1 · Hindi C1 · Tamil & Kannada C2 · German A2 · Japanese & Korean A2',
  },
];

export const countries = ['India', 'Singapore', 'Switzerland', 'Germany'];

export const greetings = [
  { word: 'Hello', lang: 'English' },
  { word: 'नमस्ते', lang: 'Hindi' },
  { word: 'வணக்கம்', lang: 'Tamil' },
  { word: 'ನಮಸ್ಕಾರ', lang: 'Kannada' },
  { word: 'Hallo', lang: 'German' },
  { word: 'こんにちは', lang: 'Japanese' },
  { word: '안녕하세요', lang: 'Korean' },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: 'Private Equity Analyst Intern',
    company: 'Asymmetrica Investments AG',
    location: 'Zug, Switzerland',
    period: '09/2024 – 01/2025',
    tags: ['PE', 'CRM', 'Due Diligence', 'Investor Decks'],
    points: [
      'Diagnosed a **3%** cold-outreach baseline across **200+** VC contacts, rebuilt CRM messaging and targeted **100+** HNW stakeholders, reaching **~15%** response rate within **2 weeks**.',
      'Rebuilt **5** investor presentations from scratch tailored to investor theses (including AVO Oro Verde avocado-orchard investment vehicle in Mexico) and wrote financial product one-pagers.',
      'Ran on-site feasibility due diligence on a **CHF 6.6mn** real estate deal, uncovering untapped development potential.',
      'Converted **4** leads from **50+** mapped family offices.',
    ],
  },
  {
    role: 'Summer Intern, Business Finance',
    company: 'Ki Mobility Solutions, TVS Group',
    location: 'Chennai, India',
    period: '06/2024 – 08/2024',
    tags: ['Finance Ops', 'Excel', 'Invoicing'],
    points: [
      'Processed **1,000+** daily financial entries in Excel for a team managing **$1.4M** in monthly turnover.',
      'Handled **50+** invoices and credit/debit notes daily with full reconciliation.',
    ],
  },
  {
    role: 'Summer Intern, Branch Banking Operations',
    company: 'Axis Bank Ltd.',
    location: 'Chennai, India',
    period: '06/2022 – 07/2022',
    tags: ['Research', 'RBI Policy', 'KYC'],
    points: [
      'Authored **3** internal research reports on RBI policy moves (repo rates, inflation).',
      'Guided **200+** customers through KYC verification workflows.',
    ],
  },
  {
    role: 'Market Researcher',
    company: 'Avere Advisors',
    location: 'Dubai, UAE',
    period: '06/2021 – 11/2021',
    tags: ['Market Research', 'Positioning', 'Databases'],
    points: [
      'Identified a youth-first nostalgia positioning strategy in a **20-page** two-country feasibility study.',
      'Built a **500-firm** UAE database for outbound business development.',
    ],
  },
];

export type ResearchPaper = {
  id: string;
  title: string;
  type: string;
  period: string;
  summary: string;
  methods: string[];
  scope: string;
  /** One-line key finding, shown under the "Key finding" stamp. Empty = not shown. */
  keyFinding: string;
};

export const research: ResearchPaper[] = [
  {
    id: 'masters-thesis',
    title: 'Digital Transactions & Financial Inclusion',
    type: "Master's Thesis",
    period: '12/2025 – 05/2026',
    summary:
      'A comparative 8-country study examining how digital transaction infrastructure expands (or limits) financial inclusion across emerging and developed markets.',
    methods: ['4 theoretical frameworks', '41 analytical codes', 'Cross-country comparison'],
    scope: '8 countries · Mixed methods',
    // TODO(Manasa): the paper's key finding in one sentence.
    keyFinding: '',
  },
  {
    id: 'swiss-banks',
    title: 'Digitalization in Swiss Banks and FinTechs',
    type: 'Co-Authored Research Paper',
    period: '09/2024 – 01/2025',
    summary:
      'Assessed the impact of AI and mobile banking on customer satisfaction across Swiss financial institutions using correlation and rank-order statistical tests.',
    methods: ['Pearson correlation', 'Spearman rank', 'Kendall Tau'],
    scope: 'Swiss banks & FinTechs',
    // TODO(Manasa): the paper's key finding in one sentence.
    keyFinding: '',
  },
  {
    id: 'uk-challenger',
    title: 'UK Challenger Banks',
    type: 'Co-Authored Research Paper',
    period: '10/2023 – 01/2024',
    summary:
      'Examined how Open Banking and API infrastructure are disrupting legacy banking models in the United Kingdom, with a focus on challenger bank competitiveness.',
    methods: ['Open Banking analysis', 'API infrastructure mapping', 'Case studies'],
    scope: 'UK banking sector',
    // TODO(Manasa): the paper's key finding in one sentence.
    keyFinding: '',
  },
  {
    id: 'bitcoin-fiat',
    title: 'Bitcoin as a Viable Alternative to Fiat Money',
    type: "Bachelor's Thesis",
    period: '11/2022 – 03/2023',
    summary:
      "Synthesized 40+ research papers on Bitcoin viability as fiat alternative and proposed a regulatory framework anchored on India's e-RUPI digital currency infrastructure.",
    methods: ['Literature synthesis (40+ papers)', 'Regulatory framework design', 'e-RUPI integration'],
    scope: 'Regulatory proposal · India focus',
    // TODO(Manasa): the paper's key finding in one sentence.
    keyFinding: '',
  },
];

export type CreativeProject = {
  id: string;
  title: string;
  context: string;
  date: string;
  description: string;
  aesthetic: string;
  image: string;
  images: string[];
};

export const creativeProjects: CreativeProject[] = [
  {
    id: 'presentation-decks',
    title: 'Presentation Decks',
    context: 'Investor & academic decks',
    date: '2023 – 2024',
    description:
      'Crafted investor presentations, seminar decks, and academic slide decks, blending data clarity with visual storytelling. Includes behavioral finance seminars and brand strategy pitches.',
    aesthetic: 'Data storytelling',
    image:
      'https://images.pexels.com/photos/9034728/pexels-photo-9034728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      '/images/Presentation deck/Copy_of_House_Money_Effect_Presentation_1.png',
      '/images/Presentation deck/Copy_of_House_Money_Effect_Presentation_2.png',
      '/images/Presentation deck/Copy_of_House_Money_Effect_Presentation_3.png',
      '/images/Presentation deck/Copy_of_House_Money_Effect_Presentation_4.png',
      '/images/Presentation deck/Brand_Pitch_Presentation_1.png',
      '/images/Presentation deck/Brand_Pitch_Presentation_2.png',
      '/images/Presentation deck/Brand_Pitch_Presentation_3.png',
      '/images/Presentation deck/Brand_Pitch_Presentation_4.png',
    ],
  },
  {
    id: 'posters',
    title: 'Posters',
    context: 'Event & campaign posters',
    date: '2023',
    description:
      'Designed eye-catching A3 posters for university summits, events, and campaigns, combining bold typography with striking imagery to communicate messages at a glance.',
    aesthetic: 'Bold · Typographic',
    image:
      'https://images.pexels.com/photos/29501720/pexels-photo-29501720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      '/images/Posters/Circular_Economy_of_Waste_Management_YES_2023.png',
      '/images/Posters/Circular_Economy_of_Waste_Management_YES_Post_2023.png',
      '/images/Posters/City_Planning_YES_2023.png',
      '/images/Posters/City_Planning_YES_Post_2023.png',
      '/images/Posters/Decarbonising_the_primary_sector_YES_2023.png',
      '/images/Posters/Decarbonising_the_primary_sector_YES_Post_2023.png',
      '/images/Posters/Disaster_Relief_and_Response_Poster_YES_2023.png',
      '/images/Posters/Disaster_Relief_and_Response_Poster_YES_Post_2023.png',
      '/images/Posters/Fashionomics_of_Climate_Change_YES_2023.png',
      '/images/Posters/Fashionomics_of_Climate_Change_YES_Post_2023.png',
      '/images/Posters/International_Cooperation_YES_2023.png',
      '/images/Posters/International_Cooperation_YES_Post_2023.png',
      '/images/Posters/Planned_Reinforment_for_Climate_YES_2023.png',
      '/images/Posters/Planned_Reinforment_for_Climate_YES_Post_2023.png',
      '/images/Posters/Sustainable_Energy_YES_2023.png',
      '/images/Posters/Sustainable_Energy_YES_Post_2023.png',
      '/images/Posters/The_4th_Pillar_YES_2023.png',
      '/images/Posters/The_4th_Pillar_YES_Post_2023.png',
      '/images/Posters/Trade_and_Sustainable_Development_YES_2023.png',
      '/images/Posters/Trade_and_Sustainable_Development_YES_Post_2023.png',
      '/images/Posters/Asymmetrica_Poster_1.png',
      '/images/Posters/Asymmetrica_Poster_2.png',
      '/images/Posters/Asymmetrica_Poster_3.png',
      '/images/Posters/akirolabs_interview_poster_1.png',
      '/images/Posters/akirolabs_interview_poster_2.png',
      '/images/Posters/akirolabs_interview_poster_3.png',
    ],
  },
  {
    id: 'banners',
    title: 'Banners',
    context: 'Event & promotional banners',
    date: '2023',
    description:
      'Designed large-format banners for events, conferences, and promotional campaigns, combining bold visuals with clear messaging for maximum impact at a distance.',
    aesthetic: 'Bold · Large-format',
    image:
      'https://images.pexels.com/photos/34659828/pexels-photo-34659828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      '/images/Banners/Bright_Banner_YES_2023.png',
      '/images/Banners/Green_Banner_YES_2023.png',
      '/images/Banners/Vertical_Banner_YES_2023.png',
    ],
  },
  {
    id: 'brochures',
    title: 'Brochures',
    context: 'Print & informational collateral',
    date: '2023 – 2025',
    description:
      'Produced brochures for events, organizations, and marketing campaigns, from concept to print-ready design with attention to layout, color, and brand consistency.',
    aesthetic: 'Print · Brand-consistent',
    image:
      'https://images.pexels.com/photos/7648516/pexels-photo-7648516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      '/images/Brochure/YES_2023_Brochure_Side_1.png',
      '/images/Brochure/YES_2023_Brochure_Side_2.png',
      '/images/Brochure/Asymmetrica_Brochure_Side_1.png',
      '/images/Brochure/Asymmetrica_Brochure_Side_2.png',
    ],
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    context: 'CRM & outreach campaigns',
    date: '2023 – 2025',
    description:
      'Built CRM cold-outreach email sequences and marketing newsletters.',
    aesthetic: 'CRM · Conversion-focused',
    image:
      'https://images.pexels.com/photos/7821760/pexels-photo-7821760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      '/images/Email Marketing/Email_Marketing_YES_2023.png',
      '/images/Email Marketing/Email_Marketing_Asymmetrica.png',
      '/images/Email Marketing/Cold_Email_Marketing.png',
    ],
  },
  {
    id: 'digital-content',
    title: 'Digital Content Creation',
    context: 'Social & multimedia content',
    date: '2021 – 2025',
    description:
      'Created digital content across social platforms: from video editing and graphic design to multimedia storytelling that performs well across digital channels.',
    aesthetic: 'Multimedia · Social-first',
    image:
      'https://images.pexels.com/photos/39694504/pexels-photo-39694504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      'https://images.pexels.com/photos/39694504/pexels-photo-39694504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
];

export type ProductConcept = {
  id: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  image: string;
  accent: string;
  link?: string;
  linkLabel?: string;
  note?: string;
  /** A before/after number from the summary, drawn as a small chart in the details. */
  metric?: {
    title: string;
    from: { value: number; label: string; at: string };
    to: { value: number; label: string; at: string };
    max: number;
    better: 'up' | 'down';
    summary: string;
  };
  /** What the card shows: a browser window, a phone, or a scrolling PDF. */
  screen: { kind: 'browser' | 'phone' | 'pdf'; src: string; label: string };
};

export const productConcepts: ProductConcept[] = [
  {
    "id": "vantage",
    "screen": { "kind": "browser", "src": "/images/screens/vantage.jpg", "label": "manasa061002-sys.github.io/vantage" },
    "title": "Vantage",
    "period": "11/2026",
    "summary": "Two prototypes about the moment a depot changes hands. Between banks: Where’s my trade? It tells clients where their shares are, in the app and on the website. Between generations: Handover at 18, a child’s pension depot that becomes theirs at 18.",
    "highlights": [
      "Where’s my trade? Three situations, an ops view and a settlement explainer",
      "Handover at 18: the same depot, explained differently from age 6 to 18",
      "Connected: moving the depot at 18 opens the tracker"
    ],
    "image": "/images/screens/vantage.jpg",
    "accent": "from-blue-500 to-red-500",
    "link": "/vantage/"
  },
  {
    "id": "kayysee",
    "screen": { "kind": "browser", "src": "/images/screens/kayysee.jpg", "label": "manasa061002-sys.github.io/kayysee" },
    "title": "KayYSee: Re-KYC & Customer Lifecycle Concept",
    "period": "11/2026",
    "summary": "A product concept for a white-label investing app: a re-KYC flow that takes about two minutes instead of nine, plus the lifecycle dashboard a partner app would use to see where customers drop off and what to fix next.",
    "highlights": [
      "Clickable re-KYC flow with design notes for each step",
      "Partner dashboard: lifecycle funnel, re-KYC volume, ideas to test",
      "Product spec: decisions, trade-offs, metrics and next tests"
    ],
    "image": "/images/kayysee.svg",
    "metric": {
      "title": "Re-KYC time",
      "from": { "value": 9, "label": "9 min", "at": "Before" },
      "to": { "value": 2, "label": "~2 min", "at": "With KayYSee" },
      "max": 10,
      "better": "down",
      "summary": "Re-KYC takes about two minutes instead of nine."
    },
    "accent": "from-yellow-400 to-orange-400",
    "link": "/kayysee/"
  },
  {
    "id": "dash-dine-eco",
    "screen": { "kind": "browser", "src": "/images/screens/dash-and-dine.jpg", "label": "manasa061002-sys.github.io/dash-and-dine" },
    "title": "Dash & Dine Eco",
    "period": "03/2025 – 04/2025",
    "summary": "An all-in-one grocery aggregator concept featuring dynamic end-of-day pricing to reduce food waste and a green sustainability meter, peer-validated with positive user feedback.",
    "highlights": [
      "Dynamic end-of-day pricing",
      "Green sustainability meter",
      "Peer-validated concept"
    ],
    "image": "https://images.pexels.com/photos/6591159/pexels-photo-6591159.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "accent": "from-emerald-400 to-teal-500",
    "link": "/dash-and-dine/"
  },
  {
    "id": "fintech-budget",
    "screen": { "kind": "phone", "src": "/images/screens/fresh-farm-market.jpg", "label": "Fresh Farm Market" },
    "title": "Fresh Farm Market",
    "period": "12/2024 – 01/2025",
    "summary": "A team concept app that connects Swiss shoppers with the farm stores around them: surplus deals, CO₂ scores, points to donate to local projects or take as cashback, and a Spotify Wrapped-style budget summary that an industry consultant singled out as a standout concept.",
    "highlights": [
      "Shopper and farm-store sides of the app",
      "Points for local projects or cashback",
      "Wrapped-style budget year, singled out by an industry consultant"
    ],
    "image": "https://images.pexels.com/photos/9169178/pexels-photo-9169178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "accent": "from-pink-400 to-rose-500",
    "link": "/fresh-farm-market/"
  },
  {
    "id": "blockchain-land-registry",
    "screen": { "kind": "pdf", "src": "/images/screens/blockchain-land-registry.jpg", "label": "blockchain-land-registry.pdf" },
    "title": "Blockchain Land Registry",
    "period": "09/2024 – 12/2024",
    "summary": "A data-sharing concept designed for property registries, banks, and brokers to modernize real estate records using DLT/blockchain, benchmarked against Sweden and Dubai.",
    "highlights": [
      "DLT/blockchain-based",
      "Benchmarks: Sweden & Dubai",
      "Multi-party data sharing"
    ],
    "image": "https://images.pexels.com/photos/30547618/pexels-photo-30547618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "accent": "from-cyan-400 to-blue-500",
    "note": "Written concept only: this idea was developed as a presentation and was not built as a working prototype.",
    "link": "/docs/blockchain-land-registry.pdf",
    "linkLabel": "View presentation (PDF) →"
  }
];

export const skills = {
  // Core competencies, grouped by the role they serve.
  growth: [
    'Go-to-Market & Messaging Strategy',
    'Campaign & CRM Targeting',
    'Market & Competitive Research',
    'Presentation & Content Design',
    'Stakeholder Communication',
    'Prompt Engineering',
  ],
  product: [
    'User Research & Customer Discovery',
    'Feature Prioritisation & Roadmapping',
    'Prototyping & User Flows',
    'Product Metrics',
  ],
  tools: [
    'Microsoft 365',
    'Bloomberg Terminal',
    'Python',
    'PowerBI',
    'Canva',
    'Figma',
    'Marvel',
    'Lovable',
  ],
  ai: ['Claude', 'ChatGPT', 'Perplexity', 'Gemini', 'Kimi', 'Agentic AI'],
  soft: ['Negotiation', 'Discipline', 'EQ', 'Problem Solving', 'Curiosity', 'Positivity', 'Ethics'],
  certifications: [
    'AI Product Manager (Microsoft)',
    'Claude AI for Finance',
    'Graphic Design & Visualisation (Domestika)',
    'Introduction to ESG (CFI)',
  ],
};

export type GalleryItem = {
  src: string;
  title: string;
  category: 'Travel' | 'Food' | 'Cats' | 'Personal';
  caption: string;
};

export const gallery: GalleryItem[] = [
  {
    src: '/images/beach.jpeg',
    title: 'Seaside',
    category: 'Travel',
    caption: 'Sun and sand by the coast.',
  },
  {
    src: '/images/budapest.jpeg',
    title: 'Budapest',
    category: 'Travel',
    caption: 'Architecture along the Danube.',
  },
  {
    src: '/images/cherry-blossom.jpeg',
    title: 'Cherry Blossom',
    category: 'Travel',
    caption: 'Spring blooms in full display.',
  },
  {
    src: '/images/church.jpeg',
    title: 'Cathedral',
    category: 'Travel',
    caption: 'Light through stained glass.',
  },
  {
    src: '/images/dandelions.jpeg',
    title: 'Dandelions',
    category: 'Travel',
    caption: 'A field of golden flowers.',
  },
  {
    src: '/images/ferris-wheel.jpeg',
    title: 'Ferris Wheel',
    category: 'Travel',
    caption: 'City lights from above.',
  },
  {
    src: '/images/frankfurt.jpeg',
    title: 'Frankfurt',
    category: 'Travel',
    caption: 'Skyline at golden hour.',
  },
  {
    src: '/images/hiking.jpeg',
    title: 'Hiking Trail',
    category: 'Travel',
    caption: 'Views from the trail.',
  },
  {
    src: '/images/lavender.jpeg',
    title: 'Lavender Fields',
    category: 'Travel',
    caption: 'Rows of purple as far as the eye sees.',
  },
  {
    src: '/images/monaco.jpeg',
    title: 'Monaco',
    category: 'Travel',
    caption: 'Harbor views on the Riviera.',
  },
  {
    src: '/images/mountain.jpeg',
    title: 'Mountains',
    category: 'Travel',
    caption: 'Peaks above the clouds.',
  },
  {
    src: '/images/museum-road-signs.jpeg',
    title: 'Museum Road Signs',
    category: 'Travel',
    caption: 'Signs pointing every which way.',
  },
  {
    src: '/images/museum.jpeg',
    title: 'Museum',
    category: 'Travel',
    caption: 'Art and architecture indoors.',
  },
  {
    src: '/images/peacock.jpeg',
    title: 'Peacock',
    category: 'Travel',
    caption: 'A peacock displaying its colors.',
  },
  {
    src: '/images/fondue.jpeg',
    title: 'Fondue',
    category: 'Food',
    caption: 'Swiss melted cheese at its finest.',
  },
  {
    src: '/images/pancake.jpeg',
    title: 'Pancakes',
    category: 'Food',
    caption: 'A stack worth waking up for.',
  },
  {
    src: '/images/catto.jpeg',
    title: 'Catto',
    category: 'Cats',
    caption: 'A cat with attitude.',
  },
  {
    src: '/images/lucy-with-teddy.jpeg',
    title: 'Lucy & Teddy',
    category: 'Cats',
    caption: 'Lucy with her favorite teddy.',
  },
  {
    src: '/images/lucy-yawning.jpeg',
    title: 'Lucy Yawning',
    category: 'Cats',
    caption: 'A big stretch from Lucy.',
  },
  {
    src: '/images/manse_cruiseburg.jpeg',
    title: 'Cruiseburg',
    category: 'Personal',
    caption: 'Out and about in Cruiseburg.',
  },
  {
    src: '/images/manse-in-eze.jpeg',
    title: 'Èze',
    category: 'Personal',
    caption: 'Exploring the village of Èze.',
  },
  {
    src: '/images/manse-in-korea.jpeg',
    title: 'Korea',
    category: 'Personal',
    caption: 'A moment in Korea.',
  },
];

/** Photo puzzle for Life & Interests: four groups of four. */
export type PhotoGroup = { id: string; title: string; hint: string; color: string; photos: string[] };

export const photoGroups: PhotoGroup[] = [
  {
    id: 'animals',
    title: 'Furry & feathered',
    hint: 'Catto, Lucy (twice) and a very proud peacock.',
    color: 'pink',
    photos: ['/images/catto.jpeg', '/images/lucy-with-teddy.jpeg', '/images/lucy-yawning.jpeg', '/images/peacock.jpeg'],
  },
  {
    id: 'look-up',
    title: 'Look up!',
    hint: 'All four were taken pointing the camera upwards.',
    color: 'amber',
    photos: ['/images/church.jpeg', '/images/monaco.jpeg', '/images/museum.jpeg', '/images/museum-road-signs.jpeg'],
  },
  {
    id: 'nature',
    title: 'Out in nature',
    hint: 'Blossoms, dandelions, wisteria and a mountain valley.',
    color: 'emerald',
    photos: ['/images/cherry-blossom.jpeg', '/images/dandelions.jpeg', '/images/lavender.jpeg', '/images/mountain.jpeg'],
  },
  {
    id: 'water',
    title: 'Water views',
    hint: 'Sea, lake and coastline, twice with me in them.',
    color: 'cyan',
    photos: ['/images/beach.jpeg', '/images/hiking.jpeg', '/images/manse_cruiseburg.jpeg', '/images/manse-in-eze.jpeg'],
  },
];

// Small square thumbnails (160 px) used as photo stickers on the Rubik's cube.
export const cubeImages = [
  '/images/cube/cherry-blossom.jpg',
  '/images/cube/lavender.jpg',
  '/images/cube/peacock.jpg',
  '/images/cube/fondue.jpg',
  '/images/cube/pancake.jpg',
  '/images/cube/catto.jpg',
  '/images/cube/lucy-with-teddy.jpg',
  '/images/cube/beach.jpg',
  '/images/cube/monaco.jpg',
];
