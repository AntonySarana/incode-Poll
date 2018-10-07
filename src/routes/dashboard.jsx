// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.js";
import SignUp from "views/SignUp/SignUp.js";
import SignIn from "views/SignIn/SignIn.js";
import Verify from "views/Verify/Verify.js";
import CreatePoll from "views/CreatePoll/CreatePoll.js";
import GreetingPage from "views/GreetingPage/GreetingPage.js";
import Poll from "views/Poll/Poll.js";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },/* {
    path: "/Verify",
    sidebarName: "Verify",
    navbarName: "Profile",
    icon: Person,
    component: Verify,
  }, */
  {
    path: "/CreatePoll",
    sidebarName: "CreatePoll",
    navbarName: "CreatePoll",
    icon: Person,
    component: CreatePoll,
  },
  {
    path: "/Poll",
    sidebarName: "Poll",
    navbarName: "Poll",
    icon: Person,
    component: Poll,
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];
export const guestRoutes = [
  {
    path: "/SignUp",
    sidebarName: "SignUp",
    navbarName: "Profile",
    icon: Person,
    component: SignUp,
  },
  {
    path: "/SignIn",
    sidebarName: "SignIn",
    navbarName: "Profile",
    icon: Person,
    component: SignIn,
  },

/*  {
    path: "/GreetingPage",
    sidebarName: "GreetingPage",
    navbarName: "GreetingPage",
    icon: Person,
    component: GreetingPage,
  },*/

  { redirect: true, path: "/", to: "/SignIn", navbarName: "Redirect" }
];

/*export default dashboardRoutes;*/
