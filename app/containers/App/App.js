/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";

import HomePage from "containers/HomePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import Auth from "containers/Auth/Loadable";
import Header from "components/Header";
import Footer from "components/Footer";
import "./style.scss";

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - Courses Dashboard"
      defaultTitle="Courses Dashboard"
    >
      <meta name="description" content="Courses Dashboard" />
    </Helmet>
    <Header />
    <div className={"main"}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Auth} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
