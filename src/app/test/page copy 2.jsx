"use client";
import EntIntro from "@/components/EntIntro";
import EmployeeExp from "@/components/EmployeeExp";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";
import ACTCard from "@/sections/ACTCard/ACTCard";
import { useScroll } from "framer-motion";
import { projects } from "../../assets/data";
import { useEffect, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import gmap from "../../../public/contact/map.png";
import CAT from "../../../public/Capabilities---Application-transformation.jpg";

import Spotlight from "@/components/Spotlight";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowLeft, mdiArrowRight, mdiArrowTopRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import Dropdown from "@/components/Dropdown";
import NewTestimonial from "@/components/NewTestimonial";
import clsx from "clsx";
export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <>
        <div className={` w-full pb-12 `}>
          <div className="flex flex-col sm:flex-row gap-y-5 justify-center text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto  p-5">
            {[
              {
                _id: 1,
                title: "Infrastructure",
                desc: "We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
                keyword: "Enable",
                color: "#032573",
                bgcolor1: "#7491D4",
                bgcolor2: "#EDF1FF",
                bgcolor3: "#0745D3",
                icon: "icon/RPA-projectLifestyle/InfrastructureSetup",
                list: [
                  "Designing the server architecture",
                  "Installing and configuring the architecture",
                  "Setting up dev, test & production environments",
                ],
              },
              {
                _id: 2,
                title: "Project Governance ",
                desc: "We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
                keyword: "Prepare",
                color: "#806113",
                bgcolor1: "#F5D687",
                bgcolor2: "#FFF8E5",
                bgcolor3: "#F4C447",
                icon: "icon/RPA-projectLifestyle/ProjectGovernance",
                list: [
                  "Project Governance",
                  "Agreeing on the project development approach",
                  "Reviewing the RPA best practices",
                ],
              },
              {
                _id: 3,
                desc: "We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
                title: "Workflow ",
                keyword: "Design",
                color: "#224D37",
                bgcolor1: "#6D917F",
                bgcolor2: "#E5F8EE",
                bgcolor3: "#429268",
                icon: "icon/RPA-projectLifestyle/WorkflowDesign",
                list: [
                  "Filling in the Process Design Document (PDO)",
                  "Creating test cases and data",
                  "Designing the solution",
                ],
              },
            ].map((item) => {
              const isHovered = item._id === hoveredCard;
              return (
                <div
                  key={item._id}
                  className={` mx-2 w-full flex flex-col justify-between`}
                >
                  <div
                    className={`p-5 w-full h-full `}
                    style={{
                      backgroundColor: item.bgcolor2,
                    }}
                  >
                    <div
                      className={
                        "block  text-clip text-[#475467] leading-[22px] text-sm pt-[16px]  pb-[14px]"
                      }
                    >
                      {item.desc}
                    </div>
                    <div>
                      <p class="text-sm font-medium text-[#101828] leading-[22px]">
                        IT Manager
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-full p-1`}
                    style={{
                      backgroundColor: item.bgcolor3,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </>
      <NewTestimonial
        ribbon="CLIENT TESTIMONIALS"
        title="Delighted customers share their success experience "
        desc="Discover how we have helped our clients to realize tangible outcomes aligned with their business goals."
        arr={[
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
        ]}
      />
    </>
  );
}
