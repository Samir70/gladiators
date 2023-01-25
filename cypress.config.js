import { defineConfig } from "cypress";

export default defineConfig({

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",

    },
  },
  
  e2e: {
    baseUrl: "http://localhost:8888",
    supportFile: false
  },
});

