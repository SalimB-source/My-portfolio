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
| `/` | Hero, selected work (7 projects), capabilities, method, clients, principles, CTA |
| `/work` | All 10 projects with a discipline filter |
| `/work/[slug]` | Project case page: brief, approach, quote, gallery, at-a-glance facts, next project |
| `/about` | Portrait, long-form story, timeline, tools, principles, contact |
| `/cv` | One-page printable CV — the *Print / save as PDF* button produces a clean A4 |
| `/contact` | Contact details plus a message form that composes a `mailto:` (nothing is stored) |

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

## Content is data, not markup

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

`public/images/` holds 52 optimised files (~8.7 MB) produced from the source
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

- **Vercel** — `vercel.json` is included; import the repo and deploy. The site URL is
  read from `SITE.siteUrl` in `content/site.ts` for canonical links, Open Graph and
  the sitemap, so update it once the final domain is known.
- **Any Node host** — `npm run build && npm start`.

`next/image` optimisation needs a server. On a purely static host, add
`images: { unoptimized: true }` to `next.config.mjs` (images are already sized for the
web) or export with `output: 'export'`.

## Contact details used on the site

Kept in one object (`SITE` in `content/site.ts`): email, phone, location, LinkedIn,
GitHub, Instagram. Change them there and every page, the footer and the schema.org
`Person` block follow.
