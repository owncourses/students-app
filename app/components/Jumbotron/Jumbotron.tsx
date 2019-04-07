import * as React from "react";
import { Typography } from "@material-ui/core";
import "./style.scss";

const Jumbotron = ({ title, subtitle }) => {
  return (
    <div className={"jumbotron"}>
      <div className={"content"}>
        <Typography variant={"h6"}>{title}</Typography>
        <Typography variant={"caption"}>{subtitle}</Typography>
      </div>
    </div>
  );
};

export default Jumbotron;
