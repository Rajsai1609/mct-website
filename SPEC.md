# MC Technology Website - SPEC.md

## 1. Concept & Vision

A clean, professional AI automation agency website inspired by Formiqa's SaaS aesthetic. The design features alternating light/dark sections, generous whitespace, and a modern tech-forward feel. Orange and black create a bold, energetic brand presence while maintaining corporate credibility.

## 2. Design Language

### Aesthetic Direction
Formiqa-inspired SaaS aesthetic — alternating section backgrounds (dark/light), clean card layouts, subtle blur effects, and professional tech company feel.

### Color Palette
- **Background Dark**: `#0a0a0a` (near-black)
- **Background Light**: `#f8fafc` (slate-50)
- **Background Card**: `#111111` (zinc-900)
- **Primary Accent**: `#f97316` (orange-500)
- **Primary Light**: `#fb923c` (orange-400)
- **Text Primary Dark**: `#fafafa` (near-white on dark)
- **Text Primary Light**: `#0f172a` (slate-900 on light)
- **Text Secondary**: `#64748b` (slate-500)
- **Border**: `#e2e8f0` (slate-200 for light sections)

### Typography
- **Display Font**: `Poppins` (600-700 weight) — clean, modern headlines
- **Body Font**: `Inter` — highly readable body text
- **Headings**: `text-3xl md:text-4xl lg:text-5xl tracking-tight`
- **Body**: `text-base text-slate-500 leading-relaxed`

### Spatial System
- Section padding: `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Border radius: `rounded-xl` (cards), `rounded-full` (buttons)

### Motion Philosophy
- Subtle 0.2s ease transitions on all interactions
- Fade-up reveals on scroll (bidirectional)
- Hover: scale, shadow lift, color shifts
- No jarring or continuous animations

### Visual Assets
- Icons: Lucide React (stroke-width: 1.5)
- Logo: MC Technology hexagon logo
- Decorative: Subtle gradient overlays, card shadows

## 3. Layout & Structure

### Page Flow (Alternating Sections)
1. **Navbar** — Sticky, transparent → blur on scroll
2. **Hero** — Dark bg, bold headline, CTAs, gradient overlay
3. **Quicklinks** — Light bg, horizontal nav pills
4. **Services** — Dark bg, clean card grid
5. **App Integrations** — Light bg, logo grid showing tools
6. **Process** — Dark bg, numbered steps
7. **Testimonials** — Light bg, quote cards
8. **Metrics** — Dark bg, stat counters
9. **FAQ** — Light bg, accordion
10. **CTA** — Dark bg, full-width conversion section
11. **Footer** — Dark bg, 4-column grid

### Responsive Strategy
- Mobile-first approach
- Cards stack on mobile, grid on desktop
- Hamburger menu on mobile

## 4. Features & Interactions

### Navigation
- Logo left, links center, CTA right
- Smooth scroll to sections
- Mobile: hamburger menu with slide-in drawer

### Hero Section
- Large headline with gradient text accent
- Subtitle in muted color
- Two CTA buttons (primary filled, secondary outlined)
- Subtle gradient overlay

### Quicklinks
- Horizontal row of navigation pills
- Light background, clean styling
- Click to scroll to section

### Services Grid
- 5 service cards in responsive grid
- Icon, title, description per card
- Hover: subtle lift and shadow

### App Integrations
- Grid of app/tool logos
- Categories: Communication, CRM, Productivity, AI tools
- Clean row-based layout

### Process Steps
- 4 numbered steps
- Clean card or row style
- Step number highlighted

### Testimonials
- Quote cards with client info
- Client name, company, role
- Star ratings or quote marks

### Metrics Counter
- 6 stats in responsive grid
- Large number + label
- Subtle counter animation

### FAQ Accordion
- Expandable Q&A items
- Clean plus/minus indicator
- Smooth height transition

### Final CTA
- Bold headline
- Single primary CTA button
- Gradient background accent

### Footer
- Logo and tagline
- Link columns (Services, Company, Legal)
- Social links
- Copyright

## 5. Component Inventory

### Button (Primary)
- bg-orange-500, white text
- Hover: bg-orange-400, scale-[1.02]
- Active: scale-[0.98]

### Button (Secondary)
- bg-transparent, border border-slate-300
- Hover: border-orange-500, text-orange-500

### Card (Dark)
- bg-zinc-900, border border-white/10
- Hover: border-white/20, shadow-lg

### Card (Light)
- bg-white, border border-slate-200
- Hover: shadow-md

### Navbar
- Fixed top, transparent → bg-black/80 on scroll
- backdrop-blur when scrolled

## 6. Technical Approach

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Inter)
- **State**: React useState for FAQ, mobile menu

### Dependencies
- `framer-motion` - animations
- `lucide-react` - icons
- `clsx` - conditional classes
