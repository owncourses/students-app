import * as React from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CourseLessonItem from "../CourseLessonItem";
import "./style.scss";
import { ModuleInterface } from "../../containers/SingleCourse/interfaces";
import { match } from "react-router";

const CourseModuleItem = ({
  item: { id, title, description, lessons },
  expanded,
  match,
  onChange
}: {
  item: ModuleInterface;
  expanded: null | string | boolean;
  match: match;
  onChange: (
    id: any
  ) => (event: React.ChangeEvent<{}>, expanded: boolean) => void;
}) => {
  return (
    <ExpansionPanel expanded={expanded === id} onChange={onChange(id)}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={"details"}>
        <Typography>{description}</Typography>
        <div className={"lessons"}>
          {lessons &&
            lessons.map(lesson => (
              <CourseLessonItem key={lesson.id} item={lesson} match={match} />
            ))}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default CourseModuleItem;
