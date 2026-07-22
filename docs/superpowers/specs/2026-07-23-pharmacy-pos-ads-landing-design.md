# Pharmacy POS Ads Landing Page — Design

**Date:** 2026-07-23  
**Route:** `/pharmacy-pos`  
**Status:** Approved and implemented

## Goal

A conversion-focused MemoApp landing page for Google Ads targeting pharmacy / medicine-shop owners in Bangladesh. The page is **not** linked from site header, mobile nav, footer product links, or primary sitelinks navigation. Ads will deep-link to this URL.

## Decisions locked

| Decision       | Choice                               |
| -------------- | ------------------------------------ |
| Layout         | Conversion-focused (Approach 1)      |
| Language       | EN + BN via existing language toggle |
| Primary CTA    | Try MemoApp (`appLoginUrl`)          |
| Secondary CTA  | WhatsApp                             |
| Product visual | `public/Pharmacy.png`                |

## Out of scope

- Adding this route to main nav, mobile menu, or footer product links
- Long-form FAQ / pricing comparison on this page
- Separate pharmacy subdomain or campaign tracking params (can be added later via Ads URL)

## Page chrome

- **Header:** Logo (links home), language toggle, Try MemoApp button. No Features / Workflow / Pricing / FAQ / Privacy nav.
- **Footer:** Minimal — copyright + Privacy / Terms only (legal), no product link cluster that competes with CTA.
- No floating WhatsApp widget required if secondary CTA is visible in hero + final band (optional reuse of existing WhatsApp link helper).

## Sections

### 1. Hero

- Eyebrow: pharmacy POS / medicine shop focus
- Headline + short supporting sentence (EN + BN)
- CTA group: **Try MemoApp** (primary), **WhatsApp** (secondary)
- Dominant product image: `/Pharmacy.png` (desktop + mobile pharmacy POS mock)
- Visual language: existing MemoApp green + info accent; no purple/glow/card clutter in hero

### 2. Feature grid

Twelve pharmacy-specific features (bilingual). Each item: short title + one-line benefit.

1. Medicine MRP List
2. One-Click Product Creation
3. Smart Inventory Management
4. Pending Bill System
5. Multi Bill
6. Auto & Manual Price
7. Barcode Scanner Support
8. Return Product System
9. Offline Support
10. Business Dashboard
11. Role-Based Access Control
12. AI Assistant

Copy source (BN benefit lines provided by product owner; EN mirrors meaning).

### 3. Trust strip

Three short pharmacy-relevant proof points (e.g. faster counter billing, stock + MRP control, works offline).

### 4. Final CTA band

Repeat headline-lite + Try MemoApp + WhatsApp on dark secondary background.

## Technical plan

- `app/pharmacy-pos/page.tsx` — metadata + JSON-LD (WebPage / SoftwareApplication niche keywords for pharmacy POS)
- `components/landing/pharmacy-pos-page.tsx` (or `pharmacy-route-content.tsx`) — page UI
- Content under `lib/landing-content/en.ts` + `bn.ts` as `pharmacyPosPage` (or similar)
- SEO entry in `lib/schema.ts` `pageSeo` for title/description/keywords
- **Do not** add to `navItems` or footer `productLinks`
- Sitemap: include `/pharmacy-pos` so Ads/crawl can find it, but keep out of UI nav
- Reuse `LanguageProvider`, `LanguageToggle`, `appLoginUrl`, WhatsApp link builder patterns already in the repo
- Follow existing design tokens; use `rounded-2xl` max (no `rounded-4xl`)

## Success criteria

- Visiting `/pharmacy-pos` shows a polished pharmacy-specific page with EN/BN toggle
- Primary path is Try MemoApp; WhatsApp is always available as secondary
- `/Pharmacy.png` is the hero product visual
- Page is unreachable from normal site navigation
- Typecheck passes

## Open follow-ups (non-blocking)

- UTM-aware CTA URLs if Ads needs campaign attribution later
- `noindex` vs index: default **index** (real landing URL for Ads Quality); switch to `noindex` only if requested
