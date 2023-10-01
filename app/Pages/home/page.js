"use client";
import Image from "next/image";
import Model from "@/app/images/m.svg";
import { BsArrowRight } from "react-icons/bs";
import dynamic from "next/dynamic";
import Link from "next/link";

const Categories = dynamic(() => import("@/app/Components/Categories"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ShopPage = dynamic(() => import("@/app/Components/Shop"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const About = dynamic(() => import("@/app/Components/About"));

const Home = () => {
  return (
    <>
      <div id="main-landing-page">
        <Image
          src={Model}
          width={500}
          height={300}
          quality={30}
          id="model-image"
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
        <h1 id="main-text-center" className="no-select">
          SUI<span className="no-select">DHAGA</span>
        </h1>
        <div id="main-desc-text" className="no-select">
          <p className="no-select">
            The fashion industry statistics show that the apparel and textile
            sector is the 4th biggest in the world.
          </p>
          <Link href={"/Pages/Shop_Page"}>
            <div id="shop-btn" className="no-select">
              Shop Now
              <BsArrowRight className="right-arrow" />
            </div>
          </Link>
        </div>
        <div id="landing-page-pin-pic"></div>
      </div>
      <Categories />
      <ShopPage />
      <About />
    </>
  );
};

export default Home;
