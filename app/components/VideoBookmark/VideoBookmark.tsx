import * as React from "react";
import Bookmark from "@material-ui/icons/Bookmark";
import PrimaryButton from "../Buttons/PrimaryButton";
import "./style.scss";
import { useTranslation } from "react-i18next";

const VideoBookmark = ({
  onBookmarkClick
}: {
  onBookmarkClick: () => void;
}) => {
  const { t } = useTranslation();

  const buttonView = (
    <Bookmark className={"bookmark-icon"} onClick={onBookmarkClick} />
  );

  return (
    <div className={"video-bookmark"}>
      <PrimaryButton
        text={buttonView}
        variant={"outlined"}
        onClick={onBookmarkClick}
      />
    </div>
  );
};

export default VideoBookmark;
