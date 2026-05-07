# AGENTS.md

## Project

This repository generates premium-looking, data-driven, static demo websites for local beauty salons, hair & makeup studios, skincare clinics, and aesthetic centers in Istanbul.

The business model is high-throughput local website production:
- First batch: 50 leads
- First mockups: 10 demos
- Minimum setup fee: 5,000 TRY
- Minimum monthly maintenance fee: 750 TRY
- No client CMS or admin panel in v1
- Updates are handled by the service provider
- Sites deploy to Cloudflare Pages

## Core Product Rules

Every basic package demo must have exactly 3 public pages:
- Home
- Services
- Appointment & Contact

Demo pages must use `noindex, nofollow`.

Production client pages may be indexable.

Each business must be configured from data, not hardcoded inside components.

Avoid one-off page builds unless the user explicitly requests a custom project.

Prefer reusable components, data-driven rendering, CSS variables, static output, and Cloudflare Pages compatibility.

## Required Reading Before Design Work

Before building or redesigning any demo, read these files completely:
- `docs/site-standards.md`
- `docs/page-blueprints.md`
- `docs/section-blueprints.md`
- `docs/component-standards.md`
- `docs/copy-rules.md`
- `docs/visual-acceptance-checklist.md`
- `docs/assets.md`

These documents are mandatory quality baselines for all future demos.

## Business-Specific Data Rules

Business-specific details must live in:
- `src/data/businesses.json`
- optional working notes under `docs/current-demo.md`

Do not hardcode a specific business inside project instructions, layouts, or reusable components.

When working on a specific business, read its data object and map it to:
- one archetype
- one theme
- one tone
- one package fit
- one visual profile

Every business should include, where available:
- business name
- slug
- district
- neighborhood
- category
- phone
- WhatsApp
- Instagram
- Google Maps URL
- website status
- rating
- review count
- services
- main service
- package fit
- archetype
- theme
- tone
- SEO title
- SEO description

## Turkish Copy Rules

All Turkish-facing text must use correct Turkish characters.

Always use:
- ç, ğ, ı, İ, ö, ş, ü

Do not output Turkish UI copy without proper Turkish characters.

Examples:
- "Ana Sayfa", not "Ana Sayfa" with broken transliteration
- "Hizmetler", not "Hizmetler" without character errors
- "Randevu & İletişim", not "Randevu & Iletisim"
- "En Çok Tercih Edilen Hizmetler", not "En Cok Tercih Edilen Hizmetler"
- "Görsel eklenecek", not "Gorsel eklenecek"

## Visual Acceptance Rules

A demo is not acceptable just because it builds successfully.

For beauty, bridal, hair & makeup, skincare, and aesthetic demos, the first screen must look commercially presentable before outreach.

Reject outputs that look like:
- generic rounded card layouts
- empty placeholder boxes
- oversized mobile headers
- weak hero sections
- plain SaaS landing pages
- low-density text-only mockups

If no real image exists, create an art-directed visual fallback component instead of showing an empty placeholder.

The fallback must include theme-specific shapes, texture, framing, and small editorial labels. It must never rely on large literal text such as “Görsel eklenecek”.

The user-facing demo must feel suitable to send to a business owner.

## Mobile Header Rules

Mobile headers must be compact.

Avoid stacking large brand, subtitle, phone, WhatsApp, and nav pills into a tall block.

On mobile:
- brand name should be readable but compact
- subtitle should be optional or small
- primary CTA should not dominate the header
- navigation should not look like oversized buttons
- sticky WhatsApp already handles the main conversion action
- mobile header visual height must stay at or under 64px

## Design Quality

Avoid generic AI-looking sites. The design must feel intentional, premium, mobile-first, and locally relevant.

Use:
- strong first screen
- expressive but readable typography
- atmospheric backgrounds
- elegant service cards
- trust badges
- WhatsApp-first conversion
- location-aware SEO copy
- subtle meaningful motion
- theme-controlled visual variety

Avoid:
- generic purple gradients
- "Welcome to" headlines
- "Your trusted partner" clichés
- flat template-looking layouts
- excessive animations
- stock-photo overload
- medical or beauty claims that imply guaranteed outcomes

## Design Reference Rules

External references are inspiration only and must be normalized into reusable local-business archetypes.

Main design summary:
- `docs/design-references.md`

Raw reference files live under:
- `docs/reference-styles/[reference-name]/design-compact.md`
- `docs/reference-styles/[reference-name]/design-extended.md`
- `docs/reference-styles/[reference-name]/tokens-compact.json`
- `docs/reference-styles/[reference-name]/tokens-extended.json`

Use `docs/design-references.md` first.

Use `design-compact.md` for normal design decisions.

Use `design-extended.md` only for deeper redesigns or component-level refinement.

Use token JSON files only to translate colors, spacing, typography, and shape values into this project’s own theme system.

Do not copy:
- exact page layouts
- proprietary assets
- proprietary font systems
- brand-specific wording
- unique illustrations
- one-to-one animation sequences
- full page structures

## Demo UI Rules

Do not show development-only style variant controls in the user-facing demo.
Do not render debug UI controls in screenshots or production-like previews.

If visual variants exist, they must be hidden from normal visitors and only accessible through development logic or query parameters.

For beauty and bridal demos, prefer visually rich editorial composition over generic card-first layouts.

## Turkish UI Rules

