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
                      className=" block pb-1 hover:underline w-fit py-2"
                      href={"/Solutions/Intelligent-Technologies"}
                    >
                      ✔️ Intelligent Technologies
                    </Link>
                    <div className="ml-12">
                      <ul>
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
                            ✅ RPA [3]
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" block pb-1 hover:underline w-fit"
                            target="_blank"
                            href={"/Solutions/Intelligent-Technologies/IIOT"}
                          >
                            ✅ IIOT [Not Found]
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
                      ✅ Technology Stack [2]
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline w-fit"
                      href={"/Solutions/Data-Insights"}
                    >
                      ✅ Data Insights [2]
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-1 hover:underline w-fit"
                      target="_blank"
                      href={"/Solutions/Cyber-Security"}
                    >
                      ✅ Cyber Security [Not Created]
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
                      className="block pb-1 hover:underline w-fit"
                      href={"/Solutions/Upgrade-to-Cloud"}
                    >
                      ✅ Upgrade to Cloud [3]
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="block pb-1 hover:underline w-fit"
                      href={"/Solutions/Cloud-Stack-and-Services"}
                    >
                      ✅ Cloud Stack & Services [3]
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
                      className="block pb-1 hover:underline w-fit"
                      href={"/Solutions/Enterprise-Suite"}
                    >
                      ✅ Enterprise Suite [5]
                    </Link>
                    <div className="ml-12">
                      <ul>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={"/Solutions/Enterprise-Suite/Infor"}
                          >
                            ✅ Infor [3]
                          </Link>
                          <div className="ml-12">
                            <ul>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Infor/Infor-WMS"
                                  }
                                >
                                  ✅ Infor WMS [4]
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
                                  ✅ Infor LN [4]
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Infor/Infor-Cloudsuite"
                                  }
                                >
                                  ✅ Infor CloudSuite [2]
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
                                  ✅ HxnEAM [4]
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
                            Microsoft Practises [Not created]
                          </Link>
                          <div className="ml-12">
                            <ul>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Microsoft-Practises/Business-Central"
                                  }
                                >
                                  ✅ Business Central [4]
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Microsoft-Practises/F&O"
                                  }
                                >
                                  ✅ F&O [4]
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  className="block pb-1 hover:underline w-fit"
                                  href={
                                    "/Solutions/Enterprise-Suite/Microsoft-Practises/Ecommerce"
                                  }
                                >
                                  ✅ eCommerce [5]
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
                              "/Solutions/Enterprise-Suite/Microsoft-Practises/Oracle"
                            }
                          >
                            ✅ Oracle [5]
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
                      ✅ Customer Experience [4]
                    </Link>
                    <div className="ml-12">
                      <ul>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={"/Solutions/Customer-Experience/Infor-CRM"}
                          >
                            ✅ Infor CRM [3]
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
                            ✅ Microsoft CRM [3]
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
                            ✅ Salesforce CRM [Not Found]
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={"/Solutions/Customer-Experience/Magento-Ecom"}
                          >
                            ✅ Magento - E com [3]
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            className="block pb-1 hover:underline w-fit"
                            href={"/Solutions/Customer-Experience/LS-Retail"}
                          >
                            ✅ LS Retail [3]
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
              className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
              target="_blank"
              href={"/Our-Services/Business-Consulting"}
            >
              ✅ Business Consulting [4]
            </Link>

            <Link
              className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
              target="_blank"
              href={"/Our-Services/Implementation-and-Global-Rollout"}
            >
              ✅ Implementation & Global Rollout [4]
            </Link>

            <Link
              className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
              target="_blank"
              href={"/Our-Services/Managed-Services"}
            >
              ✅ Managed Services [4]
            </Link>
          </div>
        </div>

        {/* Industries Focus */}

        <div className="mb-10">
          <p className="font-bold text-2xl"># Industry Focus</p>
          <div className="flex flex-col  py-3">
            <Link
              className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
              target="_blank"
              href={"/Industries/Manufacturing"}
            >
              Manufacturing
            </Link>

            <Link
              className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
              target="_blank"
              href={"/Industries/Retail"}
            >
              Retail
            </Link>

            <Link
              className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
              target="_blank"
              href={"/Industries/Trading-and-Distribution"}
            >
              Trading and Distribution
            </Link>
            <Link
              className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
              target="_blank"
              href={"/Industries/Project"}
            >
              Project
            </Link>
            <Link
              className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
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
              className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
              target="_blank"
              href={"/About-Us"}
            >
              ✅ About Us
            </Link>
            <Link
              className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
              target="_blank"
              href={"/Infotech-Weekly"}
            >
              Infotech Weekly
            </Link>

            <div className="">
              <Link
                className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                target="_blank"
                href={"/Careers"}
              >
                ✅ Careers
              </Link>
              <ul className=" ml-12">
                <li className="mb-4 mt-2">
                  <Link
                    target="_blank"
                    className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                    href={"/We-Are-Hiring"}
                  >
                    ✅ We Are Hiring
                  </Link>
                </li>
                <li className="mb-4 mt-2">
                  <Link
                    target="_blank"
                    className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
                    href={"/Job-Description"}
                  >
                    ✅ Job Description
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              className="font-medium text-lg ml-4 hover:underline w-fit w-fit-offset-2 mb-2"
              target="_blank"
              href={"/Contact-Us"}
            >
              ✅ Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
