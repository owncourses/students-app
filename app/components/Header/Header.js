import React from "react";
import { Link } from "react-router-dom";
import Banner from "./images/banner.jpg";
import "./style.scss";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <a href="https://twitter.com/flexdinesh">
        <img src={Banner} alt="react-redux-boilerplate - Logo" />
      </a>
      <div className="nav-bar">
        <Link className="router-link" to="/">
          {t("Welcome to react")}
        </Link>
        <Link className="router-link" to="/features">
          Features
        </Link>
      </div>
    </div>
  );
};

export default Header;
