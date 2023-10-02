import dynamic from "next/dynamic";
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
    </>
  );
};

export default page;
