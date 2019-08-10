import * as React from "react";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./style.scss";

const VideoDuration = ({ duration }: { duration: string }) => {
  const { t } = useTranslation();

  return (
    <div className={"video-duration"}>
      <Typography variant={"subtitle2"}>
        {t("Lesson duration")}: <span>{duration}</span> {t("minutes")}
      </Typography>
    </div>
  );
};

export default VideoDuration;
