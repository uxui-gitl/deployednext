"use client";
import ClientLogos from "@/sections/clientLogos/ClientLogos";
import Expertise from "@/sections/expertise/Expertise";
import InfotechWeekly from "@/sections/infotechWeekly/InfotechWeekly";
import Intro from "@/sections/intro/Intro";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import Review from "@/sections/review/Review";
import Robot from "@/sections/robot/Robot";
import Subscribe from "@/sections/subscribe/Subscribe";
import ACT from "@/sections/ACT/ACT";
import "react-creative-cursor/dist/styles.css";
import Navbar from "@/components/Navbar/Navbar";
import Testimonial from "@/sections/testimonial/Testimonial";
import Announcement from "@/sections/announcement/Announcement";

import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight, mdiArrowTopRight } from "@mdi/js";
import { useScroll } from "framer-motion";
import { projects } from "../assets/data";
import clsx from "clsx";
import { NewTestimonial } from "@/components";

import ACTCard from "@/sections/ACTCard/ACTCard";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      {/* <Cursor isGelly={true} /> */}
      <main>
        <Announcement />

        <div className={`relative z-[500]`}>
          <div className={`absolute w-full  `}>
            <Navbar theme="light" />
          </div>
        </div>
        <Intro />
        <ClientLogos />
        <ACT />
        <Robot />
        <>
          <div
            id="actCards"
            className=" max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]"
          >
            <main ref={container} className={`relative mt-[20vh]`}>
              {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                  <ACTCard
                    key={`p_${i}`}
                    i={i}
                    {...project}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </main>
          </div>
        </>
        <Expertise />
        {/* Maximize business output / Vertical Slider */}

        {/* Our Ai Offerings */}
        <>
          <div className={` w-full bg-[#FFF] py-20`}>
            <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* left */}
              <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
                <div className="">
                  <h4
                    className={` font-medium text-[#0745D3] uppercase ribbon`}
                  >
                    Godrej Infotech Project Solutions Portfolio
                  </h4>
                  <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                    Our Offerings
                  </h3>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    Explore the boundless possibilities that our
                    industry-focused expertise and reliable partnerships bring
                    to your business landscape through service offerings.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-left w-full bg-amber-100 mb-5 mx-auto   grid grid-cols-1 md:grid-cols-3">
              {[
                {
                  _id: 1,
                  title: "Services",
                  desc: " ",
                  cta: "Explore Service",
                  ctaUrl: "/",
                  theme: "#E4F8ED",
                  btnTheme: "#4F9D73",
                  bgImg: "bg-card1",
                  links: [
                    {
                      title: "Business Consulting",
                      url: "/",
                    },
                    {
                      title: "Implementations & Global Rollout",
                      url: "/",
                    },
                    {
                      title: "Migrations & Transformation",
                      url: "/",
                    },
                    {
                      title: "Legacy Modernisation",
                      url: "/",
                    },

                    {
                      title: "Infrastructure as a service ",
                      url: "/",
                    },
                    {
                      title: "Managed Services",
                      url: "/",
                    },
                  ],
                },
                {
                  _id: 2,
                  title: "Industry Spotlight",
                  desc: "  ",
                  cta: "Explore Service",
                  ctaUrl: "/",
                  theme: "#101828",
                  bgImg: "",
                  btnTheme: "#0745D3",
                  links: [
                    {
                      title: "M365 ",
                      url: "/",
                    },
                    {
                      title: "Manufacturing",
                      url: "/",
                    },
                    {
                      title: "Retail",
                      url: "/",
                    },
                    {
                      title: "Trading & Distribution",
                      url: "/",
                    },
                    {
                      title: "Healthcare",
                      url: "/",
                    },
                    {
                      title: "Professional Service",
                      url: "/",
                    },
                    {
                      title: "Project",
                      url: "/",
                    },
                  ],
                },
                {
                  _id: 3,
                  title: "Partners",
                  desc: " ",
                  cta: "Explore Service",
                  bgImg: "",
                  ctaUrl: "/",
                  theme: "#320A53",
                  btnTheme: "#D4A73B",
                  links: [
                    {
                      title: "Microsoft",
                      url: "/",
                    },
                    {
                      title: "Infor",
                      url: "/",
                    },
                    {
                      title: "Oracle",
                      url: "/",
                    },
                    {
                      title: "Salesforce",
                      url: "/",
                    },
                    {
                      title: "LS Retail",
                      url: "/",
                    },
                    {
                      title: "Automation Anywhere",
                      url: "/",
                    },
                    {
                      title: "Ui Path",
                      url: "/",
                    },
                  ],
                },
              ].map((item, index) => (
                <div
                  className={clsx(
                    `bg-[${item.theme}] py-8 sm:py-8 px-8 sm:px-24`,
                    {
                      "bg-card1": item.bgImg !== "",
                    }
                  )}
                  key={item._id}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <p className="text-[#fff] font-bold text-[30px] leading-[36px]">
                        {item.title}
                      </p>
                      <p className="text-[#fff] text-[12px] font-normal my-4 leading-[18px]">
                        {item.desc}
                      </p>
                    </div>
                    <div>
                      <ul className="my-8">
                        {item.links.map((list, index) => (
                          <li
                            key={index}
                            className=" border-b-[1px] w-fit border-[#DBDBDB] py-2 "
                          >
                            <Link
                              href={list.url}
                              className="text-[#fff] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                            >
                              {list.title}{" "}
                              <Icon path={mdiArrowTopRight} size={1} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link className="hidden" href={item.ctaUrl}>
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
              thumbnail: "",
              description: "",
              tags: ["Automation"],
              cta: "Read more",
              link: "/",
            },
            {
              id: 2,
              title:
                "Prominent American watch and lifestyle distribution organization achieves heightened uptime, seamless management, positive ROI and enhanced data durability and reliability by transitioning to Azure through a Lift and Shift approach.",
              thumbnail: "",
              description: "",
              tags: ["Cloud"],
              cta: "Read more",
              link: "/",
            },
            {
              id: 3,
              title:
                "Germany based Automotive Company navigates system complexities and optimizes efficiency with Infor CloudSuite automotive support services from Godrej Infotech",
              thumbnail: "",
              description: "",
              tags: ["Transformation"],
              cta: "Read more",
              link: "/",
            },
          ]}
        />

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
              clientDesignation:
                "IT Director, Cooling Facility Management Company",
              thumbnail: "",
              description:
                "GITL helped us in accelerating digital transformation journey with Business Central on Azure cloud and Power BI solution. As a result, our material requisition efficiency has increased by 66%, time taken in processing purchase orders is reduced by 79% and invoice processing efficiency has improved by 60%.",
              category: "static",
              link: "/",
            },
            {
              id: 2,
              clientName: "",
              clientDesignation:
                "IT Director, Saudi Arabia's Leading Engineering & Construction Service Provider ",
              thumbnail: "1",
              description:
                "GITL upgraded Dynamics AX to Business Central on SAAS - and integrated Power BI seamlessly. The upgradation to an all-inclusive solution significantly helped us in taking control over our finance and budgeting processes.",
              category: "static",
              link: "/",
            },
            {
              id: 3,
              clientName: "",
              clientDesignation:
                "Operations Head, India's Security Solutions Company",
              thumbnail: "1",
              description:
                "Salesforce Sales Cloud implementation connected out complete lead-to-order cycle in customers' journey. GITL team proved their Infor LN expertise  and project management abilities by achieving highly challenging deadline.",
              category: "static",
              link: "/",
            },
          ]}
        />
        <Review />
        <InfotechWeekly />
        <Subscribe
          title="Subscribe NOW for Updates!"
          formCta="Subscribe"
          form={true}
        />
      </main>
    </>
  );
}
