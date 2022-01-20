
// @mui material components
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import MDInput from "components/MDInput";
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
              <MDButton variant="outlined" color="black" outlined="true"  sx={{
                marginTop : 1.5, marginLeft: 6.2, marginRight: 6.2
              }}
                >Send Invite</MDButton>
              </form>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>


    </div>
  );
}

export default SendInvite;
