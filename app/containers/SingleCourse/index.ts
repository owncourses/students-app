import { compose } from "redux";
import { connect } from "react-redux";
import SingleCourse from "./SingleCourse";
import { createStructuredSelector } from "reselect";
import { courseAction } from "./actions";
import {
  makeSelectSingleCourseModules,
  makeSelectSingleCourseError,
  makeSelectSingleCourseLoading
} from "./selectors";
import singleCourseReducer from "./reducer";
import singleCourseSaga from "./saga";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectReducer";

const mapStateToProps = createStructuredSelector({
  modules: makeSelectSingleCourseModules(),
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

const withSingleCourseReducer = injectReducer({
  key: "singleCourse",
  reducer: singleCourseReducer
});
const withSingleCourseSaga = injectSaga({
  key: "singleCourse",
  saga: singleCourseSaga
});

export default compose<any>(
  withConnect,
  withSingleCourseReducer,
  withSingleCourseSaga
)(SingleCourse);

export { mapDispatchToProps };
