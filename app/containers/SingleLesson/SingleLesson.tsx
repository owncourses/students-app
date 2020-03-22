import * as React from "react";
import CourseLesson from "../../components/CourseLesson";
import { match } from "react-router";
import { Bookmark, BookmarkViewModel, LessonInterface } from "./interfaces";
import LoadingIndicator from "../../components/LoadingIndicator";
import "./style.scss";
import Error from "../../components/Error";

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

class SingleLesson extends React.Component<SingleLessonProps, any> {
  componentDidMount() {
    const {
      params: { lessonId }
    } = this.props.match;
    this.props.getLesson(lessonId);
    this.props.getBookmarkList(lessonId);
  }

  componentDidUpdate(prevProps: Readonly<SingleLessonProps>): void {
    if (prevProps.match.url !== this.props.match.url) {
      const {
        params: { lessonId }
      } = this.props.match;
      this.props.getLesson(lessonId);
      this.props.getBookmarkList(lessonId);
    }
  }

  handleCompleteLesson = isCompleted => {
    const {
      params: { lessonId }
    } = this.props.match;

    this.props.completeLesson(isCompleted, lessonId);
  };

  handleBookmarkDelete = (bookmarkId: string) => {
    this.props.deleteBookmark(bookmarkId);
  };

  handleBookmarkSet = bookmark => {
    const {
      params: { lessonId }
    } = this.props.match;

    this.props.setBookmark({
      title: bookmark.bookmarkTitle,
      bookmarkTime: bookmark.bookmarkTime,
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
      return <Error message={error} />;
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
            bookmarkDelete={this.handleBookmarkDelete}
            bookmarkSet={this.handleBookmarkSet}
            completeLoading={this.props.completeLoading}
          />
        </div>
      );
    }

    return <LoadingIndicator />;
  }
}

export default SingleLesson;
