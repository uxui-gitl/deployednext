import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Link as ScrollLink,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const SectionNav = ({ arr }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollY || window.pageYOffset;

      arr.forEach((item) => {
        const targetElement = document.querySelector(item.link);
        if (targetElement) {
          const targetOffset = targetElement.offsetTop;
          const targetHeight = targetElement.offsetHeight;

          if (
            scrollOffset >= targetOffset &&
            scrollOffset < targetOffset + targetHeight
          ) {
            setActiveSection(item.link.substring(1));
          }
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [arr]);

  return (
    <>
      <div className=" hidden sm:block mx-auto bg-[#F2F4F7] sticky top-0 z-50 border-b-2">
        <ul className="flex justify-center gap-10">
          {arr.map((item) => (
            <li key={item._id} className="py-5 cursor-pointer">
              <ScrollLink
                to={item.link.substring(1)}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                className={`font-medium py-5 text-base ${
                  activeSection === item.link.substring(1)
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-700"
                }`}
              >
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SectionNav;
