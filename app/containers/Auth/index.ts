import { connect } from "react-redux";
import { compose } from "redux";
import { authAction } from "./actions";
import { createStructuredSelector } from "reselect";
import { userLoginInterface } from "./constants";
// @ts-ignore
import Auth from "./Auth.tsx";
import {
  makeSelectAuthError,
  makeSelectAuthLoading,
  makeSelectUser
} from "./selectors";

const mapDispatchToProps = dispatch => ({
  onLogin: (payload: userLoginInterface) => dispatch(authAction(payload))
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectAuthLoading(),
  error: makeSelectAuthError(),
  currentUser: makeSelectUser()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
// @ts-ignore
export default compose(withConnect)(Auth);
