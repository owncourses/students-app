import * as React from "react";
import { Typography } from "@material-ui/core";
import "./style.scss";
import { LessonInterface } from "../../containers/SingleLesson/interfaces";

const CourseLesson = ({
  item: { title, description, embed_code }
}: {
  item: LessonInterface;
}) => {
  return (
    <div className={"course-lesson"}>
      <Typography variant={"h6"}>{title}</Typography>
      <Typography variant={"subtitle1"}>{description}</Typography>
      <div
        className={"embed-code"}
        dangerouslySetInnerHTML={createEmbedCode(embed_code)}
      />
    </div>
  );
};

export default CourseLesson;

function createEmbedCode(embedCode: string): { __html: string } {
  return { __html: embedCode };
}
