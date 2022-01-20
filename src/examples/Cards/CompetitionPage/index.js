 // prettier-ignore
// react-router-dom components
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Tilt from 'react-tilt';

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import useWindowDimensions from "hooks/useWindowDimensions";
// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
// import { Grid } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import backgroundImage from "assets/images/bg-profile.jpeg";


function DefaultProjectCard({ image, title, description, action }) {

  const { width } = useWindowDimensions();
  let PaddingLeft
  let MarginPhone
  let Pageimg
  if(width<1196 )
  {
    PaddingLeft="5%"
    MarginPhone="1"
    Pageimg="5"

  }
  else
  {
    PaddingLeft="21%"
    Pageimg="20%"
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
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "95%",
            margin: 5,
            marginLeft:  `${Pageimg}`,
            marginRight:  `${Pageimg}`,
            boxShadow: ({ boxShadows: { md } }) => md,
            justifyContent: "center",
            display:"flex",
            // objectFit: "cover",
            objectPosition: "center",
          }}
        />

      <MDBox mt={1} mx={0.5} justifyContent="center">
<div style={{ display:'flex', justifyContent:'center' }}>

    <Tilt className="Tilt" options={{ max : 25, scale: 2}}>
        <MDBox mb={1}>
            <MDTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
              justifyContent="center"
            >
              {title}
            </MDTypography>

        </MDBox>
      </Tilt>
        </div>
        <MDBox mb={3} lineHeight={0} justifyContent="center" sx={{
          marginLeft: 3,
          marginRight:3,
        }}>
          <MDTypography variant="button" fontWeight="light" color="text" justifyContent="center">
            {description}
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
        <MDBox   mb={0.5} lineHeight={0} justifyContent="center" sx={{
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
            <MDButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              color="black"
              sx={{
                gap: 3,

              }}
            >
              Register
            </MDButton>
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
  image: PropTypes.string.isRequired,
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
