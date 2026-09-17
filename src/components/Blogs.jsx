"use client";

import React from "react";

const blogs = [
    {
        id: 1,
        category: "Online Education",
        title: "Top Government-Approved Distance B.Com Courses in India",
        excerpt:
            "Explore how online and distance learning can provide flexible opportunities for students to continue their education.",
        readTime: "5 min read",
        image: "https://shobhitodl.in/wp-content/uploads/2025/04/10-1024x576.webp",
        slug: "understanding-online-and-distance-education",
    },
    {
        id: 2,
        category: "Student Guide",
        title: "Top Colleges for B.Com in India: Your Ultimate Guide to the Best Commerce Education",
        excerpt:
            "Choosing the right academic programme is an important step toward building the skills and knowledge needed for your career.",
        readTime: "4 min read",
        image: "https://shobhitodl.in/wp-content/uploads/2025/04/Top_Colleges_for_B_Com.webp",
        slug: "how-to-choose-the-right-programme",
    },
    {
        id: 3,
        category: "Distance Learning",
        title: "Top Commerce Career Options: Expert Guide 2025",
        excerpt:
            "Discover how flexible learning options can help working professionals balance education, career and personal commitments.",
        readTime: "6 min read",
        image: "https://shobhitodl.in/wp-content/uploads/2025/03/commerce-blog-1024x576.webp",
        slug: "benefits-of-flexible-learning",
    },
];

const Blogs = () => {
    return (
        <section id="blogs" className="bg-bg py-20 sm:py-24">
            <div className="page-container">
                {/* Section Header */}
                <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-10 bg-gold" />

                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                Latest Insights
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                            From Our{" "}
                            <span className="text-primary">Blog</span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                            Explore useful insights, updates and resources related
                            to online education, distance learning and student
                            development.
                        </p>
                    </div>

                    {/* View All */}
                    <a
                        href="#"
                        className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-primary"
                    >
                        View All Articles

                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            <path d="M5 12h14" />
                            <path d="m13 6 6 6-6 6" />
                        </svg>
                    </a>
                </div>

                {/* Blog Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <article
                            key={blog.id}
                            className="group overflow-hidden rounded-xl border border-border bg-bg-light transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                        >
                            {/* Image */}
                            <a
                                href="#"
                                className="relative block aspect-video overflow-hidden bg-bg-green"
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                            </a>

                            {/* Content */}
                            <div className="p-5 sm:p-6">
                                {/* Meta */}

                                {/* Title */}
                                <h3 className="text-lg font-bold leading-7 text-text transition-colors duration-300 group-hover:text-primary sm:text-xl">
                                    <a href="#">
                                        {blog.title}
                                    </a>
                                </h3>

                                {/* Excerpt */}
                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-secondary">
                                    {blog.excerpt}
                                </p>

                                {/* Read More */}
                                <a
                                    href="#"
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                                >
                                    Read Article

                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m13 6 6 6-6 6" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;