import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Tilt from 'react-tilt';
import Button from 'react-bootstrap/Button';

/*  <MDTypography variant="button" fontWeight="bold" color="text" ><Link to= "/codigo">Learn More </Link></MDTypography> */

import useWindowDimensions from "hooks/useWindowDimensions";

function CompetitionCard({ image, label, title, description, action}) {
  const { width } = useWindowDimensions();
  let displayType
  let imgw
  if(width<1096 )
  {
    displayType="column"
    imgw="100%"
  }
  else
  {
    displayType="row"
    imgw="45%"
  }
  return (
    < div style={{ display:'flex', justifyContent:'left' }}>
    <Tilt className="Tilt" options={{ max : 3,  scale: 1.01,  }} >

    <Card
      sx={{

        display: "flex",
        flexDirection: `${displayType}`,
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
            maxWidth: `${imgw}`,
            margin: 2,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      <MDBox mt={1} mx={0.5} p={2}>

        <MDBox mb={1}>
          {action.type === "internal" ? (
            <MDTypography
              component={Link}
              to={action.route}
              variant="h3"
              textTransform="capitalize"
            >
              {title}
            </MDTypography>
          ) : (
            <MDTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h4"
              textTransform="capitalize"
            >
              {title}
            </MDTypography>
          )}
        </MDBox>
        <MDTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
          {label}
        </MDTypography>
        <MDBox  lineHeight={0} py={2}>
          <MDTypography variant="button" fontWeight="normal" color="text" >
          {description} </MDTypography>

        </MDBox>


        <MDBox>
        <hr />
        </MDBox >
          <MDBox mb={3} lineHeight={0} py={2}>
          <MDTypography variant="h6" fontWeight="bold" color="text" >
           0 partcipants registered till now </MDTypography>

          </MDBox>
          <MDBox ml={48}>
            <Button variant="outline-danger" className="float-right" href="/codigo">Register</Button>
            </MDBox >
      </MDBox>
    </Card>
    </Tilt>
    </div>
  );
}

// Typechecking props for the CompetitionCard
CompetitionCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
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

export default CompetitionCard;
