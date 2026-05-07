# Design System Inspired by Cheeks + Co

## 1. Visual Theme & Atmosphere

Cheeks + Co embodies a refined, luxury spa aesthetic with warm, earthy tones and elegant minimalism. The design conveys calm professionalism, inviting clients into a curated space for self-care and skincare expertise. The palette balances rich, sophisticated browns with creamy neutral backgrounds, creating an intimate yet upscale atmosphere. Typography feels contemporary and condensed, reinforcing a modern beauty brand positioned between wellness and premium skincare. The visual language emphasizes whitespace, natural textures, and carefully curated product photography that celebrates clean, ingredient-focused beauty.

**Key Characteristics**
- Warm, earthy color palette centered on sophisticated browns and creams
- Minimalist layout with generous whitespace and breathing room
- Serif and display typefaces for refined, contemporary feel
- Clean product photography with natural lighting and soft shadows
- Luxury spa positioning with approachable, friendly tone
- Geometric precision balanced with organic, natural imagery

## 2. Color Palette & Roles

### Primary
- **Warm Chocolate** (`#4C292B`): Primary brand color used dominantly for text, buttons, navigation, and brand elements. Creates the foundation of the visual identity across 915 instances.
- **Deep Espresso** (`#1D0B0C`): Darkest accent shade for high-contrast emphasis and critical UI elements.

### Accent Colors
- **Warm Taupe** (`#7F6665`): Secondary warm neutral for supporting text, secondary navigation, and subtle emphasis. Used 44 times for softer visual hierarchy.
- **Natural Green** (`#56AD6A`): Wellness accent representing clean, organic skincare philosophy. Reserved for success states and nature-inspired elements.
- **Warm Gold** (`#8D6223`): Tertiary accent for luxury product highlights and premium service markers.
- **Deep Teal** (`#142B26`): Muted accent for alternative CTA buttons and elevated interactive states.

### Interactive
- **Warm Chocolate Active** (`#4C292B`): Primary interactive color for links, buttons, and hover states.
- **Danger Red** (`#D02E2E`): Error and alert notifications, critical messaging.
- **Vibrant Orange** (`#FF4B00`): Secondary alert and error states for high-visibility warnings.

### Neutral Scale
- **Off-White** (`#FFFFFF`): Primary background for content areas, cards, and light surfaces. Used 83 times.
- **Cream** (`#F6F3EB`): Warm neutral background used 64 times. Creates soft, inviting sections and container backgrounds.
- **Light Beige** (`#FCFAF7`): Subtle background variation for layered depth.
- **Pale Tan** (`#EEE8D9`): Very light warm neutral for fine borders and gentle separators.
- **Light Gray** (`#F7F7F7`): Cool neutral for minimal contrast areas.
- **Platform Gray** (`#EEEEEE`): Soft dividers and border lines.
- **Subtle Border** (`#DEDEDE`): Light structural borders.

### Surface & Borders
- **Pure Black** (`#000000`): Maximum contrast for body text and critical information. Used 29 times.
- **Transparent Black** (`#0000`): Zero opacity for transparent overlays and layered effects.

## 3. Typography Rules

### Font Family
**Primary: Ivar Display Condensed** — Elegant, condensed serif display font for headlines and elevated UI text. Fallback: `Georgia, serif`

**Secondary: Figtree** — Modern, refined sans-serif for body text, navigation, and interactive elements. Fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | Ivar Display Condensed | 39px | 400 | 48.75px | 0px | Page titles and hero statements |
| Heading 1 | Ivar Display Condensed | 36px | 400 | 45px | 0px | Major section titles |
| Heading 2 | Ivar Display Condensed | 28px | 400 | 36px | 0px | Subsection headings |
| Heading 3 | Ivar Display Condensed | 22px | 400 | 30.25px | 0px | Component titles and section labels |
| Body Regular | Figtree | 13px | 600 | 19.5px | 0px | Primary body text and descriptions |
| Body Compact | Figtree | 14.5px | 400 | 21.75px | 0px | Secondary body text, navigation labels |
| Navigation | Ivar Display Condensed | 14.5px | 400 | 21.75px | 0px | Primary navigation menu items |
| Caption | Figtree | 12px | 400 | 18px | 0px | Fine print and supplementary text |
| Button Label | Ivar Display Condensed | 14.5px | 400 | 21.75px | 0px | All button text |
| Link | Figtree | 14.5px | 400 | 21.75px | 0px | Inline and standalone links |
| Code / Monospace | Figtree | 13px | 400 | 19.5px | 0px | Technical content |

