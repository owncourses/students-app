import * as React from "react";
import { Link, match } from "react-router-dom";
import { Typography } from "@material-ui/core";
import "./style.scss";
import Icon from "@material-ui/core/Icon";

const CourseLessonItem = ({
  match,
  item
}: {
  match: match;
  item: {
    id: string;
    title: string;
    href: { cover_image_url: string | null };
    completed: boolean | null;
  };
}) => {
  return (
    <Link to={`${match.url}/lesson/${item.id}`}>
      <div className={"lesson"}>
        <img
          src={
            item.href.cover_image_url
              ? item.href.cover_image_url
              : "https://via.placeholder.com/75"
          }
          alt=""
        />
        <div className={"details"}>
          <Typography variant={"body1"}>{item.title}</Typography>
          {item.completed && <Icon color={"primary"}>check</Icon>}
        </div>
      </div>
    </Link>
  );
};

export default CourseLessonItem;
