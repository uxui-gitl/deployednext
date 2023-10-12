import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Solutions",
      url: "/solutions",
    },
    {
      id: 3,
      title: "Industry Focus",
      url: "/industry-focus",
    },
    {
      id: 4,
      title: "About Us",
      url: "/about-us",
    },
    {
      id: 5,
      title: "Careers",
      url: "/careers",
    },
    {
      id: 6,
      title: "Insights",
      url: "/insights",
    },
    {
      id: 7,
      title: "Contact Us",
      url: "/contact-us",
    },
  ];

  return (
    <>
      <header className="max-w-screen-xl mx-auto px-[2rem] ">
        <div className="flex justify-between items-center py-5">
          <Link href="/">
            <Image
              src="/godrejLogo.svg"
              alt="godrej logo"
              width="125"
              height="45"
            />
          </Link>
          {/*
      <Link className="hidden " href="/">
        <Icon path={mdiMenu} color="white" size={1.3} />
      </Link> */}

          <nav className=" sm:flex">
            {links.map((link) => {
              return (
                <Link href={link.url} className="mr-3  text-base" key={link.id}>
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
