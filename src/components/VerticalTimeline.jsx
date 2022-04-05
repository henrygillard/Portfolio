import {
  VerticalTimeline,
  VerticalTimelineElement,
  SchoolIcon,
  WorkIcon,
  StarIcon,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";

export default function VerticalTimelineComponent() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "black", color: "#fff" }}
        contentArrowStyle={{ borderRight: "blue" }}
        date="Dec 2021 - Present"
        iconStyle={{ background: "#e9f400", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Full-Stack Software Engineer
        </h3>
        <h5 className="vertical-timeline-element-subtitle">Charla.CC</h5>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May-August 2021"
        iconStyle={{ background: "#e9f400", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">General Assembly</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Software Engineering Immersive Program
        </h4>
        <p>15 week accelerated boot camp with a focus on modern tech stacks</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - Current"
        iconStyle={{ background: "#e9f400", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Freelance Software Engineer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        <p>JavaScript, TailwindCSS, React, Next.Js, Python, Django </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - Current"
        iconStyle={{ background: "#e9f400", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
        <p>User Experience, Visual Design, Subscription Services</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
