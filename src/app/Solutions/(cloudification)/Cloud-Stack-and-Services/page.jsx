"use client";

import CaseStudy from "@/sections/caseStudy/CaseStudy";
import Image from "next/image";
import "react-creative-cursor/dist/styles.css";
import EntIntro from "@/components/EntIntro";
import SME from "@/components/SME";
import StrategySub from "@/components/StrategySub";
import Testimonials from "@/sections/testimonial/Testimonial";
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

  },
  {
    _id: 2,
    desc: "Faster development cycles with pay-as-you-go model offering cost effectiveness and business agility",

  },
  {
    _id: 3,
    desc: "Drive business agility and improved ROI with automation",

  },
  {
    _id: 4,
    desc: "Highest levels of security and privacy, ensuring data is safeguarded",

  },
  {
    _id: 5,
    desc: "Streamline delivery pipeline with all the essential tools covered under one umbrella",

  },
  {
    _id: 6,
    desc: "Effortless integration with data solutions and Big Data",

  },
  {
    _id: 7,
    desc: "Built-in reliable disaster recovery capabilities and integrated development framework",

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

        <SectionNav />
        {/* Solutions Robot */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid sm:grid-cols-2 grid-cols-1">
              <div className="bg-white flex items-start flex-col justify-start">
                <div>
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold sm:w-[90%]">
                    Take Confident Business Decisions with Industry Tailored{" "}
                    <span className="text-[#0745D3]">Cloud Technology </span>{" "}
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    With acute expertise in delivering cloud-based solutions and services that cater to diverse industries, we work closely with our clients to devise and execute reliable cloud systems that recalibrate your business, deliver greater business value and refine your user experience.
                  </p>
                </div>
              </div>
              <div className={`bg-[#f5f5f5] `}>
                <div
                  className={` max-w-screen-xl md:max-w-screen-lg mx-auto px-[2rem] p-5`}
                >
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5`}
                  >
                    <div className={`  w-2/5 mx-auto`}>
                      <Lottie animationData={robotAnimation} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* Maximize business output / Vertical Slider */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] flex">
              <div className="bg-white flex items-start flex-col justify-start">
                <div className="flex justify-center">
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold sm:w-[90%]">
                    Maximizing Your Business Outcomes with Cloud Technology
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    Our verified proficiency in execution and innovation in cloud adaptability facilitate the process of business transformation at each juncture.
                  </p>
                </div>
              </div>
            </div>

            <div className=" flex">
              {/* cards wrap */}
              <div>
                {/* cards */}
                <div className=" ">
                  <div className="flex flex-row">
                    {[0, 1, 2, 3].map((item, index) => (
                      <div key={index}>
                        {isCardOpen ? (
                          <>
                            <div>
                              <h3>Business Applications On Cloud</h3>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="p-16 bg-[#ef3ef3]">
                              <h3 className="text-[30px] leading-[42px] text-[#F2F4F7] font-bold">
                                Business Applications On Cloud
                              </h3>
                              <ul>
                                <li>
                                  <Link
                                    href={"/"}
                                    className="flex flex-row justify-start w-fit border-b-slate-400 text-base leading-[42px] font-medium text-white border-b-2 items-center mb-5"
                                  >
                                    Microsoft Dynamics 365{" "}
                                    <span>
                                      <Icon
                                        path={mdiArrowTopRight}
                                        style={{ marginLeft: "0.5em" }}
                                        size={1}
                                      />
                                    </span>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href={"/"}
                                    className="flex flex-row justify-start w-fit border-b-slate-400 text-base leading-[42px] font-medium text-white border-b-2 items-center mb-5"
                                  >
                                    Infor{" "}
                                    <span>
                                      <Icon
                                        path={mdiArrowTopRight}
                                        style={{ marginLeft: "0.5em" }}
                                        size={1}
                                      />
                                    </span>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href={"/"}
                                    className="flex flex-row justify-start w-fit border-b-slate-400 text-base leading-[42px] font-medium text-white border-b-2 items-center mb-5"
                                  >
                                    Oracle{" "}
                                    <span>
                                      <Icon
                                        path={mdiArrowTopRight}
                                        style={{ marginLeft: "0.5em" }}
                                        size={1}
                                      />
                                    </span>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href={"/"}
                                    className="flex flex-row justify-start w-fit border-b-slate-400 text-base leading-[42px] font-medium text-white border-b-2 items-center mb-5"
                                  >
                                    LS Retail{" "}
                                    <span>
                                      <Icon
                                        path={mdiArrowTopRight}
                                        style={{ marginLeft: "0.5em" }}
                                        size={1}
                                      />
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* Why Cloud is your Ultimate Choice? */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className="max-w-screen-2xl md:max-w-screen-2xl mb-5 mx-auto p-5  text-center flex flex-col justify-center items-center">
              <h3 className="text-4xl leading-[42px] font-bold mb-5">
                Why <span className="text-[#0745D3]">Cloud</span> is your
                Ultimate Choice?
              </h3>
              <p className="font-medium leading-[22px] md:w-[80%] ">
                With a fault-tolerant architecture and a global network of data centers, cloud empowers you to expand your infrastructure and leverage advanced analytics.
              </p>
            </div>

            <div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {ChoiceSlider.map((item) => (
                  <>
                    <SwiperSlide key={item._id} className="w-fit max-w-md">
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

        <BlogSlider />
        {/* Leading Forefront with Our Cloud Capabilities to Fuel Your Growth */}
        <>
          <div className={` w-full bg-[#F2F4F7] py-32`}>
            <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex justify-center">
              <div className="bg-[#F2F4F7] flex items-start flex-col justify-start">
                <div>
                  <h3 className="text-4xl leading-[42px] font-bold mb-5 w-[60%] mx-auto">
                    Leading Forefront with Our Cloud Capabilities to Fuel Your
                    Growth
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                    We aim to foster growth of your business with our extensive
                    client collaboration, and to achieve this, we seek to
                    convert effective pilot initiatives into enterprise-scale
                    implementation, while comprehensively addressing all
                    technical and business requirements
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row my-5 justify-center items-center mx-auto gap-5 sm:gap-5">
                  {front.map((item, index) =>
                    item.isExpanded ? (
                      <div
                        key={item._id}
                        className="bg-white flex justify-between items-center w-sm"
                      >
                        <div className="flex flex-col items-start py-16 px-10">
                          <small className="text-[14px] font-medium leading-[22px] uppercase">
                            {"0"}
                            {item.steps}
                          </small>
                          <h3 className="font-bold text-[26px] leading-[34px] mb-11">
                            {item.title}
                          </h3>
                          <p className="font-medium text-left text-[12px] leading-[18px] w-[50%]">
                            {item.desc}
                          </p>
                        </div>
                        <div className="sm:flex-none mx-auto sm:m-0 mb-5">
                          <Image src={verticalImg} alt="Vertical Image" />
                        </div>
                      </div>
                    ) : (
                      <div
                        key={item._id}
                        className="bg-white flex justify-between flex-col items-center w-sm h-[100%]"
                      >
                        <div className="flex flex-col items-start justify-between h-[100%] p-5">
                          <small className="text-[14px] font-medium leading-[22px] uppercase">
                            {"0"}
                            {item.steps}
                          </small>
                          <h3 className="font-bold text-[26px] leading-[34px] ">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
        <SME
          imgSrc="/SME-Biju.png"
          ribbon="Introducing Our Cloud Leader"
          desc="We fast track the cloud incorporation process to drive impactful business results and value creation on global scale through advance cloud transformation capability"
          sme="Zubin Bharucha"
          designation="Cloud Head, Godrej Infotech"
        />
        {/* why godrej infotech */}
        <>
          <div className={` w-full bg-[#F2F4F7] pt-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="bg-[#F2F4F7] flex items-start flex-col justify-between  relative">
                <div className="">
                  <h4
                    className={` font-medium text-[#0745D3] uppercase ribbon`}
                  >
                    Spend LESS, GROW MORE
                  </h4>
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                    Why Godrej Infotech ?
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    Embark on cloud upgradation journey by harnessing our
                    credible assessment process, strategic resources and fluent
                    data migration practice to minimise your business risk, time
                    to market and cost. Our time-tested delivery framework
                    enables businesses
                  </p>
                  <div className=" mt-[20rem]">
                    <Image
                      className="absolute bottom-0 z-20"
                      src={cloudArrows}
                      alt="cloud Arrows"
                    />
                    <Image
                      className="absolute left-5 bottom-10 z-30"
                      src={cloud}
                      alt="cloud"
                    />
                    <Image
                      className="absolute bottom-0 z-20"
                      src={curiousPerson}
                      alt="curious Person"
                    />
                  </div>
                </div>
              </div>
              {/* right */}
              <div>
                <div>
                  <div className="relative">
                    <AnimatePresence>
                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        custom={1}
                        viewport={{
                          once: true,
                        }}
                        className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5"
                        variants={fadeInAnimationVariant}
                      >
                        <Image src={checkout} alt="checkout" />
                        <p className="text-base font-medium leading-[22px]">
                          Comprehensive access to our cloud services across worldwide
                        </p>
                      </motion.div>

                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        custom={2}
                        viewport={{
                          once: true,
                        }}
                        className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 sm:ml-10 w-[100%]"
                        variants={fadeInAnimationVariant}
                      >
                        <Image src={checkout} alt="checkout" />
                        <p className="text-base font-medium leading-[22px]">
                          Tailored solutions for sensitive performing on-premises applications and conventional enterprise applications
                        </p>
                      </motion.div>

                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        custom={3}
                        viewport={{
                          once: true,
                        }}
                        className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 sm:ml-20 w-[100%]"
                        variants={fadeInAnimationVariant}
                      >
                        <Image src={checkout} alt="checkout" />
                        <p className="text-base font-medium leading-[22px]">
                          Holistic approach including resource gathering for cloud availability and scale-up architectures to manage multi-cloud risks.
                        </p>
                      </motion.div>

                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        custom={3}
                        viewport={{
                          once: true,
                        }}
                        className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 sm:ml-20 w-[100%]"
                        variants={fadeInAnimationVariant}
                      >
                        <Image src={checkout} alt="checkout" />
                        <p className="text-base font-medium leading-[22px]">
                          End-to-end strategic cloud services for complete cloud journey.
                        </p>
                      </motion.div>
                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        custom={3}
                        viewport={{
                          once: true,
                        }}
                        className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 sm:ml-20 w-[100%]"
                        variants={fadeInAnimationVariant}
                      >
                        <Image src={checkout} alt="checkout" />
                        <p className="text-base font-medium leading-[22px]">
                          Cloud expertise that offers business growth and localized requirements support.
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* logos */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex justify-center">
              <div className="bg-white flex items-start flex-col justify-start">
                <div>
                  <h3 className="text-4xl leading-[42px] font-bold mb-5">
                    Synergetic Partnership
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                    Our expansive worldwide network of market innovators enables us to embrace breakthrough technologies and confront business roadblocks effectively.
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

        <CaseStudy />
        <Testimonials />

        {/* Join the Team */}
        <JoinExpTeam />
        <StrategySub />
      </main>
    </>
  );
}
