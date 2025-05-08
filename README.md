# Bou Optimizer - Sanity Plugin

Use https://optimizer.bou.app/ inside your Sanity Studio to optimize images during upload.

## Usage

Install the package from NPM:

```bash
npm i @bou-co/optimizer-sanity-plugin
```

Add the plugin in your Sanity Studio config:

```ts
// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

// Import the "bouOptimizer" plugin
import { bouOptimizer } from '@bou-co/optimizer-sanity-plugin';

export default defineConfig({
  projectId: '<projectId>',
  dataset: 'production',
  plugins: [
    structureTool(),
    // Add "bouOptimizer" as a plugin to your config
    bouOptimizer(),
  ],
  schema: {
    types: schemaTypes,
  },
});
```
