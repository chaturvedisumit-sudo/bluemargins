# postcardsandpoetry — Poet Landing Page PRD

## Original problem statement
Landing page for poet **Shalini Chaturvedi** with 4 core sections (Home, Books, Poems, Shop) + Contact. Inspired by typewrittenlovenotes.com (NOT a copy). Coastal/seaside dark mood, simple, clean. Shop redirects to Amazon. Placeholder content for now.

## Site identity
- Brand: **postcardsandpoetry**
- Poet: Shalini Chaturvedi
- Mood: coastal/cinematic dark — abyssal navy (#040810) + warm sand accent (#D4B886)
- Typography: Cormorant Garamond (display/poetry) + Outfit (UI)

## Architecture
- Stack: React 19 (CRA) + FastAPI + MongoDB
- Frontend: single-page React landing assembled from section components in `/app/frontend/src/components/poetry/`
- Backend: `/api/contact` POST/GET, `/api/status` legacy, EmailStr validation
- Persistence: `contact_messages` collection in MongoDB

## User personas
1. Reader — discovers Shalini's work, reads sample poems, follows on socials
2. Buyer — clicks Amazon redirect to purchase a book
3. Fan — submits a contact form message (signed copies, requests)

## What's implemented (2026-06-11)
- Hero with poet image in postcard frame + signature & dual CTAs
- Books section: 2 upcoming + 3 published as elegant rows
- Poems: 1 award-winning featured poem + 4 selected poems
- Shop: 3 stylized book covers each linking to Amazon (new tab)
- Contact form (name/email/message) with sonner toasts + backend persistence
- Sticky glass nav with active-section tracking + mobile drawer
- Footer with name display + Instagram/Goodreads/Email links
- Reveal-on-scroll animations, postcard styling, grain texture
- Full data-testid coverage; 100% backend + 100% frontend tests passed (iteration_1)

## Prioritized backlog
### P1
- Replace Amazon placeholder URLs with actual product links once available
- Replace placeholder poems/books with real content from Shalini
- Add real email destination (forward `/api/contact` to inbox via Resend/SendGrid)

### P2
- Newsletter signup (email subscribe → list)
- Individual poem detail pages (`/poem/:id`) with full text
- Goodreads / Instagram OG meta tags & SEO basics
- CMS-lite admin panel to add new poems/books without code changes
- Signed copies / postcard merch listing with Stripe checkout

### P3
- RSS feed of new poems
- Audio recordings of poems read by the poet
- Multi-language (English / Hindi) toggle

## Next tasks
1. Collect Shalini's actual book metadata, Amazon ASINs, and a chosen set of poems
2. Wire `/api/contact` to a real email forwarder (Resend recommended)
3. Add SEO + social share meta tags
