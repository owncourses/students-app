import * as React from "react";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const successTheme = createMuiTheme({
  palette: {
    primary: { main: "#D71461" }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: "#FFFFFF"
      }
    }
  }
});

const PrimaryButton = ({
  onClick,
  text,
  variant,
  disabled,
  fullWidth
}: {
  text: any;
  disabled?: boolean;
  onClick?: () => any;
  variant?: "text" | "contained" | "outlined";
  fullWidth?: boolean;
}) => {
  return (
    <MuiThemeProvider theme={successTheme}>
      <Button
        fullWidth={fullWidth}
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
