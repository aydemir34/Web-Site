# Design System Inspired by PIED-DE-POULE

## 1. Visual Theme & Atmosphere

The PIED-DE-POULE design system embodies sophisticated minimalism with a luxury beauty salon aesthetic. Built on a foundation of stark blacks and clean whites, the system maintains an international, high-end sensibility that conveys professionalism, precision, and calm. The accent of vibrant electric blue (`#0089FC`) punctuates key interactive moments, creating moments of confidence and forward momentum within an otherwise restrained palette. The design prioritizes clarity and predictability—no surprises, just refined elegance that puts client comfort and transparency at the center. Warm neutrals like `#AA957C` suggest organic care and expertise, while generous whitespace and squared edges create a contemporary, uncompromising visual language suitable for a multi-country beauty brand.

**Key Characteristics**
- Stark black-and-white foundation with electric blue accents
- Minimalist, geometric aesthetic with sharp 0px border radius
- Emphasis on typography and clean layouts over ornamental elements
- Luxury brand positioning through restraint and negative space
- International, professional tone—accessible yet aspirational
- Predictable, systematic color application for client confidence
- Image-forward design showcasing real results
- Accessibility-first contrast ratios throughout

## 2. Color Palette & Roles

### Primary
- **Primary CTA** (`#0089FC`): Electric blue used 29 times; drives all major call-to-action buttons, links, and interactive highlights. Commands attention while remaining professional.

### Accent Colors
- **Warm Gold** (`#AA957C`): Soft taupe-brown accent used sparingly for premium product/service highlighting and subtle luxury signaling.
- **Soft Pink** (`#F78DA7`): Light mauve-pink for delicate beauty service callouts and feminine brand touches.
- **Bright Coral** (`#FF6900`): High-saturation accent for limited use—price highlights or special promotional moments.
- **Mint Green** (`#7BDCB5`): Fresh, calming accent for success states or wellness-related messaging.
- **Vibrant Green** (`#00D084`): High-contrast green reserved for affirming actions and positive feedback.
- **Sky Blue** (`#8ED1FC`): Soft secondary blue for secondary interactive elements or layered depth.
- **Muted Gray-Blue** (`#ABB8C3`): Desaturated blue-gray for subtle supporting text and secondary UI.

### Interactive
- **Button Hover / Focus** (`#0089FC` with opacity): Primary CTA maintains solid blue; secondary buttons invert to blue background with white text on interaction.
- **Ghost / Outline State** (`#000000` border, transparent fill): Used for secondary actions; transforms to white fill on hover.

### Neutral Scale
- **Jet Black** (`#000000`): Dominant text color throughout; used 901 times for headings, body copy, and primary UI elements. Ensures maximum readability.
- **Pure White** (`#FFFFFF`): Primary background; used 152 times. Creates breathing room and emphasizes content hierarchy.
- **Off-White / Cream** (`#F7F5F2`): Warmest neutral; subtle alternative background for softer sections.
- **Light Gray** (`#F3F3F3`, `#FBFBFB`): Input backgrounds and soft surface differentiation.
- **Medium Gray** (`#B2B2B2`): Disabled states and tertiary text.
- **Dark Gray** (`#E6E6E6`): Borders and subtle dividers.

### Surface & Borders
- **Border Default** (`#000000`): 1px solid black for outlined components and form boundaries.
- **Input Surface** (`#F3F3F3`): Very light gray for form fields, maintaining contrast while signaling interactivity.

### Semantic / Status
- **Success** (`#1CB751`): Vibrant green for confirmation messages, successful submissions, and positive feedback (used 3 times).
- **Error / Danger** (`#D74C4C`, `#CF2E2E`): Red tones for error states, warnings, and destructive actions (used 4 times total).
- **Warning** (`#FCB900`): Amber yellow for cautionary messaging and alerts (used 1 time).

## 3. Typography Rules

