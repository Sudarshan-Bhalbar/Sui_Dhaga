import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import InfoSider from "./InfoSider";
import { useState } from "react";
import Images from "@/app/Components/Images";
import Img1 from "@/app/images/model2.svg";
import Styles from "@/app/Styles/shoppage.module.css";
import { AnimatePresence } from "framer-motion";
import { easeInOut, motion, stagger } from "framer-motion";
import Link from "next/link";

const Shop = () => {
  const [likes, setLikes] = useState(Array(8).fill(false));
  const [ItemImageSrc, setItemImageSrc] = useState(
    Images.map((e) => e.ItemImageSrc[0])
  );
  const [isSiderOpen, setIsSiderOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
    console.log(Images[index]);
    toggleSider();
  };

  return (
    <>
      <motion.div id={Styles.shop_page}>
        <motion.h1 className={Styles.no_select}
          initial={{y:100,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:1,ease:easeInOut}}
        >Shop</motion.h1>
        <div id={Styles.shop_image_div}>
          <motion.div id={Styles.Image_div}
            initial={{y:200, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:1,ease:easeInOut}}
          >
            <Image src={Img1} layout="fill" alt="img" />
          </motion.div>
          <div id={Styles.shop_text}>
            <p className={Styles.no_select}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              molestiae delectus iusto deleniti!
            </p>
            <Link href={"/Pages/Shop_Page"}>
              <div id={Styles.shop_Btn} className={Styles.no_select}>
                Shop Now
              </div>
            </Link>
          </div>
          <div id={Styles.shop_highlight_text}>
            <p className={Styles.no_select}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              consequuntur iure. Quo, accusamus?
            </p>
          </div>
        </div>
        <h1 className={Styles.no_select}>New Arrivals</h1>
        <div id={Styles.shop_page_elements}>
          {Images.map((e, index) => {
            return (
              <div
                id={Styles.shop_elements}
                key={index}
                onClick={() => handleElementClick(index)}
              >
                <FaHeart
                  id={Styles.heart}
                  onClick={() => handleClick(index)}
                  style={{
                    color: likes[index] ? "#ff00008e" : "#a2a2d2",
                  }}
                />
                <div
                  id={Styles.image_container}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={() => handleMouseOut(index)}
                >
                  <Image
                    src={ItemImageSrc[index]}
                    alt="item_img"
                    layout="fill"
                  />
                </div>
                {/* <div id={Styles.cart_btn}>
                    <CgShoppingCart id={Styles.cart_icon}/>
                  </div> */}
              </div>
            );
          })}
        </div>
      </motion.div>
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

export default Shop;
