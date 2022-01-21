// import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Tilt from 'react-tilt';

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function TeamRegister() {
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Register for Codigo!
          </MDTypography>
        </MDBox>
        <Tilt className="Tilt" options={{ max : 25, scale: 1.01}}>

        <MDBox pt={4} pb={3} px={3}>
            <MDBox mt={4} mb={1} display="flex" flexDirection="column"
            sx={{
              gap:2,
            }} >

              <MDButton variant="outlined" color="info" href="/create-team" mb={5} >
                Create a team
              </MDButton>
            </MDBox>

        </MDBox>
        </Tilt>

      </Card>
    </CoverLayout>
  );
}

export default TeamRegister;
