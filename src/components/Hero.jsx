import { Card, CardContent, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  return (
      <Container sx={{ flexGrow: 1, display: "flex",flexDirection:"column", justifyContent:"center", alignContent:"center", alignItems:"center"}}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h4" sx={{ mt: 3 }}>
            QUIERES UNA PAGINA WEB?
          </Typography>
        </motion.div>
        <Typography variant="h7" sx={{ mt: 1 }}>
          Podemos Ayudarte
        </Typography>
        <Typography variant="body1" sx={{ mt: 3, p:2 }}>
          Una buena imagen digital es fundamental, a todos nos pasa, cuando
          buscamos informacion o algun producto, si su pagina tiene un diseño
          poco atractivo o nos deja una mala experiencia de navegacion,
          inmediatamente deja de llamarnos la atencion, resultando en pocas
          visitas.
        </Typography>
        <Typography variant="body1" sx={{ mt: 3, p:2 }}>
          Nosotros crearemos para ti una pagina llamativa, unica y con una
          experiencia de navegacion satisfactoria, con esto no solo obtendras
          mas visitas si no que tambien fidelizaras usuarios o clientes.{" "}
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "center", flexDirection:"row", justifyContent:"center", alignContent:"center", alignItems:"center" }}>
          <Typography variant="h4" sx={{ mt: 3, mb: 3 }}>
            Que Te Ofrecemos
          </Typography>
          <motion.div
            initial={{ translateX: 1500, scale: 0.5 }}
            animate={{ translateX: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h1"
              sx={{
                mt: 3,
                mb: 3,
                color: "#bae8e8",
                textShadow:
                  "2px 0 #272343, -2px 0 #272343, 0 2px #272343, 0 -2px #272343, 1px 1px #272343, -1px -1px #272343, 1px -1px #fff, -1px 1px #fff",
              }}
            >
              ?
            </Typography>
          </motion.div>
        </Container>
      </Container>
  );
};

export default Hero;
