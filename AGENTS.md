# Development Guidelines

This document outlines the architectural and coding standards that must be followed for this project.

## Architecture

- **Domain-Driven Design (DDD)**: Organize code around business domains and use cases. Separate domain logic from infrastructure and presentation layers.
- **Scream Architecture**: Structure the project to scream its purpose. Organize by features rather than by technical layers.
- **Clean Architecture**: Enforce the dependency rule. Inner layers must not depend on outer layers. Use interfaces and abstractions to decouple components.

## Project Structure

This is a multi-style UI component library. The structure is organized by style:

```
src/
  fui/           # FUI (Futuristic/Industrial UI) - HUD style
    hud/
      components/
      index.ts
  neumorphism/   # Future neumorphism styles
  glassmorphism/ # Future glassmorphism styles
  pages/         # Page components (catalogs, demos)
```

## Styling

- **CSS Modules**: Use CSS Modules exclusively for styling. Do not use global CSS, styled-components, or Tailwind CSS unless explicitly approved.

## Imports

- **Absolute Paths**: Always use absolute paths with the `@` prefix for imports:
  - Components: `@/fui/hud/components/ComponentName`
  - Full style export: `@/fui/hud`
  - Pages: `@/pages/PageName`

## General Best Practices

- Write clean, maintainable, and testable code.
- Avoid tight coupling between components.
- Keep functions and components small and focused.
- Use meaningful and descriptive names.
- Add type definitions for all data structures.

## UI/UX Guidelines

- **Responsive Design**: Every new interface or page must be designed with responsive layouts. Consider all screen sizes (mobile, tablet, desktop) from the initial design phase.
- **Component-First Development**: When creating a new interface that requires new components, prioritize building those components first. Design them to be highly reusable and scalable before implementing the interface that consumes them.
