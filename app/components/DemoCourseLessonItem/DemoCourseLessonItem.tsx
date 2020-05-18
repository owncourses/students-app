import * as React from "react";
import "./style.scss";
import { Paper, Typography } from "@material-ui/core";
import { parseDurationInMinutesToString } from "../../utils/durationUtils";
import CheckIcon from "@material-ui/icons/Check";
import LockIcon from "@material-ui/icons/Lock";
import { useTranslation } from "react-i18next";
import { url } from "inspector";
import PrimaryButton from "../Buttons/PrimaryButton";

const DemoCourseLessonItem = ({
  item,
  purchaseUrl
}: {
  purchaseUrl: string;
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
    <Paper className={`lesson restore-${item.id}`}>
      <div className={"blocked-lesson-image"}>
        <img
          src={
            item.href.cover_image_url
              ? item.href.cover_image_url
              : "https://api.naszepierwszedziecko.pl//uploads/images/400_266__626e2585dd4b4adcd02edd6cdc78aef0029ac84e.jpeg"
          }
          alt=""
        />
        <div className="button-disabled-lesson">
          <LockIcon />
          <a href={purchaseUrl} target={"_blank"}>
            <PrimaryButton
              fullWidth={false}
              variant={"contained"}
              text={"Odblokuj dostęp teraz"}
            />
          </a>
        </div>
      </div>
      <div className={"details"}>
        <div>
          <Typography variant={"body1"}>{item.title}</Typography>
          <Typography variant={"caption"}>
            {t("Lesson duration")}:{" "}
            <span>
              {parseDurationInMinutesToString(item.duration_in_minutes, {
                twoDigits: false
              })}
            </span>{" "}
            {t("minutes")}
          </Typography>
        </div>
        {item.completed && <CheckIcon color={"primary"} />}
      </div>
    </Paper>
  );
};

export default DemoCourseLessonItem;
