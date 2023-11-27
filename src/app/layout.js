"use client";
import Announcement from "@/sections/announcement/Announcement";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import Footer from "@/sections/footer/Footer";
import Copyright from "@/sections/copyright/Copyright";
import Navbar from "@/components/Navbar/Navbar";

const works = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${works.className} antialiased`}>
        <Announcement />
        <div className="relative z-[500]">
          <div className="absolute w-full">
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
