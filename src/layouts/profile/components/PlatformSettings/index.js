
import "./platformset.css";


// @mui material components
import Card from "@mui/material/Card";

// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function PlatformSettings() {



  return (

    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h5" fontWeight="medium" textTransform="capitalize"  color ="text" textGradient>
        <div className="registered_in">
          Registered in:
          </div>
        </MDTypography>
      </MDBox>
      <MDBox py={1} px={5} lineHeight={0.2}>
        <MDTypography variant="caption" fontWeight="600" color="text" textTransform="uppercase">
        <div className="event_name">
            Event Name
          </div>
        </MDTypography>

      </MDBox>
      <MDBox py={1} px={5} lineHeight={0.2}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Event Name
        </MDTypography>

      </MDBox>
      <MDBox py={1} px={5} lineHeight={0.2}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Event Name
        </MDTypography>

      </MDBox>
      <MDBox py={1} px={5} lineHeight={0.2}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Event Name
        </MDTypography>

      </MDBox>

        <MDBox p={2}>
          <MDTypography variant="h5" fontWeight="bold" textTransform="capitalize"  color="text" textGradient>
          <div className="team">
            Teams:
            </div>
          </MDTypography>
        </MDBox>
    <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" px={5} r={3} >
          <MDTypography variant="button" fontWeight="medium" color="text" textTransform="uppercase">
          <div className="team_name">
            Team 1
            </div>
          </MDTypography>
          <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
          <div className="team_member">
            Utkarsh Pandey
            </div>
          </MDTypography>
          <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
            Blue waterbottle
          </MDTypography>
          <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
            Prince of persia
          </MDTypography>

        </MDBox>
        <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" px={5} r={3} py={2} >
              <MDTypography variant="button" fontWeight="medium" color="text" textTransform="uppercase">
                Team 1
              </MDTypography>
              <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
                Member 1
              </MDTypography>
              <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
                Member 1
              </MDTypography>
              <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
                Member 1
              </MDTypography>

            </MDBox>
    </Card>

  );
}

export default PlatformSettings;
