import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import useWindowDimensions from "hooks/useWindowDimensions";

function CompetitionCard({ image, label, title, description, action}) {
  const { width } = useWindowDimensions();
  let displayType
  if(width<1096 )
  {
    displayType="column"
  }
  else
  {
    displayType="row"
  }
  return (
    < div style={{ display:'flex', justifyContent:'center' }}>
    <Card
      sx={{

        display: "flex",
        flexDirection: `${displayType}`,
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "55%",
            margin: 2,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      <MDBox mt={1} mx={0.5} p={2}>
        <MDTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
          {label}
        </MDTypography>
        <MDBox mb={1}>
          {action.type === "internal" ? (
            <MDTypography
              component={Link}
              to={action.route}
              variant="h5"
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
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </MDTypography>
          )}
        </MDBox>
        <MDBox mb={3} lineHeight={0} py={2}>
          <MDTypography variant="button" fontWeight="light" color="text" >
            {description}
          </MDTypography>
          <MDBox py={2}>
            <MDButton
              component="a"
              target="_blank"
              color={action.color}
              rel="noreferrer"
              variant="outlined"
              size="small"
              href={action.route}
              py={2}
            >
              Learn More
            </MDButton>
            </MDBox>
        </MDBox>
      </MDBox>
    </Card>
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
