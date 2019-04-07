import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.scss";
import { CourseInterface } from "../../containers/Auth/interfaces";
import SuccessButton from "../Buttons/SuccessButton";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <li className="list-item">
      <Card className={"course-card"}>
        <CardMedia className={"media"} image={coverImageUrl} />
        <CardContent className={"content"}>
          <Typography variant={"subtitle2"}>{title}</Typography>
          <Typography variant="body1">{description}</Typography>
          <Link to={`/${id}`}>
            <SuccessButton variant={"outlined"} text={t("Start course")} />
          </Link>
        </CardContent>
      </Card>
    </li>
  );
};

export default CourseItem;
