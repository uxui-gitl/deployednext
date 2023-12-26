import Announcement from "@/sections/announcement/Announcement";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      {/* <div className={`relative z-[500]`}>
        <div className={`absolute w-full  `}>
          <Navbar theme="dark" />
        </div>
      </div> */}
      <Announcement
        content={[
          {
            _id: 1,
            title:
              "Dive into brilliant career experience to manifest the excellence in you.  ",
            cta: "",
            targetBlank: true,
            link: "/",
          },
          {
            _id: 2,
            title: "Discover the next big opportunities here.  ",
            cta: "",
            targetBlank: true,
            link: "/",
          },
        ]}
      />

      {children}
    </>
  );
};

export default layout;
