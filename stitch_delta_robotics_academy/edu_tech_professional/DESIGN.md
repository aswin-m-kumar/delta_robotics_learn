---
name: Edu-Tech Professional
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#5a4136'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#8e7164'
  outline-variant: '#e2bfb0'
  surface-tint: '#a04100'
  primary: '#a04100'
  on-primary: '#ffffff'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#ffb693'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#586062'
  on-tertiary: '#ffffff'
  tertiary-container: '#939a9c'
  on-tertiary-container: '#2b3234'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#dde4e6'
  tertiary-fixed-dim: '#c1c8ca'
  on-tertiary-fixed: '#161d1f'
  on-tertiary-fixed-variant: '#41484a'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system is built for the next generation of engineers, balancing academic rigor with the excitement of hands-on creation. The brand personality is **authoritative yet accessible**, positioning the platform as a professional gateway into the world of robotics.

The visual direction follows a **Modern Corporate** style tailored for education. It prioritizes clarity and functional beauty, utilizing significant whitespace to reduce cognitive load during complex learning tasks. While the core of the experience is clean and light, high-energy orange accents and geometric motifs maintain a connection to the physical hardware and the spark of innovation. The result is an environment that feels organized, trustworthy, and inspiring for both students and educators.

## Colors

The palette is anchored by the high-visibility orange from the logo, used strategically for action and emphasis.

- **Primary (Orange):** Reserved for primary calls-to-action, progress indicators, and active states. It represents the energy of mechanical motion.
- **Secondary (Deep Black):** Used for headlines and primary branding to provide a grounded, professional contrast.
- **Neutrals:** A range of cool grays provides structure. The background is a crisp white to ensure maximum legibility for technical documentation and code snippets.
- **Functional Colors:** Success, Error, and Warning states should use standard semantic hues, but adjusted to match the saturation levels of the primary orange for visual harmony.

## Typography

Typography is a mix of three distinct roles to reinforce the "Edu-Tech" narrative:

1.  **Manrope (Headlines):** A modern, geometric sans-serif that feels engineered and precise. Used for all major page headings.
2.  **Inter (Body):** Selected for its exceptional legibility in long-form educational content and interface labels.
3.  **JetBrains Mono (Technical):** Used for code blocks, sensor data, and technical specs. It introduces a "developer" aesthetic that signals the platform's robotics core.

Weight is used to establish hierarchy: use ExtraBold for main titles to mirror the strength of the logo, and Regular for body text to ensure a comfortable reading experience.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop, collapsing to 4 columns for mobile. 

- **Density:** The system uses "Generous" spacing to prevent the technical content from feeling overwhelming. Padding within cards and containers should lean towards the larger end of the scale (`md` to `lg`).
- **Rhythm:** An 8px base unit ensures mathematical consistency across all elements.
- **Breakpoints:**
  - Mobile: < 600px (16px margins)
  - Tablet: 600px - 1024px (24px margins)
  - Desktop: > 1024px (Max-width 1440px, centered)

## Elevation & Depth

To maintain a "Professional" feel, the system avoids heavy shadows. Instead, it uses **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Background):** Pure white (#FFFFFF) or subtle gray (#F8F9FA) for the main canvas.
- **Level 1 (Cards/Surface):** White background with a 1px border in `#E5E7EB`.
- **Level 2 (Interactive):** When hovered, elements may lift slightly using a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)) and a subtle increase in border contrast.
- **Separation:** Use thin horizontal rules or subtle background shifts rather than deep shadows to separate content sections.

## Shapes

The shape language is **Rounded**, reflecting a friendly and safe educational environment. 

- **Standard Radius (0.5rem):** Used for buttons, input fields, and small UI components.
- **Large Radius (1rem):** Used for content cards, modals, and container surfaces.
- **Geometric Accents:** While UI elements are rounded, background decorative elements may use sharp-angled "Delta" triangles (referencing the logo) to remind users of the brand's technical precision.

## Components

### Buttons
- **Primary:** Solid orange (#FF6B00) with white text. Bold Manrope caps or title case.
- **Secondary:** Deep black (#0F0F0F) or outlined orange.
- **Tertiary:** Ghost style (text only) with an icon suffix for navigation.

### Input Fields
- White fill with a light gray border. On focus, the border transitions to Orange with a 2px stroke. Labels use Inter SemiBold.

### Cards
- White background, 1px light border, and 1rem corner radius. Cards should have generous internal padding (24px-32px).

### Chips/Tags
- Used for "Difficulty Level" or "Subject". These use a light tinted background of the primary color (e.g., 10% opacity orange) with dark orange text.

### Progress Bars
- Thick, rounded tracks. The active progress should be the brand orange, while the remaining track is a very light gray.

### Code Blocks
- Dark background (Secondary color) with syntax highlighting. Use JetBrains Mono for the typeface.