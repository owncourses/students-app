import * as React from "react";
import { NotificationInterface } from "../../containers/Auth/interfaces";
import { Box, Typography } from "@material-ui/core";

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
    </Box>
  );
};

export default Notification;
