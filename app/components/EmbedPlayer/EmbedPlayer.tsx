import * as React from "react";
import "./style.scss";

const EmbedPlayer = ({ embedCode }: { embedCode: string }) => {
  return (
    <div
      className={"embed-code"}
      dangerouslySetInnerHTML={createEmbedCode(embedCode)}
    />
  );
};

export default EmbedPlayer;

export function createEmbedCode(embedCode: string): { __html: string } {
  return { __html: embedCode };
}
