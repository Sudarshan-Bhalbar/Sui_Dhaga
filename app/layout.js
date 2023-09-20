"use client"
import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import SideBar from "@/app/Components/SideBar";

const raleway = Raleway({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "400", "700"],
});

export const metadata = {
  title: "SUI DHAGA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={raleway.className}>
          <Navbar />
          <SideBar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
