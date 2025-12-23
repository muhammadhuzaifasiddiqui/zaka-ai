"use client";

import React, { useState } from "react";
import Image from "next/image";

// 1. Define your data
const features = [
  {
    id: 1,
    level: "3",
    title: "Mastery",
    description: "Achieve mastery and prepare for a professional AI career.",
    image: "https://zaka.ai/wp-content/uploads/2025/10/Top-Layer-Colored.png",
  },
  {
    id: 2,
    level: "2",
    title: "Practitioner",
    description: "Apply AI techniques to practical challenges.",
    image:
      "https://zaka.ai/wp-content/uploads/2025/10/Middle-Layer-Colored.png",
  },
  {
    id: 3,
    level: "1",
    title: "Foundations",
    description: "Start your AI journey with core concepts and basics.",
    image:
      "https://zaka.ai/wp-content/uploads/2025/10/Bottom-Layer-Colored.png",
  },
];

// 2. Define your Default Image
const defaultImage =
  "https://zaka.ai/wp-content/uploads/2025/10/All-Layers-Colored.png";

export default function FeatureSlider() {
  const [activeindex, setActiveIndex] = useState(null);

  return (
    <div className="flex items-center justify-center">
      {/* Main Container */}
      {/* <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2"> */}
      <div className="flex lg:flex-row flex-col w-full gap-8">
        {/* LEFT SIDE: The Visual Slider */}
        <div className="featured-left-box relative flex w-[59%] items-center justify-center overflow-hidden">
          {/* Default Image Layer */}
          <div
            className={`default-image-wrapper absolute flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              activeindex === null ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={defaultImage}
              alt="payramid"
              height={450}
              width={100}
              unoptimized={true}
              className="object-contain max-h-112.5 max-w-full"
            />
          </div>

          {/* Feature Images Layers */}
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`left-image-wrapper absolute flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                activeindex === index ? "opacity-100 z-20" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                height={450}
                width={100}
                unoptimized={true}
                className="object-contain max-h-112.5 max-w-full"
              />
              <img />
              <div className="right-image-wrapper absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: Details & Navigation */}
        <div
          className="relative featured-right-box flex flex-col w-[41%] justify-center h-[500px]"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {/* FIX: Detached Bullet Container 
             Placed absolutely at Top-Right (top-12 right-8).
             This separates them from the text items below.
          */}
          <div className="absolute right-6 top-10 flex flex-col gap-2.5 z-30">
            {features.map((_, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`w-[2px] rounded-full cursor-pointer transition-all duration-300 ${
                  activeindex === idx
                    ? "h-10 bg-orange-500" // Active
                    : "h-10 bg-[#404040]" // Inactive
                }`}
              />
            ))}
          </div>

          {/* Text Content List */}
          <div className="flex flex-col gap-20">
            {features.map((feature, index) => {
              const isActive = activeindex === index;

              return (
                <div
                  key={feature.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative flex cursor-pointer items-center gap-6 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {/* Circle Number */}
                  <div
                    className={`flex h-14 w-14 flex-shrink-0 flex-col items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                      isActive
                        ? "border-orange-500 text-white"
                        : "border-white/20 text-white/60"
                    }`}
                  >
                    <span className="text-lg font-bold leading-none">
                      {feature.level}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider">
                      Level
                    </span>
                  </div>

                  {/* Text Description */}
                  <div className="flex flex-col pr-8">
                    <h3
                      className={`text-[19px] mb-4 font-semibold duration-300 ${
                        isActive ? "text-white" : "text-white"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-[16px] text-[#FF8C1A]"
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Note: The bullet <div> that was here is now removed 
                      and moved to the absolute container above. */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}