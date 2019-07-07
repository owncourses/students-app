import * as React from "react";
import "./style.scss";
import i18n from "i18next";
import List from "../../components/List";
import CourseItem from "../../components/CourseItem";
import { UserInterface } from "../Auth/interfaces";
import { Divider, Typography } from "@material-ui/core";

interface HomePageProps {
  user: UserInterface;
}

export default class HomePage extends React.PureComponent<HomePageProps> {
  render() {
    const { user } = this.props;

    return (
      <article>
        <div className="home-page">
          <section>
            <Typography variant={"h5"}>{i18n.t("My courses")}</Typography>
            <Divider />
            <List component={CourseItem} items={user.courses} />
          </section>
        </div>
      </article>
    );
  }
}
