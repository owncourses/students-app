const AUTH_ACTION: string = "courses/Auth/AUTH_ACTION";
const AUTH_ACTION_SUCCESS: string = "courses/Auth/AUTH_ACTION_SUCCESS";
const AUTH_ACTION_ERROR: string = "courses/Auth/AUTH_ACTION_ERROR";
const USER_ACTION: string = "courses/Auth/USER_ACTION";

interface userLoginInterface {
  username: string;
  password: string;
}

export {
  AUTH_ACTION,
  AUTH_ACTION_ERROR,
  AUTH_ACTION_SUCCESS,
  USER_ACTION,
  userLoginInterface
};
