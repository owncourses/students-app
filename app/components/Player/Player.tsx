import * as React from "react";
import VimeoPlayer from "../VimeoPlayer";
import CloudflarePlayer from "../CloudflarePlayer";
import EmbedPlayer from "../EmbedPlayer";
import BookmarkList from "../BookmarkList";

class Player extends React.Component<
  { embedCode: string; embedType: string; bookmarkProps: any },
  any
> {
  playerInstance: any;
  constructor(props) {
    super(props);

    this.playerInstance = null;
  }

  setPlayerInstance = player => {
    this.playerInstance = player;
  };

  getPlayer = type => {
    const { embedCode } = this.props;
    switch (type) {
      case PlayersType.VIMEO: {
        return {
          component: (
            <VimeoPlayer
              vimeoUrl={embedCode}
              setPlayer={this.setPlayerInstance}
            />
          ),
          getCurrentTime: () => this.playerInstance.getCurrentTime(),
          setTime: bookmarkTime =>
            this.playerInstance.setCurrentTime(bookmarkTime),
          play: () => this.playerInstance.play(),
          pause: () => this.playerInstance.pause()
        };
      }
      case PlayersType.CLOUDFLARE: {
        return {
          component: (
            <CloudflarePlayer
              videoUrl={embedCode}
              setPlayer={this.setPlayerInstance}
            />
          ),
          getCurrentTime: () => this.playerInstance.currentTime,
          setTime: bookmarkTime =>
            (this.playerInstance.currentTime = bookmarkTime),
          play: () => this.playerInstance.play(),
          pause: () => this.playerInstance.pause()
        };
      }
      default: {
        return {
          component: <EmbedPlayer embedCode={embedCode} />
        };
      }
    }
  };

  handleBookmarkSet = async bookmarkTitle => {
    await this.getPlayer(this.props.embedType).pause();
    const bookmarkTime = await this.getPlayer(
      this.props.embedType
    ).getCurrentTime();
    this.props.bookmarkProps.bookmarkSet({ bookmarkTitle, bookmarkTime });
  };

  handleBookmarkClick = bookmarkTime => {
    this.getPlayer(this.props.embedType).setTime(bookmarkTime);
    this.getPlayer(this.props.embedType).play();
  };

  render() {
    const {
      embedType,
      bookmarkProps: { bookmarkProps, bookmarkDelete, parsedDuration }
    } = this.props;
    const player = this.getPlayer(embedType).component;
    return (
      <>
        {player}
        {supportedPlayers.includes(embedType) && (
          <BookmarkList
            pausePlayer={this.getPlayer(embedType).pause}
            bookmarkProps={bookmarkProps}
            bookmarkSet={this.handleBookmarkSet}
            bookmarkDelete={bookmarkDelete}
            bookmarkClick={this.handleBookmarkClick}
            parsedDuration={parsedDuration}
          />
        )}
      </>
    );
  }
}

export default Player;

export enum PlayersType {
  VIMEO = "vimeo",
  CLOUDFLARE = "cloudflare"
}

const supportedPlayers: string[] = [PlayersType.CLOUDFLARE, PlayersType.VIMEO];
