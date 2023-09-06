import { defineCollection, z } from "astro:content";

const posts = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		author: z.string(),
		pubDate: z.string().or(z.date()).transform((val) => new Date(val)),
		tags: z.array(z.string()),
		heroImage: z.string().optional(),
	}),
});

export const collections = { posts };
