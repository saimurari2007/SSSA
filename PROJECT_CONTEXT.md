# PROJECT CONTEXT — Sri Sai Satya Ayurvedhalaya

## Complete Project Overview

A single-page, production-ready brand website for **Sri Sai Satya Ayurvedhalaya**, an Ayurvedic medicine stockist and super stockist located in Kambli Bazaar, Ballari, Karnataka. The site serves as a digital storefront — it does **not** have e-commerce; instead it drives WhatsApp and phone inquiries to fulfill orders offline. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lenis scroll, and a custom Canvas-based particle system.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16.2.6 |
| UI Library | React | 19.2.4 |
| Language | TypeScript | ^5 |
| CSS | Tailwind CSS | ^4 (CSS-based config) |
| Animation | Framer Motion | 12.39.0 |
| Animation | GSAP | 3.15.0 (installed, NOT used in code) |
| Smooth Scroll | Lenis | 1.3.23 |
| Icons | Lucide React | 1.16.0 |
| Build | PostCSS + @tailwindcss/postcss | — |
| Lint | ESLint (Next.js config) | — |

**Important:** Tailwind v4 uses CSS-based configuration (`@theme` in `globals.css`), NOT a `tailwind.config.ts` file. Do not create one.

---

## Design System Rules

### Color Palette

Defined in `src/app/globals.css:4-10` via `@theme`:

```
--color-ivory:       #FDFDF8   → Background, containers
--color-offwhite:    #F8FAF6   → Alternate section backgrounds
--color-sage:        #C9DCC6   → Borders, subtle accents, secondary green
--color-herbal-soft: #A8CFA3   → Interactive accents, active states, highlight
--color-forest:      #3D5A40   → Primary text, CTAs, main brand color
--color-earth:       #8B6B4A   → Secondary text, italic headings, decorative
--color-gold:        #D9C6A5   → Luxury accents, labels, decorative elements
```

Root CSS variables (globals.css:17-19):
```
--background: #FDFDF8   → body background
--foreground: #1A2E1D   → body text (darker forest tone)
```

**Usage rules:**
- `bg-ivory` for main page backgrounds (Hero, Brands, Orders sections)
- `bg-offwhite` for alternate section backgrounds (About, Categories, Contact sections)
- `text-forest` for all primary text, headings, strong emphasis
- `text-forest/80` or `/75` for body text
- `text-earth` for decorative/italic headings, secondary accents
- `text-gold` for section labels ("Established Legacy", "Product Portfolio", etc.)
- `bg-forest text-ivory` for primary CTAs (buttons)
- Border color: `border-sage/15`, `/20`, `/30`
- Badge backgrounds: `bg-sage/20`, `bg-forest/5`
- Frosted glass: `bg-white/45 backdrop-blur-md border border-sage/15`

### Typography Rules

**Fonts (from layout.tsx):**
- **Serif (Headings):** Cormorant Garamond — weights 300, 400, 500, 600, 700
  - CSS variable: `--font-cormorant`
  - Tailwind: `font-serif`
- **Sans (Body):** Plus Jakarta Sans — weights 300, 400, 500, 600, 700, 800
  - CSS variable: `--font-jakarta`
  - Tailwind: `font-sans`

**Font size conventions:**
- Hero H1: `text-[48px] sm:text-[62px] md:text-[80px] lg:text-[90px] xl:text-[96px]`
- Section H2: `text-3xl sm:text-4xl md:text-5xl` (tracking-tight, font-bold)
- Card H3/H4: `text-lg md:text-xl` / `text-xl sm:text-2xl` (serif, font-bold)
- Body text: `text-xs sm:text-sm md:text-base` (sans, font-light)
- Small body: `text-[11px]`, `text-xs`
- Labels/badges: `text-[9px]` or `text-[10px]`
- CTAs: `text-[10px]` font-bold uppercase tracking-widest

**Letter spacing conventions:**
- Standard uppercase labels: `tracking-widest` or `tracking-[0.2em]`
- Headings: `tracking-tight`
- Brand name in nav: `tracking-wider`

### Spacing Conventions

**Section level:**
- Vertical padding: `py-24 md:py-36` for all sections
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Header margin bottom: `mb-16 sm:mb-20`

