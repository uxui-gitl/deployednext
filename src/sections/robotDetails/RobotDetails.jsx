import React from "react";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";
import styles from "./robotDetails.module.css";
import Link from "next/link";
import { mdiArrowTopRight } from "@mdi/js";
const AutomationContent = {
  title: "Embrace Tomorrow with Automation",
  desc: "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Automation (RPA), IoT & Analytics.",
};

const CloudContent = {
  title: "Experience New Business Dimensions with Cloud ",
  desc: "We are committed to provide, secure, cost-effective & scalable cloud implementation, cloud migration & cloud support services to our customers. ",
};

const TransformContent = {
  title: "Leverage Key Driver of Growth with Transformation ",
  desc: "We implement digital solutions that modernize and enhance user experience, ultimately leading to a digitally- sound businesses.",
};

const CardStackTest = {
  Automation: [
    {
      _id: 1,
      subcategory: "Intuitive/ Intelligent Technologies",
      sublinks: [
        { title: "Artificial Intelligence", url: "/ai" },
        { title: "IoT", url: "/iot" },
        { title: "Robotic Process Automation", url: "/rpa" },
      ],
    },
    {
      _id: 2,
      subcategory: "Technology Suite",
      sublinks: [
        { title: "Java", url: "/java" },
        { title: ".Net, Share Point", url: "/dotnet" },
        { title: "Low code application development", url: "/lowcode" },
      ],
    },
    {
      _id: 3,
      subcategory: "Data Insights",
      sublinks: [
        { title: "Power BI and Power Apps", url: "/powerbi" },
        { title: "Birst", url: "/birst" },
        { title: "Tableau", url: "/tableau" },
        { title: "Azure and AWS Data Management", url: "/cloud" },
      ],
    },
  ],
  Transform: [
    {
      _id: 1,
      title: "Embrace Tomorrow with Transform",
      desc: "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Transform (RPA), IoT & Analytics.",
      subcategory: "Intuitive/ Intelligent Technologies",
      sublinks: [
        { title: "Transform Intelligence", url: "/transform-intelligence" },
        { title: "Transform Learning", url: "/transform-learning" },
      ],
    },
    {
      _id: 2,
      title: "Embrace Tomorrow with Transform",
      desc: "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Transform (RPA), IoT & Analytics.",
      subcategory: "Intuitive/ Intelligent Technologies",
      sublinks: [
        { title: "Transform Intelligence", url: "/transform-intelligence" },
        { title: "Transform Learning", url: "/transform-learning" },
      ],
    },
    {
      _id: 3,
      title: "Embrace Tomorrow with Transform",
      desc: "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Transform (RPA), IoT & Analytics.",
      subcategory: "Intuitive/ Intelligent Technologies",
      sublinks: [
        { title: "Transform Intelligence", url: "/transform-intelligence" },
        { title: "Transform Learning", url: "/transform-learning" },
      ],
    },
  ],

  Cloud: [
    {
      _id: 1,
      title: "Embrace Tomorrow with Transform",
      desc: "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Transform (RPA), IoT & Analytics.",
      subcategory: "Intuitive/ Intelligent Technologies",
      sublinks: [
        { title: "Transform Intelligence", url: "/transform-intelligence" },
        { title: "Transform Learning", url: "/transform-learning" },
      ],
    },
    {
      _id: 2,
      title: "Embrace Tomorrow with Transform",
      desc: "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Transform (RPA), IoT & Analytics.",
      subcategory: "Intuitive/ Intelligent Technologies",
      sublinks: [
        { title: "Transform Intelligence", url: "/transform-intelligence" },
        { title: "Transform Learning", url: "/transform-learning" },
      ],
    },
    {
      _id: 3,
      title: "Embrace Tomorrow with Transform",
      desc: "Enabling organizations to optimize cost & enhance business processes with next-gen digital technologies like Robotic Process Transform (RPA), IoT & Analytics.",
      subcategory: "Intuitive/ Intelligent Technologies",
      sublinks: [
        { title: "Transform Intelligence", url: "/transform-intelligence" },
        { title: "Transform Learning", url: "/transform-learning" },
      ],
    },
  ],
};

const CardStack = [
  {
    _id: 1,
    subcategory: "Intuitive/ Intelligent Technologies",
    sublinks: [
      { title: "Artificial Intelligence", url: "/ai" },
      { title: "IoT", url: "/iot" },
      { title: "Robotic Process Automation", url: "/rpa" },
    ],
  },
  {
    _id: 2,
    subcategory: "Technology Suite",
    sublinks: [
      { title: "Java", url: "/java" },
      { title: ".Net, Share Point", url: "/dotnet" },
      { title: "Low code application development", url: "/lowcode" },
    ],
  },
  {
    _id: 3,
    subcategory: "Data Insights",
    sublinks: [
      { title: "Power BI and Power Apps", url: "/powerbi" },
      { title: "Birst", url: "/birst" },
      { title: "Tableau", url: "/tableau" },
      { title: "Azure and AWS Data Management", url: "/cloud" },
    ],
  },
];

const Card = ({ title, sublinks }) => (
  <div className="bg-[#fff] border-[rgb(112 112 112 / 15%)] border">
    <div className="font-semibold text-base pb-2 px-4 pt-2 bg-[#f2f4f7]">
      {title}
    </div>
    <div className="bg-[#fff] p-4">
      {sublinks.map((link, index) => (
        <span key={index} className="text-base leading-8  inline">
          <span className="text-[#0745d3]  inline ">
            <Link
              href={link.url}
              target="_blank"
              className=" inline-flex align-middle border-b-2 hover:opacity-80 mb-4"
            >
              {link.title}
              <span>
                <Icon
                  path={mdiArrowTopRight}
                  style={{ marginLeft: "0.5em" }}
                  size={1}
                />
              </span>
            </Link>
          </span>
          <br />
        </span>
      ))}
    </div>
  </div>
);

const RobotDetails = () => {
  return (
    <div className="">
      <div>
        <h4
          className={`${styles.subHead} undefined font-medium text-[#0745D3] uppercase ribbon text-2xl sm:text-4xl leading-[42px] ribbon ribbon-robot`}
        >
          Automate for the Future
        </h4>
        <p className="font-normal text-base leading-[22px]">
          Enabling organizations to optimize cost & enhance business processes
          with next-gen digital technologies like Robotic Process Automation
          (RPA), eCommerce & Analytics.
        </p>
        <div className="mx-auto pt-[26px] pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {CardStack.map((cardCategory) => (
              <Card
                key={cardCategory._id}
                title={cardCategory.subcategory}
                sublinks={cardCategory.sublinks}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotDetails;
