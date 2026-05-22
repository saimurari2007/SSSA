# Product Requirements Document (PRD)
## Sri Sai Satya Ayurvedhalaya — Premium Ayurvedic Store Website

**Version:** 1.0
**Status:** Production Live
**Last Updated:** May 2026

---

## 1. Project Purpose

### 1.1 Mission
To provide a premium digital storefront for **Sri Sai Satya Ayurvedhalaya**, an authorized stockist and super stockist of authentic Ayurvedic medicines, that communicates trust, heritage, and purity while driving offline order inquiries via WhatsApp and phone.

### 1.2 Problem Statement
Traditional Ayurvedic medicine stores in India lack a credible online presence. Customers searching for genuine Ayurvedic products in Ballari, Karnataka, have no way to validate a store's authenticity, browse product categories, or initiate orders remotely. The store needed a website that reflects its 40+ year legacy and premium positioning without requiring full e-commerce infrastructure.

### 1.3 Goals
- Establish a credible, premium digital presence for a heritage Ayurvedic business
- Drive qualified inbound inquiries via WhatsApp and phone calls
- Showcase the breadth of partnered brands (Dabur, Baidyanath, Zandu, etc.)
- Educate visitors about the store's authorized distribution status
- Communicate trust through design (heritage cues, certifications, transparency)
- Provide clear store information (location, timings, contacts)

---

## 2. Brand Identity

### 2.1 Brand Archetype
**The Sage / The Caregiver** — Wise, trusted, nurturing, authoritative. The brand positions itself as a guardian of authentic Ayurvedic knowledge and products.

### 2.2 Brand Voice & Tone
- **Authoritative** — "Decades of trust", "Authorized Stockist", "Purity Guaranteed"
- **Warm & Nurturing** — "Rooted in Ayurveda. Trusted for Generations."
- **Premium/Editorial** — "Curated Categories of Traditional Remedies", "Seamless Delivery Across Karnataka"
- **Authentic** — Real imagery (raw ingredients, mortar & pestle), sans hyperbole
- **Local Pride** — "Rooted in Ballari", "Serving Karnataka", Kannada locale support

### 2.3 Visual Brand Elements
- **Logo:** Text-based with Leaf icon (Lucide `Leaf` component)
- **Color language:** Forest greens + earth browns + muted gold palette
- **Typography:** Cormorant Garamond (serif, heritage) + Plus Jakarta Sans (modern, clean)
- **Signature motif:** Botanical leaf shapes (cursor, particles, decorative SVGs)
- **Texture:** Raw ingredient photography as watermark/texture
- **Signature phrase (Sanskrit):** "Arogya Paramam Bhagyam" — Health is the ultimate wealth

---

## 3. Target Audience

### Primary
- **Health-conscious individuals** in Ballari and across Karnataka seeking authentic Ayurvedic medicines
- **Age 35-65**, medium to high disposable income
- Prefer traditional medicine over allopathy for chronic conditions
- Value brand reputation, heritage, and purity guarantees
- Comfortable ordering via WhatsApp/phone rather than e-commerce

### Secondary
- **Patients with prescriptions** from Ayurvedic practitioners
- **Small wellness stores/resellers** looking for bulk supply from an authorized super stockist
- **Younger wellness seekers** (25-35) interested in herbal supplements, immunity care, and natural personal care

---

## 4. UI/UX Direction

### 4.1 Design Philosophy
**"Premium Minimalism with Ayurvedic Soul"**

The design avoids cluttered, overly "herbal" aesthetics (no stock photos of fields, no garish greens). Instead it adopts a restrained, editorial approach — generous whitespace, frosted glass surfaces, subtle botanical motifs, and a muted earth-toned palette. Every element serves clarity and trust.

### 4.2 Key UX Principles
- **Frictionless contact:** Every section has a path to WhatsApp or phone call
- **Scannable information:** Clear section hierarchy, prominent labels, bullet-point product lists
- **Visual storytelling:** Parallax layers, ambient light effects, and thoughtful photography
- **Mobile-first:** All layouts collapse gracefully to single column; navigation uses slide-out drawer
- **Performance:** Smooth 60fps scroll, instant font loading, optimized images

---

## 5. Visual Style

### 5.1 Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `ivory` | `#FDFDF8` | Primary page background |
| `offwhite` | `#F8FAF6` | Alternate section background |
| `sage` | `#C9DCC6` | Borders, subtle accents |
| `herbal-soft` | `#A8CFA3` | Interactive accents, highlights |
| `forest` | `#3D5A40` | Primary text, CTAs, main brand |
| `earth` | `#8B6B4A` | Secondary/decorative text |
| `gold` | `#D9C6A5` | Luxury labels, premium accents |

