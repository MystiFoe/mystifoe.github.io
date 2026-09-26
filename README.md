# Giritharan Mani, portfolio

Multi-page portfolio site: home, work, case studies, about and contact. React 18, TypeScript, Vite, Tailwind CSS and wouter, deployed as a static site on Vercel.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm test           # content and contact form tests
npm run typecheck  # TypeScript
npm run build      # production build into ./public
```

## Editing content

All copy lives in `client/src/content/`. Components only render it, so most updates never touch a component.

| File | What it holds |
| --- | --- |
| `site.ts` | Name, role, contact channels, socials, navigation, client names |
| `projects.ts` | Every case study: summary, role, stack, metrics, problem, approach, outcome, product decisions, images |
| `profile.ts` | Home headline, highlights, services, process, about text, experience, toolkit |
| `types.ts` | The content model the above files must follow |

To add a project, add an entry to `projects` in `projects.ts`. Set `featured: true` to show it on the home page; the first two featured projects get the large layout. A project needs either a `cover` screenshot or a `diagram`. Screenshots go in `attached_assets/work/` as `.webp` (1440 x 900 for desktop, 390 x 844 for phones) and are imported at the top of `projects.ts`.

The test suite checks that slugs are unique, every project has a visual and metrics, experience entries link to real case studies, and no copy contains em dashes or emoji.

## Contact form

The form validates with zod and then:

- posts JSON to `VITE_CONTACT_ENDPOINT` if it is set (Formspree, Web3Forms or any serverless function that accepts JSON), or
- opens the visitor's email client with the enquiry pre-filled if it is not.

To turn on direct delivery, create a form at a provider such as Formspree, then add `VITE_CONTACT_ENDPOINT` in Vercel under Project Settings, Environment Variables, and redeploy.

## Theme

Dark is the default. Visitors can switch to light from the header; the choice is remembered per browser. Colours are defined once as tokens in `client/src/index.css`.

## Project layout

```
client/
  index.html
  public/favicon.svg
  src/
    App.tsx                 routes (secondary pages are code-split)
    content/                all site copy and data
    components/site/        layout, device frames, project cards, diagrams, primitives
    components/ui/          shadcn/ui primitives (toast)
    lib/                    theme, page meta, contact submission, logger
    pages/                  Home, Work, CaseStudy, About, Contact, NotFound
    __tests__/              vitest suites
attached_assets/work/       project screenshots
vercel.json                 build output and SPA rewrites
```
