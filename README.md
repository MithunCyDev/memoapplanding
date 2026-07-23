# MemoApp Landing

SEO-friendly marketing site for **MemoApp** - AI-powered business management / POS software for retailers in Bangladesh.

**Live site:** [memoappbd.com](https://memoappbd.com)

---

## Tech stack

| Layer     | Tool                                        |
| --------- | ------------------------------------------- |
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| UI        | React, Tailwind CSS                         |
| Language  | TypeScript                                  |
| Linting   | ESLint (`eslint-config-next`)               |

## Getting started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm (ships with Node)

### Install

```bash
npm install
```

### Environment

Create a local `.env` file in the project root (never commit it - this repo is public):

```bash
NEXT_PUBLIC_SUPPORT_WHATSAPP_NUMBER=8801XXXXXXXXX
```

| Variable                              | Required | Description                                                                                    |
| ------------------------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPPORT_WHATSAPP_NUMBER` | Optional | WhatsApp number for the floating chat / support CTA (digits only, with country code as needed) |

> Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Do not put private API keys or tokens there.

### Develop

```bash
npm run dev
```

App runs at [http://localhost:3001](http://localhost:3001).

### Production build

```bash
npm run build
npm start
```

---

## Scripts

| Command             | Description                           |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Start local dev server on port `3001` |
| `npm run build`     | Create production build               |
| `npm start`         | Serve production build on port `3001` |
| `npm run lint`      | Run ESLint                            |
| `npm run typecheck` | Run TypeScript (`tsc --noEmit`)       |

---

## Project structure

```text
app/                      # App Router pages, layout, sitemap, robots
components/
  landing/                # Landing UI sections and shared chrome
  google-analytics.tsx    # Google Analytics (gtag) loader
  meta-pixel.tsx          # Meta / Facebook Pixel loader
lib/                      # Site config, content, schema, helpers
public/                   # Static assets (images, icons, logo)
docs/                     # Internal design / planning notes
```

Key config:

- `lib/site.ts` - site name, URL, keywords, contact and social links
- `app/layout.tsx` - root layout, global metadata, analytics mount
- `next.config.ts` - Next.js configuration

---

## Analytics

Both trackers are mounted in the root layout (`app/layout.tsx`):

- **Google Analytics** - `components/google-analytics.tsx` (measurement ID `G-LPQHRL9HJ5`)
- **Meta Pixel** - `components/meta-pixel.tsx`

These IDs are public by design (they ship to the browser). Update them in those component files if Events Manager or GA requires a change.

---

## Deployment

Deploy as a standard Next.js app (Vercel, Node host, or similar):

1. Set the same env vars in your host dashboard (names only - never paste real values into this README).
2. Build with `npm run build`.
3. Start with `npm start`, or use the platform Next.js preset.

Confirm the production domain matches `lib/site.ts` (`siteConfig.url`) for canonical and Open Graph URLs.

---

## Contributing

1. Create a branch from `main`.
2. Keep PRs focused; avoid committing `.env`, credentials, or generated build output.
3. Run `npm run lint` and `npm run typecheck` before opening a PR.

---

## License

ISC - see `package.json`.
