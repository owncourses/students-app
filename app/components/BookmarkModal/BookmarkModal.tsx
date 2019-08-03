import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core";
import "./style.scss";
import { useTranslation } from "react-i18next";

const BookmarkModal = ({ open, onCloseModal, onSubmitModal }) => {
  const [title, setTitle] = React.useState("");
  const { t } = useTranslation();

  return (
    <Dialog
      fullWidth
      maxWidth={"xs"}
      open={open}
      onClose={onCloseModal}
      className={"bookmark-modal"}
      onExit={() => setTitle("")}
    >
      <DialogTitle>{t("Set your bookmark title")}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label={t("Bookmark title")}
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onCloseModal}>
          {t("Cancel")}
        </Button>
        <Button color="primary" onClick={onSubmitModal.bind(null, title)}>
          {t("Submit")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookmarkModal;
