import React from "react";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({}));

export default function Skills() {
  // const skillsData = [
  //   {
  //     name: ".Net Core",
  //     level: "70%",
  //   },
  //   {
  //     name: "React",
  //     level: "80%",
  //   },
  //   {
  //     name: "ReactNative",
  //     level: "60%",
  //   },
  //   {
  //     name: "SQL",
  //     level: "70%",
  //   },
  //   {
  //     name: "HTML5/CSS3/Bootstrap",
  //     level: "80%",
  //   },
  //   {
  //     name: "Javascript",
  //     level: "70%",
  //   },
  //   {
  //     name: "Java",
  //     level: "60%",
  //   },
  // ];

  // const skills = skillsData.map(function (skills) {
  //   var className = "bar-expand" + skills.name.toLowerCase();
  //   return (
  //     <li key={skills.name}>
  //       <span style={{ width: skills.level }} className={className}></span>
  //       <em>{skills.name}</em>
  //     </li>
  //   );
  // });

  // const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <h1 className="header">Skills</h1>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "70%" }}
          >
            <span className="sr-only">70% Complete</span>
          </div>
        </div>{" "}
      </main>
    </React.Fragment>
  );
}
