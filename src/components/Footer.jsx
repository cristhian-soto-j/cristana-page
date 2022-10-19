import { Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import MailIcon from "@mui/icons-material/Mail";
import "./Footer.css";

const Footer = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        bgcolor: "#255965",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#ffd803", letterSpacing: 10, pt: 5 }}
      >
        HABLEMOS
      </Typography>
      <br></br>

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MailIcon fontSize="large" />
        <Typography
          variant="h6"
          sx={{ color: "#ffd803", letterSpacing: 2, ml: 1 }}
        >
          contacto@cristana.cl
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <TextField label="Tu Email" variant="outlined" sx={{ p: 0 }} />
        <Button variant="outlined">
          <SendIcon />
        </Button>
      </Container>

      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          m: 2,
        }}
      >
        <img
          className="logo"
          src={"https://i.ibb.co/wLcgYG9/in-logo.png"}
          width={70}
        ></img>

        <img
          className="logo"
          src={"https://i.ibb.co/drg5Jnk/wa-logo.png"}
          width={70}
        ></img>

        <img
          className="logo"
          src={"src/assets/insta-logo.png"}
          width={70}
        ></img>

        <img
          className="logo"
          src={"https://i.ibb.co/z8r4MfX/tele-logo.png"}
          width={70}
        ></img>

        <img
          className="logo"
          src={"src/assets/twitter-logo.png"}
          width={70}
        ></img>

        <img
          className="logo"
          src={"https://i.ibb.co/QMG1RWX/face-logo.png"}
          width={70}
        ></img>
      </Container>
      <Typography variant="body2" sx={{ color: "#D3DBDE", mb: 2 }}>
        CRISTANA© 2021. All rights reserved
      </Typography>
    </Container>
  );
};

export default Footer;
