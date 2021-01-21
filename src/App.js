import "./App.css";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import About from "./component/about";
import Footer from "./component/footer";
import Project from "./component/Project";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80%",
    maxWidth: "1100px",
    margin: "0 auto",
    background: "#fcf2e8",
    backgroundRepeat: "repeat-x",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#fcf2e8",
    color: "black",
    padding: "1em 0",
    height: "auto",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  toolbar: {
    height:"5vh",
    display: "flex",
    flexDirection: "row",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  navItems: {
    width: "50%",
    display: "flex",
    flexShrink: 1,
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  nameTitle: {
    width: "50%",
    textAlign: "center",
    fontFamily: "Satisfy",
    fontSize: "2.5rem",
    padding: "0.5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      width: "100%",
    },
  },
  title: {
    marginRight: "auto",
    "&:hover, &:focus": {
      cursor: "pointer",
      color: "#F16A70",
      textDecoration: "none",
      backgroundImage: "linear-gradient(to right, #F16A70, #F16A70)",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 2px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "0.15rem auto",
      fontSize: "1rem",
    },
  },
}));

const App = (props) => {
  const classes = useStyles();

  return (
    <div
      className="container"
      style={{
        background: "#fcf2e8",
      }}
    >
      <ElevationScroll {...props}>
        <AppBar position="sticky" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.nameTitle}>LOUIS GURUNG</div>
            <div className={classes.navItems}>
              <Typography variant="h5" className={classes.title}>
                AboutMe
              </Typography>
              <Typography variant="h5" className={classes.title}>
                Skills
              </Typography>
              <Typography variant="h5" className={classes.title}>
                Projects
              </Typography>
              <Typography variant="h5" className={classes.title}>
                Contact
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <About />
      <Project />
      <Footer />
    </div>
  );
};

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default App;
