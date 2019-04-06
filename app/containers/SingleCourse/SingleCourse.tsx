import * as React from "react";
import CourseModuleItem from "../../components/CourseModuleItem";
import { match } from "react-router-dom";
import { ModuleInterface } from "./interfaces";
import LoadingIndicator from "../../components/LoadingIndicator";

interface SingleCourseProps {
  match: match<{ courseId: string }>;
  getCourse: (id: string) => void;
  error: boolean | string;
  loading: boolean;
  modules: ModuleInterface[];
}

interface SingleCourseState {
  expanded: any;
}

class SingleCourse extends React.Component<
  SingleCourseProps,
  SingleCourseState
> {
  state = {
    expanded: null
  };

  componentDidMount(): void {
    const { courseId } = this.props.match.params;
    this.props.getCourse(courseId);
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render(): React.ReactNode {
    const { error, loading, modules, match } = this.props;
    const { expanded } = this.state;

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
        <CourseModuleItem
          match={match}
          item={module}
          key={module.id}
          expanded={expanded}
          onChange={this.handleChange}
        />
      ));

    return (
      <section>
        <h2>{currentCourse && currentCourse.title}:</h2>
        {modulesView}
      </section>
    );
  }
}

export default SingleCourse;
