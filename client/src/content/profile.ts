import type { Capability, ExperienceItem, Highlight, ProcessStep } from "./types";

export const intro = {
  /** Rotating phrases shown after "I'm a" in the hero. */
  roles: ["product builder", "Software Development Engineer II", "builder of AI tools people trust"],
  headline: "I turn messy workflows into products people use every day.",
  lede:
    "SDE II at Pravaig Dynamics in Bengaluru. I sit with the team, find where the work breaks and decide what to build first. Then I ship it with AI tools and stay with it until it becomes part of the daily routine.",
};

export const highlights: Highlight[] = [
  { value: 10, suffix: "+", label: "Products taken to production as the sole engineer" },
  { value: 120, suffix: "+", label: "Employees using them every day across 4 teams" },
  { value: 65, suffix: "%", label: "Drop in support volume from a product I scoped at Kovan Labs" },
];

export const capabilities: Capability[] = [
  {
    kind: "engineering",
    title: "Engineering",
    body: "Full-stack products and the services behind them: clean APIs, sound data models, integrations with the systems a business already runs, and deployments I own after launch.",
    items: ["Python", "TypeScript", "React", "Node.js", "REST APIs", "SQL", "Docker", "AWS", "CI/CD"],
  },
  {
    kind: "product",
    title: "Product",
    body: "Discovery with the people who will use it, a scope everyone agrees on, a prioritised backlog and a release that gets adopted rather than ignored.",
    items: ["User research", "PRDs and user stories", "Prioritisation", "Roadmaps", "UAT", "Release planning"],
  },
  {
    kind: "ai",
    title: "Applied AI",
    body: "LLM features and agents built around a real workflow, with a human review step where trust matters and checks on accuracy, speed and cost after launch.",
    items: ["LLM APIs", "AI agents", "RAG", "Prompt design", "Evaluation", "Human in the loop"],
  },
];

export const process: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    body: "Sit with the team, map how the work happens today and find where it slows down.",
    deliverable: "Problem worth solving",
  },
  {
    index: "02",
    title: "Scope",
    body: "Agree what the first useful version must do, write it down and order the backlog.",
    deliverable: "Scope and backlog",
  },
  {
    index: "03",
    title: "Build",
    body: "Ship in small increments, riskiest part first, with builds the team can try early.",
    deliverable: "Working software",
  },
  {
    index: "04",
    title: "Adopt",
    body: "Roll out, watch where people get stuck and fix it until the old spreadsheet is gone.",
    deliverable: "A product in daily use",
  },
];

export const about = {
  paragraphs: [
    "I'm Giri, a Software Development Engineer II at Pravaig Dynamics, an electric vehicle company in Bengaluru. I joined as its only engineer, and over a little more than a year I've taken more than ten products from a team's workflow to software they use every day: the Energica Motor website and configurator, AI assistants for marketing and operations, systems that moved production tracking off spreadsheets, and the company ERP and employee portal.",
    "What I enjoy most is the space between engineering and product. Before writing code I want to know who it's for, what slows them down today and what a good first version looks like. As an Associate Product Manager intern at Kovan Labs, that habit turned into user research that found three query types behind 68% of a client's support tickets, and a scoped AI assistant that cut their support volume by 65% in six months.",
    "Outside work I build products with a small team. Recurva, a retention platform for businesses with recurring customers, is live on Google Play, and I've designed and shipped websites for Prathik Softnet and Migsak.",
  ],
  education: [
    { title: "B.Tech, Artificial Intelligence and Data Science", detail: "Jai Shriram Engineering College, 2021 to 2025" },
    { title: "Google Project Management Certificate", detail: "Professional certificate" },
  ],
  openTo:
    "Open to Software Engineer, Product Engineer and Associate Product Manager roles at product companies in Bengaluru.",
};

