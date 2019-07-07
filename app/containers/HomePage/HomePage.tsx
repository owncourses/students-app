import * as React from "react";
import "./style.scss";
import i18n from "i18next";
import List from "../../components/List";
import CourseItem from "../../components/CourseItem";
import { UserInterface } from "../Auth/interfaces";
import { Divider, Typography } from "@material-ui/core";
import Jumbotron from "../../components/Jumbotron";

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
            <Jumbotron title={i18n.t("My courses")} />
            <List component={CourseItem} items={user.courses} />
          </section>
        </div>
      </article>
    );
  }
}
