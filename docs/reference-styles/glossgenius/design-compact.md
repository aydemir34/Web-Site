# All-In-One Salon — Style Reference
> Crisp digital ledger, with neon highlights guiding the way.

**Theme:** light

GlossGenius feels like a sophisticated, yet approachable digital assistant for beauty professionals. Ultra-clean typography and a largely monochromatic palette create an immediate sense of clarity and organization. Unexpected pops of vivid yellow-green and pastel violet-blue provide energetic accents, reflecting the vibrancy of the beauty industry without being overwhelming. The soft, rounded elements contrast with the sharp Basel Grotesk text, balancing professionalism with user-friendliness.

## Colors

| Name | Value | Role |
|------|-------|------|
| Inkwell Black | `#17150` | Primary text, headline text, dark background sections, button backgrounds. This deep near-black provides strong contrast and a sense of premium quality. |
| Cloud White | `#ffffff` | Main page background, card backgrounds, text on dark backgrounds. Dominates the canvas for a bright, open feel. |
| Porcelain Gray | `#f0f7f6` | Secondary background color for sections, card hover states, badge backgrounds. Offers a subtle variation from pure white for content differentiation. |
| Obsidian Black | `#000000` | Navigation text, icons, button outlines. Used for the sharpest contrast elements, often interactive. |
| Silver Mist | `#e2e2e2` | Subtle borders and dividers for section separation. |
| Genius Yellow | `#cccc25` | Calls to Action, active state indicators. This vibrant yellow gives an immediate energetic and positive feel. |
| Genius Yellow Gradient | `linear-gradient(rgb(204, 204, 37), rgb(202, 205, 120))` | Decorative backgrounds and possibly interactive elements, offering a subtle shift in luminescence for visual interest. |
| Sky Violet | `#9fa6ff` | Promotional banners, card backgrounds, accent areas. This vivid violet provides a playful, modern contrast to the muted neutrals. |
| Sky Violet Gradient | `linear-gradient(rgb(159, 166, 255), rgb(179, 186, 232))` | Backgrounds for features or promotional blocks, adding depth and visual softness. |

## Typography

### Basel Grotesk Book — Primary typeface for all UI elements, body text, subheadings, and smaller headlines. Its clean sans-serif form ensures high readability and a contemporary feel across all weights and sizes, from small navigation links to substantial section titles.
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 13px, 14px, 16px, 18px, 22px, 32px, 40px, 48px, 72px
- **Line height:** 0.97, 1.02, 1.05, 1.10, 1.13, 1.20, 1.40
- **Letter spacing:** 0.056, 0.031, 0.071, -0.01, -0.015, -0.02, -0.03, -0.03, -0.04

### Basel Classic Book — Used exclusively for large, impactful display text. The significantly tighter line-height and letter-spacing, combined with its high contrast to Basel Grotesk Book, give it a distinctive, elegant, and editorial presence for hero headlines.
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 96px, 144px
- **Line height:** 0.80, 0.90
- **Letter spacing:** -0.03, -0.03

## Spacing & Layout

**Base unit:** 4px

**Density:** comfortable

- **Section gap:** 72-96px
- **Card padding:** 20px
- **Element gap:** 8px

### Border Radius

- **nav:** 40px
- **cards:** 8px
- **badges:** 8px
- **buttons:** 1440px
- **interactiveElements:** 1440px

## Components

### Primary Call to Action Button
**Role:** Interactive element

Background: rgb(255, 255, 255). Text: #000000. Border: rgba(0, 0, 0, 0.05). Radius: 42px. Padding: 0px 13px. Used for main actions like 'Start Free Trial'.

### Secondary Ghost Button
**Role:** Interactive element

Background: rgba(0, 0, 0, 0). Text: #17150e. No border radius. Padding: 0px. Used for secondary navigation or subtle links within content, like 'Learn More'.

### Pill Accent Button
**Role:** Interactive element

Background: rgba(0, 0, 0, 0). Text: #000000. Border: rgb(0, 0, 0). No radius. Padding: 38px 15px. Used for prominent navigation items requiring an underline effect on hover/active.

### Rounded White Button
**Role:** Interactive element

