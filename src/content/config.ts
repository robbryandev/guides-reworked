import { z, defineCollection } from 'astro:content';

const mdCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    sections: z.array(z.string()).optional()
  })
});


export const collections = {
  'gamedev': mdCollection,
  'streaming': mdCollection
};