import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./style.scss";

const CourseItem = ({
  item: {
    title,
    description,
    image: { url }
  }
}) => {
  return (
    <li className="list-item">
      <Card>
        <CardHeader
          title={title}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia className={"media"} image={url} />
        <CardContent>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </Card>
    </li>
  );
};

export default CourseItem;