### Font Family
**Primary Font:** Gotham Pro (sans-serif)
- Fallback stack: `Gotham Pro, Helvetica Neue, Arial, sans-serif`
- Used exclusively throughout the system for consistency and modern geometric appeal.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / H1 | Gotham Pro | 40px | 500 | 50px | 0px | Hero headlines, page titles. Medium weight for refined presence. |
| Heading / H2 | Gotham Pro | 24px | 700 | 32px | 0px | Section headers and major content breaks. Bold for authority. |
| Heading / H3 | Gotham Pro | 18px | 700 | 27px | 0px | Subsection titles and card headers. Bold, compact rhythm. |
| Heading / H4 | Gotham Pro | 20px | 400 | 25px | 0px | Larger body callouts and emphasis text. Regular weight. |
| Body / Paragraph | Gotham Pro | 16px | 400 | 24px | 0px | Primary content text. Highly readable at standard line height. |
| Caption / Small | Gotham Pro | 12px | 500 | 12px | 0px | Secondary info, labels, and metadata. Medium weight for definition. |
| Input / Form | Gotham Pro | 14px | 500 | 1 (normal) | 0px | Form fields and input placeholders. Medium weight for clarity. |
| Button / CTA | Gotham Pro | 16px | 700 | 13px | 0px | All button labels. Bold for maximum prominence and scannability. |

### Principles
- **Geometric sans-serif for modernity:** Gotham Pro's clean proportions align with the salon's luxury, international positioning.
- **Weight variation for hierarchy:** Weights oscillate between 400 (regular) and 700 (bold) to maximize contrast without introducing multiple typefaces.
- **Tight line heights for density:** Condensed leading (especially 13px for buttons) creates compact, confident UI; 24px for body ensures comfortable reading.
- **No decorative serifs or scripts:** Maintains accessibility and professional tone across all touchpoints.
- **Consistent 0px letter-spacing:** Type sits naturally without artificial manipulation, reinforcing the minimalist aesthetic.

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background:** `#0089FC`
- **Text Color:** `#FFFFFF`
- **Font:** Gotham Pro, `16px`, weight `700`, line-height `13px`
- **Padding:** `18.5px 20px`
- **Height:** `50px`
- **Border:** none
- **Border Radius:** `0px`
- **Box Shadow:** none
- **Hover State:** Darken to `#0070D1`; text remains white.
- **Focus State:** Add `2px` solid `#0089FC` outline at `2px` offset.
- **Active State:** Maintain `#0070D1`; add 1px inset shadow.

#### Secondary Button (Outlined)
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `#000000`
- **Font:** Gotham Pro, `16px`, weight `400`, line-height `normal`
- **Padding:** `14px 24px 14px 14px`
- **Height:** `50px`
- **Border:** `1px solid #000000`
- **Border Radius:** `0px`
- **Box Shadow:** none
- **Hover State:** Invert to `#000000` background with `#FFFFFF` text.
- **Focus State:** Add `2px` solid `#000000` outline at `2px` offset.
- **Active State:** Maintain inversion; text darkens slightly.

#### Ghost Button (Minimal)
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#000000`
- **Font:** Gotham Pro, `16px`, weight `400`, line-height `24px`
- **Padding:** `0px`
- **Height:** `40px`
- **Border:** none
- **Border Radius:** `0px`
- **Box Shadow:** none
- **Hover State:** Text becomes `#0089FC`.
- **Focus State:** Underline text with `1px solid #0089FC`.
- **Active State:** Text transitions to `#0070D1`.

#### Icon Button (Square)
- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#000000`
- **Font:** Gotham Pro, `16px`, weight `700`, line-height `normal`
- **Padding:** `14px 16px`
- **Height:** `50px`
- **Width:** `50px`
- **Border:** `1px solid #000000`
- **Border Radius:** `0px`
- **Box Shadow:** none
- **Hover State:** Background becomes `#F3F3F3`.
- **Focus State:** Add `2px` solid `#000000` outline at `2px` offset.

