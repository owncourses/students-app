import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";
import { useTranslation } from "react-i18next";

const Error = ({ message }) => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <div className={"error"}>
      <span>{t(message)}</span>
      <Link to={history.goBack}>{t("Back to previous page")}</Link>
    </div>
  );
};

export default Error;
