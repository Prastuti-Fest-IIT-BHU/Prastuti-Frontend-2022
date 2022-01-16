import CompetitionInfoCard from "examples/Cards/CompetitionPage";
import homeDecor2 from "assets/images/home-decor-2.jpg";

function Codigo(){
  return (
    <CompetitionInfoCard title="Codigo"
                description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                action={{ route: "/team-register", tooltip: "Team Event", type:"team"}}
                image={homeDecor2}
  />
  )
}
export default Codigo;
