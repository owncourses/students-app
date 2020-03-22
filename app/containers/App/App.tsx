import * as React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";
import { History } from "history";
import HomePage from "../HomePage/Loadable";
import NotFoundPage from "../NotFoundPage/Loadable";
import Auth from "../Auth/Loadable";
import SingleCourse from "../SingleCourse/Loadable";
import SingleLesson from "../SingleLesson/Loadable";
import ResetPassword from "../ResetPassword/Loadable";
import RequestResetPassword from "../RequestResetPassword/Loadable";
import LoadingIndicator from "../../components/LoadingIndicator";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import config from "../../../config/config";
import { getToken } from "../../utils/userUtils";
import { isTokenNotExpired } from "../Auth/auth-logic";
import "./style.scss";

interface AppProps {
  getUser: () => void;
  logoutAction: () => void;
  history: History;
  loading: boolean;
  error: string;
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

    if (this.props.error) {
      return <div>{this.props.error}</div>;
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
            <Route exact path="/reset" component={ResetPassword} />
            <Route
              exact
              path="/reset_request"
              component={RequestResetPassword}
            />
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
