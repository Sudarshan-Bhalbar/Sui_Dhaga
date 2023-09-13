import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";
import Images from "@/app/Components/Images";
import Img1 from "@/app/images/model2.svg"

const ShopPage = () => {
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
      <div id="shop-page">
        <h1 className="no-select">Shop</h1>
        <div id="shop-image-div">
          <div id="Image-div">
            <Image  src={Img1} objectPosition="center" objectFit="cover" />
          </div>
          <div id="shop-text" >
            <p className="no-select">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae delectus iusto deleniti!</p>
            <div id="shop-Btn" className="no-select">Shop Now</div>
          </div>
          <div id="shop-highlight-text" >
            <p className="no-select">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, consequuntur iure. Quo, accusamus?</p>
            
          </div>
        </div>
        <h1 className="no-select">New Arrivals</h1>
        <div id="shop-page-elements">
          {Images.map((e, index) => {
            const {
              Id,
              ItemName,
              Itemtype,
              ItemSize,
              ItemPrice,
            } = e;
            return (
              <div id="shop-elements" key={index}>
                <FaHeart
                  id="heart"
                  onClick={() => handleClick(index)}
                  style={{
                    color: likes[index] ? "#ff00008e" : "#a2a2d2",
                    zIndex: 99,
                  }}
                />
                  <div id="image-container"
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={() => handleMouseOut(index)}
                  >
                    <Image
                      src={ItemImageSrc[index]}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div id="cart-btn">
                    <CgShoppingCart id="cart-icon"/>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};


export default ShopPage;
