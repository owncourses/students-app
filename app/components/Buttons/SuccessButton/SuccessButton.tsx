import * as React from "react";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const successTheme = createMuiTheme({
  palette: {
    primary: { main: "#91BB69" }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: "#FFFFFF"
      }
    }
  }
});

const SuccessButton = ({
  onClick,
  text,
  variant,
  disabled
}: {
  text: any;
  disabled?: boolean;
  onClick?: () => any;
  variant?: "text" | "contained" | "outlined";
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

export default SuccessButton;
