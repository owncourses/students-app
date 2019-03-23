import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectUser } from "../Auth/selectors";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import App from "./App";
import { getUser } from "../Auth/actions";
import saga from "../Auth/saga";
import reducer from "../Auth/reducer";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectReducer";

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser()
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

// @ts-ignore
export default compose(
  withAuthSaga,
  withAuthReducer,
  withRouter,
  withConnect
)(App);