### Principles
- Ivar Display Condensed provides elegant, modern sophistication for headlines and navigation
- Figtree offers clarity and readability for body content and interactive elements
- Weight 400 maintains refinement across all text scales
- Generous line heights (1.25x–1.4x) create breathing room and luxury feel
- Navigation uses display serif to elevate the header experience
- Button text uses Ivar Display to reinforce brand hierarchy in interactive elements

## 4. Component Stylings

### Buttons

**Primary Button (Solid)**
- Background: `#4C292B`
- Text Color: `#FFFFFF`
- Font: Ivar Display Condensed, 14.5px, weight 400
- Padding: `16px 24px`
- Height: `50px`
- Border Radius: `3px`
- Border: `1px solid #4C292B`
- Line Height: `21.75px`
- Hover: Background `#7F6665`, text `#FFFFFF`
- Active: Background `#1D0B0C`, text `#FFFFFF`

**Secondary Button (Outlined)**
- Background: `#FFFFFF`
- Text Color: `#4C292B`
- Font: Ivar Display Condensed, 14.5px, weight 400
- Padding: `14px 24px`
- Height: `50px`
- Border Radius: `3px`
- Border: `2px solid #4C292B`
- Line Height: `21.75px`
- Hover: Background `#F6F3EB`, text `#4C292B`
- Active: Background `#EEE8D9`, text `#1D0B0C`

**Ghost Button (Text-Only)**
- Background: `transparent`
- Text Color: `#4C292B`
- Font: Figtree, 14.5px, weight 400
- Padding: `8px 12px`
- Height: `auto`
- Border Radius: `0px`
- Border: `none`
- Line Height: `21.75px`
- Hover: Text Color `#7F6665`
- Active: Text Color `#1D0B0C`

**Icon Button**
- Background: `#F6F3EB`
- Text Color: `#4C292B`
- Font: Figtree, 14.5px, weight 400
- Padding: `10px`
- Width: `50px`
- Height: `50px`
- Border Radius: `3px`
- Border: `none`
- Hover: Background `#EEE8D9`
- Active: Background `#DEDEDE`

### Cards & Containers

**Service Card**
- Background: `#FFFFFF`
- Text Color: `#4C292B`
- Padding: `32px 24px`
- Border Radius: `0px`
- Border: `1px solid #DEDEDE`
- Box Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`
- Title Font: Ivar Display Condensed, 22px, weight 400
- Body Font: Figtree, 13px, weight 400, line height 19.5px
- Hover: Box Shadow `0 4px 16px rgba(0, 0, 0, 0.12)`

**Product Card**
- Background: `#F6F3EB`
- Padding: `20px`
- Border Radius: `0px`
- Border: `none`
- Box Shadow: `none`
- Image Area: Full-width, aspect ratio 1:1
- Hover: Background `#FCFAF7`

**Hero Section**
- Background: Linear gradient overlay on image (from `rgba(76, 41, 43, 0.4)` to `rgba(76, 41, 43, 0.4)`)
- Text Color: `#FFFFFF`
- Padding: `80px 40px`
- Heading Font: Ivar Display Condensed, 39px, weight 400
- Body Font: Figtree, 14.5px, weight 400

### Inputs & Forms

**Text Input**
- Background: `#FFFFFF`
- Text Color: `#4C292B`
- Font: Figtree, 14.5px, weight 400
- Padding: `10px 12px`
- Height: `44px`
- Border Radius: `3px`
- Border: `1px solid #DEDEDE`
- Line Height: `21.75px`
- Focus: Border color `#4C292B`, box shadow `0 0 0 2px rgba(76, 41, 43, 0.1)`
- Placeholder: Text Color `#7F6665`

**Text Area**
- Background: `#FFFFFF`
- Text Color: `#4C292B`
- Font: Figtree, 14.5px, weight 400
- Padding: `12px`
- Min Height: `120px`
- Border Radius: `3px`
- Border: `1px solid #DEDEDE`
- Line Height: `24px`
- Focus: Border color `#4C292B`, box shadow `0 0 0 2px rgba(76, 41, 43, 0.1)`

**Form Label**
- Font: Figtree, 12px, weight 600
- Text Color: `#1D0B0C`
- Margin Bottom: `6px`

**Error State**
- Border Color: `#D02E2E`
- Text Color: `#D02E2E`
- Font: Figtree, 12px, weight 400
- Margin Top: `4px`

### Navigation

**Header Navigation**
- Background: `#FFFFFF`
- Text Color: `#4C292B`
- Font: Ivar Display Condensed, 14.5px, weight 400
- Padding: `16px 0`
- Height: `89px`
- Border Bottom: `1px solid #DEDEDE`
- Link Hover: Text Color `#7F6665`
- Link Active: Text Color `#1D0B0C`, border bottom `2px solid #4C292B`

