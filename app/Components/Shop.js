import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";
import Images from "@/app/Components/Images";
import Img1 from "@/app/images/model2.svg";
import Styles from "@/app/Styles/shoppage.module.css";

const Shop = () => {
  const [likes, setLikes] = useState(Array(8).fill(false));
  const [ItemImageSrc, setItemImageSrc] = useState(Images.map((e) => e.ItemImageSrc[0]));

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
  

  return (
    <>
      <div id={Styles.shop_page}>
        <h1 className={Styles.no_select}>Shop</h1>
        <div id={Styles.shop_image_div}>
          <div id={Styles.Image_div}>
            <Image  src={Img1} layout="fill" alt="img" />
          </div>
          <div id={Styles.shop_text} >
            <p className={Styles.no_select}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae delectus iusto deleniti!</p>
            <div id={Styles.shop_Btn} className={Styles.no_select}>Shop Now</div>
          </div>
          <div id={Styles.shop_highlight_text} >
            <p className={Styles.no_select}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, consequuntur iure. Quo, accusamus?</p>
            
          </div>
        </div>
        <h1 className={Styles.no_select}>New Arrivals</h1>
        <div id={Styles.shop_page_elements}>
          {Images.map((e, index) => {
           
            return (
              <div id={Styles.shop_elements} key={index}>
                <FaHeart
                  id={Styles.heart}
                  onClick={() => handleClick(index)}
                  style={{
                    color: likes[index] ? "#ff00008e" : "#a2a2d2",
                  }}
                />
                  <div id={Styles.image_container}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={() => handleMouseOut(index)}
                  >
                    <Image
                      src={ItemImageSrc[index]}
                      alt="item_img"
                      layout="fill"
                    />
                  </div>
                  <div id={Styles.cart_btn}>
                    <CgShoppingCart id={Styles.cart_icon}/>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};


export default Shop;
