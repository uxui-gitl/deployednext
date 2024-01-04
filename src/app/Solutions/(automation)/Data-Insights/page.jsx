"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import Testimonial from "@/sections/testimonial/Testimonial";
import shield from "../../../../../public/upgradeCloud/sheild.png";
import Subscription from "@/components/Subscription";
import puzzle from "../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../public/icon.png";
import microsoft from "../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../public/upgradeCloud/cloudArrows.png";
import Capabilities from "@/components/Capabilities";

import PowerBI from "../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../public/Power-App.png";
import Birst from "../../../../../public/Birst-logo.png";
import dummy from "../../../../../public/dummy.png";
import Expertise from "@/components/Expertise";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import ServiceOfferingGrid from "@/components/ServiceOfferingGrid";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};
const page = () => {
  const lists = [
    {
      id: 1,
      text: "Inadequate Scalability and Availability",
    },
    {
      id: 2,
      text: "Unreliable Backup Storage",
    },
    {
      id: 3,
      text: "Weak Disaster Recovery and Redundancy",
    },
    {
      id: 4,
      text: "Inadequate Data Integrity and Automation Capabilities",
    },
    {
      id: 5,
      text: "Subpar IT Performance",
    },
    {
      id: 6,
      text: "Limited IT Universality and Centralized Monitoring",
    },
    {
      id: 7,
      text: "High Management Costs of IT Infrastructure",
    },
  ];

  const upgradeCloud = [
    {
      _id: 1,
      title: "Upgrade AX to D365 F&O",
      desc: "Upgrade AX to D365 F&O to Revitalize Your Business Performance",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 2,
      title: "Upgrade Nav to Business Central ",
      desc: "Unlock Maximum Modern Benefits with Business Central Upgrade",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 3,
      title: "Upgrade to Infor LN Cloud",
      desc: "Future proof your business growth with Upgrade to Infor LN Cloud",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 4,
      title: "Application Migration",
      desc: "Migrate your Application to Cloud to Unleash Modernisation",
      cta: "Know more",
      link: "/",
      bg: "",
    },
    {
      _id: 5,
      title: "Migrate email to cloud",
      desc: "We aim for a more efficient and collaborative communication environment that will improve efficiency and streamline communication with minimum disruption to your everyday operations",
      cta: "Know more",
      link: "/",
      bg: "",
    },
  ];

  const aglity = [
    {
      _id: 1,
      title: "Database Migration",
    },
    {
      _id: 2,
      title: "Infrastructure Migration ",
    },
    {
      _id: 3,
      title: "Enterprise Platforms Migration",
    },
    {
      _id: 4,
      title: "Cloud Microservices",
    },
    {
      _id: 5,
      title: "Disaster Recovery and Enterprise Backup Service",
    },
    {
      _id: 6,
      title: "Application Migration and Modernization",
    },
    {
      _id: 7,
      title: "Cloud Monitoring and Reporting ",
    },
  ];

  const smartTools = [
    {
      _id: 1,
      type: "box",
      title: "Power BI",
      theme: "light",
      bg: "transparent",
      desc: "With Power BI integration - a highly scalable analytics platform that accommodates both individual users",
      icon: "Power-BI-Logo.png",
      cta: "Know More",
    },
    {
      _id: 2,
      type: "box",
      title: "Power Apps",
      theme: "dark",
      bg: "#4C6FFF",
      desc: "We help you to efficiently develop low-code applications in a fraction of the time with Power Apps",
      icon: "Power-App.png",
      cta: "Know More",
    },
    {
      _id: 3,
      type: "box",
      title: "Birst ",
      theme: "dark",
      bg: "#07001F",
      desc: "The aim is to facilitate faster decision-making with the tools and flexibility to implement new insight",
      icon: "Birst-logo.png",
      cta: "Know More",
    },
    {
      _id: 4,
      type: "box",
      title: "Big Data",
      theme: "dark",
      bg: "transparent",
      desc: "Extracting insights from tapped and  untapped data assets, we help you understand customer behaviour",
      icon: "dummy.png",
      cta: "Know More",
    },
    {
      _id: 5,
      type: "box",
      title: "Data Lake",
      theme: "light",
      bg: "transparent",
      desc: "We specialize in assisting customers on their digital transformation journey by designing and deploying custom data lake",
      icon: "dummy.png",
      cta: "Know More",
    },
    {
      _id: 6,
      type: "box",
      title: "Data Lake",
      theme: "light",
      bg: "transparent",
      desc: "We specialize in assisting customers on their digital transformation journey by designing and deploying custom data lake",
      icon: "dummy.png",
      cta: "Know More",
    },
  ];
  const navLinks = [
    {
      _id: 1,
      title: "Enterprise suite",
      link: "#about",
    },
    {
      _id: 2,
      title: "Act Cards",
      link: "#actCards",
    },
    {
      _id: 3,
      title: "Employee Experience",
      link: "#empExp",
    },
    {
      _id: 4,
      title: "Spotlight",
      link: "#spotlight",
    },
  ];
  return (
    <>
      <EntIntro
        title="Do More with Data Insights
        for Breakthrough Transformation"
        desc="We develop business bespoke strategies and align them with future-proof architectures, emphasizing governance and autonomous management to build your robust data estates. "
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* Section Nav */}
      <>
        <SectionNav arr={navLinks} />
      </>

      {/* Smart Tools Dynamic */}
      <>
        <ServiceOfferingGrid
          title="Smart Tools and Technologies"
          desc="Starting precisely where you stand in your digital
          transformation journey, we seamlessly integrate our teams
          into your culture, fostering a collaborative environment for
          success"
          ctaDesc="Let's Connect for a Walkthrough"
          cta="Let's Connect"
          arr={[
            {
              _id: 1,
              type: "box",
              title: "Power BI",
              theme: "light",
              bg: "transparent",
              desc: "With Power BI integration - a highly scalable analytics platform that accommodates both individual users",
              icon: "Power-BI-Logo.png",
              cta: "Know More",
            },
            {
              _id: 2,
              type: "box",
              title: "Power Apps",
              theme: "dark",
              bg: "#4C6FFF",
              desc: "We help you to efficiently develop low-code applications in a fraction of the time with Power Apps",
              icon: "Power-App.png",
              cta: "Know More",
            },
            {
              _id: 3,
              type: "box",
              title: "Birst ",
              theme: "dark",
              bg: "#07001F",
              desc: "The aim is to facilitate faster decision-making with the tools and flexibility to implement new insight",
              icon: "Birst-logo.png",
              cta: "Know More",
            },
            {
              _id: 4,
              type: "box",
              title: "Big Data ",
              theme: "dark",
              bg: "#07001F",
              desc: "Extracting insights from tapped and  untapped data assets, we help you understand customer behaviour",
              icon: "dummy.png",
              cta: "Know More",
            },
            {
              _id: 5,
              type: "box",
              title: "Data Lake",
              theme: "light",
              bg: "transparent",
              desc: "We specialize in assisting customers on their digital transformation journey by designing and deploying custom data lake",
              icon: "dummy.png",
              cta: "Know More",
            },
            {
              _id: 6,
              type: "box",
              title: "Tableau",
              theme: "dark",
              bg: "#4C6FFF",
              desc: "Seamlessly integrate Tableau into your operations, enabling to visualize data in captivating ways ",
              icon: "Power-App.png",
              cta: "Know More",
            },
          ]}
        />
      </>

      {/* Capabilites */}
      <Capabilities
        ribbon=" "
        title="Our Capabilities "
        desc="With expertise in project execution, technology implementation and risk mitigation, our capabilities empower the success of mega projects"
        arr={[
          {
            _id: 1,
            icon: "gear",
            title: "Future of Projects  ",
            desc: "",
            cta: "Know More",
            ctaUrl: "/",
            list: [
              {
                title: "External integration with project monitoring tools  ",
                url: "/",
              },
              {
                title: "Mobile applications for task assignment",
                url: "/",
              },
              {
                title: "After sales service",
                url: "/",
              },
              {
                title: "Data Security & Digital Documentation ",
                url: "/",
              },
              {
                title: "Multi site management  ",
                url: "/",
              },
              {
                title: "Project Task Assignment & Management  ",
                url: "/",
              },
              {
                title: "Remote Work and Cost Accuracy   ",
                url: "/",
              },
            ],
          },
          {
            _id: 2,
            icon: "gear",
            title: "IoT Enabled Products ",
            desc: "",
            cta: "Know More",
            ctaUrl: "/",
            list: [
              {
                title: "External integration with project monitoring tools  ",
                url: "/",
              },
              {
                title: "Mobile applications for task assignment",
                url: "/",
              },
              {
                title: "After sales service",
                url: "/",
              },
              {
                title: "Data Security & Digital Documentation ",
                url: "/",
              },
              {
                title: "Multi site management  ",
                url: "/",
              },
              {
                title: "Project Task Assignment & Management  ",
                url: "/",
              },
              {
                title: "Remote Work and Cost Accuracy   ",
                url: "/",
              },
            ],
          },
          {
            _id: 3,
            icon: "gear",
            title: "Supply Chain Management  ",
            desc: "",
            cta: "Know More",
            ctaUrl: "/",
            list: [
              {
                title: "External integration with project monitoring tools  ",
                url: "/",
              },
              {
                title: "Mobile applications for task assignment",
                url: "/",
              },
              {
                title: "After sales service",
                url: "/",
              },
              {
                title: "Data Security & Digital Documentation ",
                url: "/",
              },
              {
                title: "Multi site management  ",
                url: "/",
              },
              {
                title: "Project Task Assignment & Management  ",
                url: "/",
              },
              {
                title: "Remote Work and Cost Accuracy   ",
                url: "/",
              },
            ],
          },
          {
            _id: 4,
            icon: "gear",
            title: "Performance Management ",
            desc: "",
            cta: "Know More",
            ctaUrl: "/",
            list: [
              {
                title: "External integration with project monitoring tools  ",
                url: "/",
              },
              {
                title: "Mobile applications for task assignment",
                url: "/",
              },
              {
                title: "After sales service",
                url: "/",
              },
              {
                title: "Data Security & Digital Documentation ",
                url: "/",
              },
              {
                title: "Multi site management  ",
                url: "/",
              },
              {
                title: "Project Task Assignment & Management  ",
                url: "/",
              },
              {
                title: "Remote Work and Cost Accuracy   ",
                url: "/",
              },
            ],
          },
        ]}
      />

      <Awards />

      {/* Expertise */}
      <Expertise
        ribbon="Our Expertise "
        ribbonTxtWhite="true"
        title="Future Outlook with Intelligent Technologies  "
        desc="We are here to build edge and bring technology brilliance with the finest in the industry. Driving the innovation path, we develop better results for businesses across the globe."
        arr={[
          {
            title: "85%",
            desc: "IDC states that 85% of enterprises to merge human expertise with AI, ML& NLP by 2026 ",
          },
          {
            title: "$200B",
            desc: "Forbes forecasts size for AI market by 2026 ",
          },
          {
            title: "$6.6T",
            desc: "PwC Research claims that $6.6T productivity growth is projected by 2030  ",
          },
        ]}
      ></Expertise>

      {/* Testimonial */}
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

      <Subscription
        title="Tap the faster and simpler way for futuristic seamless business experiences"
        desc="Let's discuss how intelligent technologies can help you with rapid growth"
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
