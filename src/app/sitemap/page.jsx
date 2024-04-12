import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Announcement from "@/sections/announcement/Announcement";

const page = () => {
  return (
    <>
      {/* <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="dark" />
        </div>
      </div> */}
      <div className="max-w-[1440px] w-screen xl:p-20 md:px-8 sm:px-7 px-7 mx-auto">
        <div>
          <p className="font-bold text-2xl"># Solutions</p>
          <div className="flex flex-row gap-10 py-3 justify-between">
            <div>
              <p className="font-medium text-lg ml-4  mb-2"># Automation</p>
              <div className=" ml-12">
                <ul className="" style={{ listStyleType: "circle" }}>
                  <li>
                    <Link
                      target="_blank"
                      className=" block pb-1 hover:underline w-fit py-2"
                      href={"/Solutions/Intelligent-Technologies"}
                    >
                      ✔️ Intelligent Technologies
                    </Link>
                    <div className="ml-12">
                      <ul style={{ listStyleType: "circle" }}>
                        <li>
                          <Link
                            className=" block pb-1 hover:underline w-fit"
                            target="_blank"
                            href={"/Solutions/Intelligent-Technologies/AI-ML"}
                          >
                            ✔️ AI & ML
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" block pb-1 hover:underline w-fit"
                            target="_blank"
                            href={"/Solutions/Intelligent-Technologies/RPA"}
                          >
                            ✔️ RPA
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" block pb-1 hover:underline w-fit"
                            target="_blank"
                            href={"/Solutions/Intelligent-Technologies/IIOT"}
                          >
                            ☑️ IIOT
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline w-fit"
                      href={"/Solutions/Technology-Stack"}
                    >
                      ✔️ Technology Stack
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline w-fit"
                      href={"/Solutions/Data-Insights"}
                    >
                      ✔️ Data Insights
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-1 hover:underline w-fit"
                      target="_blank"
                      href={"/Solutions/Cyber-Security"}
                    >
                      ✔️ Cyber Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-medium text-lg ml-4 mb-2"># Cloudification</p>
              <div className=" ml-12">
                <ul className="" style={{ listStyleType: "circle" }}>
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline w-fit"
                      href={"/Solutions/Upgrade-to-Cloud"}
                    >
                      ✔️ Upgrade to Cloud
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline w-fit"
                      href={"/Solutions/Cloud-Stack-and-Services"}
                    >
                      ✔️ Cloud Stack & Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-medium text-lg ml-4 mb-2"># Transformation</p>
              <div className=" ml-12">
                <ul className="" style={{ listStyleType: "circle" }}>
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline w-fit"
                      href={"/Solutions/Enterprise-Suite"}
                    >
                      ☑️ Enterprise Suite
                    </Link>
                    <div className="ml-12">
                      <ul style={{ listStyleType: "circle" }}>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={"/Solutions/Enterprise-Suite/Infor"}
                          >
                            ☑️ Infor
                          </Link>
                          <div className="ml-12">
                            <ul style={{ listStyleType: "circle" }}>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Infor/Infor-WMS"
                                  }
                                >
                                  ☑️ Infor WMS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Infor/Infor-LN"
                                  }
                                >
                                  ☑️ Infor LN
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Infor/Infor-Cloudsuite"
                                  }
                                >
                                  ☑️ Infor CloudSuite
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Infor/HxnEAM"
                                  }
                                >
                                  ☑️ HxnEAM
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={
                              "/Solutions/Enterprise-Suite/Microsoft-Practises"
                            }
                          >
                            ☑️ Microsoft Practises
                          </Link>
                          <div className="ml-12">
                            <ul style={{ listStyleType: "circle" }}>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Microsoft-Practises/Business-Central"
                                  }
                                >
                                  ☑️ Business Central
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Microsoft-Practises/FnO"
                                  }
                                >
                                  ☑️ F&O
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Microsoft-Practises/D365-Commerce"
                                  }
                                >
                                  ☑️ D365 Commerce
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={"/Solutions/Enterprise-Suite/Oracle"}
                          >
                            ☑️ Oracle
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>{" "}
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline w-fit"
                      href={"/Solutions/Customer-Experience"}
                    >
                      ☑️ Customer Experience
                    </Link>
                    <div className="ml-12">
                      <ul style={{ listStyleType: "circle" }}>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={"/Solutions/Customer-Experience/Infor-CRM"}
                          >
                            ☑️ Infor CRM
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={
                              "/Solutions/Customer-Experience/Microsoft-CRM"
                            }
                          >
                            ☑️ Microsoft CRM
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={
                              "/Solutions/Customer-Experience/Salesforce-CRM"
                            }
                          >
                            ☑️ Salesforce CRM
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={"/Solutions/Customer-Experience/Magento-Ecom"}
                          >
                            Magento - E com
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={"/Solutions/Customer-Experience/LS-retail"}
                          >
                            ☑️ LS Retail
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Our services */}

        <div className="mb-10">
          <p className="font-bold text-2xl "># Our Services</p>
          <div className="flex flex-col py-3">
            <ul style={{ listStyleType: "circle" }}>
              <li>
                <Link
                  className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                  target="_blank"
                  href={"/Our-Services/Business-Consulting"}
                >
                  ☑️ Business Consulting
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                  target="_blank"
                  href={"/Our-Services/Implementation-and-Global-Rollout"}
                >
                  ☑️ Implementation & Global Rollout
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                  target="_blank"
                  href={"/Our-Services/Managed-Services"}
                >
                  ☑️ Managed Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Industries Focus */}

        <div className="mb-10">
          <p className="font-bold text-2xl"># Industry Focus</p>
          <div className="flex flex-col  py-3">
            <ul style={{ listStyleType: "circle" }}>
              <li>
                <Link
                  className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                  target="_blank"
                  href={"/Industries/Manufacturing"}
                >
                  ☑️ Manufacturing
                </Link>{" "}
              </li>

              <li>
                <Link
                  className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                  target="_blank"
                  href={"/Industries/Retail"}
                >
                  ☑️ Retail
                </Link>{" "}
              </li>

              <li>
                <Link
                  className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                  target="_blank"
                  href={"/Industries/Trading-and-Distribution"}
                >
                  ☑️ Trading and Distribution
                </Link>{" "}
              </li>
              <li>
                <Link
                  className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                  target="_blank"
                  href={"/Industries/Project"}
                >
                  ☑️ Project
                </Link>{" "}
              </li>
              <li>
                <Link
                  className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                  target="_blank"
                  href={"/Industries/Professional-Services"}
                >
                  ☑️ Professional Services
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* Company */}

        <div className="mb-10">
          <p className="font-bold text-2xl"># Company</p>
          <div className="flex flex-col  py-3">
            <li style={{ listStyleType: "circle" }}>
              <Link
                className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                target="_blank"
                href={"/About-Us"}
              >
                ☑️ About Us
              </Link>
            </li>
            <li style={{ listStyleType: "circle" }}>
              <Link
                className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                target="_blank"
                href={"/Infotech-Weekly"}
              >
                Infotech Weekly
              </Link>
            </li>

            <div className="">
              <li style={{ listStyleType: "circle" }}>
                <Link
                  className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                  target="_blank"
                  href={"/Careers"}
                >
                  ☑️ Careers
                </Link>
              </li>
              <ul className=" ml-12" style={{ listStyleType: "circle" }}>
                <li className="mb-4 mt-2">
                  <Link
                    target="_blank"
                    className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                    href={"/We-Are-Hiring"}
                  >
                    ☑️ We Are Hiring
                  </Link>
                </li>
                <li className="mb-4 mt-2">
                  <Link
                    target="_blank"
                    className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                    href={"/Job-Description"}
                  >
                    ☑️ Job Description
                  </Link>
                </li>
              </ul>
            </div>
            <li style={{ listStyleType: "circle" }}>
              <Link
                className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                target="_blank"
                href={"/Contact-Us"}
              >
                ☑️ Contact Us
              </Link>
            </li>

            <li style={{ listStyleType: "circle" }}>
              <Link
                className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                target="_blank"
                href={"/globe"}
              >
                ☑️ globe
              </Link>
            </li>
            <li style={{ listStyleType: "circle" }}>
              <Link
                className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                target="_blank"
                href={"/"}
              >
                ☑️ Homepage
              </Link>
            </li>
            <li style={{ listStyleType: "circle" }}>
              <Link
                className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                target="_blank"
                href={"/Industries/Healthcare"}
              >
                ☑️ Healthcare
              </Link>
            </li>
            <li style={{ listStyleType: "circle" }}>
              <Link
                className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                target="_blank"
                href={"/LVD"}
              >
                ☑️ LVD
              </Link>
            </li>
            <li style={{ listStyleType: "circle" }}>
              <Link
                className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                target="_blank"
                href={"/GIA"}
              >
                ☑️ GIA
              </Link>
            </li>
            <li style={{ listStyleType: "circle" }}>
              <Link
                className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                target="_blank"
                href={"/Sitemap"}
              >
                Sitemap
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
