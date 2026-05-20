# Simay Sarıkaya Demo - AI Handoff

Last updated: 2026-05-21  
Project path: `/Users/aydemir/Documents/New project`  
Current active customer demo: `Simay Sarıkaya Hair & Makeup Studio`  
Demo slug: `simay-sarikaya-hair-makeup`

## 1. Purpose

This repository generates premium, data-driven, static demo websites for local Istanbul beauty businesses. The current priority is the Simay Sarıkaya Hair & Makeup Studio demo: a 3-page bridal/editorial website intended to look commercially presentable enough for outreach.

The business workflow is:

1. Find local leads.
2. Prepare a premium mockup/demo.
3. Ask the owner to review it.
4. If approved, replace demo visuals/content with the business-owned final material.
5. Deploy to Cloudflare Pages.
6. Maintain content manually; no CMS/admin panel in v1.

The demo must feel like paid premium work, not a generic AI template.

## 2. Non-Negotiable Project Rules

- Basic package demos have exactly 3 public pages:
  - Home
  - Services
  - Appointment & Contact
- Demo pages must remain `noindex, nofollow`.
- Production client pages may become indexable later.
- Business-specific content must live in `src/data/businesses.json` or notes under `docs/current-demo.md`.
- Do not hardcode a business inside generic reusable components unless explicitly requested.
- Do not add CMS, database, backend, booking engine, live Instagram feed, or e-commerce for v1.
- Do not fetch random remote placeholder images.
- Do not use real Instagram/customer imagery unless the user provides or approves rights.
- If assets are missing, use local shared assets or an art-directed fallback; never show crude empty boxes or large placeholder copy.
- Turkish-facing text must use correct Turkish characters.
- Public-facing Turkish CTA language should be polite/formal where possible:
  - Prefer `Alın`, `İnceleyin`, `Sorun`, `Görüntüleyin`.
  - Avoid blunt singular imperative copy like `Al`, `Bak`, `Sor`, `Gör`.
- Keep mobile header compact; visual header height should stay at or under about 64px.
- Visual acceptance matters as much as build success.

Mandatory docs to read before major design work:

- `docs/site-standards.md`
- `docs/page-blueprints.md`
- `docs/section-blueprints.md`
- `docs/component-standards.md`
- `docs/copy-rules.md`
- `docs/visual-acceptance-checklist.md`
- `docs/assets.md`
- `docs/current-demo.md`
- `docs/design-references.md`

## 3. Tech Stack And Commands

Stack:

- Astro
- TypeScript
- Static output
- CSS variables and component-scoped CSS
- JSON data source
- Cloudflare Pages compatible output

Primary scripts:

```bash
npm run check
npm run build
npm run dev -- --host 127.0.0.1
npm run build:simay-cloudflare
npm run export:simay-cloudflare
```

Validation baseline:

1. Run `npm run check`.
2. Run `npm run build`.
3. Preview:
   - `/demo/simay-sarikaya-hair-makeup/`
   - `/demo/simay-sarikaya-hair-makeup/hizmetler/`
   - `/demo/simay-sarikaya-hair-makeup/randevu/`
4. Confirm:
   - one H1 per page
   - demo pages remain `noindex, nofollow`
   - no horizontal overflow on mobile
   - sticky WhatsApp works
   - header phone/WhatsApp CTA works
   - Services page service selection works on desktop
   - Services page accordion works on mobile
   - media fallbacks do not create blank cells

Cloudflare delivery:

- Do not upload full `dist/` to the client as the final package.
- Full `dist/` can include unrelated routes or lab pages.
- For Simay direct upload, use the generated `cloudflare-simay/` package from the Simay export scripts.

## 4. Current Simay Business Data

Source of truth:

- `src/data/businesses.json`

Current key values:

- Business name: `Simay Sarıkaya Hair & Makeup Studio`
- Slug: `simay-sarikaya-hair-makeup`
- Category: `beauty-salon`
- District: `Gaziosmanpaşa`
- Neighborhood: `Sarıgöl`
- Main service: `Gelin Saçı ve Makyajı`
- Archetype: `soft-beauty-editorial`
- Theme: `bridal-editorial-luxe`
- Tone: `bridal-editorial`
- Package fit: `booking`
- Google rating signal: `4.6`
- Google review count signal: `120`

Current visual direction:

- bridal/editorial
- premium local trust
- WhatsApp-first conversion
- soft dark hero with editorial media
- ivory, pearl, blush, nude, warm taupe, soft brown, deep navy/ink accents
- no medical/clinic language
- no generic salon-template feeling

## 5. Current Public Routes

Simay customer-facing demo routes:

- Home: `/demo/simay-sarikaya-hair-makeup/`
- Services: `/demo/simay-sarikaya-hair-makeup/hizmetler/`
- Appointment & Contact: `/demo/simay-sarikaya-hair-makeup/randevu/`

These are generated from:

- `src/pages/demo/[slug]/index.astro`
- `src/pages/demo/[slug]/hizmetler.astro`
- `src/pages/demo/[slug]/randevu.astro`

