import * as React from "react";
import { Typography } from "@material-ui/core";
import CourseLessonItem from "../CourseLessonItem";
import "./style.scss";
import { ModuleInterface } from "../../containers/SingleCourse/interfaces";
import { match } from "react-router";
import Progress from "../Progress";

const CourseModuleItem = ({
  item: {
    title,
    lessons,
    progress: { completed_percentage }
  },
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
      <div className={"module-header"}>
        <Typography variant={"subtitle2"}>{title}</Typography>
        <Progress value={parseInt(completed_percentage)} type={"module"} />
      </div>
      <div className={"lessons"}>{lessonsView}</div>
    </div>
  );
};

export default CourseModuleItem;
