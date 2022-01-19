import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Profile from "layouts/profile";
import SignUp from "layouts/authentication/sign-up";
import Icon from "@mui/material/Icon";
import TeamRegister from "layouts/register/teamRegister";
import CreateTeam from "layouts/register/createTeam";
import JoinTeam from "layouts/register/joinTeam";
import Codigo from "layouts/competitions/codigo";
import DevCard from "examples/Cards/Fluidcard/Fluidcard";

const routes = [
  {
    type: "collapse",
    name: "Events",
    key: "events",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/events",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Leaderboards",
    key: "leaderboards",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
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
    name: "Core Team",
    key: "dev",
    icon: <Icon fontSize="small">group_icon</Icon>,
    route: "/dev",
    component: <DevCard />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-up",
    icon: <Icon fontSize="small">meeting_room</Icon>,
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
