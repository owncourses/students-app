import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import HomePage from "./HomePage";
import { makeSelectUser } from "../Auth/selectors";

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser()
});

const withConnect = connect(
  mapStateToProps,
  null
);

// @ts-ignore
export default compose(
  withRouter,
  withConnect
)(HomePage);
