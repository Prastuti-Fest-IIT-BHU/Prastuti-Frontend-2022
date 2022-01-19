

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import PositionedMenu from "examples/Menu/Menu";
// Prastuti  2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [eventClassname, setEventClassname] = React.useState("Event 1");


  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClass=(className)=>{
    setEventClassname(className);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>

<div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Select
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
          <MenuItem onClick={()=>{
            handleClose();
            handleClass("Event 3");
          }}>Event 3</MenuItem>
          <MenuItem onClick={()=>{
            handleClose();
            handleClass("Event 1");
          }}>Event 1</MenuItem>
          <MenuItem onClick={()=>{
            handleClose();
            handleClass("Event 2");
          }}>Event 2</MenuItem>
          <MenuItem onClick={handleClose}>Event 3</MenuItem>
          <MenuItem onClick={handleClose}>Event 1</MenuItem>
          <MenuItem onClick={handleClose}>Event 2</MenuItem>
          <MenuItem onClick={handleClose}>Event 3</MenuItem>
      </Menu>
    </div>



      </MDBox>


      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Global Leaderboard
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>

          {


          }

          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="dark"
                borderRadius="lg"
                coloredShadow="info"
                className={eventClassname}
              >
                <MDTypography variant="h6" color="white" >
                  {eventClassname} Leaderboard
                </MDTypography>
              </MDBox>
              <MDBox pt={2}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>


          </Grid>

        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
