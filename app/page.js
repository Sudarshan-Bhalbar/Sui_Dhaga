"use client"
import dynamic from "next/dynamic";
const Categories = dynamic(()=>import("../app/Components/Categories"))
const ShopPage = dynamic(()=>import("../app/Components/Shop"))
const About = dynamic(()=>import("../app/Components/About"))
import Home from "@/app/Pages/home/page";


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