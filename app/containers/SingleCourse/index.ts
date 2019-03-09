import reducer from "./reducer";
import saga from "./saga";
import { compose } from "redux";
import { connect } from "react-redux";
import SingleCourse from "./SingleCourse";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectReducer";
import { createStructuredSelector } from "reselect";
import { courseAction } from "./actions";
import {
  makeSelectSingleCourse,
  makeSelectSingleCourseError,
  makeSelectSingleCourseLoading
} from "./selectors";

const mapStateToProps = createStructuredSelector({
  currentCourse: makeSelectSingleCourse(),
  error: makeSelectSingleCourseError(),
  loading: makeSelectSingleCourseLoading()
});

const mapDispatchToProps = dispatch => ({
  getCourse: id => dispatch(courseAction(id))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "singleCourse", reducer });
const withSaga = injectSaga({ key: "singleCourse", saga });

// @ts-ignore
export default compose(
  withSaga,
  withReducer,
  withConnect
)(SingleCourse);
