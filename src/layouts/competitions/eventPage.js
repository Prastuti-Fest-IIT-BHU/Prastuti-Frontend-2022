import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CompetitionInfoCard from "examples/Cards/CompetitionPage";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import Loader from "components/Loader/Loader";
import AxiosInstance from "../../config/axios_config";

function EventPage() {
  const [event, setEvent] = useState();
  const { eventName } = useParams();
  useEffect(() => {
    const fetchEvent = async () => {
      const { data } = await AxiosInstance.get(`/api/event/${eventName}`);

      if (data) {
        setEvent(data.event);
      }
    };

    fetchEvent();
  }, []);
  return (
    <>
      {event ? (
        <CompetitionInfoCard
          title={event.Name}
          // description={`${event.Description[0]}\n${event.Description[1]}\n${event.Description[2]}`}
          description={event.Description}
          action={{
            route: `${event.Team_Event ? "/team-register" : "/team-register"}`,
            tooltip: `${event.Team_Event ? "Team Event" : "Solo Event"}`,
            type: `${event.Team_Event ? "Team" : "Solo"}`,
          }}
          image={homeDecor2}
        />
      ) : (
        <Loader text='Fetching event details' />
      )}
    </>
  );
}
export default EventPage;
