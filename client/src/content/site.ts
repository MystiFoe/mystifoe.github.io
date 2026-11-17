/** Global site facts: identity, contact channels, navigation. */

export const site = {
  name: "Giritharan Mani",
  shortName: "Giri",
  role: "Software Development Engineer II",
  location: "Bengaluru, India",
  email: "giritharanmani1@gmail.com",
  phone: "+91 87784 51561",
  phoneHref: "tel:+918778451561",
  calendly: "https://calendly.com/giritharanmani1",
  url: "https://giritharanmani-portfolio.vercel.app",
  resumeHref: "mailto:giritharanmani1@gmail.com?subject=Resume%20request",
  availability: "Open to SDE II and product roles in Bengaluru",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mystifoe/" },
    { label: "GitHub", href: "https://github.com/MystiFoe" },
    { label: "Kaggle", href: "https://www.kaggle.com/mystifoe77" },
  ],
} as const;

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Primary call to action used in the header, footer and page endings. */
export const primaryCta = { label: "Let's talk", href: "/contact" } as const;

/** Companies shown in the logo strip, in display order. Each needs an entry in logos.ts. */
export const clientNames = [
  "Pravaig Dynamics",
  "Energica Motor Company",
  "Recurva",
  "Allied Worldwide",
  "Kovan Labs",
  "Prathik Softnet",
  "Migsak",
  "Lenovo India",
  "Kyungpook National University",
] as const;
