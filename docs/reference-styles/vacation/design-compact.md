# Vacation® — Style Reference
> Sun-kissed retro comfort

**Theme:** light

Vacation® embraces a nostalgic, playful aesthetic, evoking mid-century leisure with a modern e-commerce functional layer. Its visual language balances warm, sun-kissed neutrals with a single prominent yellow-gold accent for primary interactions. Typography is a key differentiator, combining a variety of custom serif and sans-serif fonts to create a distinct, editorial feel. Components are generally soft and rounded, with subtle shadow details that nod to physical objects rather than stark digital interfaces.

## Colors

| Name | Value | Role |
|------|-------|------|
| Midday Sand | `#f1d27a` | Primary action background, decorative borders, selected states — a warm, inviting yellow that evokes sunshine and retro leisure |
| Ocean Blue | `#23659f` | Outlined button borders, link text, decorative accents — a cool blue providing contrast and secondary interactive cues |
| Coral Sunset | `#d1796d` | Outlined button borders, decorative strokes |
| Breezy Teal | `#39aaa7` | Decorative borders and backgrounds |
| Electric Violet | `#0048ff` | Small functional indicators, button backgrounds for specific contexts |
| Graphite | `#333333` | Primary text, strong borders, icons, and significant UI elements. Provides strong contrast against lighter backgrounds |
| Parchment White | `#e5e7eb` | Page background, significant surface background, muted borders — a creamy off-white that softens the overall presentation |
| Cloud Cover | `#ffffff` | Input backgrounds, elevated card surfaces, strong UI highlights |
| Faded Cinder | `#6a6966` | Surface background for specific elements, subtle button backgrounds |
| Pale Ash | `#dddddd` | Subtle card borders and dividers |
| Slate Cloud | `#778899` | Card background for secondary content areas |
| Sky Haze | `#b0c4de` | Card background for tertiary content areas |

## Typography

### Helvetica Neue LT Std — Primary sans-serif for body text, navigation, and some headings. Its clean lines provide readability amidst the more decorative serifs.
- **Substitute:** Helvetica Neue, Arial
- **Weights:** 400, 700
- **Sizes:** 16px, 18px, 30px
- **Line height:** 0.80, 1.33, 1.50
- **Letter spacing:** -0.0300em at 30px, -0.0270em at 18px, -0.0160em at 16px

### ITCGaramondStd-LtCond — Distinctive serif for display headings and section titles. Its condensed and light weights create an editorial, almost classic magazine feel, making a statement without shouting.
- **Substitute:** Garamond, serif
- **Weights:** 300, 400, 500, 700
- **Sizes:** 14px, 16px, 18px, 20px, 30px, 32px, 36px, 48px, 64px, 120px
- **Line height:** 0.80, 0.86, 0.90, 1.00, 1.10, 1.11, 1.20, 1.33, 1.38, 1.50, 1.78
- **Letter spacing:** -0.0800em at 120px, -0.0400em at 64px, -0.0300em at 48px, -0.0270em at 36px, -0.0240em at 32px, -0.0200em at 30px, -0.0160em at 20px, -0.0130em at 18px, -0.0100em at 14px

### OptimaLTP — Secondary serif for smaller supporting text, labels, and some button text. Its subtle humanist lines add warmth and detail at smaller sizes.
- **Substitute:** Optima, serif
- **Weights:** 400, 500
- **Sizes:** 10px, 12px, 13px, 16px, 18px, 23px
- **Line height:** 1.00, 1.04, 1.20, 1.33, 1.50, 1.85
- **Letter spacing:** -0.0480em at 23px, -0.0400em at 18px, -0.0370em at 16px, -0.0300em at 13px, -0.0270em at 12px, 0.0400em at 10px

### sansItalic — Italic sans-serif used for specific callouts and decorative body text, adding a casual, handwritten feel.
- **Substitute:** Arial, sans-serif
- **Weights:** 500
- **Sizes:** 22px
- **Line height:** 1.00, 1.36
- **Letter spacing:** -0.0300em, -0.0250em

### Metropolis — Specific supporting text.
- **Substitute:** Arial, sans-serif
- **Weights:** 500
- **Sizes:** 14px
- **Line height:** 1.14
- **Letter spacing:** -0.0040em

### Arial — Arial — detected in extracted data but not described by AI
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.2

### Times — Times — detected in extracted data but not described by AI
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.2

### Type Scale

| Role | Size | Line Height | Letter Spacing |
|------|------|-------------|----------------|
| caption | 10px | 1 | 0.4px |
| body | 16px | 1.5 | -0.256px |
| subheading | 20px | 1.33 | -0.32px |
| heading-sm | 30px | 1.1 | -0.6px |
| heading | 36px | 0.9 | -0.972px |
| heading-lg | 48px | 0.8 | -1.44px |
| display | 120px | 0.86 | -9.6px |

## Spacing & Layout

**Density:** comfortable

- **Section gap:** 30px
- **Card padding:** 27px
- **Element gap:** 20px

### Border Radius

- **cards:** 5px
- **badges:** 0px
- **inputs:** 2px
- **buttons:** 9999px

## Components

### Pill Button - Midday Sand
**Role:** Primary call to action button.

