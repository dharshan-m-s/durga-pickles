# Durga Pickles — Premium React App

A responsive React/Vite website for Durga Pickles / Sree Durga Food Products.

## Design sources researched
- **Vengeance UI** — used as inspiration for spotlight surfaces, glow-border cards, magnetic interactions, animated hero/navigation patterns, and scroll-friendly motion. Vengeance UI describes its components as open-source, React/Next.js compatible, with Framer Motion and Tailwind in its stack.
- **Animate UI** — used as inspiration for animation-first, copy-owned React primitives and restrained motion. Animate UI is a copy-first component distribution built around Motion and Tailwind.
- **Uiverse** — used as inspiration for open CSS/React micro-interactions, buttons, hover states, cards, and patterns. Its public repository states the elements are MIT licensed and the site offers HTML/CSS, Tailwind, React and Figma formats.
- **Uilora** — used as inspiration for cinematic, interaction-first composition and keeping complex motion modular. Uilora documents a copy-paste approach and cautions against overloading a view with heavy animations.
- **Forget UI** — researched, but the available package is a Vue 2 component library with releases from 2019/2020. It is not installed into this React 19 app because forcing a legacy Vue dependency into a React application would add unnecessary incompatibility.

## Project
- React 19 + Vite
- React Router
- Motion for React
- Lucide icons
- Data-driven product catalogue
- Product filters/search
- Product detail routes
- WhatsApp enquiry links
- Gallery lightbox
- Responsive navigation
- Reduced motion support

## Run
```bash
npm install
npm run dev
```


## Mobile-first audit (2026-09-01)
- Tuned layouts for 320px through large desktop widths.
- Added `viewport-fit=cover`, safe-area spacing, and dynamic viewport sizing.
- Mobile navigation uses a scrollable drawer and locks background scrolling while open.
- Touch controls use ~44px or larger targets where practical.
- Product catalog uses compact two-column cards on phones; ultra-small screens retain a safe compact layout.
- Search and form controls use a 16px input font to avoid iOS Safari auto-zoom.
- Hover-only interactions are disabled on touch devices.
- Added a non-blocking floating WhatsApp enquiry affordance on phones.
- Gallery/lightbox and hero composition were tuned for short phone viewports.
