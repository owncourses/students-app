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
import SwipeableViews from "react-swipeable-views";
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  const [selectedNotification, setSelectedNotification] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOnSingleNotification = id => {
    const foundNotification = notifications.notifications.find(
      notification => notification.id === id
    );
    if (foundNotification) {
      if (!foundNotification.read) {
        toggleNotification(id);
      }
      setSelectedNotification(foundNotification);
      setIndex(1);
    }
  };

  const resetSelectedNotification = () => {
    setSelectedNotification(null);
    setIndex(0);
  };

  if (!notifications) {
    return null;
  }

  const isBadgeVisible = notifications.unread > 0;

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
            <SwipeableViews index={index} disabled enableMouseEvents>
              <div className={`tab-${index}`}>
                <Typography variant={"subtitle1"} align={"center"}>
                  {t("Notifications")}
                </Typography>
                <Box mt={1} mb={1}>
                  <Divider />
                </Box>
                {notifications.notifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    onClick={handleClickOnSingleNotification}
                    notification={notification}
                  />
                ))}
              </div>
              <div className={`tab-${index}`}>
                {selectedNotification && (
                  <>
                    <IconButton
                      className={"navigate-back"}
                      color="inherit"
                      aria-label="Back"
                      size={"small"}
                      onClick={resetSelectedNotification}
                    >
                      <Icon>navigate_before</Icon>
                    </IconButton>
                    <Typography variant={"subtitle1"} align={"center"}>
                      {selectedNotification.title}
                    </Typography>
                    <Box mt={1} mb={1}>
                      <Divider />
                    </Box>
                    <Notification
                      key={selectedNotification.id}
                      notification={selectedNotification}
                    />
                  </>
                )}
              </div>
            </SwipeableViews>
          </div>
        </Popover>
      </ClickAwayListener>
    </>
  );
};

export default Notifications;
