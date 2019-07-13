import * as React from "react";
import { AuthorInterface } from "../../containers/Auth/interfaces";
import { Avatar, Typography } from "@material-ui/core";
import "./style.scss";

const Author = ({
  author: {
    name,
    bio,
    href: { picture }
  }
}: {
  author: AuthorInterface;
}) => {
  const avatarView = picture && (
    <Avatar alt={name} src={picture} classes={{ root: "author-avatar" }} />
  );

  return (
    <div className={"author"}>
      {avatarView}
      <div className={"description"}>
        <Typography variant={"h6"}>{name}</Typography>
        <Typography variant={"body2"}>{bio}</Typography>
      </div>
    </div>
  );
};

export default Author;
