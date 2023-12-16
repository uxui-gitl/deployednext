"use client";
import Announcement from "@/sections/announcement/Announcement";
import ClientLogos from "@/sections/clientLogos/ClientLogos";
import Copyright from "@/sections/copyright/Copyright";
import Expertise from "@/sections/expertise/Expertise";
import Footer from "@/sections/footer/Footer";
import InfotechWeekly from "@/sections/infotechWeekly/InfotechWeekly";
import Intro from "@/sections/intro/Intro";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import Review from "@/sections/review/Review";
import Robot from "@/sections/robot/Robot";
import RobotDetails from "@/sections/robotDetails/RobotDetails";
import Subscribe from "@/sections/subscribe/Subscribe";
import ACT from "@/sections/ACT/ACT";
import Image from "next/image";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import Navbar from "@/components/Navbar/Navbar";
import Testimonial from "@/sections/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      {/* <Cursor isGelly={true} /> */}
      <main className=" overflow-hidden">
        <div className={`relative z-[500]`}>
          <div className={`absolute w-full  `}>
            <Navbar theme="light" />
          </div>
        </div>
        <Intro />
        <ClientLogos />
        <ACT />
        <Robot />
        {/* <Expertise /> */}
        <CaseStudy
          ribbon="CASE STUDY "
          title="Delivering Results that Matters "
          desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions across the spectrum of industries. "
          isHomepage={true}
          arr={[
            {
              id: 1,
              title:
                "India's leading TV audience measurement firm employs calibrated RPA bots, reducing manual tasks of channel metrics, efficiently sharing results with stakeholders and saving consultant hours.",
              thumbnail: "1",
              description: "",
              tags: ["Automation"],
              cta: "Read article",
              link: "/",
            },
            {
              id: 2,
              title:
                "Prominent American watch and lifestyle distribution organization achieves heightened uptime, seamless management, positive ROI and enhanced data durability and reliability by transitioning to Azure through a Lift and Shift approach.",
              thumbnail: "2",
              description: "",
              tags: ["Cloud"],
              cta: "Read article",
              link: "/",
            },
            {
              id: 3,
              title:
                "Germany based Automotive Company navigates system complexities and optimizes efficiency with Infor CloudSuite automotive support services from Godrej Infotech",
              thumbnail: "3",
              description: "",
              tags: ["Transformation"],
              cta: "Read article",
              link: "/",
            },
          ]}
        />
        <Testimonial
          ribbon="Testimonials "
          title="What Experts Think About Us "
          desc="It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout."
          arr={[
            {
              id: 1,
              clientName: "",
              clientDesignation: "IT Manager",
              thumbnail: "1",
              description:
                "We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
              category: "static",
              link: "/",
            },
          ]}
        />
        <Review />
        <InfotechWeekly />
        <Subscribe />
      </main>
    </>
  );
}
