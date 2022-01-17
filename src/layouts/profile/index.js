// @mui material components
import Grid from "@mui/material/Grid";



// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Prastuti  2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import ProfilesList from "examples/Lists/ProfilesList";


// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images



function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={6}>
              <PlatformSettings />
            </Grid>



            <Grid item xs={12} xl={4}>
              <ProfilesList title="Requests" profiles={profilesListData} shadow={false} />
            </Grid>
          </Grid>



        </MDBox>



        <MDBox pt={2} px={2} lineHeight={0.5}>
          <MDTypography variant="h6" fontWeight='bold' color="light">
            @PRASTUTI
          </MDTypography>
        </MDBox>

      </Header>

    </DashboardLayout>
  );
}

export default Overview;
