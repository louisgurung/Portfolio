import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AgriCoShot from "../assets/agricoshot.jpg";
import labapp from "../assets/labapp.jpg";
import dealmart from "../assets/dealmart.jpg";

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",

    width: "60%",
    padding: "2em",
    background:
      "linear-gradient(90deg, rgba(238,237,193,1) 0%, rgba(239,210,244,1) 100%) !important",
  },
  cardGrid: {
    margin: 0,
    width: "100%",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    justifyContent: "space-between",
  },
  projectDetails: {
    maxWidth: "700px",
    fontWeight: "bold",
    fontSize: "1.125rem",
    fontFamily: "Nunito",
    marginBottom: "6em",

    color: "black",
  },
  projectImage: {
    width: "100%",
    height: "30em",
    marginBottom: "6em",
  },
  projectTitle: {
    fontWeight: "bold",
    fontSize: "1.8rem",
    textDecoration: "underline",
  },
  link: {
    fontSize: "1.3rem",
  },
}));

const projectItems = [
  {
    details:
      "AgriCo. App is a Web and Mobile App made for a group project assigned by ENVOC LLC. It lets you buy tickets to pick agricultural products. Features like QR code, purchasing tickets, seeing transactions, give feedback, roles were implemented. Deployed using Azure",
    source: AgriCoShot,
    alt: "AgriCoApp",
    imagePosition: "right",
    link: "https://agricoapp.azurewebsites.net/",
  },
  {
    details:
      "This is a group project built for Computer Science Professor, Dr. Kuo Pao Yang, in order to monitor his Computer Tutoring Labs. The admin has his dashboard where he can schedule work hours, view student logs, receive tickets and also message the assistants.",
    source: labapp,
    alt: "SELU Lab App",
    imagePosition: "left",
    link: "https://agricoapp.azurewebsites.net/",
  },
  {
    details:
      "DealMart is an e-commerce site for buying new and used books. It started as a group project to raise funds for NSAS(Nepalese Student Association at Southeastern) which organizes various events for International students. ",
    source: dealmart,
    alt: "DealMart",
    imagePosition: "right",
    link: "",
  },
];

export default function Project() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <h1 className="header">Projects</h1>
        <Grid container spacing={2} className={classes.cardGrid}>
          {projectItems.map((item) => {
            return item.imagePosition === "right" ? (
              <React.Fragment>
                {" "}
                <Grid item xs={6} className={classes.projectDetails}>
                  <Paper className={classes.paper}>
                    <h3 className={classes.projectTitle}>{item.alt}</h3>
                    <br />
                    {item.details}
                    <br />
                    <br />
                    {item.link && (
                      <a href={item.link} className={classes.link}>
                        View Demo
                      </a>
                    )}
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <img
                    src={item.source}
                    alt={item.alt}
                    className={classes.projectImage}
                  />
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {" "}
                <Grid item xs={6}>
                  <img
                    src={item.source}
                    alt={item.alt}
                    className={classes.projectImage}
                  />
                </Grid>
                <Grid item xs={6} className={classes.projectDetails}>
                  <Paper className={classes.paper} style={{ float: "right" }}>
                    <h3 className={classes.projectTitle}>{item.alt}</h3>
                    <br />
                    {item.details}
                    <br />
                    <br />

                    {item.link && (
                      <a href={item.link} className={classes.link}>
                        View Demo
                      </a>
                    )}
                  </Paper>
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </main>
    </React.Fragment>
  );
}
