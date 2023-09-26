"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/Styles/sidebar.module.css";

const SideBar = ({ toggleSidebar }) => {
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

      tl.to(circleRef.current, {
        rotation: (i) => {
          const rotationValue = clamp(value, 0, 60);
          return rotationValue;
        },
        duration: 1,
        ease: "easeIn",
        start: `+=${start}`,
        end: `+=${end}`,
      });
    });
  }, []);

  return (
    <>
      <div id={styles.circle_wrapper}>
        <div id={styles.circle} ref={circleRef}>
          <div className={`${styles.stripe} ${styles.strip1}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <div
                id={styles.smdot}
                className={
                  activeDotIndex === 0
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
              ></div>
              <h2
                id={styles.pointer_none}
                className={
                  activeDotIndex === 0
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
              >
                01
              </h2>
              <h1
                id={styles.pointer_none}
                className={
                  activeDotIndex === 0
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
                onClick={() => handleDotClick(0)}
              >
                <Link href={"/Pages/Test"}>HOME</Link>
              </h1>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.strip2}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <div
                id={styles.smdot}
                className={
                  activeDotIndex === 1
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
              ></div>
              <h2
                id={styles.pointer_none}
                className={
                  activeDotIndex === 1
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
              >
                02
              </h2>
              <h1
                id={styles.pointer_none}
                className={
                  activeDotIndex === 1
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
                onClick={() => handleDotClick(1)}
              >
                SHOP
              </h1>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.strip3}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <div
                id={styles.smdot}
                className={
                  activeDotIndex === 2
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
              ></div>
              <h2
                id={styles.pointer_none}
                className={
                  activeDotIndex === 2
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
              >
                03
              </h2>
              <h1
                id={styles.pointer_none}
                className={
                  activeDotIndex === 2
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
                onClick={() => handleDotClick(2)}
              >
                CATEGORIES
              </h1>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.strip4}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <div
                id={styles.smdot}
                className={
                  activeDotIndex === 3
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
              ></div>
              <h2
                id={styles.pointer_none}
                className={
                  activeDotIndex === 3
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
              >
                04
              </h2>
              <h1
                id={styles.pointer_none}
                className={
                  activeDotIndex === 3
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
                onClick={() => handleDotClick(3)}
              >
                NEW ARRIVALS
              </h1>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.strip5}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <div
                id={styles.smdot}
                className={
                  activeDotIndex === 4
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
              ></div>
              <h2
                id={styles.pointer_none}
                className={
                  activeDotIndex === 4
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
              >
                05
              </h2>
              <h1
                id={styles.pointer_none}
                className={
                  activeDotIndex === 4
                    ? `${styles.active} ${styles.opacity100}`
                    : `${styles.opacity50}`
                }
                onClick={() => handleDotClick(4)}
              >
                ABOUT US
              </h1>
            </div>
          </div>
        </div>
        <div id={styles.dot_btn}>
          <div
            className={`${styles.dot} ${
              activeDotIndex === 0 ? styles.active : ""
            }`}
            onClick={() => handleDotClick(0)}
          ></div>
          <div
            className={`${styles.dot} ${
              activeDotIndex === 1 ? styles.active : ""
            }`}
            onClick={() => handleDotClick(1)}
          ></div>
          <div
            className={`${styles.dot} ${
              activeDotIndex === 2 ? styles.active : ""
            }`}
            onClick={() => handleDotClick(2)}
          ></div>
          <div
            className={`${styles.dot} ${
              activeDotIndex === 3 ? styles.active : ""
            }`}
            onClick={() => handleDotClick(3)}
          ></div>
          <div
            className={`${styles.dot} ${
              activeDotIndex === 4 ? styles.active : ""
            }`}
            onClick={() => handleDotClick(4)}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
