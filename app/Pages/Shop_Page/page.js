"use client";
import { Carousel } from "@material-tailwind/react";
import Styles from "./style.module.css";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import InfoSider from "@/app/Components/InfoSider";
import bgImage1 from "../../images/IMG_7564.JPG";
import bgImage2 from "../../images/IMG_7565.JPG";
import bgImage3 from "../../images/IMG_7566.JPG";
import bgImage4 from "../../images/IMG_7567.JPG";
import bgImage5 from "../../images/IMG_7568.JPG";
import Images from "@/app/Components/Images";
import { AnimatePresence } from "framer-motion";
import { easeInOut, motion, stagger } from "framer-motion";
import { useState } from "react";

const ArrivalsContainerVariant = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const item = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};
const ShopPage = () => {
  const [bgColors, setBgColors] = useState({
    tShirt: "bg-white",
    dresses: "",
    shrugs: "",
    jackets: "",
  });
  const [likes, setLikes] = useState(Array(8).fill(false));
  const [ItemImageSrc, setItemImageSrc] = useState(
    Images.map((e) => e.ItemImageSrc[0])
  );
  const [isSiderOpen, setIsSiderOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const Clicked = (key) => {
    setBgColors((prevColors) => ({
      tShirt: "",
      dresses: "",
      shrugs: "",
      jackets: "",
      [key]: "bg-white",
    }));
  };

  const toggleSider = () => {
    if (isSiderOpen) {
      // Sidebar is open, so enable scrolling
      document.body.style.overflow = "auto";
    } else {
      // Sidebar is closed, so disable scrolling
      document.body.style.overflow = "hidden";
    }
    setIsSiderOpen(!isSiderOpen);
  };

  const handleMouseOver = (index) => {
    const newItemImageSrc = [...ItemImageSrc];
    newItemImageSrc[index] = Images[index].ItemImageSrc[1];
    setItemImageSrc(newItemImageSrc);
  };

  const handleMouseOut = (index) => {
    const newItemImageSrc = [...ItemImageSrc];
    newItemImageSrc[index] = Images[index].ItemImageSrc[0];
    setItemImageSrc(newItemImageSrc);
  };

  const handleClick = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  const handleElementClick = (index) => {
    setSelectedItem(Images[index]);
    // console.log(Images[index]);
    toggleSider();
  };

  return (
    <>
      <div className=" w-screen h-screen pl-16" id={Styles.landingpage}>
        <Carousel
          transition={{ type: "tween", duration: 1.5 }}
          prevArrow={false}
          nextArrow={false}
          autoplay={true}
          loop={true}
          className=""
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-5 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className=" relative w-full h-full bg-gray-900">
            <div id={Styles.top}>
              <Image src={bgImage1.src} fill priority={true} />
              <div id={Styles.workingarea}>
                <div id={Styles.hero}>
                  <div id={Styles.hero_left}>
                    <div className={Styles.elem}>
                      <h1>
                        Browse,{" "}
                        <span className=" px-4 py-7 bg-white text-black">
                          Click
                        </span>
                      </h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Shop-</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>It's That Easy!</h1>
                    </div>
                    <button id={Styles.button}>Explore Now</button>
                  </div>
                  <div id={Styles.hero_right}></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative w-full h-full bg-gray-900">
            <div id={Styles.top}>
              <Image src={bgImage2.src} fill priority={true} />
              <div id={Styles.workingarea}>
                <div id={Styles.hero}>
                  <div id={Styles.hero_left}>
                    <div className={Styles.elem}>
                      <h1>Discover the</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Ultimate Shopping</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Experience</h1>
                    </div>
                    <button id={Styles.button}>Explore Now</button>
                  </div>
                  <div id={Styles.hero_right}></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative w-full h-full bg-gray-900">
            <div id={Styles.top}>
              <Image src={bgImage3.src} fill priority={true} />
              <div id={Styles.workingarea}>
                <div id={Styles.hero}>
                  <div id={Styles.hero_left}>
                    <div className={Styles.elem}>
                      <h1>Shop the</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Latest Trends</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>and Essentials</h1>
                    </div>
                    <button id={Styles.button}>Explore Now</button>
                  </div>
                  <div id={Styles.hero_right}></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative w-full h-full bg-gray-900">
            <div id={Styles.top}>
              <Image src={bgImage4.src} fill priority={true} />
              <div id={Styles.workingarea}>
                <div id={Styles.hero}>
                  <div id={Styles.hero_left}>
                    <div className={Styles.elem}>
                      <h1>Unleash Your </h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Shopping</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Desires Here</h1>
                    </div>
                    <button id={Styles.button}>Explore Now</button>
                  </div>
                  <div id={Styles.hero_right}></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative w-full h-full bg-gray-900">
            <div id={Styles.top}>
              <Image src={bgImage5.src} fill priority={true} />
              <div id={Styles.workingarea}>
                <div id={Styles.hero}>
                  <div id={Styles.hero_left}>
                    <div className={Styles.elem}>
                      <h1>Get Ready</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>to</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Shop 'n Save!</h1>
                    </div>
                    <button id={Styles.button}>Explore Now</button>
                  </div>
                  <div id={Styles.hero_right}></div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className=" w-screen  pl-24 pr-8 py-8 flex flex-col gap-48">
        <div id={Styles.women_section} className="w-full h-full flex">
          <div id="div" className="w-1/5 h-full">
            <div
              id="div"
              className={`select-none hover:cursor-pointer w-full h-16 flex px-5 items-center bg-indigo-200`}
            >
              Women Fashion
            </div>
            <div
              id="div"
              className={`select-none hover:cursor-pointer w-full h-16 flex px-5 items-center ${bgColors.tShirt}`}
              onClick={() => Clicked("tShirt")}
            >
              Women T-Shirt
            </div>
            <div
              id="div"
              className={`select-none hover:cursor-pointer w-full h-16 flex px-5 items-center ${bgColors.dresses}`}
              onClick={() => Clicked("dresses")}
            >
              Dresses
            </div>
            <div
              id="div"
              className={`select-none hover:cursor-pointer w-full h-16 flex px-5 items-center ${bgColors.shrugs}`}
              onClick={() => Clicked("shrugs")}
            >
              Shrugs
            </div>
            <div
              id="div"
              className={`select-none hover:cursor-pointer w-full h-16 flex px-5 items-center ${bgColors.jackets}`}
              onClick={() => Clicked("jackets")}
            >
              Jackets
            </div>
          </div>
          <div id="div" className="w-full h-full px-10 py-0   overflow-y-scroll overflow-x-hidden ">
            <div class="grid grid-cols-4 gap-10">
              {/* <!-- Card 1 --> */}
              {Images.map((e, index) => {
            return (
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="visible"
                transition={{delay:0.1*index,duration:0.5,ease:easeInOut}}
                id={Styles.shop_elements}
                key={index}
                class="bg-white h-64 rounded-lg shadow-lg"
                onClick={() => handleElementClick(index)}
              >
                <FaHeart
                  id={Styles.heart}
                  onClick={() => handleClick(index)}
                  style={{
                    color: likes[index] ? "#ff00008e" : "#a2a2d2",
                  }}
                />
                <motion.div
                  id={Styles.image_container}
                  onHoverStart={() => handleMouseOver(index)}
                  onHoverEnd={() => handleMouseOut(index)}
                >
                  <Image
                    src={ItemImageSrc[index]}
                    alt="item_img"
                    layout="fill"
                    className="image-scroller"
                  />
                </motion.div>
              </motion.div>
            );
          })}
            </div>
          </div>
        </div>
        <div id={Styles.women_section} className="w-full h-full flex">
          <div id="div" className="w-1/5 h-full">
            <div
              id="div"
              className={`select-none hover:cursor-pointer w-full h-16 flex px-5 items-center bg-indigo-200`}
            >
              Women Fashion
            </div>
            <div
              id="div"
              className={`select-none hover:cursor-pointer w-full h-16 flex px-5 items-center ${bgColors.tShirt}`}
              onClick={() => Clicked("tShirt")}
            >
              Women T-Shirt
            </div>
            <div
              id="div"
              className={`select-none hover:cursor-pointer w-full h-16 flex px-5 items-center ${bgColors.dresses}`}
              onClick={() => Clicked("dresses")}
            >
              Dresses
            </div>
            <div
              id="div"
              className={`select-none hover:cursor-pointer w-full h-16 flex px-5 items-center ${bgColors.shrugs}`}
              onClick={() => Clicked("shrugs")}
            >
              Shrugs
            </div>
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="visible"
              transition={{delay:0.1,duration:0.5,ease:easeInOut}}
              id="div"
              className={`select-none hover:cursor-pointer w-full h-16 flex px-5 items-center ${bgColors.jackets}`}
              onClick={() => Clicked("jackets")}
            >
              Jackets
            </motion.div>
          </div>
          <div id="div" className="w-full h-full px-10 py-0   overflow-y-scroll overflow-x-hidden ">
            <div class="grid grid-cols-4 gap-10">
              {/* <!-- Card 1 --> */}
              {Images.map((e, index) => {
            return (
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="visible"
                transition={{delay:0.1*index,duration:0.5,ease:easeInOut}}
                id={Styles.shop_elements}
                key={index}
                class="bg-white h-64 rounded-lg shadow-lg"
                onClick={() => handleElementClick(index)}
              >
                <FaHeart
                  id={Styles.heart}
                  onClick={() => handleClick(index)}
                  style={{
                    color: likes[index] ? "#ff00008e" : "#a2a2d2",
                  }}
                />
                <motion.div
                  id={Styles.image_container}
                  onHoverStart={() => handleMouseOver(index)}
                  onHoverEnd={() => handleMouseOut(index)}
                >
                  <Image
                    src={ItemImageSrc[index]}
                    alt="item_img"
                    layout="fill"
                    className="image-scroller"
                  />
                </motion.div>
              </motion.div>
            );
          })}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSiderOpen && (
          <motion.div
            className="sidebar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "transparent" }}
            transition={{
              duration: 0.5,
              ease: easeInOut,
              delayChildren: stagger(0.5),
            }}
          >
            <InfoSider toggleSider={toggleSider} selectedItem={selectedItem} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShopPage;
