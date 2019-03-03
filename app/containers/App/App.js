/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "containers/HomePage/Loadable";
import Dashboard from "containers/Dashboard/Dashboard";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import Auth from "containers/Auth/Loadable";
import Header from "components/Header";
import Footer from "components/Footer";
import "./style.scss";

class App extends React.Component {
  componentDidMount() {
    const { user, getUser } = this.props;
    if (user) {
      getUser();
    }
  }

  render() {
    const { user } = this.props;

    return (
      <div className="app-wrapper">
        <Helmet
          titleTemplate="%s - Courses Dashboard"
          defaultTitle="Courses Dashboard"
        >
          <meta name="description" content="Courses Dashboard" />
        </Helmet>
        <Header user={user} />
        <div className={"main"}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Auth} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
