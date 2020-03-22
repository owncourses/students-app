import * as React from "react";
import Vimeo from "@vimeo/player";
import "./style.scss";

interface VimeoPlayerProps {
  vimeoUrl: string | number;
  setPlayer: (player) => void;
}

class VimeoPlayer extends React.PureComponent<VimeoPlayerProps, any> {
  vimeoPlayer: any;

  componentDidMount(): void {
    const options = {
      url: this.props.vimeoUrl
    };
    this.vimeoPlayer = new Vimeo("vimeo-player", options);
    this.props.setPlayer(this.vimeoPlayer);
  }

  render() {
    return (
      <div>
        <div id={"vimeo-player"} className={"embed-code"} />
      </div>
    );
  }
}

export default VimeoPlayer;
