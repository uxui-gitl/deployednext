import Announcement from "@/sections/announcement/Announcement";
import Copyright from "@/sections/copyright/Copyright";
import Footer from "@/sections/footer/Footer";
import Navbar from "@/sections/navbar/Navbar";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <div className="w-screen min-h-3/5 p-5">About Us</div>
      <Footer />
      <Copyright />
    </>
  );
};

export default AboutUs;
