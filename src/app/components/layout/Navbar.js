"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun, ChevronRight } from "lucide-react";

// --- 1. RESTRUCTURED DATA ---
const menuItems = [
  {
    id: 0,
    label: "Inside ZAKA",
    href: "#",
    description: "Your Artificial Intelligence Transformation",
    subLinks: [
      { name: "About Us", href: "#" },
      { name: "Shop", href: "#" },
      { name: "Virtual Cafe", href: "#" },
      { name: "Contact us", href: "#" },
    ],
  },
  {
    id: 1,
    label: "Programs",
    href: "#",
    description: "Upskilling programs for every stage of your journey",
    categories: [
      {
        name: "Mastery Stages",
        items: [
          { name: "Foundations", href: "#" },
          { name: "Practitioner", href: "#" },
          { name: "Mastery", href: "#" },
        ],
      },
      {
        name: "Career Tracks",
        items: [
          { name: "Machine Learning", href: "#" },
          { name: "Data Engineering", href: "#" },
          { name: "Data Science", href: "#" },
          { name: "Data Analytics", href: "#" },
        ],
      },
      {
        name: "Industry Tracks",
        items: [
          { name: "Healthcare", href: "#" },
          { name: "Finance", href: "#" },
          { name: "Retail", href: "#" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Corporate",
    href: "#",
    description: "Empowering businesses with AI solutions",
    subLinks: [
      { name: "Consultancy", href: "#" },
      { name: "Corporate Training", href: "#" },
      { name: "Case Studies", href: "#" },
    ],
  },
  {
    id: 3,
    label: "Community",
    href: "#",
    description: "Join the largest AI community in the region",
    subLinks: [
      { name: "Events", href: "#" },
      { name: "Hackathons", href: "#" },
      { name: "Ambassadors", href: "#" },
    ],
  },
  {
    id: 4,
    label: "Resources",
    href: "#",
    description: "Read the latest trends and insights",
    subLinks: [
      { name: "Blog", href: "#" },
      { name: "Whitepapers", href: "#" },
      { name: "Podcasts", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // FIX: Removed TypeScript syntax <number | null> to resolve ReferenceError
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  // FIX: Removed TypeScript syntax <number | null> to resolve ReferenceError
  // Defaults to null so nothing shows in the 3rd column initially
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Reset the Main Menu selection when the menu is closed
  useEffect(() => {
    if (!isOpen) {
      setActiveMenuIndex(null);
    }
  }, [isOpen]);

  // Reset the Sub-Category selection (e.g., inside Programs) when switching main tabs
  useEffect(() => {
    setActiveCategoryIndex(null);
  }, [activeMenuIndex]);

  // Helper to get current menu item safely
  const currentItem =
    activeMenuIndex !== null ? menuItems[activeMenuIndex] : null;

  return (
    <>
      {/* NAVBAR HEADER */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-black/90 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* LEFT: Toggles */}
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-20 items-center rounded-full border border-orange-500/50 bg-black">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-black">
                <Moon size={16} />
              </div>
              <div className="flex h-8 w-8 items-center justify-center text-gray-500">
                <Sun size={16} />
              </div>
            </div>

            <div className="flex h-10 w-20 items-center justify-between rounded-full border border-orange-500/50 bg-black px-3 text-xs font-bold text-orange-500">
              <span>AR</span>
              <span className="rounded-full bg-orange-500 px-1 py-0.5 text-[10px] text-black">
                EN
              </span>
            </div>
          </div>

          {/* CENTER: Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 transform"
          >
            <h1 className="text-4xl font-black tracking-tighter">
              <Image
                src={
                  "https://zaka.ai/wp-content/uploads/2025/06/ZAKA-FINAL-LOGOS-06-scaled-e1753871364260.png"
                }
                width={69}
                height={69}
                alt="H3"
                unoptimized={true}
                className="max-h-[50px] object-contain"
              />
              {/* <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
                ZAKA
              </span> */}
            </h1>
          </Link>

          {/* RIGHT: Menu & Contact */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-2 rounded-full border border-orange-500 bg-black px-5 py-2 text-white transition-all hover:bg-orange-950"
            >
              <span className="font-medium">Menu</span>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-black">
                <Menu size={14} />
              </div>
            </button>

            <div className="h-8 w-[1px] bg-orange-500/50 hidden md:block" />

            <Link
              href="/contact"
              className="hidden rounded-full bg-orange-500 px-6 py-2.5 font-bold text-black transition-transform hover:scale-105 md:block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* MEGA MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black pt-32 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto grid h-full max-w-7xl grid-cols-1 md:grid-cols-12 px-6 pb-20">
          {/* --- LEFT COLUMN: Main Categories --- */}
          <div className="col-span-1 md:col-span-5 flex flex-col justify-center space-y-2">
            {menuItems.map((item, idx) => {
              const isActive = activeMenuIndex === idx;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveMenuIndex(idx)}
                  className="group flex items-center justify-between border-b border-white/10 py-5 cursor-pointer"
                >
                  <Link
                    href={item.href}
                    className={`text-3xl font-bold transition-colors md:text-5xl ${
                      isActive
                        ? "text-orange-500"
                        : "text-white group-hover:text-orange-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <ChevronRight
                    className={`transition-all ${
                      isActive
                        ? "translate-x-2 text-orange-500 opacity-100"
                        : "text-white opacity-0 group-hover:translate-x-2 group-hover:text-orange-500 group-hover:opacity-100"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Vertical Divider (Main) */}
          <div className="hidden md:col-span-1 md:flex justify-center">
            <div className="h-full w-[1px] bg-white/10" />
          </div>

          {/* --- RIGHT COLUMN: Dynamic Content --- */}
          <div className="col-span-1 md:col-span-6 flex flex-col justify-center pl-0 md:pl-10 pt-10 md:pt-0">
            {/* Only render if currentItem is active (not null) */}
            {currentItem && (
              <div
                key={activeMenuIndex}
                className="animate-in fade-in slide-in-from-left-4 duration-300 h-full flex flex-col justify-center"
              >
                {/* CHECK: Does this item have nested categories (like Programs)? */}
                {currentItem.categories ? (
                  // --- NESTED LAYOUT (3 columns visual effect) ---
                  <div className="grid grid-cols-2 gap-8 h-full items-center">
                    {/* Sub-Category List (Middle Column) */}
                    <div className="border-r border-white/10 pr-6 h-auto py-4">
                      <div className="flex flex-col space-y-6">
                        {currentItem.categories.map((cat, idx) => (
                          <div
                            key={idx}
                            onMouseEnter={() => setActiveCategoryIndex(idx)}
                            className={`text-xl font-bold cursor-pointer transition-colors ${
                              activeCategoryIndex === idx
                                ? "text-orange-500"
                                : "text-white hover:text-orange-500"
                            }`}
                          >
                            {cat.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Final Link List (Rightmost Column) */}
                    <div className="pl-2">
                      {/* Check if a category is selected before rendering items */}
                      {activeCategoryIndex !== null && (
                        <div className="flex flex-col space-y-4 animate-in fade-in slide-in-from-left-2 duration-200">
                          {currentItem.categories[
                            activeCategoryIndex
                          ].items.map((item, idx) => (
                            <div
                              key={idx}
                              className="border-b border-white/10 pb-3"
                            >
                              <Link
                                href={item.href}
                                className="text-xl font-medium text-gray-300 hover:text-white hover:pl-2 transition-all"
                              >
                                {item.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // --- STANDARD LAYOUT (Existing Logic) ---
                  <>
                    <h3 className="text-2xl font-semibold text-orange-500 mb-2">
                      {currentItem.label}
                    </h3>
                    <p className="text-gray-400 mb-8 text-lg">
                      {currentItem.description}
                    </p>

                    <div className="flex flex-col space-y-4">
                      {currentItem.subLinks &&
                        currentItem.subLinks.map((subLink, subIdx) => (
                          <div
                            key={subIdx}
                            className="border-b border-white/10 pb-3"
                          >
                            <Link
                              href={subLink.href}
                              className="text-xl font-medium text-gray-300 hover:text-white hover:pl-2 transition-all"
                            >
                              {subLink.name}
                            </Link>
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
