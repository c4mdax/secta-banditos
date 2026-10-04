import { defineCollection, z } from 'astro:content';

const galleryCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({ // <-- Añade { image } aquí
    title: z.string(),
    image: image(), // <-- Cambia z.string() por image()
    description: z.string(),
    date: z.string().optional(),
  }),
});

const meetingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    description: z.string(),
    category: z.string(),
  }),
});

const productsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    price: z.string(),
    vendor: z.string(),
    image: image(), // Astro procesará y optimizará las imágenes automáticamente
    color: z.string(),
    link: z.string(),
  })
});

export const collections = {
  'gallery': galleryCollection,
  'meetings': meetingsCollection,
  'products': productsCollection,
};