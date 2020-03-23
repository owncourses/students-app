import * as React from "react";
import { BookmarkViewModel } from "../../containers/SingleLesson/interfaces";
import BookmarkListItem from "../BookmarkListItem/BookmarkListItem";
import "./style.scss";
import List from "../List";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import VideoDuration from "../VideoDuration";
import VideoBookmark from "../VideoBookmark";
import ConfirmationModal from "../ConfirmationModal";
import i18n from "i18next";
import { useState } from "react";
import BookmarkModal from "../BookmarkModal";

const BookmarkList = ({
  bookmarkProps: { bookmarkList, bookmarkError, bookmarkLoading },
  bookmarkSet,
  bookmarkDelete,
  bookmarkClick,
  pausePlayer,
  parsedDuration
}: {
  bookmarkProps: {
    bookmarkLoading: boolean;
    bookmarkError: boolean | string;
    bookmarkList: BookmarkViewModel[] | null;
  };
  pausePlayer: () => void;
  bookmarkSet: (bookmarkTitle) => void;
  bookmarkClick: (time_in_seconds: number) => void;
  bookmarkDelete: (id: string) => void;
  parsedDuration: string;
}) => {
  const { t } = useTranslation();
  const [isConfirmationModalOpen, setConfirmationModalState] = useState(false);
  const [isBookmarkModalOpen, setBookmarkModalState] = useState(false);
  const [currentBookmarkToDelete, setCurrentBookmarkToDelete] = useState(null);

  if (bookmarkLoading) {
    return <div>{i18n.t("Loading")}...</div>;
  }

  if (bookmarkError) {
    return <div>{bookmarkError}</div>;
  }

  return (
    <React.Fragment>
      <div className={"meta"}>
        <VideoDuration duration={parsedDuration} />
        <VideoBookmark
          onBookmarkClick={() => {
            pausePlayer();
            setBookmarkModalState(true);
          }}
        />
      </div>
      <div className={"bookmark-list"}>
        <Typography variant={"h6"}>{t("Bookmarks")}</Typography>
        <List
          component={BookmarkListItem}
          items={bookmarkList}
          {...{
            onClick: bookmarkClick,
            onDeleteClick: id => {
              setCurrentBookmarkToDelete(id);
              setConfirmationModalState(true);
            }
          }}
        />
      </div>
      <ConfirmationModal
        open={isConfirmationModalOpen}
        handleClose={() => setConfirmationModalState(false)}
        handleConfirm={() => {
          setConfirmationModalState(false);
          bookmarkDelete(currentBookmarkToDelete);
        }}
        title={i18n.t("Are you sure you want to delete")}
      />
      <BookmarkModal
        open={isBookmarkModalOpen}
        onCloseModal={() => setBookmarkModalState(false)}
        onSubmitModal={bookmarkTitle => {
          setBookmarkModalState(false);
          bookmarkSet(bookmarkTitle);
        }}
      />
    </React.Fragment>
  );
};

export default BookmarkList;
