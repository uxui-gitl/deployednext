"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import {
  mdiArrowRight,
  mdiArrowTopRight,
  mdiBullseyeArrow,
  mdiDomain,
} from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import Testimonial from "@/sections/testimonial/Testimonial";

import inforCloudSuite from "../../../../public/inforCloudSuite.png";
import Testimonials from "@/sections/testimonial/Testimonial";
import puzzle from "../../../../public/upgradeCloud/puzzle.png";

import Dynamic365 from "../../../../public/Dynamic365.png";
import Oracle from "../../../../public/Oracle.png";
import checkout from "../../../../public/checkout.png";
import MLExpertise from "../../../../public/MLExpertise.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import { AnimatePresence, motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import SpotlightLogoGrid from "@/components/SpotlightLogoGrid";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Benefits from "@/components/Benefits";
import Capabilities from "@/components/Capabilities";
import Expertise from "@/components/Expertise";
import clsx from "clsx";
import { NewTestimonial, OfferingsSlider } from "@/components";
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
const UseCases = [
  {
    _id: 1,
    title: "Consulting ",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Implementation & Rollout",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Upgrade & Migration",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Development & Customization",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 5,
    title: "Training Workshop",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 6,
    title: "Managed Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 7,
    title: "Legacy Modernization",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 8,
    title: "Bespoke Applications",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 9,
    title: "License sales and services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 10,
    title: "Data Insights",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
];
const AIOfferings = [
  {
    _id: 1,
    title: "Automation",
    desc: " ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#E4F8ED",
    btnTheme: "#4F9D73",
    links: [
      {
        title: "Project Monitoring Tools ",
        url: "/",
      },
      {
        title: "Augmented Intelligence ",
        url: "/",
      },
      {
        title: "Budgeting and Forecasting ",
        url: "/",
      },
      {
        title: "Data Driven Analytics ",
        url: "/",
      },

      {
        title: "Quality Control Analysis  ",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Cloud",
    desc: "  ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#EDF1FF",
    btnTheme: "#0745D3",
    links: [
      {
        title: "M365 ",
        url: "/",
      },
      {
        title: "Cloud Consulting",
        url: "/",
      },
      {
        title: "Upgrade/Migrate to cloud",
        url: "/",
      },
      {
        title: "ERP on cloud",
        url: "/",
      },
      {
        title: "Iot Data management in Cloud",
        url: "/",
      },
      {
        title: "DevOps",
        url: "/",
      },
      {
        title: "Cloud Security Solutions for Mfg.",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    title: "Transformation",
    desc: " ",
    cta: "Explore Service",
    ctaUrl: "/",
    theme: "#FFF8E5",
    btnTheme: "#D4A73B",
    links: [
      {
        title: "Architecture Designing  ",
        url: "/",
      },
      {
        title: "Hierarchy Management ",
        url: "/",
      },
      {
        title: "Process Optimization ",
        url: "/",
      },
      {
        title: "Stakeholder work/ role assignment ",
        url: "/",
      },
      {
        title: "Multiple invoicing modes",
        url: "/",
      },
      {
        title: "Customer Experience - CRM and Ecommerce ",
        url: "/",
      },
    ],
  },
];

const BenefitsData = [
  {
    _id: 1,
    icon: "benefits-ai-ml/process-analyse",
    cardDesc:
      "Process and analyse vast volumes of data and round-the-clock assistance to customers",
  },
  {
    _id: 2,
    icon: "benefits-ai-ml/anticipate-future",
    cardDesc:
      "Anticipate future outcomes based on historical data, making informed decisions",
  },
  {
    _id: 3,
    icon: "benefits-ai-ml/effortless-communicate",
    cardDesc:
      "Effortless communication and efficient information retrieval through Natural Language Processing ",
  },
  {
    _id: 4,
    icon: "benefits-ai-ml/optimise-supply-chain",
    cardDesc:
      "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity ",
  },
];

const page = () => {
  return (
    <>
      <EntIntro
        title="Revolutionizing Megaprojects with Advanced IT Services"
        desc="Leading Your Success Way with Intelligent and Futuristic
        Business Solutions"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <>
        <SectionNav
          // Challenges
          // Solutions
          // Capabilities
          // Offerings

          arr={[
            {
              _id: 1,
              title: "Challenges",
              link: "#Challenges",
            },
            {
              _id: 2,
              title: "Solutions",
              link: "#Solutions",
            },
            {
              _id: 3,
              title: "Capabilities",
              link: "#Capabilities",
            },
            {
              _id: 4,
              title: "Offerings",
              link: "#Offerings",
            },
          ]}
        />
      </>
      {/* Overview  */}
      <>
        <div className={` w-full bg-[#F2F4F7] text-[#101828]`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl   mx-auto p-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-1">
            {/* left */}
            <div className=" flex items-start flex-col justify-start mt-10  relative">
              <div className="">
                <h4
                  className={` text-[16px] font-medium text-[#0745D3] uppercase ribbon mb-4`}
                >
                  Projects
                </h4>
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Overview
                </h3>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  By harnessing the power of data analytics, machine learning,
                  and artificial intelligence, our advanced IT services empower
                  project stakeholders with valuable insights. These insights
                  facilitate informed decision-making, enabling teams to
                  proactively address risks and capitalize on opportunities. The
                  result is a catalytic boost in efficiency, significantly
                  reducing project timelines and costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Challengers Para */}
      <>
        <div id="Challenges" className={` w-full bg-white pb-20`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col md:flex-row gap-x-10">
                  <h3 className="text-4xl leading-[42px] font-bold">
                    Challenges Encountered by Businesses
                  </h3>
                  <p>
                    We offer strategic insights, specialized knowledge and
                    experience in helping businesses adapt, grow and thrive.
                  </p>
                </div>
              </div>
            </div>
          </>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="bg-white flex items-start flex-col justify-start">
              <div className="mx-auto">
                <Image src={puzzle} alt="puzzle" />
              </div>
            </div>
            <div>
              <div>
                <ul>
                  {lists.map((list) => (
                    <li key={list.id}>
                      {" "}
                      <p className="flex gap-4 mb-6 border-dashed border-b-2 pb-3 text-base leading-[22px]">
                        <span className="">
                          <Icon
                            path={mdiBullseyeArrow}
                            color="dodgerblue"
                            size={1}
                          />
                        </span>
                        {list.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Our Ai Offerings - our solutions */}
      <>
        <div id="Solutions" className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                  GITL Project Solutions Portfolio
                </h4>
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our Offerings
                </h3>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Holistic and future- ready solutions to re-engineer your
                  business with our proven implementation methodologies for
                  maximum Return on Investment (RoI)
                </p>
              </div>
            </div>
          </div>
          <div className="text-left w-full bg-amber-100 mb-5 mx-auto   grid grid-cols-1 md:grid-cols-3">
            {AIOfferings.map((item, index) => (
              <div
                className={`bg-[${item.theme}] py-10 sm:py-20 px-8 sm:px-24`}
                key={item._id}
                style={{ backgroundColor: item.theme }}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                      {item.title}
                    </p>
                    <p className="text-[#101828] text-[12px] font-normal my-4 leading-[18px]">
                      {item.desc}
                    </p>
                  </div>
                  <div>
                    <ul className="my-8">
                      {item.links.map((list, index) => (
                        <li
                          key={index}
                          className=" border-b-[1px] last:border-b-[0px] w-fit border-[#DBDBDB] py-2 "
                        >
                          <Link
                            href={list.url}
                            className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                          >
                            {list.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={item.ctaUrl}>
                      <div
                        className={`text-[#fff] text-[14px] font-medium leading-[22px] w-fit py-2 px-8 flex transition-all hover:opacity-75`}
                        style={{ backgroundColor: item.btnTheme }}
                      >
                        {item.cta}{" "}
                        <Icon
                          path={mdiArrowTopRight}
                          style={{ marginLeft: "0.5em" }}
                          size={1}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>

      {/* Our Capabilities */}
      <div id="Capabilities">
        <Capabilities
          ribbon=" "
          title="Our Capabilities "
          desc="With expertise in project execution, technology implementation and risk mitigation, our capabilities empower the success of mega projects"
        />
      </div>

      {/* 3 column - Segment we serve */}
      <>
        <div id="Offerings">
          <OfferingsSlider
            title="The healthcare segment we serve"
            alignHorizontal="left"
            cardColor="#FFF"
            desc="With expertise in project execution, technology implementation and risk mitigation, our capabilities empower the success of mega projects"
            arr={[
              /*One*/
              {
                _id: 1,
                title: "Business Consulting",
                desc: "",
                cta: "Explore Service",
                subArrLinks: [],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Cybersecurity roadmap development",
                    url: "/",
                  },
                  {
                    title:
                      "Assessment services against cyber security frameworks & standards",
                    url: "/",
                  },
                ],
              },
              {
                _id: 2,
                title: "Business Consulting",
                desc: "",
                cta: "Explore Service",
                subArrLinks: [],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Cybersecurity roadmap development",
                    url: "/",
                  },
                  {
                    title:
                      "Assessment services against cyber security frameworks & standards",
                    url: "/",
                  },
                ],
              },
              {
                _id: 3,
                title: "Business Consulting",
                desc: "",
                cta: "Explore Service",
                subArrLinks: [],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Cybersecurity roadmap development",
                    url: "/",
                  },
                  {
                    title:
                      "Assessment services against cyber security frameworks & standards",
                    url: "/",
                  },
                ],
              },
              {
                _id: 4,
                title: "Business Consulting",
                desc: "",
                cta: "Explore Service",
                subArrLinks: [],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Cybersecurity roadmap development",
                    url: "/",
                  },
                  {
                    title:
                      "Assessment services against cyber security frameworks & standards",
                    url: "/",
                  },
                ],
              },
            ]}
          />
        </div>
      </>

      {/* Benefits */}
      <Benefits
        ribbon="Benefits "
        ribbonTxtWhite="true"
        title=""
        desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes, offering multiple benefits that redefine the way you do business."
        arr={BenefitsData}
      ></Benefits>

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

      {/* Microsoft Services */}
      <>
        <div
          className={`bg-ms-practise w-full  bg-[#F2F4F7]  py-32  `}
          id="productivity"
        >
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="  flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                    Microsoft Services
                  </h3>
                </div>
                <div>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    Our comprehensive Microsoft services includes everything
                    that business requires to effectively digitize business
                    operations and customer relationship management.
                  </p>
                </div>
              </div>
              {/* right */}
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl md:max-w-screen-xl flex flex-col sm:flex-row gap-y-5 justify-center text-left  mb-5 mx-auto  p-5">
            <Swiper
              slidesPerView={"auto"}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className=" flex-grow"
            >
              {UseCases.map((item, index) => {
                return (
                  <SwiperSlide
                    style={{ height: "auto" }}
                    key={item._id}
                    className="sm:w-full md:w-1/4 bg-white flex flex-col justify-between  mr-4  relative group"
                  >
                    <div
                      key={item._id}
                      className=" mx-2  w-fit flex flex-col justify-between"
                    >
                      <div className="p-5 w-fit ">
                        <div className="mb-4">
                          {item.icon !== "" ? (
                            <Image
                              src={`/icon/${item.icon}.svg`}
                              width="48"
                              height="48"
                              alt={item.icon}
                            />
                          ) : (
                            <Icon path={mdiDomain} size={3} />
                          )}
                        </div>
                        <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                          {item.title}
                        </h4>
                      </div>
                      <div
                        className={clsx("w-full bg-[#0745D3] p-5", {
                          hidden: item.link === "/" || item.link === "",
                        })}
                      >
                        <Link
                          href={item.link}
                          className={
                            "text-white flex transition-all hover:opacity-75"
                          }
                        >
                          {item.cta}
                          <Icon
                            path={mdiArrowRight}
                            style={{ marginLeft: "0.5em" }}
                            size={1}
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </>

      {/* ML Expertise */}
      <div className="hidden">
        <>
          <div className={` w-full bg-[#F2F4F7] py-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
              <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 sm:grid-cols-2 relative">
                <div className="">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                    ML Expertise
                  </h3>
                </div>
                <div>
                  <p className="font-medium leading-[22px] ">
                    We specialize in developing algorithms to make your
                    operations smarter, faster and more reliable
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
              {[0, 1, 2, 3].map((item, index) => (
                <div className="" key={index}>
                  <Image
                    src={MLExpertise}
                    className="w-[100%]"
                    alt="ML Expertise"
                  />
                  <div className="p-4 pb-0">
                    <p className="text-[#101828] font-medium text-base leading-[22px]">
                      Deep Learning
                    </p>
                    <p className="text-[#475467] text-[14px] font-normal my-4 leading-[22px]">
                      Our deep learning expertise is about making data come to
                      life. We use these cutting-edge practices to create
                      solutions that automate complex tasks data-driven
                    </p>
                    <Link
                      href={"/"}
                      className="text-[#0745D3] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                    >
                      Know More{" "}
                      <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </div>

      {/* Casestudy */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="Delivering Results that Matters "
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions across the spectrum of industries. "
        isHomepage={false}
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
      {/* Our Partners */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our Partners
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  We are your trusted RPA partner, and our experience extends to
                  industry-leading RPA platforms and expertise to customize
                  solutions that fulfil your exclusive business needs
                </p>
              </div>
              <div className="flex justify-center items-center gap-20">
                <div>
                  <Image src={inforCloudSuite} alt="Infor" />
                </div>
                <div>
                  <Image src={Oracle} alt="Infor" />
                </div>
                <div>
                  <Image src={Dynamic365} alt="Infor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Industry Spotlight Slider */}

      {/* Testimonials */}
      <NewTestimonial
        ribbon="Testimonials"
        ribbonVisible={false}
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
          {
            id: 2,
            clientName: "",
            clientDesignation:
              "Director of Finance, Wildlife Conservation International NGO based in India",
            thumbnail: "1",
            description:
              "We're delighted with the successful D365 implementation executed by talented GITL team. Their collaboration with our team was seamless, ensuring timely delivery. They have dedicated significant effort to grasp our distinctive needs, reinforcing our satisfaction.",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation:
              "Project Manager, Investment Holding Company in Riyadh & Dubai",
            thumbnail: "1",
            description:
              "Congratulations to GITL team for successful go-live of Microsoft Business Central SAAS and KSA GITL Add-on HR & Payroll Solution. The key achievement was the seamless integration between Business Central and bio-time attendance machine. Our material requisition efficiency has improved by 66%, purchase order processing time is cut down by 79% and boosted invoicing productivity by 60%.",
            category: "static",
            link: "/",
          },
        ]}
      />
      {/* Subscription */}
      <Subscription
        title="Ready for Transformation with"
        blue="AI and ML?"
        title2=""
        desc="Let's embark on your journey together aligned with your business goals."
      />
    </>
  );
};

export default page;
