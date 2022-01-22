/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
  const [eventClassname, setEventClassname] = React.useState("Global Leaderboard");
  // const [display, setDisplay] = React.useState("none");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClass = (className) => {
    setEventClassname(className);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <div marginBottom={3}>
          <Button
            id='demo-positioned-button'
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <div className='drop_down'>
              Select your event <i className='fas fa-caret-down' />
            </div>
          </Button>
          <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {" "}
            <MenuItem
              onClick={() => {
                handleClose();
                handleClass("Global Leaderboard");
              }}
            >
              Global
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleClass("Codigo");
              }}
            >
              Codigo
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleClass("Consilium");
              }}
            >
              Consilium
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleClass("Cryptex");
              }}
            >
              Cryptex
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleClass("HackOverflow");
              }}
            >
              HackOverflow
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleClass("Recognizance");
              }}
            >
              Recognizance
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleClass("Simulim");
              }}
            >
              Simulim
            </MenuItem>
          </Menu>
        </div>

        {
          // eslint-disable-next-line no-nested-ternary
          eventClassname === "Codigo" ? (
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={1}
                  py={3}
                  px={2}
                  variant='gradient'
                  bgColor='dark'
                  borderRadius='lg'
                  coloredShadow='info'
                  className='Event 1'
                >
                  <MDTypography variant='h6' color='white'>
                    Codigo Leaderboard
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
          ) : eventClassname === "Global Leaderboard" ? (
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={1}
                  py={3}
                  px={2}
                  variant='gradient'
                  bgColor='info'
                  borderRadius='lg'
                  coloredShadow='info'
                >
                  <MDTypography variant='h6' color='white'>
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
          ) : eventClassname === "Consilium" ? (
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={1}
                  py={3}
                  px={2}
                  variant='gradient'
                  bgColor='dark'
                  borderRadius='lg'
                  coloredShadow='info'
                  className='Event 1'
                >
                  <MDTypography variant='h6' color='white'>
                    Consilium Leaderboard
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
          ) : eventClassname === "HackOverflow" ? (
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={1}
                  py={3}
                  px={2}
                  variant='gradient'
                  bgColor='dark'
                  borderRadius='lg'
                  coloredShadow='info'
                  className='Event 1'
                >
                  <MDTypography variant='h6' color='white'>
                    HackOverflow Leaderboard
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
          ) : eventClassname === "Cryptex" ? (
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={1}
                  py={3}
                  px={2}
                  variant='gradient'
                  bgColor='dark'
                  borderRadius='lg'
                  coloredShadow='info'
                  className='Event 1'
                >
                  <MDTypography variant='h6' color='white'>
                    Cryptex Leaderboard
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
          ) : eventClassname === "Recognizance" ? (
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={1}
                  py={3}
                  px={2}
                  variant='gradient'
                  bgColor='dark'
                  borderRadius='lg'
                  coloredShadow='info'
                  className='Event 1'
                >
                  <MDTypography variant='h6' color='white'>
                    Recognizance Leaderboard
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
          ) : eventClassname === "Simulim" ? (
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={1}
                  py={3}
                  px={2}
                  variant='gradient'
                  bgColor='dark'
                  borderRadius='lg'
                  coloredShadow='info'
                  className='Event 1'
                >
                  <MDTypography variant='h6' color='white'>
                    Simulim Leaderboard
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
          ) : (
            <h1>None</h1>
          )
        }
      </MDBox>

      <MDBox mt={8} pb={3} className='Global Leaderboard'>
        <Grid container spacing={6}>
          {/* <Grid item xs={12}>
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
          </Grid> */}

          {}

          {/* <Grid item xs={12}>
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
                className="Event 1"
              >
                <MDTypography variant="h6" color="white" >
                  Event 1 Leaderboard
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


          </Grid> */}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
