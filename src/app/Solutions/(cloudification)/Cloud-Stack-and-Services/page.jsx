"use client";

import CaseStudy from "@/sections/caseStudy/CaseStudy";
import Image from "next/image";
import "react-creative-cursor/dist/styles.css";
import Subscription from "@/components/Subscription";
import EntIntro from "@/components/EntIntro";
import SME from "@/components/SME";
import StrategySub from "@/components/StrategySub";
import WhySection from "@/components/WhySection";
import Testimonial from "@/sections/testimonial/Testimonial";
import Lottie from "lottie-react";
// import robotAnimation from "../../../../assets/robot.json";
import robotAnimation from "@/assets/robot.json";
import infor from "../../../../../public/upgradeCloud/infor.png";
import oracle from "../../../../../public/upgradeCloud/oracle.png";
import dynamic365 from "../../../../../public/upgradeCloud/dynamic365.png";
import azure from "../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../public/upgradeCloud/cloudArrows.png";
import { motion, AnimatePresence } from "framer-motion";
import BlogSlider from "@/components/BlogSlider";

import verticalImg from "../../../../../public/components/verticalImg.png";
import icon from "../../../../../public/icon.png";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";

import Benefits from "@/components/Benefits";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import JoinExpTeam from "@/components/JoinExpTeam";
import { useState } from "react";
import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import SpotlightImageGrid from "@/components/SpotlightImageGrid";
import Spotlight from "@/components/Spotlight";

import scalabilityAccording from "../../../../../public/icon/cloudStackServices/scalabilityAccording.svg"
import Fasterdevelopment from "../../../../../public/icon/cloudStackServices/Fasterdevelopment.svg"
import Drivebusiness from "../../../../../public/icon/cloudStackServices/Drivebusiness.svg"
import Highestlevels from "../../../../../public/icon/cloudStackServices/Highestlevels.svg"
import StreamlineDelivery from "../../../../../public/icon/cloudStackServices/StreamlineDelivery.svg"
import Effortlessintegration from "../../../../../public/icon/cloudStackServices/Effortlessintegration.svg"
import BuiltInreliable from "../../../../../public/icon/cloudStackServices/BuiltInreliable.svg"


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

