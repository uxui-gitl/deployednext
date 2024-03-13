"use client";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import Footer from "@/sections/footer/Footer";
import Copyright from "@/sections/copyright/Copyright";
import React, { useEffect, useState } from "react";

import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";
const works = Work_Sans({ subsets: ["latin"] });

import Head from "next/head";

const defaultMetadata = {
  title:
    "Godrej Infotech | Empowering Business Through Digital Transformation | Microsoft Dynamics, Infor, LS Central, Oracle",
  description:
    "Godrej Infotech, A G&B Group Company is a global leader in technology services and digital transformation with clients across Manufacturing, Retail, Transport and logistics, Oil & Gas Industies. We have been helping our clients across India, Middle East, Asia Pacific - Singapore, Philipines, Europe and USA with Innovative Solutions in the evolving world of ERP, Cloud, Digital & Platforms across technologies.",
};

function generateMetadata(route) {
  const metadata = {
    "/": {
      title: "Home | Godrej Infotech",
      description:
        "Godrej Infotech, A G&B Group Company is a global leader in technology services and digital transformation with clients across Manufacturing, Retail, Transport and logistics, Oil & Gas Industies. We have been helping our clients across India, Middle East, Asia Pacific - Singapore, Philipines, Europe and USA with Innovative Solutions in the evolving world of ERP, Cloud, Digital & Platforms across technologies.",
    },
    "/Solutions/Intelligent-Technologies/AI-ML": {
      title: "AI ML - Intelligent Technologies | Godrej Infotech",
      description: "Learn more about our company",
    },
    // Add metadata for other routes
  };

  return metadata[route] || defaultMetadata;
}

export default function RootLayout({ children, route }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  const metadata = generateMetadata(pathname);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags as needed */}
      </head>
      <body className={`${works.className} antialiased`}>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <NextTopLoader />
            {children}
            <Footer />
            <Copyright />
            {/* <Analytics />
            <SpeedInsights /> */}
          </>
        )}
        <script
          src="//rum-static.pingdom.net/pa-65f01a5e68cac40012000883.js"
          async
        ></script>
      </body>
    </html>
  );
}
