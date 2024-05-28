"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import shield from "../../../../../public/upgradeCloud/sheild.png";
import Expertise from "@/components/Expertise";
import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import { mdiCheckboxMultipleMarked } from "@mdi/js";

import inforCloudSuite from "../../../../../public/inforCloudSuite.png";
import Dynamic365 from "../../../../../public/Dynamic365.png";
import Oracle from "../../../../../public/Oracle.png";
import Azure from "../../../../../public/azure.png";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import NumberGrid from "@/components/NumberGrid";
import RPAPlaceholder from "../../../../../public/RPAPlaceholder.png";

import MLExpertise from "../../../../../public/MLExpertise.png";

import scalable1 from "../../../../../public/scalable1.png";
import scalable2 from "../../../../../public/scalable2.png";
import scalable3 from "../../../../../public/scalable3.png";
import scalable4 from "../../../../../public/scalable4.png";
import scalable5 from "../../../../../public/scalable5.png";
import scalable6 from "../../../../../public/scalable6.png";
import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { AnimatePresence, motion } from "framer-motion";
import IndustryExpertise from "@/components/IndustryExpertise";
import OfferingsSlider from "@/components/OfferingsSlider";
import Abstract from "@/components/Abstract";
import BlogSlider from "@/components/BlogSlider";
import Accordion from "@/components/Accordion";
import Infographics from "@/components/Infographics";
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

const blogData = [
  {
    _id: 1,
    ribbon: "blog",
    title: "Strengthen Your Business Armor with Cyber-Resilience Strategy",
    desc: "Businesses are continuously navigating the complex web of technology, where the ever-present threats of cyber-attacks and cybersecurity vulnerabilities loom large. Today, we delve into the critical facets of cyber resilience, emphasizing the importance of a disaster recovery plan, robust cybersecurity measures, and a comprehensive understanding of cyber-attacks and cybersecurity threats. Let's explore how concepts is key to fortifying your business against the evolving challenges of the digital realm.",
    cta: "Read More",
    link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=18",
    imgUrl: "",
  },
];

