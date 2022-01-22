
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Tilt from 'react-tilt';

// Images
import bgImage from "../../assets/images/registerbg/newbg.jfif";

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
            Register with your squad !
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={1} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2} sx={{marginLeft: '24%',}}>
            <div className="select_team">Select your team</div>
            <MDBox py={1.5} pl={3}>
            <div className="custom-select" >
      <select>
        <option value="0">Select Team:</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option>
      </select>
    </div>
     </MDBox>
            </MDBox>
              <Tilt className="Tilt" options={{ max : 25, scale: 1.02}}>
                    <MDBox pt={1.5}  px={3}>
                        <MDBox  ml={1} mr={1} mb={1} display="flex" flexDirection="column" >
          <button type="button" className="btn btn-outline-primary btn-lg btn-block">
                Register
              </button>

            </MDBox>

        </MDBox>
            </Tilt>

          <hr />
          <div className="row">
          <div className="col-7">
          <p className="gonna_cry">Create a new team ? </p>
          </div>
          <div className="col-5">
          <button type="button" className="btn btn-outline-success">
          <div className="new_tm_txt">
                Click here
                </div>
              </button>
              </div>
</div>

          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default CreateTeam;
