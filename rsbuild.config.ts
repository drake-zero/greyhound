export default {
  source: {
    entry: {
      index: './src/index.ts', // Your TS entry
      meow: './src/meow.ts'
    },
  },
  output: {
    distPath: {
      root: './assets',
      js: '',
      css: '',
    },
    filename: 'bundle.[name].js',
    cssFilename: 'bundle.[name].css',
    filenameHash: false
  },
  dev: {
    writeToDisk: true,
    hmr: false
  },
  devServer: {
    hot: false
  },
  tools: {
    htmlPlugin: false,
  },
};
