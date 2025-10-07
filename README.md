# Portfolio Personal - Nicolás Pavez

Portfolio profesional desarrollado con Astro 5, TypeScript y Tailwind CSS 4. Sitio optimizado para SEO que muestra proyectos, experiencia laboral y habilidades técnicas.

🌐 **Live Site:** [friedpotatu.dev](https://friedpotatu.dev)

## 🚀 Tech Stack

- **Framework:** [Astro 5](https://astro.build)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Content:** Markdown + Content Collections
- **Deployment:** Hostinger with GitHub Actions CI/CD

## ✨ Features

- 🎨 Modern, responsive design with dark/light theme
- 📱 Mobile-first approach
- 🔍 SEO optimized (meta tags, Open Graph, Twitter Cards)
- 🖼️ Project galleries with images and videos
- 📊 Experience timeline with multiple roles support
- ⚡ Static site generation for optimal performance
- 🌐 Spanish content with proper i18n handling

## 📁 Project Structure

```
portfolio-web/
├── public/               # Static assets
│   ├── og-image.png     # Social media preview (1200x630)
│   ├── robots.txt       # Search engine directives
│   └── CV-*.pdf         # Resume files
├── src/
│   ├── assets/          # Optimized images
│   ├── components/      # Reusable Astro components
│   │   ├── icons/       # Custom icon components
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   └── ...
│   ├── content/         # Content Collections
│   │   ├── projects/    # Project markdown files
│   │   ├── experience/  # Experience markdown files
│   │   └── config.ts    # Content schemas
│   ├── layouts/
│   │   └── Layout.astro # Main layout with SEO meta tags
│   ├── pages/           # File-based routing
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── projects/
│   │       └── [...slug].astro
│   ├── styles/
│   │   └── global.css   # Global styles
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── CLAUDE.md           # Development guidelines
└── package.json
```

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 📝 Content Management

### Adding a New Project

1. Create a Markdown file in `src/content/projects/`:

```md
---
title: "Project Name"
description: "Brief description"
image: "/project-image.png"
technologies: ["Tech1", "Tech2"]
github: "https://github.com/..."  # Optional
demo: "https://demo-url.com"      # Optional
gallery: true
galleryImages:
  - src: "/image1.png"
    alt: "Description"
    caption: "Image caption"
featured: true  # Optional
order: 1        # Display order (lower = first)
---

Project description in markdown...
```

2. Add project images to `public/` or `src/assets/`

### Adding Experience

Create a Markdown file in `src/content/experience/`:

```md
---
title: "Job Title"
company: "Company Name"
location: "City, Country"
startDate: "YYYY-MM"
endDate: "YYYY-MM"  # Or leave empty if current
current: false
technologies: ["Tech1", "Tech2"]
highlights:
  - "Achievement 1."
  - "Achievement 2."
order: 1
---

Detailed description...
```

## 🎨 Customization

### Theme Colors

Modify Tailwind configuration in `tailwind.config.js` or use Tailwind's default color palette.

### SEO Configuration

Edit meta tags in `src/layouts/Layout.astro`:
- Default description
- Site name
- Social media image

Update site URL in `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://your-domain.com'
})
```

## 🔍 SEO Features

- ✅ Meta descriptions for all pages
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Sitemap auto-generation
- ✅ robots.txt
- ✅ Semantic HTML structure
- ✅ Optimized images

### Verify SEO

After deployment:
1. **Robots.txt:** `https://your-site.com/robots.txt`
2. **Sitemap:** `https://your-site.com/sitemap-index.xml`
3. **Open Graph:** [Facebook Debugger](https://developers.facebook.com/tools/debug/)
4. **Twitter Cards:** [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 🚢 Deployment

The project uses GitHub Actions for automated deployment to Hostinger:

1. Push changes to `master` branch
2. GitHub Actions builds the site
3. Automatically deploys via FTP to Hostinger

### Manual Deployment

```bash
npm run build
# Upload ./dist/ contents to your hosting
```

## 📊 Performance

Optimized for:
- ⚡ Lighthouse score 90+
- 📱 Mobile-friendly (Google Test)
- 🎯 Core Web Vitals
- 🔍 SEO best practices

## 🛠️ Development Guidelines

See [CLAUDE.md](./CLAUDE.md) for comprehensive development guidelines including:
- Language standards (code in English, content in Spanish)
- Content writing style
- SEO best practices
- Deployment checklist

## 📄 License

This is a personal portfolio project. Feel free to use as inspiration, but please don't copy directly.

## 👤 Author

**Nicolás Pavez**
- Website: [friedpotatu.dev](https://friedpotatu.dev)
- GitHub: [@Friedpotatu](https://github.com/Friedpotatu)
- Email: nicolas.ipp14@gmail.com

---

Built with ❤️ using [Astro](https://astro.build)
