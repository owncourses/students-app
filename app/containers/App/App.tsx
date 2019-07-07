/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingIndicator from "../../components/LoadingIndicator";
import config from "../../../config/config";
import HomePage from "../../containers/HomePage/Loadable";
import NotFoundPage from "../../containers/NotFoundPage/Loadable";
import Auth from "../../containers/Auth/Loadable";
import SingleCourse from "../../containers/SingleCourse/Loadable";
import SingleLesson from "../../containers/SingleLesson/Loadable";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.scss";
import { getToken } from "../../utils/userUtils";
import { isTokenNotExpired } from "../Auth/auth-logic";
import { History } from "history";

interface AppProps {
  getUser: () => void;
  logoutAction: () => void;
  history: History;
  loading: boolean;
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    const token = getToken();
    const isTokenValid = isTokenNotExpired(token);
    const { getUser } = this.props;
    if (token && isTokenValid) {
      getUser();
    }
  }

  handleLogout = () => {
    this.props.history.push("/login");
    this.props.logoutAction();
  };

  render() {
    const headerTitle = config.brand.headerText;
    const footerTitle = config.brand.footerText;

    if (this.props.loading) {
      return <LoadingIndicator />;
    }

    return (
      <div className="app-wrapper">
        <Helmet>
          <title>{headerTitle}</title>
          <meta name="description" content="Courses Dashboard" />
        </Helmet>
        <Header title={headerTitle} onLogout={this.handleLogout} />
        <div className={"main"}>
          <Switch>
            <Route exact path="/login" component={Auth} />
            <PrivateRoute
              path={`/:courseId/lesson/:lessonId`}
              component={SingleLesson}
            />
            <PrivateRoute path="/:courseId" component={SingleCourse} />
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
        <Footer title={footerTitle} />
      </div>
    );
  }
}

export default App;

function PrivateRoute({ component: Component, ...rest }) {
  const token = getToken();
  const isTokenValid = isTokenNotExpired(token);
  return (
    <Route
      {...rest}
      render={props =>
        isTokenValid ? (
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
