"use client"
import model from "@/app/images/model4.png";
import Image from "next/image";
import Styles from "@/app/Styles/categories.module.css";


const Categories = () => {
  return (
    <>
      <div id={Styles.categories_page}>
        <h1 className={Styles.no_select}>Categories</h1>
        <Image src={model} objectFit="cover" objectPosition="center" alt=""/>
        <div id={Styles.categories_page_pin_img} className={Styles.img_1}></div>
        <div id={Styles.categories_page_pin_img} className={Styles.img_2}></div>
        <div id={Styles.categories_page_pin_img} className={Styles.img_3}></div>
        <div id={Styles.categories_page_pin_img} className={Styles.img_4}></div>
        <div id={Styles.categories_text_btn_div}>
          <p id={Styles.text} className={Styles.no_select}>The fashion industry statistics show that the apparel and textile sector is the 4th biggest in the world.</p>
        <div id={Styles.categories_shop_btn} className={Styles.no_select}>Shop Now</div>
        </div>
        <div id={Styles.categories_text_r_div}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi commodi ipsam beatae quod voluptate aliquam!</p>
        </div> 
      </div>
    </>
  );
};

export default Categories;