### Cards & Containers

#### Default Card
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Border:** none
- **Border Radius:** `0px`
- **Box Shadow:** none
- **Padding:** `0px`
- **Text Color:** `#000000`
- **Font:** Gotham Pro, `10px`, weight `400`, line-height `12px`
- **Hover State:** No shadow change; opacity of contained image increases to `0.95`.
- **Image Overlay:** Dark semi-transparent gradient `rgba(0, 0, 0, 0.3)` on hover for visual feedback.

#### White Card / Container
- **Background:** `#FFFFFF`
- **Border:** `1px solid #E6E6E6`
- **Border Radius:** `0px`
- **Box Shadow:** none
- **Padding:** `24px` or `32px` depending on context
- **Text Color:** `#000000`
- **Hover State:** Border becomes `#000000`.

### Inputs & Forms

#### Text Input / Email Input
- **Background:** `#F3F3F3`
- **Text Color:** `#000000`
- **Font:** Gotham Pro, `14px`, weight `500`, line-height `normal`
- **Padding:** `0px 16px 0px 64px` (left padding accommodates icon)
- **Height:** `48px`
- **Border:** `1px solid rgba(255, 255, 255, 0)` (no visible border initially)
- **Border Radius:** `0px`
- **Box Shadow:** none
- **Placeholder Text:** `#B2B2B2`, weight `500`
- **Focus State:** Border becomes `1px solid #0089FC`; background remains `#F3F3F3`.
- **Error State:** Border becomes `1px solid #D74C4C`; background remains `#F3F3F3`.
- **Disabled State:** Background becomes `#FBFBFB`; text color becomes `#B2B2B2`; cursor not-allowed.

#### Textarea / Multiline Input
- **Background:** `#F3F3F3`
- **Text Color:** `#000000`
- **Font:** Gotham Pro, `14px`, weight `500`, line-height `1.5`
- **Padding:** `16px`
- **Border:** `1px solid rgba(255, 255, 255, 0)`
- **Border Radius:** `0px`
- **Box Shadow:** none
- **Min Height:** `120px`
- **Focus State:** Border becomes `1px solid #0089FC`.

### Navigation

#### Header Navigation
- **Background:** `rgba(0, 0, 0, 0)` (transparent overlay or white depending on context)
- **Text Color:** `#000000`
- **Font:** Gotham Pro, `16px`, weight `400`, line-height `24px`
- **Padding:** `0px` (items spaced via flexbox gap)
- **Border Radius:** `0px`
- **Box Shadow:** none
- **Height:** `300px` (full menu height on mobile)
- **Width:** `436px` (full menu width on mobile)
- **Link Hover:** Text becomes `#0089FC`.
- **Active Link:** Text becomes `#0089FC` with `1px solid #0089FC` underline.
- **Mobile Toggle:** Background `#FFFFFF`, border `1px solid #E6E6E6`.

#### Breadcrumb Navigation
- **Font:** Gotham Pro, `14px`, weight `400`
- **Separator Color:** `#B2B2B2`
- **Active Item Color:** `#0089FC`
- **Inactive Item Color:** `#000000`
- **Hover State:** Inactive items become `#0089FC`.

### Links

#### Text Link (Inline)
- **Text Color:** `#000000`
- **Font:** Gotham Pro, `16px`, weight `400`, line-height `24px`
- **Text Decoration:** `none` (underline on hover)
- **Hover State:** Underline appears (`1px solid #0089FC`); text becomes `#0089FC`.
- **Focus State:** Add `2px dotted #0089FC` outline at `2px` offset.

#### Link Button (Outlined)
- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Font:** Gotham Pro, `16px`, weight `400`, line-height `24px`
- **Padding:** `14px 24px 14px 14px`
- **Height:** `50px`
- **Border:** `1px solid #000000`
- **Border Radius:** `0px`
- **Box Shadow:** none
- **Hover State:** Background becomes `#F3F3F3`; border remains `1px solid #000000`.

