import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import Images from "@/app/Components/Images";

const ShopPage = () => {
  const [likes, setLikes] = useState(Array(8).fill(false));

  const handleClick = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };
  return (
    <>
      <div id="shop-page">
        <h1 className="no-select">Shop</h1>
        <div id="shop-page-elements">
          {Images.map((e, index) => {
            const {
              Id,
              ItemName,
              Itemtype,
              ItemSize,
              ItemPrice,
              ItemImageSrc,
            } = e;
            console.log(ItemImageSrc);
            return(
              <div id="shop-elements" key={Id}>
              <FaHeart
                id="heart"
                onClick={() => handleClick(Id)}
                style={{ color: likes[Id] ? "#c01e1e" : "#FFFFF6", zIndex:99 }}
              />
              <div id="image-container">
                <Image
                  src={ItemImageSrc}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <h2>{ItemName}</h2>
            </div>
            )
            
          })}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
