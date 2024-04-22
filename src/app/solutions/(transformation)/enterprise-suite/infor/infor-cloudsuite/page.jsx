"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../../../public/icon.png";
import microsoft from "../../../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../../public/upgradeCloud/cloudArrows.png";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../../public/Power-App.png";
import Birst from "../../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../../public/dummy.png";
import Testimonial from "@/sections/testimonial/Testimonial";

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import Benefits from "@/components/Benefits";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";
import MinimizeOperationalExpenses from "../../../../../../../public/icon/Benefits-upgradeCloud/MinimizeOperationalExpenses.svg";
import EnableUserConcurrency from "../../../../../../../public/icon/Benefits-upgradeCloud/EnableUserConcurrency.svg";
import EnhancedCollaboration from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhancedCollaboration.svg";
import AdvancedDataManagement from "../../../../../../../public/icon/Benefits-upgradeCloud/AdvancedDataManagement.svg";
import AptitudeToRespond from "../../../../../../../public/icon/Benefits-upgradeCloud/AptitudeToRespond.svg";
import IntegrateBigDataAnalytics from "../../../../../../../public/icon/Benefits-upgradeCloud/IntegrateBigDataAnalytics.svg";
import SecurelyStores from "../../../../../../../public/icon/Benefits-upgradeCloud/SecurelyStores.svg";
import EnhanceSystemPerformance from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhanceSystemPerformance.svg";
import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import Testimonials from "@/sections/testimonial/Testimonial";
import OfferingsSlider from "@/components/OfferingsSlider";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import InsightSlider from "@/components/InsightSlider";
import { NewTestimonial } from "@/components";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Abstract from "@/components/Abstract";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const UseCases = [
  {
    _id: 1,
    title: "Consulting",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 2,
    title: "Implementation",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 3,
    title: "Managed Services",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
  {
    _id: 4,
    title: "Migration and Upgrade",
    cta: "Know More",
    link: "/",
    icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
  },
];
const smartTools = [
  {
    _id: 1,
    type: "box",
    title: "Infor CRM",
    theme: "light",
    bg: "transparent",
    desc: "With Power BI integration - a highly scalable analytics platform that accommodates both individual users",
    icon: "Power-BI-Logo.png",
    cta: "Know More",
  },
  {
    _id: 2,
    type: "box",
    title: "Microsoft CRM",
    theme: "dark",
    bg: "#4C6FFF",
    desc: "We help you to efficiently develop low-code applications in a fraction of the time with Power Apps",
    icon: "Power-App.png",
    cta: "Know More",
  },
  {
    _id: 3,
    type: "box",
    title: "Salesforce ",
    theme: "dark",
    bg: "#07001F",
    desc: "The aim is to facilitate faster decision-making with the tools and flexibility to implement new insight",
    icon: "Birst-logo.png",
    cta: "Know More",
  },
  {
    _id: 4,
    type: "box",
    title: "Magento",
    theme: "dark",
    bg: "transparent",
    desc: "Extracting insights from tapped and  untapped data assets, we help you understand customer behaviour",
    icon: "dummy.png",
    cta: "Know More",
  },
  {
    _id: 5,
    type: "box",
    title: "LS Retail",
    theme: "light",
    bg: "transparent",
    desc: "We specialize in assisting customers on their digital transformation journey by designing and deploying custom data lake",
    icon: "dummy.png",
    cta: "Know More",
  },
];

const OfferingsSliderData = [
  {
    _id: 1,
    title: "Computer Vision ",
    subArr: false,
    inline: false,
    image: "OfferingsSlider.png",
    desc: "We specialize in custom video and image analysis tool development for computer vision and machine vision systems. Our expert team leverages advanced technologies like OpenCV to optimize existing computer vision algorithms or develop entirely new algorithms based on mathematical models ",
    cta: "Explore Service",
    ctaUrl: "/",
    links: [
      {
        title: "Real-time Object Detection",
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
    subArr: false,
    inline: false,
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
    image: "OfferingsSlider.png",
    ctaUrl: "/",
    subArr: false,
    inline: false,
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
    subArr: false,
    inline: false,
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
    subArr: false,
    inline: false,
    image: "OfferingsSlider.png",
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
const blogData = [
  {
    _id: 1,
    ribbon: "Blog",
    title: "Role of Infor OS in Powering Infor CloudSuite User Experiences",
    desc: "This blog discusses the crucial role of Infor OS in enhancing user experiences within Infor CloudSuite. It also explores the significance of Infor OS and its various applications.",
    cta: "Know More",
    link: "/",
    imgUrl: "RoleInforOSBlog",
  },
];

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
    text: "Navigating intricate warehouse operations demands sophisticated solutions for precise management of inventory, labor and billing",
  },
  {
    id: 2,
    text: "Meeting the ever-changing needs of customers requires agility and adaptability within warehouse functions",
  },
  {
    id: 3,
    text: "Success in today's business landscape hinges on real-time data access and data-driven insights for informed decision-making",
  },
  {
    id: 4,
    text: "To stay competitive, businesses must undergo a significant transformation of their supply chain operations, prioritizing speed, flexibility, and intelligence",
  },
  {
    id: 5,
    text: "Embracing digitization is the key to converting the supply chain from a cost center into a source of competitive advantage",
  },
];

const upgradeCloud = [
  {
    _id: 1,
    title: "Migrate to the Cloud from On-Prem",
    desc: "Ensuring a smooth and efficient migration process while minimizing disruptions to your business operations",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
  {
    _id: 2,
    title: "Migrate From a Different ERP Platform to Infor LN  ",
    desc: "Experience seamless and transformative migration with data integrity for your business",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
  {
    _id: 3,
    title: "Upgrade with Infor",
    desc: "Get access to enhanced innovation, business preferences and value",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
  {
    _id: 4,
    title: "End-to-End Implementation",
    desc: "Streamlining every phase of the implementation, we provide capability of successful and on-time delivery of Infor solution",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
  {
    _id: 5,
    title: "Managed Services ",
    desc: "Managing every complexity, time-consuming and resource-rigorous process and on demand maintenance of Infor application",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
  {
    _id: 6,
    title: "Custom Development & Integrations",
    desc: "Value-adding Infor application customizations and integrations to drive innovation that delivers great business outcomes",
    cta: "Know more",
    link: "/",
    bg: "/gradient-1.png",
  },
];

const page = () => {
  return (
    <>
      <EntIntro
        title="Make your business smart with seamless Infor CloudSuite implementation - pre-configured for your success"
        desc=""
        cta="Let's Connect"
        width="80%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* section nav */}
      <>
        <SectionNav
          // Offerings
          // Services
          // Benefits
          // Insights
          // Testimonials

          arr={[
            {
              _id: 1,
              title: "Offerings",
              link: "#Offerings",
            },
            {
              _id: 2,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 3,
              title: "Benefits",
              link: "#Benefits",
            },
            {
              _id: 4,
              title: "Insights",
              link: "#Insights",
            },

            {
              _id: 5,
              title: "Testimonials",
              link: "#Testimonial",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="Infor CloudSuite ERP products have been recognized as “Leaders in the 2022 Gartner Magic Quadrant for Cloud ERP”, with a specific focus on serving product-centric enterprises. This acknowledgment underscores their exceptional capabilities, solidifying their status as an industry-leading solution. At Godrej Infotech, we understand daunting complexities of businesses and have reliable experience in implementing Infor CloudSuite solutions along with continuous support and optimization. As your trusted Infor partner, we collaborate with you at every step of your transformation journey."></Abstract>

      {/* slider */}
      {/*  Card Slider Offerings */}
      <div id="Offerings">
        <>
          <OfferingsSlider
            // arr={OfferingsSliderData}
            // header={OfferingsSliderDataHeader}
            title={"Our Infor CloudSuite Offerings"}
            alignment={"center"}
            // alignment="left"
            expandedDesc={true}
            arr={[
              /*One*/
              {
                _id: 1,
                title: "Infor CloudSuite Industrial Enterprise",
                desc: "A comprehensive cloud-based solution designed to enable manufacturing and distribution businesses with modern, scalable and agile ERP functionalities. This suite is designed to meet the specific needs of industries involved in complex manufacturing processes.",
                cta: "Explore Service",
                subArr: false,
                subArrLinks: [],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                ctaUrl: "/",
                links: [
                  {
                    title: "Financials",
                    url: "/",
                  },
                  {
                    title: "Supply Chain Management ",
                    url: "/",
                  },
                  {
                    title: "Manufacturing",
                    url: "/",
                  },
                  {
                    title: "Human Capital Management (HCM) ",
                    url: "/",
                  },
                  {
                    title: "Customer Relationship Management (CRM) ",
                    url: "/",
                  },
                  {
                    title: "Enterprise Asset Management (EAM)",
                    url: "/",
                  },
                  {
                    title: "Quality Management",
                    url: "/",
                  },
                ],
              },
              /*End One*/
              {
                _id: 2,
                title: "Infor CloudSuite Automotive (Infor LN)",
                desc: "Infor CloudSuite Automotive, powered by Infor LN, offers comprehensive features for automotive manufacturers, supporting everything from supply chain management to production control.",
                cta: "Explore Service",
                subArr: false,
                subArrLinks: [],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                ctaUrl: "/",
                links: [
                  {
                    title: "Quality and production",
                    url: "/",
                  },
                  {
                    title: "Supply chain visibility",
                    url: "/",
                  },
                  {
                    title: "Planning and inventory",
                    url: "/",
                  },
                  {
                    title: "Customer relationship management",
                    url: "/",
                  },
                ],
              },
              {
                _id: 3,
                title: "Infor CloudSuite Aerospace & Defense",
                desc: "Infor CloudSuite Aerospace & Defense offers specialized cloud-based solutions tailored to the unique demands of highly regulated aerospace and defense industry.",
                cta: "Explore Service",
                subArr: false,
                subArrLinks: [],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                ctaUrl: "/",
                links: [
                  {
                    title: "Planning and production",
                    url: "/",
                  },
                  {
                    title: "Contract Management",
                    url: "/",
                  },
                  {
                    title: "Regulations & Compliance",
                    url: "/",
                  },
                  {
                    title: "Supply chain visibility ",
                    url: "/",
                  },
                ],
              },

              {
                _id: 4,
                title: "Infor CS Engineering and Construction",
                desc: "Infor CloudSuite Engineering and Construction is a complete solution designed to fulfil the exclusive needs of the engineering and construction industry.",
                cta: "Explore Service",
                subArr: false,
                subArrLinks: [],
                image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
                inline: true,
                ctaUrl: "/",
                links: [
                  {
                    title: "Project Management",
                    url: "/",
                  },
                  {
                    title: "Document Management",
                    url: "/",
                  },
                  {
                    title: "Financial Management",
                    url: "/",
                  },
                  {
                    title: "Procurement and Supply Chain ",
                    url: "/",
                  },
                   {
                    title: "Human Capital Management (HCM)",
                    url: "/",
                  },
                  {
                    title: "Contract Management",
                    url: "/",
                  },
                  {
                    title: "Estimating and Bidding",
                    url: "/",
                  },
                  {
                    title: "Quality and Safety Management",
                    url: "/",
                  },
                  {
                    title: "Equipment Management",
                    url: "/",
                  },
                ],
              },
            ]}
          />
        </>
      </div>

      {/* Microsoft Services */}
      <>
        <div
          className={`bg-ms-practise w-full  bg-[#F2F4F7]  py-32`}
          id="Services"
        >
          <div className={` w-full`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="flex items-start flex-col justify-between  relative">
                <div className="">
                  <h3 className="text-[42px] leading-[54px] mb-3 font-bold ">
                    Infor CloudSuite Services
                  </h3>
                </div>
                <div>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    Leveraging our understanding of business processes refined through years of experience, we deliver end to end services along with strategic business insights powered by Infor Cloud Suite expertise.
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
              className="flex-grow"
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

      {/* Benefits */}
      <Benefits
        ribbon="Infor CloudSuite Benefits"
        ribbonTxtWhite="true"
        title="With deep industry-specific functionalities, Infor CloudSuite applications offer responsive business environment, driving competitive differentiation."
        desc=""
        arr={[
          {
            _id: 1,
            icon: "Benefits-upgradeCloud/MinimizeOperationalExpenses",
            title: "Extensible and integrable Cloud Suites through Infor OS.",
          },
          {
            _id: 2,
            icon: "Benefits-upgradeCloud/EnableUserConcurrency",
            title: "Accommodates multiple, intricate manufacturing scenarios.",
          },
          {
            _id: 3,
            icon: "Benefits-upgradeCloud/EnhancedCollaboration",
            title:
              "Industry-tailored features with cloud environment.",
          },
          {
            _id: 4,
            icon: "Benefits-upgradeCloud/AdvancedDataManagement",
            title:
              "Cloud-based applications less susceptible to downtime, ensuring business continuity. ",
          },
          {
            _id: 5,
            icon: "Benefits-upgradeCloud/AptitudeToRespond",
            title:
              "Tailored solutions for various industries, addressing specific needs and challenges.",
          },
          {
            _id: 6,
            icon: "Benefits-upgradeCloud/IntegrateBigDataAnalytics",
            title:
              "Accessibility from anywhere with an internet connection, making it convenient for remote work and global collaboration.",
          },
        ]}
      ></Benefits>

      {/* blog */}
      <BlogSlider arr={blogData} />

      {/* Testimonials */}
      <NewTestimonial
        ribbon="Testimonials"
        ribbonVisible={false}
        title="Delighted Customers share their Experiences"
        desc="Discover how we have helped our customers to realize tangible outcomes aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation: "Managing Director",
            thumbnail: "1",
            description:
              "We would like to put on record the successful completion of our INFOR ERP LN implementation project by Godrej Infotech at our plant in Ahmedabad. We are glad to inform that the project has been completed as per our requirement.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation: "Manager Sales and Support",
            thumbnail: "1",
            description:
              "We highly appreciate the service and support provided by your team for our Infor ERP LN Annual Maintenance. Over the last 2 years we have had a very good working relation with your team and have received timely inputs and guidance across the modules that have been implemented on the system. We look forward to a mutually beneficial relationship in the future as well.",
            category: "static",
            link: "/",
          },
        ]}
      />

      {/* Subscription */}
      <Subscription
        title="Share your details to gain a competitive threshold with Infor CloudSuite solution."
        blue=" "
        title2=""
        desc=""
      />

      {/* Infotehc weekly */}
      <div className="hidden">
        <InfotechWeeklyAlt />
      </div>
    </>
  );
};

export default page;
