"use client";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
const works = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Godrej Infotech",
  description: "GITL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={works.className}>
        <Cursor isGelly={true} />
        {children}
      </body>
    </html>
  );
}
