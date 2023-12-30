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

import ACTCard from "@/sections/ACTCard/ACTCard";
import { useScroll } from "framer-motion";
import { projects } from "../assets/data";
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
      <main className=" overflow-hidden ">
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
              cta: "Read more",
              link: "/",
            },
            {
              id: 2,
              title:
                "Prominent American watch and lifestyle distribution organization achieves heightened uptime, seamless management, positive ROI and enhanced data durability and reliability by transitioning to Azure through a Lift and Shift approach.",
              thumbnail: "2",
              description: "",
              tags: ["Cloud"],
              cta: "Read more",
              link: "/",
            },
            {
              id: 3,
              title:
                "Germany based Automotive Company navigates system complexities and optimizes efficiency with Infor CloudSuite automotive support services from Godrej Infotech",
              thumbnail: "3",
              description: "",
              tags: ["Transformation"],
              cta: "Read more",
              link: "/",
            },
          ]}
        />
        <Testimonial
          ribbon="Testimonials "
          title="What Experts Think About Us "
          desc="It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout."
          arr={[
            {
              id: 1,
              clientName: "",
              clientDesignation:
                "IT Director, Cooling Facility Management Company",
              thumbnail: "1",
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
              thumbnail: "2",
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
              thumbnail: "3",
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
