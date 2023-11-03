// import Styles from "./style.module.css"

import Image from "next/image";
import GD from "@/app/images/GD.jpg"

const About = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" h-full w-1/2 ml-16 p-5 pl-20 flex flex-col font-sans justify-center items-start">
        <h1 className=" font-extrabold text-3xl text-blue-gray-900">
          Who we are
        </h1>
        <p className=" mb-3 text-gray-500 dark:text-gray-400 w-96 pr-1 mt-5">
          We are Designers,Developer,and testers. We provide best design
          solution to our clients.Working perfectly with our clients.
        </p>
      </div>
      <div className=" bg-blue-gray-500 h-full w-1/2 flex flex-col gap-5 justify-center items-center p-5">
        <div className=" bg-deep-orange-900 w-full rounded-lg h-1/2"></div>
        <div className=" bg-deep-orange-500 w-full overflow-hidden relative rounded-lg h-1/2">
          <Image
            src={GD}
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
