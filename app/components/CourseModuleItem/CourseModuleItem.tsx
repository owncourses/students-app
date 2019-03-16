import * as React from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const CourseModuleItem = ({
  item: { id, title, description },
  expanded,
  onChange
}) => {
  return (
    <ExpansionPanel expanded={expanded === id} onChange={onChange(id)}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{description}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default CourseModuleItem;
