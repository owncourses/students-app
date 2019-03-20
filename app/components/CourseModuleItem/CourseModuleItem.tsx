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

const CourseModuleItem = ({
  item: { id, title, description, lessons },
  expanded,
  match,
  onChange
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