#### Link Button (Primary)
- **Background:** `#0089FC`
- **Text Color:** `#FFFFFF`
- **Font:** Gotham Pro, `16px`, weight `400`, line-height `24px`
- **Padding:** `14px 24px 14px 14px`
- **Height:** `50px`
- **Border:** `1px solid #0089FC`
- **Border Radius:** `0px`
- **Box Shadow:** none
- **Hover State:** Background becomes `#0070D1`; border becomes `1px solid #0070D1`.

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

**Spacing Scale:**
- `4px`: Micro gaps between tightly grouped elements (e.g., icon + text in button)
- `8px`: Compact spacing between related items
- `12px`: Small padding for input labels and compact sections
- `16px`: Standard padding for form inputs and small containers
- `20px`: Medium gap for section separation on compact layouts
- `24px`: Standard margin for component spacing and sidebar padding
- `28px`: Larger padding for card interiors
- `32px`: Substantial padding for major content sections
- `36px`: Large margin between major sections
- `40px`: Extra-large gap for section grouping
- `44px`: Margin for spaced elements like related cards
- `52px`: Maximum margin between distant section groups

**Usage Context:**
- Form fields use `16px` padding consistently
- Content sections use `32px` to `40px` margins vertically
- Horizontal spacing between grid items uses `20px` to `24px`
- Top navigation uses minimal padding (`12px` to `16px`)

### Grid & Container

**Max Container Width:** `1200px` (standard desktop)

**Column Strategy:**
- Desktop: 12-column grid with `24px` gaps
- Tablet (768px): 8-column grid with `20px` gaps
- Mobile (375px): Single column with `16px` side margins

**Section Patterns:**
- Hero sections: Full bleed image with text overlay; padding `60px 40px` on desktop, `40px 20px` on mobile
- Content grid: 3 columns on desktop, 2 on tablet, 1 on mobile; gap `24px`
- Sidebar layout: 70/30 or 60/40 split; gap `32px`
- Card galleries: Consistent card width `300px` with flex wrapping

### Whitespace Philosophy

Whitespace is treated as a first-class element, never as unused space. The system embraces negative space to create visual hierarchy, reduce cognitive load, and signal luxury. Every text block is surrounded by breathing room; images float in white fields; buttons sit alone without crowding. This restraint reinforces the salon's positioning: calm, predictable, focused on results rather than decoration. Margins and gaps scale with viewport size to maintain proportional spaciousness.

### Border Radius Scale

- **Sharp / 0px:** All structural elements—buttons, inputs, cards, navigation—feature zero border radius for geometric, contemporary aesthetics aligned with the brand's minimalist stance.
- **No rounded alternatives:** The design system does not include rounded or softened variants; sharpness is non-negotiable and signals precision and professional care.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| None / Flat | No shadow; `box-shadow: none` | Buttons, outlined cards, background surfaces, links |
| Hover Lift | `box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1)` | Interactive elements on hover; secondary card reveal |
| Modal Overlay | `box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15)` | Modals, dropdowns, full-screen overlays |
| Pressed / Active | `box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1)` | Buttons in active/pressed state; depth compression |

**Shadow Philosophy:**

The design system minimizes shadows to reinforce the flat, minimalist aesthetic. Shadows are reserved only for necessary depth cues: lifting hover states, distinguishing modals, or pressing active interactions. No card shadows by default; elevation is signaled through color, border, or state change instead. This restraint maintains visual clarity and emphasizes the brand's commitment to simplicity and predictability.

## 7. Do's and Don'ts

### Do

