import React from "react";
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BasicModal from "../ContentModal/ContentModal";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

const ExperienceDisplay = ({
  id,
  date,
  type,
  school_company,
  degree_position,
  work,
}) => {
  return (
    // <BasicModal id={id} type={type}>
    <VerticalTimelineElement
      className={type === "education" ? "vertical-timeline-element--education" : "vertical-timeline-element--work"}
      contentStyle={{
        background: "linear-gradient(to bottom, #64afe8, #5ea9dc, #59a4d1, #569ec5, #5398ba)",
        color: "#000",
        margin: "38px"
      }}
      position={id % 2 === 0 ? "right" : "left"}
      date={date}
      iconStyle={
        type === "education"
          ? { background: "#3e497a", color: "#fff" }
          : { background: "#e9d35b", color: "#fff" }
      }
      icon={type === "education" ? <SchoolIcon /> : <WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">{school_company}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        {degree_position}
      </h4>
      <p>{work}</p>
    </VerticalTimelineElement>
    // </BasicModal>
  );
};

export default ExperienceDisplay;
