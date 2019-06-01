import * as React from "react";
import { AuthorInterface } from "../../containers/Auth/interfaces";
import { Avatar, Typography } from "@material-ui/core";
import "./style.scss";

const Author = ({ author }: { author: AuthorInterface }) => {
  return (
    <div className={"author"}>
      <Avatar
        alt={author.name}
        src={author.href.picture}
        classes={{ root: "author-avatar" }}
      />
      <div className={"description"}>
        <Typography variant={"h6"}>{author.name}</Typography>
        <Typography variant={"body2"}>{author.bio}</Typography>
      </div>
    </div>
  );
};

export default Author;
