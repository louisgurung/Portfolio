import "./App.css";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import About from "./component/about";
import Footer from "./component/footer";
import Project from "./component/Project";
// import Skills from "./component/skills";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "95%",
    maxWidth: "1150px",
    margin: "auto",
    backgroundRepeat: "repeat-x",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  appbar: {
    color: "black",
    padding: "1em 0",
    height: "auto",
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  toolbar: {
    height: "5vh",
    display: "flex",
    flexDirection: "row",
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  navItems: {
    width: "50%",
    display: "flex",
    flexShrink: 1,
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  nameTitle: {
    width: "50%",
    textAlign: "center",
    fontFamily: "Satisfy",
    fontSize: "2.5rem",
    padding: "0.5em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      width: "100%",
    },
  },
  title: {
    marginRight: "auto",
    "&:hover, &:focus": {
      cursor: "pointer",
      // color: "#F16A70", this line colors all
      textDecoration: "none",
      backgroundImage: "linear-gradient(to right, #F16A70, #F16A70)",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 3px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      margin: "0.15rem auto",
      fontSize: "1rem",
    },
  },
}));

const App = (props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <ElevationScroll {...props}>
          <AppBar position="sticky" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
              <div className={classes.nameTitle}>LOUIS GURUNG</div>
              <div className={classes.navItems}>
                <Typography variant="h5" className={classes.title} href="about">
                  AboutMe
                </Typography>
                <Typography variant="h5" className={classes.title}>
                  Skills
                </Typography>

                <Typography variant="h5" className={classes.title}>
                  Projects{" "}
                </Typography>

                <Typography
                  variant="h5"
                  className={classes.title}
                  href="contact"
                >
                  Contact
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.container}>
          <About />
          {/* <Skills /> */}
          <Project />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
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
