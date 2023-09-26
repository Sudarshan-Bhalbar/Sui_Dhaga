"use client";
import { easeInOut, motion } from "framer-motion";
import { RiMenu3Line } from "react-icons/ri";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Styles from "@/app/Styles/navbar.module.css";
import SideBar from "./SideBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      // Sidebar is open, so enable scrolling
      document.body.style.overflow = "auto";
    } 
    // else {
    //   // Sidebar is closed, so disable scrolling
    //   // document.body.style.overflow = "hidden";
    // }
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          id={Styles.Navbar}
          className={`navbar fixed z-50 ${
            isScrolled ? "navbar--scrolled" : ""
          }`}
          initial={{ backgroundColor: "transparent" }}
          animate={{
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.5)"
              : "transparent",
          }}
          transition={{ duration: 0.3 }}
        >
          <div id={Styles.nav_l}>
            <motion.h3>SUI DHAGA</motion.h3>
          </div>
          <div id={Styles.nav_r}>
            <RiMenu3Line id={Styles.nav_r_menu_bar} onClick={toggleSidebar} />
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="sidebar"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100vw", opacity: 0 }}
            transition={{ duration: 0.5, ease: easeInOut }}
          >
            <SideBar toggleSidebar={toggleSidebar} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