Background: rgba(1, 1, 1, 0.5). Text: #f0f7f6. Border: #f0f7f6. Radius: 1440px. Padding: 0px. Used for internal navigation or filtering tags, like a 'Get Support' button.

### Feature Card with 8px Radius
**Role:** Content container

Background: rgba(0, 0, 0, 0). Radius: 8px. No box shadow. Padding: 0px. Used for displaying specific features or testimonials, often part of a grid.

### Informational Badge
**Role:** Categorization/Label

Background: #f0f7f6 (Porcelain Gray). Text: #17150 (Inkwell Black). Radius: 8px. Padding: 0px. Used for labels like 'Featured'.

### Outline Badge
**Role:** Categorization/Label

Background: rgba(0, 0, 0, 0). Text: #17150 (Inkwell Black). No radius. Padding: 12px. Used for more prominent tags or categories.

### Hero CTA Button
**Role:** Primary user action

Background: Genius Yellow Gradient. Text: #17150 (Inkwell Black). Radius: 1440px. Padding: 22px 40px (inferred from common button padding + spacing unit). Used for prominent 'Get Started' or 'Get a Demo' actions in the hero.

### Dark Section CTA Button
**Role:** Secondary action in dark sections

Background: #17150 (Inkwell Black). Text: #f0f7f6 (Porcelain Gray). Radius: 1440px. Padding: 22px 40px (inferred). Used for calls to action within dark-themed sections.

## Do's and Don'ts

### Do
- Prioritize Basel Grotesk Book for all functional text: 400 weight for body, 500 for subheadings and buttons, 600 for important UI labels.
- Utilize 1440px border-radius for interactive elements like buttons and tags, creating a soft, inviting touch across the UI.
- Use Porcelain Gray (#f0f7f6) as a subtle background differentiator for content blocks or badges to break up Cloud White sections.
- Reserve GlossGenius Yellow (#cccc25 or its gradient) almost exclusively for primary Calls to Action and active states to command attention.
- Employ Basel Classic Book only for large impact headlines (96px, 144px) with tight letter-spacing (-0.03em) and line-height (0.90, 0.80) to maintain an exclusive, editorial feel.
- Maintain an element gap of 8px for consistent spacing between related items and navigation links.

### Don't
- Do not use Basel Classic Book at smaller sizes or for body copy; its narrow kerning and tight leading are not suitable for readability at scale.
- Avoid using multiple accent colors; stick to Genius Yellow and Sky Violet for deliberate emphasis.
- Do not introduce hard, sharp corners; all significant interactive or content elements should use 8px or 1440px radii.
- Do not use box shadows for elevation; rely on color shifts (Inkwell Black for backgrounds, Porcelain Gray for elevated sections) to create depth instead.
- Do not add unnecessary borders to cards or main content sections; use background color changes to define boundaries.

## Imagery

Imagery predominantly features crisp product screenshots showcasing the software interface, often presented on screens held by people in a professional, clean environment (e.g., a salon or spa setting). Photography is high-key, bright, and often tightly cropped, focusing on expressions of success, ease, and efficiency. Visuals are contained within defined areas, not full-bleed, and sometimes subtly integrate brand accent colors as background elements. Icons are filled, monochrome, and used functionally.

## Layout

The site uses a max-width contained layout, typically centered, creating clear content boundaries. The hero section features large, centered headlines over a clean white background, often paired with a subtle illustrative element or a call to action. Content sections alternate between Cloud White and Porcelain Gray backgrounds, or sometimes Inkwell Black for contrast, providing a clear visual rhythm. Content is arranged in flexible patterns: large single columns for headlines, often paired with body text, and then grids of features or testimonials. Navigation is a prominent sticky top bar, featuring both text links and a 'Start Free Trial' button. The layout feels spacious and deliberate, with comfortable breathing room between sections.

## Similar Brands

- **Calendly** — Shares a clean, bright, and task-oriented UI with rounded buttons and a strong reliance on san-serif typography for professionalism.
- **Doodle** — Similar focus on simplified scheduling solutions, reflected in a light UI, clear typography, and minimal accent colors for interactive elements.
- **Square Appointments** — A direct competitor with a comparable aesthetic: a light background, prominent and legible sans-serif fonts, and clear calls to action, all designed for business efficiency.
