// @mui material components
import Grid from "@mui/material/Grid";



// Prastuti  2 React components
import MDBox from "components/MDBox";

// Prastuti  2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import EventInfoList from "examples/Lists/EventInfoList";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";



// Data
import profilesListData from "layouts/profile/data/profilesListData";
// import AddTask from "./rendertest";
// import SendInvite from "./sendInvite";





function TeamsInfo() {


  return (
    <DashboardLayout>
      <DashboardNavbar />

    <MDBox mt={3}>
    <Card >
         <MDBox mt={3} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} xl={14}>

              <EventInfoList title="Pending Requests"  profiles={profilesListData} shadow={false} />
            </Grid>
            <Grid item xs={12} xl={12}>
              {/* <SendInvite/> */}
            </Grid>
          </Grid>

{/* <AddTask/> */}
        </MDBox>

</Card>
</MDBox>


    </DashboardLayout>
  );
}

export default TeamsInfo;
