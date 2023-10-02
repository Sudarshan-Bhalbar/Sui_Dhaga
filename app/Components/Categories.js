"use client";
import model from "@/app/images/model4.png";
import Image from "next/image";
import Styles from "@/app/Styles/categories.module.css";
<<<<<<< Updated upstream
import Link from "next/link";
import { PiArrowCircleRightLight } from "react-icons/pi";
=======
import { easeIn, easeInOut, motion } from "framer-motion";

>>>>>>> Stashed changes

const Categories = () => {
  return (
    <>
      <div id={Styles.categories_page}>
<<<<<<< Updated upstream
        <h1 className={Styles.no_select}>Categories</h1>
        <Image src={model} objectFit="cover" objectPosition="center" alt="" />
        <Link href={"/Pages/Shop_Page"}>
          <div id={Styles.categories_page_pin_img} className={Styles.img_1}>
            <div id={Styles.toplayer}></div>
            <div id={Styles.text_link}>
              <p className={Styles.no_select}>Lower</p>
              <PiArrowCircleRightLight id={Styles.icons} />
            </div>
          </div>
        </Link>
        <Link href={"/Pages/Shop_Page"}>
          <div id={Styles.categories_page_pin_img} className={Styles.img_2}>
            <div id={Styles.toplayer}></div>
            <div id={Styles.text_link}>
              <p className={Styles.no_select}>Shoes</p>
              <PiArrowCircleRightLight id={Styles.icons} />
            </div>
          </div>
        </Link>
        <Link href={"/Pages/Shop_Page"}>
          <div id={Styles.categories_page_pin_img} className={Styles.img_3}>
            <div id={Styles.toplayer}></div>
            <div id={Styles.text_link}>
              <p className={Styles.no_select}>Upper</p>
              <PiArrowCircleRightLight id={Styles.icons} />
            </div>
          </div>
        </Link>
        <Link href={"/Pages/Shop_Page"}>
          <div id={Styles.categories_page_pin_img} className={Styles.img_4}>
            <div id={Styles.toplayer}></div>
            <div id={Styles.text_link}>
              <p className={Styles.no_select}>Accessories</p>
              <PiArrowCircleRightLight id={Styles.icons} />
            </div>
          </div>
        </Link>
        <div id={Styles.categories_text_btn_div}>
          <p id={Styles.text} className={Styles.no_select}>
            The fashion industry statistics show that the apparel and textile
            sector is the 4th biggest in the world.
          </p>
          <Link href={"/Pages/Shop_Page"}>
            <div id={Styles.categories_shop_btn} className={Styles.no_select}>
              Shop Now
            </div>
          </Link>
        </div>
=======
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
        <Image src={model} layout="fill" alt=""/>
        </motion.div>
        <motion.div id={Styles.categories_page_pin_img} className={Styles.img_1}
          initial={{x:-100 , opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.8 , ease:easeIn}}
        ></motion.div>
        <motion.div id={Styles.categories_page_pin_img} className={Styles.img_2}
          initial={{x:100 , opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.8 , ease:easeIn}}
        ></motion.div>
        <motion.div id={Styles.categories_page_pin_img} className={Styles.img_3}
          initial={{x:-100 , opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.8 , ease:easeIn}}
        ></motion.div>
        <motion.div id={Styles.categories_page_pin_img} className={Styles.img_4}
          initial={{x:100 , opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.8 , ease:easeIn}}
        ></motion.div>
        <motion.div id={Styles.categories_text_btn_div}>
          <p id={Styles.text} className={Styles.no_select}>The fashion industry statistics show that the apparel and textile sector is the 4th biggest in the world.</p>
        <div id={Styles.categories_shop_btn} className={Styles.no_select}>Shop Now</div>
        </motion.div>
>>>>>>> Stashed changes
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
