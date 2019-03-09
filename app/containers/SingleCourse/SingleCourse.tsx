import * as React from "react";
import i18n from "i18next";
import CourseModuleItem from "../../components/CourseModuleItem";

interface SingleCourseProps {
  match: any;
  getCourse: (id: number) => void;
  error: boolean | string;
  loading: boolean;
  currentCourse: any;
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
    const { error, loading, currentCourse } = this.props;
    if (error) {
      return <div>{error}</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <section>
        <h2>{i18n.t("My modules")}:</h2>
        {currentCourse &&
          currentCourse.map(module => {
            return (
              <CourseModuleItem
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
