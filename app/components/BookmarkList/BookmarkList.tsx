import * as React from "react";
import { BookmarkViewModel } from "../../containers/SingleLesson/interfaces";
import BookmarkListItem from "../BookmarkListItem/BookmarkListItem";
import "./style.scss";
import List from "../List";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const BookmarkList = ({
  items,
  onBookmarkClick,
  onDeleteClick
}: {
  items: BookmarkViewModel[];
  onBookmarkClick: (time_in_seconds: number) => void;
  onDeleteClick: (id: string) => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className={"bookmark-list"}>
      <Typography variant={"h6"}>{t("Bookmarks")}</Typography>
      <List
        component={BookmarkListItem}
        items={items}
        {...{ onClick: onBookmarkClick, onDeleteClick }}
      />
    </div>
  );
};

export default BookmarkList;
