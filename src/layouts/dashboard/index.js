import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import CompetitionCard from "examples/Cards/CompetitionsCard";


function Dashboard() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox >

        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={10}>
              <MDBox mb={3}>
                <CompetitionCard
                image={homeDecor3}
                label="Competitive Programming"
                title="Codigo"
                description="Different people have different taste, and various types of music.Different people have different taste, and various types of music.Different people have different taste, and various types of music.Different people have different taste, and various types of music.Different people have different taste, and various types of music.Different people have different taste, and various types of music."
                action={{
                  type: "internal",
                  route: "/codigo",
                  color: "info",
                  label: "Register",
                }}
              />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
