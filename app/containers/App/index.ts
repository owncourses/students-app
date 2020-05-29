import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  makeSelectAuthError,
  makeSelectNotifications,
  makeSelectAuthLoading
} from "../Auth/selectors";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import App from "./App";
import {
  getNotifications,
  getUser,
  logoutAction,
  toggleNotification
} from "../Auth/actions";
import saga from "../Auth/saga";
import reducer from "../Auth/reducer";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectReducer";

const mapStateToProps = createStructuredSelector({
  loading: makeSelectAuthLoading(),
  error: makeSelectAuthError(),
  notifications: makeSelectNotifications()
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  getNotifications: () => dispatch(getNotifications()),
  toggleNotification: id => dispatch(toggleNotification(id)),
  logoutAction: () => dispatch(logoutAction())
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withAuthReducer = injectReducer({ key: "auth", reducer });
const withAuthSaga = injectSaga({ key: "auth", saga });

export default compose<any>(
  withAuthSaga,
  withAuthReducer,
  withRouter,
  withConnect
)(App);
