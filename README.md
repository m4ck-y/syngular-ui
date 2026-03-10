# Syngular UI

A multi-style UI component library catalog. The objective is to create a unified interface capable of displaying and organizing all developed component libraries by UI style type.

## Objective

Build a comprehensive UI system that showcases multiple design systems in one place. Each style (FUI HUD, Neumorphism, Glassmorphism, etc.) has its own component collection, and this catalog provides navigation between them.

## Current Styles

- **FUI HUD** - Futuristic/Industrial UI with terminal/HUD aesthetic
- **Neumorphism** - Coming Soon
- **Glassmorphism** - Coming Soon

## Features

- **Multi-style architecture** - Easily add new design systems
- **Component catalog** - Browse all components by UI style
- **TypeScript** - Full type safety
- **CSS Modules** - Scoped styling without global conflicts
- **React** - Modern component-based architecture

## Available Components (FUI HUD)

- **Buttons** - FuiButton, FuiInitiateButton
- **Containers** - FuiCard, FuiDecoratedCard
- **Indicators** - FuiBadge, FuiChip, FuiDataPill, FuiStatusIndicator
- **Forms** - FuiSelect, FuiCheckbox, FuiCheckboxGroup, FuiRadio, FuiRadioGroup, FuiFileUpload
- **Controls** - FuiToggle, FuiSlider, FuiProgressBar
- **Data Display** - FuiTable, FuiInfoRow, FuiTypography
- **Visual Effects** - FuiGlitch, FuiTypewriter, FuiParticles, FuiCryptoTicker, FuiPulsingDots, FuiNetworkTraffic
- **Decorative** - FuiCornerBrackets, FuiBackgrounds, FuiGridPattern
- **Inputs** - FuiInput

## Project Structure

```
src/
  fui/
    hud/
      components/    # FUI HUD components
      index.ts       # Export all components
  neumorphism/       # Future neumorphism styles
  glassmorphism/     # Future glassmorphism styles
  pages/            # Page components (catalogs)
```

## Usage

```tsx
import { FuiButton, FuiCard } from '@/fui/hud'

function App() {
  return (
    <FuiCard>
      <FuiButton>Click Me</FuiButton>
    </FuiCard>
  )
}
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run lint
```
