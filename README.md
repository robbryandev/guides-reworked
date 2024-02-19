# Guides Reworked

Fan recreation of [pirate software's](https://www.twitch.tv/piratesoftware) [develop.games](https://develop.games/) guide to improve accessibility and performance.

## Requirements
- Node >= 18
- [serve](https://www.npmjs.com/package/serve) (optional production dependency)

## Running
Install dependencies
```sh
npm i
```

### Developmenent
```sh
npm run dev
```

### Production
```sh
npm run build
npx serve ./dist/
```

## Adding content
All guide content is managed through simple markdown files in src/content. Metadata used for the navigation tree is placed at the top of the file. metadata based on the following schema in src/content/config.ts

```ts
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
```