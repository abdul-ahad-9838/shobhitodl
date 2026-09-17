"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        image: "https://shobhitodl.in/wp-content/uploads/2025/12/bba-mba-bgd26.webp",
    },
    {
        id: 2,
        image: "https://shobhitodl.in/wp-content/uploads/2025/12/bcom_mcom-bgd26.webp",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const previousSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [paused, nextSlide]);

    return (
        <section
            className="relative w-full overflow-hidden bg-primary-darker"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* 
        Container Grid: Stack all slides on top of each other. 
        The first relative image dictates the height automatically for all slides.
      */}
            <div className="grid w-full grid-cols-1 min-h-60 grid-rows-1">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`col-start-1 row-start-1 w-full transition-all duration-1000 ease-in-out ${index === current
                            ? "z-10 scale-100 opacity-100"
                            : "z-0 scale-105 opacity-0 pointer-events-none"
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={`Hero slide ${index + 1}`}
                            className="h-full w-full object-fill"
                        />
                    </div>
                ))}
            </div>

            {/* Left Button */}
            <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="group absolute left-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold hover:text-primary-darker sm:left-6 sm:h-12 sm:w-12"
            >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Right Button */}
            <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="group absolute right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold hover:text-primary-darker sm:right-6 sm:h-12 sm:w-12"
            >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Bottom Progress */}
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-5">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => setCurrent(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${index === current ? "w-6 bg-gold sm:w-10" : "w-2 bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}