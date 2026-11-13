// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rickdev.tech',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // cada URL declara su versión en el otro idioma (hreflang en el sitemap)
      i18n: { defaultLocale: 'es', locales: { es: 'es-CO', en: 'en-US' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
