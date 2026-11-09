export interface SoftwareProject {
  id: string;
  name: string;
  tagline: string;
  category: "Enterprise AI & Revenue" | "FinTech & Risk Intelligence" | "Cybersecurity & Post-Quantum" | "Healthcare & Clinical AI" | "Global Media & Developer Tools";
  description: string;
  liveUrl?: string;
  repoUrl: string;
  techStack: string[];
  badge?: string;
}

export interface PublishedBook {
  id: string;
  title: string;
  subtitle: string;
  genre: "AI, Defense & Intelligence" | "Finance & Risk" | "Music & Romance Fiction" | "Thriller & Literary Fiction";
  description: string;
  amazonUrl: string;
  highlight?: string;
}

export const AUTHOR_LINKS = {
  github: "https://github.com/bhuvanjakkula",
  amazon: "https://www.amazon.com/stores/Bhuvan-Jakkula/author/B0HD9ZJVWT",
  blog: "https://bhuvanjakkulabooks.blogspot.com",
  spotifyApollos: "https://open.spotify.com/artist/5RjIU1skmvuGIRpDE6h8Vb",
  spotifyBhuvanaai: "https://open.spotify.com/artist/6FAynluV2cSNgytAi6TZhW",
};

export const SOFTWARE_PROJECTS: SoftwareProject[] = [
  {
    id: "revnexus",
    name: "RevNexus AI",
    tagline: "Autonomous Real-Time Revenue Operating Engine",
    category: "Enterprise AI & Revenue",
    description:
      "Built to Google and Datadog engineering standards. Eliminates 70% inbound lead drop-off with a sub-5-minute autonomous SLA clock, optimizes a 5-stage closed-loop revenue chain, and defends profit margins with automated pricing guardrails.",
    liveUrl: "https://rev-nexus-pi.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/RevNexus",
    techStack: ["Autonomous AI", "Revenue Ops", "Real-Time SLA", "Pricing Guardrails"],
    badge: "Flagship Enterprise AI",
  },
  {
    id: "contract-to-cash-rescue",
    name: "Contract-to-Cash (C2C) Rescue Engine",
    tagline: "Automated AR Dispute Diagnosis & Post-Quantum Security",
    category: "Enterprise AI & Revenue",
    description:
      "Diagnoses accounts receivable disputes automatically with spatial document citations, forensic invoice-to-contract reconciliation, and Post-Quantum Cryptography (PQC) protection.",
    repoUrl: "https://github.com/bhuvanjakkula/contract-to-cash-rescue",
    techStack: ["Spatial Citations", "Post-Quantum Crypto", "AR Automation", "Python/FastAPI"],
    badge: "PQC Secured",
  },
  {
    id: "cura-health-os",
    name: "CuraHealth OS",
    tagline: "Enterprise Healthcare Practice, Prior Auth & Clinical Intelligence",
    category: "Healthcare & Clinical AI",
    description:
      "End-to-end clinical intelligence operating system streamlining prior authorizations, patient workflows, and healthcare practice management.",
    liveUrl: "https://cura-health-os.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/cura-health-os",
    techStack: ["TypeScript", "Clinical AI", "Prior Auth", "Healthcare OS"],
    badge: "Live Platform",
  },
  {
    id: "medrecover-ai",
    name: "MedRecover AI",
    tagline: "Intelligent Clinical Revenue Cycle & Insurance Denial Recovery",
    category: "Healthcare & Clinical AI",
    description:
      "Automated healthcare revenue cycle management and AI-driven insurance claim denial analysis and recovery engine.",
    liveUrl: "https://ai-insurance-denial-recovery.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/ai-insurance-denial-recovery",
    techStack: ["Python", "Healthcare RCM", "Claim Recovery", "AI Appeals"],
  },
  {
    id: "claimos",
    name: "ClaimOS",
    tagline: "Next-Gen Claims Processing & Adjudication Platform",
    category: "Healthcare & Clinical AI",
    description:
      "High-velocity claims intelligence and automated adjudication workspace for modern insurers and enterprise healthcare providers.",
    liveUrl: "https://claimos-eight.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/claimos",
    techStack: ["Claims AI", "Adjudication", "Workflow Automation"],
  },
  {
    id: "ai-finance-os",
    name: "AI Finance OS",
    tagline: "Autonomous Financial Analysis & Treasury Operating System",
    category: "FinTech & Risk Intelligence",
    description:
      "Next-generation AI financial operating system for institutional modeling, automated forecasting, and real-time capital allocation.",
    liveUrl: "https://ai-finance-os-drab.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/AI-Finance-OS",
    techStack: ["Python", "FinTech AI", "Financial Modeling", "Treasury OS"],
    badge: "FinTech OS",
  },
  {
    id: "atlaspay",
    name: "AtlasPay",
    tagline: "Global Cross-Border Payment & Settlement Infrastructure",
    category: "FinTech & Risk Intelligence",
    description:
      "Frictionless global payment routing, multi-currency treasury settlement, and borderless commerce infrastructure.",
    liveUrl: "https://atlas-pay-flax.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/AtlasPay",
    techStack: ["Global Payments", "Multi-Currency", "FinTech"],
  },
  {
    id: "ledger-trace",
    name: "LedgerTrace",
    tagline: "Forensic General Ledger Auditing & Precision Tracing",
    category: "FinTech & Risk Intelligence",
    description:
      "Trace your general ledger with cryptographic precision. Detects anomalies, reconciles multi-entity books, and provides audit-grade lineage.",
    liveUrl: "https://ledger-trace-silk.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/ledger-trace",
    techStack: ["Python", "Forensic Accounting", "Audit Lineage"],
  },
  {
    id: "riskpulse",
    name: "RiskPulse",
    tagline: "Institutional Portfolio Management & Paper Trading Engine",
    category: "FinTech & Risk Intelligence",
    description:
      "Real-time portfolio risk telemetry, quantitative stress testing, and paper trading simulation environment.",
    liveUrl: "https://riskpulse-sigma.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/Riskpulse",
    techStack: ["Python", "Quant Risk", "Portfolio Analytics"],
  },
  {
    id: "scientific-stock-operator",
    name: "The Scientific Stock Operator",
    tagline: "Quantitative Trading & Market Psychology Risk Platform",
    category: "FinTech & Risk Intelligence",
    description:
      "Companion software platform to Dr. Bhuvan Jakkula's book 'When the Screen Turns Against You', combining quantitative risk discipline with behavioral market telemetry.",
    repoUrl: "https://github.com/bhuvanjakkula/scientific-stock-operator",
    techStack: ["Python", "Algorithmic Risk", "Market Telemetry"],
  },
  {
    id: "systemic-risk-platform",
    name: "Systemic Risk Platform",
    tagline: "Macro-Financial Contagion & Network Risk Monitor",
    category: "FinTech & Risk Intelligence",
    description:
      "Models interconnected liquidity, institutional exposure, and macro-financial systemic risk cascades in real time.",
    liveUrl: "https://systemic-risk-platform-pi.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/systemic-risk-platform",
    techStack: ["Macro Risk", "Network Contagion", "Financial Stability"],
  },
  {
    id: "borderbooks",
    name: "BorderBooks",
    tagline: "Multi-Jurisdiction Cross-Border Accounting & Tax Compliance",
    category: "FinTech & Risk Intelligence",
    description:
      "Automated cross-border bookkeeping, FX reconciliation, and international regulatory compliance for global enterprises.",
    liveUrl: "https://borderbooks.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/borderbooks",
    techStack: ["TypeScript", "Cross-Border Tax", "Global Accounting"],
  },
  {
    id: "global-transfer-search",
    name: "Global Transfer Search",
    tagline: "Real-Time International Money Transfer Comparison Engine",
    category: "FinTech & Risk Intelligence",
    description:
      "Compares real-time FX spreads, remittance fees, and settlement speeds across global money transfer corridors.",
    liveUrl: "https://global-transfer-search.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/global-transfer-search",
    techStack: ["JavaScript", "FX Remittance", "Global Corridors"],
  },
  {
    id: "pqc-device-assurance",
    name: "PQC Device Assurance",
    tagline: "Post-Quantum Cryptography Lifecycle Verification for Embedded Firmware",
    category: "Cybersecurity & Post-Quantum",
    description:
      "Continuously verifies whether embedded devices can safely adopt quantum-safe cryptography over a 15-year lifecycle by inspecting firmware binaries directly in CI/CD pipelines.",
    repoUrl: "https://github.com/bhuvanjakkula/PQC-Device-Assurance",
    techStack: ["Post-Quantum Crypto", "Firmware Binary Analysis", "CI/CD Security"],
    badge: "Quantum-Safe",
  },
  {
    id: "nullmesh-defense",
    name: "NullMesh Defense",
    tagline: "Zero-Trust Autonomous Cyber Defense & Threat Mesh",
    category: "Cybersecurity & Post-Quantum",
    description:
      "Decentralized zero-trust security architecture and autonomous threat containment engine for critical infrastructure.",
    liveUrl: "https://nullmesh-defense99.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/nullmesh-defense",
    techStack: ["Python", "Zero-Trust", "Cyber Defense"],
  },
  {
    id: "praxis-os",
    name: "PRAXIS-OS 99",
    tagline: "Adaptive Decision Intelligence & Policy Simulation Platform",
    category: "Cybersecurity & Post-Quantum",
    description:
      "Adaptive strategic decision intelligence platform for complex governance, policy simulation, and multi-agent scenario modeling.",
    liveUrl: "https://policy-starter-v010-swart.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/PRAXIS-OS-99",
    techStack: ["Python", "Decision Intelligence", "Policy Simulation"],
  },
  {
    id: "devflow12",
    name: "DevFlow 12",
    tagline: "Local-First High-Engineering Software Intelligence Platform",
    category: "Global Media & Developer Tools",
    description:
      "Solves the 12 classic software engineering pain points plus 3 breakthrough innovations in code architecture, velocity, and reliability.",
    repoUrl: "https://github.com/bhuvanjakkula/Devflow12",
    techStack: ["Python", "Developer Intelligence", "Local-First"],
  },
  {
    id: "globaldesk-news",
    name: "GlobalDesk News",
    tagline: "Global News Intelligence & Live TV News Network",
    category: "Global Media & Developer Tools",
    description:
      "Real-time multi-region news intelligence aggregator and live global broadcast monitoring platform.",
    repoUrl: "https://github.com/bhuvanjakkula/globaldesk-news",
    techStack: ["TypeScript", "Media Intelligence", "Live Broadcast"],
  },
  {
    id: "ggisp",
    name: "GGISP — Global Governance Innovation Platform",
    tagline: "Global Governance & Institutional Solutions Architecture",
    category: "Global Media & Developer Tools",
    description:
      "Research-backed platform for international corporate law, institutional governance, and cross-border policy innovation.",
    repoUrl: "https://github.com/bhuvanjakkula/GGISP-Global-Governance-Innovation-Solutions-Platform",
    techStack: ["Python", "Global Governance", "LegalTech"],
  },
];

