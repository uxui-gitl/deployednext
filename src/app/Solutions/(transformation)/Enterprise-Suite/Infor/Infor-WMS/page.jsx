"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../../public/upgradeCloud/puzzle.png";
import icon from "../../../../../../../public/icon.png";
import WhySection from "@/components/WhySection";
import Expertise from "@/components/Expertise";
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

import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import Benefits from "@/components/Benefits";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import MinimizeOperationalExpenses from "../../../../../../../public/icon/Benefits-upgradeCloud/MinimizeOperationalExpenses.svg";
import EnableUserConcurrency from "../../../../../../../public/icon/Benefits-upgradeCloud/EnableUserConcurrency.svg";
import EnhancedCollaboration from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhancedCollaboration.svg";
import AdvancedDataManagement from "../../../../../../../public/icon/Benefits-upgradeCloud/AdvancedDataManagement.svg";
import AptitudeToRespond from "../../../../../../../public/icon/Benefits-upgradeCloud/AptitudeToRespond.svg";
import IntegrateBigDataAnalytics from "../../../../../../../public/icon/Benefits-upgradeCloud/IntegrateBigDataAnalytics.svg";
import SecurelyStores from "../../../../../../../public/icon/Benefits-upgradeCloud/SecurelyStores.svg";
import EnhanceSystemPerformance from "../../../../../../../public/icon/Benefits-upgradeCloud/EnhanceSystemPerformance.svg";
import Testimonial from "@/sections/testimonial/Testimonial";
import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
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
    title: "End-to-End Implementation ",
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
        title="Experience the Future of Warehouse
        Operations with Godrej Infotech Infor
        WMS Solutions "
        desc="Warehouse management is the cornerstone of business, capable of transforming its operations entirely"
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

      {/* Overview */}
      <>
        <div className={` w-full bg-white py-10`}>
          <>
            <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
              <div className=" mt-[5em] mb-[2rem]">
                <div className="flex flex-col gap-x-10">
                  <h4
                    className={` font-medium w-fit text-[#0745D3] uppercase ribbon`}
                  >
                    Infor CRM
                  </h4>
                  <h3 className="text-4xl leading-[42px] font-bold">
                    Overview
                  </h3>
                  <p>
                    Our commitment is to make your transformation journey as
                    smooth as possible, guaranteeing that you attain your
                    ambitious results. That&apos;s why we build a holistic
                    viewpoint on your implementation and rollout project and
                    assure that your project is on time, exceeding your
                    expectations
                  </p>
                </div>
              </div>
            </div>
          </>
        </div>
      </>

      {/* Challengers Encountered */}
      <>
        <div className={` w-full bg-white pb-20`}>
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

      {/* Infor WMS Key Highlights */}
      <>
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Infor WMS Key Highlights
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Extending the capabilities of Infor with tailored functional
                  enhancements for enhancement of business productivity
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full pt-48 pb-12 bg-[url('/bgEcomScreen.png')]`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 justify-center">
            {[0, 1, 2, 3].map((item, index) => {
              return (
                <div key={index} className="mx-5 bg-white ">
                  <div className="p-5 w-fit ">
                    <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                      3D Visualization
                    </h4>
                    <p className="text-[14px] leading-[22px] text-[#475467]">
                      With our ability in constructing, training and deploying
                      ML models, we assure an effective implementation process.
                    </p>
                  </div>
                  <div className=" w-full bg-[#0745D3] p-5">
                    <Link
                      href={"/"}
                      className="text-white  flex transition-all hover:opacity-75  "
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
              );
            })}
          </div>
        </div>
      </>

      {/* Infor WMS Industry solutions */}
      <>
        <div className={` w-full bg-[#FFF] py-10`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Infor WMS Industry Solutions
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  We endeavor to build actual business impact of Robotic Process
                  Automation (RPA) reforming industries, improving output and
                  leading digital transformation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full pt-48 pb-12 relative bg-cover`}
          style={{ backgroundImage: `url('/bgEcomScreen.png')` }}
        >
          {/* Overlay for background image */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="max-w-screen-xl md:max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-10 justify-center">
            {[
              {
                _id: 1,
                title: "Retail",
                list: [
                  {
                    _id: 1,
                    title: "Digital stores & connected associates",
                    url: "/",
                  },
                  {
                    _id: 2,
                    title: "Point-of-Sale (POS) modernization",
                    url: "/",
                  },
                  {
                    _id: 3,
                    title: "Client Eling, Assisted sales",
                    url: "/",
                  },
                  {
                    _id: 4,
                    title:
                      "Customer experience (CX) transformation & measurement",
                    url: "/",
                  },
                ],
                cta: "Let's Connect",
                ctaUrl: "#contact",
              },
              {
                _id: 2,
                title: "3 PL Logistics",
                list: [
                  {
                    _id: 1,
                    title: "Digital stores & connected associates",
                    url: "/",
                  },
                  {
                    _id: 2,
                    title: "Point-of-Sale (POS) modernization",
                    url: "/",
                  },
                  {
                    _id: 3,
                    title: "Client Eling, Assisted sales",
                    url: "/",
                  },
                  {
                    _id: 4,
                    title:
                      "Customer experience (CX) transformation & measurement",
                    url: "/",
                  },
                ],
                cta: "Know More",
                ctaUrl: "#contact",
              },
            ].map((item, index) => {
              return (
                <div key={item._id} className="mx-5 text-white relative">
                  <div className=" w-fit relative z-10">
                    <h4 className="text-[22px] font-bold  leading-[28px] text-[#fff]">
                      {item.title}
                    </h4>
                  </div>
                  <div>
                    <ul className="my-4">
                      {item.list.map((listItem) => (
                        <li
                          key={listItem._id}
                          className="border-b-2 w-fit border-[#DBDBDB] py-2"
                        >
                          <Link
                            href={listItem.url}
                            className="text-[#fff] text-[14px] font-medium leading-[16px] w-fit flex transition-all hover:opacity-75"
                          >
                            {listItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={item.ctaUrl}
                      className="text-[#101828] bg-[#F5F5F5] py-4 px-8 mt-4 text-[16px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                    >
                      {item.cta}
                      <Icon
                        path={mdiArrowTopRight}
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

      {/* Supply System */}
      <>
        <div className={` w-full  pt-32`}></div>
        <div
          className={`w-full pt-48 pb-12 bg-[url('/SupplySystem.png')] bg-center bg-cover sm:bg-contain `}
        >
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="text-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Infor Intelligent Supply System
                </h3>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Infor proudly presents the most extensive suite of global
                  supply chain solutions, including the world&apos;s largest
                  single-instance, multi-enterprise business network and
                  comprehensive CloudSuite capabilities. These capabilities
                  optimize supply chains from end to end, covering planning,
                  procurement, orchestration and fulfillment. Infor WMS is a
                  cloud-based Tier-1 solution, reshaping warehouse operations
                  through advanced functionalities ensuring efficient
                  fulfillment in a dynamic business landscape. With Infor WMS,
                  enterprises gain a competitive edge, ready to tackle the
                  ever-evolving demands of the modern market.
                </p>
              </div>
            </div>
            {/* right */}
          </div>
        </div>
      </>

      {/* Benefits */}
      <Benefits
        ribbon="Upgrade to Cloud Benefits "
        ribbonTxtWhite="true"
        title="Experience business performance surge with cloud"
        desc=""
        arr={[
          {
            _id: 1,
            icon: "Benefits-upgradeCloud/MinimizeOperationalExpenses",
            title: "Minimize operational expenses of IT portfolio",
          },
          {
            _id: 2,
            icon: "Benefits-upgradeCloud/EnableUserConcurrency",
            title: "Enable user concurrency to support large-scale workloads",
          },
          {
            _id: 3,
            icon: "Benefits-upgradeCloud/EnhancedCollaboration",
            title:
              "Enhanced collaboration through cross-device accessibility to information",
          },
          {
            _id: 4,
            icon: "Benefits-upgradeCloud/AdvancedDataManagement",
            title:
              "Advanced data management solutions, modernized process and cloud services",
          },
          {
            _id: 5,
            icon: "Benefits-upgradeCloud/AptitudeToRespond",
            title: "Aptitude to respond to shifting business requirements",
          },
          {
            _id: 6,
            icon: "Benefits-upgradeCloud/IntegrateBigDataAnalytics",
            title:
              "Integrate Big Data Analytics into business processes for data-driven decision-making",
          },
          {
            _id: 7,
            icon: "Benefits-upgradeCloud/SecurelyStores",
            title: "Securely stores confidential business information",
          },
          {
            _id: 8,
            icon: "Benefits-upgradeCloud/EnhanceSystemPerformance",
            title:
              "Enhance system performance and user experience by scaling up the system",
          },
        ]}
      ></Benefits>

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

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "blog",
            title: "Digital Transformation - The need of the hour",
            desc: "Digital Transformation is changing the way business is done in every sector of the economy. Businesses need to transform themselves into digital enterprises to thrive and succeed in this new era. It is not just about adopting new technologies. It is about learning how these technologies can be applied to the existing business models so as to yield better results. For this, today’s leaders must debunk the myths in the industry, be open to learning, adapting & collaborating, thereby helping their organizations to ride this tide by following a successful transformation roadmap.",
            cta: "Read More",
            link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=18",
            imgUrl: "",
          },
          {
            _id: 2,
            ribbon: "blog",
            title: "Digital Transformation - The need of the hour",
            desc: "Digital Transformation is changing the way business is done in every sector of the economy. Businesses need to transform themselves into digital enterprises to thrive and succeed in this new era. It is not just about adopting new technologies. It is about learning how these technologies can be applied to the existing business models so as to yield better results. For this, today’s leaders must debunk the myths in the industry, be open to learning, adapting & collaborating, thereby helping their organizations to ride this tide by following a successful transformation roadmap.",
            cta: "Read More",
            link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=18",
            imgUrl: "",
          },
        ]}
      />

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY "
        title="Elevating Customer Experience with Cloud  "
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions across the spectrum of industries. "
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "99% uptime in saving man-days performance and 22% of capex saving after migrating on-premises ERP servers to the Azure cloud environment",
            thumbnail: "1",

            description: "Non-government Association of Indian Industries ",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
          {
            id: 2,
            title:
              "Cut down environment development cost by 60% and business performance boost of 5 sister companies with On-Cloud D365 F&O implementation ",
            thumbnail: "2",

            description: " Middle East-based Electrical Products Manufacturer ",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
          {
            id: 3,
            title:
              "Decreasing downtime and optimising system cost along with 100% data transparency through Single Cloud System",
            thumbnail: "3",

            description: "Coffee Brand Distributor in Egypt and Middle East",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
        ]}
      />

      {/* Expertise */}
      <div className="hidden">
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
      </div>

      {/* Subscription */}
      <div className="">
        <Subscription
          title="Let Us Transform Your "
          blue="Vision into Reality"
          title2=""
          desc="Complete the Form to Begin"
        />
      </div>

      {/* Infotech weekly */}
      <>
        <div className="hidden">
          <InfotechWeeklyAlt />
        </div>
      </>
    </>
  );
};

export default page;
