// import HelloWorld from "./components/HelloWorld.vue";
// import TanyasPage from "./components/TanyasPage.vue";
import LandingPage from "./components/LandingPage.vue";
import SignUpPage from "./components/SignUpPage.vue";
import SignInPage from "./components/SignInPage.vue";
import Dashboard from "./components/Dashboard.vue";
import ExerciseCatalogue from "./components/ExerciseCatalogue.vue";
import ProfilePage from "./components/ProfilePage.vue";
import GuideAndTipsPage from "./components/GuideAndTipsPage.vue";

export const routes = [
  // { path: "/hello", name: "HelloWorld", component: HelloWorld },
  // { path: "/tanyaspage", name: "TanyasPage", component: TanyasPage },
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/SignUpPage", name: "SignUpPage", component: SignUpPage },
  { path: "/SignInPage", name: "SignInPage", component: SignInPage },
  { path: "/Dashboard", name: "Dashboard", component: Dashboard },
  { path: "/ExerciseCatalogue", name: "ExerciseCatalogue", component: ExerciseCatalogue },
  { path: "/ProfilePage", name: "ProfilePage", component: ProfilePage },
  { path: "/GuideAndTipsPage", name: "GuideAndTipsPage", component: GuideAndTipsPage },
];
