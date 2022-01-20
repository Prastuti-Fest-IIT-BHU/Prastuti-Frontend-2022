// @mui material components
import Grid from "@mui/material/Grid";



// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Prastuti  2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import EventInfoList from "examples/Lists/EventInfoList";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";




// Data
import profilesListData from "layouts/profile/data/profilesListData";
// import AddTask from "./rendertest";
import SendInvite from "./sendInvite";





function TeamsInfo() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />

      <MDTypography color="white">Invite members to your team!</MDTypography>

        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} xl={4}>
              <EventInfoList title="Requests Sent To"  profiles={profilesListData} shadow={false} />
            </Grid>
            <Grid item xs={12} xl={8}>
              <SendInvite/>
            </Grid>
          </Grid>

{/* <AddTask/> */}
        </MDBox>


        <MDBox pt={2} px={2} lineHeight={0.5}>
          <MDTypography variant="h6" fontWeight='bold' color="light">
            @PRASTUTI
          </MDTypography>

        </MDBox>



    </DashboardLayout>
  );
}

export default TeamsInfo;
