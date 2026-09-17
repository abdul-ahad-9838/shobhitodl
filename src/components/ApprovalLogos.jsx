"use client";

import Image from "next/image";
import React from "react";

const logos = [
    {
        name: "NAAC",
        src: "/images/naac.webp",
    },
    {
        name: "AICTE",
        src: "/images/aicte.webp",
    },
    {
        name: "Experience",
        src: "/images/experience.webp",
    },
    {
        name: "UGC",
        src: "/images/ugc-12b.webp",
    },
    {
        name: "AACSB Member",
        src: "https://www.shobhituniversity.ac.in/assets/img/aacsb.webp",
    },
    {
        name: "Shobhit Institute of Engineering & Technology, Meerut, is (NAAC) Accredited",
        src: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition11.png",
    },
    {
        name: "Shobhit Institute of Engineering & Technology, Meerut",
        src: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition01.png",
    },
    {
        name: "Board of Apprenticeship Training (NR)",
        src: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition15.png",
    },
    {
        name: "National Apprenticeship Training Scheme (NATS)",
        src: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition14.png",
    },
];

const ApprovalLogos = () => {
    const sliderItems = [...logos, ...logos];

    return (
        <section id="approvals" className="page-container overflow-hidden py-12">
            <div className="page-container mb-8">
                <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-gold" />

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Approvals & Recognitions
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Left fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-bg to-transparent" />

                {/* Slider */}
                <div
                    className="
            flex w-max
            motion-safe:animate-[approval-slide_30s_linear_infinite]
            hover:[animation-play-state:paused]
          "
                >
                    {sliderItems.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="
                mx-3 flex h-32 w-48 shrink-0
                items-center justify-center
                rounded-xl
                border border-border
                bg-white
                p-6
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-md
              "
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={120}
                                height={80}
                                className="h-20 w-32 object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>

                {/* Right fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-bg to-transparent" />
            </div>

            {/* Global CSS animation */}
            <style>{`
        @keyframes approval-slide {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </section>
    );
};

export default ApprovalLogos;
