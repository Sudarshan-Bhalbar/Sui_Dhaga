"use client";
import Image from "next/image";
import Model from "@/app/images/m.svg";
import { BsArrowRight } from "react-icons/bs";
import dynamic from "next/dynamic";
<<<<<<< Updated upstream

import Link from "next/link";
=======
import { easeInOut, motion } from "framer-motion";
import AnimatedText from "@/app/Components/AnimatedText";
>>>>>>> Stashed changes
const Categories = dynamic(() => import("@/app/Components/Categories"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ShopPage = dynamic(() => import("@/app/Components/Shop"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const About = dynamic(() => import("@/app/Components/About"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Home = () => {
  return (
    <>
      <div id="main-landing-page">
        <motion.div
          id="Image-div-hp"
          initial={{ y: 200, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <Image src={Model} layout="fill" alt="" />
        </motion.div>
        <motion.div id="main-text-center" 
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: easeInOut }}
        >
          <h1 className="no-select">
            SUI <span className="no-select">DHAGA</span>
          </h1>
        </motion.div>
        <div id="main-desc-text" className="no-select">
<<<<<<< Updated upstream
          <p className="no-select">
            The fashion industry statistics show that the apparel and textile
            sector is the 4th biggest in the world.
          </p>
          <Link href={"/Pages/Shop_Page"}>
            <div id="shop-btn" className="no-select">
              Shop Now
              <BsArrowRight className="right-arrow" />
            </div>
          </Link>
=======
          <AnimatedText
            text={
              " The fashion industry statistics show that the apparel and textile sector is the 4th biggest in the world."
            }
          />

          <motion.div
            id="shop-btn"
            className="no-select"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: easeInOut ,delay:0.5}}
          >
            Shop Now <BsArrowRight className="right-arrow" />
          </motion.div>
>>>>>>> Stashed changes
        </div>
        <motion.div id="landing-page-pin-pic" 
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
        ></motion.div>
      </div>
      <Categories />
      <ShopPage />
      <About />
    </>
  );
};

export default Home;
