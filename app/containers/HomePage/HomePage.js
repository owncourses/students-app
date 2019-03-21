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
import List from "../../components/List";
import CourseItem from "../../components/CourseItem";

export default class HomePage extends React.PureComponent {
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
