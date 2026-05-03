---
name: Domus Vitality
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4d4732'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e775f'
  outline-variant: '#d0c6ab'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#e9c400'
  secondary: '#ad2c00'
  on-secondary: '#ffffff'
  secondary-container: '#d83900'
  on-secondary-container: '#fffbff'
  tertiary: '#1b6d24'
  on-tertiary: '#ffffff'
  tertiary-container: '#9aed94'
  on-tertiary-container: '#1c6d24'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#872000'
  tertiary-fixed: '#a3f69c'
  tertiary-fixed-dim: '#88d982'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005312'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  price-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 32px
---

## Brand & Style

This design system is built to reflect the energetic, reliable, and accessible nature of a modern virtual supermarket. The brand personality is "The Helpful Neighbor"—approachable, efficient, and community-focused. 

The aesthetic follows a **Corporate / Modern** style with a focus on high legibility and high-impact accents. It leverages the bold, rounded nature of the logo to create a sense of friendliness, while the clean structural layout ensures the shopping experience feels professional and trustworthy. The interface emphasizes freshness through generous whitespace and a "food-first" presentation, where vibrant product photography is balanced by a disciplined neutral framework.

## Colors

The palette is derived directly from the core brand identity to ensure instant recognition.

- **Primary (Golden Yellow):** Used for key brand moments and promotional highlights. It signifies energy and value.
- **Secondary (Vibrant Red):** Used for call-to-action buttons (Add to Cart), price tags, and urgent notifications. It drives conversion.
- **Tertiary (Fresh Green):** Introduced specifically for "In Stock" indicators and organic/fresh category markers to reinforce the "freshness" brand pillar.
- **Background (Off-White):** Provides a clean, low-glare canvas that makes the red and yellow pop without fatiguing the user's eyes during long shopping sessions.
- **Text:** High-contrast charcoal for maximum readability on the off-white background.

## Typography

This design system utilizes a dual-font strategy to balance personality with utility.

- **Headlines (Plus Jakarta Sans):** Chosen for its soft, rounded terminals that echo the logo's friendly curves. It creates an optimistic and welcoming tone for category titles and banners.
- **Body & Interface (Work Sans):** A highly legible, professional sans-serif used for product descriptions, nutritional facts, and checkout flows. Its neutral character ensures that information density remains manageable.
- **Price Treatment:** Prices should always be rendered in bold Plus Jakarta Sans to maintain high visibility and brand alignment.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

The spacing rhythm is based on a **8px baseline**, ensuring mathematical harmony across all components. To maintain the "fresh and airy" feeling, vertical stack spacing between product categories is generous (stack-lg), while internal component spacing (between product name and price) is tight (stack-sm) to create a strong visual grouping. 

Product listings should utilize an auto-layout masonry or grid style to allow for varying image aspect ratios while maintaining a consistent horizontal baseline for "Add to Cart" buttons.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**.

- **Level 0 (Background):** The off-white base surface.
- **Level 1 (Cards):** Pure white (#FFFFFF) product cards and search bars. These use a very soft, diffused shadow (10% opacity of the secondary red or a neutral grey) to appear lifted and interactable.
- **Level 2 (Modals/Dropdowns):** Higher elevation with a larger blur radius to signify temporary focus over the shopping interface.

Outlines are avoided in favor of subtle depth changes to keep the UI feeling "soft" and modern, mirroring the 3D-effect seen in the logo.

## Shapes

The shape language is consistently **Rounded**, reflecting the bubbly and approachable nature of the brand mark. 

- **Cards and Containers:** Use `rounded-lg` (1rem) to create a friendly, safe container for product images.
- **Buttons:** Use `rounded-xl` (1.5rem) or pill-shapes to invite clicking and emphasize the "seamless" nature of the experience.
- **Inputs:** Use standard `rounded` (0.5rem) to maintain a professional, structured feel for data entry.

## Components

- **Buttons:** Primary action buttons use the Secondary Red (#FF4500) with white text for maximum "Buy" signal. Secondary buttons use the Primary Yellow with dark text.
- **Product Cards:** Must feature a large white area for the product image, followed by a left-aligned name, price in red, and a prominent "+" button for quick adding.
- **Category Chips:** Use light tints of the primary yellow (e.g., #FFF8E1) with dark text to allow users to filter quickly without visual clutter.
- **Search Bar:** A prominent, rounded white bar with a persistent shadow, placed at the top of the interface to serve as the primary navigation tool.
- **Quantity Selector:** A horizontal pill-shaped component that appears once an item is added, using the secondary red for the "-" and "+" icons to maintain high interaction visibility.
- **Delivery Badge:** A small, rounded tag using the Tertiary Green to indicate "Fast Delivery" or "In Stock," placed in the top corner of product cards.