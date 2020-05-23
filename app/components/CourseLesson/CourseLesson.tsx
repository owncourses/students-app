import * as React from "react";
import { Typography } from "@material-ui/core";
import "./style.scss";
import {
  Bookmark,
  BookmarkViewModel,
  LessonInterface
} from "../../containers/SingleLesson/interfaces";
import Jumbotron from "../Jumbotron";
import DoneIcon from "@material-ui/icons/Done";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import SuccessButton from "../Buttons/SuccessButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTranslation } from "react-i18next";
import List from "../List/List";
import Attachment from "../Attachment";
import VimeoPlayer from "../VimeoPlayer";
import EmbedPlayer from "../EmbedPlayer";
import { createEmbedCode } from "../EmbedPlayer/EmbedPlayer";
import LessonNavigation from "../LessonNavigation";
import CloudflarePlayer from "../CloudflarePlayer";
import BookmarkList from "../BookmarkList";
import { parseDurationInMinutesToString } from "../../utils/durationUtils";
import Player from "../Player/Player";

const CourseLesson = ({
  item: {
    title,
    position,
    description,
    embed_code,
    embed_type,
    duration_in_minutes,
    completed,
    pagination: { next_lesson_id, prev_lesson_id },
    module: {
      title: moduleTitle,
      course: { title: courseTitle }
    },
    attachments
  },
  onComplete,
  completeLoading,
  bookmarkSet,
  bookmarkProps,
  bookmarkDelete
}: {
  item: LessonInterface;
  onComplete: (isCompleted: boolean) => void;
  bookmarkSet: (bookmark: Bookmark) => void;
  bookmarkDelete: (bookmarkId: string) => void;
  completeLoading: boolean;
  bookmarkProps: {
    bookmarkLoading: boolean;
    bookmarkError: boolean | string;
    bookmarkList: BookmarkViewModel[] | null;
  };
}) => {
  const { t } = useTranslation();
  const doneIcon = completed ? (
    <DoneAllIcon className={"left-icon"} />
  ) : (
    <DoneIcon className={"left-icon"} />
  );

  const icon = completeLoading ? (
    <CircularProgress size={18} color={"inherit"} className={"left-icon"} />
  ) : (
    doneIcon
  );

  const completeButtonView = completed ? (
    <div>
      {icon}
      {t("Completed")}
    </div>
  ) : (
    <div>
      {icon}
      {t("Mark as completed")}
    </div>
  );

  const buttonVariant = completed ? "contained" : "outlined";

  const onCompleteButtonClick = () => {
    onComplete(!completed);
  };

  const attachmentsView = attachments.length > 0 && (
    <div className="attachments">
      <Typography variant={"h6"}>{t("Files to download")}:</Typography>

      <List component={Attachment} items={attachments} />
    </div>
  );

  const bookmarkListProps = {
    bookmarkProps,
    bookmarkSet,
    bookmarkDelete,
    parsedDuration: parseDurationInMinutesToString(duration_in_minutes, {
      twoDigits: false
    })
  };

  const playerView = (
    <Player
      embedCode={embed_code}
      embedType={embed_type}
      bookmarkProps={bookmarkListProps}
    />
  );

  return (
    <div className={"course-lesson"}>
      <Jumbotron
        title={`${t("Lesson")} ${position + 1}: ${title}`}
        description={moduleTitle}
      />

      <LessonNavigation
        nextLessonUrl={next_lesson_id}
        previousLessonUrl={prev_lesson_id}
      />

      {playerView}

      <div className={"complete-button"}>
        <SuccessButton
          onClick={onCompleteButtonClick}
          text={completeButtonView}
          disabled={completeLoading}
          variant={buttonVariant}
        />
      </div>

      <div className={"description"}>
        <Typography variant={"subtitle1"}>
          <div dangerouslySetInnerHTML={createEmbedCode(description)} />
        </Typography>
      </div>

      {attachmentsView}
    </div>
  );
};

export default CourseLesson;
