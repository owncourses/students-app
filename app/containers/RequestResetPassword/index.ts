import RequestResetPassword from "./RequestResetPassword";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { requestResetPasswordAction } from "./actions";
import {
  makeSelectRequestResetPasswordEmail,
  makeSelectRequestResetPasswordError,
  makeSelectRequestResetPasswordLoading,
  makeSelectRequestResetPasswordSuccess
} from "./selectors";
import { compose } from "redux";
import reducer from "./reducer";
import saga from "./saga";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectReducer";

const mapDispatchToProps = dispatch => ({
  onSubmit: (payload: string) => dispatch(requestResetPasswordAction(payload))
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectRequestResetPasswordLoading(),
  error: makeSelectRequestResetPasswordError(),
  success: makeSelectRequestResetPasswordSuccess(),
  email: makeSelectRequestResetPasswordEmail()
});

const withRequestResetPasswordReducer = injectReducer({
  key: "requestResetPassword",
  reducer
});
const withRequestResetPasswordSaga = injectSaga({
  key: "requestResetPassword",
  saga
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose<any>(
  withRequestResetPasswordReducer,
  withRequestResetPasswordSaga,
  withConnect
)(RequestResetPassword);
