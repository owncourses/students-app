import * as React from "react";
import { NotificationInterface } from "../../containers/Auth/interfaces";
import { Box, Chip, Typography } from "@material-ui/core";
import "./style.scss";
import { useTranslation } from "react-i18next";

const NotificationItem = ({
  notification,
  onClick
}: {
  notification: NotificationInterface;
  onClick: (id: string) => void;
}) => {
  const { t } = useTranslation();
  return (
    <Box
      mb={2}
      className={"notification-item"}
      onClick={() => onClick(notification.id)}
    >
      <Chip
        className={"notification-chip"}
        size={"small"}
        color={"primary"}
        style={{
          backgroundColor: notification.label === "new" ? "#91BB69" : ""
        }}
        label={t(notification.label)}
      />
      <Typography variant={"subtitle2"} component={"span"}>
        {notification.title}
      </Typography>
      <Typography variant={"body2"} color={"textSecondary"}>
        {notification.text.slice(0, 40)}
        {notification.text.length > 40 ? "..." : ""}
      </Typography>
    </Box>
  );
};

export default NotificationItem;
