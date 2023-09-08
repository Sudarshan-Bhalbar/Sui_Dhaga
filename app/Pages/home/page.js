import Image from "next/image";
import Model from "@/app/images/m.svg";
import { BsArrowRight } from "react-icons/bs";
import Categories from "@/app/Pages/Categories/page"

const Home = () => {
  return (
    <>
      <div id="main-landing-page">
        <Image src={Model} id="model-image" width={490} />
        <h1 id="main-text-center" className="no-select">
        SUI<span className="no-select">DHAGA</span>
        </h1>
        <div id="main-desc-text" className="no-select">
            <p className="no-select">The fashion industry statistics show that the apparel and textile sector is the 4th biggest in the world.</p>
            <div id="shop-btn" className="no-select">Shop Now <BsArrowRight className="right-arrow"/></div>
        </div>
        <div id="landing-page-pin-pic">
        </div>
      </div>
      <Categories/>
    </>
  );
};

export default Home;
