import reducer from "./reducer";
import saga from "./saga";
import { compose } from "redux";
import { connect } from "react-redux";
import SingleLesson from "./SingleLesson";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectReducer";
import { createStructuredSelector } from "reselect";
import {
  createBookmarkAction,
  deleteBookmarkAction,
  getBookmarkListAction,
  lessonAction,
  lessonCompleteAction
} from "./actions";
import {
  makeSelectBookmarkError,
  makeSelectBookmarkList,
  makeSelectBookmarkLoading,
  makeSelectSingleLesson,
  makeSelectSingleLessonCompleteError,
  makeSelectSingleLessonCompleteLoading,
  makeSelectSingleLessonError,
  makeSelectSingleLessonLoading
} from "./selectors";
import { Bookmark } from "./interfaces";

const mapStateToProps = createStructuredSelector({
  currentLesson: makeSelectSingleLesson(),
  error: makeSelectSingleLessonError(),
  loading: makeSelectSingleLessonLoading(),
  completeLoading: makeSelectSingleLessonCompleteLoading(),
  completeError: makeSelectSingleLessonCompleteError(),
  bookmarkLoading: makeSelectBookmarkLoading(),
  bookmarkError: makeSelectBookmarkError(),
  bookmarkList: makeSelectBookmarkList()
});

const mapDispatchToProps = dispatch => ({
  getLesson: id => dispatch(lessonAction(id)),
  getBookmarkList: lessonId => dispatch(getBookmarkListAction(lessonId)),
  deleteBookmark: bookmarkId => dispatch(deleteBookmarkAction(bookmarkId)),
  setBookmark: (bookmark: Bookmark) => dispatch(createBookmarkAction(bookmark)),
  completeLesson: (isComplete, lessonId) => {
    dispatch(lessonCompleteAction(isComplete, lessonId));
  }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "singleLesson", reducer });
const withSaga = injectSaga({ key: "singleLesson", saga });

export default compose<any>(
  withSaga,
  withReducer,
  withConnect
)(SingleLesson);

export { mapDispatchToProps };
