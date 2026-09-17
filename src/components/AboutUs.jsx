"use client";

import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about" className="bg-bg py-16 sm:py-20">
            <div className="page-container">
                <div className="grid items-center gap-10  lg:grid-cols-2 lg:gap-14">

                    {/* Left Side: Image */}
                    <div className="relative md:order-first">
                        <div className="relative z-10 overflow-hidden rounded-xl border border-border bg-bg-light shadow-md">
                            <Image
                                src="/images/about-us.webp"
                                alt="Shobhit University Campus"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                        {/* Decorative Gold Border */}
                        <div className="absolute -bottom-3 -left-3 z-0 h-full w-full rounded-xl border-2 border-gold" />
                    </div>

                    {/* Right Side: Simple Content */}
                    <div className="order-first">
                        <div className="mb-3 flex items-center gap-3">
                            <span className="h-px w-8 bg-gold" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary md:text-sm">
                                About Us
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
                            University Overview
                        </h2>

                        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gold">
                            Deemed-to-be University (MHRD Govt. of India, UGC Act 1956)
                        </p>

                        <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                            Shobhit Institute of Engineering & Technology, known as Shobhit University, is a premier institution focused on nurturing future leaders through quality education, research, and innovation. Operating under the motto "Empowering Nation Through Education," the university offers a diverse range of programs aimed at personal growth and academic excellence. It boasts a vibrant, inclusive campus life with numerous extracurricular activities and a diverse international student community, all driven by a philosophy inspired by talent and innovation.
                        </p>

                        <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                            In recognition of its high standards and academic reputation, the Government of India conferred the prestigious Deemed-to-be University status upon the institution in 2006 under Section 3 of the UGC Act, 1956. This central government designation highlights the university's compliance with rigorous quality benchmarks, cementing its status as a trusted hub for higher education and career-aligned development.
                        </p>

                        {/* Quick Highlights */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="rounded-lg border border-border bg-bg-light p-3">
                                <p className="text-xl font-bold text-primary">2006</p>
                                <p className="text-xs text-text-muted">Established as Deemed Univ.</p>
                            </div>
                            <div className="rounded-lg border border-border bg-bg-light p-3">
                                <p className="text-xl font-bold text-primary">Global</p>
                                <p className="text-xs text-text-muted">Diverse Student Base</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}