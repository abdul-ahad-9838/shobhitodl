import React from "react";
import SectionHeader from "./SectionHeader";

const VisionMission = () => {
    return (
        <section id="vision-mission" className="bg-bg-light py-20 sm:py-24 lg:py-28">
            <div className="page-container">
                {/* Section Header */}

                <SectionHeader
                    eyebrow="Our Direction"
                    title="Vision &"
                    highlight="Mission"
                    description="Creating accessible learning opportunities and empowering learners to achieve their full potential."
                />

                {/* Vision & Mission */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Vision */}
                    <div className="group relative overflow-hidden rounded-xl border border-border bg-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-9">
                        {/* Number */}
                        <span className="absolute right-6 top-4 select-none text-7xl font-bold text-primary/5">
                            01
                        </span>

                        <div className="relative">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M3 12h18" />
                                    <path d="M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-text">
                                Our <span className="text-primary">Vision</span>
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-text-secondary">
                                To be a national leader in distance education by breaking down
                                geographical, cultural, and social barriers to deliver
                                world-class education. We envision an inclusive learning
                                environment where every learner can develop the knowledge,
                                skills, and competencies needed to thrive in a rapidly changing
                                world.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-2">
                                {[
                                    "Inclusive Education",
                                    "Innovation",
                                    "Excellence",
                                    "Global Impact",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-border bg-bg-green px-3 py-1.5 text-xs font-medium text-primary"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                    </div>

                    {/* Mission */}
                    <div className="group relative overflow-hidden rounded-xl border border-border bg-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg sm:p-9">
                        {/* Number */}
                        <span className="absolute right-6 top-4 select-none text-7xl font-bold text-gold/10">
                            02
                        </span>

                        <div className="relative">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-soft text-gold-dark">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <path d="M4 19V5" />
                                    <path d="M4 5c4-2 7 2 10 0s5-2 6-3v14c-1 1-3 2-6 3s-6-2-10 0" />
                                    <path d="M8 9c2-.5 4 .5 6 1" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-text">
                                Our <span className="text-gold-dark">Mission</span>
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-text-secondary">
                                To provide accessible, affordable, and high-quality education
                                through an inclusive and supportive online learning community.
                                By leveraging modern technology and best practices, we offer
                                diverse programs that support lifelong learning and prepare
                                students for the needs of a dynamic workforce and society.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-2">
                                {[
                                    "Accessibility",
                                    "Quality Education",
                                    "Lifelong Learning",
                                    "Student Success",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-border bg-gold-soft px-3 py-1.5 text-xs font-medium text-gold-dark"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
