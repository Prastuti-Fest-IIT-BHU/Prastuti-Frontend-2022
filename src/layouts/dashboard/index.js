import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import CompetitionCard from "examples/Cards/CompetitionsCard";
import Loader from "components/Loader/Loader";
import AxiosInstance from "../../config/axios_config";

function Dashboard() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await AxiosInstance.get("/api/events");

      if (data) {
        setEvents(data.events);
      }
    };

    fetchEvents();
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={10}>
              {events.length === 0 ? (
                <Loader text='Fetching events' />
              ) : (
                events.map((event) => (
                  <MDBox mb={4}>
                    <CompetitionCard
                      image={event.CardImg}
                      label={event.Domain}
                      title={event.Name}
                      description={event.Description[0]}
                      numParticipants={event.Participants_Count}
                      action={{
                        type: "internal",
                        route: `/${event.Name}`,
                        color: "info",
                        label: "Register",
                      }}
                    />
                  </MDBox>
                ))
              )}
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
