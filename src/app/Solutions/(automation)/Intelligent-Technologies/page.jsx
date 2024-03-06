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

/**
 * * Sandeep Rana
 * * 05/09/2022
 * Icons
 */

import AutomationRepetitiveTasks from "../../../../../public/icon/benefisIntelligentTechnologies/AutomationRepetitiveTasks.svg";
import HighDegreeAccuracyConsistency from "../../../../../public/icon/benefisIntelligentTechnologies/highDegreeAccuracyConsistency.svg";
import InformedDecisionMaking from "../../../../../public/icon/benefisIntelligentTechnologies/InformedDecisionmaking.svg";
import RealTimeProblemSolvingCapabilities from "../../../../../public/icon/benefisIntelligentTechnologies/RealTimeProblemSolvingCapabilities.svg";

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
import Abstract from "@/components/Abstract";

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
      title:
        "Digitalization with Infor Coleman Artificial Intelligence & Machine Learning",
      desc: "Many of the organizations we work with today are looking for ways to optimize business processes, reduce manual work, and enhance customer service by using best-of-breed digital technologies that promise a speedy ROI. Having worked with Infor solutions for many years now, I see that Infor too has evolved its applications by introducing artificial intelligence & machine learning features to meet the needs of these organizations. Let’s take a closer look at these exciting features in Infor Coleman and how organizations can benefit from them.",
      cta: "Read More",
      link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=18",
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
      desc: "Our ability in constructing, training, and deploying ML models assures an effective implementation process.",
      cta: "Know More",
      link: "Solutions/Intelligent-Technologies/AI-ML",
    },
    {
      _id: 2,
      title: "Artificial Intelligence ",
      desc: "Improvement in customer experiences, facilitating acceleration and optimized business operations.",
      cta: "Know More",
      link: "Solutions/Intelligent-Technologies/AI-ML",
    },
    {
      _id: 3,
      title: "Robotic Process Automation",
      desc: "Dedicate more time to strategic initiatives, enhance productivity and minimize the time-consuming repetitive tasks.",
      cta: "Know More",
      link: "Solutions/Intelligent-Technologies/RPA",
    },
  ];

  const BenefitsData = [
    {
      _id: 1,
      icon: "benefisIntelligentTechnologies/AutomationRepetitiveTasks",
      title: "",
      cardDesc:
        "Automation of repetitive tasks, resulting in increased operational efficiency and productivity. ",
    },
    {
      _id: 2,
      icon: "benefisIntelligentTechnologies/RealTimeProblemSolvingCapabilities",
      title: "",
      cardDesc:
        "Real-time problem-solving capabilities enables rapid identification and resolution of issues, minimizing disruptions and ensuring uninterrupted business operations.",
    },
    {
      _id: 3,
      icon: "benefisIntelligentTechnologies/InformedDecisionmaking",
      title: "",
      cardDesc:
        "Informed decision-making by extracting valuable insights and identifying patterns, correlation, and trends.",
    },
    {
      _id: 4,
      icon: "benefisIntelligentTechnologies/highDegreeAccuracyConsistency",
      title: "",
      cardDesc:
        "A high degree of accuracy and consistency in business operations.",
    },
  ];

  const navLinks = [
    {
      _id: 1,
      title: "Enterprise Suite",
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
        title="Cognitive Intelligent Solutions to Charge Your Business Value Chain with Ease "
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* Section Nav */}
      <>
        <SectionNav
          // Solutions
          // Benefits
          // Why Us

          arr={[
            {
              _id: 1,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 2,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 3,
              title: "Why Us",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="Our primary goal is to realize positive business outcomes by harnessing our business-grade intelligent capabilities while concurrently optimizing overall business performance. We prioritize achieving positive results through the application of advanced competencies, ensuring strategic alignment with our clients' business objectives. Intelligent Technologies drive transformative innovations, utilizing AI, ML, and IoT to optimize processes, enhance decision-making, and propel businesses into a future of efficiency and agility."></Abstract>

      {/* About Section */}
      <>
        {/* <>
          <div className={` w-full bg-[#FFF] py-24`}>
            <div className="   pb-0   grid grid-cols-1 gap-5 sm:grid-cols-2 text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]">
              {/* left *}
              <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                    Advance Solutions for Business Future Readiness
                  </h3>
                </div>
              </div>
              {/* right *}
              <div>
                <div>
                  <p className="font-normal leading-[22px] md:w-[90%] ">
                    Embrace the future and stay ahead in digital era, harnessing
                    the potential of innovative technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </> */}
        <>
          <div
            className={` ${styles["bg-img"]} w-full pt-32 pb-12 mt-32`}
            id="Solutions"
          >
            <div className="text-left text-white max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
              <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                Advance Solutions for Business Future Readiness
              </h3>
            </div>

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
        title="Why Godrej Infotech?"
        desc="Experience the positive impact on your business growth being at the forefront of innovative technologies."
        ribbon="Let Us Collaborate and Make it Happen"
        arr={[
          {
            _id: 1,
            desc: "Enable intelligence-driven automation across diverse use cases",
            icon: "",
          },
          {
            _id: 2,

            desc: "Drive rapid and substantial improvements in return on investment (ROI) ",

            icon: "",
          },
          {
            _id: 3,
            desc: "Help businesses achieve high productivity",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Expertise */}
      {/* <Expertise
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
      ></Expertise> */}
      {/* Stats TO BE CREATED */}
      {/* Testimonial */}
      {/* <Testimonial
        ribbon="Testimonials "
        title="Delighted Customers share their Experiences"
        desc="Discover how we have helped our customers to realize tangible outcomes aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "Leading Cooling Services Provider in the Middle East",
            clientDesignation: "IT Manager",
            thumbnail: "1",
            description:
              "We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with excellent quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
            category: "static",
            link: "/",
          },
        ]}
      /> */}

      {/* Subscription */}
      <Subscription
        title="Tap the intelligent way for futuristic seamless business experience"
        desc="Let us discuss how intelligent technologies can help you with rapid growth."
      />
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
