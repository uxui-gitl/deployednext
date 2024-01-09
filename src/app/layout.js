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
const works = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang="en">
      <body className={`${works.className} antialiased`}>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            {children}
            <Footer />
            <Copyright />
            {/* <Analytics />
            <SpeedInsights /> */}
          </>
        )}
      </body>
    </html>
  );
}