- **Use the primary blue (`#0089FC`) exclusively for CTAs.** Every call-to-action button, link, or highlight must use this color. Consistency builds trust and guides user attention.
- **Maintain 0px border radius across all components.** Sharpness is a signature of the brand; rounded corners contradict the minimalist aesthetic.
- **Pair black text on white backgrounds universally.** Maximum contrast ensures accessibility and maintains the luxury, no-nonsense tone.
- **Group related information in card grids with consistent spacing.** Use `24px` gaps on desktop to create visual rhythm and scannability.
- **Prioritize typography hierarchy over decoration.** Bold weights, size changes, and color shifts communicate importance; avoid background fills or excessive styling.
- **Test all interactive states (hover, focus, active, disabled).** Every button, link, and input must have explicit, predictable feedback.
- **Use semantic status colors sparingly.** Success (`#1CB751`), error (`#D74C4C`), and warning (`#FCB900`) are reserved for form validation and alerts only.
- **Employ whitespace aggressively in layouts.** Negative space is a design tool; use generous margins to signal calm and focus.
- **Keep input backgrounds light gray (`#F3F3F3`)** to distinguish form fields without excessive styling; borders appear only on focus/error.
- **Apply Gotham Pro weight 700 to all button labels** for maximum scannability and weight.

### Don't

- **Avoid rounded corners anywhere in the UI.** No border-radius except `0px`; this includes icon buttons, form fields, and card containers.
- **Don't mix multiple accent colors in a single view.** Each section or feature area should emphasize one accent (or none). Reserve warm golds (`#AA957C`), pinks, and corals for specific, isolated use cases.
- **Never use shadows on primary interface elements** like buttons or cards; reserve shadows for hover states and modals only.
- **Don't create custom color variants.** Stick to the defined palette; resist temptations to create intermediate hues or pastel derivatives.
- **Avoid serif or display typefaces.** Gotham Pro is the exclusive font; no scripts, serifs, or decorative alternatives.
- **Don't use outline buttons as primary CTAs.** Outlined buttons are secondary; primary actions must have solid blue fill.
- **Never reduce contrast on text below 4.5:1 ratio.** All text must meet WCAG AA accessibility standards; `#000000` on `#FFFFFF` is the baseline.
- **Don't center-align body copy over full-width images.** Center alignment on small screens only; default to left alignment for readability.
- **Avoid excessive padding on mobile.** Mobile sidebars should use `16px`, not `24px` or `32px`, to maximize screen real estate.
- **Don't animate status or success messages.** Static display at top of page with `4px 2px 8px rgba(0, 0, 0, 0.1)` shadow if needed.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 375px–599px | Single column; `16px` side margins; `40px 20px` padding; font sizes reduce slightly for captions |
| Tablet | 600px–999px | 2-column grids; `20px` gaps; `48px 24px` padding; navigation collapses to hamburger |
| Desktop | 1000px–1399px | 3-column grids; `24px` gaps; `60px 40px` padding; full horizontal navigation |
| Large Desktop | 1400px+ | 3–4 column layouts with max-width container `1200px` centered; increased spacing around content |

### Touch Targets

- **Minimum interactive size:** `50px × 50px` for buttons and clickable elements. No exceptions for accessibility.
- **Minimum spacing between targets:** `8px` gap between adjacent touch targets to prevent accidental mis-taps.
- **Input fields:** `48px` height minimum; `16px` horizontal padding for comfortable thumb/finger navigation.
- **Icon buttons:** `50px × 50px` square minimum (e.g., close, menu toggle).
- **Links in body copy:** Wrap in `16px × 24px` (width × height) minimum tap zone if standalone; may be smaller if part of running text but should use `1.5` line-height for compensation.

### Collapsing Strategy

