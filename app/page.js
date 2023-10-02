import dynamic from "next/dynamic";
<<<<<<< Updated upstream
// import { Suspense } from "react";
import { RiH1 } from "react-icons/ri";
import Loader from "./Components/Loader";
const Home = dynamic(() => import("@/app/Pages/home/page"),{
  // loading: {<Loader />}
});

const page = () => {
  return (
    <>
        <Home />
=======

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
  return (
    <>
      <div style={{ display: "none" }}>
        <script src="/_next/static/chunks/pages/home/page.js" defer></script>
      </div>
      <Home />
      {/* <ShopPage/> */}
>>>>>>> Stashed changes
    </>
  );
};

export default page;
