"use client"
import dynamic from "next/dynamic";
const Categories = dynamic(()=>import("../app/Components/Categories"))
const ShopPage = dynamic(()=>import("../app/Components/Shop"))
import Home from "@/app/Pages/home/page";
import About from "./Components/About";


const page = () => {
  return (
    <>
        <Home/>
        <Categories/>
        <ShopPage/>
        <About/>
    </>
  )
}

export default page