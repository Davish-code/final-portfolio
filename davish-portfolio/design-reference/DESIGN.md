---
name: Kinetic Obsidian
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#dec48b'
  on-secondary: '#3e2e03'
  secondary-container: '#59471a'
  on-secondary-container: '#cfb67e'
  tertiary: '#ffc08e'
  on-tertiary: '#4d2600'
  tertiary-container: '#ff9837'
  on-tertiary-container: '#6a3700'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#fbdfa5'
  secondary-fixed-dim: '#dec48b'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#564418'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 84px
    fontWeight: '800'
    lineHeight: 90px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 62px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-mono-xs:
    fontFamily: JetBrains Mono
    fontSize: 9px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.14em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.75rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system crafts an uncompromising, avant-garde digital atelier for visionary software architects and creative technologists. It synthesizes the mechanical rigor of brutalist cybernetics with the refined spatial pacing of high-fashion print editorial. The emotional response is immediate: surgical competence, high-value craft, and deliberate restraint laced with luminous warmth.

Visual identity principles:
- **Architectural Cartography:** Interfaces feel like precision drafting tables or aerospace consoles, using micro-grids, hairline datum marks, and coordinate systems.
- **Controlled Luminescence:** Warm amber radiance emerges from deep abyssal blacks, avoiding cheap synthetic neon in favor of molten topaz, raw amber, and burnished brass.
- **Asymmetrical Tension:** Layouts reject generic center-weighted templates, favoring extreme contrast between massive kinetic display typography and minute, monospaced mechanical data points.
- **Tactile Nihilism:** Surfaces are matte, crystalline, or lightly frosted; edges are surgically crisp rather than doughy or over-rounded.

## Colors

The palette operates across three distinct functional tiers: Deep Void (substrate), Obsidian Slate (structural containment), and Luminous Topaz (activation and signal).

### Palette Architecture
- **Primary / Topaz Gold (`#F59E0B`):** High-energy signal color reserved for primary focal actions, interactive states, terminal prompts, and hero accents.
- **Secondary / Electric Cream (`#FFE3A8`):** High-clarity editorial text, luminous highlight pings, and elevated state accents. Never used as a raw flat background.
- **Tertiary / Burnished Amber (`#D97706`):** Grounded warm metallic used for secondary indicators, muted code syntax tokens, badge strokes, and active border gradients.
- **Neutral / Deep Void Ink (`#090A0F`):** Absolute canvas baseline. Paired with contextual surface steps:
  - Surface Step 1 (`#0E1017`): Base bento card substrate.
  - Surface Step 2 (`#131722`): Elevated floating docks, modals, and inspection panels.
- **Structural Slate (`#1E2433` / `#2A324B`):** Razor-thin structural hairlines, coordinate crosshairs, divider lines, and muted borders.
- **Text White (`#F8FAFC`):** Primary display and high-readability body copy.

### Usage Protocol
- Never utilize cold purples, saturated cyan, or generic SaaS blue gradients.
- Amber highlights must be deployed with pinpoint discipline—no more than 8-12% of viewport real estate should feature amber tones simultaneously.
- Gradient fills must transition between deep obsidian tones or across warm burnished metals; never bridge across opposing hues.

## Typography

The typographical engine leverages a deliberate dichotomy: hyper-expressive, avant-garde display geometry counterbalanced by machine-grade precision mono.

- **Display (Syne):** Unapologetic, sculptural, and expressive. Used exclusively for prominent titles, section numbering, and signature identity elements. Characters like 'g', 'a', and 'R' introduce high-fashion editorial tension.
- **Body & Subtitles (Space Grotesk):** Provides structured geometric cadence with exceptional legibility across dense case studies and technical narratives. Retains technological DNA without fatiguing the eye.
- **System Telemetry & Metadata (JetBrains Mono):** Reserved for technical metadata, execution times, system stats, architectural benchmarks, tags, and coordinates. All monospaced metadata should be rendered in uppercase with wide letter-spacing (`0.08em` to `0.14em`).

## Layout & Spacing

The layout is built upon an **Asymmetrical Editorial Bento Framework** overlaid with an architectural 12-column sub-grid.

### Grid Dynamics
- **Desktop (>= 1280px):** 12 columns with dynamic column spans (e.g., 7:5, 8:4, 3:6:3 splits). Gutters sit at `1.75rem` (`28px`), outer canvas margin at `4rem` (`64px`). Modules purposefully offset vertically to generate editorial rhythm.
- **Tablet (768px - 1279px):** 8 columns, collapsing complex asymmetrical spans into balanced 4:4 or 5:3 arrangements with `2.5rem` margins.
- **Mobile (< 768px):** Single-column stacked modular tiles with `1.25rem` margins and `1.25rem` gutters. All horizontal scroll carousels are strictly avoided in favor of vertical modular monoliths.

