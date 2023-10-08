"use client";
import Styles from "@/app/Styles/infosider.module.css";
import { easeInOut, motion, stagger } from "framer-motion";
import { MdOutlineArrowBack } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

const container = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const InfoSider = ({ toggleSider, selectedItem }) => {
  // console.log(selectedItem.ItemDesc);
  const [selectedSize, setSelectedSize] = useState(Array(8).fill(false));

  const handleClick = (index) => {
    const sizes = [...selectedItem.ItemSize];
    sizes[index] = !sizes[index];
    setSelectedSize(sizes.map((size, i) => (i === index ? !size : false)));
  };

  return (
    <div className={Styles.infosider_main_container}>
      <motion.div
        className={Styles.infosider_contentShower}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          id={Styles.back_btn}
          onClick={toggleSider}
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={Styles.no_select}
        >
          <MdOutlineArrowBack id={Styles.back} />
        </motion.div>
        <div id={Styles.content_div}>
          <motion.div id={Styles.Imagediv} variants={item}>
            <Image src={selectedItem.ItemImageSrc[1]} alt="img" layout="fill" />
          </motion.div>
          <motion.div id={Styles.Item_Name} variants={item}>
            <motion.h1 variants={item} className={Styles.no_select}>
              {selectedItem.ItemName}
            </motion.h1>
            {selectedItem.ItemDesc === "undefined" ? (
              ""
            ) : (
              <motion.h3 variants={item} className={Styles.no_select}>
                {selectedItem.ItemDesc}
              </motion.h3>
            )}
            <motion.h4 variants={item} className={Styles.no_select}>
              {selectedItem.ItemPrice}
            </motion.h4>
            <motion.div id={Styles.Sizes}>
              {selectedItem.ItemSize.map((e, index) => {
                return (
                  <motion.div
                    className={Styles.no_select}
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id={Styles.Item_Size}
                    onClick={() => handleClick(index)}
                    style={{
                      backgroundColor: selectedSize[index]
                        ? "#a2a2d2"
                        : "white",
                    }}
                  >
                    {e}
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div
              className={Styles.no_select}
              id={Styles.add_cart_btn}
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ADD TO CART
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default InfoSider;
