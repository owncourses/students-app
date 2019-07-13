import ResetPassword from "./ResetPassword";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  makeSelectResetPasswordError,
  makeSelectResetPasswordLoading,
  makeSelectResetPasswordSuccess
} from "./selectors";
import { resetPasswordAction } from "./actions";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import reducer from "./reducer";
import saga from "./saga";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectReducer";

const mapDispatchToProps = dispatch => ({
  onSubmit: (payload: {
    password: string;
    repeatedPassword: string;
    urlToken: string;
  }) => dispatch(resetPasswordAction(payload))
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectResetPasswordLoading(),
  error: makeSelectResetPasswordError(),
  success: makeSelectResetPasswordSuccess()
});

const withResetPasswordReducer = injectReducer({
  key: "resetPassword",
  reducer
});
const withResetPasswordSaga = injectSaga({ key: "resetPassword", saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose<any>(
  withResetPasswordSaga,
  withResetPasswordReducer,
  withRouter,
  withConnect
)(ResetPassword);
