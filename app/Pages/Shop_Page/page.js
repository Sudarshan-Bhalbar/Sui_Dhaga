"use client";
import { Carousel } from "@material-tailwind/react";
import Styles from "./style.module.css";
import Image from "next/image";
import bgImage1 from "../../images/IMG_7564.JPG";
import bgImage2 from "../../images/IMG_7565.JPG";
import bgImage3 from "../../images/IMG_7566.JPG";
import bgImage4 from "../../images/IMG_7567.JPG";
import bgImage5 from "../../images/IMG_7568.JPG";
const ShopPage = () => {
  return (
    <>
      <div className=" w-screen h-screen pl-16" id={Styles.landingpage}>
        <Carousel
          transition={{ type: "tween", duration: 1.5 }}
          prevArrow={false}
          nextArrow={false}
          autoplay={true}
          loop={true}
          className=""
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-5 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className=" relative w-full h-full bg-gray-900">
            <div id={Styles.top}>
              <Image src={bgImage1.src} fill priority={true} />
              <div id={Styles.workingarea}>
                <div id={Styles.hero}>
                  <div id={Styles.hero_left}>
                    <div className={Styles.elem}>
                      <h1>Browse, <span className=" px-4 py-7 bg-white text-black">Click</span></h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Shop-</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>It's That Easy!</h1>
                    </div>
                    <button id={Styles.button}>Explore Now</button>
                  </div>
                  <div id={Styles.hero_right}></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative w-full h-full bg-gray-900">
            <div id={Styles.top}>
              <Image src={bgImage2.src} fill priority={true} />
              <div id={Styles.workingarea}>
                <div id={Styles.hero}>
                  <div id={Styles.hero_left}>
                    <div className={Styles.elem}>
                      <h1>Discover the</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Ultimate Shopping</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Experience</h1>
                    </div>
                    <button id={Styles.button}>Explore Now</button>
                  </div>
                  <div id={Styles.hero_right}></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative w-full h-full bg-gray-900">
            <div id={Styles.top}>
              <Image src={bgImage3.src} fill priority={true} />
              <div id={Styles.workingarea}>
                <div id={Styles.hero}>
                  <div id={Styles.hero_left}>
                    <div className={Styles.elem}>
                      <h1>Shop the</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Latest Trends</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>and Essentials</h1>
                    </div>
                    <button id={Styles.button}>Explore Now</button>
                  </div>
                  <div id={Styles.hero_right}></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative w-full h-full bg-gray-900">
            <div id={Styles.top}>
              <Image src={bgImage4.src} fill priority={true} />
              <div id={Styles.workingarea}>
                <div id={Styles.hero}>
                  <div id={Styles.hero_left}>
                    <div className={Styles.elem}>
                      <h1>Unleash Your </h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Shopping</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Desires Here</h1>
                    </div>
                    <button id={Styles.button}>Explore Now</button>
                  </div>
                  <div id={Styles.hero_right}></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative w-full h-full bg-gray-900">
            <div id={Styles.top}>
              <Image src={bgImage5.src} fill priority={true} />
              <div id={Styles.workingarea}>
                <div id={Styles.hero}>
                  <div id={Styles.hero_left}>
                    <div className={Styles.elem}>
                      <h1>Get Ready</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>to</h1>
                    </div>
                    <div className={Styles.elem}>
                      <h1>Shop 'n Save!</h1>
                    </div>
                    <button id={Styles.button}>Explore Now</button>
                  </div>
                  <div id={Styles.hero_right}></div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className=" w-screen h-screen pl-16">

      </div>

    </>
  );
};

export default ShopPage;
