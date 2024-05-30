"use client";
import EntIntro from "@/components/EntIntro";
import StrategySub from "@/components/StrategySub";
import shield from "../../../../../../public/upgradeCloud/sheild.png";
import puzzle from "../../../../../../public/upgradeCloud/puzzle.png";
import Testimonial from "@/sections/testimonial/Testimonial";
import Expertise from "@/components/Expertise";
import WhySection from "@/components/WhySection";
import icon from "../../../../../../public/icon.png";
import microsoft from "../../../../../../public/upgradeCloud/microsoft.png";
import azure from "../../../../../../public/upgradeCloud/azure.png";
import checkout from "../../../../../../public/upgradeCloud/checkout.png";
import curiousPerson from "../../../../../../public/upgradeCloud/curiousPerson.png";
import cloud from "../../../../../../public/upgradeCloud/cloud.png";
import cloudArrows from "../../../../../../public/upgradeCloud/cloudArrows.png";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PowerBI from "../../../../../../public/Power-BI-Logo.png";
import PowerApp from "../../../../../../public/Power-App.png";
import Birst from "../../../../../../public/Birst-logo.png";
import dummy from "../../../../../../public/dummy.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiBullseyeArrow } from "@mdi/js";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import CaseStudy from "@/sections/caseStudy/CaseStudy";
import SectionNav from "@/components/SectionNav";
import BlogSlider from "@/components/BlogSlider";
import SME from "@/components/SME";
// import WhyInfotech from "@/components/WhyInfotech";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";

import styles from "./page.module.css";
import Awards from "@/sections/awards/Awards";
import Infographics from "@/components/Infographics";
import clsx from "clsx";
import Subscription from "@/components/Subscription";
import Abstract from "@/components/Abstract";
import { useState } from "react";
import { NewTestimonial } from "@/components";
const smartTools = [
  {
    _id: 1,
    type: "box",
    title: "Infor CRM",
    theme: "light",
    bg: "transparent",
    desc: "With Power BI integration - a highly scalable analytics platform that accommodates both individual users",
    icon: "Power-BI-Logo.png",
    cta: "Know More",
  },
  {
    _id: 2,
    type: "box",
    title: "Microsoft CRM",
    theme: "dark",
    bg: "#4C6FFF",
    desc: "We help you to efficiently develop low-code applications in a fraction of the time with Power Apps",
    icon: "Power-App.png",
    cta: "Know More",
  },
  {
    _id: 3,
    type: "box",
    title: "Salesforce ",
    theme: "dark",
    bg: "#07001F",
    desc: "The aim is to facilitate faster decision-making with the tools and flexibility to implement new insight",
    icon: "Birst-logo.png",
    cta: "Know More",
  },
  {
    _id: 4,
    type: "box",
    title: "Magento",
    theme: "dark",
    bg: "transparent",
    desc: "Extracting insights from tapped and  untapped data assets, we help you understand customer behaviour",
    icon: "dummy.png",
    cta: "Know More",
  },
  {
    _id: 5,
    type: "box",
    title: "LS Retail",
    theme: "light",
    bg: "transparent",
    desc: "We specialize in assisting customers on their digital transformation journey by designing and deploying custom data lake",
    icon: "dummy.png",
    cta: "Know More",
  },
];
const ChoiceSlider = [
  {
    _id: 1,
    title: "Manufacturing",
    imgUrl: "Industry-Spotlight-Manufacturing",
    url: "/",
    list: [
      "Industrial Manufacturing ",
      "Automotive OEM/ Suppliers ",
      "High-Tech Electronics ",
      "Refinery, Petro-Chemical and Process Equipment ",
      "Aerospace & Defense Equipment ",
      "Ship Design, Building and Repairs ",
      "Infrastructure / EPC with Turnkey and BOOT BOLT ",
      "Industrial Manufacturing ",
      "Automotive OEM/ Suppliers ",
      "High-Tech Electronics ",
    ],
  },
  {
    _id: 2,
    title: "Automotive",
    imgUrl: "Industry-Spotlight-Retail",
    url: "/",
    list: [
      "OEM",
      "Tire Suppliers",
      "After Market Spare part & Services",
      "Trading",
    ],
  },
  {
    _id: 3,
    title: "Project & Contracting",
    imgUrl: "Industry-Spotlight-rading-and-Distribution",
    url: "/",
    list: ["EPC", "Turnkey Project"],
  },
  {
    _id: 4,
    title: "Warehouse Management",
    imgUrl: "Industry-Spotlight-Projects",
    url: "/",
    list: ["3PL", "Logistics Services"],
  },
];

