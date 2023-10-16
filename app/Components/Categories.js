"use client";
import model from "@/app/images/model4.png";
import Image from "next/image";
import Styles from "@/app/Styles/categories.module.css";
import Link from "next/link";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { easeIn, easeInOut, motion } from "framer-motion";

 
const Categories = () => {
  return (
    <>
      <div id={Styles.categories_page}>
        <motion.h1 className={Styles.no_select}
          initial={{y:200 , opacity:0.5}}
          whileInView={{y:0, opacity:1}}
          transition={{ease:easeInOut, duration:0.7}}
        >Categories</motion.h1>
        <motion.div className={Styles.Img_div} 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.4 , ease:easeInOut}}
        >
        <Image src={model.src} fill={true} quality={50} priority={true} alt="img"/>
        </motion.div>
        <Link href={"/Pages/Shop_Page"}>
        <motion.div id={Styles.categories_page_pin_img} className={Styles.img_1}
          initial={{x:-100 , opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.8 , ease:easeIn}}
        ></motion.div>
        </Link>
        <Link href={"/Pages/Shop_Page"}>
        <motion.div id={Styles.categories_page_pin_img} className={Styles.img_2}
          initial={{x:100 , opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.8 , ease:easeIn}}
        ></motion.div>
        </Link>
        <Link href={"/Pages/Shop_Page"}>
        <motion.div id={Styles.categories_page_pin_img} className={Styles.img_3}
          initial={{x:-100 , opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.8 , ease:easeIn}}
        ></motion.div>
        </Link>
        <Link href={"/Pages/Shop_Page"}>
        <motion.div id={Styles.categories_page_pin_img} className={Styles.img_4}
          initial={{x:100 , opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.8 , ease:easeIn}}
        ></motion.div>
        </Link>
        <motion.div id={Styles.categories_text_btn_div}>
          <p id={Styles.text} className={Styles.no_select}>The fashion industry statistics show that the apparel and textile sector is the 4th biggest in the world.</p>
        <div id={Styles.categories_shop_btn} className={Styles.no_select}>Shop Now</div>
        </motion.div>
        <div id={Styles.categories_text_r_div}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            commodi ipsam beatae quod voluptate aliquam!
          </p>
        </div>
      </div>
    </>
  );
};

export default Categories;
