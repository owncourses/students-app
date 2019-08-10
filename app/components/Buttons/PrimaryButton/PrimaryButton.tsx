import * as React from "react";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const successTheme = createMuiTheme({
  palette: {
    primary: { main: "#D71461" }
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: "#FFFFFF"
      }
    }
  }
});

const PrimaryButton = ({
  onClick,
  text,
  variant,
  disabled
}: {
  text: any;
  disabled?: boolean;
  onClick?: () => any;
  variant?:
    | "text"
    | "flat"
    | "outlined"
    | "contained"
    | "raised"
    | "fab"
    | "extendedFab";
}) => {
  return (
    <MuiThemeProvider theme={successTheme}>
      <Button
        fullWidth
        color={"primary"}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </Button>
    </MuiThemeProvider>
  );
};

export default PrimaryButton;
