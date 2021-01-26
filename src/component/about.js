import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Image from "../assets/Photo.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    margin: "3em 0 10em 0",
    padding: "50px 0",
    display: "flex",
    justifyContent: "space-between",
  },
  pic: {
    width: "45%",
    margin: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "&:hover": {
      elevation: "25",
    },
  },

  about: {
    width: "40%",
    maxWidth: "800px",

    fontWeight: "bold",
    fontSize: "1.125rem",
    fontFamily: "Nunito",
    background:
      "linear-gradient(90deg, rgba(238,237,193,1) 0%, rgba(239,210,244,1) 100%) !important",
    padding: "2em",
    textAlign: "center",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={Image} className={classes.pic} alt="HeaderImage" />

      <Paper elevation={5} className={classes.about}>
        <div style={{ padding: "0 0 1em 0" }}>
          <h1>About me</h1>
        </div>
        <div>
          {" "}
          <h3>
            I am Louis Gurung. I am an aspiring Full Stack Web/Mobile
            Application Developer. I graduated from Southeastern Louisiana
            University with Bachelors degree in Computer Science and minor in
            Mathematics. I love turning ideas to real world applications. I love
            working with people who are motivated and help each other grow.
            Besides work, I love cooking, travelling and being around good
            company. My motto in life is "Stay Happy".
          </h3>
        </div>
      </Paper>
    </div>
  );
}
