import * as React from "react";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import "./style.scss";
import config from "../../../config/config";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const LessonNavigation = ({
  nextLessonUrl,
  previousLessonUrl
}: {
  nextLessonUrl: string;
  previousLessonUrl: string;
}) => {
  const { t } = useTranslation();
  return (
    <div className={"lesson-navigation"}>
      <div className={"prev-lesson"}>
        {previousLessonUrl && (
          <Link to={previousLessonUrl}>
            <ChevronLeftIcon
              fontSize={"large"}
              htmlColor={config.brand.colors.primary}
            />
            <Typography variant={"body1"}>{t("Previous lesson")}</Typography>
          </Link>
        )}
      </div>
      <div className={"next-lesson"}>
        {nextLessonUrl && (
          <Link to={nextLessonUrl}>
            <Typography variant={"body1"}>{t("Next lesson")}</Typography>
            <ChevronRightIcon
              fontSize={"large"}
              htmlColor={config.brand.colors.primary}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default LessonNavigation;