### 5.2 Typography

| Purpose | Font | Weight | Size Range |
|---------|------|--------|------------|
| Hero Headline | Cormorant Garamond | 700 | 48px–96px |
| Section Headings | Cormorant Garamond | 700 | 30px–48px |
| Card Headings | Cormorant Garamond | 700 | 18px–24px |
| Body Text | Plus Jakarta Sans | 300 | 12px–16px |
| Small/Labels | Plus Jakarta Sans | 400–700 | 9px–10px |
| CTAs | Plus Jakarta Sans | 700 (uppercase) | 10px |

### 5.3 Spacing
- Page max-width: `max-w-7xl` (1280px)
- Horizontal padding: `px-6 md:px-12`
- Section padding: `py-24 md:py-36`
- Grid gap baseline: `gap-6`
- Card padding baseline: `p-6 sm:p-8`

### 5.4 Visual Effects
- **Frosted glass:** `bg-white/45 backdrop-blur-md border border-sage/15`
- **Ambient glows:** Radial gradients with `filter blur-[120px]`
- **Parallax:** Scroll-driven Y transforms (framer-motion `useTransform`)
- **Hover lifts:** `y: -6` to `-8` with scale
- **Wave dividers:** SVG organic curves between sections (Hero bottom)
- **Custom cursor:** Leaf-shaped SVG with smooth lerp tracking

---

## 6. Features & Functionality

### 6.1 Implemented Features
1. **Smooth Single-Page Scroll** — Lenis-powered with navbar hide/show on scroll direction
2. **Parallax Hero** — Multi-layer parallax (background, text, floating leaves) with framer-motion
3. **Custom Leaf Cursor** — Desktop-only SVG cursor that rotates to face movement direction, with click particles
4. **Canvas Floating Leaves** — 30 leaves with 3 morphologies (tulsi, neem, petal) that react to mouse movement
5. **Frosted Glass Cards** — Consistent card design language across all sections
6. **Brand Showcase Grid** — 6 brand cards with role badges, hover lift, and gradient overlay on image banner
7. **Product Categories** — 8 categories with click-to-open detail modal showing stocked items
8. **WhatsApp Integration** — Direct WhatsApp links from categories, orders, and contact form
9. **Google Maps Embed** — Interactive map with grayscale filter that desaturates on hover
10. **Contact Form** — Name/phone/category/message form that submits via WhatsApp
11. **Mobile Navigation** — Right-slide drawer with smooth overlay
12. **Footer** — Section links, copyright, location

### 6.2 Not Implemented (Future Scope)
- E-commerce / shopping cart / payment processing
- Product search or filtering
- Customer reviews / testimonials section
- Blog or educational content
- Multi-page routing (about, products, etc.)
- Analytics / conversion tracking
- Admin panel for inventory updates
- Multi-language support (Kannada, Hindi)

---

## 7. Page Structure

### 7.1 Single-Page Layout Order

```
LeafCursor (global overlay)
├── LeafParticles (global canvas overlay)
├── Navbar (fixed, z-50)
└── Main Content (z-20, relative)
    ├── Hero (#hero)
    │   ├── Parallax layers (bg, text, leaves)
    │   ├── Heading + CTAs
    │   └── Frosted glass image frame
    ├── About (#about)
    │   ├── Story text + stats counters
    │   └── Parallax image + floating quote badge
    ├── Brands (#brands)
    │   ├── Image banner (left column)
    │   └── Brand cards grid (right column)
    ├── Categories (#categories)
    │   ├── Category cards grid
    │   └── Detail modal (AnimatePresence)
    ├── Orders (#orders)
    │   ├── 3-step process within frosted container
    │   └── WhatsApp + Phone CTAs
    └── Contact (#contact)
        ├── Info cards (address, phone, timings)
        ├── Google Maps embed
        ├── Inquiry form
        └── Footer
```

---

## 8. User Flow

### Primary Flow (New Visitor)
```
Land on Hero → Scroll through About (learn story) → Browse Brands (validate authenticity)
→ Explore Categories (browse products) → Open Category Modal (view specific items)
→ Contact via WhatsApp from modal OR → Go to Orders section → WhatsApp order
→ OR Go to Contact → Fill form → Submit via WhatsApp → Call or Visit
```

