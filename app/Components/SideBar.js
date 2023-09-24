import React, { useState } from "react";
import Styles from "@/app/Styles/sidebar.module.css";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";

const SideBar = ({ toggleSidebar }) => {
  const [rotation, setRotation] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(2);

  const handleDotClick = (index) => {
    const angles = [30, 15, 0, -15, -30];
    setRotation(angles[index]);
    setActiveDotIndex(index);
  };

  return (
    <>
      <div id={Styles.sidebar_wraper}>
        <motion.div
          id={Styles.main_circle}
          style={{ rotate: `${rotation}deg`, transition: "easeInOut 1000s" }}
        >
          <div className={`${Styles.stripe} ${Styles.strip1}`}>
            <div className={Styles.first}></div>
            <div className={Styles.second}>
              <h2>01</h2>
              <h1 className={Styles.h1_1}>HOME</h1>
            </div>
          </div>
          <div className={`${Styles.stripe} ${Styles.strip2}`}>
            <div className={Styles.first}></div>
            <div className={Styles.second}>
              <h2>02</h2>
              <h1 className={Styles.h1_2}>SHOP</h1>
            </div>
          </div>
          <div className={`${Styles.stripe} ${Styles.strip3}`}>
            <div className={Styles.first}></div>
            <div className={Styles.second}>
              <h2>03</h2>
              <h1 className={Styles.h1_3}>CATEGORIES</h1>
            </div>
          </div>
          <div className={`${Styles.stripe} ${Styles.strip4}`}>
            <div className={Styles.first}></div>
            <div className={Styles.second}>
              <h2>04</h2>
              <h1 className={Styles.h1_4}>NEW ARRIVALS</h1>
            </div>
          </div>
          <div className={`${Styles.stripe} ${Styles.strip5}`}>
            <div className={Styles.first}></div>
            <div className={Styles.second}>
              <h2>05</h2>
              <h1 className={Styles.h1_5}>ABOUT US</h1>
            </div>
          </div>
        </motion.div>
        <TfiClose id={Styles.Close_btn} onClick={toggleSidebar} />
        <div id={Styles.dot_btn}>
          <div
            className={`${Styles.dot} ${
              activeDotIndex === 0 ? Styles.active : ""
            }`}
            onClick={() => handleDotClick(0)}
          ></div>
          <div
            className={`${Styles.dot} ${
              activeDotIndex === 1 ? Styles.active : ""
            }`}
            onClick={() => handleDotClick(1)}
          ></div>
          <div
            className={`${Styles.dot} ${
              activeDotIndex === 2 ? Styles.active : ""
            }`}
            onClick={() => handleDotClick(2)}
          ></div>
          <div
            className={`${Styles.dot} ${
              activeDotIndex === 3 ? Styles.active : ""
            }`}
            onClick={() => handleDotClick(3)}
          ></div>
          <div
            className={`${Styles.dot} ${
              activeDotIndex === 4 ? Styles.active : ""
            }`}
            onClick={() => handleDotClick(4)}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

