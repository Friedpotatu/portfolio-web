import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

// Esquema para proyectos
const projects = defineCollection({
    loader: glob({ pattern: './src/content/projects/*.md' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        technologies: z.array(z.string()),
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        gallery: z.boolean().default(false),
        galleryImages: z.array(z.object({
            src: z.string(),
            alt: z.string(),
            caption: z.string().optional()
        })).optional(),
        featured: z.boolean().default(false),
        order: z.number().default(0)
    })
});

// Esquema para experiencia
const experience = defineCollection({
    loader: glob({ pattern: './src/content/experience/*.md' }),
    schema: z.object({
        title: z.string(),
        company: z.string(),
        location: z.string().optional(),
        startDate: z.string(),
        endDate: z.string().optional(),
        current: z.boolean().default(false),
        technologies: z.array(z.string()),
        highlights: z.array(z.string()).optional(),
        roles: z.array(z.object({
            title: z.string(),
            startDate: z.string(),
            endDate: z.string().optional(),
            current: z.boolean().default(false),
            highlights: z.array(z.string()).optional()
        })).optional(),
        order: z.number().default(0)
    })
});

export const collections = { 
    projects,
    experience 
};