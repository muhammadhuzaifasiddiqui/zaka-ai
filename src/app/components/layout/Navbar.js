"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
 
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    let lastScrollState = false; // Track the current "scroll-down" state

    const handleScroll = () => {
      if (!navbar) return;

      const shouldAddClass = window.scrollY >= 25;

      // Only update class if state has changed
      if (shouldAddClass !== lastScrollState) {
        lastScrollState = shouldAddClass;
        navbar.classList.toggle("scroll-down", shouldAddClass);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="navbar absolute w-full left-0 px-3 md:px-3.5 lg:px-5"
        id="navbar"
      >
        <div className="w-full container nav-container mx-auto relative left-0">
          <div className="bg-navbar flex justify-between items-center rounded-[30px]">
            <div className="logo-wrapper cursor-pointer">
              <Image
                src={"/images/logo.svg"}
                width={151}
                height={23}
                alt="logo"
                unoptimized={true}
                className="w-full! h-full! object-contain"
              />
            </div>
            <div className="lg:flex hidden navbar-menu items-center justify-center gap-2 xl:gap-8">
              <a className="fs-16 nav-link fw-normal active" href="#navbar">
                Home
              </a>
              <a className="fs-16 nav-link font-normal" href="#trusted">
                About
              </a>
              <a className="fs-16 nav-link font-normal" href="#service">
                Services
              </a>
              <a className="fs-16 nav-link font-normal" href="#product">
                Products
              </a>
              <a className="fs-16 nav-link font-normal" href="#blog">
                Locations
              </a>
              <a className="fs-16 nav-link font-normal" href="#book">
                Articles
              </a>
            </div>

            <div className="lg:flex hidden navbar-button gap-2">
              <div className="nav-icon p-[10px] rounded-full">
                <Image
                  src={"/images/bag-2.svg"}
                  width={20}
                  height={20}
                  alt="cart"
                  unoptimized={true}
                  className="w-full! h-full! object-cover cursor-pointer"
                />
              </div>
              <div className="nav-icon p-[10px] rounded-full">
                <Image
                  src={"/images/profile.svg"}
                  width={20}
                  height={20}
                  alt="cart"
                  unoptimized={true}
                  className="w-full! h-full! object-cover cursor-pointer"
                />
              </div>
              <a href="#" className="btn btn-primary btn-sm fs-14 font-normal">
                Login
              </a>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="nav-toggle-btn rounded-md transition"
                aria-label="Toggle menu"
              >
                <Image
                  src={
                    "https://api.bioflexaesthetics.com/wp-content/uploads/2025/05/menu.svg"
                  }
                  width={24}
                  height={25}
                  alt="hamburger"
                  unoptimized={true}
                  className="w-full! h-full! object-cover"
                />
                {}
                <path
                  d="M6.58496 9.5H31.9183M6.58496 19H31.9183M6.58496 28.5H31.9183"
                  stroke="#A1A1AA"
                  strokeWidth="3.16667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* </svg> */}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                height: isOpen ? "auto" : 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute mt-2 left-0 right-0 z-10 overflow-hidden px-3 md:px-3.5 lg:px-5"
            >
              <ul className="flex flex-col items-start px-[20px] py-[10px] overflow-hidden bg-[#f4ede4f6] font-normal rounded-[12px]">
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Locations
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={"/"}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Articles
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
export default Navbar;