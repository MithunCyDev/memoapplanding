# Pharmacy POS Ads Landing — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Ship conversion-focused `/pharmacy-pos` page per `docs/superpowers/specs/2026-07-23-pharmacy-pos-ads-landing-design.md`.

**Tech stack:** Next.js App Router, existing LanguageProvider, Tailwind tokens, `public/Pharmacy.png`.

## File map

| File                                       | Responsibility                             |
| ------------------------------------------ | ------------------------------------------ |
| `lib/landing-content/en.ts`                | `pharmacyPosPage` English copy             |
| `lib/landing-content/bn.ts`                | `pharmacyPosPage` Bangla copy              |
| `lib/schema.ts`                            | `pageSeo.pharmacyPos` + JSON-LD builder    |
| `app/sitemap.ts`                           | Include `/pharmacy-pos`                    |
| `components/landing/pharmacy-pos-page.tsx` | Ads chrome + hero + features + trust + CTA |
| `app/pharmacy-pos/page.tsx`                | Route, metadata, schema script             |

## Tasks

1. Add EN/BN `pharmacyPosPage` content (hero, 12 features, trust, final CTA).
2. Add SEO + schema + sitemap entry.
3. Build `PharmacyPosPage` UI (slim header, no main nav).
4. Wire `app/pharmacy-pos/page.tsx`.
5. Run `npm run typecheck`.

## Done when

- `/pharmacy-pos` renders bilingual pharmacy LP with Pharmacy.png
- Not linked from navItems / footer productLinks
- Typecheck passes
