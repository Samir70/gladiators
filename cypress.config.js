import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",

    },
  },
  e2e: {
    baseUrl: 'http://127.0.0.1:8888',
    supportFile: false
  },
});
