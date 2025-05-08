# Bou Optimizer - Sanity Plugin

Use https://optimizer.bou.app/ inside your Sanity Studio to optimize images during upload.

![Bou Image and PDF optimizer in Sanity Studio](https://github.com/user-attachments/assets/9d9a2c13-ad68-4065-b083-ea691d7351a8)

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

Use the new asset source from any file/image field:

![use bou image optimizer](https://github.com/user-attachments/assets/f4dcfa8c-a610-4bb0-8546-11ce504f9fbf)
