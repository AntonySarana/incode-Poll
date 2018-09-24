// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.js";
import SignUp from "views/SignUp/SignUp.js";
import SignIn from "views/SignIn/SignIn.js";
import Verify from "views/Verify/Verify.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
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
  {
    path: "/Verify",
    sidebarName: "Verify",
    navbarName: "Profile",
    icon: Person,
    component: Verify,
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
