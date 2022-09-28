import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import compress from 'astro-compress';
import minifyHtml from "astro-html-minifier";

import htmlMinifier from "astro-html-minifier";

// https://astro.build/config
export default defineConfig({
  root: '.',
  // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  srcDir: './src',
  // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  build: {
    // site: 'http://example.com', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true,
    format: 'file' // Generate sitemap (set to "false" to disable)     

  },
  integrations: [react(), svelte(), compress({
    css: false,
    html: true,
    js: true,
    img: true,
    svg: true
  }), htmlMinifier()],
  trailingSlash: 'ignore',
  server: {
    port: 3000,
    host: true
  },
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ['@xstate/svelte']
    }
  }
});
