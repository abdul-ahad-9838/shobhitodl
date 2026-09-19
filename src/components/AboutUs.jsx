"use client";

import SectionHeader from "./SectionHeader";

export default function AboutUs() {
    return (
        <section id="about" className="bg-bg py-16 sm:py-20">
            <div className="page-container max-w-4xl mx-auto">
                {/* <div className="mb-3 flex items-center gap-3">
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
                </p> */}
                <SectionHeader
                    eyebrow="About Us"
                    title="Shobhit University"
                // highlight="Meerut"
                />

                <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                    Shobhit University is a premier institution focused on nurturing future leaders through quality education, research, and innovation. Operating under the motto "Empowering Nation Through Education," the university offers a diverse range of programs aimed at personal growth and academic excellence while boasting a vibrant, inclusive campus life with a diverse international student community. In recognition of its high standards and academic reputation, the Government of India conferred the prestigious Deemed-to-be University status upon the institution in 2006 under Section 3 of the UGC Act, 1956. This central government designation highlights the university's compliance with rigorous quality benchmarks, cementing its status as a trusted hub for higher education and career-aligned development.
                </p>

            </div>
        </section>
    );
}
