export interface SoftwareProject {
  id: string;
  name: string;
  tagline: string;
  category:
    | "Enterprise AI & Revenue"
    | "FinTech & Risk Intelligence"
    | "Cybersecurity & Post-Quantum"
    | "Healthcare & Clinical AI"
    | "Global Media & Developer Tools";
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
  genre:
    | "AI, Defense & Intelligence"
    | "Finance & Risk"
    | "Music & Romance Fiction"
    | "Thriller & Literary Fiction";
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
  // 1. Enterprise AI, Revenue & LegalTech
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
    liveUrl: "https://contract-to-cash-rescue.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/contract-to-cash-rescue",
    techStack: ["Spatial Citations", "Post-Quantum Crypto", "AR Automation", "FastAPI"],
    badge: "PQC Secured",
  },
  {
    id: "payment-rescue-pro",
    name: "Payment Rescue Pro",
    tagline: "Enterprise Payment Recovery & Dispute Resolution Suite",
    category: "Enterprise AI & Revenue",
    description:
      "Automated B2B payment recovery, failed transaction rescue workflows, and real-time revenue leakage prevention platform.",
    liveUrl: "https://payment-rescue-pro.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/contract-to-cash-rescue",
    techStack: ["Payment Recovery", "B2B FinTech", "Dispute AI"],
  },
  {
    id: "lex-nexus-enterprise",
    name: "Lex Nexus Enterprise (VCS-CORE v1.0)",
    tagline: "Verifiable Consequence Simulation & Legal Negotiation Lab",
    category: "Enterprise AI & Revenue",
    description:
      "Corporate legal negotiation and crisis simulation engine featuring RFC 8785 Canonical JSON, SHA3-512 state fingerprinting, NIST FIPS 204/203 Post-Quantum attestation, epistemic firewall, and counterfactual decision replay.",
    liveUrl: "https://lex-nexus-enterprise.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula",
    techStack: ["LegalTech AI", "ML-DSA-87", "Counterfactual Replay", "Epistemic Firewall"],
    badge: "LegalTech PQC",
  },
  {
    id: "proofline-engine",
    name: "Proofline Audit Engine",
    tagline: "Cryptographic Enterprise Audit & Compliance Verification",
    category: "Enterprise AI & Revenue",
    description:
      "Continuous cryptographic audit trail generation, immutable compliance evidence verification, and enterprise governance telemetry.",
    liveUrl: "https://proofline-engine.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula",
    techStack: ["Audit Lineage", "Cryptographic Proofs", "Compliance AI"],
  },
  {
    id: "rbi-evidence-engine",
    name: "RBI Evidence Engine",
    tagline: "Automated Regulatory Compliance & Banking Audit Vault",
    category: "Enterprise AI & Revenue",
    description:
      "Automated regulatory evidence collection, core-banking compliance verification, and audit readiness engine for financial institutions.",
    liveUrl: "https://rbi-evidence-engine-bhuvan-bjt.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula",
    techStack: ["RegTech", "Banking Compliance", "Evidence Vault"],
  },
  {
    id: "ggisp",
    name: "GGISP — Global Governance Innovation Platform",
    tagline: "Global Governance & Institutional Solutions Architecture",
    category: "Enterprise AI & Revenue",
    description:
      "Research-backed platform for international corporate law, institutional governance, and cross-border policy innovation.",
    liveUrl: "https://ggisp-platform-v2-bhuvan-bjt.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/GGISP-Global-Governance-Innovation-Solutions-Platform",
    techStack: ["Python", "Global Governance", "LegalTech"],
  },

  // 2. Global Media, Music AI, Art & Developer Tools
  {
    id: "apollos-ai-music",
    name: "Apollo's AI Music & Film Studio",
    tagline: "Global Cinematic AI-Human Music & Sync Licensing Platform",
    category: "Global Media & Developer Tools",
    description:
      "Global music production studio featuring 190+ original songs across Apollo's AI Music & Bhuvanaai Music, 8-language localization, persistent mini-player, and worldwide film sync licensing.",
    liveUrl: "https://apollos-ai-music.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/apollos-ai-music",
    techStack: ["React", "TypeScript", "Supabase", "Global i18n"],
    badge: "190+ Songs",
  },
  {
    id: "swarkhoj-ai",
    name: "SwarKhoj AI (स्वरखोज एआई)",
    tagline: "The Complete Hindi Music Universe (1931–2026+) & AI Song Detective",
    category: "Global Media & Developer Tools",
    description:
      "Conversational AI Song Detective with Indic Phonetics Soundex, hybrid BM25 + neural vector search, Web Audio classical synthesis, 3-Tier Post-Quantum Rights Resolution, and Hindi Cinema Knowledge Graph.",
    liveUrl: "https://swarkhoj-ai.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula",
    techStack: ["Indic NLP", "Web Audio API", "ML-KEM-768", "Knowledge Graph"],
    badge: "Cultural AI",
  },
  {
    id: "swarsaaz",
    name: "SwarSaaz",
    tagline: "Interactive Indian Classical & Film Music Studio",
    category: "Global Media & Developer Tools",
    description:
      "Digital Indian classical raga exploration, microtonal instrument synthesis, and musical heritage streaming companion.",
    liveUrl: "https://swarsaaz.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula",
    techStack: ["Raga Synthesis", "Audio DSP", "Music Heritage"],
  },
  {
    id: "heritagearts-marketplace",
    name: "HeritageArts Global Marketplace",
    tagline: "World Traditional Art Platform Across 100+ Countries",
    category: "Global Media & Developer Tools",
    description:
      "Global cultural marketplace cataloging and connecting authentic traditional art forms from 100+ countries with verified provenance and artisan storytelling.",
    liveUrl: "https://heritagearts-global-marketplace.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula",
    techStack: ["100+ Countries", "Cultural Provenance", "Global E-Commerce"],
    badge: "100+ Countries",
  },
  {
    id: "devflow12",
    name: "DevFlow 12",
    tagline: "Local-First High-Engineering Software Intelligence Platform",
    category: "Global Media & Developer Tools",
    description:
      "Solves the 12 classic software engineering pain points plus 3 breakthrough innovations in code architecture, velocity, and reliability.",
    liveUrl: "https://dev-flow-gold-delta.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/Devflow12",
    techStack: ["Python", "Developer Intelligence", "Local-First"],
  },
  {
    id: "globaldesk-news",
    name: "GlobalDesk News & Live TV Network",
    tagline: "Global News Intelligence & Live Broadcast Monitor",
    category: "Global Media & Developer Tools",
    description:
      "Real-time multi-region news intelligence aggregator and live global TV broadcast monitoring network.",
    liveUrl: "https://globaldesk66-news.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/globaldesk-news",
    techStack: ["TypeScript", "Media Intelligence", "Live Broadcast"],
  },

  // 3. FinTech, Quantitative Trading & Cross-Border Payments
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
    liveUrl: "https://scientific-stock-operator.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/scientific-stock-operator",
    techStack: ["Python", "Algorithmic Risk", "Market Telemetry"],
    badge: "Book Companion",
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
    id: "global-ownership-exchange",
    name: "Global Ownership Exchange & Global Shares",
    tagline: "Cross-Border Fractional Asset & Equity Exchange",
    category: "FinTech & Risk Intelligence",
    description:
      "Digital asset marketplace and cross-border equity exchange enabling transparent fractional ownership and liquidity.",
    liveUrl: "https://ubiquitous-funicular-sigma.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula/ubiquitous-funicular",
    techStack: ["Equity Exchange", "Fractional Assets", "Global Markets"],
  },

  // 4. Healthcare & Clinical AI
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

  // 5. Cybersecurity, Defense & Post-Quantum Cryptography
  {
    id: "pqc-device-assurance",
    name: "PQC Device Assurance",
    tagline: "Post-Quantum Cryptography Lifecycle Verification for Embedded Firmware",
    category: "Cybersecurity & Post-Quantum",
    description:
      "Continuously verifies whether embedded devices can safely adopt quantum-safe cryptography over a 15-year lifecycle by inspecting firmware binaries directly in CI/CD pipelines.",
    liveUrl: "https://pqc-device-assurance.vercel.app",
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
    id: "aegis-q-tactical-mesh",
    name: "Aegis-Q Tactical Mesh",
    tagline: "Quantum-Resilient Tactical Communications & Defense Mesh",
    category: "Cybersecurity & Post-Quantum",
    description:
      "Quantum-resistant tactical command network and real-time defense telemetry mesh for mission-critical operations.",
    liveUrl: "https://aegis-q-tactical-mesh.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula",
    techStack: ["Tactical Mesh", "Quantum Security", "Defense AI"],
  },
  {
    id: "drone-watch",
    name: "Drone Watch",
    tagline: "Autonomous Airspace Monitoring & UAV Defense Intelligence",
    category: "Cybersecurity & Post-Quantum",
    description:
      "Real-time aerial perimeter surveillance, UAV flight-path telemetry analysis, and airspace threat detection platform.",
    liveUrl: "https://drone-watch-blue.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula",
    techStack: ["UAV Telemetry", "Airspace Defense", "Sensor Fusion"],
  },
  {
    id: "k9-intelligence-academy",
    name: "K9 Intelligence Academy",
    tagline: "Tactical Working-Dog Training & Operational Readiness System",
    category: "Cybersecurity & Post-Quantum",
    description:
      "Specialized behavioral conditioning, handler certification, and tactical field readiness tracking platform for elite K9 units.",
    liveUrl: "https://k9-intelligence-academy.vercel.app",
    repoUrl: "https://github.com/bhuvanjakkula",
    techStack: ["Tactical Operations", "Training Telemetry", "Field Readiness"],
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