All Turkish-facing content must use correct Turkish characters.
Use proper Turkish characters in component copy, JSON data copy, placeholders, and CTA labels.

Never output broken Turkish transliterations.

## Placeholder Visual Rules

If no image or video asset exists, use an elegant branded visual placeholder.
Do not show crude empty blocks or large literal placeholder text such as “Görsel eklenecek”.

Placeholders must still feel premium, intentional, and on-brand.

Placeholder states must preserve hierarchy, spacing, and atmosphere on mobile as well as desktop.

## Beauty Demo Quality Rules

For bridal, hair & makeup, and beauty demos:
- visual quality must be high
- hero composition must feel editorial
- layouts must avoid generic SaaS or agency card patterns
- section rhythm and atmosphere matter as much as content
- build/check passing alone is never considered final visual acceptance
- generic rounded card stacks are not commercially acceptable
- empty or crude placeholder blocks are not acceptable
- mobile header must stay compact and uncluttered
- demos intended for outreach must reach premium visual quality before sharing

## Archetypes

Map each business to one archetype:
- `soft-beauty-editorial`
- `clean-clinic-minimal`
- `product-led-beauty`
- `campaign-playful-premium`

Use `soft-beauty-editorial` for:
- bridal hair & makeup studios
- beauty salons
- makeup artists
- Instagram-heavy visual businesses
- special occasion preparation businesses

Use `clean-clinic-minimal` for:
- skincare clinics
- laser epilation centers
- medical aesthetic centers
- dermocosmetic service businesses

Use `product-led-beauty` for:
- salons selling products
- skincare/haircare product businesses
- beauty centers with home-care products

Use `campaign-playful-premium` only for:
- strong social-media brands
- youthful campaign-heavy local brands
- premium demos where a bold visual direction is explicitly useful

## Theme Rules

Themes must be implemented through data and CSS variables.

Themes should control:
- color palette
- typography pairing
- hero variant
- card style
- background ornament style
- CTA style
- section rhythm
- optional visual modules

Do not create a new hardcoded component for every business.

If a new visual direction is needed, create or extend a reusable theme instead.

## Asset Rules

Use shared assets under category-based library paths:
- `public/assets/library/[category]/`

Common categories:
- `hair-makeup`
- `bridal-makeup`
- `nails`
- `lashes-brows`
- `skincare`
- `laser-epilation`
- `med-aesthetic`
- `clinic`
- `spa`
- `products`
- `interiors`
- `contact-location`

Use business-specific assets only when provided:
- `public/assets/businesses/[slug]/`

Asset fallback order:
1. business-specific asset
2. shared library asset
3. CSS visual placeholder
4. demo notice

Do not fetch random remote placeholder images.

Do not use real Instagram or customer images unless the user explicitly provides them or confirms usage rights.

If demo visuals are not business-owned, show a demo notice such as:
“Demo görseller temsili olarak kullanılmıştır. Yayın öncesi işletmenin kendi görselleriyle değiştirilebilir.”

Follow clear naming:
- `hero-bridal-01.jpg`
- `hero-clinic-01.jpg`
- `service-makeup-01.jpg`
- `service-hair-01.jpg`
- `service-skincare-01.jpg`
- `grid-01.jpg`
- `grid-02.jpg`
- `reel-01.mp4`
- `bg-silk-01.jpg`

## Required Global Components

Every demo site should include:
- sticky WhatsApp button
- header phone or WhatsApp CTA
- local SEO metadata
- demo noindex behavior
- mobile-first layout
- accessible navigation
- clear service navigation
- appointment/contact CTA

Use manual Instagram preview grids when Instagram exists.

Do not use a live Instagram API/feed in v1.

## SEO Rules

Every generated site must include:
- unique title
- unique meta description
- canonical URL placeholder
- Open Graph tags
- local business schema where practical
- service-specific H1/H2 structure
- district and neighborhood in copy where natural
- meaningful image alt text
- sitemap-ready route structure

Do not keyword-stuff.

Do not make medical, beauty, or transformation guarantees.

Avoid claims like:
- guaranteed result
- permanent solution
- best in Istanbul
- medically proven unless evidence is provided
- before/after claims unless approved real assets are provided

## Technical Stack

Prefer:
- Astro
- TypeScript
- static output
- CSS variables
- reusable components
- JSON/CSV data source
- Cloudflare Pages compatible build

Avoid in v1:
- backend
- database
- customer admin panel
- heavyweight e-commerce
- real booking engine
- live Instagram API
- broad try/catch blocks
- hardcoded business-specific content inside components

## Implementation Rules

Deliver working code, not only a plan.

Read existing files before editing.

Reuse existing components and helpers.

Keep type safety.

Prefer small, coherent changes over large speculative rewrites.

Do not revert unrelated user changes.

Do not use destructive git commands.

Run build/type/lint checks when available.

If validation cannot run, explain the reason and the next best check.

## Validation

After meaningful changes, validate:
- build passes
- demo routes render
- demo pages remain noindex
- sticky WhatsApp works
- header CTA works
- mobile layout has no horizontal overflow
- service cards are usable on mobile
- placeholder visuals do not break layout
- SEO metadata exists

When visual changes are made, inspect the result for:
- layout clipping
- spacing problems
- poor contrast
- sticky CTA overlap
- generic/template-looking sections
- mobile usability issues

## Output Style

When finished, summarize:
- what changed
- where it changed
- how to run it
- what was validated
- any remaining risks or missing assets
