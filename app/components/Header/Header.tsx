import * as React from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { Link, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { History } from "history";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@material-ui/core";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { isInHomeScreen, isInLoginScreen } from "../../utils/urlService";

const Header = ({
  title,
  onLogout,
  history
}: {
  title: string;
  onLogout: () => void;
  history: History;
}) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleMenuClick() {
    handleClose();
    onLogout();
  }

  return (
    <header className="header">
      <AppBar position="static">
        <Toolbar className={"toolbar"}>
          <div className={"back-icon"}>
            {!isInHomeScreen(history.location.pathname) &&
              !isInLoginScreen(history.location.pathname) && (
                <IconButton
                  className={"navigate_before"}
                  color="inherit"
                  aria-label="Back"
                  onClick={history.goBack}
                >
                  <Icon>navigate_before</Icon>
                </IconButton>
              )}
          </div>
          <Typography variant={"subtitle1"} className={"grow"}>
            <Link to={"/"} color={"inherit"}>
              <Button color="secondary">{title}</Button>
            </Link>
          </Typography>
          <div className={"menu-icon"}>
            {!isInLoginScreen(history.location.pathname) && (
              <IconButton
                className={"menu"}
                color="inherit"
                aria-label="Menu"
                onClick={handleClick}
              >
                <Icon>person</Icon>
              </IconButton>
            )}
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleMenuClick}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={t("Logout")} />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </header>
  );
};
// @ts-ignore
export default withRouter(Header);
