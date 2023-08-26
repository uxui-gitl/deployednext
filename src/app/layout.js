import "./globals.css";
import { Work_Sans } from "next/font/google";

const works = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Godrej Infotech",
  description: "GITL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={works.className}>{children}</body>
    </html>
  );
}
