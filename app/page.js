// "use client"
// import { useEffect } from "react";
import Home from "./Pages/home/page";



const page = () => {
  // useEffect(() => {
  //   let scroll;
  //   import("locomotive-scroll").then((locomotiveModule) => {
  //     scroll = new locomotiveModule.default({
  //       el: document.querySelector("[data-scroll-container]"),
  //       smooth: true,
  //       smoothMobile: false,
  //       resetNativeScroll: true,
  //     });
  //   });

  //   // `useEffect`'s cleanup phase
  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // });
  return (
    <>
      {/* <div style={{ display: "none" }}>
        <script src="/_next/static/chunks/pages/home/page.js" defer data-scroll-container></script>
      </div> */}
      <main className="main" ><Home /></main>
      
    </>
  );
};

export default page;