- **Hero section:** Full bleed at all sizes; image scales responsively; text overlay repositions from bottom-right (desktop) to bottom-center (mobile).
- **Navigation:** Horizontal menu at 1000px+; collapses to vertical menu with hamburger toggle below 999px; menu width `100%` on mobile, `436px` reference width maintained for spacing consistency.
- **Card grids:** 3 columns on desktop (`1000px+`), 2 columns on tablet (`600px–999px`), 1 column on mobile (`375px–599px`); gap reduces from `24px` (desktop) to `20px` (tablet) to `16px` (mobile).
- **Form layouts:** Single column on mobile; two-column on tablet/desktop when space permits (e.g., first name / last name pairs).
- **Image galleries:** Full-width swiper on mobile (one image + arrows); 2-up on tablet; 3-up or 4-up on desktop with consistent `24px` gaps.
- **Sidebar content:** Stacks to single column below 999px; sidebar moves below main content on mobile.
- **Padding/margin reduction:** Desktop `32px–40px` margins reduce to `24px` on tablet and `16px–20px` on mobile to maximize usable space.

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA** (`#0089FC`): "BOOK A VISIT +" button, primary links, active states
- **Secondary Action** (`#000000` outline): Ghost buttons, secondary navigation, outlined containers
- **Background / Surface** (`#FFFFFF`): All default page backgrounds, card interiors
- **Input Surface** (`#F3F3F3`): Form fields, search inputs, lightweight containers
- **Text / Heading** (`#000000`): All typography by default; 901+ usages
- **Success State** (`#1CB751`): Form validation success, confirmation messages
- **Error State** (`#D74C4C` or `#CF2E2E`): Form validation errors, destructive warnings
- **Warning State** (`#FCB900`): Alert callouts, cautionary information
- **Accent / Luxury** (`#AA957C`): Premium service highlights, warm detail accents
- **Neutral Gray** (`#B2B2B2`): Disabled text, secondary labels, subdued info
- **Border / Divider** (`#E6E6E6`): Section borders, light rule separators

### Iteration Guide

1. **Always use `border-radius: 0px`.** No exceptions. Sharp geometric edges are brand identity. Every button, input, card, and container must have zero border radius.

2. **Primary CTAs are always solid `#0089FC` with white text.** Secondary actions are outlined with `1px solid #000000`. Ghost actions have no border and no fill. Never invert these roles.

3. **All buttons are `50px` height minimum.** Padding scales: primary buttons use `18.5px 20px`; secondary use `14px 24px 14px 14px`; ghost buttons are `0px` (text only). Width auto-expands except where constrained.

4. **Typography is exclusively Gotham Pro.** Font weights are `400` (regular) or `700` (bold) only. No intermediate weights. Sizes: H1 `40px 500`, H3 `18px 700`, body `16px 400`, button `16px 700`, input label `14px 500`, caption `12px 500`.

5. **Form inputs always have `#F3F3F3` background and `48px` height.** Padding left is `64px` if icon-prefixed, otherwise `16px`. Border is invisible (`rgba(255, 255, 255, 0)`) until focus (`1px solid #0089FC`) or error (`1px solid #D74C4C`).

6. **Spacing follows the 4px scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 52px.** Standard margins between sections are `24px` (compact), `32px` (regular), or `40px` (spacious). Never use arbitrary values; always pick from the scale.

7. **No box shadows except on hover (`0px 2px 8px rgba(0, 0, 0, 0.1)`) and modals (`0px 4px 16px rgba(0, 0, 0, 0.15)`).** Flat design is core to the minimalist aesthetic. Layering is achieved through color and borders, not shadows.

8. **All interactive states are required: hover, focus (dotted outline), active, and disabled (`#B2B2B2` text, `#FBFBFB` background).** Every button, link, and input must have explicit feedback. Never leave interactions implicit.

9. **Contrast ratio minimum is 4.5:1 for text.** `#000000` text on `#FFFFFF` background is the gold standard. Any lighter grays or tints must be tested. Captions at `12px` weight `500` are acceptable at 4.5:1; body copy must exceed 7:1.

10. **Responsive breakpoints are 375px (mobile), 600px (tablet), 1000px (desktop), 1400px (large).** Layouts collapse from 3-up → 2-up → 1-up; spacing reduces `24px` → `20px` → `16px`; font sizes remain constant except captions at mobile scale to `11px` if needed for space.