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
  return (
    <>
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
