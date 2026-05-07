# Mortimer / PIED-DE-POULE — Style Reference
> Dark editorial luxury. A full-service salon site built on dark ink backgrounds, high-key portrait photography, and confident category-led navigation.

**Theme:** dark-editorial

Mortimer uses a high-contrast dark aesthetic: deep near-black backgrounds with warm off-white text, punctuated by editorial photography that glows against the darkness. The design is category-driven — hair, nails, face, body — each section feeling like a chapter. Typography mixes a refined serif display font with a clean sans-serif. The effect is premium-salon-in-London, not clinical. Strong whitespace discipline, restrained animation, photography does the heavy lifting.

## Colors

| Name | Value | Role |
|------|-------|------|
| Deep Ink | `#0d0d0d` | Primary background — near-black, warmer than pure black |
| Warm Ivory | `#f5f0e8` | Primary text on dark backgrounds, heading text |
| Soft Parchment | `#ebe5d9` | Secondary text, card surface on dark bg |
| Antique Gold | `#c9a96e` | Accent — CTA hover, decorative lines, price display |
| Mid Charcoal | `#2a2a2a` | Section dividers, secondary backgrounds |
| Ghost Cream | `#faf8f4` | Light-mode surface for footer or inset sections |

## Typography

### Cormorant Garamond / Freight Display substitute
- **Role:** Hero H1, section category headings, display quotes — ultra-refined serif
- **Weights:** 300, 400, 600
- **Sizes:** 40px–80px display, 28px–36px section heading
- **Line height:** 1.05–1.15 very tight for display, tracking: -0.02em to -0.03em
- **Effect:** Makes text feel editorial/print magazine, not web

### DM Sans / Plus Jakarta Sans substitute
- **Role:** Navigation, body, service descriptions, price, buttons
- **Weights:** 300, 400, 500
- **Sizes:** 12px–17px
- **Line height:** 1.60–1.75
- **Letter spacing:** 0.06em–0.10em for all-caps labels and nav

## Spacing & Layout

**Base unit:** 8px

**Density:** generous — editorial breathing room, not compressed

- **Section gap:** 80px–120px
- **Card padding:** 32px–48px
- **Element gap:** 16px–24px
- **Max content width:** 1280px

### Border Radius

- **buttons:** 0px–2px — nearly square, never pill
- **cards:** 0px or 4px — flat, not rounded
- **image containers:** 0px — full bleed or masked

## Components

### Service Category Block
**Role:** Main navigation through salon services

Large category name in serif (40px+), a short 1-line descriptor in sans, a dividing hairline, then service items listed cleanly below. Dark background version: Warm Ivory text on Deep Ink bg. Light inset version: Deep Ink text on Ghost Cream.

### Hero Split Composition
**Role:** First screen

Left 55%: editorial portrait or beauty photography, full height, no border, no radius — image bleeds to edges. Right 45%: dark background, large serif H1 stacked vertically, 2-line max, short descriptor, CTA button. On mobile: image top 45vh, text below, full width.

### Why Us / Feature Cards
**Role:** Trust signals — not SaaS bullets

2-column grid. Each card: number "01 02..." in tiny all-caps gold, short heading in serif 22px, 2-line body in small sans. Dark card on dark page: use Mid Charcoal (#2a2a2a) background with a 1px Antique Gold top border. Never white cards on dark background.

### Navigation
**Role:** Compact sticky header

Logo left, main links center (hidden on mobile), "Book a Visit" button right — always visible. Mobile: logo left, hamburger right, Book CTA inline. Header max height: 60px mobile, 72px desktop. Never taller.

### All-Caps Label / Eyebrow Text
**Role:** Section labels, category tags, trust strip

10px–12px, letter-spacing 0.10em–0.14em, all caps, weight 500. Color: Antique Gold on dark, or Mid Charcoal on light. Used above section headings, above CTA buttons, in navigation labels.

## Do's and Don'ts

### Do
- Use near-black backgrounds for hero and main sections — the photography glows against it
- Use very tight tracking (-0.02em to -0.03em) on large serif headlines — this is what makes them feel editorial, not web
- Use all-caps eyebrow labels above every section heading
- Keep header max 60–72px height on mobile — one row only
- Use the 01/02/03 numbering pattern for why-us sections
- Use Antique Gold sparingly — only for accents, prices, hairline decorations
- Divide service categories with thin hairline borders (1px), not heavy cards
- Let photography breathe — large images, minimal text overlay

### Don't
- Don't use rounded corners on image containers — this kills the editorial feel
- Don't use pill-shaped buttons — square or near-square only
- Don't put colored backgrounds behind service text unless it's a defined card pattern
- Don't use heavy drop shadows — flatness is intentional
- Don't use animated gradients
- Don't stack the mobile header with multiple rows — one compact bar only
- Don't use generic "trust badge" icons — prefer numbered editorial list or text grid
- Don't use lorem ipsum or generic SaaS copy — every line of text should be specific to the business

## Layout Rhythm (Page Flow)

1. Hero: full-bleed split image + serif headline + CTA
2. Service categories: large named grid or horizontal scroll strip
3. Why-us: 2×2 editorial numbered cards, dark bg
4. Most-booked / featured services: clean list with price
5. Photography / atmosphere section: full-width image or 3-column gallery
6. Footer: compact, dark, address + phone + links

## Application to Turkish Beauty Market

- Replace "Book a Visit" → "Randevu Al" or "WhatsApp'tan Randevu"
- Works best for: çok hizmetli salonlar (saç + makyaj + tırnak + kaş), hair studios, beauty centers with 5+ services
- Works for: medikal estetik klinikleri with premium positioning
- Avoid for: friendly/warm neighborhood salons — too intense
- The 01/02/03 why-us pattern translates perfectly: "01 Bridal Konsept", "02 Uzman Ekip" etc.
- Keep Turkish copy at same line-length rhythm — short, confident, not wordy
