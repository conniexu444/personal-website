# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, and Vite. The site features a dark/light theme system and uses TailwindCSS v4 for styling with custom CSS variables for theming.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (runs build first)

## Architecture & Key Patterns

### Theme System
The application uses a custom theme system with CSS variables:
- `ThemeContext.tsx` provides theme state management
- CSS variables in `index.css` define light/dark theme colors
- Theme toggle applies/removes `dark` class on document root
- All components use CSS variables for consistent theming

### Routing & Navigation
- Uses React Router DOM with BrowserRouter
- Route definitions centralized in `src/routes/routes.tsx`
- Currently single-page application with Home route
- Navigation structure supports additional pages (Experience route defined but not used)

### Component Structure
- Custom UI components in `src/components/`
- Animated components using Framer Motion and custom CSS animations
- Special cuicui components for interactive effects (mouse tracking)
- Utility functions in `src/utils/` (className merging with `cn.ts`)

### Styling Approach
- TailwindCSS v4 with Vite plugin
- Custom CSS variables for theme-aware styling
- Custom fonts loaded via CSS (`creamysoup` display font)
- Custom animations defined in CSS for bouncing and rotation effects
- Component styling uses CSS variables (e.g., `bg-[var(--color-bg)]`)

### TypeScript Configuration
- Strict TypeScript setup with project references
- Separate configs for app (`tsconfig.app.json`) and Node (`tsconfig.node.json`)
- ESLint configured with TypeScript, React hooks, and React refresh rules

## Important File Locations

- Main application entry: `src/App.tsx`
- Theme system: `src/components/ThemeContext.tsx`
- Global styles & theme variables: `src/index.css`
- Route configuration: `src/routes/routes.tsx`
- Utility functions: `src/utils/cn.ts`
- Timeline data: `src/assets/timelineElements.ts`

## Development Notes

- Custom font files should be placed in `public/` directory
- Theme colors are defined as CSS variables in `:root` and `.dark` selectors
- Component props should follow React patterns with proper TypeScript typing
- CSS classes should use TailwindCSS utilities with CSS variables for theming
- New pages should be added to both React Router routes and `routes.tsx` configuration