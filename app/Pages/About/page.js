// import Styles from "./style.module.css"

import Image from "next/image";
import GD from "@/app/images/GD.jpg";
import person1 from "@/app/images/vinit.jpg";
import person2 from "@/app/images/Sudarshan.jpeg";

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
      <div className=" h-full w-1/2 flex flex-col gap-5 justify-center items-center py-5  pr-20">
        <div className="w-full flex gap-10 rounded-md h-1/2 overflow-hidden">
          <div className="flex w-1/2 h-full overflow-hidden rounded-md relative">
            <div className="absolute flex justify-start items-start p-3 font-sans flex-col w-42 h-20 bg-blue-gray-50 z-10 opacity-75 bottom-0">
              <p className=" text-gray-900">Vinit Makvana</p>
              <p className="mt-2 text-gray-600">Developer, Manager</p>
            </div>
            <Image src={person1} fill={true} />
          </div>
          <div className="flex w-1/2 h-full bg-blue-gray-900 rounded-md relative">
            <div className="absolute flex justify-start items-start p-3 font-sans flex-col w-50 h-20 bg-blue-gray-50 z-10 opacity-90 bottom-0">
              <p className=" text-gray-900">Sudarshan Bhalbar</p>
              <p className="mt-2 text-gray-600">Developer</p>
            </div>
            <Image src={person2} fill={true} />
          </div>
        </div>
        <div className=" bg-deep-orange-500 w-full overflow-hidden relative rounded-md h-2/5">
          <div className="absolute flex justify-start items-start p-3 font-sans flex-col w-60 h-20 bg-blue-gray-50 z-10 opacity-75 bottom-0">
            <p className="text-gray-900">Kushal Pagare, Abhay Vishe</p>
            <p className=" mt-2 text-gray-600">Designer's</p>
          </div>
          <Image src={GD} fill={true} />
        </div>
      </div>
    </div>
  );
};

export default About;
