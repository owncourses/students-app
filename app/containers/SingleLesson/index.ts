import reducer from "./reducer";
import saga from "./saga";
import { compose } from "redux";
import { connect } from "react-redux";
import SingleLesson from "./SingleLesson";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectReducer";
import { createStructuredSelector } from "reselect";
import { lessonAction } from "./actions";
import {
  makeSelectSingleLesson,
  makeSelectSingleLessonError,
  makeSelectSingleLessonLoading
} from "./selectors";

const mapStateToProps = createStructuredSelector({
  currentLesson: makeSelectSingleLesson(),
  error: makeSelectSingleLessonError(),
  loading: makeSelectSingleLessonLoading()
});

const mapDispatchToProps = dispatch => ({
  getLesson: id => dispatch(lessonAction(id))
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
