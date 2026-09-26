/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional JSON form endpoint (Formspree, Web3Forms or a serverless function) for the contact form. */
  readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
