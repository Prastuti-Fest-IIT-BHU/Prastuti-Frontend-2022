// @mui material components
import Grid from "@mui/material/Grid";



// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Prastuti  2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import EventInfoList from "examples/Lists/EventInfoList";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";

import useWindowDimensions from "hooks/useWindowDimensions";

// Data
import profilesListData from "layouts/profile/data/profilesListData";
// import AddTask from "./rendertest";
// import SendInvite from "./sendInvite";





function TeamsInfo() {

    const { width } = useWindowDimensions();

    let mid

    if(width<1096 )
    {
      mid="7%"
    }
    else
    {
      mid="40%"
    }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card >
      <MDBox mb={3} mt={3} sx={{ marginLeft:`${mid}`}} >

      <MDTypography color="black" >Invite members to your team!</MDTypography>
    </MDBox>
    </Card>
    <MDBox mt={3}>
    <Card >
         <MDBox mt={3} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} xl={14}>

              <EventInfoList title="Requests Sent To"  profiles={profilesListData} shadow={false} />
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