const InforGrid = [
  {
    _id: 1,
    title: "Infor LN",
    icon: "dummy",
  },
  {
    _id: 2,
    title: "Factory Track",
    icon: "dummy",
  },
  {
    _id: 3,
    title: "Infor OS",
    icon: "dummy",
  },
  {
    _id: 4,
    title: "Infor CPQ",
    icon: "dummy",
  },
  {
    _id: 5,
    title: "Infor HCM ",
    icon: "dummy",
  },
  {
    _id: 6,
    title: "Infor WMS",
    icon: "dummy",
  },

  {
    _id: 7,
    title: "Expense Management",
    icon: "dummy",
  },

  {
    _id: 8,
    title: "Infor CRM",
    icon: "dummy",
  },
  {
    _id: 9,
    title: "Infor Birst",
    icon: "dummy",
  },
];
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
const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedTabContent, setSelectedTabContent] = useState([]);
  const [selectedTabContentListID, setSelectedTabContentListID] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const openPopup = (title, tab) => {
    setSelectedTitle(title);
    setIsPopupOpen(true);
    setSelectedTabContent(tab);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleTabClick = (index, _tabId) => {
    // console.log(index["_tabId"]);
    setActiveTab(index["_tabId"] - 1);
    setSelectedTabContentListID(_tabId);
  };

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

  const upgradeCloud = [
    {
      _id: 1,
      title: "End-to-End Implementation",
      desc: "Streamlining every phase of the implementation with the capability of successful and on-time delivery of Infor solution.",
      cta: "",
      isNested: false,
      ctaUrl: "",
      bgImg: "/gradient-1.png",
      tabData: [
        {
          _tabId: 1,
          title: "AX Upgrade",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics AX?",
              li: [
                "Mainstream support ended for Dynamics AX versions like 2009, 2012 and 2012 R2 in October 2018, while AX 2012 R3 mainstream support ended in October 2021. ",
                "Dependency on ISV and partner channels ",
                "Non-compliance risk for any regulatory updates for  AX 2012 customers. ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of AX Upgrade to Cloud",
              li: [
                "Adaptive Scalability  ",
                "Cost Effective Platform  ",
                "Advance Security & Modern Functionalities ",
                "Live Business Performance Monitoring ",
                "Multiple Integration Ability ",
                "Browser based ERP  ",
                "Auto update cloud environments ",
              ],
            },
          ],
        },
        {
          _tabId: 2,
          title: "Nav Upgrade",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics Nav? ",
              li: [
                "Microsoft discontinued updates and customizations for Dynamics NAV versions ",
                "Lag for basic tasks as well ",
                "No remote accessibility and support ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Upgrading Nav to Cloud",
              li: [
                "Built-in AI and machine learning capabilities",
                "Better reporting and analytics",
                "Seamless integration with Microsoft products and third-party applications  ",
                "Mobile and web access, anywhere, anytime ",
                "Higher security features ",
                "Optimised operation ",
                "Effective User management cost  ",
              ],
            },
          ],
        },
        {
          _tabId: 3,
          title: "Upgrade to Infor Cloud ",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Infor On- premises Challenges",
              li: [
                "Keeping up with the latest security and version updates ",
                "Manual efforts to configure dynamic workloads",
                "Lack of applications elasticity and not-so - efficient performance ",
                "Manual Operational activities",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Infor Cloud",
              li: [
                "Infor Data Lake enables predictive data insights.",
                "Prepackaged industry analytics",
                "Clear production visualization",
                "Finance functionalities like IFRS 15 compliance, XML support, currency variation based on payment schedule",
                "Field and depot service process with extended warranty contracts and Project Control integration.  ",
              ],
            },
          ],
        },
      ],
    },
    {
      _id: 2,
      title: "Managed Services",
      desc: "Managing every complex, time-consuming and resource-rigorous process and on -demand maintenance of Infor application.",
      cta: "",
      isNested: false,
      ctaUrl: "",
      bgImg: "/gradient-1.png",
      tabData: [
        {
          _tabId: 1,
          title: "AX Upgrade",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics AX?",
              li: [
                "Mainstream support ended for Dynamics AX versions like 2009, 2012 and 2012 R2 in October 2018, while AX 2012 R3 mainstream support ended in October 2021. ",
                "Dependency on ISV and partner channels ",
                "Non-compliance risk for any regulatory updates for  AX 2012 customers. ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of AX Upgrade to Cloud",
              li: [
                "Adaptive Scalability  ",
                "Cost Effective Platform  ",
                "Advance Security & Modern Functionalities ",
                "Live Business Performance Monitoring ",
                "Multiple Integration Ability ",
                "Browser based ERP  ",
                "Auto update cloud environments ",
              ],
            },
          ],
        },
        {
          _tabId: 2,
          title: "Nav Upgrade ",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics Nav? ",
              li: [
                "Microsoft discontinued updates and customizations for Dynamics NAV versions ",
                "Lag for basic tasks as well ",
                "No remote accessibility and support ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Upgrading Nav to Cloud",
              li: [
                "Built-in AI and machine learning capabilities",
                "Better reporting and analytics",
                "Seamless integration with Microsoft products and third-party applications  ",
                "Mobile and web access, anywhere, anytime ",
                "Higher security features ",
                "Optimised operation ",
                "Effective User management cost  ",
              ],
            },
          ],
        },
        {
          _tabId: 3,
          title: "Upgrade to Infor Cloud ",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Infor On- premises Challenges ",
              li: [
                "Keeping up with the latest security and version updates ",
                "Manual efforts to configure dynamic workloads",
                "Lack of applications elasticity and not-so - efficient performance ",
                "Manual Operational activities",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Infor Cloud",
              li: [
                "Infor Data Lake enables predictive data insights.",
                "Prepackaged industry analytics",
                "Clear production visualization",
                "Finance functionalities like IFRS 15 compliance, XML support, currency variation based on payment schedule",
                "Field and depot service process with extended warranty contracts and Project Control integration.  ",
              ],
            },
          ],
        },
      ],
    },
    {
      _id: 3,
      title: "Migrate to the Cloud",
      desc: "Ensuring a smooth and efficient migration process with minimum business disruptions",
      cta: "",
      isNested: false,
      ctaUrl: "",
      bgImg: "/gradient-1.png",
      tabData: [
        {
          _tabId: 1,
          title: "AX Upgrade",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics AX?",
              li: [
                "Mainstream support ended for Dynamics AX versions like 2009, 2012 and 2012 R2 in October 2018, while AX 2012 R3 mainstream support ended in October 2021. ",
                "Dependency on ISV and partner channels ",
                "Non-compliance risk for any regulatory updates for  AX 2012 customers. ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of AX Upgrade to Cloud",
              li: [
                "Adaptive Scalability  ",
                "Cost Effective Platform  ",
                "Advance Security & Modern Functionalities ",
                "Live Business Performance Monitoring ",
                "Multiple Integration Ability ",
                "Browser based ERP  ",
                "Auto update cloud environments ",
              ],
            },
          ],
        },
        {
          _tabId: 2,
          title: "Nav Upgrade ",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics Nav? ",
              li: [
                "Microsoft discontinued updates and customizations for Dynamics NAV versions ",
                "Lag for basic tasks as well ",
                "No remote accessibility and support ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Upgrading Nav to Cloud",
              li: [
                "Built-in AI and machine learning capabilities",
                "Better reporting and analytics",
                "Seamless integration with Microsoft products and third-party applications  ",
                "Mobile and web access, anywhere, anytime ",
                "Higher security features ",
                "Optimised operation",
                "Effective User management cost",
              ],
            },
          ],
        },
        {
          _tabId: 3,
          title: "Upgrade to Infor Cloud",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Infor On- premises Challenges",
              li: [
                "Keeping up with the latest security and version updates ",
                "Manual efforts to configure dynamic workloads",
                "Lack of applications elasticity and not-so - efficient performance ",
                "Manual Operational activities",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Infor Cloud",
              li: [
                "Infor Data Lake enables predictive data insights.",
                "Prepackaged industry analytics",
                "Clear production visualization",
                "Finance functionalities like IFRS 15 compliance, XML support, currency variation based on payment schedule",
                "Field and depot service process with extended warranty contracts and Project Control integration.  ",
              ],
            },
          ],
        },
      ],
    },
    {
      _id: 4,
      title: "Migrate From a different ERP Platform to Infor LN ",
      desc: "Experience seamless and transformative migration with data integrity.",
      cta: "",
      isNested: false,
      ctaUrl: "",
      bgImg: "/gradient-1.png",
      tabData: [
        {
          _tabId: 1,
          title: "AX Upgrade",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics AX?",
              li: [
                "Mainstream support ended for Dynamics AX versions like 2009, 2012 and 2012 R2 in October 2018, while AX 2012 R3 mainstream support ended in October 2021. ",
                "Dependency on ISV and partner channels ",
                "Non-compliance risk for any regulatory updates for  AX 2012 customers. ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of AX Upgrade to Cloud",
              li: [
                "Adaptive Scalability  ",
                "Cost Effective Platform  ",
                "Advance Security & Modern Functionalities ",
                "Live Business Performance Monitoring ",
                "Multiple Integration Ability ",
                "Browser based ERP  ",
                "Auto update cloud environments ",
              ],
            },
          ],
        },
        {
          _tabId: 2,
          title: "Nav Upgrade ",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics Nav? ",
              li: [
                "Microsoft discontinued updates and customizations for Dynamics NAV versions ",
                "Lag for basic tasks as well ",
                "No remote accessibility and support ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Upgrading Nav to Cloud",
              li: [
                "Built-in AI and machine learning capabilities",
                "Better reporting and analytics",
                "Seamless integration with Microsoft products and third-party applications  ",
                "Mobile and web access, anywhere, anytime ",
                "Higher security features ",
                "Optimised operation ",
                "Effective User management cost  ",
              ],
            },
          ],
        },
        {
          _tabId: 3,
          title: "Upgrade to Infor Cloud ",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Infor On- premises Challenges ",
              li: [
                "Keeping up with the latest security and version updates ",
                "Manual efforts to configure dynamic workloads",
                "Lack of applications elasticity and not-so - efficient performance ",
                "Manual Operational activities",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Infor Cloud",
              li: [
                "Infor Data Lake enables predictive data insights.",
                "Prepackaged industry analytics",
                "Clear production visualization",
                "Finance functionalities like IFRS 15 compliance, XML support, currency variation based on payment schedule",
                "Field and depot service process with extended warranty contracts and Project Control integration.  ",
              ],
            },
          ],
        },
      ],
    },
    {
      _id: 5,
      title: "Upgrade with Infor",
      desc: "Get access to the latest Infor platforms, ensuring improved overall performance.",
      cta: "",
      isNested: false,
      ctaUrl: "",
      bgImg: "/gradient-1.png",
      tabData: [
        {
          _tabId: 1,
          title: "AX Upgrade",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics AX?",
              li: [
                "Mainstream support ended for Dynamics AX versions like 2009, 2012 and 2012 R2 in October 2018, while AX 2012 R3 mainstream support ended in October 2021. ",
                "Dependency on ISV and partner channels ",
                "Non-compliance risk for any regulatory updates for  AX 2012 customers. ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of AX Upgrade to Cloud",
              li: [
                "Adaptive Scalability  ",
                "Cost Effective Platform  ",
                "Advance Security & Modern Functionalities ",
                "Live Business Performance Monitoring ",
                "Multiple Integration Ability ",
                "Browser based ERP  ",
                "Auto update cloud environments ",
              ],
            },
          ],
        },
        {
          _tabId: 2,
          title: "Nav Upgrade",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics Nav?",
              li: [
                "Microsoft discontinued updates and customizations for Dynamics NAV versions",
                "Lag for basic tasks as well ",
                "No remote accessibility and support ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Upgrading Nav to Cloud",
              li: [
                "Built-in AI and machine learning capabilities",
                "Better reporting and analytics",
                "Seamless integration with Microsoft products and third-party applications  ",
                "Mobile and web access, anywhere, anytime ",
                "Higher security features ",
                "Optimised operation ",
                "Effective User management cost  ",
              ],
            },
          ],
        },
        {
          _tabId: 3,
          title: "Upgrade to Infor Cloud ",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Infor On- premises Challenges ",
              li: [
                "Keeping up with the latest security and version updates ",
                "Manual efforts to configure dynamic workloads",
                "Lack of applications elasticity and not-so - efficient performance ",
                "Manual Operational activities",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Infor Cloud",
              li: [
                "Infor Data Lake enables predictive data insights.",
                "Prepackaged industry analytics",
                "Clear production visualization",
                "Finance functionalities like IFRS 15 compliance, XML support, currency variation based on payment schedule",
                "Field and depot service process with extended warranty contracts and Project Control integration.  ",
              ],
            },
          ],
        },
      ],
    },
    {
      _id: 6,
      title: "Custom Development & Integrations",
      desc: "Value-adding customizations and integrations that deliver better business outcomes.",
      cta: "",
      isNested: false,
      ctaUrl: "",
      bgImg: "/gradient-1.png",
      tabData: [
        {
          _tabId: 1,
          title: "AX Upgrade",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics AX?",
              li: [
                "Mainstream support ended for Dynamics AX versions like 2009, 2012 and 2012 R2 in October 2018, while AX 2012 R3 mainstream support ended in October 2021. ",
                "Dependency on ISV and partner channels ",
                "Non-compliance risk for any regulatory updates for  AX 2012 customers. ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of AX Upgrade to Cloud",
              li: [
                "Adaptive Scalability  ",
                "Cost Effective Platform  ",
                "Advance Security & Modern Functionalities ",
                "Live Business Performance Monitoring ",
                "Multiple Integration Ability ",
                "Browser based ERP  ",
                "Auto update cloud environments ",
              ],
            },
          ],
        },
        {
          _tabId: 2,
          title: "Nav Upgrade ",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Why Upgrade Dynamics Nav? ",
              li: [
                "Microsoft discontinued updates and customizations for Dynamics NAV versions ",
                "Lag for basic tasks as well ",
                "No remote accessibility and support ",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Upgrading Nav to Cloud",
              li: [
                "Built-in AI and machine learning capabilities",
                "Better reporting and analytics",
                "Seamless integration with Microsoft products and third-party applications  ",
                "Mobile and web access, anywhere, anytime ",
                "Higher security features ",
                "Optimised operation ",
                "Effective User management cost  ",
              ],
            },
          ],
        },
        {
          _tabId: 3,
          title: "Upgrade to Infor Cloud ",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Infor On- premises Challenges ",
              li: [
                "Keeping up with the latest security and version updates ",
                "Manual efforts to configure dynamic workloads",
                "Lack of applications elasticity and not-so - efficient performance ",
                "Manual Operational activities",
              ],
            },
            {
              _listId: 2,
              title: "Competitive Benefits of Infor Cloud",
              li: [
                "Infor Data Lake enables predictive data insights.",
                "Prepackaged industry analytics",
                "Clear production visualization",
                "Finance functionalities like IFRS 15 compliance, XML support, currency variation based on payment schedule",
                "Field and depot service process with extended warranty contracts and Project Control integration.  ",
              ],
            },
          ],
        },
      ],
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

  const ul = [
    {
      _id: 1,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
      bgImg: "bg1",
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
    {
      _id: 2,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
      bgImg: "",
      bgColor: "#101828",
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

      ctaBtn: true,
      ctaUrl: "/",
      cta: "Know More",
    },
    {
      _id: 3,
      title: "Business Applications",
      expandedTitle: "Business Applications On Cloud",
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
  ];

  return (
    <>
      <EntIntro
        title="Embrace the Digital Future of Business Efficiency with Industry Specialized Infor Application"
        desc=""
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      {/* Section Nav */}
      <>
        <SectionNav
          // Infor Expertise
          // Services
          // Add-Ons
          // Industry Spotlight
          // Why Us

          arr={[
            {
              _id: 1,
              title: "Infor Expertise",
              link: "#InforExpertise",
            },
            {
              _id: 2,
              title: "Services",
              link: "#Services",
            },
            {
              _id: 3,
              title: "Add-Ons",
              link: "#AddOns",
            },
            {
              _id: 4,
              title: "Industry Spotlight",
              link: "#IndustrySpotlight",
            },

            {
              _id: 5,
              title: "Why Us",
              link: "#WhyUs",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <Abstract abstractdesc="Globally recognized Infor is a robust ERP solution that delivers improved business strength and operational responsiveness. Committed to offering core industry application processes, we minimize implementation risk for our customers. With Godrej Infotech’s persistent partnership of over two decades and a track record of successfully delivering APAC’s largest Infor implementation, we enable businesses to set growth-driven business operations across the organization."></Abstract>

      {/* Infor Grid */}
      <>
        <div id="InforExpertise" className={`w-full bg-[#FFF] pt-32`}>
          <div className="text-center max-w-screen-xl sm:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem]  flex justify-center flex-row">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Globally Trusted Core Infor Expertise
                </h3>
                <p>
                  Regardless of whether you're starting your transformation
                  journey or aiming to gain cloud capabilities, our Infor
                  expertise helps you progress to a higher level.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full`}>
          <div className="sm:flex-row h-full justify-center grid grid-cols-1 grid-rows-1 sm:grid-cols-7 sm:grid-rows-2 gap-0">
            <div className="bg-[#feeded] py-20 px-8 h-full row-span-1 sm:row-span-2 w-full   sm:flex-grow col-span-1 sm:col-span-2  ">
              <div className=" ">
                <Image
                  src={`/infor/infor.png`}
                  width={116}
                  height={68}
                  alt="infor.png"
                />
              </div>
              <h3 className="text-[#101828] text-[30px]   leading-[42px] w-fit  flex transition-all hover:opacity-75  font-bold ">
                Infor CloudSuite
              </h3>
              <div>
                <ul className="my-4">
                  <li className="border-b-[1px] w-fit border-[#DBDBDB] py-2 ">
                    <Link
                      href={"/"}
                      className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                    >
                      CloudSuite™ Industrial Enterprise
                    </Link>
                  </li>
                  <li className="border-b-[1px] w-fit border-[#DBDBDB] py-2 ">
                    <Link
                      href={"/"}
                      className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                    >
                      CloudSuite™ Automotive
                    </Link>
                  </li>
                  <li className="border-b-[1px] w-fit border-[#DBDBDB] py-2 ">
                    <Link
                      href={"/"}
                      className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                    >
                      CloudSuite™ Aerospace & Defense
                    </Link>
                  </li>
                </ul>
                <Link href={"/"} className="mb-4 hidden">
                  <div
                    className={`text-[#fff] bg-[#B42318] text-[14px] font-medium leading-[22px] w-fit py-2 px-8 flex transition-all hover:opacity-75`}
                  >
                    Explore Solution
                    <Icon
                      path={mdiArrowTopRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </div>
                </Link>
              </div>
            </div>
            {InforGrid.map((item, index) => (
              <Link href={"/"} key={index}>
                <div className="col-span-1 row-span-1 flex border-[1px] flex-col justify-start sm:justify-center items-start sm:items-center h-full px-[2rem] p-4">
                  <div className=" ">
                    <Image
                      src={`/${item.icon}.png`}
                      height={36}
                      width={36}
                      alt="dummy"
                    />
                    <p className="text-[26px] font-bold leading-[34px]">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>

      <>
        <div id="Services" className={`w-full bg-white py-32`}>
          <div className=" max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] text-center flex">
            <div className="bg-white flex items-start flex-col justify-start">
              <div className="md:flex-row flex-col flex text-left gap-x-10">
                <h3 className="text-4xl leading-[42px] font-bold mb-5">
                  Infor Service Offerings
                </h3>
                <p className="font-medium leading-[22px] md:w-[80%] mx-auto">
                  Our commitment to your project's success drives our ownership
                  and determination to go above and beyond. With rich experience
                  of technical expertise, we offer services to meet the sole
                  requirements of your business.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  px-[2rem]">
            <div className="grid grid-cols-1 grid-rows-1 md:grid-rows-3 md:grid-cols-2 grid-flow-row gap-5 md:gap-10 mx-auto ">
              {upgradeCloud.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={clsx(
                      `col flex justify-between flex-col bg-[#320A53] text-white bg-cover px-14 py-16`,
                      {
                        " bg-[#344CA9]": item._id === 2 || item._id === 6,
                        " bg-[url('/gradient-1.png')]": item._id === 1,
                        " bg-[url('/gradient-2.png')]": item._id === 3,
                      }
                    )}
                  >
                    <div>
                      <h4 className="text-[30px] font-bold leading-[42px] mb-3">
                        {item.title}
                      </h4>
                      <p className="text-base leading-6 font-semibold">
                        {item.desc}
                      </p>
                    </div>
                    {item.cta && (
                      <button
                        onClick={() => openPopup(item.title, item.tabData)}
                        className="flex text-[14px] leading-[22px] mt-10 max-w-max border-b-[1px] border-[#FFFFFF] items-center font-medium hover:scale-105"
                      >
                        {item.cta}
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
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Popup */}
          {isPopupOpen && (
            <div className="fixed w-full inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex-col flex items-center justify-center">
              <div className="bg-[#ededed] w-full  max-w-screen-xl md:max-w-screen-xl md:h-auto max-h-[66%]">
                <div className="p-4 md:p-8">
                  <div>
                    <button
                      onClick={closePopup}
                      className="text-blue-500 flex items-center gap-2 mb-4"
                    >
                      <span>
                        <Icon
                          path={mdiArrowLeft}
                          style={{
                            width: "1rem",
                            fontSize: "14px",
                          }}
                          className="cta-know-more"
                        />
                      </span>{" "}
                      Back to solutions
                    </button>
                  </div>
                  <h3 className="text-2xl font-bold">{selectedTitle}</h3>
                </div>
                {/* Tabs */}
                <div>
                  <div>
                    <div className="px-4 pt-4 md:px-8 md:pt-8 flex justify-start gap-4">
                      {selectedTabContent.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => handleTabClick(item, item._tabId)}
                          className={`cursor-pointer px-4 py-2 ${
                            index === activeTab
                              ? "text-blue-500 border-b-2 border-blue-500"
                              : "border-b-2"
                          }`}
                        >
                          {item.title}
                        </div>
                      ))}
                    </div>
                    {/* Tab Content */}
                    <div className="">
                      <div className="bg-white w-full px-4 md:px-8 py-8 md:py-16 max-w-screen-xl md:max-w-screen-xl ">
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                          {selectedTabContent.map((tabContent, index) => (
                            <>
                              {tabContent._tabId == selectedTabContentListID
                                ? tabContent.list.map((item, index) => (
                                    <div
                                      key={index}
                                      className="min-w-[300px] w-full md:w-2/3 bg-[#ededed]  inline-flex"
                                    >
                                      <div className="flex p-4 md:p-8 flex-col">
                                        <p className="text-[18px] font-semibold mb-4">
                                          {item.title}
                                        </p>

                                        {/* tab nested Li goes here */}
                                        <ul className=" list-disc ml-4">
                                          {item.li.map((list, index) => (
                                            <li key={index}>{list}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  ))
                                : null}
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>

      {/* Innovative Infor Drivers */}
      <>
        <div id="AddOns" className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Infor Drivers by Godrej Infotech
                </h3>
              </div>
            </div>
            {/* right */}
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Enhancing the features of business applications, our easily
                  integrating specialized solutions intend to add value to
                  business with handy support.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={` ${styles["bg-img"]} w-full py-32 `}>
          <div className=" grid grid-cols-2 sm:flex-row gap-y-10 justify-center px-[2rem]">
            {[
              {
                _id: 1,
                title: "InsightEdge+",
                desc: "Industry-specific pre-built business reporting readily available on Power BI tailored to meet the needs of MIS.",
                cta: "",
                icon: mdiArrowRight,
                ctaUrl: "",
              },
              {
                _id: 2,
                title: "DataSwiftPro",
                desc: "Godrej Infotech Data Conversion Utility (GIDCU) Tool offers data migration utilities facilitating faster & structured data upload and managing source & target systems, table structures, field mapping and data download/upload scripts.",
                cta: "",
                icon: mdiArrowRight,
                ctaUrl: "",
              },
              {
                _id: 3,
                title: "VertiNexus Catalyst",
                desc: "Industry vertical focused accelerator offering Pre-Configured Business Process Mapping and Pre-Built Industry required Customization.",
                cta: "",
                icon: mdiArrowRight,
                ctaUrl: "",
              },
              {
                _id: 4,
                title: "Cloud Navigator",
                desc: "Infor Cloud Migration Planner addressing critical factors like data migration strategies, application compatibility, network architecture and security protocols to assure steady and effectual transition to the Infor cloud environment.",
                cta: "",
                icon: mdiArrowRight,
                ctaUrl: "",
              },
              {
                _id: 5,
                title: "Prosoft 2.0",
                desc: "Customized on Infor LN, this project management solution and inventory controls are designed to streamline operations in on-site project management. PS2.0 is integrated with the Infor platform, ensuring an efficient project management experience.",
                cta: "",
                icon: mdiArrowRight,
                ctaUrl: "",
              },
            ].map((item, index) => {
              return (
                <div key={index} className="mx-5 bg-white ">
                  <div className="p-5  w-full ">
                    <h4 className="text-[26px] font-bold mb-2 leading-[34px] text-[#101828]">
                      {item.title}
                    </h4>
                    <p className="text-[14px] leading-[22px] text-[#475467]">
                      {item.desc}
                    </p>
                  </div>
                  <div className=" w-full hidden bg-[#0745D3] p-5">
                    <Link
                      href={item.ctaUrl}
                      className="text-white  flex transition-all hover:opacity-75  "
                    >
                      {item.cta}
                      <Icon
                        path={item.icon || mdiArrowRight}
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

      {/* Industry Spotlight Slider */}
      <>
        <div id="IndustrySpotlight" className={` w-full bg-[#FFF] py-20`}>
          <div className="text-center max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-center flex-col justify-center  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industry Spotlight
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  Understanding unique demands of each industry vertical and
                  capitalizing Infor capabilities, we equip businesses to thrive
                  in competitive market.
                </p>
              </div>
              <div className="flex justify-center items-center max-w-screen-xl w-full">
                <div>
                  <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {ChoiceSlider.map((item) => (
                      <>
                        <SwiperSlide
                          key={item._id}
                          className="w-[283px] max-w-[283px] mr-4  relative group"
                        >
                          <div className="relative overflow-hidden">
                            <Image
                              src={`/industrySpotlight/${item.imgUrl}.jpg`}
                              height={350}
                              width={283}
                              alt="icon"
                              className=" transition-transform transform group-hover:scale-105"
                            />

                            {/* Default overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity  flex flex-col justify-end p-4">
                              <h3 className="text-[22px] text-white font-bold mb-1">
                                {item.title}
                              </h3>
                            </div>
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-[#4c6fff] transition-opacity opacity-0 group-hover:opacity-100 text-left flex flex-col justify-end p-4">
                              <h3 className="text-[22px] text-white font-bold mb-1">
                                {item.title}
                              </h3>
                              <p className="text-white leading-[20px] mb-5">
                                {item.desc}
                              </p>
                              {item.list && (
                                <>
                                  <ul className=" list-disc pl-4">
                                    {item.list.map((i, index) => (
                                      <li
                                        className="text-white mb-1 leading-[20px]"
                                        key={index}
                                      >
                                        {i}
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              )}
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Expertise */}
      <Expertise
        ribbon="Hub of Expertise"
        ribbonTxtWhite="true"
        title=""
        desc="We are here to build a competitive edge with technology brilliance for businesses across the world."
        arr={[
          {
            title: "300+",
            desc: "Implementation Experiences",
          },
          {
            title: "Largest",
            desc: "Implementation Experience in Asia",
          },
          {
            title: "10,000+",
            desc: "Infor Users",
          },
        ]}
      ></Expertise>

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY"
        title="Infor Project Highlights"
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high performing multidisciplinary solutions across the spectrum of industries."
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Auto Sector's Leading Electrical Component Manufacturer Cuts Manual Effort by 30% with Infor LN ",
            thumbnail: "AutoSectorLeadingElectrical",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf",
          },
          {
            id: 2,
            title:
              "Global Hydraulic Systems Manufacturer Achieves Enhanced User Experience and Workforce Enablement with Infor LN",
            thumbnail: "GlobalHydraulicSystems",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Global-Oncology-Pharmaceuticals-Company.pdf",
          },
          {
            id: 3,
            title:
              "European sheet metal manufacturer cuts costs by 40% and boosts after-sales speed by 20% with Infor LN.",
            thumbnail: "",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "/",
          },
        ]}
      />

      {/* Why Infotech */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech"
        desc="It is our solution-focused approach, domain consulting and value-added services that enable us to manage projects of every size and complexity in the global transformation landscape."
        arr={[
          {
            _id: 1,
            desc: "Proven excellence of 20 + years and 300+ successful implementations",
            icon: "",
          },
          {
            _id: 2,
            desc: "Comprehensive in-house product ecosystem delivering unified functionality and operational effectiveness",
            icon: "",
          },
          {
            _id: 3,
            desc: "Subsidiary of the globally renowned Godrej conglomerate, worth $4.1Bn enable us in leveraging synergies of business and IT solutions to deliver holistic solutions",
            icon: "",
          },
          {
            _id: 4,
            desc: "Infor's Centre of Excellence and Co-development Partnership program help us to deliver innovative and industry-specific solutions",
            icon: "",
          },
          {
            _id: 5,
            desc: "Repository of ready-to-use use cases guarantees swift implementation and seamless integration, driving enhanced productivity. ",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Testimonial */}
      {/* <Testimonial
        ribbon="Testimonials"
        title="Delighted Customers Share Their Success Experience"
        desc="Discover how we have helped our customers to realize tangible outcomes aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation:
              "Manager, Global Leader in Ice-Cold Merchandiser & Glass Bottle Manufacturer",
            thumbnail: "1",
            description:
              "In January 2009, our India operations launched ERP LN FP2. Godrej Infotech has provided consistent, effective support since April, optimizing ERP use and managing global financial reporting. We appreciate GITL team for their successful efforts.",
            category: "static",
            isNested: false,
            ctaUrl: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation: "IT Manager, Global Process Equipment Supplier",
            thumbnail: "1",
            description:
              "Thank you, Godrej Infotech, for excellent implementation, quick understanding of our business needs and impactful contributions. Appreciation to your leadership and dedicated team.",
            category: "static",
            isNested: false,
            ctaUrl: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation: "Executive Director - Commercial",
            thumbnail: "1",
            description:
              "Thanks to Godrej Infotech Limited for their swift Infor LN 10.4 & Infor OS implementation. With a seamless process, they resolved our challenges and mapped all business processes within 10 weeks. Kudos to the delivery and backend technical teams for their proactive and resourceful support.",
            category: "static",
            isNested: false,
            ctaUrl: "/",
          },
        ]}
      /> */}

      <NewTestimonial
        ribbon="CLIENT TESTIMONIALS"
        ribbonVisible={false}
        title="Delighted customers share their success experience "
        desc="Discover how we have helped our customers to realize tangible outcomes aligned with their business goals."
        arr={[
          {
            id: 1,
            clientName: "",
            clientDesignation:
              "Manager, Global Leader in Ice-Cold Merchandiser & Glass Bottle Manufacturer",
            thumbnail: "1",
            description:
              "In January 2009, our India operations launched ERP LN FP2. Godrej Infotech has provided consistent, effective support since April, optimizing ERP use and managing global financial reporting. We appreciate GITL team for their successful efforts.",
            category: "static",
            link: "/",
          },
          {
            id: 2,
            clientName: "",
            clientDesignation: "IT Manager, Global Process Equipment Supplier",
            thumbnail: "1",
            description:
              "Thank you, Godrej Infotech, for excellent implementation, quick understanding of our business needs and impactful contributions. Appreciation to your leadership and dedicated team.",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation: "Executive Director - Commercial",
            thumbnail: "1",
            description:
              "Thanks to Godrej Infotech Limited for their swift Infor LN 10.4 & Infor OS implementation. With a seamless process, they resolved our challenges and mapped all business processes within 10 weeks. Kudos to the delivery and backend technical teams for their proactive and resourceful support.",
            category: "static",
            link: "/",
          },
        ]}
      />

      {/* Awards */}
      {/* <Awards /> */}

      {/* Infor service grid */}

      {/* Subscription */}
      <Subscription
        title="Are you Ready for Infor-driven growth?"
        blue="Let's get started!?"
        title2=""
        desc="Please share your details to implement robust industry-specific solution and enhance the agility of your operations."
      />

      {/* Infotech weekly */}
      <>
        <div className="hidden">
          <InfotechWeeklyAlt />
          {/* Testing */}
        </div>
      </>
    </>
  );
};

export default Page;
