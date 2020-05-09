import * as React from "react";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { AuthFieldsInterface } from "../../containers/Auth/interfaces";
import Box from "@material-ui/core/Box";

interface LoginProps {
  fields: AuthFieldsInterface;
  label: string;
  buttonLabel: string;
  isLoading: boolean;
  error: boolean | string;
  subtitle?: string;
  onUserInput: (fieldName: string, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Fields = ({
  label,
  buttonLabel,
  fields,
  isLoading,
  error,
  onUserInput,
  onSubmit,
  subtitle
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

      case "confirmPassword": {
        return renderTextField(field, props);
      }
    }
  });

  const errorView = error && (
    <Box my={"0.5rem"} textAlign={"center"}>
      <Typography color={"error"}>{t(String(error))}</Typography>
    </Box>
  );
  const subtitleView = subtitle && (
    <Typography variant={"subtitle2"}>{subtitle}</Typography>
  );

  return (
    <Paper elevation={1} className={"login-container"}>
      <Typography variant={"h6"}>{label}</Typography>
      {subtitleView}
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
          {buttonLabel}
        </Button>
      </form>
    </Paper>
  );
};

export default Fields;

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
      type={field.type !== "login" ? "password" : "email"}
      fullWidth
    />
  );
}
