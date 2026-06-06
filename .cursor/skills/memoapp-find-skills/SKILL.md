---
name: memoapplanding-find-skills
description: >-
  Helps discover and install agent skills from the open skills ecosystem (skills.sh, npx skills).
  Use when the user asks how to do something that might have an installable skill, says "find a skill for",
  wants to extend Cursor capabilities, or asks for MemoApp-adjacent tooling (React/RTK, FastAPI, Dexie,
  Playwright, CI, accessibility).
---

# Find skills (MemoApp)

This skill helps you discover and install skills from the open agent skills ecosystem, with **MemoApp-flavored** search hints (React + Redux Toolkit, MUI, FastAPI, Dexie/sync, testing).

## When to use

Use when the user:

- Asks "how do I do X" where X might be a common task with an existing skill
- Says "find a skill for X" or "is there a skill for X"
- Asks "can you do X" where X is a specialized capability
- Expresses interest in extending agent capabilities
- Wants to search for tools, templates, or workflows
- Mentions they wish they had help with a specific domain (design, testing, deployment, etc.)

## What is the Skills CLI?

The Skills CLI (`npx skills`) is the package manager for the open agent skills ecosystem. Skills are modular packages that extend agent capabilities with specialized knowledge, workflows, and tools.

**Key commands:**

- `npx skills find [query]` — Search for skills interactively or by keyword
- `npx skills add <package>` — Install a skill from GitHub or other sources
- `npx skills check` — Check for skill updates
- `npx skills update` — Update all installed skills

**Browse skills at:** https://skills.sh/

## MemoApp: good starting queries

This repo uses **React + TypeScript**, **Redux Toolkit**, **MUI**, **Dexie/IndexedDB**, **Vite**, and a **FastAPI** backend. When searching, prefer queries that name the stack:

| Area           | Example `npx skills find …` queries                       |
| -------------- | --------------------------------------------------------- |
| Frontend       | `react performance`, `mui`, `redux toolkit`, `typescript` |
| Offline / data | `dexie`, `indexeddb`, `offline sync`                      |
| Backend        | `fastapi`, `pydantic`, `sqlalchemy`, `alembic`            |
| Testing / QA   | `playwright`, `e2e`, `accessibility`, `jest`              |
| CI / Git       | `github actions`, `ci cd`, `pr review`                    |
| Docs / product | `changelog`, `readme`, `api docs`                         |

**Project context (read if the task is MemoApp-specific):**

- Conventions and state policy: `.cursor/rules/project-conventions.mdc`, `docs/state-management.md`
- Installing a skill for the **whole machine** vs **this repo**: project skills live under `.cursor/skills/`; personal skills under `~/.cursor/skills/`

## How to help users find skills

### Step 1: Understand what they need

Identify:

1. The domain (e.g., React, testing, design, deployment)
2. The specific task (e.g., writing tests, creating animations, reviewing PRs)
3. Whether this is common enough that a skill likely exists

### Step 2: Check the leaderboard first

Before running a CLI search, check the [skills.sh leaderboard](https://skills.sh/) for widely used skills in that domain.

For example, top skills for web development include:

- `vercel-labs/agent-skills` — React, Next.js, web design (very high installs)
- `anthropics/skills` — Frontend design, document processing (very high installs)

### Step 3: Search for skills

If the leaderboard does not cover the need, run:

```bash
npx skills find [query]
```

Examples:

- "How do I make my React app faster?" → `npx skills find react performance`
- "Can you help with PR reviews?" → `npx skills find pr review`
- "I need a changelog" → `npx skills find changelog`

### Step 4: Verify quality before recommending

**Do not recommend a skill based solely on search results.** Always verify:

1. **Install count** — Prefer skills with 1K+ installs; be cautious under 100
2. **Source reputation** — Official or well-known publishers are safer than unknown authors
3. **Repository signals** — Very low-star or dormant repos deserve extra skepticism

### Step 5: Present options

Include:

1. Skill name and what it does
2. Install count and source (when known)
3. Install command
4. Link on skills.sh when available

Example:

```
Skill: react-best-practices — React / Next.js performance guidance from Vercel Engineering (~185K installs)

Install:
npx skills add vercel-labs/agent-skills@react-best-practices

More: https://skills.sh/vercel-labs/agent-skills/react-best-practices
```

### Step 6: Offer to install

If the user wants to proceed (global user install, non-interactive):

```bash
npx skills add <owner/repo@skill> -g -y
```

`-g` installs globally (user-level); `-y` skips prompts.

Use **project** installs only when you intentionally want the skill tracked in `.cursor/skills/` for the team — follow Cursor’s project skill layout for that path.

## Common skill categories

| Category        | Example queries                          |
| --------------- | ---------------------------------------- |
| Web Development | react, nextjs, typescript, css, tailwind |
| Testing         | testing, jest, playwright, e2e           |
| DevOps          | deploy, docker, kubernetes, ci-cd        |
| Documentation   | docs, readme, changelog, api-docs        |
| Code Quality    | review, lint, refactor, best-practices   |
| Design          | ui, ux, design-system, accessibility     |
| Productivity    | workflow, automation, git                |

## Search tips

1. Use specific keywords: "react testing" beats "testing" alone
2. Try synonyms: deploy / deployment / ci-cd
3. Check popular bundles: `vercel-labs/agent-skills`, `ComposioHQ/awesome-claude-skills`

## When no skills are found

1. Say no strong match turned up
2. Offer to do the task with general tooling and this repo’s conventions
3. Optional: suggest authoring a skill — `npx skills init my-skill-name` — plus adding it under `.cursor/skills/<name>/` for MemoApp if it should be shared
