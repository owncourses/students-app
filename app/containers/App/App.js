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
import NotFoundPage from "containers/NotFoundPage/Loadable";
import Auth from "containers/Auth/Loadable";
import SingleCourse from "containers/SingleCourse/Loadable";
import Header from "components/Header";
import Footer from "components/Footer";
import "./style.scss";
import { getToken } from "../../utils/userUtils";
import projectConfig from "../../../config/projectConfig";

class App extends React.Component {
  componentDidMount() {
    const token = getToken();
    const { getUser } = this.props;
    if (token) {
      getUser();
    }
  }

  render() {
    const {
      header: { text: headerTitle },
      footer: { text: footerTitle }
    } = projectConfig;

    return (
      <div className="app-wrapper">
        <Helmet
          titleTemplate="%s - Courses Dashboard"
          defaultTitle="Courses Dashboard"
        >
          <meta name="description" content="Courses Dashboard" />
        </Helmet>
        <Header title={headerTitle} />
        <div className={"main"}>
          <Switch>
            <Route exact path="/login" component={Auth} />
            <PrivateRoute
              path="/:courseId"
              component={SingleCourse}
              user={user}
            />
            <Route exact path="/" component={HomePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
        <Footer title={footerTitle} />
      </div>
    );
  }
}

export default App;

function PrivateRoute({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
