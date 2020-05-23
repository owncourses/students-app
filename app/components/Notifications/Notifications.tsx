import * as React from "react";
import {
  Tooltip,
  Popover,
  Typography,
  Divider,
  Box,
  ClickAwayListener
} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { useTranslation } from "react-i18next";
import { NotificationsInterface } from "../../containers/Auth/interfaces";
import "./style.scss";
import NotificationItem from "../NotificationItem";
import Notification from "../Notification";

const Notifications = ({
  notificationsProps: { notifications, toggleNotification }
}: {
  notificationsProps: {
    notifications: NotificationsInterface;
    toggleNotification: (id) => void;
  };
}) => {
  const { t } = useTranslation();
  if (!notifications) {
    return null;
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedNotification, setSelectedNotification] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const isBadgeVisible = notifications.unread > 0;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOnSingleNotification = id => {
    toggleNotification(id);
    const foundNotification = notifications.notifications.find(
      notification => notification.id === id
    );
    if (foundNotification) {
      setSelectedNotification(foundNotification);
    }
  };

  const resetSelectedNotification = () => {
    setSelectedNotification(null);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <Tooltip title={t("Notifications")} arrow>
          <Badge color="secondary" variant="dot" invisible={!isBadgeVisible}>
            <Icon>notifications</Icon>
          </Badge>
        </Tooltip>
      </IconButton>
      <ClickAwayListener onClickAway={resetSelectedNotification}>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <div className={"notifications-popover"}>
            {selectedNotification && (
              <IconButton
                className={"navigate-back"}
                color="inherit"
                aria-label="Back"
                size={"small"}
                onClick={resetSelectedNotification}
              >
                <Icon>navigate_before</Icon>
              </IconButton>
            )}
            <Typography variant={"subtitle1"} align={"center"}>
              {selectedNotification
                ? selectedNotification.title
                : t("Notifications")}
            </Typography>
            <Box mt={1} mb={1}>
              <Divider />
            </Box>
            {selectedNotification ? (
              <Notification
                key={selectedNotification.id}
                notification={selectedNotification}
              />
            ) : (
              <>
                {notifications.notifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    onClick={handleClickOnSingleNotification}
                    notification={notification}
                  />
                ))}
              </>
            )}
          </div>
        </Popover>
      </ClickAwayListener>
    </>
  );
};

export default Notifications;
