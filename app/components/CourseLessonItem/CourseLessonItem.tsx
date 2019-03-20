import * as React from "react";
import { Link } from "react-router-dom";

const CourseLessonItem = ({ match, item }) => {
  return <Link to={`${match.url}/lesson/${item.id}`}>{item.title}</Link>;
};

export default CourseLessonItem;
