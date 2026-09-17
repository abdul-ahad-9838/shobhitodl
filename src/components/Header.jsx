"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    // { label: "Vision & Mission", href: "#vision-mission" },
    // { label: "Approvals", href: "#approvals" },
    { label: "Courses", href: "#courses" },
    // { label: "Blogs", href: "#blogs" },
    // { label: "FAQs", href: "#faqs" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
            <div className="mx-auto flex h-20 w-full max-w-275 items-center justify-between gap-6 px-5">

                {/* Logo */}
                <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
                    <img
                        src="/images/logo.png"
                        alt="Shobhit University"
                        className="h-14 w-auto object-contain sm:h-16"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group relative whitespace-nowrap text-sm font-semibold text-text transition-colors hover:text-primary"
                        >
                            {item.label}

                            <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gold transition-all duration-200 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop Login */}
                <div className="hidden shrink-0 items-center gap-2 lg:flex">
                    <Link
                        href="#"
                        className="rounded-lg border border-primary px-3 py-2 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
                    >
                        Admin Login
                    </Link>

                    <Link
                        href="#"
                        className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition hover:bg-primary-dark"
                    >
                        Student Login
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-white lg:hidden"
                >
                    <span
                        className={`h-0.5 w-5 bg-primary transition ${open ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-5 bg-primary transition ${open ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-5 bg-primary transition ${open ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden border-t border-border bg-white transition-all duration-300 lg:hidden ${open ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="mx-auto w-full page-container px-5 pb-5 pt-2">
                    <nav className="flex flex-col">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="border-b border-border py-3 text-sm font-semibold text-text transition hover:pl-2 hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <Link
                            href="#"
                            onClick={() => setOpen(false)}
                            className="rounded-lg border border-primary px-4 py-3 text-center text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                        >
                            Admin Login
                        </Link>

                        <Link
                            href="#"
                            onClick={() => setOpen(false)}
                            className="rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-primary-dark"
                        >
                            Student Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
