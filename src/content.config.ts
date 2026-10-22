import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Community', 'Education', 'Environment', 'Health', 'Fundraising', 'Celebration', 'Other']),
    location: z.string().optional(),
    excerpt: z.string(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { events };
