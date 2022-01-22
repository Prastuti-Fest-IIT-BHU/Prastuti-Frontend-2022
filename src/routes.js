import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile";
import SignUp from "layouts/authentication/sign-up";
import Icon from "@mui/material/Icon";
import TeamRegister from "layouts/register/teamRegister";
import CreateTeam from "layouts/register/createTeam";
import EventPage from "layouts/competitions/eventPage";
import CoreTeam from "layouts/core/coreteam";
import TeamsInfo from "layouts/teams";

const routes = [
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize='small'>person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Events",
    key: "events",
    icon: <Icon fontSize='small'>dashboard</Icon>,
    route: "/events",
    component: <Dashboard />,
  },
  // {
  //  type: "collapse",
  //  name: "Leaderboards",
  //  key: "leaderboards",
  //  icon: <Icon fontSize='small'>table_view</Icon>,
  //  route: "/tables",
  //  component: <Tables />,
  // },

  {
    type: " ",
    name: "Teams",
    key: "teams",
    icon: <Icon fontSize='small'>people</Icon>,
    route: "/team/:team_name",
    component: <TeamsInfo />,
  },
  {
    type: " ",
    name: "Core Team",
    key: "dev",
    icon: <Icon fontSize='small'>badge_icon</Icon>,
    route: "/dev",
    component: <CoreTeam />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-up",
    icon: <Icon fontSize='small'>meeting_room</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: " ",
    name: "Team Register",
    key: "team-register",
    icon: <Icon fontSize='small'>assignment</Icon>,
    route: "/team-register",
    component: <TeamRegister />,
  },

  {
    type: " ",
    name: "/eventPage",
    key: "event-page",
    icon: <Icon fontSize='small'>assignment</Icon>,
    route: "/event/:eventName",
    component: <EventPage />,
  },

  {
    type: " ",
    name: "Create a Team",
    key: "create-team",
    icon: <Icon fontSize='small'>assignment</Icon>,
    route: "/create-team",
    component: <CreateTeam />,
  },
];

export default routes;
