# Salim Benmokhtar — portfolio

A multipage portfolio for graphic design, art direction and AI-assisted web design &
front-end work. Bilingual (English / French), statically rendered, deployable on
Vercel or any Node host.

> Built with Next.js 16 (App Router), React 19 and hand-written CSS. No UI kit, no
> template — the whole design system lives in `app/globals.css`.

---

## The pages

| Route | What it does |
| --- | --- |
| `/` | Hero, *Who am I?*, *What I do* (4 services), selected portfolio, *My skills*, clients, *Get in touch* |
| `/about` | Portrait, long-form story, timeline, tools, principles, contact |
| `/services` | The four services in depth — deliverables, proof, four-step process, tools |
| `/portfolio` | All 9 projects with a discipline filter |
| `/portfolio/[slug]` | Project case page: brief, approach, quote, gallery, at-a-glance facts, next project |
| `/cv` | One-page printable CV — the *Print / save as PDF* button produces a clean A4 |
| `/contact` | Contact details plus a message form that composes a `mailto:` (nothing is stored) |

The navigation is exactly five entries — Accueil / À propos / Services / Portfolio /
Contact — with the CV kept as a secondary entry in the footer and the mobile sheet.
The old `/work` and `/work/[slug]` URLs 308-redirect to `/portfolio` on any server
host (a static export has no redirect layer, so the Pages build simply links to the
new paths).

Also generated: `sitemap.xml`, `robots.txt`, a web app manifest, `icon.svg`, and an
`og-default.jpg` social card.

## Bilingual, without a routing tax

Language is a client context (`app/providers.tsx`) persisted in `localStorage` under
`sb-lang`. On first visit it follows the browser (`fr*` → French, otherwise English).
Copy lives in two places:

- `lib/i18n.ts` — interface strings (`T.nav`, `T.hero`, …), each an `{ en, fr }` pair.
- `content/site.ts` — long-form content: projects, capabilities, process, career,
  skills, principles. Every project carries `role`, `summary`, `context`, `approach`,
  `craft` and `facts` in both languages.

`<html lang>` is updated on every switch, so screen readers and hyphenation follow.

## One page per job

Each page has a single responsibility, and the copy lives with the page that shows
it rather than in one giant home page:

- **Home** answers *who is this, can they help me, where do I look next*. Every band
  ends in a link to the page that goes deeper.
- **About** answers *who are they, really* — story, timeline, tools, principles.
- **Services** answers *what can I buy* — scope, deliverables, proof, process.
- **Portfolio** answers *show me* — the filterable index, then one documented case
  page per project.
- **Contact** answers *how do I reach them* — details plus a form that composes a
  `mailto:`.

Sections are shared components (`components/services.tsx` for the home/service bands,
`components/sections.tsx` for the editorial ones), so a band can move between pages
without being rewritten.

## Content is data, not markup

The four services, the six skill levels and the three *Who am I?* statements live in
`SERVICES`, `SKILL_LEVELS` and `WHO_AM_I` (same file). The home band, the `/services`
page and the schema.org block all read from those arrays.

Adding a project means adding one object to `PROJECTS` in `content/site.ts`. The work
index, the filter counts, the “next project” link, the CV's selected-work block and
`sitemap.xml` all derive from that array. Nothing else to touch.

```ts
{
  slug: 'my-project',
  title: 'My project',
  client: '…', year: '2026',
  categories: ['product'],        // product | games | brand
  featured: true,                 // shown on the home page
  cover: '/images/work/my.jpg', coverAlt: '…',
  cardSize: 'wide',               // wide (8 cols) | half (6) | std (4)
  role: { en: '…', fr: '…' },
  summary: { en: '…', fr: '…' },
  stack: 'React · Supabase',
  live: 'https://…', repo: 'https://…',
  detail: { context, approach, craft, facts, gallery, quote },
}
```

## Images

`public/images/` holds 51 optimised files (~8.5 MB) produced from the source
repositories by `tools/prepare-assets.mjs`:

| Source repo | What it contributes |
| --- | --- |
| `Let-s-Play` | platform, the three games, 8 board paintings, 5 card artworks |
| `Iris-studio-NEW` | Let’s Play × Algérie Télécom and 7ouma Arena × Djezzy campaigns, portrait |
| `egor-lobby-redesign` | lobby screenshots, EGOR mark |

