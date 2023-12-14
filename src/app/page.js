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
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* <Cursor isGelly={true} /> */}
      <main className=" overflow-hidden">
        <Intro />
        <ClientLogos />
        <ACT />
        <Robot />
        <Expertise />
        <CaseStudy />
        <Testimonial />
        <Review />
        <InfotechWeekly />
        <Subscribe />
      </main>
    </>
  );
}
