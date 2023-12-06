"use client";
import Announcement from "@/sections/announcement/Announcement";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import Footer from "@/sections/footer/Footer";
import Copyright from "@/sections/copyright/Copyright";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const works = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const hasEntIntro = React.Children.toArray(children).some(
    (child) => child.type && child.type.name === "EntIntro"
  );

  return (
    <html lang="en">
      <body className={`${works.className} antialiased`}>
        <Announcement />
        <div className={`relative z-[500]`}>
          <div
            className={`absolute w-full  ${
              hasEntIntro ? "bg-white text-black" : ""
            }`}
          >
            <Navbar />
          </div>
        </div>

        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
