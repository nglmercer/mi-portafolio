import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://nglmercer.github.io',
  base: '/mi-portafolio',
  trailingSlash: 'ignore',
  integrations: [react(), tailwind()]
});
