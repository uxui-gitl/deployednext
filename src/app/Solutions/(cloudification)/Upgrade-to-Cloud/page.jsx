"use client";

import "react-creative-cursor/dist/styles.css";
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
import Expertise from "@/components/Expertise";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Benefits from "@/components/Benefits";
import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import clsx from "clsx";

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

export default function Home() {
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

  const TestimonialsData = [
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
      clientDesignation: "IT Manager",
      thumbnail: "1",
      description:
        "We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
      category: "static",
      link: "/",
    },
    {
      id: 3,
      clientName: "",
      clientDesignation: "IT Manager",
      thumbnail: "1",
      description:
        "We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
      category: "static",
      link: "/",
    },
  ];

  // ex:
  const BenefitsData = [
    {
      _id: 1,
      icon: "gear",
      title: "Process and analyze vast volumes of data",
    },
    {
      _id: 2,
      icon: "diamond",
      title: "Ensure Uniformity in Financial Information",
    },
    {
      _id: 3,
      icon: "eyeGear",
      title: "Boost brand value",
    },
    {
      _id: 4,
      icon: "gear",
      title: "Process and analyze vast volumes of data",
    },
    {
      _id: 5,
      icon: "diamond",
      title: "Ensure Uniformity in Financial Information",
    },
    {
      _id: 6,
      icon: "eyeGear",
      title: "Boost brand value",
    },
  ];
  const upgradeCloud = [
    {
      _id: 1,
      title: "Lift and Shift to Cloud",
      desc: "We smoothly relocate your IT to Azure Cloud without redesigning applications and with minimal disruption in your workflows.",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 2,
      title: "ERP on Cloud",
      desc: "We revitalize your business performance delivering more agile, responsive and human-cantered ERP on Cloud.",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 3,
      title: "Application Migration to the Cloud",
      desc: "With the ability to scale resources on-demand, we specialize in the precise, secure and efficient migration of your applications to the cloud, employing technical expertise for error-free deployment to ensure a seamless transition.",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 4,
      title: "Cloud Backup and Disaster Recovery",
      desc: "We assure to secure your data and keep your business running, safeguarding your business against unexpected disruptions with scalable solution.",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
    },
    {
      _id: 5,
      title: "Cloud Database Migration",
      desc: "Our cloud migration experts employ a combination of Extract, Transform, Load (ETL) processes and real-time data replication to ensure a smooth transition.",
      cta: "Know more",
      link: "/",
      bg: "/gradient-1.png",
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

  return (
    <>
      {/* <Cursor isGelly={true} /> */}
      <main>
        {/* <Intro /> */}
        <EntIntro
          title="Reimagine Your Business Capabilities with Our Intelligent Edge-Enabled Cloud Stack & Services"
          desc="We leverage the power of the cloud to recalibrate our business, derive greater business value and refine your user experience"
          cta="Modernize your Business with Upgrade Cloud Services"
          width="70%"
          video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
        />
        {/* Upgrade to Cloud */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid sm:grid-cols-2 grid-cols-1">
              <div className="bg-white flex items-start flex-col justify-start">
                <div>
                  <h4
                    className={` font-medium text-[#0745D3] uppercase ribbon`}
                  >
                    UPGRADE TO CLOUD{""}
                  </h4>
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                    Minimizing Cost and Strengthening Agility with{" "}
                    <span className="text-[#0745D3]"> Better Security</span>{" "}
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    We help enterprises to foster resilience by entailing
                    bespoke and inclusive cloud upgradation roadmap. Our cloud
                    experts ensure migration of intricate IT environments to
                    advanced cloud platform without causing any interruption or
                    data loss while providing agility and scalability for
                    sustainable growth of our customers.
                  </p>
                </div>
              </div>
              <div>
                <Image src={shield} alt="shield" />
              </div>
            </div>
          </div>
        </>
        <CaseStudy />
        {/* On Prem changes*/}
        <>
          <div className={` w-full bg-white py-32`}>
            <>
              <div className="max-w-screen-xl mx-auto px-[2rem] bg-white">
                <div className=" mt-[5em] mb-[2rem]">
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                    <h3 className="text-4xl leading-[42px] font-bold">
                      On-premises Infrastructure Challenges
                    </h3>
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
        ;{/* Upgrade Now */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex">
              <div className="bg-white flex items-start flex-col justify-start">
                <div>
                  <h3 className="text-4xl leading-[42px] font-bold mb-5">
                    Upgrade Now?
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                    We revamp your core business application with cloud-native
                    development so that you can win a competitive threshold in
                    the marketplace. Our adept hyper-scaler team can help
                    rearchitect your business operations with an efficient
                    approach.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-5 sm:gap-10 mx-auto px-20 sm:px-[8rem]">
              {upgradeCloud.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={clsx(`col px-14 py-16 text-white`, {
                      "bg-[#344CA9]": item._id === 2,
                      " bg-[#320A53]": item._id === 4 || item._id === 5,
                      " bg-[url('/gradient-1.png')]": item._id === 1,
                      " bg-[url('/gradient-2.png')]": item._id === 3,
                    })}
                  >
                    <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                      {item.title}
                    </h4>
                    <p className="text-base leading-6 font-semibold">
                      {item.desc}
                    </p>
                    <Link
                      href={item.link}
                      className="flex text-[14px] leading-[22px] mt-10 max-w-max border-b-[1px] border-[#FFFFFF] items-center font-medium hover:scale-105"
                    >
                      {item.cta}{" "}
                      <span>
                        <Icon
                          path={mdiArrowRight}
                          style={{
                            marginLeft: "0.5em",
                            width: "1rem",
                            fontSize: "14px",
                          }}
                          className="cta-know-more"
                        />
                      </span>
                    </Link>
                  </div>
                );
              })}
              <div className="col text-white flex flex-col sm:flex-row gap-5 sm:gap-10  ">
                <div className=" bg-[#344CA9] px-10 py-10">
                  <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                    Cloud Monitoring and Reporting
                  </h4>
                  <p className="text-base leading-6 font-semibold">
                    Whether you&apos;re overseeing multi-cloud environments or
                    managing a single cloud provider, our solutions provide you
                    with the transparency and control you need to optimize
                    resource allocation, control costs and enhance overall cloud
                    efficiency.
                  </p>
                </div>
                <div className=" bg-[#320A53] px-10 py-10">
                  <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                    Cloud Microservices{" "}
                  </h4>
                  <p className="text-base leading-6 font-semibold">
                    We transform monolithic apps into agile, deployable
                    microservices. Tailored for specific tasks, our
                    microservices enhance agility, reduce time-to-market and
                    ensure seamless deployment, scaling, resource efficiency and
                    robust fault tolerance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* Unlocking agility */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] justify-center flex">
              <div className="bg-white ">
                <div>
                  <h3 className="text-4xl leading-[42px] font-bold mb-5">
                    Unlocking Agility and Intelligent Cloud Performance
                  </h3>
                </div>
              </div>
            </div>
            <div className="grid  sm:grid-rows-2 gap-10 sm:grid-flow-col-dense mx-auto px-20 sm:px-[8rem]">
              {aglity.map((item) => {
                return (
                  <div key={item._id} className=" p-8 bg-[#EDF1FF] h-full">
                    <Image src={icon} alt="icon" className="mb-5" />
                    <p className="text-[22px] font-bold leading-[30px]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
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
                    Let&apos;s Collaborate and Make it Happen
                  </h4>
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                    Why Godrej Infotech ?
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    Embark on cloud upgradation journey by harnessing our
                    credible assessment process, delivery framework, strategic
                    resources and fluent data migration practice to minimise
                    your business risk, time to market and cost while ensuring
                    pinnacle of performance.
                  </p>
                  <div className="  mt-[20rem]">
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
                          Dedicated and reliable partner for Azure Migration
                          Services and Managed Cloud Service across Europe,
                          APAC, ME and America
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
                          Business Continuity 99.95%, on – demand scalability,
                          best uptime performance in Industry.
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
                          Seamless upgradation to cloud platforms such as
                          Microsoft Azure and Amazon Web Services (AWS)
                        </p>
                      </motion.div>

                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        custom={4}
                        viewport={{
                          once: true,
                        }}
                        className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 sm:ml-20 w-[100%]"
                        variants={fadeInAnimationVariant}
                      >
                        <Image src={checkout} alt="checkout" />
                        <p className="text-base font-medium leading-[22px]">
                          Frictionless cloud upgradation delivery
                        </p>
                      </motion.div>

                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        custom={5}
                        viewport={{
                          once: true,
                        }}
                        className="flex flex-row justify-start items-center gap-x-5 bg-white rounded-md p-5 shadow-lg mb-5 sm:ml-20 w-[100%]"
                        variants={fadeInAnimationVariant}
                      >
                        <Image src={checkout} alt="checkout" />
                        <p className="text-base font-medium leading-[22px]">
                          Cost-efficient and consumption-based model under
                          single SLA.
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        <Benefits
          ribbon="Benefits "
          ribbonTxtWhite="true"
          title="Benefits of AI&ML "
          desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes offering a multitude of benefits that redefine the way we do business"
          arr={BenefitsData}
        ></Benefits>
        ;{/* az cloud services */}
        <>
          <div className={` w-full bg-white py-32`}>
            <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex">
              <div className="bg-white flex items-start flex-col justify-start">
                <div>
                  <h3 className="text-4xl leading-[42px] font-bold mb-5">
                    We are Trained and Accredited in Cloud Services
                  </h3>
                  <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                    We undergo demanding assessment and authorisation to
                    guarantee that our expertise and practices fulfil highest
                    standards of excellence.
                  </p>
                </div>
                <div className="flex justify-center flex-col sm:flex-row items-center mx-auto gap-5">
                  <div>
                    <Image src={azure} alt="azure" />
                  </div>
                  <div>
                    <Image src={microsoft} alt="microsoft" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        <Testimonials
          ribbon="CLIENT TESTIMONIALS"
          title="Delighted customers share their success experience "
          desc="Discover how we have helped our clients to realize tangible outcomes aligned with their business goals."
          arr={TestimonialsData}
        />
        {/* Join the Team */}
        <StrategySub />
      </main>
    </>
  );
}
