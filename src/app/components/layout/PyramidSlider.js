'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// 1. Define your data
const features = [
    {
        id: 1,
        level: '3',
        title: 'Mastery',
        description: 'Achieve mastery and prepare for a professional AI career.',
        // Replace these with your actual image paths
        image: 'https://placehold.co/600x400/1a1a1a/orange?text=Mastery+Level',
    },
    {
        id: 2,
        level: '2',
        title: 'Practitioner',
        description: 'Apply AI techniques to practical challenges.',
        image: 'https://placehold.co/600x400/1a1a1a/orange?text=Practitioner+Level',
    },
    {
        id: 3,
        level: '1',
        title: 'Foundations',
        description: 'Start your AI journey with core concepts and basics.',
        image: 'https://placehold.co/600x400/1a1a1a/orange?text=Foundations+Level',
    },
];

export default function FeatureSlider() {
    const [activeindex, setActiveIndex] = useState(0);

    return (
        <div className="flex items-center justify-center bg-black">

            {/* Main Container */}
            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">

                {/* LEFT SIDE: The Visual Slider */}
                <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-2xl lg:h-[500px]">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${activeindex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            {/* You can replace this standard img tag with Next.js <Image /> */}
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="h-full w-full object-cover"
                            />
                            {/* Optional: Overlay gradient to match the dark theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE: Details & Navigation */}
                <div className="relative flex h-[400px] flex-col rounded-2xl border border-white/10 bg-[#0f0f0f] px-8 py-12 lg:h-[500px] lg:px-16">

                    {/* UPDATED POSITIONING:
             Changed 'top-1/2 -translate-y-1/2' (center) -> 'top-12' (top align)
             Matches the 'py-12' padding of the parent container so it aligns with the first item.
          */}
                    <div className="absolute right-8 top-12 flex flex-col gap-2">
                        {features.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1 rounded-full transition-all duration-300 ${activeindex === idx ? 'h-12 bg-orange-500' : 'h-12 bg-white/10'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* List Items (Unchanged) */}
                    <div className="flex flex-col gap-20 h-full">
                        {features.map((feature, index) => {
                            const isActive = activeindex === index;
                            return (
                                <div
                                    key={feature.id}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`group flex cursor-pointer items-start gap-6 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                                        }`}
                                >
                                    <div
                                        className={`flex h-14 w-14 flex-shrink-0 flex-col items-center justify-center rounded-full border-2 transition-colors duration-300 ${isActive
                                                ? 'border-orange-500 text-white'
                                                : 'border-white/20 text-white/60'
                                            }`}
                                    >
                                        <span className="text-lg font-bold leading-none">{feature.level}</span>
                                        <span className="text-[10px] uppercase tracking-wider">Level</span>
                                    </div>

                                    <div className="flex flex-col">
                                        <h3
                                            className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/80'
                                                }`}
                                        >
                                            {feature.title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-gray-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}