import { fromJS } from "immutable";
import {
  REQUEST_RESET_PASSWORD,
  REQUEST_RESET_PASSWORD_ERROR,
  REQUEST_RESET_PASSWORD_SUCCESS
} from "./constants";

const initialState = fromJS({
  loading: false,
  error: false,
  success: false,
  email: null
});

function requestResetPassword(state = initialState, action) {
  switch (action.type) {
    case REQUEST_RESET_PASSWORD:
      return state.set("loading", true).set("error", false);
    case REQUEST_RESET_PASSWORD_SUCCESS:
      return state
        .set("loading", false)
        .set("success", true)
        .set("email", action.payload);
    case REQUEST_RESET_PASSWORD_ERROR:
      return state.set("loading", false).set("error", action.error);
    default:
      return state;
  }
}

export default requestResetPassword;