The ritual/bridal version is selected when:

- `business.archetype === "soft-beauty-editorial"`
- `business.tone === "bridal-editorial"`

## 6. Important Component Map

Main active components for Simay:

- `src/components/SiteLayout.astro`
  - shared shell
  - header/nav
  - mobile menu behavior
  - layout-level SEO integration through page props
- `src/components/RitualHome.astro`
  - Simay home page
  - hero timing
  - proof strip
  - featured service shelf
  - before/after compare
  - editorial duo
  - process band
  - media story
  - reviews
  - final CTA
- `src/components/RitualServices.astro`
  - Simay Services page
  - service hero
  - desktop editorial service list
  - desktop service panels
  - mobile accordion services
  - Prova Günü Akışı
  - horizontal moving media/video section
  - services CTA
- `src/components/RitualContact.astro`
  - Appointment & Contact page
  - trust/contact layout
  - map/social/contact sections
- `src/components/FooterMega.astro`
  - shared footer
  - Simay ritual footer variant
  - mobile contact two-column arrangement
- `src/components/FloatingWhatsApp.astro`
  - sticky WhatsApp button
- `src/lib/assets.ts`
  - asset selection helpers
  - service media gallery source
  - video/grid/hero helpers
- `src/lib/seo.ts`
  - demo `noindex, nofollow`
  - canonical/OG metadata
  - local business schema

## 7. Asset Rules And Current Asset Notes

Preferred asset order:

1. Business-specific assets under `public/assets/businesses/[slug]/`
2. Shared category/library assets under `public/assets/library/[category]/`
3. CSS/art-directed fallback
4. Demo notice

Shared all-folder assets are heavily used:

- `public/assets/library/all/`

Recent Services video reel intentionally uses local video assets such as:

- `hair-washing-3.mp4`
- `makeup-2.mp4`
- `makeup-eye-1.webm`
- `makeup-eyeliner-1.mp4`
- `makeup-nail.webm`
- `hair-1.webm`
- plus other local vertical video fallbacks and selected vertical images when needed.

Important current working tree asset note:

- `public/assets/library/all/makeup-eyeb-2.jpg` appears deleted.
- `public/assets/library/all/makeup-eyebrow-3.jpg` appears untracked.
- These look like user-side asset changes or a rename-like local asset update. Do not revert them unless the user explicitly asks.

## 8. What Has Been Done So Far

### Earlier accepted work

- Simay demo was stabilized into a premium 3-page Astro demo.
- Header/mobile menu was tightened with fixed overlay, scroll lock, and close-on-link behavior.
- Header scroll behavior was fixed so it can recover from anywhere on long pages.
- WhatsApp icons were changed to real WhatsApp-style SVG glyphs, not generic chat bubbles.
- Home reviews/testimonials layout was repaired:
  - desktop image centered and constrained
  - mobile review cards stacked
- Services dossier/gallery was repaired:
  - no blank placeholder cells
  - render only valid images
  - runtime image errors hide broken slots and recompute `count-*`
- Contact page mobile hero was repaired without broad redesign.
- Simay-only Cloudflare export workflow was established:
  - use `cloudflare-simay/`
  - do not hand off raw `dist/` as customer upload package.

### Latest current changes

Home hero:

- Hero opens with image only.
- Text, CTA buttons, and mini gallery appear after a delay.
- Hero title is now:
  - `TELAŞSIZ SABAH`
  - `KUSURSUZ GÜN`
- Title is uppercase on both desktop and mobile.
- Line-height was increased so Turkish characters such as `Ü`, `Ğ`, and descenders do not collide visually.
- Desktop:
  - right-side mini gallery is larger
  - hero copy and CTA are lower
  - mini gallery appears sequentially
- Mobile:
  - title is lower and larger
  - CTA buttons are side-by-side
  - CTA buttons sit directly above the three mini images
  - mini images are near the lower end of the hero
  - spacing leaves room for the sticky WhatsApp button

Services page:

- Desktop service list was changed from card-like tabs into a reference-style editorial vertical list:
  - numbered rows
  - thin dividers
  - no rounded card boxes
  - left list top/bottom aligns with active panel
- Desktop service activation has deterministic effects:
  - service 01: stronger horizontal slide
  - service 02: blurred/soft reveal
  - service 03: scale reveal
  - service 04: upward editorial reveal
  - service 05: clip/wipe reveal
- The effect now animates copy and media separately so it is visually noticeable.
- Mobile service tabs became accordion sections:
  - one section open at a time
  - each row has number, service title, and arrow
  - compact paired media appears inside the open service
- `Prova Günü Akışı` steps reveal sequentially.
- A two-row horizontal moving media section was added below the flow:
  - top row moves left
  - bottom row moves right
  - videos loop muted/autoplay/playsinline
  - mobile video cards were enlarged to feel closer to social/story references.

Language:

- Public CTA language was softened from singular imperative to formal/plural:
  - `Al` -> `Alın`
  - `Bak` -> `İnceleyin`
  - `Sor` -> `Sorun`
  - `Gör` -> `Görüntüleyin`
