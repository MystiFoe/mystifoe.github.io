import type { Project, ProjectCategory } from "./types";

import recurvaDesktop from "@assets/work/recurva-desktop.webp";
import recurvaMobile from "@assets/work/recurva-mobile.webp";
import recurvaOperations from "@assets/work/recurva-operations.webp";
import recurvaApps from "@assets/work/recurva-apps.webp";
import prathikDesktop from "@assets/work/prathik-desktop.webp";
import prathikMobile from "@assets/work/prathik-mobile.webp";
import prathikSolutions from "@assets/work/prathik-solutions.webp";
import prathikCatalogue from "@assets/work/prathik-catalogue.webp";
import migsakDesktop from "@assets/work/migsak-desktop.webp";
import migsakMobile from "@assets/work/migsak-mobile.webp";
import migsakApproach from "@assets/work/migsak-approach.webp";
import energicaDesktop from "@assets/work/energica-desktop.webp";
import energicaMobile from "@assets/work/energica-mobile.webp";
import energicaLineup from "@assets/work/energica-lineup.webp";
import energicaConfigurator from "@assets/work/energica-config-desktop.webp";

export const categoryLabels: Record<ProjectCategory, string> = {
  mobile: "Mobile apps",
  web: "Websites",
  platform: "Platforms and internal tools",
  ai: "AI systems",
};

