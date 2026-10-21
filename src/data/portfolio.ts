export const profile = {
  name: 'Manasa Rammohan',
  tagline:
    'A jack of all trades is a master of none, but oftentimes better than a master of one.',
  quote:
    "Life is not about finding yourself, it's about creating yourself — George Bernard Shaw",
  philosophy:
    "I have never met anybody who became incredibly successful in any area of their life until they have suffered and sweated and sacrificed and kept their focus and fought through tears and trails and tests and if you have a dream and you commit to it, it will come to pass. — T.D. Jakes",
  locationLine1: 'Kreuzberg',
  locationLine2: 'Berlin, Germany',
  email: 'Manasa.Rammohan@outlook.com',
  linkedin: 'https://www.linkedin.com/in/manasarammohan',
  bio: "Professionally, I like creating content that helps communicate with ease. My work blends strategy, design, and storytelling to deliver content that looks strong and performs well across digital platforms. Personally, I like being funny.",
  roles: [
    'Economics, Banking & Finance Graduate',
    'Private Equity Analyst',
    'Content & Presentation Designer',
  ],
};

export const stats = [
  {
    value: '1st',
    label: 'in Switzerland — Bloomberg Global Trading Challenge',
    sub: 'Top 50 worldwide out of 1,750+ teams (09/2023–12/2023)',
  },
  {
    value: '4',
    label: 'countries lived in',
    sub: 'India · Singapore · Switzerland · Germany',
  },
  {
    value: '8',
    label: 'languages',
    sub: 'English C1 · Hindi C1 · Tamil & Kannada C2 · German A2 · Japanese & Korean A2',
  },
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
      'Ran on-site feasibility due diligence on a **CHF 6.6mn** real estate deal, uncovering untapped development potential. Converted **4** leads from **50+** mapped family offices.',
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
      'Crafted investor presentations, seminar decks, and academic slide decks — blending data clarity with visual storytelling. Includes behavioral finance seminars and brand strategy pitches.',
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
      'Designed eye-catching A3 posters for university summits, events, and campaigns — combining bold typography with striking imagery to communicate messages at a glance.',
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
      'Designed large-format banners for events, conferences, and promotional campaigns — combining bold visuals with clear messaging for maximum impact at a distance.',
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
      'Produced brochures for events, organizations, and marketing campaigns — from concept to print-ready design with attention to layout, color, and brand consistency.',
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
      'Built CRM cold-outreach email sequences and marketing newsletters — rebuilding messaging frameworks that lifted response rates from 3% to ~15% for investor outreach.',
    aesthetic: 'CRM · Conversion-focused',
    image:
      'https://images.pexels.com/photos/7821760/pexels-photo-7821760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    images: [
      '/images/Email Marketing/Email_Marketing_YES_2023.png',
      '/images/Email Marketing/Email_Marketing_Asymmetrica.png',
      '/images/Email Marketing/Cold_Email_Marketing_akirolabs.png',
    ],
  },
  {
    id: 'digital-content',
    title: 'Digital Content Creation',
    context: 'Social & multimedia content',
    date: '2021 – 2025',
    description:
      'Created digital content across social platforms — from video editing and graphic design to multimedia storytelling that performs well across digital channels.',
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
};

export const productConcepts: ProductConcept[] = [
  {
    id: 'dash-dine-eco',
    title: 'Dash & Dine Eco',
    period: '03/2025 – 04/2025',
    summary:
      'An all-in-one grocery aggregator concept featuring dynamic end-of-day pricing to reduce food waste and a green sustainability meter, peer-validated with positive user feedback.',
    highlights: ['Dynamic end-of-day pricing', 'Green sustainability meter', 'Peer-validated concept'],
    image:
      'https://images.pexels.com/photos/6591159/pexels-photo-6591159.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'fintech-budget',
    title: 'FinTech Budget App Prototype',
    period: '12/2024 – 01/2025',
    summary:
      'An agile-built finance app prototype featuring a Spotify Wrapped-style personal budget summary, singled out as a standout concept by an industry consultant.',
    highlights: ['Spotify Wrapped-style summary', 'Agile-built prototype', 'Consultant-recognized standout'],
    image:
      'https://images.pexels.com/photos/9169178/pexels-photo-9169178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-pink-400 to-rose-500',
  },
  {
    id: 'blockchain-land-registry',
    title: 'Blockchain Land Registry Mock App',
    period: '09/2024 – 12/2024',
    summary:
      'A mock data-sharing application designed for property registries, banks, and brokers to modernize real estate records using DLT/blockchain, benchmarked against Sweden and Dubai.',
    highlights: ['DLT/blockchain-based', 'Benchmarks: Sweden & Dubai', 'Multi-party data sharing'],
    image:
      'https://images.pexels.com/photos/30547618/pexels-photo-30547618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-cyan-400 to-blue-500',
  },
];

export const skills = {
  core: [
    'Market & Competitive Research',
    'Presentation & Content Design',
    'Campaign & CRM Targeting',
    'Go-to-Market & Messaging Strategy',
    'Stakeholder Communication',
    'Prompt Engineering',
  ],
  tools: [
    'Microsoft 365',
    'Bloomberg Terminal',
    'Python',
    'PowerBI',
    'Canva',
    'Figma',
    'Lovable',
  ],
  ai: ['Claude', 'ChatGPT', 'Perplexity', 'Gemini', 'Kimi'],
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

export const cubeImages = [
  '/images/cherry-blossom.jpeg',
  '/images/lavender.jpeg',
  '/images/peacock.jpeg',
  '/images/fondue.jpeg',
  '/images/pancake.jpeg',
  '/images/catto.jpeg',
  '/images/lucy-with-teddy.jpeg',
  '/images/beach.jpeg',
  '/images/monaco.jpeg',
];
