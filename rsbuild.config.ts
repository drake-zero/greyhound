import { defineConfig } from "@rsbuild/core";
import fs from "fs";
import path from "path";

function getEntriesFromDir(dir: string): Record<string, string> {
  const entries: Record<string, string> = {};
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      if (/\.(ts|js)$/.test(file)) {
        const name = path.parse(file).name;
        entries[name] = path.join(dir, file);
      }
    });
  }
  return entries;
}

const templatesDir = path.resolve(__dirname, "src/js/templates");
const componentsDir = path.resolve(__dirname, "src/js/components");

const templateEntries = getEntriesFromDir(templatesDir);
const componentEntries = getEntriesFromDir(componentsDir);

const entries: Record<string, string> = {
  main: "./src/main.ts",
  style: "./src/index.css",
  ...templateEntries,
  ...componentEntries,
};

export default defineConfig({
  source: {
    entry: entries,
  },
  output: {
    distPath: {
      root: "./assets",
      js: "",
      css: "",
    },
    filenameHash: false,
    filename: {
      js: "bundle.[name].js",
      css: "bundle.[name].css",
    },
    cleanDistPath: false,
  },
  dev: {
    writeToDisk: true,
    hmr: false,
    liveReload: false,
  },
  tools: {
    htmlPlugin: false,
  },
  performance: {
    chunkSplit: {
      override: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors", // This will name the chunk 'vendors'
            chunks: "all",
            priority: -10,
            reuseExistingChunk: true,
            filename: "bundle.vendors.js", // This sets the output filename
          },
          // Optionally disable the default group
          default: false,
        },
      },
    },
  },
});
