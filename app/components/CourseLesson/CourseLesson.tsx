import * as React from "react";
import { Typography } from "@material-ui/core";
import "./style.scss";

const CourseLesson = ({ item }) => {
  const { title, description, embed_code } = item;
  return (
    <div>
      <Typography variant={"title"}>{title}</Typography>
      <Typography variant={"subheading"}>{description}</Typography>
      <div
        className={"embed-code"}
        dangerouslySetInnerHTML={createEmbedCode(embed_code)}
      />
    </div>
  );
};

export default CourseLesson;

function createEmbedCode(embedCode) {
  return { __html: embedCode };
}
