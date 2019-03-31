import * as React from "react";
import CourseLesson from "../../components/CourseLesson";
import { match } from "react-router";
import { LessonInterface } from "./interfaces";
import LoadingIndicator from "../../components/LoadingIndicator";

interface SingleLessonProps {
  getLesson: (lessonId: string) => void;
  error: boolean | string;
  loading: boolean;
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

  render(): React.ReactNode {
    const { error, loading, currentLesson } = this.props;

    if (error) {
      return <div>{error}</div>;
    }
    if (loading) {
      return <LoadingIndicator />;
    }

    return <CourseLesson item={currentLesson} />;
  }
}

export default SingleLesson;
