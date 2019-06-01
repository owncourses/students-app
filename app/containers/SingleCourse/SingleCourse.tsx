import * as React from "react";
import CourseModuleItem from "../../components/CourseModuleItem";
import { match } from "react-router-dom";
import LoadingIndicator from "../../components/LoadingIndicator";
import Jumbotron from "../../components/Jumbotron";
import "./style.scss";
import { CourseInterface } from "../Auth/interfaces";
import Author from "../../components/Author/Author";
import { Typography } from "@material-ui/core";
import i18n from "i18next";

interface SingleCourseProps {
  match: match<{ courseId: string }>;
  getCourse: (id: string) => void;
  error: boolean | string;
  loading: boolean;
  course: CourseInterface;
}

class SingleCourse extends React.Component<SingleCourseProps> {
  componentDidMount(): void {
    const { courseId } = this.props.match.params;
    this.props.getCourse(courseId);
  }

  render(): React.ReactNode {
    const { error, loading, course, match } = this.props;

    if (error) {
      return <div>{error}</div>;
    }
    if (loading) {
      return <LoadingIndicator />;
    }

    const modulesView =
      course &&
      course.modules.map(module => (
        <CourseModuleItem match={match} item={module} key={module.id} />
      ));

    const jumbotronView = course && (
      <Jumbotron title={course.title} subtitle={course.title} />
    );

    const authorsView =
      course &&
      course.authors.map(author => (
        <Author author={author} key={author.name} />
      ));

    const authorTitle =
      course && course.authors.length > 1
        ? i18n.t("Course authors")
        : i18n.t("Course author");

    return (
      <section>
        {jumbotronView}
        <div className={"column-container"}>
          <div className={"modules"}>{modulesView}</div>
          <div className={"authors"}>
            <Typography variant={"h5"}>{authorTitle}</Typography>
            {authorsView}
          </div>
        </div>
      </section>
    );
  }
}

export default SingleCourse;