**Card/Padding:**
- Standard card padding: `p-6 sm:p-7` or `p-6 sm:p-8`
- Large container: `p-8 md:p-16` (Orders frosted container)
- Modal: `p-8`

**Grid gaps:**
- `gap-16 lg:gap-20` (about section)
- `gap-10` (brands)
- `gap-6` (categories)
- `gap-10 md:gap-8` (orders steps)
- `gap-10 lg:gap-16` (contact)
- `gap-5 sm:gap-6` (brand cards, contact info cards)

**Element spacing:**
- `space-y-4` for heading groups
- `space-y-6` for paragraph groups
- `space-y-8` for content blocks
- `space-x-2` or `space-x-2.5` for icon+text pairs
- `space-x-8` for nav links

---

## Component Hierarchy

```
RootLayout (layout.tsx)
└── Home (page.tsx)
    ├── LeafCursor (custom cursor with click particles)
    ├── LeafParticles (canvas floating leaves)
    ├── Navbar (fixed, frosted glass, mobile drawer)
    └── <main>
        ├── Hero (parallax, floating leaves, image frame)
        ├── About (grid, parallax image, stats counter)
        ├── Brands (grid, brand cards with hover)
        ├── Categories (grid, detail modal)
        ├── Orders (process steps, CTAs)
        └── Contact (info cards, map, form, footer)
```

---

## Reusable Patterns

### Frosted Glass Card
```tsx
className="bg-white/45 backdrop-blur-md rounded-3xl border border-sage/15 p-6 sm:p-8 shadow-[0_4px_30px_rgba(61,90,64,0.015)]"
```

### Primary CTA Button
```tsx
className="flex items-center space-x-2.5 bg-forest text-ivory hover:bg-forest/95 transition-all duration-300 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md hover:shadow-xl hover:shadow-forest/10"
```

### Secondary CTA Button
```tsx
className="flex items-center space-x-2 bg-transparent text-forest border border-forest/20 hover:bg-sage/10 transition-all duration-300 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest"
```

### Section Label Badge
```tsx
className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold"
```
or pill badge:
```tsx
className="inline-flex items-center space-x-2 bg-sage/20 border border-sage/30 text-forest/90 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]"
```

### Section Header Pattern
```tsx
<div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Label</span>
  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest leading-[1.12]">Heading</h2>
  <p className="font-sans text-forest/75 font-light text-xs sm:text-sm md:text-base max-w-xl">Description</p>
</div>
```

### Ambient Background Glow
```tsx
<div className="absolute top-[20%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-sage/8 filter blur-[120px] pointer-events-none" />
```

### Icon Container
```tsx
<div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-forest">
  <Icon className="w-4 h-4 text-herbal-soft" />
</div>
```

### Scroll Anchor Smooth Nav
```tsx
const handleNavClick = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
```

---

## Responsiveness Guidelines

- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)
- **Mobile-first** approach (base style = mobile, override with sm:/md:/lg:)
- Navbar: `px-6 py-4 md:px-12` — mobile padding smaller
- Desktop nav links hidden on mobile (`hidden md:flex`)
- Mobile drawer: `w-3/4 max-w-xs`, slides from right
- Hero: stacked on mobile (`flex-col lg:flex-row`), heading scales down
- Hero heading: `text-[48px]` mobile → `sm:text-[62px]` → `md:text-[80px]` → `xl:text-[96px]`
- Grids: 1-col on mobile → 2-col at sm/md → multi-col at lg
  - Categories: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
  - Brand cards: `grid-cols-1 md:grid-cols-2`
  - Contact info: `grid-cols-1 sm:grid-cols-2`
- Layout grids (About, Brands, Contact) use `lg:col-span-*` for 12-column split
- Custom cursor only on desktop (`hidden md:block` + `@media (pointer: fine)`)
- LeafParticles: canvas-only desktop effect
- Section padding: `py-24 md:py-36`
- Modal: max-w-lg, centered, padded

---

## Animation Guidelines

