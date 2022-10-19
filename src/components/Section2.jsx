import { Container, Typography } from "@mui/material";
import "./Section2.css";

const Section2 = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Como Trabajamos</Typography>
        <Typography variant="h7">Facil...</Typography>
      </Container>

      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div className="pasos">
          <img src={"https://i.ibb.co/BzStnmP/paso1.png"}></img>
        </div>
        <div className="pasos">
          <img src={"https://i.ibb.co/NY0qfHJ/paso2.png"}></img>
        </div>
        <div className="pasos">
          <img src={"https://i.ibb.co/Z6jXyr8/paso3.png"}></img>
        </div>
        <div className="pasos">
          <img src={"https://i.ibb.co/Z2FjPvs/paso4.png"}></img>
        </div>
        <div className="pasos">
          <img src={"https://i.ibb.co/dtr57Cy/paso5.png"}></img>
        </div>
        <div className="pasos">
          <img src={"https://i.ibb.co/M9Z2Y85/paso6.png"}></img>
        </div>
      </Container>
    </Container>
  );
};

export default Section2;
