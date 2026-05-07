import { defineCollection, z } from 'astro:content';

const galleryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
    date: z.string().optional(),
  }),
});

// src/content/config.ts
const meetingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    description: z.string(),
    category: z.string(), // Ensure this matches what you put in the .md
  }),
});
export const collections = {
  'gallery': galleryCollection,
  'meetings': meetingsCollection, // Register the new collection
};