### Framer Motion Patterns
- **Parallax:** `useScroll` + `useTransform` with offset `["start start", "end start"]` or `["start end", "end start"]`
- **Entry animations:** `initial={{opacity:0, y:25}}` `animate={{opacity:1, y:0}}` with custom ease `[0.25, 1, 0.5, 1]`
- **Hover cards:** `whileHover={{ y: -6, transition: { duration: 0.3 } }}` (Brands)
- **Hover cards (scale):** `whileHover={{ y: -8, scale: 1.01 }}` (Categories)
- **Modal:** `AnimatePresence` + `initial={{opacity:0, scale:0.95, y:10}}`
- **Icon hover:** `group-hover:rotate-12 transition-transform duration-300` (CSS)

### Transition Defaults
- Entry: `duration: 1.2, ease: [0.25, 1, 0.5, 1]` or `duration: 1.4, delay: 0.15`
- CSS transitions: `transition-all duration-300` / `duration-500` / `duration-700`
- Easing: `ease-in-out` for CSS; custom cubic-bezier `[0.25, 1, 0.5, 1]` for Framer Motion

### Lenis Smooth Scroll
- Duration: 1.4, easing: exponential out
- Initialized in page.tsx useEffect, cleaned up on unmount

### CSS Group Hover Pattern
Always use `group` on parent + `group-hover:` on child.

---

## Folder Structure Explanation

```
src/
├── app/                     # Next.js App Router pages
│   ├── globals.css          # Tailwind v4 @theme, global styles, scrollbar, Lenis
│   ├── layout.tsx           # Root HTML, fonts, metadata, selection color
│   └── page.tsx             # Home page (client component), Lenis init, component assembly
├── components/              # All UI components (flat, no subfolders)
│   ├── Navbar.tsx           # Fixed header, frosted glass, mobile drawer
│   ├── Hero.tsx             # Parallax hero, floating leaves, image frame
│   ├── About.tsx            # Store story, parallax image, stats
│   ├── Brands.tsx           # Brand cards grid, banner
│   ├── Categories.tsx       # Product categories grid, detail modal
│   ├── Orders.tsx           # Order process steps, CTAs
│   ├── Contact.tsx          # Contact info, map, form, footer
│   ├── LeafCursor.tsx       # Custom SVG leaf cursor with particles
│   └── LeafParticles.tsx    # Canvas floating leaf particle system
public/
└── images/                  # Static images
    ├── ayurvedic_raw_ingredients.png
    ├── brand_showcase.png
    ├── hero_herbs.png
    └── mortar_pestle.png
```

---

## Naming Conventions

- **Components:** PascalCase, default export
- **Files:** PascalCase.tsx for components, kebab-case for config
- **CSS classes:** Tailwind utility classes only (no custom CSS classes)
- **Interfaces:** PascalCase, defined above component or in same file
- **State:** camelCase (`selectedCat`, `mobileMenuOpen`, `formData`)
- **Handlers:** `handle*` (`handleNavClick`, `handleSubmit`, `handleWhatsAppOrder`)
- **Refs:** `*Ref` (`containerRef`, `sectionRef`, `cursorRef`)
- **IDs:** lowercase, matching section purpose (`#about`, `#brands`, `#hero`)

---

## Performance Optimizations

- All images use `next/image` with `fill`, `priority` on hero, `loading="lazy"` on map
- Canvas particle system (LeafParticles) — GPU-accelerated, only 30 max leaves
- Custom cursor uses `will-change: transform` and `translate3d` for GPU compositing
- CSS `filter: blur()` for ambient glows (GPU-accelerated)
- Font display: `swap` for both fonts
- Map `loading="lazy"` iframe

---

## Accessibility Patterns

- `aria-label` on menu toggle and close button
- `role="button"` mentioned in cursor hide selector (though not used directly)
- Semantic HTML: `nav`, `main`, `h1`-`h4`, `section` with ids
- Form labels with proper `htmlFor`
- `:` on form inputs
- `select-none` on decorative elements
- `antialiased` on html

---

## Important Warnings

