"use client"
import { useState } from "react";
import Styles from "./style.module.css";
import Navigator from "@/app/Components/Navigator";

const ShopPage = () => {
  const [value , setValue] = useState(0);
  function increment() {
    setValue(value + 1);
    return(
      <Navigator value={value}/>
    )
  }
  return (
    <div id={Styles.shop_page}>
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300  hover:bg-gray-100  focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={increment}
      >
        Increment {value}
      </button>
    </div>
  );
};

export default ShopPage;
