import Image from "next/image";
import Model from "@/app/images/m.svg";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div id="main-landing-page">
      <Image src={Model} width={500} height={300} quality={30} id="model-image" objectFit="cover" objectPosition="center" alt="" />
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
    </>
  );
};

export default Home;
