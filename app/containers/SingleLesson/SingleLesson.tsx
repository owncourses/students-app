import * as React from "react";
import CourseLesson from "../../components/CourseLesson";
import { match } from "react-router";
import { Bookmark, BookmarkViewModel, LessonInterface } from "./interfaces";
import LoadingIndicator from "../../components/LoadingIndicator";
import "./style.scss";
import BookmarkModal from "../../components/BookmarkModal";

interface SingleLessonProps {
  getLesson: (lessonId: string) => void;
  getBookmarkList: (lessonId: string) => void;
  deleteBookmark: (bookmarkId: string) => void;
  completeLesson: (isComplete: boolean, lessonId: string) => void;
  setBookmark: (bookmark: Bookmark) => void;
  error: boolean | string;
  bookmarkError: boolean | string;
  completeError: boolean | string;
  loading: boolean;
  bookmarkLoading: boolean;
  completeLoading: boolean;
  currentLesson: LessonInterface;
  bookmarkList: BookmarkViewModel[] | null;
  match: match<{ lessonId: string }>;
}

interface SingleLessonState {
  isBookmarkModalOpen: boolean;
  bookmarkTime: number | null;
}

class SingleLesson extends React.Component<
  SingleLessonProps,
  SingleLessonState
> {
  constructor(props) {
    super(props);

    this.state = {
      isBookmarkModalOpen: false,
      bookmarkTime: null
    };
  }

  componentDidMount() {
    const {
      params: { lessonId }
    } = this.props.match;
    this.props.getLesson(lessonId);
    this.props.getBookmarkList(lessonId);
  }

  handleCompleteLesson = isCompleted => {
    const {
      params: { lessonId }
    } = this.props.match;

    this.props.completeLesson(isCompleted, lessonId);
  };

  handleBookmarkClick = (bookmarkTime: number) => {
    this.setState({
      bookmarkTime
    });
    this.openBookmarkModal();
  };

  openBookmarkModal = () => {
    this.setState({
      isBookmarkModalOpen: true
    });
  };

  closeBookmarkModal = () => {
    this.setState({
      isBookmarkModalOpen: false
    });
  };

  handleBookmarkDelete = (bookmarkId: string) => {
    this.props.deleteBookmark(bookmarkId);
  };

  handleModalSubmit = bookmarkTitle => {
    const {
      params: { lessonId }
    } = this.props.match;

    this.closeBookmarkModal();
    this.props.setBookmark({
      title: bookmarkTitle,
      bookmarkTime: this.state.bookmarkTime,
      lessonId
    });
  };

  render(): React.ReactNode {
    const {
      error,
      loading,
      currentLesson,
      bookmarkList,
      bookmarkError,
      bookmarkLoading
    } = this.props;

    if (error) {
      return <div>{error}</div>;
    }
    if (loading) {
      return <LoadingIndicator />;
    }

    if (currentLesson) {
      return (
        <div className={"course-lesson-wrapper"}>
          <CourseLesson
            item={currentLesson}
            bookmarkProps={{ bookmarkList, bookmarkError, bookmarkLoading }}
            onComplete={this.handleCompleteLesson}
            handleBookmarkClick={this.handleBookmarkClick}
            deleteBookmark={this.handleBookmarkDelete}
            completeLoading={this.props.completeLoading}
          />
          <BookmarkModal
            onSubmitModal={this.handleModalSubmit}
            open={this.state.isBookmarkModalOpen}
            onCloseModal={this.closeBookmarkModal}
          />
        </div>
      );
    }

    return <LoadingIndicator />;
  }
}

export default SingleLesson;
