# Durga Pickles UI / Design Audit Sources — September 2026

This build uses the existing React + Vite architecture and selectively applies ideas from public design/component references rather than adding large, incompatible UI dependencies.

## Apple Human Interface Guidelines
- Design principles: https://developer.apple.com/design/human-interface-guidelines/design-principles
- HIG overview: https://developer.apple.com/design/human-interface-guidelines
- Accessibility: https://developer.apple.com/design/human-interface-guidelines/accessibility

Applied principles:
- Purpose: product discovery and direct enquiry are the primary jobs of the site.
- Agency: users can move directly between Home, Products, Gallery and Contact and can recover from navigation states.
- Familiarity: predictable navigation, recognizable controls and consistent iconography.
- Flexibility: responsive layouts, touch targets, safe-area support, keyboard focus and reduced-motion support.
- Simplicity: decorative motion is secondary to the real product photography and content hierarchy.
- Craft: typography, spacing, image presentation, lightbox behavior and mobile navigation were refined together.
- Delight: restrained motion, spotlight surfaces and cinematic image presentation add personality without overwhelming the products.

## Vengeance UI
https://www.vengenceui.com/components

Used as inspiration/reference for spotlight surfaces, magnetic-feeling CTAs, marquee motion and animated product presentation. The project already uses Motion for React, so no duplicate animation runtime was added.

## Animate UI
https://animate-ui.com/

Used as a reference for Motion-based reveal/page transitions and reduced-motion-friendly animation patterns.

## Uiverse
https://uiverse.io/

Used as a source of open-source interaction/pill/button ideas. No remote Uiverse code is required at runtime.

## Uilora / UI Lora
https://www.uilora.com/

Used as a reference for cinematic image-led composition, premium product cards, responsive/mobile-first layouts and restrained high-fidelity motion. Uilora's own guidance emphasizes avoiding excessive GPU-heavy animation on lower-end devices, so the build deliberately avoids WebGL-heavy effects.

## Forget UI
The searched `forget-ui` package is a legacy Vue 2 component library (MIT) and is not compatible with this React/Vite application without introducing an unnecessary Vue runtime. Its drawer/component patterns were considered, but it was intentionally not installed.

## Icons / SVG
Lucide React is used for interface icons. The brand favicon remains an inline SVG so no external icon download is required.

## Product photography
The original photographs supplied for this build are stored under `public/products/originals/` and are used directly. They are not regenerated or recompressed. The Gallery and Product Detail lightboxes open the original files.
