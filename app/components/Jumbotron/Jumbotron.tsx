import * as React from "react";
import { Typography } from "@material-ui/core";
import "./style.scss";

const Jumbotron = ({
  title,
  subtitle,
  description
}: {
  title: string;
  subtitle?: string;
  description?: string;
}) => {
  return (
    <div className={"jumbotron"}>
      <div className={"content"}>
        <Typography variant={"h6"}>{title}</Typography>
        {subtitle && <Typography variant={"body1"}>{subtitle}</Typography>}
        {description && (
          <Typography variant={"caption"}>{description}</Typography>
        )}
      </div>
    </div>
  );
};

export default Jumbotron;
