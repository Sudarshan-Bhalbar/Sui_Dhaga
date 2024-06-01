"use client";
import S from "../Styles/navbar.module.css";
import React, { useEffect, useState } from "react";
import { easeIn, motion } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import Image from "next/image";
import logo from "../images/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigator = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight , setWindowHeight] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    if (pathname === "/") {
      window.addEventListener("scroll", () => {
        return setScrollPosition(window.scrollY);
      });
    }
  }, [])
  
  

  return (
    <motion.div
      className="fixed w-16 h-full z-50"
      id={S.sider}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: easeIn }}
      style={{
        backgroundColor: `${
          scrollPosition > windowHeight
            ? "rgba(95, 96, 185, 0.52)"
            : "rgba(255, 255, 255, 0.75)"
        }`,
      }}
    >
      <div
        id={S.links}
        className="flex flex-col w-full h-full justify-center hover:items-start items-center px-1"
      >
        <div
          className="flex justify-between gap-5 cursor-default items-center w-full h-1/6"
          id={S.wrapper}
        >
          <div
            id={S.nav_links_logo}
            className="flex justify-center items-center  "
            style={{
              color: `${
                scrollPosition > windowHeight
                  ? "rgba(255, 255, 255, 0.75)"
                  : "rgba(95, 96, 185, 0.52)"
              }`,
            }}
          >
            <Image src={logo} layout="fill" alt="logo" />
          </div>
          <div
            id={S.display}
            className=" w-3/4 h-full flex justify-start items-center"
          >
            <h1 id={S.font}>Fashion Wear's</h1>
          </div>
        </div>

        <div
          className="flex flex-col w-full h-1/2 justify-around items-center"
          id={S.wrapper}
        >
          <div
            id={S.nav_links_icon}
            className=" flex justify-center items-center  w-full "
            style={{
              color: `${
                scrollPosition > windowHeight
                  ? "rgba(255, 255, 255, 0.75)"
                  : "rgba(95, 96, 185, 0.52)"
              }`,
            }}
          >
            <div className=" flex justify-center items-center" id={S.btn}>
              <Link href={"/"}>
                <HiHome
                  style={{
                    fontSize: "2rem",
                    color: `${pathname === "/" ? "#E95D5A" : " "}`,
                  }}
                />
              </Link>
            </div>
            <div
              id={S.display}
              className=" flex justify-start items-center s_nav w-3/4"
            >
              <Link href={"/"}>
                <h1 style={{ color: `${pathname === "/" ? "#E95D5A" : " "}` }}>
                  Home
                </h1>
              </Link>
            </div>
          </div>
          <div
            id={S.nav_links_icon}
            className=" flex justify-center items-center  "
            style={{
              color: `${
                scrollPosition > windowHeight
                  ? "rgba(255, 255, 255, 0.75)"
                  : "rgba(95, 96, 185, 0.52)"
              }`,
            }}
          >
            <div
              className=" relative flex justify-center items-center"
              id={S.btn}
            >
              <Link href={"/Pages/Shop_Page"}>
                <GiShoppingBag
                  style={{
                    fontSize: "2rem",
                    color: `${
                      pathname === "/Pages/Shop_Page" ? "#E95D5A" : " "
                    }`,
                  }}
                />
              </Link>
              {/*  */}
            </div>
            <div
              id={S.display}
              className=" flex justify-start items-center s_nav w-3/4"
            >
              <Link href={"/Pages/Shop_Page"}>
                <h1
                  style={{
                    color: `${
                      pathname === "/Pages/Shop_Page" ? "#E95D5A" : " "
                    }`,
                  }}
                >
                  Shop
                </h1>
              </Link>
            </div>
          </div>
          <div
            id={S.nav_links_icon}
            className=" flex justify-center items-center  "
            style={{
              color: `${
                scrollPosition > windowHeight
                  ? "rgba(255, 255, 255, 0.75)"
                  : "rgba(95, 96, 185, 0.52)"
              }`,
            }}
          >
            <div className=" flex justify-center items-center" id={S.btn}>
              <Link href={"/Pages/About"}>
                <FaUserAlt
                  style={{
                    fontSize: "2rem",
                    color: `${pathname === "/Pages/About" ? "#E95D5A" : " "}`,
                  }}
                />
              </Link>
            </div>
            <div
              id={S.display}
              className=" flex justify-start items-center s_nav w-3/4"
            >
              <Link href={"/Pages/About"}>
                <h1
                  style={{
                    color: `${pathname === "/Pages/About" ? "#E95D5A" : " "}`,
                  }}
                >
                  About Us
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigator;