export const PUBLISHED_BOOKS: PublishedBook[] = [
  {
    id: "hearts-become-music",
    title: "Where Our Hearts Become Music",
    subtitle: "Can a Love Built on Code Transcend Human Boundaries?",
    genre: "Music & Romance Fiction",
    description:
      "A deeply moving contemporary novel exploring the intersection of artificial intelligence, musical creation, and human love — the literary inspiration behind Apollo's AI Music.",
    amazonUrl: "https://www.amazon.com/stores/Bhuvan-Jakkula/author/B0HD9ZJVWT",
    highlight: "Companion Book to Apollo's AI Music",
  },
  {
    id: "my-love-the-musician",
    title: "My Love, The Musician",
    subtitle: "A Hollywood Romance of Sound, Fame & Soul",
    genre: "Music & Romance Fiction",
    description:
      "Set against the dazzling backdrop of Hollywood's film scoring and music studios, a passionate story of artistic devotion and cinematic romance.",
    amazonUrl: "https://www.amazon.com/stores/Bhuvan-Jakkula/author/B0HD9ZJVWT",
    highlight: "Hollywood Music Fiction",
  },
  {
    id: "agi-global-security",
    title: "AGI and Global Security",
    subtitle: "Transformative Intelligence, Defence Systems, Strategic Stability, and Human Control",
    genre: "AI, Defense & Intelligence",
    description:
      "An authoritative examination of Artificial General Intelligence, autonomous defense architectures, strategic deterrence, and sovereign governance.",
    amazonUrl: "https://www.amazon.com/stores/Bhuvan-Jakkula/author/B0HD9ZJVWT",
    highlight: "AI & Strategic Studies",
  },
  {
    id: "architecture-intelligence-analysis",
    title: "Architecture Choice in Intelligence Analysis",
    subtitle: "Human Intelligence, Cyber Espionage, AI, and the Limits of Hybrid Systems",
    genre: "AI, Defense & Intelligence",
    description:
      "Investigates how national security and enterprise intelligence systems balance human judgment, cyber operations, and machine intelligence.",
    amazonUrl: "https://www.amazon.com/stores/Bhuvan-Jakkula/author/B0HD9ZJVWT",
  },
  {
    id: "scientific-operator",
    title: "When the Screen Turns Against You",
    subtitle: "The Scientific Operator — Mastering Market Risk & Trading Psychology",
    genre: "Finance & Risk",
    description:
      "A rigorous guide to quantitative discipline, market structure, and psychological resilience when navigating high-volatility financial markets.",
    amazonUrl: "https://www.amazon.com/stores/Bhuvan-Jakkula/author/B0HD9ZJVWT",
    highlight: "Paired with Scientific Stock Operator Software",
  },
  {
    id: "meridian-protocol",
    title: "The Meridian Protocol",
    subtitle: "A Jack Kade & Mara Veyne Global Espionage Thriller",
    genre: "Thriller & Literary Fiction",
    description:
      "A high-stakes international cyber-intelligence thriller racing across global capitals where algorithmic warfare meets covert operations.",
    amazonUrl: "https://www.amazon.com/stores/Bhuvan-Jakkula/author/B0HD9ZJVWT",
  },
  {
    id: "architect-of-tomorrow",
    title: "The Architect of Tomorrow",
    subtitle: "Vision, Ambition, and the Blueprint of the Future",
    genre: "Thriller & Literary Fiction",
    description:
      "A philosophical and dramatic exploration of visionary builders reshaping civilization at the crossroads of ethics and technology.",
    amazonUrl: "https://www.amazon.com/stores/Bhuvan-Jakkula/author/B0HD9ZJVWT",
  },
  {
    id: "house-of-glass",
    title: "I & You: A House of Glass",
    subtitle: "Intimacy, Vulnerability, and Modern Relationships",
    genre: "Thriller & Literary Fiction",
    description:
      "A poignant literary work examining transparency, emotional truth, and the fragile architecture of human connection.",
    amazonUrl: "https://www.amazon.com/stores/Bhuvan-Jakkula/author/B0HD9ZJVWT",
  },
  {
    id: "the-phoenix-rises",
    title: "The Phoenix Rises",
    subtitle: "Resilience, Reinvention, and the Triumph of the Human Spirit",
    genre: "Thriller & Literary Fiction",
    description:
      "An inspiring narrative of transformation and creative rebirth through adversity.",
    amazonUrl: "https://www.amazon.com/stores/Bhuvan-Jakkula/author/B0HD9ZJVWT",
  },
  {
    id: "leos-bravery-blanket",
    title: "Leo's Bravery Blanket",
    subtitle: "Illustrated Children's Story of Courage & Imagination",
    genre: "Thriller & Literary Fiction",
    description:
      "A heartwarming children's book teaching young readers nationwide and globally about emotional courage, kindness, and inner strength.",
    amazonUrl: "https://www.amazon.com/stores/Bhuvan-Jakkula/author/B0HD9ZJVWT",
  },
];
