/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "./style.scss";
import { IssueIcon } from "components/Icons";
import i18n from "i18next";
import { Redirect } from "react-router-dom";
import List from "../../components/List/List";
import CourseItem from "../../components/CourseItem";

export default class HomePage extends React.PureComponent {
  render() {
    const { user } = this.props;

    if (!user) {
      return <Redirect to={"/login"} />;
    }

    user.courses = [
      {
        id: 0,
        title: "Szkoła rodzenia",
        description: "Description of course 0",
        image: {
          url:
            "https://naszepierwszedziecko.pl/media/800_533__520c3ca5881dd7fce789ee4ec14c34f01d76f319.jpeg"
        }
      },
      {
        id: 1,
        title: "Karmienie noworodka",
        description: "Description of course 1",
        image: {
          url:
            "https://naszepierwszedziecko.pl/media/800_533__b2e38fe72aa62a9830ab88f34d7f0f656bc20a27.jpeg"
        }
      }
    ];

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Courses Dashboard" />
        </Helmet>
        <div className="home-page">
          <section>
            <h2>{i18n.t("My courses")}:</h2>
            <List component={CourseItem} items={user.courses} />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string
};
