import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectAuthLoading } from "../Auth/selectors";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import App from "./App";
import { getUser } from "../Auth/actions";
import saga from "../Auth/saga";
import reducer from "../Auth/reducer";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectReducer";

const mapStateToProps = createStructuredSelector({
  loading: makeSelectAuthLoading()
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser())
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
