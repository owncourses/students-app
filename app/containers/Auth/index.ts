import { connect } from "react-redux";
import { compose } from "redux";
import { authAction } from "./actions";
import reducer from "./reducer";
import saga from "./saga";
import { createStructuredSelector } from "reselect";
import { userLoginInterface } from "./constants";
// @ts-ignore
import Auth from "./Auth.tsx";
// @ts-ignore
import injectSaga from "utils/injectSaga";
// @ts-ignore
import injectReducer from "utils/injectReducer";
import { makeSelectAuthError, makeSelectAuthLoading } from "./selectors";

const mapDispatchToProps = dispatch => ({
  onLogin: (payload: userLoginInterface) => dispatch(authAction(payload))
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectAuthLoading(),
  error: makeSelectAuthError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "auth", reducer });
const withSaga = injectSaga({ key: "auth", saga });

// @ts-ignore
export default compose(
  withReducer,
  withSaga,
  withConnect
)(Auth);
