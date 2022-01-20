 // prettier-ignore
// react-router-dom components
import Box from '@material-ui/core/Box';
import Tilt from 'react-tilt';
// Button
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
// prop-types is a library for typechecking of props
import PropTypes from "prop-types"; 


// ButtonGroup
// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import useWindowDimensions from "hooks/useWindowDimensions";
// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import { Grid } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import backgroundImage from "assets/images/bg-profile.jpeg";





import "./competitionpage.css";



function DefaultProjectCard({ title, description }) {

  const { width } = useWindowDimensions();
  let PaddingLeft
  let MarginPhone

  if(width<1196 )
  {
    PaddingLeft="5%"
    MarginPhone="5%"

  }
  else
  {
    PaddingLeft="19%"
    MarginPhone="2%"
  }

  return (
    <>

<div style={{ display:'flex', justifyContent:'center' }}>
<Box  sx={{
  ml: `${PaddingLeft}`,  mr: `${MarginPhone}`, mb:3,
}} ><DashboardNavbar/>
<MDBox
  display="flex"
  alignItems="center"
  position="relative"
  minHeight="18.75rem"
  borderRadius="xl"
  sx={{
    backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
      `${linearGradient(
        rgba(gradients.info.main, 0.6),
        rgba(gradients.info.state, 0.6)
      )}, url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    overflow: "hidden",
    mt: 3,
  }}
/>
    <Card
      sx={{
        position: "relative",
        mt: -8,
        mx: 3,
        py: 2,
        px: 2,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffff",
        boxShadow: "none",
        overflow: "visible",
      }}
    >


        <CardMedia
          title={title}
          sx={{
            boxShadow: ({ boxShadows: { md } }) => md,
            justifyContent: "center",
            display:"flex",
            // objectFit: "cover",
            objectPosition: "center",
          }}
        />

      <MDBox mt={1} mx={0.5} justifyContent="center">
<div style={{ display:'flex', justifyContent:'center' }}>


        <MDBox mb={3}  >
            <div className="heading_competition_page">
              {title}
          </div>

        </MDBox>

        </div>
        <MDBox mb={3} lineHeight={0} justifyContent="center" sx={{
          marginLeft: 3,
          marginRight:3,
        }}>
          <MDTypography variant="button" fontWeight="light" color="text" justifyContent="center">
          <div className="content">
            {description}
            </div>
          </MDTypography>

        </MDBox>
        <MDBox mb={1} lineHeight={0} justifyContent="center" sx={{
          marginLeft: 3,
          marginRight:3,
        }}>
          <MDTypography variant="button" fontWeight="light" color="text" justifyContent="center">
            Coordinators:
          </MDTypography>
        </MDBox>
        <MDBox   mb={2} lineHeight={0} justifyContent="center" sx={{
          marginLeft: 5,
          marginRight:3,
        }}>
          <MDTypography variant="button" fontWeight="light" color="text" justifyContent="center">
            Coordinator name ;    04045300
          </MDTypography>
        </MDBox>

<div style={{ display:'flex', justifyContent:'center' }}>
  <Tilt className="Tilt" options={{ max : 25, scale: 1.2}}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" sx={{
          gap:2, mb:3,
        }}>
        <Button variant="outline-info" className="float-right" href={action.route}>Register</Button>

        </MDBox>
        </Tilt>
</div>

      </MDBox>
    </Card>
    </Box>
  </div>
    </>
  );
}

// Setting default values for the props of DefaultProjectCard


// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultProjectCard;
