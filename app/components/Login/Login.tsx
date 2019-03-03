import * as React from "react";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { AuthFieldsInterface } from "../../containers/Auth/interfaces";

interface LoginProps {
  fields: AuthFieldsInterface;
  isLoading: boolean;
  error: boolean | string;
  onUserInput: (fieldName: string, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Login = ({
  fields,
  isLoading,
  error,
  onUserInput,
  onSubmit
}: LoginProps) => {
  const { t } = useTranslation();

  const fieldsView = fields.map(field => {
    const props = { onUserInput, isLoading };
    switch (field.type) {
      case "login": {
        return renderTextField(field, props);
      }
      case "password": {
        return renderTextField(field, props);
      }
    }
  });

  const errorView = error && <Typography color={"error"}>{error}</Typography>;

  return (
    <Paper elevation={1} className={"login-container"}>
      <Typography variant={"h6"}>{t("Sign in to your account!")}</Typography>
      <form onSubmit={onSubmit}>
        {fieldsView}
        {errorView}
        <Button
          variant="contained"
          color="primary"
          disabled={isLoading}
          type={"submit"}
          fullWidth
          className={"login-button"}
        >
          {t("Sign in")}
        </Button>
      </form>
    </Paper>
  );
};

export default Login;

function renderTextField(field, props) {
  return (
    <TextField
      key={field.type}
      label={field.label}
      value={field.value}
      disabled={props.isLoading}
      margin="normal"
      variant="outlined"
      onChange={e => props.onUserInput(field.type, e.target.value)}
      type={field.type === "password" ? field.type : ""}
      fullWidth
    />
  );
}
