"use client";
import { motion } from "framer-motion";
import { RiMenu3Line } from "react-icons/ri";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {

  return (
    <>
      <AnimatePresence>
        <div  id="Navbar" className=" fixed z-50">
          <div id="nav-l" >
            <motion.h3>
              SUI DHAGA
            </motion.h3>
          </div>
          <div id="nav-r">
            <RiMenu3Line id="nav-r-menu-bar" />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
