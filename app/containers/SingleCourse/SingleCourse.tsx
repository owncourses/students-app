import * as React from "react";
import CourseModuleItem from "../../components/CourseModuleItem";
import { match } from "react-router-dom";
import { ModuleInterface } from "./interfaces";
import LoadingIndicator from "../../components/LoadingIndicator";
import Jumbotron from "../../components/Jumbotron";
import "./style.scss";

interface SingleCourseProps {
  match: match<{ courseId: string }>;
  getCourse: (id: string) => void;
  error: boolean | string;
  loading: boolean;
  modules: ModuleInterface[];
}

class SingleCourse extends React.Component<SingleCourseProps> {
  componentDidMount(): void {
    const { courseId } = this.props.match.params;
    this.props.getCourse(courseId);
  }

  render(): React.ReactNode {
    const { error, loading, modules, match } = this.props;

    let currentCourse = null;

    if (modules) {
      const [firstModule] = modules;
      currentCourse = firstModule.course;
    }

    if (error) {
      return <div>{error}</div>;
    }
    if (loading) {
      return <LoadingIndicator />;
    }

    const modulesView =
      modules &&
      modules.map(module => (
        <CourseModuleItem match={match} item={module} key={module.id} />
      ));
    const jumbotronView = currentCourse && (
      <Jumbotron title={currentCourse.title} subtitle={currentCourse.title} />
    );

    return (
      <section>
        {jumbotronView}
        <div className={"modules"}>{modulesView}</div>
      </section>
    );
  }
}

export default SingleCourse;
