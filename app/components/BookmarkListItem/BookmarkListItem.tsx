import * as React from "react";
import { BookmarkViewModel } from "../../containers/SingleLesson/interfaces";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import "./style.scss";
import { parseDurationInSecondsToString } from "../../utils/durationUtils";
import DeleteIcon from "@material-ui/icons/Delete";
import config from "../../../config/config";

const BookmarkListItem = ({
  item,
  onClick,
  onDeleteClick
}: {
  item?: BookmarkViewModel;
  onClick: () => void;
  onDeleteClick: () => void;
}) => {
  const deleteIconView = item.user ? (
    <DeleteIcon
      cursor={"pointer"}
      htmlColor={config.brand.colors.primary}
      onClick={onDeleteClick.bind(null, item.id)}
    />
  ) : (
    <span className={"empty-delete"} />
  );

  return (
    <div className={"bookmark-list-item"}>
      <ListItem button onClick={onClick.bind(null, item.time_in_seconds)}>
        <ListItemIcon>
          <span className={"time"}>
            {parseDurationInSecondsToString(item.time_in_seconds)}
          </span>
        </ListItemIcon>
        <ListItemText className={"title"} primary={item.title} />
      </ListItem>
      <ListItemIcon className={"delete-icon"}>{deleteIconView}</ListItemIcon>
    </div>
  );
};

export default BookmarkListItem;
