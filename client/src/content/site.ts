/** Global site facts: identity, contact channels, navigation. */

export const site = {
  name: "Giritharan Mani",
  shortName: "Giri",
  role: "Product Engineer",
  location: "Bengaluru, India",
  email: "giritharanmani1@gmail.com",
  phone: "+91 87784 51561",
  phoneHref: "tel:+918778451561",
  calendly: "https://calendly.com/giritharanmani1",
  url: "https://giritharanmani-portfolio.vercel.app",
  availability: "Taking on new freelance projects",
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

export const clientNames = [
  "Recurva",
  "Prathik Softnet",
  "Migsak",
  "Energica Motor Company",
  "Pravaig Dynamics",
  "Allied Worldwide",
  "Kovan Labs",
] as const;
