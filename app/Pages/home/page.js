"use client";
import Image from "next/image";
import Model from "@/app/images/m.svg";
import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";
import { easeInOut, motion } from "framer-motion";
import AnimatedText from "@/app/Components/AnimatedText";
import Categories from "@/app/Components/Categories";
import ShopPage from "@/app/Components/Shop";
import About from  "@/app/Components/About";


const Home = () => {
  return (
    <>
      <motion.div id="main-landing-page">
        <motion.div
          id="Image-div-hp"
          initial={{ y: 200, opacity: 0.5 }}
          whileInView={{opacity:1,y:0}}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <Image src={Model.src} fill={true} quality={50} priority={true} alt="" />
        </motion.div>
        <motion.div
          id="main-text-center"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{opacity:1,y:0}}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <h1 className="no-select">
            SUI <span className="no-select">DHAGA</span>
          </h1>
        </motion.div>
        <div id="main-desc-text" className="no-select">
          <AnimatedText
            text={
              " The fashion industry statistics show that the apparel and textile sector is the 4th biggest in the world."
            }
          />
          <Link href={"/Pages/Shop_Page"}>
            <motion.div
              id="shop-btn"
              className="no-select"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: easeInOut, delay: 0.5 }}
            >
              Shop Now
              <BsArrowRight className="right-arrow" />
            </motion.div>
          </Link>
        </div>
        <motion.div
          id="landing-page-pin-pic"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
        ></motion.div>
      </motion.div>
      <Categories />
      <ShopPage />
      <About />
    </>
  );
};

export default Home;
