"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import Testimonials from "@/sections/testimonial/Testimonial";
import shield from "../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../public/icon.png";
import microsoft from "../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../public/upgradeCloud/cloudArrows.png";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import Testimonial from "@/sections/testimonial/Testimonial";

import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import Benefits from "@/components/Benefits";
import Expertise from "@/components/Expertise";
import Subscription from "@/components/Subscription";
import Navbar from "@/components/Navbar";

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
  const blogData = [
    {
      _id: 1,
      ribbon: "blog",
      title: "Migrate your IT Infrastructure to the Cloud",
      desc: "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose.",
      cta: "Know More",
      link: "/",
      imgUrl: "",
    },
    {
      _id: 2,
      ribbon: "News",
      title: "Migrate your IT Infrastructure to the Cloud",
      desc: "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose.",
      cta: "Know More",
      link: "/",
      imgUrl: "",
    },
    {
      _id: 3,
      ribbon: "blog",
      title: "Migrate your IT Infrastructure to the Cloud",
      desc: "In the current situation of cashflow challenges and low budgets to invest in IT CAPEX, companies can move to a better IT Infrastructure, which is OPEX based, scalable, secure, cost effective and above all accessible anytime from anywhere on any device. Whether you want to entirely migrate to the cloud or want to have a hybrid cloud infrastructure, Microsoft Azure is the best cloud computing service you can decide to choose.",
      cta: "Know More",
      link: "/",
      imgUrl: "",
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

  const AdvancedSolutions = [
    {
      _id: 1,
      title: "Machine Learning",
      desc: "Our ability in constructing, training and deploying ML models assure an effective implementation process.",
      cta: "Know More",
      link: "/",
    },
    {
      _id: 2,
      title: "Artificial Intelligence ",
      desc: "Improvement in customer experiences, facilitating acceleration and optimized business operations.",
      cta: "Know More",
      link: "/",
    },
    {
      _id: 3,
      title: "Robotic Process Automation",
      desc: "Dedicate more time to strategic initiatives, enhance productivity and minimizing the time-consuming repetitive tasks.",
      cta: "Know More",
      link: "/",
    },
  ];

  const BenefitsData = [
    {
      _id: 1,
      icon: "gear",
      title: "",
      cardDesc:
        "A high degree of accuracy and consistency in business operations.",
    },
    {
      _id: 2,
      icon: "diamond",
      title: "",
      cardDesc:
        "Informed decision-making by extracting valuable insights and identifying patterns, correlation and trends.",
    },
    {
      _id: 3,
      icon: "eyeGear",
      title: "",
      cardDesc:
        "Real-time problem-solving capabilities enables rapid identification and resolution of issues, minimizing disruptions and ensuring uninterrupted business operations.",
    },
    {
      _id: 4,
      icon: "gear",
      title: "",
      cardDesc:
        "Automation of repetitive tasks, resulting in increased operational efficiency and productivity.",
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
        title="Cognitive Intelligent Solutions to Charge Your Business Value Chain with Ease"
        desc="Our core emphasis is on advantageous business outcomes through our business grade intelligent competency while concurrently optimizing business performance."
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* Section Nav */}
      <>
        <SectionNav
          arr={[
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
          ]}
        />
      </>

      {/* About Section */}
      <>
        <>
          <div className={` w-full bg-[#FFF] pt-32`}>
            <div className="   pb-0   grid grid-cols-1 gap-5 sm:grid-cols-2 text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]">
              {/* left */}
              <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                    Advance Solutions for Business Future Readiness
                  </h3>
                </div>
              </div>
              {/* right */}
              <div>
                <div>
                  <p className="font-normal leading-[22px] md:w-[90%] ">
                    Starting precisely where you stand in your digital
                    transformation journey, we seamlessly integrate our teams
                    into your culture, fostering a collaborative environment for
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div
            className={` ${styles["bg-img"]} w-full pt-48 pb-12 `}
            id="productivity"
          >
            <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  p-5">
              {AdvancedSolutions.map((item, index) => {
                return (
                  <div
                    key={item._id}
                    className="mx-2 w-fit md:w-1/3 bg-white flex flex-col justify-between "
                  >
                    <div className="p-5 w-fit ">
                      <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                        {item.title}
                      </h4>
                      <p className="text-[14px] leading-[22px] text-[#101828]">
                        {item.desc}
                      </p>
                    </div>
                    <div className=" w-full bg-[#0745D3] p-5">
                      <Link
                        href={item.link}
                        className="text-white  flex transition-all hover:opacity-75  "
                      >
                        {item.cta}{" "}
                        <Icon
                          path={mdiArrowRight}
                          style={{ marginLeft: "0.5em" }}
                          size={1}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </>

      {/* Blog */}
      <BlogSlider arr={blogData} />

      <Benefits
        ribbon="Business Benefits "
        ribbonTxtWhite="true"
        title="Intelli-Tech Advantages of Transforming Business Landscape"
        desc=""
        arr={BenefitsData}
      ></Benefits>

      {/* SME  */}
      {/* <SME
        imgSrc="/SME-Biju.png"
        ribbon="Introducing our Intelligent Solutions Leader  "
        desc="The immense potential of automation plays a pivotal role in sculpting the future of enterprises and empower us to solve the most intricate challenges, thus laying the cornerstone for further revolutionary advancements."
        sme="Avinash Hegde"
        designation="Enterprise Head, Godrej Infotech"
      /> */}

      {/* Why Infotech */}

      <WhySection
        title="Why Choose Godrej Infotech as your preferred innovation partner?"
        desc="We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators."
        ribbon="Let's Collaborate and Make it Happen"
        arr={[
          {
            _id: 1,
            desc: "One of the most dedicated and <span style='color: #4C6FFF;'>reliable partners</span> for Azure Migration Services and Managed Cloud Service across",
            icon: "",
          },
          {
            _id: 2,
            desc: "<span style='color: #4C6FFF;'>1 Billion+</span> Unfailing Cloud Hosting availability managing <span style='color: #4C6FFF;'>40000+</span> VMs",
            icon: "",
          },
          {
            _id: 3,
            desc: "<span style='color: #4C6FFF;'>25000+</span> Apps and Databases migrated",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

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
      {/* Stats TO BE CREATED */}
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

      {/* Subscription */}
      <Subscription
        title="Tap the faster and simpler way for futuristic seamless business experiences"
        desc="Let's discuss how intelligent technologies can help you with rapid growth"
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
