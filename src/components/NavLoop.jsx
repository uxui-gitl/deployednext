import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

const NavLoop = () => {
  const links = [
    {
      id: 1,
      title: "Solutions",
      url: "/",
      level: 1,
      type: "group",
      subLinks: [
        {
          id: 1,
          title: "Automation",
          url: "/",
          level: 2,
          type: "group",
          subLinks: [
            {
              id: 1,
              title: "Intelligent Technologies",
              url: "/",
              level: 3,
              type: "link",
              subLinks: [
                {
                  id: 1,
                  title: "AI & ML",
                  url: "/",
                  level: 4,
                  type: "link",
                },
                {
                  id: 2,
                  title: "RPA",
                  url: "/",
                  level: 4,
                  type: "link",
                },
                {
                  id: 3,
                  title: "IIOT",
                  url: "/",
                  level: 4,
                  type: "link",
                },
              ],
            },
            {
              id: 2,
              title: "Technology Stack",
              url: "/",
              level: 3,
              type: "link",
            },
            {
              id: 3,
              title: "Data Insights",
              url: "/",
              level: 3,
              type: "link",
            },
            {
              id: 4,
              title: "Data Information and Security",
              url: "/",
              level: 3,
              type: "link",
            },
          ],
        },
        {
          id: 2,
          title: "Cloudification",
          url: "/",
          level: 2,
          type: "group",
          subLinks: [
            {
              id: 1,
              title: "Upgrade to Cloud",
              url: "/",
              level: 3,
              type: "link",
            },
            {
              id: 2,
              title: "Cloud Stack & Services",
              url: "/",
              level: 3,
              type: "link",
            },
          ],
        },
        {
          id: 3,
          title: "Transformation",
          url: "/",
          level: 2,
          type: "group",
          subLinks: [
            {
              id: 1,
              title: "Enterprise Suite",
              url: "/",
              level: 3,
              type: "link",
              subLinks: [
                {
                  id: 1,
                  title: "Infor",
                  url: "/",
                  level: 4,
                  type: "link",
                  subLinks: [
                    {
                      id: 1,
                      title: "Infor WMS",
                      url: "/",
                      level: 5,
                      type: "link",
                    },
                    {
                      id: 2,
                      title: "Infor LN",
                      url: "/",
                      level: 5,
                      type: "link",
                    },
                    {
                      id: 3,
                      title: "Infor CloudSuite",
                      url: "/",
                      level: 5,
                      type: "link",
                    },
                    {
                      id: 4,
                      title: "HxnEAM",
                      url: "/",
                      level: 5,
                      type: "link",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Microsoft Dynamics",
                  url: "/",
                  level: 4,
                  type: "link",
                  subLinks: [
                    {
                      id: 1,
                      title: "Business Central",
                      url: "/",
                      level: 5,
                      type: "link",
                    },
                    {
                      id: 2,
                      title: "F&O",
                      url: "/",
                      level: 5,
                      type: "link",
                    },
                    {
                      id: 3,
                      title: "Commerce",
                      url: "/",
                      level: 5,
                      type: "link",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Oracle",
                  url: "/",
                  level: 4,
                  type: "link",
                },
              ],
            },
            {
              id: 2,
              title: "Customer Experience",
              url: "/",
              level: 3,
              type: "link",
              subLinks: [
                {
                  id: 1,
                  title: "Infor CRM",
                  url: "/",
                  level: 4,
                  type: "link",
                },
                {
                  id: 2,
                  title: "Microsoft CRM",
                  url: "/",
                  level: 4,
                  type: "link",
                },
                {
                  id: 3,
                  title: "Salesforce CRM",
                  url: "/",
                  level: 4,
                  type: "link",
                },
                {
                  id: 4,
                  title: "Magento Ecom",
                  url: "/",
                  level: 4,
                  type: "link",
                },
                {
                  id: 5,
                  title: "LS Retail",
                  url: "/",
                  level: 4,
                  type: "link",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Our Services",
      url: "/",
      level: 1,
      type: "group",
      subLinks: [
        {
          id: 1,
          title: "Business Consulting",
          url: "/",
          level: 2,
          type: "link",
        },
        {
          id: 2,
          title: "Implementation & Global Rollout",
          url: "/",
          level: 2,
          type: "link",
        },
        {
          id: 3,
          title: "Managed Services",
          url: "/",
          level: 2,
          type: "link",
        },
      ],
    },
    {
      id: 3,
      title: "Industry Focus",
      url: "/",
      level: 1,
      type: "group",
      subLinks: [
        {
          id: 1,
          title: "Manufacturing",
          url: "/",
          level: 2,
          type: "link",
        },
        {
          id: 2,
          title: "Retail",
          url: "/",
          level: 2,
          type: "link",
        },
        {
          id: 3,
          title: "Trading and Distribution",
          url: "/",
          level: 2,
          type: "link",
        },
        {
          id: 4,
          title: "Project",
          url: "/",
          level: 2,
          type: "link",
        },
        {
          id: 5,
          title: "Professional Services",
          url: "/",
          level: 2,
          type: "link",
        },
      ],
    },
    {
      id: 4,
      title: "About Us",
      url: "/",
      level: 1,
      type: "link",
    },
    {
      id: 5,
      title: "Careers",
      url: "/",
      level: 1,
      type: "link",
    },
    {
      id: 6,
      title: "Insights",
      url: "/",
      level: 1,
      type: "link",
    },
    {
      id: 7,
      title: "Contact Us",
      url: "/",
      level: 1,
      type: "link",
    },
  ];

  const [activeGroup, setActiveGroup] = useState(null);

  const handleGroupHover = (groupId) => {
    setActiveGroup(groupId);
  };

  const renderLinks = (links) => {
    return links.map((link) => {
      if (link.type === "group") {
        const isGroupActive = link.id === activeGroup;
        return (
          <div
            key={link.id}
            onMouseEnter={() => handleGroupHover(link.id)}
            onMouseLeave={() => handleGroupHover(null)}
            className={`group ${isGroupActive ? "bg-gray-200" : ""}`}
          >
            <span className="text-base mr-3 cursor-pointer">{link.title}</span>
            <div
              className={`${
                isGroupActive ? "block" : "hidden"
              } absolute left-0 ml-1 space-y-2 bg-white border border-gray-200 z-50`}
            >
              {renderLinks(link.subLinks)}
            </div>
          </div>
        );
      } else if (link.type === "link") {
        return (
          <Link legacyBehavior href={link.url} key={link.id}>
            <a className="text-base mr-3">{link.title}</a>
          </Link>
        );
      }
    });
  };

  return (
    //     <>
    //       <header className="max-w-screen-xl mx-auto px-[2rem] ">
    //         <div className="flex justify-between items-center py-5">
    //           <Link href="/">
    //             <Image
    //               src="/godrejLogo.svg"
    //               alt="godrej logo"
    //               width="125"
    //               height="45"
    //             />
    //           </Link>
    //  <nav className=" sm:flex">
    //             {links.map((link) => {
    //               return (
    //                 <Link href={link.url} className="mr-3  text-base" key={link.id}>
    //                   {link.title}
    //                 </Link>
    //               );
    //             })}
    //           </nav>
    //         </div>
    //       </header>
    //     </>

    <>
      <header className="max-w-screen-xl mx-auto px-[2rem]">
        <div className="flex justify-between items-center py-5">
          <Link href="/">
            <Image
              src="/godrejLogo.svg"
              alt="godrej logo"
              width="125"
              height="45"
            />
          </Link>

          <nav className="sm:flex space-x-3 relative">{renderLinks(links)}</nav>
        </div>
      </header>
    </>
  );
};

export default NavLoop;
