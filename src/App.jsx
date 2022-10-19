import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";
import { Container } from "@mui/system";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./App.css";

function App() {

  const mobile = useMediaQuery(
    json2mq({
      minWidth: 320,
    })
  );
  const tablet = useMediaQuery(
    json2mq({
      minWidth: 600,
    })
  );
  const desktop = useMediaQuery(
    json2mq({
      minWidth: 1200,
    })
  );
  return (
    <Container sx={{ flexGrow: 1, p:0, mt:10, overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <Section1 />
      <Section2 />
      <Footer />
    </Container>
  );
}

export default App;
