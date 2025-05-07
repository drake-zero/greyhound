import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'


export default defineConfig({
  plugins: [
    shopify({
      themeroot: './',
      sourcecodedir: 'frontend',
      entrypointsdir: 'frontend/entrypoints',
      additionalentrypoints: [],
      snippetfile: 'vite-tag.liquid',
      versionnumbers: false,
      tunnel: false,
      themehotreload: true,
    })
  ],
  build: {
    emptyoutdir: false,
  }
})
