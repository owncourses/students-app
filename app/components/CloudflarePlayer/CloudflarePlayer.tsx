import * as React from "react";
import "./style.scss";

class CloudflarePlayer extends React.Component<any, any> {
  componentDidMount(): void {
    const script = document.createElement("script");

    script.src = `https://embed.cloudflarestream.com/embed/r4xu.fla9.latest.js?video=${
      this.props.videoUrl
    }`;
    script["data-cfasync"] = true;

    document.body.appendChild(script);
    const stream = document.getElementsByTagName("stream")[0];
    this.props.setPlayer(stream);
  }

  render() {
    return (
      <div className={"embed-code"}>
        // @ts-ignore
        <stream
          is="stream"
          currentTime
          src={this.props.videoUrl}
          controls
          preload
        />
      </div>
    );
  }
}

export default CloudflarePlayer;
