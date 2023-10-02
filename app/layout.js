"use client";
import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "@/app/Components/Navbar";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/app/Components/Footer"), {
  ssr:false,
  loading: () => <p>Loading...</p>,
})
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
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
