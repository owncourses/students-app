import * as React from "react";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const successTheme = createMuiTheme({
  palette: {
    primary: { main: "#91BB69" }
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: "#FFFFFF"
      }
    }
  }
});

const SuccessButton = ({
  text,
  variant
}: {
  text: string;
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
      <Button fullWidth color={"primary"} variant={variant}>
        {text}
      </Button>
    </MuiThemeProvider>
  );
};

export default SuccessButton;
