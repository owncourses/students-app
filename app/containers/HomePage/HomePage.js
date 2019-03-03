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

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    const { user } = this.props;

    if (user) {
      return <Redirect to={"/dashboard"} />;
    }
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Courses Dashboard" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <IssueIcon className={"ELO"} />
            <h2>{i18n.t("Welcome to react")}</h2>
            <p>Best courses dashboard ever</p>
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
