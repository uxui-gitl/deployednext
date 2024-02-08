"use client";

import "react-creative-cursor/dist/styles.css";
import EntIntro from "@/components/EntIntro";
import Infographics from "@/components/Infographics";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";
import Expertise from "@/components/Expertise";
import SME from "@/components/SME";
import CardSwiper from "@/components/CardSwiper";
import StrategySub from "@/components/StrategySub";
import Spotlight from "@/components/Spotlight";
import Image from "next/image";
import Testimonial from "@/sections/testimonial/Testimonial";
import { Pagination } from "swiper/modules";
import SpotlightLogoGrid from "@/components/SpotlightLogoGrid";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import SectionNav from "@/components/SectionNav";
import "swiper/css/pagination";
import Awards from "@/sections/awards/Awards";
import Subscription from "@/components/Subscription";
import handShake from "../../../../../public/handShake.png";
import styles from "./page.module.css";
import BlogSlider from "@/components/BlogSlider";
import { Benefits, ServiceOfferingGrid, WhySection } from "@/components";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
const ChoiceSlider = [
  {
    _id: 1,
    imgUrl: "Industry-Spotlight-Manufacturing",
    title: "Manufacturing",
    desc: "",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "Industry-Spotlight-Retail",
    title: "Retail",
    desc: "",
    url: "/",
  },
  {
    _id: 3,
    title: "Trading and Distribution",
    desc: "",
    imgUrl: "Industry-Spotlight-rading-and-Distribution",
    url: "/",
  },
  {
    _id: 4,
    title: "Healthcare ",
    desc: "",
    imgUrl: "Industry-served-Healthcare",
    url: "/",
  },
  {
    _id: 5,
    title: "Project ",
    desc: "",
    imgUrl: "Industry-Spotlight-Projects",
    url: "/",
  },
  {
    _id: 6,
    title: "Professional services",
    desc: "",
    imgUrl: "ProfessionalServices",
    url: "/",
  },
];

const blogData = [
  {
    _id: 1,
    ribbon: "blog",
    title: "Digital Transformation - The need of the hour",
    desc: "Digital Transformation is changing the way business is done in every sector of the economy. Businesses need to transform themselves into digital enterprises to thrive and succeed in this new era. It is not just about adopting new technologies. It is about learning how these technologies can be applied to the existing business models so as to yield better results. For this, today’s leaders must debunk the myths in the industry, be open to learning, adapting & collaborating, thereby helping their organizations to ride this tide by following a successful transformation roadmap.",
    cta: "Read More",
    link: "https://www.godrejinfotech.com/blogDetails.aspx?blog=18",
    imgUrl: "",
  },
];

