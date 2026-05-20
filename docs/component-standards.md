# Component Standards

## Required Global Components

These components define the default production system and should be treated as required design building blocks.

- `SiteLayout`
- `Header`
- `FooterMega`
- `FloatingWhatsApp`
- `DemoNotice`
- `HeroEditorial`
- `FeaturedServices`
- `ServiceMenu`
- `ServiceDetailBlock`
- `WhyUsEditorial`
- `InstagramPreviewGrid`
- `GalleryStrip`
- `ContactInfoPanel`
- `MapEmbed`
- `AppointmentCTA`

## Usage Rules

- Do not redesign from scratch per business when a reusable component can solve the same problem.
- Each component must support data-driven variation (theme, order, copy, media, CTA).
- Components must preserve visual quality on mobile first, then desktop.
- Component fallback states must be aesthetic, never crude placeholders.

## Logo Rules

Header and footer should use business logo if available.

Logo lookup priority:
1. `/assets/businesses/[slug]/logo.svg`
2. `/assets/businesses/[slug]/logo.png`
3. `/assets/businesses/[slug]/logo.webp`

If no logo exists, use text logo fallback.
Mobile header height must stay compact even when logo is present.

## Floating WhatsApp Rules

`FloatingWhatsApp` should be icon-only in the standard system.

Requirements:
- official-looking WhatsApp SVG icon
- button color: `#25D366`
- clear contrast and tap-safe sizing

Message rules:
- general message must be Turkish and URL-encoded
- general template: `Merhaba, hizmetleriniz ve randevu bilgisi hakkında bilgi almak istiyorum.`
- service template: `Merhaba, {serviceName} hizmeti için randevu ve fiyat bilgisi almak istiyorum.`
- if a service needs a more helpful flow, define `whatsappMessage` on that service data item and let the helper prefer it before falling back to the generic service template

## Footer Standard (Documentation Baseline)

`FooterMega` must eventually include:
- brand summary
- main navigation
- services links
- contact info
- social links
- Google Maps / yol tarifi link
- copyright
- demo visual notice when needed

Mobile layout:
- keep brand/summary full width
- place Pages and Services side by side on narrow screens when there is enough width for two compact columns
- place Contact below them, spanning the full footer width
- set `min-width: 0` and wrapping rules on all footer columns so phone, map, and social text cannot push the viewport horizontally
