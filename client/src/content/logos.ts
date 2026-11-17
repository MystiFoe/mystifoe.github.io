/**
 * Company logos, keyed by the company name used across the content files.
 * Logos for Recurva, Prathik Softnet and Migsak are cropped from their own live websites.
 * `tile` sets the background a logo needs to stay legible in both themes.
 */
import pravaig from "@assets/logos/pravaig.webp";
import energica from "@assets/logos/energica.webp";
import allied from "@assets/logos/allied.webp";
import kovan from "@assets/logos/kovan.webp";
import knu from "@assets/logos/knu.webp";
import lenovo from "@assets/logos/lenovo.webp";
import recurva from "@assets/logos/recurva.webp";
import prathik from "@assets/logos/prathik.webp";
import migsak from "@assets/logos/migsak.webp";

export interface CompanyLogo {
  name: string;
  src: string;
  tile: "light" | "dark" | "brand";
  /** Square marks fill the tile; wordmarks get side padding. */
  square?: boolean;
  /** A tighter crop of the mark for small avatars, when the full logo is a wide wordmark. */
  url?: string;
}

export const logos: Record<string, CompanyLogo> = {
  "Pravaig Dynamics": { name: "Pravaig Dynamics", src: pravaig, tile: "brand", square: true, url: "https://pravaig.com" },
  "Energica Motor Company": { name: "Energica Motor Company", src: energica, tile: "dark", url: "https://energicamotor.com" },
  "Allied Worldwide": { name: "Allied Worldwide", src: allied, tile: "light" },
  "Kovan Labs": { name: "Kovan Labs", src: kovan, tile: "light" },
  "Kyungpook National University": { name: "Kyungpook National University", src: knu, tile: "light" },
  "Lenovo India": { name: "Lenovo India", src: lenovo, tile: "light" },
  Recurva: { name: "Recurva", src: recurva, tile: "light", url: "https://recurva.in" },
  "Prathik Softnet": { name: "Prathik Softnet", src: prathik, tile: "light", url: "https://prathiksoftnet.com" },
  Migsak: { name: "Migsak", src: migsak, tile: "light", url: "https://migsak.com" },
};

export function getLogo(company: string): CompanyLogo | undefined {
  return logos[company];
}
