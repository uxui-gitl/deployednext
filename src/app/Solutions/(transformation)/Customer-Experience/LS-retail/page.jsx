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
import { mdiArrowLeft, mdiBullseyeArrow, mdiTableLarge } from "@mdi/js";
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
import { Benefits, NewTestimonial } from "@/components";

const CoreCapabilitySlider = [
  {
    _id: 1,
    title: "Asset Management",
    cta: "Know more",
    ctaUrl: "/",
    icon: "dummy",
    links: [
      {
        title: "Record",
        url: "/",
      },
      {
        title: "Maintain",
        url: "/",
      },
      {
        title: "Structure",
        url: "/",
      },
      {
        title: "Standardize asset information",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Asset Management",
    cta: "Know more",
    ctaUrl: "/",
    icon: "dummy",
    links: [
      {
        title: "Record",
        url: "/",
      },
      {
        title: "Maintain",
        url: "/",
      },
      {
        title: "Structure",
        url: "/",
      },
      {
        title: "Standardize asset information",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    title: "Asset Management",
    cta: "Know more",
    ctaUrl: "/",
    icon: "dummy",
    links: [
      {
        title: "Record",
        url: "/",
      },
      {
        title: "Maintain",
        url: "/",
      },
      {
        title: "Structure",
        url: "/",
      },
      {
        title: "Standardize asset information",
        url: "/",
      },
    ],
  },
  {
    _id: 4,
    title: "Asset Management",
    cta: "Know more",
    ctaUrl: "/",
    icon: "dummy",
    links: [
      {
        title: "Record",
        url: "/",
      },
      {
        title: "Maintain",
        url: "/",
      },
      {
        title: "Structure",
        url: "/",
      },
      {
        title: "Standardize asset information",
        url: "/",
      },
    ],
  },
  {
    _id: 4,
    title: "Asset Management",
    cta: "Know more",
    ctaUrl: "/",
    icon: "dummy",
    links: [
      {
        title: "Record",
        url: "/",
      },
      {
        title: "Maintain",
        url: "/",
      },
      {
        title: "Structure",
        url: "/",
      },
      {
        title: "Standardize asset information",
        url: "/",
      },
    ],
  },
];

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
    imgUrl: "1",
    url: "/",
  },
  {
    _id: 2,
    title: "Retail",
    imgUrl: "2",
    url: "/",
  },
  {
    _id: 3,
    title: "Trading and Distribution",
    imgUrl: "3",
    url: "/",
  },
  {
    _id: 4,
    title: "Project",
    imgUrl: "4",
    url: "/",
  },
  {
    _id: 5,
    title: "Professional Services",
    imgUrl: "5",
    url: "/",
  },
];

const InforGrid = [
  {
    _id: 1,
    title: "Infor LN (On Prem & On Cloud - MT)",
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
    title: "HxGN EAM",
    icon: "dummy",
  },
  {
    _id: 8,
    title: "Infor XM",
    icon: "dummy",
  },

  {
    _id: 9,
    title: "Infor CRM",
    icon: "dummy",
  },
  {
    _id: 10,
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

  const upgradeCloud = [
    {
      _id: 1,
      title: "Migrate to the Cloud ",
      desc: "Ensuring a smooth and efficient migration process while minimizing disruptions to your business operations.",
      cta: "Know More",
      isNested: false,
      ctaUrl: "/",
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
      _id: 2,
      title: "Migrate From a different ERP Platform to Infor LN",
      desc: "Experience seamless and transformative migration with data integrity for your business.",
      cta: "Know more",
      isNested: false,
      ctaUrl: "/",
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
      title: "Upgrade with Infor",
      desc: "Get access to enhanced innovation, business preferences and value.",
      cta: "Know more",
      isNested: false,
      ctaUrl: "/",
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
      _id: 4,
      title: "End-to-End Implementation",
      desc: "Streamlining every phase of the implementation, we provide the capability of successful and on-time delivery of Infor solution.",
      cta: "Know more",
      isNested: false,
      ctaUrl: "/",
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
      title: "Managed Services ",
      desc: "Managing every complex, time-consuming and resource-rigorous process and on demand maintenance of Infor application.",
      cta: "Know more",
      isNested: false,
      ctaUrl: "/",
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
      _id: 6,
      title: "Custom Development & Integrations",
      desc: "Value-adding Infor application customizations and integrations to drive innovation that delivers great business outcomes.",
      cta: "Know more",
      isNested: false,
      ctaUrl: "/",
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

  return (
    <>
      <EntIntro
        title="Empowering Global Retailers to Achieve
        Ambitious Goals with Front-to-Back
        Unified Retail Management Application"
        desc=""
        cta="Let's Connect"
        width="60%"
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

      {/* Overview  */}
      <Abstract abstractdesc="Globally recognized Infor is a robust ERP solution that delivers improved business strength and operational responsiveness. Committed to offering core industry application processes, we minimize implementation risk for our customers. With Godrej Infotech's persistent partnership of over two decades and a track record of successfully delivering APAC's largest Infor implementation, we enable businesses to set growth-driven business operations across the organization. "></Abstract>

      {/* our offerings left right para only */}

      <div
        className={`text-left max-w-screen-xl  mb-5 mx-auto p-5   px-[2rem]`}
      >
        <div className=" mt-[5em] mb-[2em]">
          <div className={`  grid-cols-1 md:grid-cols-2 gap-4`}>
            <h3 className="text-4xl leading-[42px] font-bold text-center">
              Our Offerings
            </h3>

            <p className="hidden font-normal leading-[22px]">desc</p>
          </div>
        </div>
        <motion.div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {[
            {
              id: 1,
              title: "LS Central for Retail",
              thumbnail: "1",
              description:
                "Auto Sector's Leading Electrical Component Manufacturer Cuts Manual Effort by 30% with Infor LN",
              tags: [""],
              cta: "Know More",
              link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf",
            },
            {
              id: 2,
              title: "LS Central for Restaurants",
              thumbnail: "1",
              description:
                "Auto Sector's Leading Electrical Component Manufacturer Cuts Manual Effort by 30% with Infor LN",
              tags: [""],
              cta: "Know More",
              link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf",
            },
          ].map((cases, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className={`flex justify-start items-start flex-col w-full mb-5 gap-4 h-[350px] overflow-hidden`}

              // className={`${styles["iw-card"]} item`}
            >
              <div className={` overflow-hidden w-[100%] h-auto relative`}>
                <Image
                  // src={`/project-${cases.thumbnail}.png`}
                  src={
                    cases.thumbnail
                      ? `/project-${cases.thumbnail}.png`
                      : `/project-placeholder.png`
                  }
                  alt={`${cases.tags}`}
                  className="w-full hover:scale-125 transition-transform duration-[0.75s] ease-[ease]"
                  width="315"
                  height="200"
                  // className="w-full h-auto lg:w-315 lg:h-200"
                />
                <div className="absolute bottom-4 left-4 flex justify-start items-center space-x-2">
                  <p
                    className={`text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded font-medium  ${
                      cases.tags == "" ? "hidden" : "block"
                    } `}
                  >
                    {`${cases.tags}`}
                  </p>
                </div>
              </div>
              <div className={`${styles["iw-card-content"]}`}>
                {cases.subtitle && (
                  <p
                    className={`my-2  text-[#101828] font-semibold leading-[22px] text-[16px]`}
                  >
                    {cases.subtitle}
                  </p>
                )}
                <p
                  className={`${
                    styles["iw-card-content-desc "]
                  } text-clip  text-[#101828]  mb-3 font-semibold text-sm ${
                    cases.description.length <= 0 ? "hidden" : "block"
                  }`}
                >
                  {cases.title}
                </p>
                <p
                  className={`text-base mt-2 font-normal  pb-2 leading-[22px] text-[#101828]`}
                >
                  {" "}
                  {cases.description}
                </p>

                <p className={styles["iw-card-content-link-wrap"]}>
                  <Link
                    href={`${cases.link}`}
                    className={`${styles["iw-card-content-link"]} flex items-center hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
                  >
                    {cases.cta}
                    <span className=" inline-flex">
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
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Retail excellence grid - Features */}
      <>
        <div className={`w-full bg-white py-32`}>
          <div className=" max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] text-center flex">
            <div className="bg-white flex items-start flex-col justify-start">
              <div className="md:flex-row flex-col flex text-left gap-x-10">
                <h3 className="text-4xl leading-[42px] font-bold mb-5">
                  LS Retail Robust Features for Efficient Retail Excellence
                </h3>
                <p className="font-medium leading-[22px] md:w-[80%] mx-auto"></p>
              </div>
            </div>
          </div>
          <div className=" max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto  px-[2rem]">
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

      {/* targeted solutions - Core Capabilities */}
      <>
        <div className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5  ">
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Godrej Infotech Targeted Solutions for Industries
                </h3>
                <div>
                  <p className="font-medium leading-[22px] md:w-[90%] ">
                    We are committed to bringing the power of AI to your
                    business operations, providing tailored solutions that
                    drives business proficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` pt-48 pb-12 bg-[url('/bgEcomScreen.png')] flex justify-center items-center w-full`}
          >
            <div className=" md:max-w-screen-xl w-full text-left  mb-5 mx-auto p-5   px-[2rem]">
              <div className={` w-full flex pb-12 `}>
                <Swiper
                  slidesPerView={"auto"}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  modules={[Pagination]}
                  className=" flex-grow"
                >
                  {CoreCapabilitySlider.map((item, index) => {
                    return (
                      <SwiperSlide
                        style={{ height: "auto" }}
                        key={item._id}
                        className="sm:w-full md:w-1/3 flex flex-col justify-between  mr-4  relative group"
                      >
                        <motion.div
                          key={item._id}
                          variants={fadeInAnimationVariant}
                          initial="initial"
                          whileInView="animate"
                          viewport={{
                            once: true,
                          }}
                          custom={index}
                          className={`  mx-2 flex flex-col h-full `}
                        >
                          <div className=" bg-white p-5">
                            <div>
                              <Icon
                                path={mdiTableLarge}
                                size={2}
                                className="mb-4"
                              />
                            </div>
                            <div>
                              <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                                {item.title}
                              </p>
                            </div>
                            <div>
                              <ul className="mt-4 mb-8">
                                {item.links.map((list, index) => (
                                  <li
                                    key={index}
                                    className=" border-b-2 border-[#DBDBDB] py-2 "
                                  >
                                    <Link
                                      href={list.url}
                                      className="text-[#101828]  text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                                    >
                                      {list.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <Link
                            href={item.ctaUrl}
                            className="text-[#fff] bg-[#0745D3]  p-5 w-full text-[14px] font-medium leading-[22px]  flex transition-all   "
                          >
                            {item.cta}{" "}
                            <Icon
                              path={mdiArrowRight}
                              style={{ marginLeft: "0.5em" }}
                              size={1}
                            />
                          </Link>
                        </motion.div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </>

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
            cardDesc: "Revolutionising Healthcare with medical image analysis",
          },
        ]}
      ></Benefits>

      {/* Why Infotech */}
      <WhySection
        ribbon="The Distinctive Edge"
        title="Why Godrej Infotech?"
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
            desc: "Repository of ready-to-use use-cases guarantees swift implementation and seamless integration, driving enhanced productivity.",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Blog */}
      <BlogSlider
        arr={[
          {
            _id: 1,
            ribbon: "blog",
            title:
              "Azure Data Lake - Data Storage Solution for Big Data Analytics",
            desc: "Data Science today has become essential for organizations that are looking to bring about predictability in their business functions. It removes the guesswork and provides companies with accurate insights related to product features, target audiences and user behaviour. ",
            cta: "Know More",
            link: "/",
            imgUrl: "",
          },
        ]}
      />

      {/* Case Study */}
      <CaseStudy
        ribbon="CASE STUDY"
        title="Elevating Our Customer Experience with Infor"
        desc="World's top-notch businesses choose us for our excellent technical acumen and proven standards as we deliver high-performing multidisciplinary solutions globally."
        isHomepage={false}
        arr={[
          {
            id: 1,
            title:
              "Auto Sector's Leading Electrical Component Manufacturer Cuts Manual Effort by 30% with Infor LN",
            thumbnail: "",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Manufacturer-Electrical-components-Automobile.pdf",
          },
          {
            id: 2,
            title:
              "Global Oncology Pharmaceuticals Company leverages Preventive Maintenance Scheduling and asset lifecycle management with HxGN EAM",
            thumbnail: "",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Global-Oncology-Pharmaceuticals-Company.pdf",
          },
          {
            id: 3,
            title:
              "Global Hydraulic Systems Manufacturer Achieves Enhanced User Experience and Workforce Enablement with Infor LN",
            thumbnail: "",

            description: "",
            tags: [""],
            cta: "Know More",
            link: "https://www.godrejinfotech.com/assets/pdf/case-studies/Infor-LN-India-Localization.pdf",
          },
        ]}
      />
      {/* Testimonaisl */}
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
              "ERP and Business Intelligence Head, Fast food service chain  ",
            thumbnail: "",
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
            thumbnail: "",
            description:
              "Godrej Infotech has proficiently upgraded our software from NAV 2016 to Business Central on SaaS, including seamless data migration. This helped us save on subscription costs & facilitated quicker transactional updates.",
            category: "static",
            link: "/",
          },
          {
            id: 3,
            clientName: "",
            clientDesignation:
              "ERP and Business Intelligence Head, Fast food service chain  ",
            thumbnail: "",
            description:
              "Appreciation to Godrej Infotech's team for successfully completing two critical projects - upgrading the old ERP system to Dynamics Business Central on SAAS and implementing a cloud-based ETL process on Azure for restaurant sales and COGS processes. We're experiencing significant improvements in operational efficiency.",
            category: "static",
            link: "/",
          },
          {
            id: 4,
            clientName: "",
            clientDesignation:
              "Manager IT, India's leading Energy Management System and Solutions provider ",
            thumbnail: "",
            description:
              "Godrej Infotech has proficiently upgraded our software from NAV 2016 to Business Central on SaaS, including seamless data migration. This helped us save on subscription costs & facilitated quicker transactional updates.",
            category: "static",
            link: "/",
          },
        ]}
      />

      {/* Subscription */}
      <Subscription
        title="Are you Ready for Infor-driven growth?"
        blue="Let's get started!?"
        title2=""
        desc="Share your details now to optimize your business operations or implement industry-specific enhancements."
      />

      {/* Infotech weekly */}
      <>
        <div className="hidden">
          <InfotechWeeklyAlt />
        </div>
      </>
    </>
  );
};

export default Page;