const ChoiceSlider = [
  {
    _id: 1,
    desc: "Scalability according to evolving business needs",
    icon: "cloudStackServices/scalabilityAccording",
  },
  {
    _id: 2,
    desc: "Faster development cycles with pay-as-you-go model offering cost effectiveness and business agility",
    icon: "cloudStackServices/Fasterdevelopment",
  },
  {
    _id: 3,
    desc: "Drive business agility and improved ROI with automation",
    icon: "cloudStackServices/Drivebusiness",
  },
  {
    _id: 4,
    desc: "Highest levels of security and privacy, ensuring data is safeguarded",
     icon: "cloudStackServices/Highestlevels",
  },
  {
    _id: 5,
    desc: "Streamline delivery pipeline with all the essential tools covered under one umbrella",
    icon: "cloudStackServices/StreamlineDelivery",
  },
  {
    _id: 6,
    desc: "Effortless integration with data solutions and Big Data",
    icon: "cloudStackServices/Effortlessintegration",
  },
  {
    _id: 7,
    desc: "Built-in reliable disaster recovery capabilities and integrated development framework",
  icon: "cloudStackServices/BuiltInreliable",
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
  
];
const front = [
  {
    _id: 1,
    steps: 1,
    title: "Advisory and Consulting",
    desc: "Strategic guidance and advice for adoption, integration and management of cloud technologies while enabling businesses to optimize their cloud investment and maximize the benefits of cloud computing.",
    link: "/",
    isExpanded: true,
  },
  {
    _id: 2,
    steps: 2,
    title: "Strategy and Roadmap",
    desc: "Actionable plan with multi-phased approach that ensures business is adequately equipped for the challenges and opportunities of cloud adoption.",
    link: "/",
    isExpanded: false,
  },
  {
    _id: 3,
    steps: 3,
    title: "Architecture and Planning",
    desc: "Address the obstacles of cloud adoption & optimization and develop infrastructure and platform strategies aligned with business operations that improves management models.",
    link: "/",
    isExpanded: false,
  },
  {
    _id: 4,
    steps: 4,
    title: "Operations & Management ",
    desc: "Comprehensive management of cloud infrastructure and business application ecosystem for 360-degree visibility that fosters business performance and reduced IT costs.",
    link: "/",
    isExpanded: false,
  },
  {
    _id: 5,
    steps: 5,
    title: "Cloud Security",
    desc: "Detection of security gaps, formation of risk-allied structural design and a blueprint for baseline cloud security and automate the deployment of security guardrails for cloud native services.",
    link: "/",
    isExpanded: false,
  },
];

export default function Home() {
  const [isCardOpen, SetIsCardOpen] = useState(false);

  return (
    <>
      {/* <Cursor isGelly={true} /> */}
      <main>
        {/* <Intro /> */}
        <EntIntro
          title="Reimagine Your Business Capabilities with Our Intelligent Edge Cloud Stack and Services"
          desc=""
          cta="Modernize your Business with Upgrade Cloud Services"
          width="70%"
          video="https://godrej-gitl.s3.ap-south-1.amazonaws.com/videos/banner.mp4"
        />
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
        {/* Solutions Robot */}
        <>
          <div className={` w-full bg-white py-16`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid sm:grid-cols-2 grid-cols-1">
              <div className="bg-white flex items-start flex-col justify-center">
                <div>
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold sm:w-[90%]">
                    Take Confident Business Decisions with Industry Tailored{" "}
                    <span className="text-[#0745D3]">Cloud Technology </span>{" "}
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    With acute expertise in delivering cloud-based solutions and
                    services that cater to diverse industries, we work closely
                    with our clients to devise and execute reliable cloud
                    systems that recalibrate your business, deliver greater
                    business value and refine your user experience.
                  </p>
                </div>
              </div>
              <div className={` `}>
                <div
                  className={` max-w-screen-xl md:max-w-screen-xl mx-auto px-[2rem] p-5`}
                >
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5`}
                  >
                    <div className={`w-2/3 mx-auto`}>
                      <Lottie animationData={robotAnimation} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* Maximize business output / Vertical Slider */}

        <div id="spotlightGrid">
          <>
            <div className={`w-full text-left bg-[#f2f4f7] pt-32`}>
              <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
                <div className="bg-[#f2f4f7] text-left">
                  <div className="flex flex-col md:flex-row gap-8 ">
                    <h3 className="text-[42px]  leading-[54px] mb-3 font-bold sm:w-[90%]">
                      Maximizing Your Business Outcomes with Cloud Technology
                    </h3>
                    <p className="font-medium leading-[22px] md:w-[90%] ">
                      Our verified proficiency in execution and innovation in
                      cloud adaptability facilitate the process of business
                      transformation at each juncture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
          <div className={`w-full bg-[#f2f4f7] text-left  `}>
            <div className="  max-w-screen  md:max-w-screen  mx-auto pt-5   ">
              <SpotlightImageGrid
                arr={[
                  {
                    _id: 1,
                    title: "Infrastructure",
                    expandedTitle: "Infrastructure",
                    bgImg: "bg1",
                    bgColor: "",
                    linksArr: [
                      {
                        _id: 1,
                        title: "Infrastructure as a Service(IAAS) and Virtual Desktop Infrastructure (VDI)",
                        url: "/",
                      },
                      {
                        _id: 2,
                        title: "Platform as a Service(PAAS)",
                        url: "/",
                      },
                      {
                        _id: 3,
                        title: "Disaster Recovery as a Service(DrAAS)",
                        url: "/",
                      },
                      {
                        _id: 4,
                        title: "Database as a Service(DBaaS",
                        url: "/",
                      },
                      {
                        _id: 5,
                        title: "BaaS: Backup as a Service(BaaS)",
                        url: "/",
                      },
                      {
                        _id: 6,
                        title: "Azure IoT",
                        url: "/",
                      },
                      {
                        _id: 7,
                        title: "DevOps and Bespoke Applications",
                        url: "/",
                      },
                      {
                        _id: 8,
                        title: "Hybrid and Multicloud Managed Services",
                        url: "/",
                      },
                    ],

                    ctaBtn: false,
                    ctaUrl: "/",
                    cta: "Know More",
                  },
                  {
                    _id: 2,
                    title: "M365",
                    expandedTitle: "M365",
                    bgImg: "",
                    bgColor: "#101828",
                    linksArr: [
                      {
                        _id: 1,
                        title: "Office apps and services",
                        url: "/",
                      },
                      {
                        _id: 2,
                        title: "Collaboration Tools",
                        url: "/",
                      },
                      {
                        _id: 3,
                        title: "Cloud storage",
                        url: "/",
                      },
                      {
                        _id: 4,
                        title: "Device Security and Access Management",
                        url: "/",
                      },
                      {
                        _id: 5,
                        title: "Lowcode Application Development",
                        url: "/",
                      },
                    ],

                    ctaBtn: true,
                    ctaUrl: "/",
                    cta: "Know More",
                  },
                  {
                    _id: 3,
                    title: "Business Applications",
                    expandedTitle: "Business Applications",
                    bgImg: "bg3",
                    bgColor: "",
                    linksArr: [
                      {
                        _id: 1,
                        title: "Microsoft Dynamics 365",
                        url: "/",
                      },
                      {
                        _id: 2,
                        title: "Infor",
                        url: "/",
                      },
                      {
                        _id: 3,
                        title: "Oracle",
                        url: "/",
                      },
                      {
                        _id: 4,
                        title: "LS Retail",
                        url: "/",
                      },
                    ],

                    ctaBtn: false,
                    ctaUrl: "/",
                    cta: "Know More",
                  },
                  
                ]}
              />
            </div>
          </div>
        </div>
        {/* Why Cloud is your Ultimate Choice? */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className="max-w-screen-2xl md:max-w-screen-2xl mb-5 mx-auto p-5  text-center flex flex-col justify-center items-center">
              <h3 className="text-4xl leading-[42px] font-bold mb-5">
                Why <span className="text-[#0745D3]">Cloud</span> is your
                Ultimate Choice?
              </h3>
              <p className="font-medium leading-[22px] md:w-[80%] ">
                With a fault-tolerant architecture and a global network of data
                centers, cloud empowers you to expand your infrastructure and
                leverage advanced analytics.
              </p>
            </div>

            <div>
              <Swiper
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {ChoiceSlider.map((item) => (
                  <>
                    <SwiperSlide key={item._id} className="w-fit max-w-md ">
                      <div className="bg-[#EDF1FF]  p-5 mb-10">
                        <div className="text-left ">
                          <p className=" gap-4 mb-5 pb-3 text-base leading-[22px]  ">
                            <Image src={icon} alt="icon" className="mb-5" />
                          </p>
                          <h3 className="text-[22px] w-fit leading-[30px] font-bold mb-5 ">
                            {item.desc}
                          </h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </div>
          </div>
        </>

        {/* Blog */}
        <BlogSlider arr={blogData} />

        {/* Leading Forefront with Our Cloud Capabilities to Fuel Your Growth / Spotlight */}

        <div id="spotlight">
          <>
            <div className={`w-full text-center bg-[#f2f4f7] pt-32`}>
              <div className="text-center max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
                <div className="bg-[#f2f4f7] text-center">
                  <div>
                    <h3 className="text-4xl leading-[42px] font-bold mb-5 w-[60%] mx-auto">
                      Leading Forefront with Our Cloud Services to Fuel Growth
                    </h3>
                    <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                      We aim for business foster growth and convert effective pilot initiatives into enterprise-scale implementation, while comprehensively addressing all technical and business requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
          <div className={`w-full bg-[#f2f4f7] text-left `}>
            <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
              <Spotlight
                arr={[
                  {
                    label: "01",
                    expandedLabel: "Step 01",
                    title: "Advisory and Consulting",
                    desc: "Strategic guidance and advice for adoption, integration and management of cloud technologies while enabling businesses to optimize their cloud investment and maximize the benefits of cloud computing.",
                    expandedTitle: "Advisory and Consulting",
                    image: "/Spotlight/card1.png",
                  },
                  {
                    label: "02",
                    expandedLabel: "Step 02",
                    expandedTitle: "Strategy and Roadmap",
                    title: "Strategy and Roadmap",
                    desc: "Actionable plan with multi-phased approach that ensures business is adequately equipped for the challenges and opportunities of cloud adoption.",
                    image: "/Spotlight/card1.png",
                  },
                  {
                    label: "03",
                    expandedLabel: "Step 03",
                    expandedTitle: "Operations and Management",
                    title: "Operations and Management",
                    desc: "Address the obstacles of cloud adoption & optimization and develop infrastructure and platform strategies aligned with business operations that improves management models.",
                    image: "/Spotlight/card1.png",
                  },
                  {
                    label: "04",
                    expandedLabel: "Step 04",
                    expandedTitle: "Cloud Security",
                    title: "Cloud Security",
                    desc: "Detection of security gaps, formation of risk-allied structural design and a blueprint for baseline cloud security and automate the deployment of security guardrails for cloud native services.",
                    image: "/Spotlight/card1.png",
                  },
                  
                ]}
              />
            </div>
          </div>
        </div>

        {/* SME Experts */}
        {/* <SME
          imgSrc="/SME-Biju.png"
          ribbon="Introducing Our Cloud Leader"
          desc="We fast track the cloud incorporation process to drive impactful business results and value creation on global scale through advance cloud transformation capability"
          sme="Zubin Bharucha"
          designation="Cloud Head, Godrej Infotech"
        /> */}

        {/* Benefits */}

        <Benefits
          ribbon="Upgrade to Cloud Benefits "
          ribbonTxtWhite="true"
          title="Experience business performance surge with cloud"
          desc=""
          arr={[
            {
              _id: 1,
              icon: "gear",
              title: "Gain competitive edge",
            },
            {
              _id: 2,
              icon: "diamond",
              title: "Streamline operations",
            },
            {
              _id: 3,
              icon: "eyeGear",
              title: "Boost brand value",
            },
            {
              _id: 4,
              icon: "gear",
              title: "Gain competitive edge",
            },
            {
              _id: 5,
              icon: "diamond",
              title: "Streamline operations",
            },
            {
              _id: 6,
              icon: "eyeGear",
              title: "Boost brand value",
            },
          ]}
        ></Benefits>

        {/* why godrej infotech */}
        <WhySection
          ribbon="Spend LESS, GROW MORE"
          title="Why Godrej Infotech ?"
          desc="We aim for business faster growth with our extensive client collaboration, and to achieve this, we seek to convert effective pilot initiatives into enterprise-scale implementation, while comprehensively addressing all technical and business requirements."
          arr={[
            {
              _id: 1,
              desc: "Comprehensive access to our cloud services across worldwide ",
              icon: "",
            },
            {
              _id: 2,
              desc: "Tailored solutions for sensitive performing on-premises applications and conventional enterprise applications ",
              icon: "",
            },
            {
              _id: 3,
              desc: "Holistic approach including resource gathering for cloud availability and scale-up architectures to manage multi-cloud risks. ",
              icon: "",
            },
            {
              _id: 4,
              desc: "End-to-end strategic cloud services for complete cloud journey. ",
              icon: "",
            },
            {
              _id: 5,
              desc: "Cloud expertise that offers business growth and localized requirements support. ",
              icon: "",
            },
          ]}
        ></WhySection>

        {/* client logos */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex justify-center">
              <div className="bg-white flex items-start flex-col justify-start">
                <div>
                  <h3 className="text-4xl leading-[42px] font-bold mb-5">
                    Synergetic Partnership
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                    Our expansive worldwide network of market innovators enables
                    us to embrace breakthrough technologies and confront
                    business roadblocks effectively.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row my-5 justify-center items-center mx-auto gap-10 sm:gap-16">
                  <div>
                    <Image src={infor} alt="infor" />
                  </div>
                  <div>
                    <Image src={oracle} alt="oracle" />
                  </div>

                  <div>
                    <Image src={dynamic365} alt="dynamic365" />
                  </div>
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

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
        {/* Join the Team */}
        <JoinExpTeam />
        <Subscription
          title="Ready for Transformation with"
          blue="AI and ML?"
          title2=""
          desc="Let's embark on your journey together aligned with your business goals."
        />
      </main>
    </>
  );
}
