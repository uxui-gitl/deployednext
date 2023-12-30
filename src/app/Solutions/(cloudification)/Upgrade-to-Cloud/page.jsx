"use client";

import "react-creative-cursor/dist/styles.css";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import Testimonials from "@/sections/testimonial/Testimonial";
import shield from "../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../public/upgradeCloud/puzzle.png";
import Subscription from "@/components/Subscription";
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
import WhySection from "@/components/WhySection";
import Benefits from "@/components/Benefits";
import Icon from "@mdi/react";
import { mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import clsx from "clsx";
import SectionNav from "@/components/SectionNav";
import ClientLogos from "@/sections/clientLogos/ClientLogos";
import Spotlight from "@/components/Spotlight";

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
      clientDesignation:
        "ERP and Business Intelligence Head, Fast food service chain  ",
      thumbnail: "1",
      description:
        "Appreciation to Godrej Infotech's team for successfully completing two critical projects - upgrading the old ERP system to Dynamics Business Central on SAAS and implementing a cloud-based ETL process on Azure for restaurant sales and COGS processes. We're experiencing significant improvements in operational efficiency.",
      category: "static",
      link: "/",
    },
    {
      id: 2,
      clientName: "",
      clientDesignation:
        "Manager IT, India's leading Energy Management System and Solutions provider ",
      thumbnail: "1",
      description:
        "Godrej Infotech has proficiently upgraded our software from NAV 2016 to Business Central on SaaS, including seamless data migration. This helped us save on subscription costs & facilitated quicker transactional updates.",
      category: "static",
      link: "/",
    },
  ];

  // ex:
  const BenefitsData = [
    {
      _id: 1,
      icon: "gear",
      title: "Minimize operational expenses of IT portfolio",
    },
    {
      _id: 2,
      icon: "diamond",
      title: "Enable user concurrency to support large-scale workload",
    },
    {
      _id: 3,
      icon: "eyeGear",
      title:
        "Enhanced collaboration through cross-device accessibility to information",
    },
    {
      _id: 4,
      icon: "gear",
      title:
        "Advanced data management solutions, modernized process and cloud services",
    },
    {
      _id: 5,
      icon: "diamond",
      title: "Aptitude to respond to shifting business requirements",
    },
    {
      _id: 6,
      icon: "eyeGear",
      title:
        "Integrate Big Data Analytics into business processes for data-driven decision-making",
    },
    {
      _id: 7,
      icon: "eyeGear",
      title: "Securely stores confidential business information",
    },
    {
      _id: 8,
      icon: "eyeGear",
      title:
        "Enhance system performance and user experience by scaling up the system",
    },
    {
      _id: 9,
      icon: "eyeGear",
      title:
        "Accelerate transformation, integrate open innovation and smart workflows",
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
          title="Seamless Upgrade to Cloud"
          desc="Minimizing Cost and Strengthening Agility with Better Security"
          cta="Schedule a call with our Cloud Expert"
          width="100%"
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

        {/* Upgrade to Cloud */}
        <>
          <div className={` w-full bg-white pt-24`}>
            <div className="text-left   max-w-screen-xl  mb-5 mx-auto p-5 px-[2rem] grid sm:grid-cols-2 grid-cols-1">
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
        {/* <ClientLogos /> */}

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

              description:
                " Middle East-based Electrical Products Manufacturer ",
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

        {/* On premises Challenges*/}
        <>
          <div className={` w-full bg-[#f2f4f7] py-24`}>
            <>
              <div className="max-w-screen-xl mx-auto px-[2rem] bg-[#f2f4f7]">
                <div className="  ">
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                    <h3 className="text-left text-4xl leading-[42px] font-bold">
                      On-premises <br /> Infrastructure Challenges
                    </h3>
                  </div>
                </div>
              </div>
            </>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="bg-[#f2f4f7] flex items-start flex-col justify-start">
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
                        <p className="flex gap-4 mb-4 border-dashed border-b-2 pb-3 text-base leading-[22px]">
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

        {/* Upgrade Now */}
        <>
          <div className={` w-full bg-white py-24`}>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-5 sm:gap-10 mx-auto px-[2rem] md:px-20 sm:px-[8rem]">
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
                    <p className="text-base leading-6 font-medium">
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
              <div className="col text-[#fff] flex flex-col sm:flex-row gap-5 sm:gap-10  ">
                <div className=" bg-[#344CA9] px-10 py-10">
                  <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                    Cloud Monitoring and Reporting
                  </h4>
                  <p className="text-base leading-6 font-medium">
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
                  <p className="text-base leading-6 font-medium">
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

        {/* Spotlight test */}
        <div id="spotlight">
          <>
            <div className={`w-full text-left bg-[#f2f4f7] pt-32`}>
              <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto p-5 px-[2rem] ">
                <div className="bg-[#f2f4f7] text-left">
                  <h4 className={`font-medium text-[#0745D3] uppercase ribbon`}>
                    Services for successful results
                  </h4>
                  <div className="flex flex-col md:flex-row gap-8 ">
                    <h3 className="text-4xl leading-[42px] my-4 font-bold">
                      Accomplishing Your Goals at Every stage
                    </h3>
                    <p className="font-medium leading-[22px] md:w-[90%] my-4 ">
                      Enabling you to thrive in digital era, we prepare your
                      organisation with scaling growth for sustainable tomorrow
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
                    title: "Infrastructure and  Data Evaluation",
                    expandedTitle:
                      "Current Infrastructure and  Data Evaluation",
                    desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                    image: "/Spotlight/card1.png",
                  },
                  {
                    label: "02",
                    expandedLabel: "Step 02",
                    title: "Strategy  Designing ",
                    expandedTitle:
                      "Current Infrastructure and  Data Evaluation",
                    desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                    image: "/Spotlight/card1.png",
                  },
                  {
                    label: "03",
                    expandedLabel: "Step 03",
                    title: "Establishing Readiness",
                    expandedTitle:
                      "Current Infrastructure and  Data Evaluation",
                    desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                    image: "/Spotlight/card1.png",
                  },
                  {
                    label: "04",
                    expandedLabel: "Step 04",
                    title: "Upgradation and Execution",
                    expandedTitle:
                      "Current Infrastructure and  Data Evaluation",
                    desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                    image: "/Spotlight/card1.png",
                  },
                  {
                    label: "05",
                    expandedLabel: "Step 05",
                    title: "Management and Control",
                    expandedTitle:
                      "Current Infrastructure and  Data Evaluation",
                    desc: "Identifying migration ready systems and then understanding potential risk associated. This lays the groundwork for our plan of action",
                    image: "/Spotlight/card1.png",
                  },
                ]}
              />
            </div>
          </div>
        </div>

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

        {/* Unlocking agility */}

        <>
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
        </>

        <>
          <div className={` w-full bg-white mx-auto text-center py-24`}>
            <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 px-[2rem] text-center flex">
              <div className="mx-auto text-center bg-white flex items-center  flex-col justify-center">
                <div className="mx-auto text-center">
                  <h3 className="text-4xl leading-[42px] font-bold mb-5">
                    We are Trained and Accredited in Cloud Services
                  </h3>
                  <p className="font-normal leading-[22px] md:w-[80%] mx-auto">
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
        {/* Subscription */}
        <Subscription
          title="Lets discuss how upgrade to cloud can help you to enhance your business's growth potential. "
          blue=""
          title2=""
          desc="Please select a preferred time to call "
        />
      </main>
    </>
  );
}
