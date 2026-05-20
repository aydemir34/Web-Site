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
- `DemoNotice`

## Asset onboarding
1. Put local assets under `public/assets/businesses/<business-slug>/`.
2. Set `visualProfile.heroMedia` and `visualProfile.gridImages` in `src/data/businesses.json`.
3. Keep file names stable so static routes continue working on Cloudflare Pages.
4. Do not use proprietary reference assets.

## Bulk business onboarding

The production source is `src/data/businesses.json`; CSV is the batch collection/import format.

Recommended CSV columns:
- Core: `businessName`, `slug`, `category`, `district`, `neighborhood`, `mainService`
- Contact: `phone`, `whatsapp`, `instagramUrl`, `mapUrl`, `mapEmbedUrl`, `address`, `googleReviewUrl`
- Lead score: `rating`, `reviewCount`, `hasWebsite`, `instagramActive`, `visualQuality`, `offerDepth`, `responseLikelihood`
- Demo direction: `themeId`, `archetype`, `tone`, `packageFit`, `hasProducts`
- Assets: `assetSet`, `heroMedia`, `gridImages`, `videos`, `ornamentStyle`
- Copy/SEO: `heroEyebrow`, `heroTitle`, `heroDescription`, `primaryCta`, `secondaryCta`, `ctaTitle`, `ctaDescription`, `ctaButtonText`, `seoTitle`, `seoDescription`, `ogImage`
- Services: `service1Name`, `service1Description`, `service1DetailBody`, `service1DetailPoints`, `service1BestFor`, `service1MediaTags`, `service1WhatsappMessage` up to `service5...`

Flow:
1. Collect lead data in CSV.
2. Normalize slugs, phones, WhatsApp numbers, Instagram URLs, and Google Maps URLs.
3. Dry-run import: `npm run import-businesses-csv -- path/to/businesses.csv`.
4. Run `npm run check`, `npm run build`, `npm run score-leads`, and `npm run export-demo-list`.
5. If the dry-run is correct, write import: `npm run import-businesses-csv -- path/to/businesses.csv --write`.
6. Pick the best leads, add local assets, then export the customer upload folder.

Useful current scripts:
- `npm run score-leads` ranks businesses from `leadSignals`.
- `npm run export-demo-list` prints the 3 demo URLs for every business.
- `npm run import-businesses-csv -- --template` prints the current header order.

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