const RPAServiceOfferings = [
  {
    _id: 1,
    title: "Deep Learning",
    desc: "Our deep learning expertise is about making data come to life. We use these cutting-edge practices to create solutions that automate complex tasks data-driven",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
  {
    _id: 2,
    title: "Feasibility Check Services ",
    desc: "A comprehensive platform for restaurants, pubs, cafes, food-halls and other food service businesses to manage everything from tableside ordering to inventory, kitchen operations and more",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
  {
    _id: 3,
    title: "RPA Deployment ",
    desc: "A seamlessly integrated cloud-based platform designed to optimize the management of retail enterprise and enhance the performance of individual store locations",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
  {
    _id: 4,
    title: "RPA Managed Services ",
    desc: "A comprehensive platform for restaurants, pubs, cafes, food-halls and other food service businesses to manage everything from tableside ordering to inventory, kitchen operations and more",
    cta: "Know More",
    ctaUrl: "/",
    image: "MLExpertise",
  },
];

const ConsiderRPA = [
  {
    _id: 1,
    title: "Extensive Customization",
    desc: "Comprehensive customization options that are tailored to explicit demands, workflows and processes, delivering a more competent and personalized CRM experience",
    cta: "Know More",
    ctaUrl: "/",
  },
  {
    _id: 2,
    title: "Effortless Integration",
    desc: " Seamless integration capability with Microsoft Outlook and Infor CloudSuite ERP systems, facilitating organizations to have an integrated view of customer information, minimizing data silos and augmenting collaboration through distinct structures",
    cta: "Know More",
    ctaUrl: "/",
  },
];

const UseCases = [
  {
    _id: 1,
    title: "Incident Management Tickets ",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 2,
    title: "Employee Access Creation ",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 3,
    title: "Workflow Automation",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 4,
    title: "Document Management",
    cta: "Know More",
    link: "/",
  },
  {
    _id: 5,
    title: "Team and Territory Management",
    cta: "Know More",
    link: "/",
  },
];

const IndustryExperts = [
  {
    _id: 1,
    title: "Manufacturing",
    image: "manufacturing",
  },
  {
    _id: 2,
    title: "Accounts and Finance",
    image: "finance",
  },
  {
    _id: 3,
    title: "HR",
    image: "hr",
  },
  {
    _id: 4,
    title: "IT Infra",
    image: "itinfra",
  },
];

const RPACards = [
  {
    _id: 1,
    title: "Infrastructure Setup ",
    keyword: "Enable",
    color: "#032573",
    bgcolor1: "#7491D4",
    bgcolor2: "#EDF1FF",
    bgcolor3: "#0745D3",
    icon: "scalable1",
  },
  {
    _id: 2,
    title: "Project Governance ",
    keyword: "Prepare",
    color: "#806113",
    bgcolor1: "#F5D687",
    bgcolor2: "#FFF8E5",
    bgcolor3: "#F4C447",
    icon: "scalable2",
  },
  {
    _id: 3,
    title: "Workflow Design ",
    keyword: "Design",
    color: "#224D37",
    bgcolor1: "#6D917F",
    bgcolor2: "#E5F8EE",
    bgcolor3: "#429268",
    icon: "scalable3",
  },
  {
    _id: 4,
    title: "Workflow  Development ",
    keyword: "Build",
    color: "#4E6EF2",
    bgcolor1: "#8CA3FF",
    bgcolor2: "#EDF1FF",
    bgcolor3: "#4C6FFF",
    icon: "scalable4",
  },
  {
    _id: 5,
    title: "Quality  Assurance ",
    keyword: "Sustain",
    color: "#732822",
    bgcolor1: "#B56964",
    bgcolor2: "#FEEDED",
    bgcolor3: "#B42318",
    icon: "scalable6",
  },
  {
    _id: 6,
    title: "Hyper Care ",
    keyword: "Sustain",
    color: "#DDDDDE",
    bgcolor1: "#575D66",
    bgcolor2: "#F5F5F5",
    bgcolor3: "#475467",
    icon: "scalable6",
  },
];
const ChoiceSlider = [
  {
    _id: 1,
    title: "Healthcare",
    imgUrl: "1",
    url: "/",
  },
  {
    _id: 2,
    title: "Automotive",
    imgUrl: "2",
    url: "/",
  },
  {
    _id: 3,
    title: "Logistic",
    imgUrl: "3",
    url: "/",
  },
  {
    _id: 4,
    title: "Retail",
    imgUrl: "4",
    url: "/",
  },
];
const OfferingsSliderData = [
  {
    _id: 1,
    title: "Computer Vision ",
    subArr: true,
    image: "OfferingsSlider.png",
    desc: "We specialize in custom video and image analysis tool development for computer vision and machine vision systems. Our expert team leverages advanced technologies like OpenCV to optimize existing computer vision algorithms or develop entirely new algorithms based on mathematical models ",
    cta: "Explore Service",
    ctaUrl: "/",
    subArrLinks: [
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
      // Add more items as needed
    ],
    links: [
      {
        title: "Links Real-time Object Detection",
        url: "/",
      },
      {
        title: "Data Labelling",
        url: "/",
      },
      {
        title: "Security Solution",
        url: "/",
      },
      {
        title: "Equipment Monitoring",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Speech &  Language ",
    desc: "Our reliable approach to Speech and Language AI empowers your business with the tools needed to elevate customer experiences, streamline operations and stand tall in competition ",
    subArr: true,
    subArrLinks: [
      {
        title: "Perimeter Security ",
        links: [
          {
            title: "Next Generation Firewall (NGFW) ",
            url: "/",
          },
          {
            title: "Next Generation Firewall (NGFW) ",
            url: "/",
          },
          {
            title: "Next Generation Firewall (NGFW) ",
            url: "/",
          },
          {
            title: "Next Generation Firewall (NGFW) ",
            url: "/",
          },
          {
            title: "Next Generation Firewall (NGFW) ",
            url: "/",
          },
        ],
      },
      {
        title: "Web Security Gateways ",
        links: [
          {
            title: "Network Security  ",
            url: "/",
          },
        ],
      },
    ],
    cta: "Explore Service",
    image: "OfferingsSlider.png",
    ctaUrl: "/",
    links: [
      {
        title: "Transcription Services",
        url: "/",
      },
      {
        title: "Speech recognition",
        url: "/",
      },
      {
        title: "Language translation",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    title: "Document  Understanding",
    desc: "We help you to achieve error-free AI-driven data capture from diverse document types, including invoices, receipts, driver's licenses, passports, and more. Our approach helps your business with unstructured data, whether it's in the form of text documents, images, voice or videos",
    cta: "Explore Service",
    subArrLinks: [],
    image: "OfferingsSlider.png",
    subArr: false,
    ctaUrl: "/",
    links: [
      {
        title: "Optical Character Recognition (OCR)",
        url: "/",
      },
      {
        title: "Text extraction",
        url: "/",
      },
      {
        title: "Optical Character Recognition - PDF",
        url: "/",
      },
      {
        title: "AP Automation ",
        url: "/",
      },
    ],
  },

  {
    _id: 4,
    title: "Conversational AI",
    desc: "Ensuring your engagement with data more human-centric we offer solutions that helps you with smarter and customer-centric decision-making.",
    cta: "Explore Service",
    image: "OfferingsSlider.png",
    subArrLinks: [],
    subArr: false,
    ctaUrl: "/",
    links: [
      {
        title: "Document processing",
        url: "/",
      },
      {
        title: "Sentiment analysis",
        url: "/",
      },
      {
        title: "Chatbots and Virtual Assistants",
        url: "/",
      },
    ],
  },
  {
    _id: 5,
    title: "Conversational AI",
    desc: "Ensuring your engagement with data more human-centric we offer solutions that helps you with smarter and customer-centric decision-making.",
    cta: "Explore Service",
    image: "OfferingsSlider.png",
    subArrLinks: [],
    subArr: false,
    ctaUrl: "/",
    links: [
      {
        title: "Document processing",
        url: "/",
      },
      {
        title: "Sentiment analysis",
        url: "/",
      },
      {
        title: "Chatbots and Virtual Assistants",
        url: "/",
      },
    ],
  },
];
const page = () => {
  return (
    <>
      <EntIntro
        title="Leading Digital Protection with Cybersecurity Services"
        desc=""
        cta="Let's Connect"
        width="70%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />

      {/* Section Nav */}
      <>
        <SectionNav
          // Offerings
          // Cybersecurity Suite
          // Our Expertise
          // Use Case

          arr={[
            {
              _id: 1,
              title: "Offerings",
              link: "#Offerings",
            },
            {
              _id: 2,
              title: "Cybersecurity Suite",
              link: "#CybersecuritySuite",
            },
            {
              _id: 3,
              title: "Our Expertise",
              link: "#OurExpertise",
            },
            {
              _id: 4,
              title: "Use Case",
              link: "#UseCases",
            },
          ]}
        />
      </>

      {/* Abstract  */}
      <Abstract abstractdesc="The escalating threat landscape has led to a rising demand for specialized cybersecurity and risk consulting services, specifically designed to fortify global enterprises and enhance their adaptability. Our cybersecurity services are designed around the customer. We offer robust collaboration to understand the challenges of your environment and design tailored secure solutions. Partner with us to effectively safeguard your business's future in this ever-evolving digital landscape."></Abstract>

      {/* Overview */}
      {/* <>
        <div className={` w-full bg-white pt-24`}>
          <div className="text-left   max-w-screen-xl  mb-5 mx-auto p-5 px-[2rem] grid sm:grid-cols-2 grid-cols-1">
            <div className="bg-white flex items-start flex-col justify-start">
              <div>
                <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                  UPGRADE TO CLOUD{""}
                </h4>
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Minimizing Cost and Strengthening Agility with{" "}
                  <span className="text-[#0745D3]"> Better Security</span>{" "}
                </h3>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  We help enterprises to foster resilience by entailing bespoke
                  and inclusive cloud upgradation roadmap. Our cloud experts
                  ensure migration of intricate IT environments to advanced
                  cloud platform without causing any interruption or data loss
                  while providing agility and scalability for sustainable growth
                  of our customers.
                </p>
              </div>
            </div>
            <div>
              <Image src={shield} alt="shield" />
            </div>
          </div>
        </div>
      </> */}

      {/*  Card Slider Offerings */}

      <>
        <div id="Offerings">
          <OfferingsSlider
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
              /*End One*/
              {
                _id: 2,
                title: "Implementation & Management",
                desc: "",
                inline: true,
                subArr: true,
                subArrLinks: [
                  {
                    _id: 1,
                    icon: "gear",
                    title: "Perimeter Security",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "Zero Trust Security",
                        url: "/",
                      },
                      {
                        title: "Secure access service edge (SASE)",
                        url: "/",
                      },
                      {
                        title: "Next Generation Firewall (NGFW)",
                        url: "/",
                      },
                      {
                        title: "Secure Remote Access (VPN)",
                        url: "/",
                      },
                      {
                        title: "Multi Factor Authentication (MFA)",
                        url: "/",
                      },
                      {
                        title: "Distributed Denial of Service (DDoS)",
                        url: "/",
                      },
                      {
                        title: "Web Security Gateways",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 2,
                    icon: "gear",
                    title: "Network Security",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "Next Generation Firewalls",
                        url: "/",
                      },
                      {
                        title: "Unified Threat Management",
                        url: "/",
                      },
                      {
                        title: "Software Defined WAN",
                        url: "/",
                      },
                      {
                        title: "Network Access Control (NAC)",
                        url: "/",
                      },
                      {
                        title: "Deception Technology",
                        url: "/",
                      },
                      {
                        title: "Advanced Persistent Threat (APT)",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 3,
                    icon: "gear",
                    title: "End Point Security",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "Endpoint Protection Suite",
                        url: "/",
                      },
                      {
                        title: "Endpoint Detection Response (EDR)",
                        url: "/",
                      },
                      {
                        title: "Software Asset Management (SAM)",
                        url: "/",
                      },
                      {
                        title: "Patch Management Solutions",
                        url: "/",
                      },
                      {
                        title:
                          "Mobile Device or Application Management (MDM / MAM)",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 4,
                    icon: "gear",
                    title: "Application Security",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "Web Application Security (WAF)",
                        url: "/",
                      },
                      {
                        title: "API Gateways",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 5,
                    icon: "gear",
                    title: "Users",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "Mobile Security",
                        url: "/",
                      },
                      
                      {
                        title: "Management (MDM/ MAM)",
                        url: "/",
                      },
                    ],
                  },
                  {
                    _id: 6,
                    icon: "gear",
                    title: "Data Security",
                    desc: "",
                    cta: "Know More",
                    ctaUrl: "/",
                    list: [
                      {
                        title: "Data Loss Prevention (DLP)",
                        url: "/",
                      },
                      {
                        title: "Privilege Identity Management (PIM)",
                        url: "/",
                      },
                      {
                        title: "Cloud Security",
                        url: "/",
                      },
                      {
                        title: "Disaster Recovery",
                        url: "/",
                      },
                    ],
                  },
                  // Add more items as needed
                ],
                cta: "Explore Service",
                image: "rpa/Cyber-security_Technology-Solutions.jpg",
                ctaUrl: "/",
                links: [
                  {
                    title: "Transcription Services",
                    url: "/",
                  },
                  {
                    title: "Speech recognition",
                    url: "/",
                  },
                  {
                    title: "Language translation",
                    url: "/",
                  },
                ],
              },
              {
                _id: 3,
                title: "Application Security Testing",
                desc: "",
                cta: "Explore Service",
                subArrLinks: [],
                image: "rpa/Application-Security-Testing.jpg",
                inline: true,
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Web application Security testing",
                    url: "/",
                  },
                  {
                    title: "Mobile App Security testing",
                    url: "/",
                  },
                  {
                    title:
                      "Vulnerability Assessment and Penetration Testing (VAPT)",
                    url: "/",
                  },
                ],
              },

              {
                _id: 4,
                title: "vCISO Services",
                desc: "",
                cta: "Explore Service",
                inline: true,
                image: "rpa/Cyber-security_vCISO.jpg",
                subArrLinks: [],
                subArr: false,
                ctaUrl: "/",
                links: [
                  {
                    title: "Strategy",
                    url: "/",
                  },
                  {
                    title: "Risk Management",
                    url: "/",
                  },
                  {
                    title: "Regulatory & Standards compliance",
                    url: "/",
                  },
                  {
                    title: "Policy & procedures",
                    url: "/",
                  },
                  {
                    title: "Security Program",
                    url: "/",
                  },
                  {
                    title: "End user Training",
                    url: "/",
                  },
                ],
              },
            ]}
          />
        </div>
      </>

      {/* Infographics */}
      <>
        <div
          id="CybersecuritySuite"
          className="max-w-screen-xl mx-auto px-[2rem] bg-white"
        >
          <div className=" mt-[5em] mb-[2em]">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
              <h3 className="text-4xl leading-[42px] font-bold">
                Services | Dynamic Cybersecurity
              </h3>
            </div>
          </div>
          <div className="mx-auto text-center w-[75%]">
            <Infographics src="/infographics/Infographic_ServicesDynamic.svg" />
          </div>

          <h3 className="text-4xl leading-[42px] font-bold pt-32 mb-[2em] text-center">
            End to End Business Security with Our Cybersecurity Suite
          </h3>

          <div className="mx-auto text-center w-[75%] mb-20">
            <Infographics src="/infographics/Infographic_EndToEnd.svg" />
          </div>
        </div>
      </>

      {/* Industry Spotlight Slider */}
      {/* <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left *}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industry Expertise
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Being preferred partner of leading industries, we help in
                  shaping specific technology prerequisites and deliver
                  brilliant value driven solutions tailored to your sector
                </p>
              </div>
              <div className="flex justify-center items-center max-w-screen-xl w-full">
                <div>
                  <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {ChoiceSlider.map((item) => (
                      <>
                        <SwiperSlide
                          key={item._id}
                          className="w-[283px] max-w-[283px] mr-4  relative group"
                        >
                          <div className="relative overflow-hidden">
                            <Image
                              src={`/industrySpotlight/${item.imgUrl}.png`}
                              height={350}
                              width={283}
                              alt="icon"
                              className=" transition-transform transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity  ">
                              <h3 className="text-[22px] text-white absolute bottom-4 left-4 w-fit leading-[30px] font-bold mb-5">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </> */}

      {/* AI & ML Partners */}
      {/* <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left /}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our AI/ML Partners
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
      </> */}

      {/* Expertise */}
      <Expertise
        ribbon=""
        ribbonTxtWhite="true"
        title="Hub of Expertise"
        desc="We're here to build an edge and bring technology brilliance with the finest in the industry."
        arr={[
          {
            title: "20 +",
            desc: "Years of Managing Global customer for Data Security",
          },
          {
            title: "100 +",
            desc: "Solutions Implemented",
          },
          {
            title: "20 +",
            desc: "Years of Managing Global customer for Data Security",
          },
        ]}
      ></Expertise>

      {/* Industry Expertise Slider */}
      {/* <IndustryExpertise
        heading="Industry Expertise"
        desc="Being preferred partner of leading industries, we help in
                  shaping specific technology prerequisites and deliver
                  brilliant value driven solutions tailored to your sector"
        list={IndustryExperts}
      /> */}

      {/* Case Study */}
      <BlogSlider arr={blogData} />

      {/* Insert Our Experience number grid */}

      <>
        <div id="UseCases">
          <NumberGrid
            ribbon="Our Experience"
            title="Multiyear Cybersecurity Program for company having"
            desc=""
            arr={[
              {
                _id: 1,
                title: "90+",
                desc: "Geo Location",
                bgColor: "#EDF1FF",
                onlyNumber: false,
              },
              {
                _id: 2,
                title: "10k+",
                desc: "users windows & MAC",
                bgColor: "#EDF1FF",
                onlyNumber: false,
              },
              {
                _id: 3,
                title: "100+",
                desc: "SQL, DB2, Informix, MySQL",
                bgColor: "#EDF1FF",
                onlyNumber: true,
              },
              {
                _id: 4,
                title: "1k+",
                desc: "AWS & Azure",
                bgColor: "#EDF1FF",
                onlyNumber: true,
              },
              {
                _id: 5,
                title: "100+",
                desc: "MPLS and Internet gateways",
                bgColor: "#EDF1FF",
                onlyNumber: false,
              },
              {
                _id: 6,
                title: "1k+",
                desc: "Server Windows, Linux",
                bgColor: "#EDF1FF",
                onlyNumber: false,
              },
            ]}
          />
        </div>
      </>

      {/* Subscription */}
      <Subscription
        title="Let Us Transform Your"
        blue="Vision into Reality"
        title2=""
        desc="Complete the Form to Begin"
      />

      {/* Infotech Weekly Updates */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