Regenerate after changing any of those repos:

```bash
node tools/prepare-assets.mjs \
  --lp=/path/to/Let-s-Play \
  --iris=/path/to/Iris-studio-NEW \
  --egor=/path/to/egor-lobby-redesign
```

The social card (`public/images/og-default.jpg`) is composed by hand with
ImageMagick from the Sablier key art and the self-hosted Archivo / Instrument Serif
faces — regenerate it the same way if the positioning line ever changes.

The script needs ImageMagick (`convert`) and never upscales. It crops board art to
16:10, keeps card art at 3:4, caps width at 2,200 px and writes progressive JPEGs at
quality 82. `next/image` then serves AVIF/WebP with a 30-day cache.

## Design system, in short

- **Ground:** `#0b0a09`, warm off-white type, a fixed film-grain overlay.
- **Accent:** ember `#ff5a1f`; lime `#d9f26b` marks availability; violet gold only
  inside artwork.
- **Type:** Archivo Variable (display, width axis available), Instrument Serif italic
  for the single accent word, JetBrains Mono for labels. All self-hosted through
  Fontsource — no Google Fonts request, no layout shift.
- **Rhythm:** `.section` bands alternate dark and paper (`.on-paper` re-maps the whole
  palette through CSS variables), 12-column work grid, 3-up bento for capabilities.
- **Motion:** one shared reveal (`components/use-reveal.ts`, IntersectionObserver,
  reveals once), hovering never fights the reveal, and `prefers-reduced-motion`
  disables all of it.
- **Accessibility:** skip link, focus-visible rings, `aria-current` navigation,
  `aria-pressed` toggles, labelled form fields, AA-contrast secondary text, and a
  print stylesheet that drops the whole chrome.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export of every page
npm start
```

Node 22+ (see `.nvmrc`).

## Deploy

One codebase, two targets. The difference is a single environment variable.

### GitHub Pages (static export, live at `/My-portfolio`)

```bash
GITHUB_PAGES=true BASE_PATH=/My-portfolio \
NEXT_PUBLIC_SITE_URL=https://salimb-source.github.io/My-portfolio \
npm run build:pages      # → out/
```

`.github/workflows/deploy-pages.yml` does exactly this on every push to `main` and
publishes `out/` with `actions/deploy-pages`. **One manual step:** repo →
*Settings → Pages → Build and deployment → Source: **GitHub Actions***. Nothing else
is needed — do not choose “Deploy from a branch”.

What Pages changes, and why:

| Setting | Effect |
| --- | --- |
| `output: 'export'` | emits plain HTML instead of a server |
| `basePath` / `assetPrefix` | the project site lives at `/<repo>`, so URLs need that prefix |
| `images.unoptimized` | Pages can't run the optimiser; pre-sized JPEGs are served as-is |
| `headers()` dropped | custom headers need a server |
| `trailingSlash` | `/work/` style URLs, which Pages serves reliably |
| `.nojekyll` | stops Jekyll from stripping the `_next/` folder |

Image paths in `content/site.ts` stay written as `/images/…`. `lib/asset.ts` prepends
`NEXT_PUBLIC_BASE_PATH` at render time — that is the only place that knows about
deployment, and Next itself prefixes metadata/OG URLs.

### Vercel or any Node host (server build, image optimisation)

Import the repo — `vercel.json` is included — or run `npm run build && npm start`.
No environment variables required. `headers()` and `next/image` optimisation are
active in this mode, so nothing from the Pages list applies.

To serve a custom domain, set `NEXT_PUBLIC_SITE_URL` (used for canonical links, Open
Graph tags and the sitemap) and drop `BASE_PATH` if the site moves to a domain root.

### Preview the Pages export locally

```bash
npm run build:pages
mkdir -p /tmp/preview && cp -a out/. /tmp/preview/My-portfolio/
cd /tmp/preview && python3 -m http.server 8097
# → http://localhost:8097/My-portfolio/
```

## Contact details used on the site

Kept in one object (`SITE` in `content/site.ts`): email, phone, location, LinkedIn,
GitHub, Instagram. Change them there and every page, the footer and the schema.org
`Person` block follow.
