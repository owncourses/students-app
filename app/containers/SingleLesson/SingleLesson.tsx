import * as React from "react";
import CourseLesson from "../../components/CourseLesson";
import { match } from "react-router";
import { LessonInterface } from "./interfaces";
import LoadingIndicator from "../../components/LoadingIndicator";

interface SingleLessonProps {
  getLesson: (lessonId: string) => void;
  completeLesson: (isComplete: boolean, lessonId: string) => void;
  error: boolean | string;
  completeError: boolean | string;
  loading: boolean;
  completeLoading: boolean;
  currentLesson: LessonInterface;
  match: match<{ lessonId: string }>;
}

class SingleLesson extends React.Component<SingleLessonProps> {
  componentDidMount() {
    const {
      params: { lessonId }
    } = this.props.match;
    this.props.getLesson(lessonId);
  }

  handleCompleteLesson = isCompleted => {
    const {
      params: { lessonId }
    } = this.props.match;

    this.props.completeLesson(isCompleted, lessonId);
  };

  render(): React.ReactNode {
    const { error, loading, currentLesson } = this.props;

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
            onComplete={this.handleCompleteLesson}
            completeLoading={this.props.completeLoading}
          />
        </div>
      );
    }

    return <LoadingIndicator />;
  }
}

export default SingleLesson;
