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

  getPlayers = type => {
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
    await this.getPlayers(this.props.embedType).pause();
    const bookmarkTime = await this.getPlayers(
      this.props.embedType
    ).getCurrentTime();
    console.log(bookmarkTime);
    this.props.bookmarkProps.bookmarkSet({ bookmarkTitle, bookmarkTime });
  };

  handleBookmarkClick = bookmarkTime => {
    this.getPlayers(this.props.embedType).setTime(bookmarkTime);
    this.getPlayers(this.props.embedType).play();
  };

  render() {
    const {
      embedType,
      bookmarkProps: { bookmarkProps, bookmarkDelete, parsedDuration }
    } = this.props;
    const player = this.getPlayers(embedType).component;
    return (
      <>
        {player}
        {supportedPlayers.includes(embedType) && (
          <BookmarkList
            pausePlayer={this.getPlayers(embedType).pause}
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
