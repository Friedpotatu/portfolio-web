# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro 5, TypeScript, and Tailwind CSS 4. The site showcases projects, work experience, and personal information through a modern, responsive design with dark/light theme support.

**Site URL:** https://friedpotatu.dev

## Development Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro` - Access Astro CLI commands

## Language & Content Standards

**IMPORTANT: Maintain strict language separation:**
- **Code (English)**: All code, file names, variables, components, functions must be in English
  - ✅ `PortfolioSections.astro`, `Layout.astro`, `projectId`
  - ❌ `SeccionesPortafolio.astro`, `idProyecto`
- **User-facing content (Spanish)**: All text visible to users must be in Spanish
  - ✅ "Portafolio", "Sobre mí", "Proyectos"
  - ❌ "Portfolio", "About me", "Projects"
- **No Spanglish**: Avoid mixing languages in user-visible text

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
- **Theme System**: Dark/light mode with localStorage persistence (no flash on load)

### SEO Configuration
- **Site URL**: Configured in `astro.config.mjs` as `https://friedpotatu.dev`
- **Meta Tags**: All pages have title, description, Open Graph, and Twitter Cards
- **Sitemap**: Auto-generated at `/sitemap-index.xml`
- **Robots.txt**: Located in `/public/robots.txt`
- **Social Image**: `/public/og-image.png` (1200x630px) for social media previews
- **Canonical URLs**: Automatically set for all pages to prevent duplicate content
- **Language**: Spanish (es_ES) with proper locale tags

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
- Social media preview image: `/public/og-image.png`
- Image optimization handled by Astro
- Supports both images (.png, .jpg, .webp) and videos (.mp4, .mkv, .webm) in galleries

## Content Guidelines

### Writing Style
- **Orthography**: All Spanish content must have correct spelling, grammar, and punctuation
  - Always use opening and closing punctuation: `¡Hola!` not `Hola!`
  - Proper accents: "caché", "título", "examen" (no "exámen")
  - End all bullet points with periods
  - Proper article usage: "el área", "la gestión", not "área", "gestión"
- **Tone**: Professional, concise, technical but accessible
- **Person**: First person for "About" section, third person for project descriptions

### Content Creation
When adding new content:
- **Projects**: Create Markdown file in `src/content/projects/` with English filename
  - Title and description in Spanish
  - Include all required frontmatter fields
  - Use `order` field for display sequence (lower = first)
  - Add gallery images/videos with descriptive Spanish captions
- **Experience**: Create Markdown file in `src/content/experience/`
  - All highlights must end with periods
  - Use consistent terminology throughout
  - Dates in YYYY-MM format
- **Always verify spelling and grammar before committing**

## SEO Best Practices

When modifying pages:
1. Ensure each page has unique, descriptive title (50-60 chars)
2. Write compelling meta descriptions (150-160 chars) with keywords
3. Include relevant keywords naturally: "Ingeniero de Software", "Laravel", "Django", "Full-stack"
4. Test Open Graph previews after deploy using Facebook Debugger
5. Verify sitemap includes all pages after build
6. Maintain semantic HTML structure (h1, h2, h3 hierarchy)

## Deployment Checklist

Before deploying:
- [ ] Run `npm run build` successfully
- [ ] Verify no TypeScript errors
- [ ] Check all links work (internal and external)
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Verify dark/light theme works correctly
- [ ] Spell-check all Spanish content
- [ ] Ensure images/videos load correctly
- [ ] Verify SEO meta tags are present

After deploying:
- [ ] Verify robots.txt accessible at `/robots.txt`
- [ ] Check sitemap generated at `/sitemap-index.xml`
- [ ] Test social media previews (Facebook, Twitter, LinkedIn)
- [ ] Submit sitemap to Google Search Console
- [ ] Run Lighthouse audit (aim for 90+ in all categories)