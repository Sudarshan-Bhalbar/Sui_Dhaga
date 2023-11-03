"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative h-60 bg-palette pt-8 ml-16 pb-6">
        <div className="container h-full mx-auto px-4 flex justify-between flex-col">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-extrabold text-white">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-800">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              {/* <div className="mt-6 lg:mb-0 mb-6">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </button>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faDribbble} />
              </button>
              <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </div> */}
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blue-gray-900 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blue-gray-100 hover:text-blue-gray-800 font-semibold block pb-2 text-sm"
                        href={"/Pages/About"}
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <hr className="my-10 border-blueGray-300" /> */}
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold">
                Copyright © 2023
                <span className=" font-sans text-lg ml-2 text-gray-100">SUI DHAGA</span>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
