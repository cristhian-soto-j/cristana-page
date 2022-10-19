import { useEffect } from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Section1.css";

const Section1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
      <div
        className="aos-man1"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <img className="characters" src={"https://i.ibb.co/7vg93Lx/Man1.png"} />
      </div>
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
        <Typography variant="h4">Un Diseño Movil</Typography>
        <Typography variant="h7" sx={{ p: 2 }}>
          Y Adaptable
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, p: 2 }}>
          El 90% de tus visitas las realizaran desde dispositivos mobiles. No
          quedes fuera de su alcance
        </Typography>
      </Container>
      <div
        className="aos-iphone"
        data-aos="fade-up-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <img
          className="iphone"
          src={"https://i.ibb.co/1Qsx8qy/iphone-mockup.png"}
        />
      </div>
      <div
        className="aos-woman1"
        data-aos="fade-down-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <img
          className="characters"
          src={"https://i.ibb.co/FzdZzxV/Woman1.png"}
        />
      </div>

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
        <Typography variant="h4">Experiencia Visual</Typography>
        <Typography variant="h7"> Y De Navegacion</Typography>

        <Typography variant="body1" sx={{ mt: 2, p: 2 }}>
          Para resaltar de la competencia, generar visitas y fidelizar, tu sitio
          web necesita una experiencia de navegacion y visual unica, nosotros te
          ayudaremos a conseguirlo.
        </Typography>
      </Container>
      <div
        className="aos-man2"
        data-aos="fade-down-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="900"
      >
        <img className="characters" src={"https://i.ibb.co/WypfnRp/Man2.png"} />
      </div>
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
        <Typography variant="h4">Exelente Equipo</Typography>
        <Typography variant="h7">Damos el 100%</Typography>
        <Typography variant="body1" sx={{ mt: 2, p: 2 }}>
          Entendemos que para obtener los mejores resultados es importante
          contar con un equipo de calidad. Nuestro equipo es creativo y
          profesional, no dejamos escapar ningun detalle.
        </Typography>
      </Container>
    </Container>
  );
};

export default Section1;
