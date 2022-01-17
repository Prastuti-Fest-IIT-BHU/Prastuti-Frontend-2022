



// @mui material components
import Card from "@mui/material/Card";


// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function PlatformSettings() {



  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h5" fontWeight="medium" textTransform="capitalize"  color ="error" textGradient>
          Registered in:
        </MDTypography>
      </MDBox>
      <MDBox p={2} lineHeight={0.2}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Event Name
        </MDTypography>

      </MDBox>
      <MDBox p={2} lineHeight={0.2}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Event Name
        </MDTypography>

      </MDBox>
      <MDBox p={2} lineHeight={0.2}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Event Name
        </MDTypography>

      </MDBox>
      <MDBox p={2} lineHeight={0.2}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Event Name
        </MDTypography>

      </MDBox>

        <MDBox p={2}>
          <MDTypography variant="h5" fontWeight="bold" textTransform="capitalize"  color="success" textGradient>
            Teams:
          </MDTypography>
        </MDBox>
    <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" px={2} r={3} >
          <MDTypography variant="button" fontWeight="medium" color="text" textTransform="uppercase">
            Team 1
          </MDTypography>
          <MDTypography variant="caption" fontWeight="regular" color="text" px={3}>
            Utkarsh Pandey
          </MDTypography>
          <MDTypography variant="caption" fontWeight="regular" color="text" px={3}>
            Blue waterbottle
          </MDTypography>
          <MDTypography variant="caption" fontWeight="regular" color="text" px={3}>
            Prince of persia
          </MDTypography>

        </MDBox>
        <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" px={2} r={3} py={1} >
              <MDTypography variant="button" fontWeight="medium" color="text" textTransform="uppercase">
                Team 1
              </MDTypography>
              <MDTypography variant="caption" fontWeight="regular" color="text" px={3}>
                Member 1
              </MDTypography>
              <MDTypography variant="caption" fontWeight="regular" color="text" px={3}>
                Member 1
              </MDTypography>
              <MDTypography variant="caption" fontWeight="regular" color="text" px={3}>
                Member 1
              </MDTypography>

            </MDBox>
    </Card>
  );
}

export default PlatformSettings;
