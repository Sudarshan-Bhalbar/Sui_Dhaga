"use client"
import model from "@/app/images/model4.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div id="categories-page">
        <h1 className="no-select">Categories</h1>
        <Image src={model} width={1000}/>
        <div id="categories-page-pin-img" className="img-1"></div>
        <div id="categories-page-pin-img" className="img-2"></div>
        <div id="categories-page-pin-img" className="img-3"></div>
        <div id="categories-page-pin-img" className="img-4"></div>
        <div id="categories-text-btn-div">
          <p id="text" className="no-select">The fashion industry statistics show that the apparel and textile sector is the 4th biggest in the world.</p>
        <div id="categories-shop-btn" className="no-select">Shop Now</div>
        </div>
        <div id="categories-text-r-div">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi commodi ipsam beatae quod voluptate aliquam!</p>
        </div>
      </div>
    </>
  );
};

export default page;