1. **Tailwind v4:** Uses `@import "tailwindcss"` and `@theme` in CSS. Do NOT use `@tailwind` directives or `tailwind.config.ts`. Config is CSS-only.
2. **Next.js 16.2.6:** Read `node_modules/next/dist/docs/` before modifying routing or API patterns. There may be breaking changes from earlier versions.
3. **No e-commerce:** The site drives all orders through WhatsApp (`wa.me`). Do NOT add a payment/cart system unless explicitly asked.
4. **Single page:** All sections are on one page (`src/app/page.tsx`). No additional routes exist.
5. **GSAP is unused:** `gsap` is in package.json but never imported. Do not assume it's part of the active stack.
6. **"use client":** Every component is a client component. The root page is also `"use client"`.
7. **Custom cursor:** The cursor is hidden on desktop (`cursor: none`). If you add interactive elements, ensure they work with cursor-less navigation.
8. **Phone numbers:** Two phone numbers are used — primary: `+919844554437` (Murali Mohan), secondary: `+919880276582` (Radhika). All WhatsApp links use the primary number.

---

## Risky Files to Edit Carefully

1. **`src/app/globals.css`** — Tailwind v4 theme is defined here. Incorrect edits break the entire design system.
2. **`src/app/layout.tsx`** — Font loading, metadata, and root structure. Breaking fonts or metadata affects SEO and rendering.
3. **`src/app/page.tsx`** — Component assembly order, Lenis initialization. Reordering breaks scroll flow.
4. **`src/components/LeafCursor.tsx`** — Complex DOM manipulation, lerp animation loop, particle state management. Fragile.
5. **`src/components/LeafParticles.tsx`** — Canvas rendering loop, physics simulation, resize handling. Easily broken.

---

## AI Editing Instructions

1. **NEVER** add `"use client"` to files that don't need it — but note that ALL current components DO need it.
2. **ALWAYS** use `@/` path alias for imports from `src/`.
3. **ALWAYS** use Tailwind utility classes only. Never write custom CSS in `.css` files beyond the globals.css theme.
4. **ALWAYS** maintain the frosted glass aesthetic (`bg-white/45 backdrop-blur-md border border-sage/15`).
5. **ALWAYS** use existing color tokens from `@theme`. Never use raw hex colors except in the theme definition.
6. **ALWAYS** match existing spacing conventions (`py-24 md:py-36`, `px-6 md:px-12`, `max-w-7xl`).
7. **ALWAYS** use `group` and `group-hover:` patterns for hover effects on containers.
8. **ALWAYS** keep the leaf/ayurvedic botanical design motif.
9. **NEVER** add e-commerce functionality unless explicitly asked.
10. **NEVER** change the font stack unless explicitly asked.
11. **PREFER** extending existing components over creating new ones.
12. **MAINTAIN** the single-page architecture; don't add new routes unless asked.
13. **PRESERVE** the section ID-based scroll navigation pattern.

---

## UI Consistency Rules

- All sections: `py-24 md:py-36` with alternating `bg-ivory` / `bg-offwhite`
- All section headings follow the label + H2 + description pattern
- All CTAs are `rounded-full text-[10px] font-bold uppercase tracking-widest`
- All interactive elements have `transition-all duration-300`
- All frosted cards share the same border/shadow formula
- All decorative background glows follow the same position/size/blur formula
- All icons are from Lucide React unless decorative (emoji icons in categories)
- All external links open in `_blank` via `window.open`
- Brands: `text-[9px]` for badge text, `text-[9px]` for legacy dates
- All sections have `max-w-7xl mx-auto px-6 md:px-12` inner container

---

## Brand / Design Identity Summary

Sri Sai Satya Ayurvedhalaya presents itself as a **premium, trusted, heritage Ayurvedic institution**. The visual identity communicates:
- **Natural/Earthy:** Forest greens, sage, herbal greens, earth tones
- **Luxury/Heritage:** Gold accents, serif typography, italic lightweights
- **Clean/Modern:** Ample whitespace, frosted glass, minimal decoration
- **Botanical:** Leaves throughout (cursor, particles, SVGs, brand mark)
- **Authentic:** Real ingredient photography, "Since 1980", "Shuddha" (pure) label
- **Trustworthy:** Subtle shadows, frosted glass, verified badge patterns

The design draws from high-end editorial/architectural aesthetics — think Aesop, Tata, minimal luxury — rather than typical "herbal shop" design. Every visual decision reinforces purity, authenticity, and heritage.
