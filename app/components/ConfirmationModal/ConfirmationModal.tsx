import * as React from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const ConfirmationModal = ({ open, handleClose, handleConfirm, title }) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} fullWidth maxWidth={"xs"} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button color="primary" onClick={handleClose}>
          {t("Cancel")}
        </Button>
        <Button color="primary" onClick={handleConfirm}>
          {t("Submit")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
