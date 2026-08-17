# Blue Margins — Product Requirements Document

## Original Problem Statement
Build a poetry landing page for Shalini Chaturvedi. Evolved into "Blue Margins" — a literary single-page static website featuring an ivory/blue aesthetic, watercolor margins, and a manuscript feel, deployed to Cloudflare Pages.

## Architecture
- **Frontend**: React (CRA + CRACO) with Tailwind CSS, served as a pure static site
- **Backend**: FastAPI — intentionally dormant/decoupled for Cloudflare static deployment
- **Database**: MongoDB — unused in current static deployment
- **Package manager**: npm (strict — no yarn, no --force, no --legacy-peer-deps)
- **Deployment target**: Cloudflare Pages

## Key Files
- `/app/frontend/src/content.js` — Single source of truth for all text, links, poems, essays
- `/app/frontend/src/components/bluemargins/*` — All section components (Nav, Hero, About, Poems, Books, Journal, Contact, Footer, Logo, Seal)
- `/app/frontend/src/App.css` — Global styles, scroll offsets, decorative CSS

## What's Been Implemented
- Full UI redesign to "Blue Margins" literary aesthetic (ivory/blue palette, sticky nav, paper-like styling)
- Watercolor hero image and author portrait (generated via Gemini Nano Banana)
- Static site cleanup: removed backend dependency, API calls, newsletter logic
- Real content: poems, essays/stories, book details, contact links in content.js
- Responsive modals for full poems and journal entries
- Sticky header navigation with correct scroll offsets
- Books-specific scroll-margin-top fix (3.5rem vs global 6rem) to ensure full book cover visibility on common laptop viewports (Aug 2026)

## Prioritized Backlog
- **P2**: Re-integrate newsletter subscription (user explicitly deferred for static deploy)

## Design Constraints
- `overflow-x: clip` on body — required for sticky nav; do not revert
- `scroll-margin-top: 6rem` global, `3.5rem` for #books — do not change without viewport testing
- No backend API calls unless user explicitly re-enables backend
- All content changes go through `content.js`, not hardcoded in components
