import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import { routes } from "./routes";
import { store } from "./store";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(store).use(router).mount("#app");