export const experience: ExperienceItem[] = [
  {
    company: "Pravaig Dynamics",
    role: "Software Development Engineer II",
    location: "Bengaluru",
    period: "2025 to present",
    summary:
      "Sole engineer for the company's internal platforms and customer-facing web products, from discovery and scoping to release and iteration.",
    points: [
      "Own end-to-end delivery of 10+ products used daily by 120+ employees across 4 teams.",
      "Designed and built the Energica Motor website and motorcycle configurator from scratch in React and TypeScript.",
      "Launched AI assistants for marketing and operations with a human review step, saving the marketing team 5 to 7 hours a week.",
      "Moved production and maintenance tracking from spreadsheets to centralised digital systems.",
      "Built the company ERP and employee portal, and redesigned the portal around employee feedback.",
    ],
    relatedProjects: ["internal-platforms", "energica"],
  },
  {
    company: "Allied Worldwide",
    role: "AI Engineer Intern",
    location: "Bengaluru",
    period: "Feb 2025 to Aug 2025",
    summary: "Built and shipped an LLM-powered outreach tool for the sales team.",
    points: [
      "Built the agent in Python with LangChain and the Claude API, replacing manual prospect research and first drafts.",
      "Added output validation and quality checks that took it from prototype to daily use.",
    ],
    relatedProjects: ["linkedin-ai-agent"],
  },
  {
    company: "Kovan Labs",
    role: "Associate Product Manager Intern",
    location: "Coimbatore",
    period: "Mar 2024 to Aug 2024",
    summary: "Discovery and delivery for an AI support assistant for an enterprise client.",
    points: [
      "Led user research and found three query types behind 68% of support tickets.",
      "Scoped the assistant with engineering, wrote requirements and ran UAT. Support volume fell 65% in six months.",
    ],
    relatedProjects: ["rag-support-platform"],
  },
  {
    company: "Independent projects",
    logo: "Recurva",
    role: "Product engineer",
    location: "Bengaluru",
    period: "2024 to present",
    summary: "Products built with a small team outside my full-time role.",
    points: [
      "Recurva: retention platform for businesses with recurring customers, live on Google Play with iOS in progress.",
      "QuietPass: roommate coordination app for iOS and Android, in final testing.",
      "Websites for Prathik Softnet and Migsak, designed and deployed end to end.",
    ],
    relatedProjects: ["recurva", "quietpass", "prathik-softnet", "migsak"],
  },
  {
    company: "Kyungpook National University",
    role: "Machine Learning Research Intern",
    location: "South Korea",
    period: "Dec 2022 to Jan 2023",
    summary: "Machine learning research on an NLP classification problem.",
    points: ["Improved classification accuracy by about 15% through feature engineering and model evaluation."],
  },
  {
    company: "Lenovo India",
    role: "Data Analyst Intern",
    location: "Puducherry",
    period: "Aug 2022 to Sep 2022",
    summary: "Data analytics for manufacturing operations.",
    points: ["Automated manufacturing reporting with Python, SQL and Tableau, cutting manual reporting effort by 30%."],
  },
];

export const toolkit = [
  { group: "Product", items: ["User research", "PRDs", "User stories", "Prioritisation", "Roadmaps", "UAT"] },
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Flutter", "Vite", "Accessibility"] },
  { group: "Backend and data", items: ["Python", "Node.js", "FastAPI", "REST APIs", "SQL", "ERPNext"] },
  { group: "Cloud and delivery", items: ["Docker", "AWS", "Linux", "CI/CD", "Vercel", "Git"] },
  { group: "AI", items: ["LLM APIs", "AI agents", "RAG", "LangChain", "Prompt design", "Claude Code"] },
] as const;

/** Short labels that scroll past in the marquee strip. */
export const marquee = [
  "Discovery",
  "Python",
  "Scope and PRDs",
  "React",
  "TypeScript",
  "AI agents",
  "Node.js",
  "Prioritisation",
  "RAG",
  "REST APIs",
  "UAT",
  "Docker",
  "Roadmaps",
  "AWS",
  "Human in the loop",
] as const;
