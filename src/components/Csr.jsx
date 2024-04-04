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
import { mdiArrowRight } from "@mdi/js";

const Csr = ({ arr }) => {
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
        <Tab key="Report" className="w-full border-n" title="Report">
          <Card radius="none" shadow="none">
            <CardBody className="text-left max-w-screen-xl  grid grid-rows-1 sm:grid-rows-2 sm:grid-cols-3 gap-8  md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] ">
              <Card
                radius="none"
                shadow="none"
                className=" rounded-none  col-span-1 max-w-[400px]"
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
                  href="https://github.com/nextui-org/nextui"
                >
                  <CardFooter
                    radius="none"
                    shadow="none"
                    className="rounded-none  w-full text-[#fff]"
                  >
                    Know More.{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
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
                  href="https://github.com/nextui-org/nextui"
                >
                  <CardFooter
                    radius="none"
                    shadow="none"
                    className="rounded-none  w-full text-[#fff]"
                  >
                    Know More.{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
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
                  href="https://github.com/nextui-org/nextui"
                >
                  <CardFooter
                    radius="none"
                    shadow="none"
                    className="rounded-none  w-full text-[#fff]"
                  >
                    Know More.{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
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
                  href="https://github.com/nextui-org/nextui"
                >
                  <CardFooter
                    radius="none"
                    shadow="none"
                    className="rounded-none  w-full text-[#fff]"
                  >
                    Know More.{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
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
                  href="https://github.com/nextui-org/nextui"
                >
                  <CardFooter
                    radius="none"
                    shadow="none"
                    className="rounded-none  w-full text-[#fff]"
                  >
                    Know More.{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
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
                  href="https://github.com/nextui-org/nextui"
                >
                  <CardFooter
                    radius="none"
                    shadow="none"
                    className="rounded-none  w-full text-[#fff]"
                  >
                    Know More.{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </CardFooter>
                </Link>
              </Card>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Commitee" className="w-full" title="Commitee">
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
                    Mrs. Nyrika Holkar, Chairperson
                  </h4>
                </CardFooter>
              </Card>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="CSR" className="w-full" title="CSR">
          <Card radius="none" shadow="none">
            <CardBody className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] ">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>

        <Tab key="Statutory" className="w-full " title="Statutory">
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
