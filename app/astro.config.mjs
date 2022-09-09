import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  root: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  srcDir: './src', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  build: {
    // site: 'http://example.com', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true,
    format: 'file' // Generate sitemap (set to "false" to disable)     
  },
  integrations: [
    react(),
    compress({
			css: false,
			html: true,
			js: true,
			img: true,
			svg: true,
		}),
  ],
  trailingSlash: 'ignore',
  server: { 
    port: 3000, 
    host: true
  }
})
