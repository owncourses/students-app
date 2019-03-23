import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.scss";
import { CourseInterface } from "../../containers/Auth/interfaces";

const CourseItem = ({
  item: {
    title,
    description,
    id,
    href: { coverImageUrl }
  }
}: {
  item: CourseInterface;
}) => {
  return (
    <li className="list-item">
      <Link to={`/${id}`}>
        <Card>
          <CardHeader title={title} />
          <CardMedia className={"media"} image={coverImageUrl} />
          <CardContent>
            <Typography component="p">{description}</Typography>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
};

export default CourseItem;
