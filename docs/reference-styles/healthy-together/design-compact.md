# Healthy Together — Style Reference
> midnight gradient horizon

**Theme:** mixed

Healthy Together employs a cool, dark-mode canvas accented by vibrant, saturated gradients and a subtle, soft light theme for content sections. Typography is grounded in a single, versatile sans-serif family, used confidently across a wide range of sizes and precise tracking. Components feature large, pill-shaped buttons for primary actions and subtly rounded cards, providing a friendly yet professional interface.

## Colors

| Name | Value | Role |
|------|-------|------|
| Midnight Ink | `#101722` | Dark page backgrounds, primary text, navigation elements, subtle borders. This deep gray creates depth and a calm, focused atmosphere |
| Canvas Ice | `#f9f0ff` | Light page backgrounds, secondary card surfaces, and select large UI sections. It offers a contrasting yet soft backdrop to dark text |
| Plasma Violet | `linear-gradient(270deg, rgb(69, 65, 254) 40%, rgb(254, 15, 131))` | Primary action buttons, prominent card backgrounds, and a key color in the brand's signature gradient. It signifies interaction and energy; Hero section backgrounds and key decorative visuals. This gradient from vibrant violet to hot pink is a signature brand element |
| Soft Lavender | `#d9c6ff` | Muted background for supporting cards and large content blocks, providing a gentle visual break from starker neutrals |
| Pale Stone | `#6c6c7a` | Secondary text, muted headings, and decorative borders. A slightly darker neutral useful for de-emphasizing elements |
| Snow White | `#ffffff` | Card backgrounds, navigation text, and occasional text in dark sections for maximum contrast |

## Typography

### Inter — The sole typeface for all text content from body paragraphs to display headlines. Its clear, modern sans-serif form maintains legibility across diverse applications, with a notable consistent negative letter-spacing for a sophisticated, tight feel.
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 600, 700
- **Sizes:** 14px, 16px, 24px, 36px, 64px, 72px, 92px
- **Line height:** 0.88, 0.90, 1.00, 1.10, 1.15, 1.30, 1.40
- **Letter spacing:** -0.05em

### Type Scale

| Role | Size | Line Height | Letter Spacing |
|------|------|-------------|----------------|
| caption | 14px | 1.4 | -0.05px |
| body | 16px | 1.3 | -0.05px |
| subheading | 24px | 1.15 | -0.05px |
| heading | 36px | 1.1 | -0.05px |
| heading-lg | 64px | 1 | -0.05px |
| display | 92px | 0.88 | -0.05px |

## Spacing & Layout

**Base unit:** 4px

**Density:** comfortable

- **Section gap:** 56px
- **Card padding:** 24px
- **Element gap:** 16px

### Border Radius

- **cards:** 42px
- **badges:** 9999px
- **buttons:** 16000px

## Components

### Primary Action Button
**Role:** Call to action button

