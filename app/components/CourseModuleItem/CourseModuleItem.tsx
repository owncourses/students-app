import * as React from "react";
import { Typography } from "@material-ui/core";
import CourseLessonItem from "../CourseLessonItem";
import "./style.scss";
import { ModuleInterface } from "../../containers/SingleCourse/interfaces";
import { match } from "react-router";

const CourseModuleItem = ({
  item: { title, lessons },
  match
}: {
  item: ModuleInterface;
  match: match;
}) => {
  const lessonsView =
    lessons &&
    lessons.map(lesson => (
      <CourseLessonItem key={lesson.id} item={lesson} match={match} />
    ));

  return (
    <div className={"module-card"}>
      <Typography variant={"subtitle2"}>{title}</Typography>
      <div className={"lessons"}>{lessonsView}</div>
    </div>
  );
};

export default CourseModuleItem;
