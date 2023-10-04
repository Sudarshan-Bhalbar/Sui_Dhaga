"use client"
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Home = dynamic(() => import("@/app/Pages/home/page"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>
    </div>
  ),
});
const page = () => {
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });
  return (
    <>
      <div style={{ display: "none" }}>
        <script src="/_next/static/chunks/pages/home/page.js" defer></script>
      </div>
      <main className="main" data-scroll-container><Home /></main>
      
    </>
  );
};

export default page;
