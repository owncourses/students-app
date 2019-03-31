import * as React from "react";
import { Link, match } from "react-router-dom";
import { LessonInterface } from "../../containers/SingleLesson/interfaces";

const CourseLessonItem = ({
  match,
  item
}: {
  match: match;
  item: { id: string; title: string };
}) => {
  return <Link to={`${match.url}/lesson/${item.id}`}>{item.title}</Link>;
};

export default CourseLessonItem;
