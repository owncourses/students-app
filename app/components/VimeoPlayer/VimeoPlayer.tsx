import * as React from "react";
import Vimeo from "@vimeo/player";
import "./style.scss";
import i18n from "i18next";
import VideoDuration from "../VideoDuration";
import { parseDurationInMinutesToString } from "../../utils/durationUtils";
import VideoBookmark from "../VideoBookmark";
import BookmarkList from "../BookmarkList";
import { BookmarkViewModel } from "../../containers/SingleLesson/interfaces";
import ConfirmationModal from "../ConfirmationModal";

interface VimeoPlayerProps {
  vimeoUrl: string;
  duration: number;
  setBookmark: (bookmarkTime: number) => void;
  deleteBookmark: (bookmarkId: string) => void;
  bookmarkProps: {
    bookmarkLoading: boolean;
    bookmarkError: boolean | string;
    bookmarkList: BookmarkViewModel[] | null;
  };
}

interface VimeoPlayerState {
  isConfirmModalOpen: boolean;
  bookmarkId: string | null;
}

class VimeoPlayer extends React.Component<VimeoPlayerProps, VimeoPlayerState> {
  vimeoPlayer: any;

  constructor(props) {
    super(props);

    this.state = {
      isConfirmModalOpen: false,
      bookmarkId: null
    };
  }

  componentDidMount(): void {
    const options = {
      url: this.props.vimeoUrl
    };
    this.vimeoPlayer = new Vimeo("vimeo-player", options);
  }

  handleSetBookmarkClick = async () => {
    try {
      const paused = await this.vimeoPlayer.getPaused();

      if (!paused) {
        await this.vimeoPlayer.pause();
      }

      const bookmarkTime = await this.vimeoPlayer.getCurrentTime();

      this.props.setBookmark(bookmarkTime);
    } catch (e) {
      console.error(e);
    }
  };

  handleBookmarkClick = async time_in_seconds => {
    try {
      const paused = await this.vimeoPlayer.getPaused();
      if (paused) {
        await this.vimeoPlayer.play();
      }
      await this.vimeoPlayer.setCurrentTime(time_in_seconds);
    } catch (e) {
      console.error(e);
    }
  };

  getBookmarkListView = ({ bookmarkList, bookmarkError, bookmarkLoading }) => {
    if (bookmarkLoading) {
      return <div>{i18n.t("Loading")}...</div>;
    }

    if (bookmarkError) {
      return <div>{bookmarkError}</div>;
    }

    return (
      <BookmarkList
        items={bookmarkList}
        onBookmarkClick={this.handleBookmarkClick}
        onDeleteClick={(bookmarkId: string) => {
          this.setState({
            bookmarkId
          });
          this.openConfirmationModal();
        }}
      />
    );
  };

  closeConfirmationModal = () => {
    this.setState({
      isConfirmModalOpen: false
    });
  };

  openConfirmationModal = () => {
    this.setState({
      isConfirmModalOpen: true
    });
  };

  handleConfirmConfirmationModal = () => {
    this.props.deleteBookmark(this.state.bookmarkId);
    this.closeConfirmationModal();
  };

  render() {
    const { duration, bookmarkProps } = this.props;
    const { isConfirmModalOpen } = this.state;
    const parsedDuration = parseDurationInMinutesToString(duration);
    const bookmarksView = this.getBookmarkListView(bookmarkProps);

    return (
      <React.Fragment>
        <div>
          <div id={"vimeo-player"} className={"embed-code"} />
          <div className={"meta"}>
            <VideoDuration duration={parsedDuration} />
            <VideoBookmark onBookmarkClick={this.handleSetBookmarkClick} />
          </div>
          {bookmarksView}
        </div>
        <ConfirmationModal
          open={isConfirmModalOpen}
          handleClose={this.closeConfirmationModal}
          handleConfirm={this.handleConfirmConfirmationModal}
          title={i18n.t("Are you sure you want to delete")}
        />
      </React.Fragment>
    );
  }
}

export default VimeoPlayer;
