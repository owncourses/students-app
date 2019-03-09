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

const CourseItem = ({ item: { title, description, id } }) => {
  return (
    <li className="list-item">
      <Link to={`/${id}`}>
        <Card>
          <CardHeader title={title} />
          <CardMedia
            className={"media"}
            image={
              "https://naszepierwszedziecko.pl/media/800_533__b5fd7a8050e87b5bb16042f1464a3ae83a2581c3.jpeg"
            }
          />
          <CardContent>
            <Typography component="p">{description}</Typography>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
};

export default CourseItem;
