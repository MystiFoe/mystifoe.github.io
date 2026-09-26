import type { ExperienceItem, ProcessStep, Service } from "./types";

export const intro = {
  headline: "I build mobile apps, websites and backend systems, and I plan them like a product manager.",
  lede:
    "Freelance product engineer in Bengaluru. I take a project from the first scoping call to a live release: requirements, design, Flutter and web front ends, APIs, payments, cloud and the handover after.",
};

export const highlights = [
  { value: "5+", label: "Production systems shipped solo at Pravaig in six months" },
  { value: "₹2 Cr", label: "New business from an AI outreach agent I built" },
  { value: "iOS, Android, Web", label: "Shipped from scoping to production" },
] as const;

export const services: Service[] = [
  {
    title: "Mobile apps",
    body: "Cross-platform apps for iOS and Android from one Flutter codebase, with role-based access, push notifications and in-app payments.",
    items: ["Flutter and Dart", "Firebase Auth and FCM", "Razorpay payments", "Store release"],
  },
  {
    title: "Websites and web apps",
    body: "Company websites that generate enquiries and web products that people use daily, built responsive and ready for search.",
    items: ["Next.js and React", "SEO and performance", "Hosting and domains", "Analytics"],
  },
  {
    title: "Backends and integrations",
    body: "APIs and data models that stay maintainable, plus the integrations a business depends on, from WhatsApp to biometric devices.",
    items: ["FastAPI and Node.js", "PostgreSQL and Redis", "Google Cloud Run and Docker", "WhatsApp and hardware"],
  },
  {
    title: "AI and automation",
    body: "Agents and retrieval systems that remove repetitive work, built around a measurable business result rather than a demo.",
    items: ["LangChain and Claude API", "RAG pipelines", "Workflow automation", "Reporting bots"],
  },
];

export const process: ProcessStep[] = [
  {
    index: "01",
    title: "Scope",
    body: "A call to understand the business problem, then a written scope split into modules, each with its own price and timeline.",
    deliverable: "Scope document and module pricing",
  },
  {
    index: "02",
    title: "Design",
    body: "Clickable mockups of the main flows, so you can sign off on how it works before any backend is written.",
    deliverable: "Interactive mockup",
  },
  {
    index: "03",
    title: "Build",
    body: "Development in short sprints with working builds you can test on your own phone or browser as it comes together.",
    deliverable: "Sprint plan and test builds",
  },
  {
    index: "04",
    title: "Ship",
    body: "Deployment, cloud setup, domains, SEO and app store release, handled end to end.",
    deliverable: "Live product",
  },
  {
    index: "05",
    title: "Support",
    body: "Handover documentation and follow-up changes once real users are on it.",
    deliverable: "Handover and support",
  },
];

export const about = {
  paragraphs: [
    "I'm Giri, a product engineer based in Bengaluru. My day job is at Pravaig Dynamics, a Series A electric vehicle startup, where I've built and run the company's internal systems: a manufacturing execution system for battery assembly, ERP and attendance, AI camera surveillance, storage and marketing automation. I also worked on the Energica Motor Company website and configurator from there.",
    "Alongside that I take on freelance projects. Recurva, QuietPass, Prathik Softnet and Migsak all came through that work, and in each one I handled the whole thing: understanding the problem, scoping it into modules, designing the flows, building the app or site, and deploying it.",
    "Before Pravaig I built an AI outreach agent at Allied Worldwide that contributed to two enterprise client wins, and worked as a product manager intern at Kovan Labs, owning delivery of a retrieval-based support platform for US clients. That mix is why I write scope documents and sprint plans as readily as I write code.",
  ],
  education: [
    { title: "B.Tech, Artificial Intelligence and Data Science", detail: "Undergraduate degree" },
    { title: "Google Project Management Certificate", detail: "Professional certificate" },
  ],
  openTo:
    "Available for freelance projects in mobile, web and automation. Also open to conversations about product roles.",
};

export const experience: ExperienceItem[] = [
  {
    company: "Pravaig Dynamics",
    role: "Backend Engineer, internal systems and product",
    location: "Bengaluru",
    period: "Sep 2025 to present",
    summary:
      "Own the internal systems of a Series A EV startup end to end, from requirements through operations.",
    points: [
      "Shipped 5+ production systems solo in the first six months, including a battery pack MES used by 50+ people daily.",
      "Integrated a Hioki BT3562A battery tester over TCP for automated cell sorting.",
      "Replaced a paid attendance suite with in-house biometric sync into ERPNext.",
      "Deployed Frigate NVR across 52 IP cameras, ran TrueNAS storage and migrated the company to Google Workspace.",
      "Audited, redesigned and built a configurator for the Energica Motor Company website.",
    ],
    relatedProjects: ["battery-mes", "pravaig-internal-stack", "energica"],
  },
  {
    company: "Freelance",
    role: "Product engineer",
    location: "Remote and Bengaluru",
    period: "2024 to present",
    summary: "Mobile apps and websites for clients, delivered from scoping to production.",
    points: [
      "Recurva: three role-based Flutter apps and a backend of 100+ APIs for service business retention.",
      "QuietPass: a household coordination app for iOS and Android on FastAPI and Cloud Run.",
      "Company websites for Prathik Softnet and Migsak.",
    ],
    relatedProjects: ["recurva", "quietpass", "prathik-softnet", "migsak"],
  },
  {
    company: "Allied Worldwide",
    role: "AI Engineer Intern",
    location: "Bengaluru",
    period: "Feb 2025 to Aug 2025",
    summary: "Built AI automation for outreach and reporting.",
    points: [
      "Built a LinkedIn outreach agent with LangChain and the Claude API that contributed to two enterprise clients worth about ₹2 crore.",
      "Automated reporting workflows, saving the team 5+ hours a week.",
    ],
    relatedProjects: ["linkedin-ai-agent"],
  },
  {
    company: "Kovan Labs",
    role: "Product Manager Intern",
    location: "Coimbatore",
    period: "Mar 2024 to Aug 2024",
    summary: "Owned delivery of a RAG support platform for US enterprise clients.",
    points: [
      "Ran discovery, wrote PRDs, planned sprints, coordinated UAT and handled production sign-off.",
      "Reduced client manual support workload by 65 percent within six months.",
    ],
    relatedProjects: ["rag-support-platform"],
  },
  {
    company: "Earlier",
    role: "Research and analytics internships",
    location: "South Korea and India",
    period: "2022 to 2023",
    summary: "Machine learning research at Kyungpook National University and data analytics at Lenovo.",
    points: [
      "Kyungpook National University: data preparation and feature engineering that improved classification accuracy.",
      "Lenovo: automated manual data workflows with Python and Excel, cutting reporting time by 30 percent.",
    ],
  },
];

export const toolkit = [
  { group: "Product", items: ["Discovery", "Scope and PRDs", "Sprint planning", "UAT", "Roadmaps", "Stakeholder updates"] },
  { group: "Mobile and web", items: ["Flutter", "Dart", "Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { group: "Backend and data", items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "SQL"] },
  { group: "Cloud and ops", items: ["Google Cloud Run", "Firebase", "Docker", "Vercel", "Linux", "TrueNAS"] },
  { group: "AI", items: ["LangChain", "Claude API", "RAG", "Agents", "Prompt design"] },
] as const;
