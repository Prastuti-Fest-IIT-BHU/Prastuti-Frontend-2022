
// @mui material components
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import Button from 'react-bootstrap/Button';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import MDInput from "components/MDInput";
import Tilt from 'react-tilt';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { Component } from "react";
// import { useState } from "react";

function SendInvite() {
  // const [title, setTitle] = useState('')

  return (
    <div  flex-basis="50%">


          <MDBox>
            <MDTypography align="center">Invite a member</MDTypography>
          </MDBox>

        {/* <MDButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;Invite New Member
        </MDButton> */}

      <MDBox p={2}>
        <Grid container spacing={3} display="flex" flexDirection="column" alignItems="center">
          <Grid item xs={12} md={12} xl={12}>
            <MDBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"

              p={2}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <form >
              <MDBox pl={2} pr={2} >
              <Tooltip title="Enter the email" placement="top">
              <MDInput />
              </Tooltip>
            </MDBox>
              <MDBox sx={{
                marginTop : 1.5, marginLeft: 6.7, marginRight: 6.2
              }}
                >
                <Tilt className="Tilt" options={{ max : 25, scale: 1.2}}>

                <Button variant="outline-primary" >

                Send Invite
              </Button>
            </Tilt>
          </MDBox>
              </form>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>


    </div>
  );
}

export default SendInvite;
