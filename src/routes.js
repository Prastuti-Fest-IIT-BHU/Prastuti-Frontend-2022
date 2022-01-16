import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Icon from "@mui/material/Icon";
import TeamRegister from "layouts/register/teamRegister";
import CreateTeam from "layouts/register/createTeam";
import JoinTeam from "layouts/register/joinTeam";
import Codigo from "layouts/competitions/codigo";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
    {
    type: " ",
    name: "Team Register",
    key: "team-register",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/team-register",
    component: <TeamRegister />,
  },
    {
    type: " ",
    name: "Join a Team",
    key: "join-team",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/join-team",
    component: <JoinTeam />,
  },

    {
    type: " ",
    name: "/codigo",
    key: "codigo",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/codigo",
    component: <Codigo />,
  },

    {
    type: " ",
    name: "Create a Team",
    key: "create-team",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/create-team",
    component: <CreateTeam />,
  },
];

export default routes;
