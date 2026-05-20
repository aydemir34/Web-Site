# Local Asset Strategy

This project uses local-first assets under `public/assets/`.

## Supported Formats

- `jpg`
- `jpeg`
- `webp`
- `png`
- `mp4`
- `webm`

## Folder Structure

Shared category assets:
- `public/assets/library/[category]/`

Business-specific assets:
- `public/assets/businesses/[slug]/`

## Asset Category Examples

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

## Naming Convention

Use descriptive kebab-case naming:
- `hero-hair-makeup-01.jpg`
- `hero-bridal-makeup-01.webp`
- `service-nails-protez-tirnak-01.jpg`
- `service-skincare-cilt-bakimi-01.webp`
- `grid-hair-makeup-01.jpg`
- `video-makeup-process-01.mp4`
- `reel-nails-process-01.webm`
- `background-silk-blush-01.jpg`
- `logo.png`

## Fallback Priority

1. business-specific local asset
2. shared local library asset
3. selected `Pexels/Unsplash` remote asset only if explicitly configured
4. art-directed visual fallback

Never use crude placeholders.
Never show “Görsel eklenecek”.

## Logo Rules

Header and footer should render business logo when available.

Lookup order:
1. `/assets/businesses/[slug]/logo.svg`
2. `/assets/businesses/[slug]/logo.png`
3. `/assets/businesses/[slug]/logo.webp`

If no logo is available, render text logo fallback.
Mobile header must stay compact even with logo.

## Data Mapping

Set these fields in `src/data/businesses.json`:
- `visualProfile.heroMedia`
- `visualProfile.gridImages`
- `visualProfile.videos`

Primary manifest file:
- `src/data/assets.json`

Role-based asset entries support:
- `src`
- `type` (`image` | `video` | `logo`)
- `category`
- `role` (`logo` | `hero` | `featured` | `service` | `grid` | `video` | `contact` | `background`)
- `tags`
- `serviceSlug` (optional)
- `alt`
- `source` (optional)
- `isRemote` (optional)

Selection priority:
1. `serviceSlug` match
2. tag match
3. category match
4. fallback chain from helper logic

## Compliance

- Do not add copyrighted media.
- Do not fetch random remote images.
- Demos stay static and Cloudflare Pages compatible.

## Export Safety

- Export and upload scripts must collect assets from `src`, `poster`, and `srcset` references.
- When a component uses desktop/mobile `<picture>` sources, verify both variants are copied into the customer upload folder.
- CSS aspect ratios should match the dominant asset ratio. For example, 4:3 before/after images should render in a 4:3 desktop frame.
