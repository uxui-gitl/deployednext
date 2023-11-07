import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="max-w-[1440px] w-screen xl:p-20 md:px-8 sm:px-7 px-7 mx-auto">
        <div>
          <p className="font-bold text-2xl"># Solutions</p>
          <div className="flex flex-row gap-10 py-3 justify-between">
            <div>
              <p className="font-medium text-lg ml-4  mb-2"># Automation</p>
              <div className=" ml-12">
                <ul className="">
                  <li>
                    <Link
                      target="_blank"
                      className=" block pb-1 hover:underline py-2"
                      href={"/Solutions/Intelligent-Technologies"}
                    >
                      Intelligent Technologies
                    </Link>
                    <div className="ml-12">
                      <ul>
                        <li>
                          <Link
                            className=" block pb-1 hover:underline"
                            target="_blank"
                            href={"/Solutions/Intelligent-Technologies/AI-ML"}
                          >
                            AI & ML
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" block pb-1 hover:underline"
                            target="_blank"
                            href={"/Solutions/Intelligent-Technologies/IIOT"}
                          >
                            RPA
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" block pb-1 hover:underline"
                            target="_blank"
                            href={"/Solutions/Intelligent-Technologies/RPA"}
                          >
                            IIOT
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline"
                      href={"/Solutions/Technology-Stack"}
                    >
                      Technology Stack
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline"
                      href={"/Solutions/Data-Insights"}
                    >
                      Data Insights
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-1 hover:underline"
                      target="_blank"
                      href={"/Solutions/Data-Information-and-Security"}
                    >
                      Data Information and Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-medium text-lg ml-4 mb-2"># Cloudification</p>
              <div className=" ml-12">
                <ul className="">
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline"
                      href={"/Solutions/Upgrade-to-Cloud"}
                    >
                      Upgrade to Cloud
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline"
                      href={"/Solutions/Cloud-Stack-and-Services"}
                    >
                      Cloud Stack & Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-medium text-lg ml-4 mb-2"># Transformation</p>
              <div className=" ml-12">
                <ul className="">
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline"
                      href={"/Enterprise-Suite"}
                    >
                      Enterprise Suite
                    </Link>
                    <div className="ml-12">
                      <ul>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline"
                            href={"/Enterprise-Suite/Infor"}
                          >
                            Infor
                          </Link>
                          <div className="ml-12">
                            <ul>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline"
                                  href={"/Enterprise-Suite/Infor-WMS"}
                                >
                                  Infor WMS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline"
                                  href={"/Enterprise-Suite/Infor-LN"}
                                >
                                  Infor LN
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block pb-1 hover:underline"
                                  href={"/Enterprise-Suite/Infor-Cloudsuite"}
                                >
                                  Infor CloudSuite
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline"
                                  href={"/Enterprise-Suite/HxnEAM"}
                                >
                                  HxnEAM
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline"
                            href={"/Microsoft-Dynamics"}
                          >
                            Microsoft Dynamics
                          </Link>
                          <div className="ml-12">
                            <ul>
                              <li>
                                <Link
                                  href={
                                    "/Enterprise-Suite/Microsoft-Dynamics/Business-Central"
                                  }
                                >
                                  Business Central
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline"
                                  href={
                                    "/Enterprise-Suite/Microsoft-Dynamics/F&O"
                                  }
                                >
                                  F&O
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline"
                                  href={
                                    "/Enterprise-Suite/Microsoft-Dynamics/Ecommerce"
                                  }
                                >
                                  eCommerce
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline"
                            href={"/Enterprise-Suite/Microsoft-Dynamics/Oracle"}
                          >
                            Oracle
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>{" "}
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline"
                      href={"/Customer-Experience"}
                    >
                      Customer Experience
                    </Link>
                    <div className="ml-12">
                      <ul>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline"
                            href={"/Customer-Experience/Infor-CRM"}
                          >
                            Infor CRM
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline"
                            href={"/Customer-Experience/Microsoft-CRM"}
                          >
                            Microsoft CRM
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline"
                            href={"/Customer-Experience/Salesforce-CRM"}
                          >
                            Salesforce CRM
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline"
                            href={"/Customer-Experience/Magento-Ecom"}
                          >
                            Magento - E com
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline"
                            href={"/Customer-Experience/LS-Retail"}
                          >
                            LS Retail
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
            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/Our-Services/Business-Consulting"}
            >
              Business Consulting
            </Link>

            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/Our-Services/Implementation-&-Global-Rollout"}
            >
              Implementation & Global Rollout
            </Link>

            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/Our-Services/Managed-Services"}
            >
              Managed Services
            </Link>
          </div>
        </div>

        {/* Industries Focus */}

        <div className="mb-10">
          <p className="font-bold text-2xl"># Industry Focus</p>
          <div className="flex flex-col  py-3">
            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/Industries/Manufacturing"}
            >
              Manufacturing
            </Link>

            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/Industries/Retail"}
            >
              Retail
            </Link>

            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/Industries/Trading-and-Distribution"}
            >
              Trading and Distribution
            </Link>
            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/Industries/Project"}
            >
              Project
            </Link>
            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/Industries/Professional-Services"}
            >
              Professional Services
            </Link>
          </div>
        </div>

        {/* Company */}

        <div className="mb-10">
          <p className="font-bold text-2xl"># Company</p>
          <div className="flex flex-col  py-3">
            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/About-Us"}
            >
              About Us
            </Link>
            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/Infotech-Weekly"}
            >
              Infotech Weekly
            </Link>

            <div className="">
              <Link
                className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
                target="_blank"
                href={"/Careers"}
              >
                Careers
              </Link>
              <ul className=" ml-12">
                <li className="mb-4 mt-2">
                  <Link
                    target="_blank"
                    className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
                    href={"/We-Are-Hiring"}
                  >
                    We Are Hiring
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/Contact-Us"}
            >
              Contact Us
            </Link>
            <Link
              className="font-medium text-lg ml-4 hover:underline hover:underline-offset-2 mb-2"
              target="_blank"
              href={"/Industries/Professional-Services"}
            >
              Professional Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
