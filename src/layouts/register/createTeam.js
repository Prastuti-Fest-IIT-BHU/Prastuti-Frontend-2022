
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function CreateTeam() {

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Create a team!
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Enter a unique Team Name" fullWidth />
            </MDBox>
            {/* <MDBox mb={2}>
              <MDInput type="text" label="Team member A's email ID" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Team member B's email ID" fullWidth />
            </MDBox> */}
            {/* <MDBox mb={2}>
              <MDInput type="password" label="Create a unique Team Code" fullWidth />
            </MDBox> */}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                Create the team!
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already a part of team?
                <MDTypography
                  component={Link}
                  to="/join-team"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Join the team!
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default CreateTeam;
