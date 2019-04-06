import * as React from "react";
import { Helmet } from "react-helmet";
import "./style.scss";
import i18n from "i18next";
import { Redirect } from "react-router-dom";
import List from "../../components/List";
import CourseItem from "../../components/CourseItem";
import { UserInterface } from "../Auth/interfaces";
import { Typography } from "@material-ui/core";

interface HomePageProps {
  user: UserInterface;
}

export default class HomePage extends React.PureComponent<HomePageProps> {
  render() {
    const { user } = this.props;

    if (!user) {
      return <Redirect to={"/login"} />;
    }

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Courses Dashboard" />
        </Helmet>
        <div className="home-page">
          <section>
            <Typography variant={"headline"}>{i18n.t("My courses")}</Typography>
            <List component={CourseItem} items={user.courses} />
          </section>
        </div>
      </article>
    );
  }
}
