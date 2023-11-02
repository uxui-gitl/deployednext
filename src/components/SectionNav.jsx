import Link from "next/link";
import React from "react";

const SectionNav = () => {
  const navLinks = [
    {
      _id: 1,
      name: "Enterprise Solutions",
      href: "/",
      primaryLink: true,
      subLink: false,
      target: "_self",
      isActive: true,
    },
    {
      _id: 2,
      name: "Industry Spotlight",
      href: "/",
      primaryLink: true,
      subLink: false,
      target: "_self",
      isActive: false,
    },
    {
      _id: 3,
      name: "Hub of Expertise",
      href: "/",
      primaryLink: true,
      subLink: false,
      target: "_self",
      isActive: false,
    },
    {
      _id: 4,
      name: "Partners",
      href: "/",
      primaryLink: true,
      subLink: false,
      target: "_self",
      isActive: false,
    },
    {
      _id: 5,
      name: "Goals",
      href: "/",
      primaryLink: true,
      subLink: false,
      target: "_self",
      isActive: false,
    },
    {
      _id: 6,
      name: "Infotech Solutions",
      href: "/",
      primaryLink: true,
      subLink: false,
      target: "_self",
      isActive: false,
    },
    {
      _id: 7,
      name: "Resources",
      href: "/",
      primaryLink: true,
      subLink: false,
      target: "_self",
      isActive: false,
    },
  ];

  return (
    <>
      <div className="py-5  mx-auto bg-[#F2F4F7] sticky top-0 z-50 border-b-2">
        <ul className="flex justify-center gap-10">
          {navLinks.map((item) => {
            return (
              <li key={item._id}>
                <Link
                  href={item.href}
                  className={
                    item.isActive
                      ? "font-medium border-b-4 border-b-[#0745D3] pb-[1.25rem] text-base text-[#0745D3] "
                      : "font-medium text-[#101828] text-base"
                  }
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SectionNav;
