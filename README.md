# Angular Storybook Design System

A comprehensive design system built with Angular 18 and Storybook, featuring colors and typography sourced from Figma.

## Features

- 🎨 **Complete Color Palette**: Primary, Secondary, Accent, Spot, and Chart colors
- 📝 **Typography System**: Headlines (H1-H8), Labels, and Body text styles
- 🔧 **SCSS Variables**: All design tokens available as reusable SCSS variables
- 📚 **Storybook Documentation**: Visual documentation for all design elements
- 🔗 **Figma Integration**: Design tokens pulled directly from Figma design system

## Getting Started

```bash
npm install
npm start          # Start Angular dev server
npm run storybook  # Start Storybook
```

## Design System Structure

### Colors
- **Primary**: White + Grey scale (0-9)
- **Secondary**: Blue variations (0-4)
- **Accent**: Orange, Red, Yellow, Green variations
- **Spot**: Additional grey and blue-grey tones
- **Chart**: Data visualization colors

### Typography
- **Headlines**: H1 (24px) through H8 (10px)
- **Labels**: Various weights and sizes for UI elements
- **Body**: Base, Emphasized, Strong, and Blurb text styles

All typography uses Inter font family with carefully defined weights and line heights.

## Usage

Import SCSS variables in your components:

```scss
@use 'app/lib/styles/variables' as *;

.my-component {
  color: $blue-2;
  font-size: $h4-font-size;
  font-weight: $h4-font-weight;
}
```

## Development

Built with:
- Angular 18
- Storybook 8
- SCSS
- TypeScript
- Figma MCP Server integration
