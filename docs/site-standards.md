# Site Standards

## Core Principle

Fast production does not mean simple, generic, or cheap-looking output.
Our goal is rapid premium production: visually strong, reusable, and operationally compact websites.

## Commercial Readiness

Every demo must feel commercially presentable before outreach.
A demo is outreach-ready only when it looks like paid work, not like a placeholder template.

## Visual Quality Expectations

Beauty, hair, makeup, skincare, clinic, and salon demos must be visually rich.
Visual density should come from intentional composition, strong media rhythm, typography hierarchy, and section contrast.

## Technical vs Product Quality

Build/check passing is the technical minimum, not the acceptance target.
Visual acceptance, conversion credibility, and page clarity are required for completion.

## Mandatory Product Orientation

Every site must be:
- mobile-first
- WhatsApp-first
- locally relevant
- visually credible

## Reusability Rule

Premium quality should come from reusable modules and strong standards, not ad-hoc one-off page styling.

## Asset and Media Standard

Use local assets whenever possible.

Supported formats:
- `jpg`
- `jpeg`
- `webp`
- `png`
- `mp4`
- `webm`

Asset structure:
- shared category assets: `public/assets/library/[category]/`
- business-specific assets: `public/assets/businesses/[slug]/`

Example categories:
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

Asset fallback priority:
1. business-specific local asset
2. shared local library asset
3. selected remote asset (`Pexels/Unsplash`) only if explicitly configured
4. art-directed visual fallback

Crude placeholders are never acceptable.
Never show “Görsel eklenecek”.
