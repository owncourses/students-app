import reducer from "./reducer";
import saga from "./saga";
import { compose } from "redux";
import { connect } from "react-redux";
import SingleLesson from "./SingleLesson";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectReducer";
import { createStructuredSelector } from "reselect";
import { lessonAction, lessonCompleteAction } from "./actions";
import {
  makeSelectSingleLesson,
  makeSelectSingleLessonCompleteError,
  makeSelectSingleLessonCompleteLoading,
  makeSelectSingleLessonError,
  makeSelectSingleLessonLoading
} from "./selectors";

const mapStateToProps = createStructuredSelector({
  currentLesson: makeSelectSingleLesson(),
  error: makeSelectSingleLessonError(),
  loading: makeSelectSingleLessonLoading(),
  completeLoading: makeSelectSingleLessonCompleteLoading(),
  completeError: makeSelectSingleLessonCompleteError()
});

const mapDispatchToProps = dispatch => ({
  getLesson: id => dispatch(lessonAction(id)),
  completeLesson: (isComplete, lessonId) => {
    console.log(isComplete);
    dispatch(lessonCompleteAction(isComplete, lessonId));
  }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "singleLesson", reducer });
const withSaga = injectSaga({ key: "singleLesson", saga });

// @ts-ignore
export default compose(
  withSaga,
  withReducer,
  withConnect
)(SingleLesson);

export { mapDispatchToProps };
