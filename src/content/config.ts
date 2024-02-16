import { defineCollection } from 'astro:content';

const gameDevCollection = defineCollection({
  type: "content"
});

export const collections = {
  'gamedev': gameDevCollection
};