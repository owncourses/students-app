import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectUser } from "containers/Auth/selectors";
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

const withReducer = injectReducer({ key: "auth", reducer });
const withSaga = injectSaga({ key: "auth", saga });

export default compose(
  withSaga,
  withReducer,
  withRouter,
  withConnect
)(App);