const expandedCardSlider = [
  {
    _id: 1,
    imgUrl: "Dealer-Management",
    title: "Dealer Management",
    desc: "Experience user friendly Dealer management system built for retail dealers to easily manage end-to-end inventory operations and order process. Developed using Dot NET technology and integrated with Business Central, this cutting-edge solution eliminates manual data entry, reducing errors, streamlines processes and provides accurate information. Leveraging this solution customers can access real-time insights, track inventory, monitor sales and make data-driven decisions effortlessly.",
    url: "/",
  },
  {
    _id: 2,
    imgUrl: "Godrej-Solution-Valve-Management",
    title: "Valve Manufacturing Process Management",
    desc: "Specifically built for unique requirements of valve manufacturing industry, this solution encompasses pre-configured business process mapping and standardize process. This work-around solution for intricate business processes ensures smooth operations even in challenging scenarios.",
    url: "/",
  },
  {
    _id: 3,
    title: "Metal Recycling Operations Management",
    desc: "This pre-built industry-specific customizations assures a unified integration that aligns perfectly with the unique demands of metal recycling business. Backed by extensive business process knowledge, our solution is developed to optimize your operations.",
    imgUrl: "Godrej-Solution-Metal-Solutions",
    url: "/",
  },
  // {
  //   _id: 4,
  //   title: "Dealer Management",
  //   desc: "Dealer Management Collaborating with top- tier application providers, we recognise and deliver right technology for your business to bring forth scalable transformation",
  //   imgUrl: "2",
  //   url: "/",
  // },
];
export default function Home() {
  return (
    <>
      <main>
        {/* <Intro /> */}
        <EntIntro
          title="Transforming your customer
          lifecycle with purpose
          driven technology "
          desc="We assist your organization to respond to the most important stakeholder's expectations with agility and accuracy. Encompassing all business units, we collaborate with you to drive transformation throughout the entire customer journey.  We deliver solutions that are globally deployed in an industrialized manner, to ensure optimal outcomes"
          cta="Let's Connect"
          width="90%"
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

        {/* Grid */}
        <>
          <ServiceOfferingGrid
            title="Advance Solutions for
            Transforming Customer
            Experience"
            desc="We are dedicated to helping businesses like yours to optimize sales processes and drive greater sales results. We collaborate closely with you to gain a deep understanding of your sales operations to fine-tune Infor CRM and align perfectly with your business objectives"
            ctaDesc="Let's Connect for a Walkthrough"
            cta="Let's Connect"
            arr={[
              {
                _id: 1,
                type: "box",
                title: "Power BI",
                theme: "light",
                bg: "transparent",
                desc: "Backed by seasoned professionals, we have developed a distinct proficiency in harnessing the capabilities of Power BI. Our focus is to distill intricate data into actionable insights that catalyze a culture of business excellence.",
                icon: "Power-BI-Logo.png",
                cta: "Know More",
              },
              {
                _id: 2,
                type: "box",
                title: "Tableau",
                theme: "dark",
                bg: "#4C6FFF",
                desc: "Seamlessly integrate Tableau into your operations, enabling to visualize data in captivating ways, discover hidden trends and insights, and make informed decisions.",
                icon: "Power-App.png",
                cta: "Know More",
              },
              {
                _id: 3,
                type: "box",
                title: "Birst ",
                theme: "dark",
                bg: "#07001F",
                desc: "The aim is to facilitate faster decision-making with flexibility and keep your business agile and forward-thinking. Birst seamlessly connect and consolidates data from various sources, regardless of their structure or location (on-premises or in the cloud).",
                icon: "Birst-logo.png",
                cta: "Know More",
              },
              {
                _id: 1,
                type: "box",
                title: "Power BI",
                theme: "light",
                bg: "transparent",
                desc: "Backed by seasoned professionals, we have developed a distinct proficiency in harnessing the capabilities of Power BI. Our focus is to distill intricate data into actionable insights that catalyze a culture of business excellence.",
                icon: "Power-BI-Logo.png",
                cta: "Know More",
              },
              {
                _id: 2,
                type: "box",
                title: "Tableau",
                theme: "dark",
                bg: "#4C6FFF",
                desc: "Seamlessly integrate Tableau into your operations, enabling to visualize data in captivating ways, discover hidden trends and insights, and make informed decisions.",
                icon: "Power-App.png",
                cta: "Know More",
              },
              {
                _id: 3,
                type: "box",
                title: "Birst ",
                theme: "dark",
                bg: "#07001F",
                desc: "The aim is to facilitate faster decision-making with flexibility and keep your business agile and forward-thinking. Birst seamlessly connect and consolidates data from various sources, regardless of their structure or location (on-premises or in the cloud).",
                icon: "Birst-logo.png",
                cta: "Know More",
              },
            ]}
          />
        </>

        {/* Expertise */}
        <Expertise
          ribbon="Acing Your Business Objectives"
          ribbonTxtWhite="true"
          title="The Hub of Expertise"
          desc="We are here to build competitive edge with technology brilliance for businesses across the world."
          arr={[
            {
              title: "25+",
              desc: "Years of Experience",
            },
            {
              title: "500+",
              desc: "Customers Worldwide",
            },
            {
              title: "500+",
              desc: "Employees Worldwide",
            },
            {
              title: "1000+",
              desc: "Implementation Sites",
            },
            {
              title: "15000+",
              desc: "Man Years of Experience",
            },
            {
              title: "24*7",
              desc: "Support",
            },
          ]}
        ></Expertise>

        {/* Experience solutions */}
        <>
          <>
            <div className={` w-full bg-[#FFF] pt-24`}>
              <div className="   pb-0   grid grid-cols-1 gap-5 sm:grid-cols-2 text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]">
                <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                  <div className="">
                    <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                      Customer experience Service
                    </h3>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-normal leading-[22px] md:w-[90%] ">
                      Starting precisely where you stand in your digital
                      transformation journey, we seamlessly integrate our teams
                      into your culture, fostering a collaborative environment
                      for success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
          <>
            <div
              className={`bg-img w-full pt-24 pb-12 mt-20`}
              id="productivity"
            >
              <div className="flex flex-col sm:flex-row gap-5 justify-center text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
                {[
                  {
                    _id: 1,
                    title: "CRM services",
                    desc: "We aim to optimize revenue, enhance profitability, and cultivate customer satisfaction and loyalty. Through our comprehensive approach, we meticulously select and implement the most suitable CRM tailored to your unique vision, fostering desired business outcomes",
                    cta: "Know More",
                    icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                    link: "/",
                  },
                  {
                    _id: 2,
                    title: "Ecommerce   ",
                    desc: "We aim to optimize revenue, enhance profitability, and cultivate customer satisfaction and loyalty. Through our comprehensive approach, we meticulously select and implement the most suitable CRM tailored to your unique vision, fostering desired business outcomes",
                    icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                    cta: "Know More",
                    link: "/",
                  },
                ].map((item, index) => {
                  return (
                    <div
                      key={item._id}
                      className="mx-2 w-fit md:w-1/2 bg-white flex flex-col justify-between "
                    >
                      <div className="p-5 w-fit ">
                        <div className="mb-4">
                          {item.icon !== "" ? (
                            <Image
                              src={`/${item.icon}.svg`}
                              width={56}
                              height={56}
                              alt={item.icon}
                            />
                          ) : (
                            <Icon path={mdiDomain} size={3} />
                          )}
                        </div>
                        <h4 className="text-[26px] font-bold mb-4 md:mb-8 leading-[34px] text-[#101828]">
                          {item.title}
                        </h4>
                        <div>
                          <p className="text-[14px] leading-[22px] mb-4 text-[#101828]">
                            {item.desc}
                          </p>
                        </div>
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

        {/* Infographics */}
        <>
          <div className="max-w-screen-xl mx-auto px-[2rem] pb-20 bg-white">
            <div className=" mt-[5em] mb-[2em]">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                <h3 className="text-4xl leading-[42px] font-bold">
                  With our Holistic Approach
                </h3>
                <p className="font-normal leading-[22px] w-[80%] mx-auto">
                  We redefine success standards globally with robust enterprise
                  solutions to enhance stakeholder experiences, strengthen
                  business resilience and modernize IT environment.
                </p>
              </div>
            </div>
            <div className="mx-auto text-center w-max">
              <Infographics src="/customerExperience/Doctorine.png" />
            </div>
          </div>
        </>

        {/* Why Infotech */}
        <WhySection
          ribbon="Let's Collaborate and Make it Happen"
          title="Why Choose GITL for AI and ML?"
          desc="It is our Hexagon EAM expertise , experience and commitment to excellence that sets us apart in a competitive landscape."
          arr={[
            {
              _id: 1,
              desc: "<span style='color: #4C6FFF;'> Deep understanding of your specific business domain </span> is crucial for creating AI and ML solutions that truly meet your needs",
              icon: "",
            },
            {
              _id: 2,
              desc: "<span style='color: #4C6FFF;'> Agile approach  </span> that keeps projects on cutting edge .",
              icon: "",
            },
            {
              _id: 3,
              desc: "Fully signed Non-Disclosure Agreement (NDA) to <span style='color: #4C6FFF;'> protect your sensitive information.</span>",
              icon: "",
            },
            {
              _id: 4,
              desc: "<span style='color: #4C6FFF;'> Exceed customer expectations</span> and deliver AI and ML solutions in most effective way.",
              icon: "",
            },
          ]}
          renderInlineSpans={true}
        ></WhySection>

        {/* Benefits Vertical Slider */}
        <Benefits
          ribbon="Benefits "
          ribbonTxtWhite="true"
          title="AI&ML "
          desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes offering a multitude of benefits that redefine the way we do business."
          arr={[
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
                "Effortless communication and efficient information retrieval through Natural Language Processing",
            },
            {
              _id: 4,
              icon: "benefits-ai-ml/optimise-supply-chain",
              cardDesc:
                "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity",
            },
            {
              _id: 5,
              icon: "benefits-ai-ml/healthcare",
              cardDesc:
                "Revolutionising Healthcare with medical image analysis",
            },
          ]}
        ></Benefits>

        {/* Awards n achievements */}
        <Awards />

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

        {/* Subscription */}
        <Subscription
          title="Free 30 minutes IT strategy session with our consultant?"
          desc="Let's discuss how Godrej Infotech can help your business with efficiency and business continuity. Your Tomorrow Starts Here!"
        />

        {/* infotech weekly */}
        <>
          <div className="hidden">
            <InfotechWeeklyAlt />
          </div>
        </>
      </main>
    </>
  );
}
