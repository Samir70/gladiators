import HelloWorld from "./components/HelloWorld.vue";
import TanyasPage from "./components/TanyasPage.vue";

export const routes = [
  { path: "/hello", name: "HelloWorld", component: HelloWorld },
  { path: "/tanyaspage", name: "TanyasPage", component: TanyasPage },
];
