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
import OfferingsSlider from "@/components/OfferingsSlider";
import clsx from "clsx";
export default function Home() {
  const upgradeCloudNew = [
    {
      _id: 1,
      title: "Lift and Shift to Cloud",
      desc: "We smoothly relocate your IT to Azure Cloud without redesigning applications and with minimal disruption in your workflows.",
      cta: "Know More",
      isNested: false,
      ctaUrl: "/",
      bgImg: "/gradient-2.png",
      tabData: [
        {
          _tabId: 1,
          title: "Migrate email to cloud",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "Migrate from GSuite to M 365",
              li: [
                "Gobal collaboration capabilities",
                "Realize cost savings",
                "Hassle-free transition for entire organization",
              ],
            },
            {
              _listId: 2,
              title: "On-premises emails to O 365 Cloud",
              li: [
                "Communication infrastructure modernization",
                "Email system security Reinforcement",
                "Scalable communication resources management",
              ],
            },
            {
              _listId: 3,
              title: "Migrate M365 / O365",
              li: [
                "Transition of O365 emails hosted by GoDaddy on Federation tenant",
                "Customer-owned tenant Migration",
                "Easy expansion and scalability",
              ],
            },
          ],
        },
        {
          _tabId: 2,
          title: "Migrate/ Upgrade Infrastructure to Cloud ",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "",
              li: [
                "Minimize downtime for seamless business operations",
                "Improve customer & employee experiences",
                "Optimize overall performance",
              ],
            },
          ],
        },
      ],
    },
    {
      _id: 2,
      title: "ERP on Cloud",
      desc: "We revitalize your business performance delivering more agile, responsive and human-cantered ERP on Cloud.",
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
      _id: 3,
      title: "Application Migration to the Cloud",
      desc: "With the ability to scale resources on-demand, we specialize in the precise, secure and efficient migration of your applications to the cloud, employing technical expertise for error-free deployment to ensure a seamless transition. ",
      cta: "Know More",
      isNested: false,
      ctaUrl: "/",
      bgImg: "/gradient-1.png",
      tabData: [
        {
          _tabId: 1,
          title: "Reasons to Migrate from On Premises",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "",
              li: [
                "Costly on-premises hardware maintenance",
                "Non scalability and need of ongoing maintenance and updates",
                "Access confined to data centre.",
                "Risk of data loss and downtime during disasters or system failures",
                "Difficult security management",
                "Rigidity in making changes or updates to application.",
                "Limited access to the modern technologies",
              ],
            },
          ],
        },
        {
          _tabId: 2,
          title: "Move Applications to the Cloud",
          isBullet: true,
          list: [
            {
              _listId: 1,
              title: "",
              li: [
                "Rehosting Application",
                "Rebuild Application",
                "Replace your application",
                "Refactor Application using containerization",
                "Rearchitect Application",
              ],
            },
          ],
        },
      ],
    },
    {
      _id: 4,
      title: "Cloud Backup and Disaster Recovery",
      desc: "We assure to secure your data and keep your business running, safeguarding your business against unexpected disruptions with scalable solution.",
      cta: "Know More",
      ctaUrl: "/",
      bgImg: "/gradient-1.png",
      isNested: false,
      tabData: [],
    },
    {
      _id: 5,
      title: "Cloud Database Migration",
      desc: "Our cloud migration experts employ a combination of Extract, Transform, Load (ETL) processes and real-time data replication to ensure a smooth transition.",
      cta: "Know More",
      ctaUrl: "/",
      bgImg: "/gradient-1.png",
      isNested: false,
      tabData: [],
    },
  ];

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
    console.log(index["_tabId"]);
    setActiveTab(index["_tabId"] - 1);
    setSelectedTabContentListID(_tabId);
  };

  return (
    <>
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
                  development so that you can win a competitive threshold in the
                  marketplace. Our adept hyper-scaler team can help rearchitect
                  your business operations with an efficient approach.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5 md:gap-10 mx-auto px-[2rem] md:px-20 sm:px-[8rem]">
            {upgradeCloudNew.map((item, i) => {
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
                  <p className="text-base leading-6 font-medium">{item.desc}</p>
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
                </div>
              );
            })}
            {/* Extra 2 box */}
            <div className="col text-[#fff] flex flex-col md:flex-row gap-5 sm:gap-10  flex-wrap md:flex-nowrap">
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
                  microservices. Tailored for specific tasks, our microservices
                  enhance agility, reduce time-to-market and ensure seamless
                  deployment, scaling, resource efficiency and robust fault
                  tolerance.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Popup */}
        {isPopupOpen && (
          <div className="fixed w-full inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex-col flex items-center justify-center">
            <div className="bg-[#ededed] w-full  max-w-screen-xl md:max-w-screen-xl ">
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
                                    className="min-w-[300px] w-full md:w-1/3 bg-[#ededed]  inline-flex"
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
      </>
    </>
  );
}