- This was applied across shared components where relevant, not just the Simay page.

Footer:

- Mobile ritual footer contact area was changed to a two-column arrangement:
  - `İletişim` heading centered
  - phone/WhatsApp/Instagram on the left
  - location and Google Maps/Yol Tarifi on the right

## 9. Current Validation Evidence

Recent checks passed:

```bash
npm run check
npm run build
```

Recent build generated:

- `/demo/simay-sarikaya-hair-makeup/`
- `/demo/simay-sarikaya-hair-makeup/hizmetler/`
- `/demo/simay-sarikaya-hair-makeup/randevu/`
- `/index.html`

Recent browser QA findings:

- Mobile hero order is correct:
  - heading first
  - CTA row second
  - three mini images third
- Mobile hero uses two CTA columns.
- Mobile hero has no horizontal overflow.
- Three mini gallery images are visible.
- Services reel has 32 cards in the duplicated marquee structure.
- Services reel first mobile card measured around `169x301px`, making it larger than the earlier thumbnail-like version.
- Reel video sources are local library assets, not missing business-specific generated candidates.
- Console had no relevant error/warn logs during QA.

## 10. Current User Preferences And Acceptance Rules

The user is visually sensitive and direct. Treat their latest visual correction as authoritative.

Practical rules:

- Do not say a design is fixed just because it builds.
- Always check the rendered page after visual changes.
- Mobile hero composition matters a lot.
- If the user says CTA buttons should be above the images, put them directly above the images, not in a loosely related area.
- If the user says buttons should be side by side, do not stack them.
- If the user says a title should be uppercase on mobile and desktop, use the same uppercase text in both.
- For typography, check Turkish characters visually; line-height must avoid collisions.
- For media sections, avoid tiny thumbnail strips if the reference is large vertical social/video cards.
- For services media, use all available local videos before falling back to images.
- For section-scoped work, do not redesign unrelated sections.
- If the repo is dirty, do not reset or revert unrelated changes.

## 11. Known Risks And Things To Watch

- The current hero timing uses delayed reveal values in `RitualHome.astro`. If future edits add or remove `data-reveal` behavior, retest the first 3 seconds of page load.
- `display: contents` is used in mobile hero to control ordering of title, CTA row, and mini gallery. If the hero structure changes, mobile ordering can break.
- The sticky WhatsApp button can visually compete with the bottom-right mini gallery image. Keep bottom/right padding on the mobile mini gallery.
- The Services reel intentionally duplicates arrays for infinite marquee. If changing card count, ensure the animation distance remains compatible with duplicated content.
- `getVideoMedia` may produce pattern candidates for business-specific videos that do not exist. Current reel filters out `/assets/businesses/${business.slug}/` video candidates before building the marquee.
- Mobile footer contact layout is specific to `.ritual-footer`; avoid applying the same assumptions blindly to all footer variants.
- `dist/` is not customer-safe as a standalone upload folder. Use Simay export package for Cloudflare handoff.

## 12. Recommended Workflow For The Next AI

Before editing:

1. Read `AGENTS.md`.
2. Read all mandatory docs listed in section 2.
3. Inspect current business data in `src/data/businesses.json`.
4. Inspect the target component before patching.
5. Check `git status --short` and do not revert user changes.

For visual changes:

1. Make small, targeted edits.
2. Run `npm run check`.
3. Run `npm run build`.
4. Start local dev server:
   ```bash
   npm run dev -- --host 127.0.0.1
   ```
5. Browser-test desktop and mobile:
   - Home hero first viewport
   - Services page service list and accordion
   - Services media reel
   - Footer/contact area if touched
6. Check for:
   - horizontal overflow
   - overlap with sticky WhatsApp
   - text clipping
   - crude placeholders
   - broken Turkish characters
   - console errors/warnings

## 13. Do Not Do

- Do not replace the current premium editorial language with generic SaaS cards.
- Do not add debug controls to public-facing demo pages.
- Do not use random remote placeholder images.
- Do not hardcode future businesses into Simay-specific components.
- Do not remove `noindex, nofollow` from demo pages.
- Do not upload full `dist/` as the Simay customer package.
- Do not assume a passing build means visual acceptance.
- Do not undo the user’s local asset changes unless explicitly asked.

## 14. Quick File Checklist

If asked to continue Simay polish, start here:

- Home hero and homepage sections: `src/components/RitualHome.astro`
- Services page: `src/components/RitualServices.astro`
- Appointment/contact: `src/components/RitualContact.astro`
- Header/nav shell: `src/components/SiteLayout.astro`
- Footer: `src/components/FooterMega.astro`
- Simay data: `src/data/businesses.json`
- Asset helper logic: `src/lib/assets.ts`
- SEO/noindex logic: `src/lib/seo.ts`

If asked to prepare Cloudflare customer upload:

```bash
npm run build:simay-cloudflare
```

Then inspect/upload `cloudflare-simay/`, not full `dist/`.