**Breadcrumb Navigation**
- Font: Figtree, 12px, weight 400
- Text Color: `#7F6665`
- Separator: ` / ` in `#DEDEDE`
- Hover: Text Color `#4C292B`

**Footer Navigation**
- Background: `#4C292B`
- Text Color: `#FFFFFF`
- Font: Figtree, 12px, weight 400
- Link Hover: Text Color `#F6F3EB`

### Links

**Text Link**
- Font: Figtree, 14.5px, weight 400
- Text Color: `#4C292B`
- Decoration: `underline`
- Hover: Text Color `#7F6665`, text decoration `underline solid 1px`
- Visited: Text Color `#7F6665`

**Navigation Link**
- Font: Ivar Display Condensed, 14.5px, weight 400
- Text Color: `#4C292B`
- Decoration: `none`
- Hover: Text Color `#7F6665`, border bottom `1px solid #7F6665`
- Active: Text Color `#1D0B0C`, border bottom `2px solid #1D0B0C`

### Badge

**Status Badge (Success)**
- Background: `#56AD6A`
- Text Color: `#FFFFFF`
- Font: Figtree, 11px, weight 600
- Padding: `4px 8px`
- Border Radius: `3px`

**Status Badge (Error)**
- Background: `#D02E2E`
- Text Color: `#FFFFFF`
- Font: Figtree, 11px, weight 600
- Padding: `4px 8px`
- Border Radius: `3px`

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

**Spacing Scale:**
- `4px`: Micro spacing (icon padding, tight element gaps)
- `8px`: Extra small (internal button padding, small component margins)
- `12px`: Small (label spacing, compact section gaps)
- `16px`: Base (standard padding, component margins)
- `20px`: Medium (section padding, moderate spacing)
- `24px`: Large (card padding, section margins)
- `32px`: Extra large (major section padding)
- `36px`: Hero content padding
- `52px`: Major section spacing
- `152px`: Hero section vertical spacing

**Usage Context:**
- Buttons: `16px` horizontal, `12px` vertical internal padding
- Cards: `24px` standard padding, `32px` for hero cards
- Text: `12px` below labels, `20px` between major sections
- Icons: `4px` internal spacing from text

### Grid & Container

**Max Width:** `1200px` for primary content container

**Column Strategy:** 12-column responsive grid with gutters at `16px` mobile, `24px` tablet, `32px` desktop

**Section Patterns:**
- Full-bleed hero with overlay and centered text
- 3-column card grid for service/product showcases (collapses to 1 column on mobile)
- 2-column split layouts for alternating content and imagery
- Centered content sections with max-width `800px` for readability

### Whitespace Philosophy

Cheeks + Co emphasizes generous whitespace to convey luxury and breathing room. Sections are separated by `52px` vertical spacing minimum. Card interiors use `24px–32px` padding to avoid visual clutter. Navigation and headers maintain clear negative space around text. Images are allowed to breathe without surrounding boxes or excessive borders.

### Border Radius Scale

- `0px`: Cards, containers, buttons (sharp, modern aesthetic)
- `3px`: Input fields, form elements, subtle softness for interactive elements
- `8px`: Secondary surfaces (rarely used; reserved for floating modals)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow, solid background | Cards, buttons, standard UI |
| Lift 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | Hovered cards, subtle elevation |
| Lift 2 | `0 4px 16px rgba(0, 0, 0, 0.12)` | Active cards, interactive hover states |
| Lift 3 | `0 8px 24px rgba(0, 0, 0, 0.16)` | Modal dialogs, dropdown menus |
| Overlay | `0 0 0 1000px rgba(0, 0, 0, 0.5)` | Modal backgrounds, full-page overlays |

**Shadow Philosophy:** Cheeks + Co uses minimal, subtle shadows to maintain elegance. Shadows are reserved for interactive states and layered surfaces. Hero sections and primary content rely on transparency overlays rather than shadows. The overall aesthetic favors flat design with gentle hover effects rather than aggressive depth.

## 7. Do's and Don'ts

### Do
- Use `#4C292B` as the primary brand color for all core UI elements
- Apply generous whitespace (minimum `16px` between sections, `52px` between major sections)
- Maintain consistent `3px` border radius for all input and interactive elements
- Use Ivar Display Condensed for all navigation and headings to reinforce sophistication
- Layer warm neutrals (`#F6F3EB`, `#FCFAF7`) for depth without harsh contrast
- Keep buttons simple with minimal styling; let typography carry visual hierarchy
- Pair product photography with clean white or cream backgrounds
- Use `#56AD6A` sparingly to accent wellness and success messaging
- Apply subtle shadows only on hover states, not by default
- Ensure minimum `44px` height for all clickable touch targets

