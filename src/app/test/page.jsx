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
import Explore from "@/components/Explore";
import NavLoop from "@/components/NavLoop";
import NavTest from "@/components/NavTest";
import NavNav from "@/components/NavNav";
import Benefits from "@/components/Benefits";
import Navbar from "@/components/Navbar/Navbar";
import EntIntro from "@/components/EntIntro";
import Dialog from "@/components/Dialog";
import { useState } from "react";
import Capabilities from "@/components/Capabilities";
import Accordion from "@/components/Accordion";
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

  const [showDialog, setShowDialog] = useState(true);

  const BenefitsData = [
    {
      _id: 1,
      icon: "gear",
      title: "Process and analyze vast volumes of data",
    },
    {
      _id: 2,
      icon: "diamond",
      title: "Ensure Uniformity in Financial Information",
    },
    {
      _id: 3,
      icon: "eyeGear",
      title: "Boost brand value",
    },
    {
      _id: 4,
      icon: "gear",
      title: "Process and analyze vast volumes of data",
    },
    {
      _id: 5,
      icon: "diamond",
      title: "Ensure Uniformity in Financial Information",
    },
    {
      _id: 6,
      icon: "eyeGear",
      title: "Boost brand value",
    },
  ];

  const onClose = () => {
    setShowDialog(false);
  };

  const onOk = () => {
    // Handle OK button click logic
    setShowDialog(false);
  };
  return (
    <>
      {/* <NavLoop /> */}
      {/* <Navbar /> */}
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

        {/* <NavNav />

        <Explore /> */}
        {/* <div className="relative z-[500]">
          <div className="absolute w-full">
            <Navbar />
          </div>
        </div> */}
        <EntIntro
          title="Reimagine Your Business Capabilities with Our Intelligent Edge-Enabled Cloud Stack & Services"
          desc="We leverage the power of the cloud to recalibrate our business, derive greater business value and refine your user experience"
          cta="Modernize your Business with Upgrade Cloud Services"
          width="70%"
          video="https://godrej-gitl.s3.ap-south-1.amazonaws.com/videos/banner.mp4"
        />
        {/* <Benefits
          ribbon="Tech stack Benefits"
  title="Benefits of Application Development with Our Technology Stack Expertise "
  desc=""
  arr={BenefitsData}
        ></Benefits> */}

        <Capabilities
          ribbon="Tech stack Benefits"
          title="Our Capabilities "
          desc="With expertise in project execution, technology implementation and risk mitigation, our capabilities empower the success of mega projects"
        />

        <>
          {showDialog && (
            <Dialog title="Example Modal" onClose={onClose} onOk={onOk}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                eligendi odio ipsa nostrum dolores voluptas architecto tempore
                nulla voluptatibus vel, placeat explicabo exercitationem id
                officia laborum doloremque blanditiis earum accusamus.
              </p>
            </Dialog>
          )}
        </>
      </main>
    </>
  );
}
