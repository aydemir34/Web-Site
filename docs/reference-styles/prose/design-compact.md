# Prose — Style Reference
> Organic luxury, soft earth tones. Imagine sunlight filtering through linen onto a stoneware table.

**Theme:** light

This design system evokes a sense of refined, organic luxury through its earthy color palette and bespoke typography. Soft, desaturated greens and beiges (#4d523c, #f1ece0) cradle content, while custom fonts, particularly the whisper-weight display typeface Saol, convey a premium, artisanal feel. Button-level details like the generous 60px radius create a distinctive, approachable tactility against an otherwise structured layout, grounding the brand in natural ease.

## Colors

| Name | Value | Role |
|------|-------|------|
| Pine Needle | `#4d523c` | Major text and brand accents; a muted, verdant green providing organic warmth to headings and links. |
| Powder Sand | `#f1ece0` | Subtle surface backgrounds and highlights, giving a soft, natural base for UI elements. |
| Lunar Dust | `#f9f7f2` | Clean primary background, a slightly off-white that adds warmth without starkness. |
| White Linen | `#ffffff` | Secondary surface background, contrasts gently with Lunar Dust, also used for button text. |
| Charcoal Bark | `#323429` | Primary text on light backgrounds and button fills; a very dark, desaturated gray that is softer than pure black. |
| Deep Moss | `#161716` | Darkest text and background for high-contrast elements, subtly colored rather than truly black. |
| Ash Grey | `#6c6c6c` | Subtle text and input colors for secondary information, providing clear readability without dominance. |
| Pale Mauve | `#ead7f3` | Internal UI background for distinct sections, adding a touch of muted color. |
| Sunken Orange | `#f69371` | Highlight accent color for specific textual elements, a warm pop of muted orange. |
| Stone Grey | `#a6a6a6` | Disabled states for buttons and subtle border details. |
| Shadow Tint | `#e2d9c2` | Subtle, diffused shadows, almost a light beige, contributing to the soft, natural aesthetic. |

## Typography

### Simplon Norm — Primary sans-serif for body text, navigation, and functional elements. Its range of weights and precise letter spacing ensures versatility from small captions to impactful headings.
- **Substitute:** Inter
- **Weights:** 300, 400, 500
- **Sizes:** 10px, 12px, 14px, 16px, 24px, 28px, 40px, 48px
- **Line height:** 0.86, 1.15, 1.30, 1.50, 2.00
- **Letter spacing:** -0.48px at 48px, -0.4px at 40px, -0.32px at 28px, -0.24px at 24px, 0.24px at 16px, 0.49px at 14px, 0.38px at 12px, 0.31px at 10px

### Saol — Signature serif for headings, where its light 300 weight against typical heading sizes creates a sophisticated, understated elegance. The generous negative letter spacing further enhances its delicate appearance. This is a deliberate choice for authority through restraint.
- **Substitute:** Playfair Display
- **Weights:** 300
- **Sizes:** 24px, 28px, 32px, 36px
- **Line height:** 1.10, 1.30
- **Letter spacing:** -0.96px at 36px, -0.62px at 28px, -0.42px at 24px

### Simplon Mono — Monospaced font for technical details or subtle accents, adding a touch of precision and contrast to the primary typefaces without being overly dominant. Its use is minimal.
- **Substitute:** Space Mono
- **Weights:** 400, 500
- **Sizes:** 10px, 12px, 14px, 16px
- **Line height:** 1.20, 1.50, 2.00
- **Letter spacing:** 0.83px at 16px, 0.83px at 14px, 0.71px at 12px, 0.63px at 10px

### Type Scale

| Role | Size | Line Height | Letter Spacing |
|------|------|-------------|----------------|
| caption | 10px | 1.5 | 0.31px |
| body | 14px | 1.5 | 0.49px |
| body-lg | 16px | 1.5 | 0.24px |
| subheading | 24px | 1.3 | -0.42px |
| heading | 28px | 1.3 | -0.62px |
| heading-lg | 32px | 1.3 | — |
| display | 48px | 0.86 | -0.96px |

## Spacing & Layout

**Base unit:** 8px

**Density:** comfortable

- **Card padding:** 16px

### Border Radius

- **cards:** 10px
- **buttons:** 60px
- **dialogs:** 10px

## Components

### Text Link Button
**Role:** Navigation, secondary actions

backgroundColor: rgba(0, 0, 0, 0) (transparent), color: #000000 (Black), border: none, padding: 0. Used for minimal, understated interactive elements that blend into textual content.

### Input Field
**Role:** User input

backgroundColor: rgba(0, 0, 0, 0) (transparent), color: #6c6c6c (Ash Grey), borderBottomColor: #6c6c6c (Ash Grey), borderRadius: 0px, paddingTop: 4px, paddingRight: 16px, paddingBottom: 4px, paddingLeft: 16px. Underlined input fields maintain a minimalist aesthetic.

### Offer Badge
**Role:** Promotional highlights

Circular badge with a pale yellowish-green background and bold text indicating discounts, often '60% OFF' and '+ FREE GIFT'.

### Navigation Link
**Role:** Primary site navigation

color: #000000 (Black), font family: Simplon Norm. Subtle, clear text links with an emphasis on content over decorative styling. Uses Simplon Norm at various weights and sizes depending on context.

## Do's and Don'ts

### Do
- Use Saol weight 300 with negative letter-spacing (-0.42 to -0.96px) for all primary headings (h1, h2) to establish a distinct, whisper-weight authority.
- Prioritize Charcoal Bark (#323429) for primary body text and Pine Needle (#4d523c) for emphasized text and links, to maintain the organic, refined palette.
- Apply a 60px border-radius to all primary call-to-action buttons, creating a soft, pill-shaped tactile feel.
- Employ Lunar Dust (#f9f7f2) as the default page background, and White Linen (#ffffff) for card or modal surfaces, creating subtle layering.
- Utilize an 8px base unit for all spacing, with common increments of 16px, 20px, 32px for larger element and section gaps.
- Ensure input fields are transparent with a #6c6c6c (Ash Grey) bottom border for a minimalist, integrated look.
- Incorporate the muted Sunken Orange (#f69371) sparingly for high-visibility accents, such as small promotional text or warnings, to provide gentle emphasis.

### Don't
- Do not use sharp, angular buttons; all interactive elements that are not pure text links should adopt the characteristic 60px or 50% border radius.
- Avoid stark white (#FFFFFF) for large background areas; instead, use the slightly warmer Lunar Dust (#f9f7f2) or Powder Sand (#f1ece0).
- Do not use highly saturated or vivid colors outside of the defined accent palette; maintain the brand's near-gray and muted chromatic aesthetic.
- Refrain from heavy shadows or harsh borders; elevation should be subtle, like the #e2d9c2 (Shadow Tint) used for modals.
- Avoid mixing Simplon Norm and Saol indiscriminately; Saol is reserved for display headings, while Simplon Norm handles everything else.
- Do not introduce new typefaces; the current selection (Simplon Norm, Saol, Simplon Mono) is specific and central to the brand identity.
- Do not overuse Simplon Mono; it is for specific, technical-looking details and should not compete with body or headline text.

## Imagery

The site predominantly uses product photography, often featuring custom-designed bottles and packaging in warm, natural light. Products are typically presented as contained compositions, either tightly cropped on a clean background or arranged aesthetically with other natural elements (like the comb and soap bar in the modal). Some imagery uses abstract gradients as backgrounds, suggesting a fluid, natural feel. Icons are minimal, subtle, and outline-based, blending into the refined aesthetic; they are not heavily featured. The overall role of imagery is to showcase the product's premium nature and bespoke appeal, less about lifestyle and more about the object itself.

## Layout

The page primarily uses a max-width contained layout, with content centered. The hero section often features a split layout with text on one side and a product visual on the other, or a centered headline over a background image. Sections alternate between light backgrounds and slightly darker, more muted tones, creating a gentle visual rhythm without harsh dividers. Content is often arranged in a classic text-left/image-right or vice-versa pattern, promoting easy readability. Navigation is a simple top bar, with elements subtly integrated rather than boldly highlighted. The overall density is comfortable, with generous breathing room around content blocks.

## Similar Brands

- **Aesop** — Shares a focus on luxury, organic feel, and a muted, earthy color palette with a strong brand specific typeface.
- **Byredo** — Similar high-end aesthetic with an emphasis on bespoke products, refined typography, and subtle, natural tones.
- **Glossier (early branding)** — Employs custom typography and a soft, approachable, yet premium visual style with a limited, specific color palette.
- **Farmacy Beauty** — Uses natural ingredient emphasis, clean packaging, and a similar blend of greens and neutrals for an organic, trusted feel.