export const projects: Project[] = [
  {
    slug: "recurva",
    title: "Recurva",
    client: "Recurva",
    engagement: "freelance",
    engagementLabel: "Freelance",
    categories: ["mobile", "platform"],
    year: "2026",
    status: "Live at recurva.in",
    summary:
      "A retention platform for gyms and service businesses, with separate apps for owners, staff and members, WhatsApp follow-ups, Razorpay renewals and biometric attendance.",
    tagline:
      "Three role-based Flutter apps and the backend behind them, taken from a mockup to a live product.",
    role: ["Product scoping", "UX and UI design", "Flutter apps", "Backend and APIs", "Payments and integrations"],
    stack: ["Flutter", "Node.js", "Express", "TypeScript", "PostgreSQL", "Docker", "Razorpay", "WhatsApp"],
    links: [{ label: "Visit recurva.in", href: "https://recurva.in/" }],
    cover: { src: recurvaDesktop, alt: "Recurva website hero with the staff app follow-up screen", frame: "browser", url: "recurva.in" },
    gallery: [
      { src: recurvaApps, alt: "Recurva owner, staff and member app overview", frame: "browser", url: "recurva.in" },
      { src: recurvaOperations, alt: "Recurva attendance, staff activity and renewal tracking", frame: "browser", url: "recurva.in" },
      { src: recurvaMobile, alt: "Recurva on a phone", frame: "phone" },
    ],
    metrics: [
      { value: "3", label: "Role-based apps: owner, staff and member" },
      { value: "100+", label: "API endpoints, up from roughly 20 in the first scope" },
      { value: "Live", label: "Product site and Android build available" },
    ],
    context: [
      "Gym members rarely cancel. They stop showing up, and by the time the membership lapses the owner has already lost them for weeks. The client wanted a tool the front desk would actually use every day rather than another report nobody opens.",
      "The brief started as a gym retention app. It grew into a product for service businesses in general, with three kinds of users who each need a different view of the same data.",
    ],
    approach: [
      {
        title: "Mockup before code",
        body: "I built an interactive mockup of the owner and trainer flows first, so the client could click through the real journeys and sign off on scope before any backend work started. Architecture and a 15-day sprint plan were locked from that.",
      },
      {
        title: "A retention score the staff can act on",
        body: "Every member is scored on last visit, attendance streak and days to expiry, then sorted into on track, at risk and high risk. The app creates the follow-up tasks automatically, so each staff member opens it to a list of exactly who to contact.",
      },
      {
        title: "One tap to WhatsApp",
        body: "Missed-visit, renewal and birthday messages are pre-written. Staff tap once and the message goes out from the business number, which is where members already are.",
      },
      {
        title: "Getting paid without chasing",
        body: "Members renew inside their own app through Razorpay. A successful payment extends the membership automatically, and renewals that came from a follow-up are credited back so the owner can see what retention earned.",
      },
      {
        title: "Attendance from the hardware they already own",
        body: "ZKTeco and ADMS biometric devices sync check-ins straight into member health, and one owner account can run several branches with per-location numbers.",
      },
    ],
    outcome: [
      "Full product delivered through UI, UX, apps and backend, with the marketing site live at recurva.in and an Android build available for download.",
      "The API surface grew from about 20 planned endpoints to more than 100 as the product took shape. I delivered that inside the original engagement.",
    ],
    productNotes: [
      "Scoped around three users with different jobs: the owner wants the numbers, staff want a to-do list, and members want to check in and pay. Each app shows only what that person needs.",
      "Follow-ups go out on WhatsApp because that is where members already reply.",
      "Kept pricing decisions in the owner's hands (plans and fees per business) so the product works for studios and gyms with very different models.",
    ],
    featured: true,
  },
  {
    slug: "quietpass",
    title: "QuietPass",
    client: "Private client",
    engagement: "freelance",
    engagementLabel: "Freelance",
    categories: ["mobile"],
    year: "2026",
    status: "In client testing",
    summary:
      "A privacy-first household coordination app for iOS and Android: live presence status, shared space reservations and anonymous nudges between people who live together.",
    tagline: "A cross-platform Flutter app with a FastAPI backend on Cloud Run, scoped and priced as four modules.",
    role: ["Requirements and scoping", "Module pricing", "UI design", "Flutter app", "Backend and cloud deployment"],
    stack: ["Flutter", "Dart", "FastAPI", "PostgreSQL", "Redis", "Firebase Auth", "FCM", "Google Cloud Run"],
    diagram: {
      title: "Four modules, one household",
      nodes: [
        { label: "Presence", detail: "Live status for each person with per-status durations" },
        { label: "Reservations", detail: "Book shared spaces with conflict locking" },
        { label: "Nudges", detail: "Anonymous requests delivered as real push notifications" },
        { label: "Household", detail: "Groups, multiple admins and invites" },
      ],
    },
    metrics: [
      { value: "4", label: "Product modules, each scoped and priced separately" },
      { value: "2", label: "Platforms from one codebase: iOS and Android" },
      { value: "Live", label: "Backend running on Google Cloud Run" },
    ],
    context: [
      "The client lives in a busy household and wanted a simple way for everyone at home to see who is available, book shared spaces and ask for quiet without it turning into an argument. It had to feel calm and look good, not like a utility.",
    ],
    approach: [
      {
        title: "Scope as modules, not a feature list",
        body: "I split the spec into four modules (presence, reservations, nudges and household management) and priced each one. The client could see exactly what they were paying for, and deferring the household tools to a second phase was a clean decision instead of a negotiation.",
      },
      {
        title: "Anonymous by design",
        body: "Nudges are delivered as push notifications without revealing who sent them. That one rule does most of the work of keeping the app from becoming a source of friction.",
      },
      {
        title: "Reservations that cannot double-book",
        body: "Space bookings use conflict locking on the backend, so two people tapping at the same moment cannot both get the room.",
      },
      {
        title: "Deployment that fits the constraints",
        body: "The FastAPI backend runs on Google Cloud Run so it can authenticate to Firebase with a native service account. The organisation policy blocks downloadable service-account keys, and this route avoided the problem entirely.",
      },
    ],
    outcome: [
      "Presence, groups with multiple admins, anonymous nudges with real push and conflict-locked reservations are all working on device. The client has tested the core loop and given feedback, and the remaining polish items are in progress before a full handover.",
    ],
    productNotes: [
      "The client dropped real thermostat and hardware control from scope. Cutting that kept the first release focused on the coordination problem, which is the part people use daily.",
      "Dark and light modes with a single teal accent, because the client wanted both and the app is used at every hour of the day.",
    ],
    featured: true,
  },
  {
    slug: "energica",
    title: "Energica Motor Company",
    client: "Energica Motor Company",
    engagement: "employment",
    engagementLabel: "At Pravaig Dynamics",
    categories: ["web"],
    year: "2026",
    status: "Live at energicamotor.com",
    summary:
      "Website audit, brand-correct redesign and a motorcycle configurator for the Italian electric motorcycle maker.",
    tagline: "A frame-by-frame audit, a redesign back to the real brand, and a configurator built to drive dealer enquiries.",
    role: ["Site audit", "Redesign direction", "Front-end build", "Configurator backend", "Deployment"],
    stack: ["Next.js", "FastAPI", "Python", "Pillow", "Redis", "Vercel"],
    links: [
      { label: "Visit energicamotor.com", href: "https://energicamotor.com/" },
      { label: "Open the configurator", href: "https://energicamotor.com/configurator" },
    ],
    cover: { src: energicaDesktop, alt: "Energica website hero, Progress, Ridden", frame: "browser", url: "energicamotor.com" },
    gallery: [
      { src: energicaConfigurator, alt: "Energica motorcycle configurator with the Eva Ribelle in Stealth Grey", frame: "browser", url: "energicamotor.com/configurator" },
      { src: energicaLineup, alt: "Energica lineup page featuring the Experia", frame: "browser", url: "energicamotor.com" },
      { src: energicaMobile, alt: "Energica website on a phone", frame: "phone" },
    ],
    metrics: [
      { value: "38", label: "Issues logged in a frame-by-frame video audit" },
      { value: "4", label: "Models in the configurator" },
      { value: "1", label: "Primary conversion path: contact a dealer" },
    ],
    context: [
      "Energica is a premium electric motorcycle brand from Modena and the exclusive supplier to the MotoE World Cup for four seasons. The existing site had drifted from the brand: it used red where Energica is green, and the fonts were wrong.",
    ],
    approach: [
      {
        title: "Audit first",
        body: "I recorded every page and went through it frame by frame, logging 38 bugs across the site. That list became the backlog and made it easy to agree what the redesign had to fix.",
      },
      {
        title: "Back to the real brand",
        body: "The redesign restores Energica Green (#78BE20), Barlow Condensed and IBM Plex Sans. I ran a direction exercise against references like Nothing and Zero Motorcycles before settling on the final look.",
      },
      {
        title: "A configurator that sells",
        body: "Riders pick a model, colour, suspension, wheels and carbon accessories and see the bike update. Images are composited server-side with Python and Pillow behind a FastAPI service, cached in Redis, and served to a Next.js front end.",
      },
    ],
    outcome: [
      "The redesigned site and configurator are live at energicamotor.com. The Contact Dealer flow is the main conversion point, so a configured bike turns straight into a sales lead.",
    ],
    productNotes: [
      "Treated the configurator as a sales tool, not a toy. Every path ends at a dealer enquiry with the configuration attached.",
      "Composited images on the server rather than stacking layers in the browser, which keeps the page light on mobile and the output consistent.",
    ],
    featured: true,
  },
  {
    slug: "prathik-softnet",
    title: "Prathik Softnet",
    client: "Prathik Softnet",
    engagement: "freelance",
    engagementLabel: "Freelance",
    categories: ["web"],
    year: "2024",
    status: "Live at prathiksoftnet.com",
    summary:
      "Corporate website for an enterprise IT infrastructure company, with solutions, an OEM product catalogue, case studies and quote requests.",
    tagline: "A lead-generation website for an IT infrastructure partner selling Dell, HPE, Cisco and Lenovo hardware.",
    role: ["UI and UX design", "Content structure", "Responsive build", "SEO", "Deployment"],
    stack: ["Responsive web", "SEO", "Hosting and domain", "WhatsApp contact"],
    links: [{ label: "Visit prathiksoftnet.com", href: "https://www.prathiksoftnet.com/" }],
    cover: { src: prathikDesktop, alt: "Prathik Softnet website hero", frame: "browser", url: "prathiksoftnet.com" },
    gallery: [
      { src: prathikCatalogue, alt: "Server product catalogue with quote buttons", frame: "browser", url: "prathiksoftnet.com" },
      { src: prathikSolutions, alt: "Client logos, OEM partners and solutions section", frame: "browser", url: "prathiksoftnet.com" },
      { src: prathikMobile, alt: "Prathik Softnet website on a phone", frame: "phone" },
    ],
    metrics: [
      { value: "5", label: "Service lines presented, from procurement to AMC" },
      { value: "8", label: "OEM technology partners showcased" },
      { value: "Live", label: "In production with quote and WhatsApp enquiries" },
    ],
    context: [
      "Prathik Softnet has supplied servers, storage and networking to businesses across India since 2018. Buyers in this market compare vendors on trust and speed of response, so the site needed to establish credibility quickly and make asking for a quote effortless.",
    ],
    approach: [
      {
        title: "Structure around how buyers shop",
        body: "Solutions, products and industries each have a clear place. The product catalogue shows real spec highlights for each server with a quote button on every card, because procurement teams arrive with a model in mind.",
      },
      {
        title: "Proof on the first scroll",
        body: "Client logos, authorised OEM partners and case studies with measurable results sit high on the page, where a new visitor decides whether to keep reading.",
      },
      {
        title: "Every path ends in a conversation",
        body: "Request Quote is available from the header and every product, and a WhatsApp button stays on screen for buyers who prefer to message.",
      },
    ],
    outcome: [
      "The site is live at prathiksoftnet.com and handles quote requests directly. I handled design, build, content structure and deployment end to end.",
    ],
    productNotes: [
      "Designed for a B2B buyer who is comparing three vendors in three tabs. Clear specs, visible partners and a fast quote path matter more than visual flourish.",
    ],
    featured: true,
  },
  {
    slug: "migsak",
    title: "Migsak",
    client: "Migsak",
    engagement: "freelance",
    engagementLabel: "Freelance",
    categories: ["web"],
    year: "2026",
    status: "Live at migsak.com",
    summary:
      "Company website for a Bengaluru firm that builds automation and AI systems for operations-heavy organisations.",
    tagline: "A restrained, credibility-first website for an engineering services company.",
    role: ["Web design", "Front-end build", "Responsive layout", "Deployment"],
    stack: ["Responsive web", "SEO", "Hosting and domain"],
    links: [{ label: "Visit migsak.com", href: "https://www.migsak.com/" }],
    cover: { src: migsakDesktop, alt: "Migsak website hero, Operational intelligence. Engineered for continuity.", frame: "browser", url: "migsak.com" },
    gallery: [
      { src: migsakApproach, alt: "Migsak four-phase delivery approach section", frame: "browser", url: "migsak.com" },
      { src: migsakMobile, alt: "Migsak website on a phone", frame: "phone" },
    ],
    metrics: [
      { value: "4", label: "Phase delivery method presented: discover, design, deploy, enable" },
      { value: "3", label: "Service lines: AI and automation, custom software, web and mobile" },
      { value: "Live", label: "In production at migsak.com" },
    ],
    context: [
      "Migsak sells to logistics providers, healthcare networks and growing enterprises where downtime costs money. The audience is cautious, so the site had to feel dependable rather than flashy.",
    ],
    approach: [
      {
        title: "Tone before layout",
        body: "A dark navy and white palette, plain typography and generous spacing. Nothing on the page competes with the message that these systems run reliably.",
      },
      {
        title: "Show the method",
        body: "The four-phase approach is laid out as a clear sequence so a buyer can see what working together looks like before the first call.",
      },
      {
        title: "Risk addressed directly",
        body: "A dedicated section answers the questions a cautious buyer asks: documentation, maintainability, security and ownership of the finished system.",
      },
    ],
    outcome: ["The site is live at migsak.com and routes enquiries to a consultation request."],
    productNotes: [
      "For a services company the website is the first sales conversation, so the layout follows the questions a cautious buyer brings: who is this for, how do they work, and what is the risk.",
    ],
    featured: true,
  },
  {
    slug: "linkedin-ai-agent",
    title: "LinkedIn outreach agent",
    client: "Allied Worldwide",
    engagement: "employment",
    engagementLabel: "At Allied Worldwide",
    categories: ["ai"],
    year: "2025",
    status: "Used in production",
    summary:
      "An AI agent that researched prospects and ran LinkedIn outreach, contributing to two enterprise client wins worth about ₹2 crore in new business.",
    tagline: "An agentic workflow that turned manual prospecting into a repeatable pipeline.",
    role: ["Workflow design", "Agent development", "Prompt design", "Reporting automation"],
    stack: ["Python", "LangChain", "Claude API", "Structured outputs"],
    links: [{ label: "View code on GitHub", href: "https://github.com/MystiFoe/Linkedin-retrieve" }],
    diagram: {
      title: "From target list to qualified conversation",
      nodes: [
        { label: "Research", detail: "Pull and enrich prospect profiles" },
        { label: "Qualify", detail: "Score fit with structured LLM output" },
        { label: "Outreach", detail: "Automated LinkedIn outreach per prospect" },
        { label: "Report", detail: "Automated pipeline reporting for the team" },
      ],
    },
    metrics: [
      { value: "₹2 Cr", label: "Approximate new business from two enterprise clients" },
      { value: "2", label: "Enterprise clients acquired through the pipeline" },
      { value: "5+ hrs", label: "Saved each week on manual reporting" },
    ],
    context: [
      "Outreach at Allied Worldwide was manual: find the right people, research each one, write a message, track replies in a spreadsheet. It did not scale, and the quality varied with whoever had time that week.",
    ],
    approach: [
      {
        title: "Break the job into steps an agent can own",
        body: "Prospect research, lead qualification, outreach and reporting became separate steps with structured outputs and error handling between them, so each one could be checked and improved on its own.",
      },
    ],
    outcome: [
      "The pipeline contributed to closing two enterprise clients worth roughly ₹2 crore in new business, and automated reporting saved the team more than five hours a week.",
    ],
    productNotes: [
      "The value was never the automation itself. It was getting the sales team in front of the right accounts sooner, and the two enterprise wins are what that looks like.",
    ],
    featured: true,
  },
  {
    slug: "battery-mes",
    title: "Battery pack MES",
    client: "Pravaig Dynamics",
    engagement: "employment",
    engagementLabel: "At Pravaig Dynamics",
    categories: ["platform"],
    year: "2025 to 2026",
    status: "In daily use on the factory floor",
    summary:
      "A manufacturing execution system for EV battery pack assembly, including a direct TCP integration with a Hioki battery tester for cell sorting.",
    tagline: "Production tracking for an EV factory floor, integrated with the test hardware the line already uses.",
    role: ["Requirements with production team", "System design", "Build", "Hardware integration", "Rollout"],
    stack: ["Python", "Streamlit", "SQLite", "SQL", "TCP sockets"],
    diagram: {
      title: "Line data in one place",
      nodes: [
        { label: "Hioki BT3562A", detail: "Cell readings over TCP" },
        { label: "Receiver", detail: "Background listener writing to its own database" },
        { label: "Cell sorting", detail: "Independent tab for grading cells" },
        { label: "Dashboards", detail: "Assembly progress and quality checkpoints" },
      ],
    },
    metrics: [
      { value: "50+", label: "Daily active users across the floor" },
      { value: "TCP", label: "Direct integration with the Hioki BT3562A tester" },
      { value: "1", label: "System replacing scattered sheets and manual logs" },
    ],
    context: [
      "Battery pack assembly was tracked across spreadsheets and handwritten logs, and cell test readings had to be copied off the tester by hand.",
    ],
    approach: [
      {
        title: "One place for line data",
        body: "Assembly progress, quality checkpoints and operational KPIs are tracked in real time in a single internal platform that the floor team uses every day.",
      },
      {
        title: "Read the hardware directly",
        body: "A background TCP receiver pulls readings from the Hioki BT3562A into a separate SQLite database that powers an independent cell sorting tab, so a tester issue never blocks the rest of the system.",
      },
    ],
    outcome: ["The MES is in daily use with more than 50 users and gives the team live visibility of assembly progress and quality checkpoints."],
    productNotes: [
      "Isolated the tester integration in its own process and database. Hardware is the least predictable part of a factory system, so it should fail on its own.",
    ],
    featured: false,
  },
  {
    slug: "pravaig-internal-stack",
    title: "Internal systems at Pravaig",
    client: "Pravaig Dynamics",
    engagement: "employment",
    engagementLabel: "At Pravaig Dynamics",
    categories: ["platform", "ai"],
    year: "2025 to 2026",
    status: "In production",
    summary:
      "The internal stack of a Series A EV startup, built and run solo: ERP, biometric attendance, AI camera surveillance, NAS, Google Workspace and marketing bots.",
    tagline: "Five-plus production systems shipped in the first six months, owned end to end.",
    role: ["Owner of internal systems", "Vendor replacement", "Infrastructure", "Automation"],
    stack: ["ERPNext", "Python", "Docker", "Frigate NVR", "TrueNAS", "Google Workspace", "ZKTeco"],
    diagram: {
      title: "What runs the company",
      nodes: [
        { label: "ERP and HR", detail: "ERPNext with in-house biometric attendance sync" },
        { label: "Surveillance", detail: "Frigate NVR across 52 IP cameras" },
        { label: "Storage", detail: "TrueNAS with automated backups" },
        { label: "Workspace", detail: "Company-wide Google Workspace migration" },
        { label: "Marketing", detail: "Instagram and Twitter automation bots" },
      ],
    },
    metrics: [
      { value: "5+", label: "Production systems shipped solo in six months" },
      { value: "52", label: "IP cameras running AI detection through Frigate" },
      { value: "1", label: "Paid attendance tool replaced with in-house software" },
    ],
    context: [
      "Pravaig is a Series A electric vehicle startup. Like most startups it needed real systems for HR, security, storage and marketing, without a team to build or run them.",
    ],
    approach: [
      {
        title: "Replace paid tools where it makes sense",
        body: "I built in-house software to manage the BioMax fingerprint device and sync attendance into ERPNext, which let the company drop a paid attendance suite during its move to self-hosted HR.",
      },
      {
        title: "Security on existing hardware",
        body: "Frigate NVR runs AI detection across all 52 CP Plus cameras at the office and factory, with recordings backed up to TrueNAS.",
      },
      {
        title: "Automate the repetitive work",
        body: "Instagram and Twitter bots handle routine marketing posts, and the Google Workspace migration moved the whole company onto one set of tools.",
      },
    ],
    outcome: ["These systems run the company day to day, and I own them from requirements through operations."],
    productNotes: [
      "Where a paid tool was doing a simple job, owning it was cheaper and easier to fit to how the company actually works.",
    ],
    featured: false,
  },
  {
    slug: "rag-support-platform",
    title: "RAG support platform",
    client: "Kovan Labs",
    engagement: "employment",
    engagementLabel: "At Kovan Labs",
    categories: ["ai"],
    year: "2024",
    status: "Delivered to US enterprise clients",
    summary:
      "Product management for a retrieval-augmented support platform for US enterprise clients that cut manual support workload by 65 percent.",
    tagline: "Owning delivery from discovery to production sign-off as a product manager intern.",
    role: ["Discovery", "PRDs", "Sprint planning", "UAT", "Production sign-off"],
    stack: ["RAG", "LLMs", "Python", "Vector database"],
    links: [{ label: "View related code", href: "https://github.com/MystiFoe/Customer-Support-Automation-using-RAG-Based-Bot" }],
    diagram: {
      title: "Support answers grounded in client docs",
      nodes: [
        { label: "Ingest", detail: "Client documentation chunked and indexed" },
        { label: "Retrieve", detail: "Relevant passages pulled per query" },
        { label: "Answer", detail: "LLM response grounded in retrieved context" },
        { label: "Review", detail: "UAT with client teams before sign-off" },
      ],
    },
    metrics: [
      { value: "65%", label: "Reduction in manual support workload in six months" },
      { value: "US", label: "Enterprise client base" },
      { value: "End to end", label: "Discovery through production sign-off" },
    ],
    context: ["Client support teams were answering the same questions from their own documentation again and again."],
    approach: [
      {
        title: "Own the delivery",
        body: "I ran discovery with clients, wrote the PRDs, planned sprints, coordinated UAT and handled production sign-off.",
      },
    ],
    outcome: ["Manual support workload dropped by 65 percent within six months of rollout."],
    productNotes: [],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Returns the next project in list order, wrapping around, for case study footers. */
export function getNextProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
}
