import React from "react";
import styles from "./timeline.module.css";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <>
      <div className={`${styles["container"]} w-full bg-[#f2f4f7] `}>
        <div className="  text-left md:text-center max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem]">
          <h3 className="text-4xl  leading-[42px] mb-3 font-bold">
            From humble beginnings to tech titans, <br /> the inspiring journey
            of Godrej Infotech
          </h3>
        </div>
        {/* Timeline */}
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Icon path={mdiArrowRight} />}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Icon path={mdiArrowRight} />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Icon path={mdiArrowRight} />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

// export default Timeline;

// import React from "react";

// const Timeline = () => {
//   return <div>Timeline</div>;
// };

// export default Timeline;
