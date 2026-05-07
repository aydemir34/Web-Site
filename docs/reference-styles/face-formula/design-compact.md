# Face Formula — Style Reference
> serene Scandinavian minimalist

**Theme:** light

Face Formula cultivates a natural, understated aesthetic with a muted color palette dominated by cool greys and subtle blue-greys, echoing its Norwegian roots. Typography combines a classic serif for impactful headlines with a clean sans-serif for body text, creating a balanced and readable experience. Design elements are minimal, favoring delicate borders and ample white space over bold colors or heavy shadows. Components are lightweight, emphasizing content and a serene visual atmosphere.

## Colors

| Name | Value | Role |
|------|-------|------|
| Canvas White | `#ffffff` | Primary page background, elevated card surfaces |
| Ghost Fog | `#f2f5f8` | Subtle background panels, light hover states, decorative borders. This is a very light, almost white grey |
| Border Mist | `#e6ebee` | Secondary background panels, subtle section dividers |
| Deep Ocean | `#3b505a` | Primary text color, bold accents, brand elements, active states. This particular cool blue-grey defines the brand's primary visual identity |
| Text Slate | `#202f3b` | Darkest text for contrast on light backgrounds |
| Link Blue | `#58737e` | Secondary text, muted links, subtle button borders |
| Light Steel | `#cfdce7` | Subtle button borders, decorative strokes, light element outlines |
| Black Ink | `#000000` | Iconography, strong text emphasis, borders on dark elements |

## Typography

### Libre Caslon Condensed — Headline typeface. Its delicate, almost whispery quality (despite large sizes) evokes a crafted, sophisticated brand rather than shouting for attention. letter-spacing reduces at smaller headline sizes.
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 32px, 52px, 120px
- **Line height:** 1.00, 1.10, 1.20
- **Letter spacing:** -0.64, -0.52, -1.2

### Circular Pro — Body copy, navigation, buttons, and all functional text. The slightly wider letter spacing gives it an airy, open feel, enhancing the minimalist aesthetic.
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 12px, 13px, 15px, 16px
- **Line height:** 1.00, 1.40
- **Letter spacing:** 0.12, 0.26, 0.3, 2.4

### Type Scale

| Role | Size | Line Height | Letter Spacing |
|------|------|-------------|----------------|
| caption | 12px | 1 | 0.12px |
| heading | 32px | 1.2 | -0.64px |
| heading-lg | 52px | 1.1 | -0.52px |
| display | 120px | 1 | -1.2px |

## Spacing & Layout

**Base unit:** 8px

**Density:** comfortable

- **Section gap:** 32px
- **Card padding:** 0px
- **Element gap:** 16px

### Border Radius

- **none:** 0px

## Components

### Ghost Navigation Button (Light)
**Role:** Header navigation links, inline text links.

backgroundColor: rgba(0, 0, 0, 0), color: Deep Ocean (#3b505a), border: none, padding: 0px.

### Ghost Navigation Button (Dark)
**Role:** Contextual navigation links against dark hero backgrounds.

backgroundColor: rgba(0, 0, 0, 0), color: Ghost Fog (#f2f5f8), border: none, padding: 0px.

### Contained Button
**Role:** Secondary action button for interactive elements.

backgroundColor: Ghost Fog (#f2f5f8), color: Link Blue (#58737e), border: none, padding: 0px 47.5px.

### Product Input Field
**Role:** Text input areas with a subtle border for user interaction.

backgroundColor: rgba(0, 0, 0, 0), color: Deep Ocean (#3b505a), borderBottom: 1px solid Deep Ocean (#3b505a), borderRadius: 0px, padding: 0px 14.8px 0px 0px.

### Bestseller Label
**Role:** Small, contained label for product features.

backgroundColor: Link Blue (#58737e), color: Ghost Fog (#f2f5f8), padding: 6px 6px, borderRadius: 0px.

## Do's and Don'ts

### Do
- Prioritize Deep Ocean (#3b505a) for primary textual content and interactive elements, establishing it as the dominant brand color.
- Use Libre Caslon Condensed (or Playfair Display) exclusively for major headings, leveraging its distinct serif character.
- Apply Circular Pro (or Inter) for all body text, navigation, and button labels, maintaining a consistent sans-serif voice.
- Ensure generous white space, particularly using Canvas White (#ffffff) and Ghost Fog (#f2f5f8) for background dilution and section separation.
- Use Border Mist (#e6ebee) for subtle background shifts to indicate different content blocks without heavy visual breaks.
- Set all border-radius values to 0px for a sharp, modern, and uncluttered appearance.
- Maintain a default element gap of 16px for consistent visual rhythm between components.

### Don't
- Avoid using bold or highly saturated colors outside of the defined brand palette for primary UI elements.
- Do not introduce strong shadows or excessive elevation; the design favors flat surfaces and subtle depth.
- Do not deviate from the specified 0px border-radius; rounded corners are not part of this aesthetic.
- Do not use generic system fonts for body or heading; the custom typefaces are critical to the brand identity.
- Avoid dense information placement; maintain the comfortable density and ample spacing.
- Do not use multiple font weights for Circular Pro; it is intended to be used at its regular weight 400 throughout.
- Do not use 'Action', 'CTA', 'primary action', or similar phrasing for buttons unless they explicitly have a #3b505a background or border, and prioritize un-filled, text-based button styles rather than solid fills where possible.

## Elevation

Face Formula intentionally avoids shadows, contributing to a flat, clean, and understated aesthetic. Elements are distinguished through subtle background color shifts and borders rather than perceived depth from shadows.

## Surfaces

- **Canvas White** (`#ffffff`) — Base page background and default content areas.
- **Ghost Fog** (`#f2f5f8`) — Subtle background for distinct content sections or cards.
- **Border Mist** (`#e6ebee`) — Slightly darker secondary background panels, offering visual distinction.

## Imagery

The site uses high-quality, product-focused photography and natural lifestyle imagery featuring models with clear, healthy skin. Photography is usually full-bleed in hero sections, serving as a backdrop for textual content. Product visuals are crisp, isolated shots on clean white or solid color backgrounds. There are small decorative landscape images. Iconography is minimalist, outlined, and monochromatic, primarily using Black Ink (#000000) or Deep Ocean (#3b505a), maintaining a light stroke weight. Imagery is primarily decorative and atmospheric but also showcases product details.

## Layout

The page primarily employs a max-width contained layout, with content centered. The hero section is full-bleed, overlaying large lifestyle photography with centered or left-aligned headlines and subtext. Section rhythm is created through alternating Canvas White and Ghost Fog background bands, with generous vertical spacing (32px section gap). Content often uses two-column arrangements, alternating text-left/image-right or vice-versa, or stacked centered blocks. There's a 3-column card grid in some sections, likely for product display. Navigation is a fixed top bar with ghost text links.

## Similar Brands

- **aesop.com** — Shares a sophisticated, minimalist aesthetic with clean typography, muted palette, and a focus on product photography.
- **byredo.com** — Exhibits a similar elegant, understated design, featuring large lifestyle imagery, minimal UI, and a refined serif-sans font pairing.
- **frama.com** — Uses a comparable Scandinavian-inspired design with generous white space, subtle color variations, and a focus on natural textures and light.
