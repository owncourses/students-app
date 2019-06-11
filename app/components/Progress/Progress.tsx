import * as React from "react";
import { LinearProgress } from "@material-ui/core";
import "./style.scss";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

const Progress = ({
  value,
  type
}: {
  value: number;
  type: "module" | "course";
}) => {
  const { t } = useTranslation();

  return (
    <div className={"progress-wrapper"}>
      <LinearProgress
        variant={"determinate"}
        value={value}
        color={"primary"}
        classes={{
          root: "progress-bar"
        }}
      />
      <Typography variant={"body2"} className={"progress-value"}>
        {type === "module"
          ? t("Finished of module", { value })
          : t("Finished of course", { value })}
      </Typography>
    </div>
  );
};

export default Progress;
