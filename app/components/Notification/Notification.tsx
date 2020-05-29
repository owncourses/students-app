import * as React from "react";
import { NotificationInterface } from "../../containers/Auth/interfaces";
import { Box, Typography, Link } from "@material-ui/core";
import "./style.scss";

const Notification = ({
  notification
}: {
  notification: NotificationInterface;
}) => {
  return (
    <Box>
      <Typography variant={"body2"} color={"textSecondary"}>
        {notification.text}
      </Typography>
      {notification.url && notification.url_title && (
        <Link className={"notification-link"} href={notification.url}>
          {notification.url_title}
        </Link>
      )}
    </Box>
  );
};

export default Notification;
