import { defineConfig } from '@rsbuild/core';
import fs from 'fs';
import path from 'path';

// Find all .ts and .js files in /src/js/templates
const templatesDir = path.resolve(__dirname, 'src/js/templates');
const templateEntries: Record<string, string> = {};

if (fs.existsSync(templatesDir)) {
  fs.readdirSync(templatesDir).forEach(file => {
    if (/\.(ts|js)$/.test(file)) {
      const name = path.parse(file).name; // e.g., 'product'
      templateEntries[name] = `./src/js/templates/${file}`;
    }
  });
}

// Merge with your other entries
const entries = {
  index: './src/index.ts',
  style: './src/index.css',
  ...templateEntries,
};

export default defineConfig({
  source: {
    entry: entries,
  },
  output: {
    distPath: {
      root: './assets',
      js: '',
      css: '',
    },
    filenameHash: false,
    filename: {
      js: 'bundle.[name].js',
      css: 'bundle.[name].css'
    },
    cleanDistPath: false
  },
  dev: {
    writeToDisk: true,
    hmr: false,
    liveReload: false,
  },
  tools: {
    htmlPlugin: false,
  },
});