### Direct Action Flow (Returning Customer)
```
Land → Tap "Orders" in Nav → WhatsApp order → Done
```

### Prescription Flow
```
Land → Contact section → Call directly → Pharmacist verifies stock → Order processed
```

---

## 9. Responsiveness Goals

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Mobile | < 640px | Single column, stacked, reduced heading sizes, slide-out nav drawer |
| Tablet (sm) | 640px+ | 2-column grids begin, improved spacing |
| Tablet (md) | 768px+ | Desktop nav visible, full heading sizes, 3/4-column grids |
| Desktop (lg) | 1024px+ | Full 12-column grid layouts, parallax active, custom cursor |
| Wide (xl) | 1280px+ | Max content width, maximum heading size (96px) |

**Achieved:** The site is fully responsive with no horizontal overflow, no broken layouts at any common viewport width.

---

## 10. Accessibility Goals

- Semantic HTML (`<nav>`, `<main>`, `<h1>`–`<h4>`, `<section>`)
- Form labels with `htmlFor`
- `aria-label` on interactive icons
- Focus styles on form inputs
- `antialiased` text rendering
- Keyboard-navigable (anchor-based smooth scroll)
- `select-none` on decorative/icon elements

**Current Gap:** No explicit skip-to-content link, no dark mode, no reduced-motion media query support, no ARIA live regions for dynamic content.

---

## 11. Performance Goals

- **Target:** Sub-3s initial load, smooth 60fps scrolling
- Image optimization via `next/image` (automatic WebP, responsive sizes)
- Font optimization via `next/font` (swap display, subset loading)
- Canvas particle system limited to 30 elements, no DOM overhead
- Custom cursor uses `will-change: transform` and `translate3d`
- No unnecessary JavaScript bundles (no e-commerce, no analytics)
- CSS `filter` blur effects GPU-accelerated

**Current Status:** Achieved — lightweight single-page app, minimal JS, no external tracking scripts, optimized assets.

---

## 12. Animation Philosophy

### Core Principles
1. **Motion with purpose** — Every animation communicates hierarchy, attention, or spatial relationship
2. **Subtlety over spectacle** — No gratuitous animations; effects enhance, not distract
3. **Performance first** — GPU-accelerated transforms, limited particles, will-change hints
4. **Consistent easing** — Custom cubic-bezier `[0.25, 1, 0.5, 1]` for entry, standard `duration-300` for hover
5. **Scroll as narrative** — Parallax creates depth and guides the user through the brand story

### Animation Patterns Used
- **Entry:** Fade + slide up (initial/animate)
- **Parallax:** Scroll-driven Y offset at different rates for depth illusion
- **Hover:** Lift + border glow + icon rotation
- **Modal:** Scale + fade with AnimatePresence
- **Cursor:** Lerp-based smooth following with rotation toward movement
- **Particles:** Canvas-based physics (gravity, drift, mouse repulsion)

---

## 13. Technical Architecture

```
┌─────────────────────────────────────────────────┐
│                    Browser                       │
├─────────────────────────────────────────────────┤
│  Next.js 16 (Static Export / Server)            │
│  ├── App Router (Single Route: /)               │
│  ├── React 19 Client Components                 │
│  └── Tailwind CSS v4 (JIT, CSS config)          │
├─────────────────────────────────────────────────┤
│  Runtime Libraries                              │
│  ├── Framer Motion (animations, parallax)       │
│  ├── Lenis (smooth scroll, scroll control)      │
│  ├── Lucide React (icons)                       │
│  └── Canvas API (LeafParticles)                 │
├─────────────────────────────────────────────────┤
│  Build Toolchain                                │
│  ├── TypeScript (strict mode)                   │
│  ├── PostCSS + @tailwindcss/postcss             │
│  └── ESLint (Next.js core-web-vitals + TS)      │
└─────────────────────────────────────────────────┘
```

### Path Aliases
- `@/*` → `./src/*` (configured in tsconfig.json)

---

## 14. Component Strategy

### Current Architecture
- **Flat structure:** All components in `src/components/` with no subfolders
- **Single responsibility:** Each section is one component (Hero, About, Brands, etc.)
- **Global overlays:** LeafCursor and LeafParticles mount at the root level
- **No shared state library:** All state is local `useState`/`useRef`
- **No prop drilling beyond 1 level:** Components are independent and don't share props

