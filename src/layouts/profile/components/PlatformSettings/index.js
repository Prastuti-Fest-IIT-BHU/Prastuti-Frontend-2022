



// @mui material components
import Card from "@mui/material/Card";


// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function PlatformSettings() {



  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Registered in:
        </MDTypography>
      </MDBox>
      <MDBox p={2} lineHeight={0.5}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Event Name
        </MDTypography>

      </MDBox>
      <MDBox p={2} lineHeight={0.5}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Event Name
        </MDTypography>

      </MDBox>
      <MDBox p={2} lineHeight={0.5}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Event Name
        </MDTypography>

      </MDBox>
      <MDBox p={2} lineHeight={0.5}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Event Name
        </MDTypography>

      </MDBox>

        <MDBox p={2}>
          <MDTypography variant="h5" fontWeight="medium" textTransform="capitalize">
            Teams:
          </MDTypography>
        </MDBox>
        <MDBox p={2} lineHeight={1}>
          <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
            Team 1
          </MDTypography>

        </MDBox>
    </Card>
  );
}

export default PlatformSettings;
