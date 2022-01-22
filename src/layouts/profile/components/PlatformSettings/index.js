


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
        <div className="profile_registered_in">
          Registered in:
          </div>
        </MDTypography>


      </MDBox>


      <MDBox py={1} px={5} lineHeight={0.2}>

        <MDTypography variant="caption" fontWeight="600" color="text" textTransform="uppercase">
        <div className="profile_event_name">
            Event Name
          </div>
        </MDTypography>

      </MDBox>

      <MDBox py={1} px={5} lineHeight={0.2}>

        <MDTypography variant="caption" fontWeight="600" color="text" textTransform="uppercase">
        <div className="profile_event_name">
            Event Name
          </div>
        </MDTypography>

      </MDBox>
      <MDBox py={1} px={5} lineHeight={0.2}>

        <MDTypography variant="caption" fontWeight="600" color="text" textTransform="uppercase">
        <div className="profile_event_name">
            Event Name
          </div>
        </MDTypography>

      </MDBox>



        <MDBox p={2}>
          <MDTypography variant="h5" fontWeight="bold" textTransform="capitalize"  color="text" textGradient>
          <div className="profile_team">
            Teams:
            </div>
          </MDTypography>
        </MDBox>
    <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" px={5} r={3} >
          <MDTypography variant="button" fontWeight="medium" color="text" textTransform="uppercase">

          <div className="profile_team_name">
          <a href="team/:team_name">
            Team 1
            </a>
            </div>
          </MDTypography>
          <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
          <div className="profile_team_member">
            Utkarsh Pandey
            </div>
          </MDTypography>
          <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
          <div className="profile_team_member">
            Utkarsh Pandey
            </div>
          </MDTypography>
          <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
          <div className="profile_team_member">
            Utkarsh Pandey
            </div>
          </MDTypography>


        </MDBox>
        <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" px={5} r={3} py={1} >
              <MDTypography variant="button" fontWeight="medium" color="text" textTransform="uppercase">
              <div className="profile_team_name">
                Team 1
                </div>
              </MDTypography>
              <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
              <div className="profile_team_member">
                Utkarsh Pandey
                </div>
              </MDTypography>
              <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
              <div className="profile_team_member">
                Utkarsh Pandey
                </div>
              </MDTypography>
              <MDTypography variant="caption" fontWeight="regular" color="text" px={3} py={0.5}>
              <div className="profile_team_member">
                Utkarsh Pandey
                </div>
              </MDTypography>


            </MDBox>

    </Card>

  );
}

export default PlatformSettings;
