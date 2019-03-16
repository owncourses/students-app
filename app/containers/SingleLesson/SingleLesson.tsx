import * as React from "react";
import CourseLesson from "../../components/CourseLesson";

interface SingleLessonProps {
  getLesson: (lessonId: string) => void;
  error: string;
  loading: boolean;
  currentLesson: any;
  match: any;
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
      return <div>Loading...</div>;
    }

    return <CourseLesson item={currentLesson} />;
  }
}

export default SingleLesson;
