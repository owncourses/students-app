import * as React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { useTranslation } from "react-i18next";

const Error = ({ message }) => {
  const { t } = useTranslation();
  return (
    <div className={"error"}>
      <span>{message}</span>
      <Link to={"/"}>{t("Back to home page")}</Link>
    </div>
  );
};

export default Error;
