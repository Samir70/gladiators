import LandingPage from "./components/LandingPage.vue";
import SignUpPage from "./components/SignUpPage.vue";
import SignInPage from "./components/SignInPage.vue";
import Dashboard from "./components/Dashboard.vue";
import ExerciseCatalogue from "./components/ExerciseCatalogue.vue";
import ProfilePage from "./components/ProfilePage.vue";
import GuideAndTipsPage from "./components/GuideAndTipsPage.vue";
import HistoryPage from "./components/HistoryPage.vue";
import MilestonePage from "./components/MilestonePage.vue";
import UpdatePage from "./components/UpdatePage.vue";
import SignupSurvey from "./components/SignupSurvey.vue"

export const routes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/SignUpPage", name: "SignUpPage", component: SignUpPage },
  { path: "/SignInPage", name: "SignInPage", component: SignInPage },
  { path: "/Dashboard", name: "Dashboard", component: Dashboard },
  { path: "/ExerciseCatalogue", name: "ExerciseCatalogue", component: ExerciseCatalogue },
  { path: "/ProfilePage", name: "ProfilePage", component: ProfilePage },
  { path: "/GuideAndTipsPage", name: "GuideAndTipsPage", component: GuideAndTipsPage },
  { path: "/History", name: "HistoryPage", component: HistoryPage },
  { path: "/Milestones", name: "MilestonePage", component: MilestonePage },
  { path: "/UpdateDetails", name: "UpdatePage", component: UpdatePage },
  { path: "/Survey", name: "SignupSurvey", component: SignupSurvey },
  
];
