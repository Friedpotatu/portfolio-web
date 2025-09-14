# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro 5, TypeScript, and Tailwind CSS 4. The site showcases projects, work experience, and personal information through a modern, responsive design with dark/light theme support.

## Development Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro` - Access Astro CLI commands

## Architecture & Content Management

### Content Collections
The site uses Astro's content collections system with two main collections defined in `src/content/config.ts`:

**Projects Collection** (`src/content/projects/`)
- Schema: title, description, image, technologies[], github?, demo?, gallery?, galleryImages[], featured?, order
- Content stored as Markdown files with frontmatter
- Supports gallery mode with multiple images
- Featured projects can be highlighted
- Technologies array for tech stack display

**Experience Collection** (`src/content/experience/`)
- Schema: title, company, location?, startDate, endDate?, current?, technologies[], highlights[], order
- Work history stored as Markdown files
- Supports current position indicator
- Order field for chronological sorting

### Component Architecture
- **Layout System**: Single `Layout.astro` provides base structure
- **Page Components**: Modular sections (About, Experience, Projects, etc.)
- **Icon System**: Custom icon components in `src/components/icons/`
- **Theme System**: `ThemeToggle.astro` handles dark/light mode
- **Navigation**: `SideNavBar.astro` for main navigation, `PortfolioSections.astro` for content sections

### Routing Structure
- `/` - Main portfolio page with all sections
- `/about` - Dedicated about page
- `/projects/[...slug]` - Dynamic project detail pages
- Static assets in `/public/` (CV, images)

### Styling System
- Tailwind CSS 4 with Vite plugin integration
- Global styles in `src/styles/global.css`
- Component-level styling using Astro's scoped CSS
- Responsive design with mobile-first approach

## Key Implementation Details

### Content Loading
- Uses Astro's new `glob()` loader for content collections
- Markdown files automatically processed with frontmatter validation
- Images referenced from `src/assets/` directory

### TypeScript Configuration
- Extends Astro's strict TypeScript config
- All TypeScript files included except `dist/`
- Strict type checking enabled

### Asset Management
- Profile images and project screenshots in `src/assets/`
- CV and favicon in `public/` for direct access
- Image optimization handled by Astro

When working with this codebase:
- Add new projects by creating Markdown files in `src/content/projects/`
- Add new experience entries in `src/content/experience/`
- Follow existing frontmatter schemas strictly
- Use the `order` field to control display sequence
- Test responsive design on mobile and desktop