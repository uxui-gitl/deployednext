import React from "react";
// import { Tabs, Tab } from "@nextui-org/tabs";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Link,
  Image,
  CardHeader,
} from "@nextui-org/react";
import Icon from "@mdi/react";
import { mdiArrowRight, mdiChevronDown } from "@mdi/js";
import Accordion from "./Accordion";

const Csr = ({ arr }) => {
  const data = [
    {
      _id: 1,
      title: "Business Consulting",
      desc: "",
      cta: "Explore Service",
      subArrLinks: [],
      image: "rpa/Cyber-security-offerings_Business-Consulting.jpg",
      inline: true,
      subArr: false,
      ctaUrl: "/",
      links: [
        {
          title: "Cybersecurity roadmap development",
          url: "/",
        },
        {
          title:
            "Assessment services against cyber security frameworks & standards",
          url: "/",
        },
      ],
    },
  ];
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        radius="none"
        variant="underlined"
        classNames={{
          tabList:
            "gap-6 w-full relative flex justify-center rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#0745D3] text-[#0745D3]",
          tab: "max-w-fit px-8 h-12",
          panel: "bg-[#fff] color-[#333] font-bold rounded-none border-0",
          tabContent:
            "group-data-[selected=true]:text-[#0745D3] outline-none border-none shadow-none font-semibold",
          panel: "outline-none border-none shadow-none font-semibold",
        }}
      >
        <Tab key="Report" className="w-full border-n" title="Statutory Report">
          <Card radius="none" shadow="none">
            <CardBody className="text-left max-w-screen-xl  grid grid-rows-1 sm:grid-rows-2 sm:grid-cols-3 gap-8  md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] ">
              <Card
                radius="none"
                shadow="none"
                className=" rounded-none  col-span-1 max-w-[400px]"
              >
                <CardBody className="flex justify-between items-center flex-row">
                  <p className="text-[26px] font-bold leading-[34px]">
                    FY 2022-2023{" "}
                  </p>
                  <div>
                    <Icon
                      path={mdiChevronDown}
                      style={{
                        marginLeft: "0.5em",
                        height: "2em",
                        width: "2em",
                      }}
                    />
                  </div>
                </CardBody>
                <Divider />
                <CardFooter
                  radius="none"
                  shadow="none"
                  className="rounded-none  w-full text-[#fff]"
                >
                  <Accordion
                    items={[
                      {
                        _id: 1,
                        icon: "gear",
                        title: "FY 2022-2023 ",
                        desc: "",
                        cta: "Know More",
                        ctaUrl: "/",
                        list: [
                          {
                            title:
                              "External integration with project monitoring tools  ",
                            url: "/",
                          },
                          {
                            title: "Mobile applications for task assignment",
                            url: "/",
                          },
                          {
                            title: "After sales service",
                            url: "/",
                          },
                          {
                            title: "Data Security & Digital Documentation ",
                            url: "/",
                          },
                          {
                            title: "Multi site management  ",
                            url: "/",
                          },
                          {
                            title: "Project Task Assignment & Management  ",
                            url: "/",
                          },
                          {
                            title: "Remote Work and Cost Accuracy   ",
                            url: "/",
                          },
                        ],
                      },
                    ]}
                  />
                </CardFooter>
              </Card>
              <Card
                radius="none"
                shadow="none"
                className=" rounded-none  max-w-[400px]"
              >
                <CardBody>
                  <p className="text-[26px] font-bold leading-[34px]">
                    FY 2022-2023
                  </p>
                </CardBody>
                <Divider />
                <Link
                  isExternal
                  className="text-[#fff]  bg-[#0745D3] w-full"
                  href="/"
                >
                  <CardFooter
                    radius="none"
                    shadow="none"
                    className="rounded-none  w-full text-[#fff]"
                  >
                    Know More.{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{
                        marginLeft: "0.5em",
                        height: "1em",
                        width: "1em",
                      }}
                    />
                  </CardFooter>
                </Link>
              </Card>
              <Card
                radius="none"
                shadow="none"
                className=" rounded-none  max-w-[400px]"
              >
                <CardBody>
                  <p className="text-[26px] font-bold leading-[34px]">
                    FY 2022-2023
                  </p>
                </CardBody>
                <Divider />
                <Link
                  isExternal
                  className="text-[#fff]  bg-[#0745D3] w-full"
                  href="/"
                >
                  <CardFooter
                    radius="none"
                    shadow="none"
                    className="rounded-none  w-full text-[#fff]"
                  >
                    Know More.{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{
                        marginLeft: "0.5em",
                        height: "1em",
                        width: "1em",
                      }}
                    />
                  </CardFooter>
                </Link>
              </Card>
              <Card
                radius="none"
                shadow="none"
                className=" rounded-none  max-w-[400px]"
              >
                <CardBody>
                  <p className="text-[26px] font-bold leading-[34px]">
                    FY 2022-2023
                  </p>
                </CardBody>
                <Divider />
                <Link
                  isExternal
                  className="text-[#fff]  bg-[#0745D3] w-full"
                  href="/"
                >
                  <CardFooter
                    radius="none"
                    shadow="none"
                    className="rounded-none  w-full text-[#fff]"
                  >
                    Know More.{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{
                        marginLeft: "0.5em",
                        height: "1em",
                        width: "1em",
                      }}
                    />
                  </CardFooter>
                </Link>
              </Card>
              <Card
                radius="none"
                shadow="none"
                className=" rounded-none  max-w-[400px]"
              >
                <CardBody>
                  <p className="text-[26px] font-bold leading-[34px]">
                    FY 2022-2023
                  </p>
                </CardBody>
                <Divider />
                <Link
                  isExternal
                  className="text-[#fff]  bg-[#0745D3] w-full"
                  href="/"
                >
                  <CardFooter
                    radius="none"
                    shadow="none"
                    className="rounded-none  w-full text-[#fff]"
                  >
                    Know More.{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{
                        marginLeft: "0.5em",
                        height: "1em",
                        width: "1em",
                      }}
                    />
                  </CardFooter>
                </Link>
              </Card>
              <Card
                radius="none"
                shadow="none"
                className=" rounded-none  max-w-[400px]"
              >
                <CardBody>
                  <p className="text-[26px] font-bold leading-[34px]">
                    FY 2022-2023
                  </p>
                </CardBody>
                <Divider />
                <Link
                  isExternal
                  className="text-[#fff]  bg-[#0745D3] w-full"
                  href="/"
                >
                  <CardFooter
                    radius="none"
                    shadow="none"
                    className="rounded-none  w-full text-[#fff]"
                  >
                    Know More.{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{
                        marginLeft: "0.5em",
                        height: "1em",
                        width: "1em",
                      }}
                    />
                  </CardFooter>
                </Link>
              </Card>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Commitee" className="w-full" title="Corporate Policies">
          <Card radius="none" shadow="none">
            <CardBody className="text-left max-w-screen-xl  grid grid-rows-1 sm:grid-rows-2 sm:grid-cols-3 gap-8  md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] ">
              <Card className="py-4" radius="none" shadow="none">
                <CardBody className="overflow-visible py-2 object-cover">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-sm"
                    src="/project-placeholder.png"
                    // width={270}
                    fill
                  />
                </CardBody>
                <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">
                    Mrs. Nyrika Holkar, Chairperson
                  </h4>
                </CardFooter>
              </Card>
              <Card className="py-4" radius="none" shadow="none">
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-sm"
                    src="/project-placeholder.png"
                    // width={270}
                    fill
                  />
                </CardBody>
                <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">
                    Mr. P. E. Fouzdar, Member
                  </h4>
                </CardFooter>
              </Card>
              <Card className="py-4" radius="none" shadow="none">
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-sm"
                    src="/project-placeholder.png"
                    // width={270}
                    fill
                  />
                </CardBody>
                <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">
                    Mr. V. R. Mehta, Member
                  </h4>
                </CardFooter>
              </Card>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="CSR" className="w-full" title="CSR Updates">
          <Card radius="none" shadow="none">
            <CardBody className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] ">
              <ul>                                   
                                    <li class="updateTab"> <a href="assets/pdf/corporatePolicies/CSR.pdf" target="_blank">CSR policy</a></li>

                                    <li class="updateTab"> <a href="assets/pdf/corporatePolicies/CSR22-23.pdf" target="_blank">CSR Action Plan FY 2022-23 </a></li>

                                    <li class="updateTab"> <a href="assets/pdf/corporatePolicies/CSR21-22.pdf" target="_blank">CSR Action Plan FY 2021-22 </a></li>
                                    
                                    <li class="updateTab"> <a href="assets/pdf/corporatePolicies/CSR20-21.pdf" target="_blank">CSR Action Plan FY 2020-21 </a></li>

                                    

                                                                     
                                </ul>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Statutory" className="w-full " title="Statutory Updates">
          <Card radius="none" shadow="none">
            <CardBody className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] ">
              Statutory Updates Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Csr;
