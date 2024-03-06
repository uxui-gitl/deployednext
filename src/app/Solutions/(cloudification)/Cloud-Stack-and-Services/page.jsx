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
import OracleDB from "../../../../../public/upgradeCloud/OracleDB.png";
import Dynamic from "../../../../../public/upgradeCloud/Dynamic.png";
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

import scalabilityAccording from "../../../../../public/icon/cloudStackServices/scalabilityAccording.svg";
import Fasterdevelopment from "../../../../../public/icon/cloudStackServices/Fasterdevelopment.svg";
import Drivebusiness from "../../../../../public/icon/cloudStackServices/Drivebusiness.svg";
import Highestlevels from "../../../../../public/icon/cloudStackServices/Highestlevels.svg";
import StreamlineDelivery from "../../../../../public/icon/cloudStackServices/StreamlineDelivery.svg";
import Effortlessintegration from "../../../../../public/icon/cloudStackServices/Effortlessintegration.svg";
import BuiltInreliable from "../../../../../public/icon/cloudStackServices/BuiltInreliable.svg";
import Abstract from "@/components/Abstract";
import { NewTestimonial } from "@/components";

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
            // Technology
            // Benefits
            // Services
            // Why Us
            // Partnerships

            arr={[
              {
                _id: 1,
                title: "Technology",
                link: "#Technology",
              },
              {
                _id: 2,
                title: "Benefits",
                link: "#Benefits",
              },
              {
                _id: 3,
                title: "Services",
                link: "#Services",
              },
              {
                _id: 4,
                title: "Why Us",
                link: "#WhyUs",
              },
              {
                _id: 5,
                title: "Partnerships",
                link: "#Partnerships",
              },
            ]}
          />
        </>

        {/* Overview  */}
        <Abstract abstractdesc="We collaborate closely with clients to design and implement robust cloud systems. Our focus is on recalibrating businesses, delivering enhanced value, and refining user experiences. Through meticulous planning and execution, we ensure cloud solutions that align with your business objectives, driving efficiency and innovation. Trust us to navigate the complexities of cloud technology, deliver greater business value and refine your user experience."></Abstract>

        {/* Solutions Robot */}
        <>
          <div id="Technology" className={` w-full bg-white py-16`}>
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

        <div id="Benefits">
          <>
            <div className={`w-full text-left bg-[#fff] pt-32`}>
              <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
                <div className="bg-[#fff] text-left">
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
          <div className={`w-full bg-[#fff] text-left`}>
            <div className="max-w-screen  md:max-w-screen  mx-auto pt-5">
              <SpotlightImageGrid
                arr={[
                  {
                    _id: 1,
                    title: "Core Infrastructure and Virtualization",
                    expandedTitle: "Core Infrastructure and Virtualization",
                    bgImg: "bg1",
                    bgColor: "",
                    linksArr: [
                      {
                        _id: 1,
                        title: "Infrastructure as a Service (IAAS)",
                        url: "/",
                      },
                      {
                        _id: 2,
                        title: "Virtual Desktop Infrastructure (VDI)",
                        url: "/",
                      },
                      {
                        _id: 3,
                        title: "Disaster Recovery as a Service (DrAAS)",
                        url: "/",
                      },
                      {
                        _id: 4,
                        title: "Database as a Service (DBaaS)",
                        url: "/",
                      },
                      {
                        _id: 5,
                        title: "BaaS: Backup as a Service (BaaS)",
                        url: "/",
                      },
                    ],

                    ctaBtn: false,
                    ctaUrl: "/",
                    cta: "Know More",
                  },
                  {
                    _id: 2,
                    title: "Advanced Cloud Infrastructure",
                    expandedTitle: "Advanced Cloud Infrastructure",
                    bgImg: "",
                    bgColor: "#344CA9",
                    linksArr: [
                      {
                        _id: 1,
                        title: "Azure IoT",
                        url: "/",
                      },
                      {
                        _id: 2,
                        title: "DevOps and Bespoke Applications",
                        url: "/",
                      },
                      {
                        _id: 3,
                        title: "Hybrid and Multicloud Managed Services ",
                        url: "/",
                      },
                    ],

                    ctaBtn: false,
                    ctaUrl: "/",
                    cta: "Know More",
                  },
                  {
                    _id: 3,
                    title: "M365",
                    expandedTitle: "M365",
                    bgImg: "bg3",
                    bgColor: "",
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
                        title: "Device Security and Access Management ",
                        url: "/",
                      },
                      {
                        _id: 5,
                        title: "Lowcode Application Development",
                        url: "/",
                      },
                    ],

                    ctaBtn: false,
                    ctaUrl: "/",
                    cta: "Know More",
                  },
                  {
                    _id: 4,
                    title: "Business Applications",
                    expandedTitle: "Business Applications",
                    bgImg: "bg4",
                    bgColor: "#320A53",
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
                            <Image
                              src={`/icon/${item.icon}.svg`}
                              width={45}
                              height={45}
                              alt="icon"
                              className="mb-5"
                            />
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

        {/* Leading Forefront with Our Cloud Capabilities to Fuel Your Growth / Spotlight */}

        <div id="Services">
          <>
            <div className={`w-full text-center bg-[#f2f4f7] pt-32`}>
              <div className="text-center max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
                <div className="bg-[#f2f4f7] text-center">
                  <div>
                    <h3 className="text-4xl leading-[42px] font-bold mb-5 w-[60%] mx-auto">
                      Leading Forefront with Our Cloud Services to Fuel Growth
                    </h3>
                    <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                      We aim for business foster growth and convert effective
                      pilot initiatives into enterprise-scale implementation,
                      while comprehensively addressing all technical and
                      business requirements.
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
                    expandedLabel: "",
                    title: "Consulting and Roadmap",
                    desc: "Strategic guidance and actionable plan for adoption, integration and management of cloud technologies while enabling businesses to optimize their cloud investment.",
                    expandedTitle: "Consulting and Roadmap",
                    image: "/CloudStackServices/Capabilities-Consulting.jpg",
                  },
                  {
                    label: "02",
                    expandedLabel: "",
                    expandedTitle: "Architecture and Management",
                    title: "Architecture and Management",
                    desc: "Architect and manage cloud infrastructure and platforms, ensuring comprehensive oversight of the business application ecosystem. This 360-degree visibility enhances business performance and reduces IT costs.",
                    image:
                      "/CloudStackServices/Capabilities-OperationsManagement.jpg",
                  },
                  {
                    label: "03",
                    expandedLabel: "",
                    expandedTitle: "Cloud Security",
                    title: "Cloud Security",
                    desc: "Detection of security gaps, formation of risk-allied structural design and a blueprint for baseline cloud security and automate the deployment of security guardrails for cloud native services.",
                    image: "/CloudStackServices/Capabilities-CloudSecurity.jpg",
                  },
                  {
                    label: "04",
                    expandedLabel: "",
                    expandedTitle: "Public Cloud",
                    title: "Public Cloud",
                    desc: "Intact development of cloud environments and execute industry-leading top practices that support the individual business cloud implementation and management structures.",
                    image: "/CloudStackServices/Capabilities-PublicCloud.jpg",
                  },
                  {
                    label: "05",
                    expandedLabel: "",
                    expandedTitle:
                      "Application transformation and Cost Optimization",
                    title: "Application transformation and Cost Optimization",
                    desc: "Adherence to industry best practices, optimization of business processes and efficient cloud expenditure, while guaranteeing seamless integration, we help in achieving transformation goals in a cost-effective manner.",
                    image:
                      "/CloudStackServices/Capabilities-CloudCostOptimization.jpg",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Blog */}
        <BlogSlider arr={blogData} />

        {/* SME Experts */}
        {/* <SME
          imgSrc="/SME-Biju.png"
          ribbon="Introducing Our Cloud Leader"
          desc="We fast track the cloud incorporation process to drive impactful business results and value creation on global scale through advance cloud transformation capability"
          sme="Zubin Bharucha"
          designation="Cloud Head, Godrej Infotech"
        /> */}

        {/* Benefits */}

        {/* <Benefits
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
        ></Benefits> */}

        {/* why godrej infotech */}
        <WhySection
          ribbon="LET'S COLLABORATE AND MAKE IT HAPPEN"
          title="Why Godrej Infotech?"
          // desc="With emphasis on change management, our professionals steer your business towards lasting success"
          arr={[
            {
              _id: 1,
              desc: "Comprehensive access to our cloud services across worldwide",
              icon: "",
            },
            {
              _id: 2,
              desc: "Tailored solutions for sensitive performing on-premises applications and conventional enterprise applications",
              icon: "",
            },
            {
              _id: 3,
              desc: "Holistic approach including resource gathering for cloud availability and scale-up architectures to manage multi-cloud risks",
              icon: "",
            },
            {
              _id: 4,
              desc: "End-to-end strategic cloud services for complete cloud journey",
              icon: "",
            },
            {
              _id: 5,
              desc: "Cloud expertise that offers business growth and localized requirements support",
              icon: "",
            },
          ]}
        ></WhySection>

        {/* client logos */}
        <>
          <div id="Partnerships" className={` w-full bg-white py-20`}>
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
                    <Image src={OracleDB} alt="oracle" />
                  </div>

                  <div>
                    <Image src={Dynamic} alt="dynamic365" />
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
                "Greater scalability and cost-effectiveness with integration of Dynamics 365 F&O and Dynamics CRM on Cloud",
              thumbnail: "1",
              description: "KSA's Leading Distributor of Electrical Components",
              tags: [""],
              cta: "Know More",
              link: "/",
            },
            {
              id: 2,
              title:
                "Built-in redundancy & automatic backups with Successful implementation of D365 Finance & Operations on Cloud",
              thumbnail: "2",
              description:
                "India's Leading Wildlife & Nature Conservation Organization",
              tags: [""],
              cta: "Know More",
              link: "/",
            },
            {
              id: 3,
              title:
                "Flexible system accessibility and Faster deployment time with D365 F&O Cloud Solution",
              thumbnail: "3",
              description:
                "Leading Distributor of Fruits & Vegetables in the Philippines",
              tags: [""],
              cta: "Know More",
              link: "/",
            },
          ]}
        />

        {/* Testimonial */}

        <NewTestimonial
          ribbon="CLIENT TESTIMONIALS"
          ribbonVisible={false}
          title="Delighted customers share their success experience "
          desc="Discover how we have helped our clients to realize tangible outcomes aligned with their business goals."
          arr={[
            {
              id: 1,
              clientName: "",
              clientDesignation:
                "Head EDP, India's Premier Hi-Tech Engineering Solutions Provider",
              thumbnail: "1",
              description:
                "Thanks to Godrej Infotech team for their support. It was tough for us to complete the project within the given timeframe without your handholding and support of Godrej Infotech’s team. It was nice working with you on this migration project.",
              category: "static",
              link: "/",
            },
            {
              id: 2,
              clientName: "",
              clientDesignation: "IT Head,  Middle East based Fast Food Chain",
              thumbnail: "1",
              description:
                "Appreciation to Godrej Infotech team for successfully completing two critical projects - upgrading the old ERP system to the latest SaaS solution Dynamics Business Central and implementing a cloud-based ETL process on Azure for restaurant sales and COGS processes. We’re experiencing significant improvements in operational efficiency and productivity. We look forward to continuing this partnership with Godrej Infotech for future technological needs.",
              category: "static",
              link: "/",
            },
            {
              id: 3,
              clientName: "",
              clientDesignation:
                "IT Manager, India's Premier hi-tech Engineering Solutions Provider",
              thumbnail: "1",
              description:
                "Thank you to Godrej Infotech for the excellent work for cloud-enabling our Infor environment. The services provided were of high quality and we would not hesitate to recommend Godrej Infotech as a professional cloud services provider.",
              category: "static",
              link: "/",
            },
          ]}
        />

        {/* <Testimonial
          ribbon="Testimonials"
          title="Delighted Customers share their Experiences"
          desc="Discover how we have helped our customers to realize tangible outcomes aligned with their business goals."
          arr={[
            {
              id: 1,
              clientName: "",
              clientDesignation:
                "Head EDP, India's Premier Hi-Tech Engineering Solutions Provider",
              thumbnail: "1",
              description:
                "Thanks to Godrej Infotech team for their support. It was tough for us to complete the project within the given timeframe without your handholding and support of Godrej Infotech’s team. It was nice working with you on this migration project.",
              category: "static",
              link: "/",
            },
            {
              id: 2,
              clientName: "",
              clientDesignation: "IT Head,  Middle East based Fast Food Chain",
              thumbnail: "1",
              description:
                "Appreciation to Godrej Infotech team for successfully completing two critical projects - upgrading the old ERP system to the latest SaaS solution Dynamics Business Central and implementing a cloud-based ETL process on Azure for restaurant sales and COGS processes. We’re experiencing significant improvements in operational efficiency and productivity. We look forward to continuing this partnership with Godrej Infotech for future technological needs.",
              category: "static",
              link: "/",
            },
            {
              id: 3,
              clientName: "",
              clientDesignation:
                "IT Manager, India’s Premier hi-tech Engineering Solutions Provider",
              thumbnail: "1",
              description:
                "Thank you to Godrej Infotech for the excellent work for cloud-enabling our Infor environment. The services provided were of high quality and we would not hesitate to recommend Godrej Infotech as a professional cloud services provider.",
              category: "static",
              link: "/",
            },
          ]}
        /> */}
        {/* Join the Team */}
        {/* Career Leap CTA */}
        <JoinExpTeam
          title="The work culture in Godrej supports learning at every stage of your
        work life."
          desc=""
          cta="Take the Cloud Career Leap"
          link=""
          img=""
        />
        <Subscription
          title="Free 30-Minute Strategy Session with our Cloud Expert?"
          //blue="AI and ML?"
          title2=""
          desc="Let's discuss how cloud can help you with open innovation and business continuity."
        />
      </main>
    </>
  );
}
