import * as React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AttachmentIcon from "@material-ui/icons/Attachment";
import { AttachmentInterface } from "../../containers/SingleLesson/interfaces";

const Attachment = ({ item }: { item: AttachmentInterface }) => {
  return (
    <ListItem button component={"a"} href={item.href.download}>
      <ListItemIcon>
        <AttachmentIcon />
      </ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItem>
  );
};

export default Attachment;
