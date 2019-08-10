import * as React from "react";
import { Link, match } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";
import "./style.scss";
import Icon from "@material-ui/core/Icon";
import { parseDurationInMinutesToString } from "../../utils/durationUtils";
import { useTranslation } from "react-i18next";

const CourseLessonItem = ({
  match,
  item
}: {
  match: match;
  item: {
    id: string;
    title: string;
    duration_in_minutes: number;
    href: { cover_image_url: string | null };
    completed: boolean | null;
  };
}) => {
  const { t } = useTranslation();
  return (
    <Link to={`${match.url}/lesson/${item.id}`}>
      <Paper className={"lesson"}>
        <img
          src={
            item.href.cover_image_url
              ? item.href.cover_image_url
              : "https://via.placeholder.com/75"
          }
          alt=""
        />
        <div className={"details"}>
          <div>
            <Typography variant={"body1"}>{item.title}</Typography>
            <Typography variant={"caption"}>
              {t("Lesson duration")}:{" "}
              <span>
                {parseDurationInMinutesToString(item.duration_in_minutes)}
              </span>{" "}
              {t("minutes")}
            </Typography>
          </div>
          {item.completed && <Icon color={"primary"}>check</Icon>}
        </div>
      </Paper>
    </Link>
  );
};

export default CourseLessonItem;
