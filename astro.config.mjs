import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thenorthenbeachesplumber.com.au',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
});


