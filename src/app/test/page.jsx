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
import Testimonial from "@/sections/testimonial/Testimonial";
import ACT from "@/sections/ACT/ACT";
import Image from "next/image";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import Spline from "@splinetool/react-spline";
import { Chrono } from "react-chrono";
import Navbar from "@/components/Navbar";
import Explore from "@/components/Explore";
import NavLoop from "@/components/NavLoop";
import NavTest from "@/components/NavTest";

export default function Home() {
  const items = [
    {
      title: "1999",
      cardTitle: "Inception of a Technology PowerHouse",

      cardDetailedText:
        "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Automation (RPA), eCommerce & Analytics.",
    },
    {
      title: "2000",
      cardTitle: "Event 2",
      cardDetailedText: "This is the second event on the timeline.",
    },
    {
      title: "2023",
      cardTitle: "Event 3",
      cardDetailedText: "This is the third event on the timeline.",
    },
  ];

  return (
    <>
      <NavLoop />
      <main>
        {/* Timeline */}
        {/* <>
          <div className="mx-auto">
            <Chrono
              items={items}
              mode="VERTICAL"
              enableOutline
              timelinePointShape="square"
              timelinePointDimension={30}
              hideControls
              borderLessCards
              allowDynamicUpdate
              lineWidth={1}
              fontSizes={80}
            />
          </div>
        </>


        <>
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </>  */}

        <Explore />
      </main>
    </>
  );
}
