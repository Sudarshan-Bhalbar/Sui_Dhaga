import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const ShopPage = () => {
  const [likes, setLikes] = useState(Array(8).fill(false));

  const handleClick = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  const Text = [
    "Women's Knee Length Casual Dress",
    "Women's Synthetic a-line Knee-Long Dress",
    "Women Casual Dress",
    "Women Dress",
    "Women's Blue Cotton Woven Midi Dress",
    "Women's Sky Blue Cotton Floral Print Flared Western Dress",
    "Women Casual Dress",
    "Women's Synthetic a-line Knee-Long Dress",
  ];

  const Prices = [
    "$12.99",
    "$2.99",
    "$5.99",
    "$9.99",
    "$13.99",
    "$15.99",
    "$3.99",
    "$6.99",
  ]

  const images = [
    "https://images.unsplash.com/photo-1610729864209-5c916862b6c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80",
    "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1619785292559-a15caa28bde6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1424&q=80",
    "https://images.unsplash.com/photo-1629374029669-aab2f060553b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1438&q=80",
  ];

  return (
    <>
      <div id="shop-page">
        <h1 className="no-select">Shop</h1>
        <div id="shop-page-elements">
          {[...Array(8)].map((_, index) => (
            <div id="shop-elements" key={index}>
              <FaHeart
                id="heart"
                onClick={() => handleClick(index)}
                style={{ color: likes[index] ? "#c01e1e" : "#ADADAD" }}
              />
              <div id="image-container">
                <Image
                  src={images[index]}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              {/* <h2>Squire Neck Cami for Women</h2> */}
              <h2>{Text[index]}</h2>
              <p>{Prices[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