### Recommendations for Growth
- Extract shared patterns into utility components (FrostedCard, SectionHeader, CTAButton)
- Create a `src/components/ui/` folder for primitives (Button, Card, Badge, Input)
- Use CSS module or inline Tailwind (current approach) — no plan to add CSS-in-JS
- Keep state management local; the site does not need Zustand/Redux
- If more pages are added, consider layout nesting in App Router

---

## 15. Future Scalability Considerations

### Low Effort / High Impact
- Add Google Analytics or Plausible for conversion tracking
- Add more product detail via modal expansion (images, pricing, dosage)
- Add a "Testimonials" section
- Add WhatsApp click-to-chat floating button

### Medium Effort
- Router-based pages for individual brand or category detail pages
- Blog/educational section for Ayurvedic knowledge
- Multi-language support (Kannada, Hindi via next-intl or next-i18next)
- Dark mode with Tailwind v4 `@dark` variant

### High Effort (Major Rearchitecture)
- Full e-commerce with inventory management, cart, and UPI/payment gateway
- Admin panel for inventory and order management
- Customer accounts and order history
- API integration with ERP for real-time stock checks

---

## 16. Design Consistency Guidelines

### What to Always Maintain
- All sections: `py-24 md:py-36` vertical padding
- Inner containers: `max-w-7xl mx-auto px-6 md:px-12`
- Color tokens from `@theme` only (no raw hex values outside globals.css)
- Frosted glass formula: `bg-white/45 backdrop-blur-md border border-sage/15`
- CTA formula: `rounded-full text-[10px] font-bold uppercase tracking-widest`
- Headings: serif, bold, tracking-tight
- Body: sans, font-light, low opacity (text-forest/75 or /80)
- Label pattern: `text-[10px] uppercase tracking-[0.2em] text-gold font-bold`
- Group hover pattern: `group` + `group-hover:`
- Section alternating backgrounds: ivory → offwhite → ivory → offwhite → ivory → offwhite

### What to Never Introduce
- Additional font families (stick to Cormorant Garamond + Plus Jakarta Sans)
- Bright/saturated colors (no reds, blues, yellows)
- Stock photography not matching the raw ingredient aesthetic
- Heavy shadows or gradients that clash with the frosted glass system
- Dropshadow-heavy UI (current uses subtle shadows only)

---

## 17. Current Implementation Observations

### Strengths
- Exceptional visual polish and design consistency
- All animations are tasteful and performance-conscious
- Strong brand identity conveyed through every visual choice
- Mobile responsiveness is thorough and well-tested
- No unnecessary dependencies or bloat
- Clean, readable component structure
- Semantic SEO metadata (Open Graph, keywords)

### Areas for Improvement (Non-Critical)
- GSAP is installed but unused (remove or document)
- No `loading="lazy"` on below-fold images (Hero image has `priority`, others use `fill` but no explicit `loading`)
- No error boundaries or loading states
- Contact form has no client-side validation beyond `required`
- No `reduced-motion` media query support
- No keyboard escape handler for the categories modal
- No 404 page (not needed for SPA but Next.js will generate a default)
- Meta description could be more keyword-dense for local SEO
- No structured data (JSON-LD) for local business SEO

---

## 18. Constraints to Preserve

1. **No e-commerce** — The business model is offline order fulfillment via WhatsApp/phone
2. **Single page** — All content must remain on one page; no internal routing
3. **Flat component structure** — No subfolder nesting unless scaling requires it
4. **No state management library** — Local state is sufficient
5. **No new font families** — Current pair covers all use cases
6. **No new CSS files** — Tailwind utilities + globals.css only
7. **Custom cursor** — Must remain desktop-only; do not attempt mobile cursor replacements
8. **Canvas particles** — Keep at 30 max; performance-sensitive
9. **No user authentication** — No accounts, no logins, no admin panels
10. **Karnataka-only shipping** — All copy assumes delivery within Karnataka

---

## 19. Technical Debt & Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Next.js 16 breaking changes | Medium | Read `node_modules/next/dist/docs/` before upgrades |
| Tailwind v4 CSS config | Low | Documented in PROJECT_CONTEXT.md |
| Canvas particle performance on low-end devices | Low | Capped at 30 leaves, low opacity |
| Custom cursor not working with screen readers | Low | Cursor is purely decorative |
| No analytics = no conversion data | Medium | Future enhancement |
| WhatsApp number hardcoded in 5 places | Low | Extract to a constant/utility |

---

## 20. Version History

| Date | Version | Changes |
|------|---------|---------|
| May 2026 | 1.0 | Initial production release |
