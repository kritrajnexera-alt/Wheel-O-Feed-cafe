# Design: Wheel O Feed

## Visual Theme

Dark industrial cafe. Warm, premium, textured. Think espresso bar meets industrial loft — deep browns, warm gold light, honest materials.

## Color Palette

| Role | OKLCH | Hex | Usage |
|---|---|---|---|
| Surface (bg) | oklch(0.12 0.025 45) | #1C0F0A | Page background, full-width sections |
| Surface (card) | oklch(0.14 0.01 45) | #1A1A1A | Card backgrounds, footer |
| Surface (raised) | oklch(0.16 0.02 45) | #2C1A12 | Elevated surfaces, hover states |
| Ink (primary) | oklch(0.92 0.01 80) | #F5F0EB | Body text, headings, primary content |
| Accent | oklch(0.72 0.15 75) | #E8A045 | CTAs, highlights, hover states, price tags |
| Accent-muted | oklch(0.72 0.15 75 / 0.3) | rgba(232,160,69,0.3) | Glows, backgrounds, subtle borders |
| Border | oklch(0.72 0.15 75 / 0.1) | rgba(232,160,69,0.1) | Dividers, card borders |
| Body-text | oklch(0.6 0.01 80) | rgba(245,240,235,0.6) | Secondary text, descriptions |

## Typography

| Role | Font | Weight | Size (clamped) |
|---|---|---|---|
| Display/Hero | Space Grotesk | 700 | clamp(2.5rem, 8vw, 5.5rem) |
| Heading h2 | Space Grotesk | 700 | clamp(1.75rem, 4vw, 3rem) |
| Heading h3 | Space Grotesk | 700 | clamp(1.25rem, 2.5vw, 1.75rem) |
| Body | Inter | 400 | clamp(0.875rem, 1.2vw, 1.125rem) |
| Small/Meta | Inter | 500 | 0.75rem–0.875rem |

Line height: headings 1.1, body 1.6. Max body width: 65ch.

## Spacing Scale

Using multiples of 4: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128.

Section padding: py-20 (80px) mobile, py-24 (96px) desktop.
Card padding: p-6 (24px) mobile, p-8 (32px) desktop.

## Border & Radius

- Cards: 16px (rounded-2xl) with 1px border of amber/10
- Buttons: 9999px (pill/rounded-full)
- No decorative left borders, no gradient outlines

## Motion

- Hero: opacity 0→1, y 40→0 over 0.8s, ease-out
- Scroll reveals: opacity 0→1, y 30→0 over 0.5–0.6s, staggered by index
- Card hover: y -4, scale 1.02, amber glow box-shadow at 0.3 opacity
- Marquee: continuous infinite scroll at 30s/cycle
- Steam: CSS keyframe opacity/translate cycles over 4s
- Reduced motion: all animations collapse to 0s or instant opacity

## Components

### Navbar
- Fixed top, espresso/95 bg with backdrop-blur
- Logo left: text "Wheel O Feed" with amber "O"
- Links right: uppercase, 14px, amber active / cream/70 hover
- Mobile: hamburger → full-height slide-down overlay
- Border-bottom: 1px amber/10

### Marquee Ticker
- Full-width overflow hidden
- Items looped twice for seamless scroll
- Amber/60 text with ✦ separators
- 30s linear animation

### Menu Cards
- Charcoal bg, 16px radius, 1px amber/10 border
- Amber price pill top-right
- Category label small/amber/30 top-right
- Hover: lift 4px, amber glow shadow

### Buttons
- Primary: amber bg, espresso text, pill shape
- Outline: transparent, cream/30 border, cream text
- Both: hover scale 105%, active scale 95%, 0.3s transitions

### WhatsApp Float
- Fixed bottom-right, 56px, #25D366 bg
- Spring entrance animation (1s delay)
- Hover scale 1.1, tap scale 0.9
