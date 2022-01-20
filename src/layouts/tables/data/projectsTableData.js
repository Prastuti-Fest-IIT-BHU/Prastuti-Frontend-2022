/* eslint-disable react/prop-types */

// @mui material components


// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";


// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";


export default function data() {
  const Project = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
        <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" lineHeight={1}>
        {name}
      </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
    </MDBox>
      </MDBox>
  );


  return {
    columns: [
      { Header: "Padticipant", accessor: "project", width: "50%", align: "left" },
      { Header: "College", accessor: "budget", align: "left" },
      { Header: "Score", accessor: "status", align: "center" },
    ],

    rows: [
      {
        project: <Project image={LogoAsana} name="Asana" email="xyz@gmail.com" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </MDTypography>
        ),
      },
    ],
  };
}
