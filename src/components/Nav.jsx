import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./Nav.css";

const Nav = () => {

  return (
      <AppBar sx={{ bgcolor:"#ffd803", color:"#272343" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: '"Nunito"',
              fontWeight: 1000,
              fontSize: "2rem",
              width: "100%",
              textAlign: "center"
            }}
          >
            CRISTANA
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default Nav;
