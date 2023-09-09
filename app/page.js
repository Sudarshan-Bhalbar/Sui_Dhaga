"use client"
import dynamic from "next/dynamic";
const Categories = dynamic(()=>import("./Pages/Categories/page"))
const ShopPage = dynamic(()=>import("./Pages/Shop_Page/page"))
import Home from "@/app/Pages/home/page";
// import ShopPage from "./Pages/Shop_Page/page";
// import Categories from "./Pages/Categories/page";
const page = () => {
  return (
    <>
        <Home/>
        <Categories/>
        <ShopPage/>
    </>
  )
}

export default page