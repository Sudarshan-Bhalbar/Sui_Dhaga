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
              <div
                id={Styles.smdot}
                className={activeDotIndex === 0 ? Styles.active : ""}
              ></div>
              <h2
                id={Styles.pointer_none}
                onClick={() => handleDotClick(0)}
                className={activeDotIndex === 0 ? Styles.active : ""}
              >
                01
              </h2>
              <h1
                id={Styles.pointer_none}
                className={`${Styles.h1_1} ${
                  activeDotIndex === 0 ? Styles.active : ""
                }`}
                onClick={() => handleDotClick(0)}
              >
                HOME
              </h1>
            </div>
          </div>
          <div className={`${Styles.stripe} ${Styles.strip2}`}>
            <div className={Styles.first}></div>
            <div className={Styles.second}>
              <div
                id={Styles.smdot}
                className={activeDotIndex === 1 ? Styles.active : ""}
              ></div>

              <h2
                id={Styles.pointer_none}
                onClick={() => handleDotClick(1)}
                className={activeDotIndex === 1 ? Styles.active : ""}
              >
                02
              </h2>
              <h1
                id={Styles.pointer_none}
                className={`${Styles.h1_2} ${
                  activeDotIndex === 1 ? Styles.active : ""
                }`}
                onClick={() => handleDotClick(1)}
              >
                SHOP
              </h1>
            </div>
          </div>
          <div className={`${Styles.stripe} ${Styles.strip3}`}>
            <div className={Styles.first}></div>
            <div className={Styles.second}>
              <div
                id={Styles.smdot}
                className={activeDotIndex === 2 ? Styles.active : ""}
              ></div>
              <h2
                id={Styles.pointer_none}
                onClick={() => handleDotClick(2)}
                className={activeDotIndex === 2 ? Styles.active : ""}
              >
                03
              </h2>
              <h1
                id={Styles.pointer_none}
                className={`${Styles.h1_3} ${
                  activeDotIndex === 2 ? Styles.active : ""
                }`}
                onClick={() => handleDotClick(2)}
              >
                CATEGORIES
              </h1>
            </div>
          </div>
          <div className={`${Styles.stripe} ${Styles.strip4}`}>
            <div className={Styles.first}></div>
            <div className={Styles.second}>
              <div
                id={Styles.smdot}
                className={activeDotIndex === 3 ? Styles.active : ""}
              ></div>

              <h2
                id={Styles.pointer_none}
                onClick={() => handleDotClick(3)}
                className={activeDotIndex === 3 ? Styles.active : ""}
              >
                04
              </h2>
              <h1
                id={Styles.pointer_none}
                className={`${Styles.h1_4} ${
                  activeDotIndex === 3 ? Styles.active : ""
                }`}
                onClick={() => handleDotClick(3)}
              >
                NEW ARRIVALS
              </h1>
            </div>
          </div>
          <div className={`${Styles.stripe} ${Styles.strip5}`}>
            <div className={Styles.first}></div>
            <div className={Styles.second}>
              <div
                id={Styles.smdot}
                className={activeDotIndex === 4 ? Styles.active : ""}
              ></div>

              <h2
                id={Styles.pointer_none}
                onClick={() => handleDotClick(4)}
                className={activeDotIndex === 4 ? Styles.active : ""}
              >
                05
              </h2>
              <h1
                id={Styles.pointer_none}
                className={`${Styles.h1_5} ${
                  activeDotIndex === 4 ? Styles.active : ""
                }`}
                onClick={() => handleDotClick(4)}
              >
                ABOUT US
              </h1>
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
