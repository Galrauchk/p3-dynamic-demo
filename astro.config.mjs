// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://demo-dynamic.webtrafic.fr',
  integrations: [sitemap({
    filter: (page) =>
      !page.includes('/politique-confidentialite') &&
      !page.includes('/politique-cookies'),
  })],
});
