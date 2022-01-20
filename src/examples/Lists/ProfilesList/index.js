 // prettier-ignore
// react-routers components

import * as React from 'react';
import Stack from '@mui/material/Stack';

// prop-types is library for typechecking of props
import PropTypes from "prop-types";
// @mui material components
import Card from "@mui/material/Card";



// Prastuti  2 React components

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tilt from 'react-tilt';



function ProfilesList({ title, profiles, shadow }) {
  const renderProfiles = profiles.map(({ image, name, description }) => (
    <div>
    <MDBox key={name} component="li" display="flex" alignItems="center" py={2} mb={1} >
      <MDBox mr={2}>
        <MDAvatar src={image} alt="something here" shadow="md" />
      </MDBox>
      <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" px={2} r={3} >
        <MDTypography variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption" color="text">
          {description}
        </MDTypography>
      </MDBox>




  </MDBox>
  <Stack spacing={2} direction="row" py={0} >
  <Tilt className="Tilt" options={{ max : 6,  scale: 1.2,  }} >

  <Button variant="outline-success">Accept</Button>

  </Tilt>
  <Tilt className="Tilt" options={{ max : 6,  scale: 1.2,  }}>

  <Button variant="outline-danger">Decline</Button>

  </Tilt>

 </Stack>
   </div>

  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox pt={2} px={2}>
        <MDTypography variant="h5" fontWeight="medium" textTransform="capitalize" color="black" textGradient>
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
ProfilesList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default ProfilesList;