### Structural Hairlines & Pacing
- Sections are anchored by visible or pseudo-visible hairline grid axes (`1px solid #1E2433`).
- Cards avoid identical heights across rows; instead, height is dictated by content density, with adjacent anchor cards utilizing negative space to display technical coordinates or ASCII diagrammatic markers.

## Elevation & Depth

Visual hierarchy does not rely on heavy drop shadows or diffuse blur clouds. Instead, depth is articulated through **spectral translucency, hairline refraction, and targeted warm back-glows**.

### Depth Layers
- **Substrate Zero (Canvas):** Pure `#090A0F` with optional ultra-fine radial noise (`1.5%` opacity) and a razor-thin grid matrix pattern.
- **Tier 1 (Bento Surfaces):** Frosted glass panels formed by `#0E1017` with `backdrop-filter: blur(16px)` and `85%` opacity. Enclosed by a crisp `1px` border using `#1E2433`.
- **Tier 2 (Interactive & Floating Panels):** `#131722` at `90%` opacity with `backdrop-filter: blur(24px)`. Borders utilize a subtle linear gradient: `#2A324B` fading to `#F59E0B22` on the top-left illuminated edge.
- **Tier 3 (Modals & Command Overlays):** `#0E1017` with `backdrop-filter: blur(32px)`. Outlined with `#F59E0B44` and surrounded by a directional, hyper-diffused ambient amber aura: `0 0 60px -15px rgba(245, 158, 11, 0.12)`.

### Lighting & Refraction Principles
- Flat drop shadows are prohibited. Depth is indicated by border illumination contrast—every raised card has a highlight on its top/left edge and an obsidian-shadowed bottom/right edge.
- Interactive hover triggers a localized amber border ignition, transitioning the stroke from `#1E2433` to `#F59E0B` with zero layout shift.

## Shapes

The design system enforces a **machined, semi-brutalist corner radius (`roundedness: 1`)**. 

- Standard panels, cards, and input modules employ an intentional `0.25rem` (`4px`) radius. This provides subtle softness under magnification while retaining the silhouette of high-precision milled equipment.
- Micro-elements such as tags, status badges, and inline code blocks use `0.125rem` (`2px`) or sharp `0px` cut corners with diagonal `45-degree` chamfer trims (`clip-path: polygon(...)`).
- Circular geometry is strictly reserved for status beacons (live ping indicators) and avatar viewports. Omnipresent pill-shaped buttons or generic 24px rounded corners are strictly prohibited.

## Components

### Buttons & Interactive Triggers
- **Primary Action:** Solid amber fill (`#F59E0B`) with black typography (`#090A0F`, `Space Grotesk 600`). Crisp 4px border radius. Hover triggers an electric cream shift (`#FFE3A8`) and a 1px border flare.
- **Secondary Ghost:** Hairline frame (`1px solid #2A324B`), void black substrate, electric white typography. Hover elevates the border to `#F59E0B` and infuses a micro amber glow (`box-shadow: 0 0 16px rgba(245, 158, 11, 0.15)`).
- **Command / Key Trigger:** Minimalist mono button (`JetBrains Mono`), enclosed in square brackets `[ ESC ]` or `[ ⌘K ]`, executing a mechanical depression translate effect (`translateY(1px)`) on click.

### Bento Cards & Panels
- Constructed using surface step `#0E1017` with a 1px `#1E2433` boundary.
- Header zones feature architectural telemetry: an upper-left corner tag displaying section index (e.g., `SEC_01 // SYS.PERF`) in `label-mono-xs` and an upper-right geometric glyph crosshair (`+`).
- Hover shifts the border hairline to `#D97706` via a 200ms cubic-bezier transition.

### Chips, Badges & Tags
- Monospaced, high-tracking (`0.08em`) metadata badges.
- Background: `#131722` with a `1px solid #1E2433` border. Text in `#FFE3A8`.
- Live status indicators incorporate a pulsing 6px beacon with an outer amber ring running a slow breathing animation.

### Lists & Activity Feeds
- Raw, unbulleted technical rows separated by hairline rules (`#1E2433`).
- Left column: fixed-width monospaced timestamp or git hash (`#FFE3A8` at `60%` opacity).
- Center column: descriptive technical headline in `Space Grotesk`.
- Right column: execution metrics, status, or external trigger glyph.

### Form Inputs & Terminal Controls
- Inputs function like command-line prompts. Dark void background (`#090A0F`), bottom hairline border in `#2A324B`.
- Focus state converts the bottom hairline to glowing `#F59E0B` and initiates a blinking block cursor.
- Text input utilizes `Space Grotesk` for natural query inputs or `JetBrains Mono` for code and parameter inputs.

### Distinctive System Elements
- **Telemetry HUD:** Fixed viewport corner brackets detailing scroll percentage, current grid coordinates (`X: 124.08`, `Y: 891.22`), and live server latency.
- **Architectural Crosshairs:** Custom SVG glyph markers (`+`, `T`, `L-bracket`) positioned at intersections of major grid containers to accentuate the drafting-table aesthetic.