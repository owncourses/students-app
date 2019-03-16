import * as React from "react";
import i18n from "i18next";
import CourseModuleItem from "../../components/CourseModuleItem";
import { Route } from "react-router-dom";

interface SingleCourseProps {
  match: any;
  getCourse: (id: number) => void;
  error: boolean | string;
  loading: boolean;
  courses: any;
  modules: any;
}

class SingleCourse extends React.Component<SingleCourseProps> {
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

    let currentCourse = null;

    if (modules) {
      const [firstModule] = modules;
      currentCourse = firstModule.course;
    }

    if (error) {
      return <div>{error}</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <section>
        <h2>{currentCourse && currentCourse.title}:</h2>
        {modules &&
          modules.map(module => {
            return (
              <CourseModuleItem
                match={match}
                item={module}
                key={module.id}
                expanded={this.state.expanded}
                onChange={this.handleChange}
              />
            );
          })}
      </section>
    );
  }
}

export default SingleCourse;
