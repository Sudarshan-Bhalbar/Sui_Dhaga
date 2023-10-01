"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/Styles/sidebar.module.css";
import { easeInOut, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";

const SideBar = ({ toggleSidebar }) => {
  const pathname = usePathname();
  const circleRef = useRef(null);
  const rotationValues = [0, 15, 30, 45, 60];
  const rotationSteps = 60 / rotationValues.length;
  const [activeDotIndex, setActiveDotIndex] = useState(0);




  const handleDotClick = (index) => {
    const rotationValue = rotationValues[index];
    gsap.to(circleRef.current, {
      rotation: rotationValue,
      duration: 1,
      ease: "easeIn",
      
    });
    setActiveDotIndex(index);
  };
 


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const clamp = (value, min, max) => {
      return Math.min(Math.max(value, min), max);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#circle-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    

    rotationValues.map((value, index) => {
      const start = index * rotationSteps;
      const end = start + rotationSteps;

      tl.to(
        circleRef.current,
        {
          rotation: (i) => {
            const rotationValue = clamp(value, 0, 60);
            return rotationValue;
          },
          duration: 1,
          ease: "easeIn",
          start: `+=${start}`,
          end: `+=${end}`,
        },
        
      );
    });

    
  }, []);
  
  

  // Amimation

  return (
    <>
      <motion.div
        id={styles.circle_wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: easeInOut, duration: 1 }}
      >
        <motion.div
          initial={{ rotate: 180, scale: 2 }}
          whileInView={{ rotate: 0, scale: [1, 1.5, 1] }}
          whileHover={{ rotate: 360, scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          transition={{
            ease: easeInOut,
            duration: 0.1,
            type: "spring",
            damping: 50,
          }}
          id={styles.Close_btn}
          onClick={toggleSidebar}
        >
          <RxCross1 className={styles.cross} />{" "}
        </motion.div>

        <div id={styles.circle} ref={circleRef}>
          <div className={`${styles.stripe} ${styles.strip1}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.smdot}
              ></motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.pointer_none}
              >
                01
              </motion.h2>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.pointer_none}
                // ${
                //   activeDotIndex === 0
                //     ? `${styles.active} ${styles.opacity100}`
                //     : `${styles.opacity50}`} &&
                // this above ternary operator is used for dots

                className={`${
                  pathname === "/"
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }`}
                onClick={() => handleDotClick(4)}
              >
                <Link href={"/"} onClick={toggleSidebar}>
                  HOME
                </Link>
              </motion.h1>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.strip2}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.smdot}
              ></motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.pointer_none}
              >
                02
              </motion.h2>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.pointer_none}
                className={`
                ${
                  pathname === "/Pages/Shop_Page"
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }`}
                onClick={() => handleDotClick(3)}
              >
                <Link href={"/Pages/Shop_Page"} onClick={toggleSidebar}>
                  SHOP
                </Link>
              </motion.h1>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.strip3}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.smdot}
              ></motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.pointer_none}
              >
                03
              </motion.h2>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.pointer_none}
                className={`${
                  pathname === "/Pages/Categories"
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }`}
                onClick={() => handleDotClick(2)}
              >
                <Link href={"/Pages/Categories"} onClick={toggleSidebar}>
                  CATEGORIES
                </Link>
              </motion.h1>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.strip4}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.smdot}
              ></motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.pointer_none}
              >
                04
              </motion.h2>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.pointer_none}
                className={`${
                  pathname === "/Pages/Arrivals"
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }`}
                onClick={() => handleDotClick(1)}
              >
                <Link href={"/Pages/Arrivals"} onClick={toggleSidebar}>
                  NEW ARRIVALS
                </Link>
              </motion.h1>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.strip5}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.smdot}
              ></motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.pointer_none}
              >
                05
              </motion.h2>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                transition={{
                  ease: easeInOut,
                  duration: 0.1,
                  type: "spring",
                  damping: 10,
                }}
                id={styles.pointer_none}
                className={`${
                  pathname === "/Pages/About"
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }`}
                onClick={() => handleDotClick(0)}
              >
                <Link href={"/Pages/About"} onClick={toggleSidebar}>
                  ABOUT US
                </Link>
              </motion.h1>
            </div>
          </div>
        </div>
        <div id={styles.dot_btn}>
          <div
            // ${
            //   activeDotIndex === 0 ? styles.active : ""
            // }
            className={`${styles.dot}  ${
              pathname === "/Pages/About" ? styles.active : " "
            }`}
            onClick={() => handleDotClick(4)}
          ></div>
          <div
            className={`${styles.dot} ${
              pathname === "/Pages/Arrivals" ? styles.active : " "
            }`}
            onClick={() => handleDotClick(3)}
          ></div>
          <div
            className={`${styles.dot} ${
              pathname === "/Pages/Categories" ? styles.active : " "
            }`}
            onClick={() => handleDotClick(2)}
          ></div>
          <div
            className={`${styles.dot} ${
              pathname === "/Pages/Shop_Page" ? styles.active : " "
            }`}
            onClick={() => handleDotClick(1)}
          ></div>
          <div
            className={`${styles.dot} ${
              pathname === "/" ? styles.active : " "
            }`}
            onClick={() => handleDotClick(0)}
          ></div>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
