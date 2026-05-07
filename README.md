# Local Beauty Demo Generator

Data-driven static demo site generator for beauty salons and aesthetic/skincare clinics.

## Stack
- Astro
- TypeScript
- Static output
- CSS variables + reusable components
- Cloudflare Pages compatible build (`dist/`)

## Routes
Each business generates 3 pages:
1. `/demo/[slug]/`
2. `/demo/[slug]/hizmetler/`
3. `/demo/[slug]/randevu/`

All demo pages are configured with `noindex, nofollow`.

## Data Sources
- Businesses: `src/data/businesses.json`
- Themes: `src/data/themes.json`

## Available themes
- `soft-beauty-blush`
- `soft-beauty-nude`
- `clean-clinic-white`
- `clean-clinic-mint`
- `soft-beauty-bridal`
- `soft-beauty-editorial`
- `clean-clinic-minimal`
- `product-led-beauty`
- `campaign-playful-premium`

## Design archetypes
- See `docs/design-references.md`
- Archetypes are normalized reference directions, not copied templates.

## Added visual modules
- `FloatingWhatsApp`
- `HeaderContact`
- `InstagramPreviewGrid` (manual image list, no API)
- `BackgroundOrnaments`
- `ServiceCarousel`
- `StyleVariantToggle`
- `DemoNotice`

## Asset onboarding
1. Put local assets under `public/assets/brands/<business-slug>/`.
2. Set `visualProfile.heroMedia` and `visualProfile.gridImages` in `src/data/businesses.json`.
3. Keep file names stable so static routes continue working on Cloudflare Pages.
4. Do not use proprietary reference assets.

## Variant preview
- Every demo page supports style preview query:
- `?variant=minimal`
- `?variant=editorial`
- `?variant=campaign`
- No duplicated pages are generated; variant is resolved from query param at runtime.

## Development
```bash
npm install
npm run dev
```

## Validation commands
```bash
npm run build
npm run check
npm run score-leads
npm run export-demo-list
```

## Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`
