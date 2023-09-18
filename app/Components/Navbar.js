"use client";
import { motion } from "framer-motion";
import { RiMenu3Line } from "react-icons/ri";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <AnimatePresence>
        <motion.div  id="Navbar" className={`navbar fixed z-50 ${isScrolled ? 'navbar--scrolled' : ''}`}
      initial={{ backgroundColor: 'transparent' }}
      animate={{ backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.5)' : 'transparent' }}
      transition={{ duration: 0.3 }}>
          <div id="nav-l" >
            <motion.h3>
              SUI DHAGA
            </motion.h3>
          </div>
          <div id="nav-r">
            <RiMenu3Line id="nav-r-menu-bar" />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