### Don't
- Don't use high-contrast borders; opt for `1px solid #DEDEDE` separators
- Don't apply shadows to card surfaces at rest; reserve shadows for hover/active states
- Don't mix serif and sans-serif fonts within a single headline or navigation
- Don't exceed `2px` border width on interactive elements
- Don't use pure black (`#000000`) for body text; prefer `#4C292B` for warmth
- Don't apply rounded corners larger than `8px`; maintain sharp, modern aesthetic
- Don't layer multiple color overlays; use single-layer transparency for overlays
- Don't apply letter spacing to any text; rely on font natural tracking
- Don't place more than 3 buttons in a single row on mobile
- Don't use `#D02E2E` or `#FF4B00` for non-critical messaging

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–479px | Single-column layout, full-width containers, `16px` padding, touch-friendly `48px` targets |
| Tablet | 480px–1023px | 2-column grids, `20px` padding, `24px` section spacing |
| Desktop | 1024px–1199px | 3-column grids, `24px` padding, `32px` section spacing, `52px` vertical rhythm |
| Wide | 1200px+ | Max-width `1200px` container centered, 3-column grids, hero sections full-bleed |

### Touch Targets

- Minimum height: `44px` for buttons and interactive elements
- Minimum width: `44px` for icon buttons
- Minimum tap area: `6mm × 6mm` (approximately `44px × 44px` at 96dpi)
- Minimum spacing between targets: `8px` (or contained within `44px` height)
- Text links should have `12px` padding above and below for easy selection

### Collapsing Strategy

**Navigation:** Desktop full horizontal menu → Tablet condensed menu → Mobile hamburger icon with drawer

**Grids:** 3-column (desktop) → 2-column (tablet) → 1-column (mobile)

**Hero Section:** Full-width image with centered text overlay (all breakpoints); text size reduces from `39px` to `28px` on tablet, `24px` on mobile

**Cards:** Full-width stack with `16px` gap on mobile; 2-up on tablet; 3-up on desktop

**Images:** 100% width up to container max-width; maintain aspect ratio with `object-fit: cover` for product grids

**Padding:** `16px` mobile → `20px` tablet → `24px–32px` desktop

**Font Sizes:** Reduce by 10–15% at tablet breakpoint; reduce another 10% at mobile

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Warm Chocolate (`#4C292B`) — dominates navigation, buttons, and brand identity
- **Secondary CTA:** Deep Teal (`#142B26`) — alternative action for elevated buttons
- **Error/Alert:** Danger Red (`#D02E2E`) — error states and critical warnings
- **Success:** Natural Green (`#56AD6A`) — wellness confirmations and positive messaging
- **Background (Default):** Off-White (`#FFFFFF`) — primary content area
- **Background (Warm):** Cream (`#F6F3EB`) — secondary sections and containers
- **Text (Primary):** Pure Black (`#000000`) — high-contrast body copy
- **Text (Secondary):** Warm Chocolate (`#4C292B`) — navigation and UI labels
- **Text (Tertiary):** Warm Taupe (`#7F6665`) — disabled or muted text
- **Border:** Subtle Border (`#DEDEDE`) — structural lines and card edges
- **Overlay:** Warm Chocolate with 0.4–0.5 opacity — hero image overlays

### Iteration Guide

1. **Start with `#4C292B`** for all primary brand elements, buttons, and navigation. This is the dominant color across 915 instances and defines the brand presence.

2. **Apply cream background (`#F6F3EB`) or off-white (`#FFFFFF`)** as container backgrounds. Alternate between the two for visual hierarchy and section separation.

3. **Use Ivar Display Condensed at 14.5–39px** for all headings, navigation, and button labels. Maintain weight 400 throughout for refined elegance.

4. **Set body text to Figtree at 13–14.5px** with weight 400 for descriptions, labels, and navigation secondary items.

5. **Apply `3px` border radius** to all input fields and interactive components. Maintain `0px` (sharp corners) for cards and containers to preserve modern aesthetic.

6. **Space sections vertically with `52px` minimum gap**, cards with `24px` internal padding, and text elements with `12–16px` margins.

7. **Use `#DEDEDE` borders at 1px** for subtle visual separation instead of bold lines.

8. **Reserve shadows for hover states only**: apply `0 2px 8px rgba(0, 0, 0, 0.08)` on light lift, `0 4px 16px rgba(0, 0, 0, 0.12)` for elevated interaction.

9. **Layer transparency overlays (`rgba(76, 41, 43, 0.4)`)** over hero images instead of adding shadows for depth.

10. **Maintain minimum 44px touch targets** on mobile and 8px spacing between interactive elements.

11. **Collapse to single-column layouts at 480px breakpoint** with full-width cards and stacked navigation.

12. **Reserve `#56AD6A` for wellness success states** and `#D02E2E` for critical errors—use sparingly for maximum impact.