Filled with Midday Sand (#f1d27a), text is Graphite (#333333). Has a 9999px border-radius creating a pill shape. Padding is 4px top, 30px horizontal, 0px bottom.

### Ghost Button - Light Text
**Role:** Secondary navigation or subtle actions on dark backgrounds.

Transparent background, text and border in Parchment White (#e5e7eb) with 0px radius. No padding specified, acts as text link.

### Coupon Card
**Role:** Promotional modal or featured content display.

Parchment White (#e5e7eb) background with 5px border-radius. Features a -2px -2px 0px 0px inset shadow of Faded Cinder (#76736e) giving a paper-like, slightly curled edge effect. Padded 27px on all sides.

### Text Input - Light
**Role:** Form text input field on light backgrounds.

White background with Graphite (#333333) text. Features a 2px border-radius and an input border of Graphite (#333333). Padded 6px top, 16px horizontal, 0px bottom.

### Text Input - Dark
**Role:** Form text input field on dark backgrounds.

Transparent background with Parchment White (#e5e7eb) text. Border is Pale Ash (#e5e7eb). Padded 4px top, 20px horizontal, 0px bottom. Placeholder text would inherit Parchment White for visibility.

### Circular Electric Violet Button
**Role:** Small, distinct interactive element, potentially for accessibility or unique actions.

Filled with Electric Violet (#0048ff) with 50% border-radius for a perfect circle. Has a 2px 2px 2px 0px shadow from rgba(0,0,0,0.75).

### Underlined Navigation Button
**Role:** Header or footer navigation items.

Transparent background, Graphite (#333333) text and border (0px radius). Acts as a text link with an explicit border-bottom for styling.

## Do's and Don'ts

### Do
- Use Midday Sand (#f1d27a) for all primary interactive elements, including button backgrounds and accent borders.
- Apply ITCGaramondStd-LtCond for display-level text to maintain the editorial, nostalgic feel, varying weights and letter-spacing as per type scale.
- Utilize a 9999px border-radius for all primary buttons and tags to create soft, pill-shaped components.
- Implement the -2px -2px 0px 0px inset shadow on elements requiring a 'physical' or 'coupon-like' visual edge.
- Maintain a comfortable density with element gaps of 20px and card padding of 27px, ensuring visual breathing room.
- For subtle accents, use Ocean Blue (#23659f) and Coral Sunset (#d1796d) as border colors for ghost buttons or link underlines.
- Prioritize Graphite (#333333) for all primary text content to ensure high contrast and readability on light backgrounds.

### Don't
- Avoid using stark white backgrounds (#ffffff) unless for specific input fields or elevated surfaces; prefer Parchment White (#e5e7eb) for general canvas.
- Do not use highly saturated, modern gradients; the system relies on solid colors and subtle vintage-inspired effects.
- Refrain from sharp, angular corners; components should generally feature rounded corners (5px for cards, 9999px for buttons).
- Do not choose system default fonts for headings or body text; always use the specified custom font families.
- Avoid heavy drop shadows for general elevation; use the subtle inset shadows or the specific rgba(0,0,0,0.75) 0px 1.5px 1.5px 0px shadow for buttons.
- Do not introduce new vibrant colors outside the defined accent palette; color should be used sparingly for specific functional or nostalgic emphasis.

## Elevation

- **Button - Midday Sand:** `rgba(0, 0, 0, 0.75) 0px 1.5px 1.5px 0px`
- **Circular Electric Violet Button:** `rgba(0, 0, 0, 0.75) 2px 2px 2px 0px`
- **Coupon Card:** `rgba(0, 0, 0, 0.5) -2px -2px 0px 0px inset`

## Surfaces

- **Canvas Base** (`#e5e7eb`) — Dominant page background, soft and inviting.
- **Elevated Card** (`#f1d27a`) — Background for primary interactive elements and promotional cards, providing visual warmth.
- **Input / Highlight** (`#ffffff`) — Input fields and surfaces requiring highest contrast or emphasis.
- **Secondary Card** (`#b0c4de`) — Background for secondary content cards, providing textural variation.

## Imagery

This site uses an eclectic mix of vintage-inspired photography and product shots, often with a golden-hour, sun-drenched aesthetic. Product photography is clean, typically showing items in isolated vignettes. Illustrations lean into a playful retro style, sometimes mimicking graphic elements from the 60s-80s (e.g., the coupon's barcode and dashed border). Icons are primarily simple, outlined, and monochromatic, matching the surrounding text. Imagery serves both decorative and explanatory roles, evoking a sense of nostalgia and aspiration for leisure.

## Layout

The page primarily utilizes a fluid, full-bleed layout rather than a fixed maximum width. The hero section often features large, impactful imagery or typography, sometimes with elements extending to the edges. Content sections tend to have consistent vertical spacing, often with alternating light/dark background bands that create a clear visual rhythm. Content arrangement frequently uses centered stacks for headlines and calls to action, or occasionally a text-left/image-right alternating pattern within sections. Navigation is a minimalist top bar with 'Menu' and 'Bag' links, avoiding dropdowns or complex mega-menus.

## Similar Brands

- **Glossier** — Similar approach to minimalist navigation, emphasis on product photography, and a distinct color palette focused on a dominant accent.
- **Summer Fridays** — Shares a sunny, aspirational lifestyle aesthetic. Use of warm neutrals and soft, approachable typography.
- **Madewell** — Editorial typography choices, combining different font styles for a brand-specific feel, and a focus on subtle textures and warm color palettes.
- **Harry's** — Clean product display, use of a single strong accent color (though different hue), and an e-commerce focus with a friendly, direct tone.
