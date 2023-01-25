import { defineConfig } from "cypress";

export default defineConfig({

  e2e: {
    baseUrl: 'http://localhost:8888',
    supportFile: false
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    }
  }
});
