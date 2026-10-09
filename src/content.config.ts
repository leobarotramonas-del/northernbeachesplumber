import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(30).max(60),
    description: z.string().min(100).max(150),
    seoTitle: z.string().min(30).max(60).optional(),
    seoDescription: z.string().min(100).max(150).optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('The Northern Beaches Plumber'),
    category: z.string().default('Plumbing Advice'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(true),
    relatedServices: z.array(z.string()).optional(),
    relatedSuburbs: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };

