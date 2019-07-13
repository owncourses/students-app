import { fromJS } from "immutable";
import {
  RESET_PASSWORD_ACTION,
  RESET_PASSWORD_ACTION_ERROR,
  RESET_PASSWORD_ACTION_SUCCESS
} from "./constatns";

const initialState = fromJS({
  loading: false,
  error: false,
  success: false
});

function resetPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD_ACTION:
      return state.set("loading", true);
    case RESET_PASSWORD_ACTION_SUCCESS:
      return state.set("loading", false).set("success", true);
    case RESET_PASSWORD_ACTION_ERROR:
      return state.set("loading", false).set("error", action.error);
    default:
      return state;
  }
}

export default resetPasswordReducer;
