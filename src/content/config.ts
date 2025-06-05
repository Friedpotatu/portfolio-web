import { defineCollection, z } from "astro:content";
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: './src/content/projects/*.md' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().url(),
        link: z.string().url()
    })
});

export const collections = { projects };