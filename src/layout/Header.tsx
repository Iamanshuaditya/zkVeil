import React, { useEffect, useState } from "react";
import { navLinks } from "../utils/constants";
import styles from "./style.module.scss";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/global/Nav";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling...");
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY > 50) {
          console.log("Adding active class...");
          header.classList.add("active");
        } else {
          console.log("Removing active class...");
          header.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full fixed top-0 z-50 transition duration-500 ease-out header">
        <nav className="bg-black bg-opacity-20 w-full">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1107px] px-4 lg:px-5 py-10">
            <a href="#" className="flex items-center">
              <img
                src={"../../public/Vector.png"}
                className="mr-3 h-6 sm:h-9"
                alt="zkVeil Logo"
              />
            </a>
            <div className="flex items-center lg:order-2">
              <a href="#" className="text-white px-[15px] py-[6px] font-bold">
                Buy $ZKV
              </a>
              <a href="#" className="px-[15px] py-[6px] font-bold bg-[#D9D9D9]">
                Bridge
              </a>
              <div className="relative lg:hidden">
                <div
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                  className={styles.button}
                >
                  <div
                    className={`${styles.burger} ${
                      isActive ? styles.burgerActive : ""
                    }`}
                  ></div>
                  <AnimatePresence mode="wait">
                    {isActive && <Nav />}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-white">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`${index < navLinks.length - 1 ? "pr-5" : ""} ${
                      index > 0 ? "pl-5" : ""
                    } !m-0 flex items-center`}
                  >
                    <a
                      href={link.href}
                      className={`block py-[6px] ${
                        link.title === "Home"
                          ? "bg-active px-[15px] text-black "
                          : ""
                      } m-0`}
                      aria-current="page"
                    >
                      {link.title}
                    </a>
                    <div
                      className="border-r border-[#92918D]
                     h-[18px] relative right-[-20px]"
                    ></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