Bold, filled button with Plasma Violet background (#4541fe) and white text, featuring a maximal `16000px` border-radius for a pill shape. Padding is generous at `14px` vertical and `24px` horizontal.

### Ghost Button
**Role:** Secondary action or subtle navigation

Outline button with Midnight Ink (#101722) text and no background. The `16000px` border-radius creates a pill shape. Padding is `8px` vertical and `8px` horizontal.

### Cream Background Button
**Role:** Tertiary action or alternative prompt

Subtle button with Canvas Ice (#f9f0ff) background and Midnight Ink (#101722) text, maintaining the `16000px` pill radius and `14px` vertical, `24px` horizontal padding.

### Standard Content Card
**Role:** Information container, testimonial display

Snow White (#ffffff) background with large `42px` border-radius, giving a generous rounded corner. Internally spaced with `56px` top padding, `32px` horizontal padding, and `64px` bottom padding. No explicit shadow, relies on background contrast.

### Gradient Hero Card
**Role:** Prominent feature or call to action

Features the brand's Plasma Violet (#4541fe) background, with a unique `150% 150% 0% 0%` border-radius, creating a distinct top-rounded shape. Contains a large, soft shadow of the same color, `rgb(69, 65, 254) 40px 0px 576px 160px`.

### Rounded Highlight Card
**Role:** Isolated highlight or feature panel

Utilizes Canvas Ice (#f9f0ff) as its background with an extremely large `1600px` border-radius, appearing as a soft, almost circular shape. Generous internal padding of `96px` vertical and `56px` horizontal.

## Do's and Don'ts

### Do
- Use Inter font family for all text, applying a global letter-spacing of `-0.05em` to maintain a consistently tight, condensed feel.
- Prioritize Plasma Violet (#4541fe) for all primary interactive elements like buttons and key brand highlights.
- Apply `16000px` border-radius for all buttons and small interactive elements to achieve a distinct pill shape.
- Utilize Canvas Ice (#f9f0ff) or Snow White (#ffffff) for card backgrounds and content sections, reserving Midnight Ink (#101722) for entire page backgrounds in dark mode or hero sections.
- Maintain a clear visual hierarchy by using the Radiant Gradient for hero sections and dramatic visual introductions.
- Use `42px` border-radius for standard content cards to ensure a soft and approachable appearance across the system.
- Employ `16px` for `elementGap` horizontally and vertically to create comfortable spacing between UI elements.

### Don't
- Avoid using harsh, saturated primary colors for large background areas that are not hero sections or prominent feature cards.
- Do not deviate from the Inter font family or its defined letter-spacing; consistency is crucial for brand recognition.
- Never use square or minimally rounded corners for interactive components; all buttons and critical interactive elements should be pill-shaped.
- Do not introduce new shadow styles for elevated elements; stick to the predefined shadow for Gradient Hero Cards or use no shadow.
- Avoid using multiple font sizes for body text; aim for `14px` or `16px` for main content based on context.
- Do not introduce strong, contrasting colors for text that are not Midnight Ink (#101722), Pale Stone (#6c6c7a), or Snow White (#ffffff).
- Avoid generic or standard button shapes; the pill-shaped `16000px` radius is a core identifier.

## Elevation

- **Gradient Hero Card:** `rgb(69, 65, 254) 40px 0px 576px 160px`
- **Other:** `rgba(23, 73, 77, 0.15) 0px 20px 30px 0px`

## Imagery

The imagery style is a mix of abstract 3D renders and subtle iconography. The 3D render, seen in the hero, features organic, flowing shapes in the brand's gradient colors (Plasma Violet to Hot Pink), acting as an atmospheric and decorative element. When present, product imagery consists of tightly cropped screenshots or product surfaces, integrated subtly within cards or sections. Outlined icons with moderate stroke weight are used for functional clarity, typically in Midnight Ink or Pale Stone. The overall density is balanced, with imagery serving both decorative and explanatory roles, often framed by soft card shapes or integrated into background experiences.

## Layout

The page primarily uses a max-width contained layout, though the hero section breaks this with a full-bleed dark background and a centered headline. Sections alternate between dark (Midnight Ink) and light (Canvas Ice/Snow White) backgrounds, creating a clear visual rhythm. Content is generally arranged in centered stacks for headlines and calls to action, transitioning to 2-column text + image layouts or 3-column card grids for features and testimonials. Vertical spacing between sections is generous and consistent. Navigation is a sticky top bar with a logo, menu links, and a distinctive Plasma Violet pill-shaped 'Need Help?' button.

## Similar Brands

- **Stripe** — Uses dark backgrounds with vibrant gradients and similar deep blues in early page sections for a dramatic technical aesthetic.
- **Linear** — Features a strong dark mode with minimalist UI and a single primary accent color that guides interaction, similar to Healthy Together's Plasma Violet.
- **Anthropic** — Employs a clean, spacious layout with a mix of dark and light sections and uses soft, rounded elements for a modern, approachable feel.
- **Vercel** — Often uses dark interface themes, strong typography, and subtle gradients to convey a high-tech, polished experience.
