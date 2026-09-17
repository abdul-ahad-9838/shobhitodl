import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Courses", href: "#courses" },
    // { label: "FAQs", href: "#faqs" },
    // { label: "Blogs", href: "#blogs" },
];

const SOCIAL_LINKS = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/ShobhitUniversityIndia/",
        icon: (
            <svg
                className="h-6 w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: "X (Twitter)",
        href: "https://twitter.com/shobhituniv",
        icon: (
            <svg
                className="h-6 w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    fillRule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/user/shobhituniversityin",
        icon: (
            <svg
                className="h-6 w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    fillRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/shobhituniv/",
        icon: (
            <svg
                className="h-6 w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://in.linkedin.com/school/shobhit-university",
        icon: (
            <svg
                className="h-6 w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-primary-darker text-white">
            <div className="page-container mx-auto w-full px-5 py-12">
                <div className="grid gap-4 md:grid-cols-3">
                    {/* About */}
                    <div>
                        <Image
                            src="/images/logo.png"
                            alt="Shobhit University"
                            width={200}
                            height={200}
                            className="bg-bg mb-2 rounded-md md:w-full"
                        />
                        <p className="text-justify text-sm leading-snug text-white/75">
                            Shobhit Institute of Engineering & Technology, Meerut (NAAC ‘A’
                            Grade Accredited Deemed-to-be University) NH-58, Modipuram, Meerut
                            – 250 110
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-gold">Quick Links</h3>
                        <div className="flex flex-col gap-2 text-sm text-white/75">
                            {QUICK_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="transition hover:text-gold"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <div className="mb-6">
                            <h3 className="mb-4 text-lg font-bold text-gold">Contact Us</h3>
                            <div className="space-y-3 text-sm text-white/75">
                                <a
                                    className="flex items-center gap-2 transition-colors hover:text-gold"
                                    href="mailto:admission@shobhit.online"
                                >
                                    <Mail className="h-4 w-4 shrink-0 text-gold" />
                                    <span>admission@shobhit.online</span>
                                </a>
                                <a
                                    className="flex items-center gap-2 transition-colors hover:text-gold"
                                    href="tel:18008890679"
                                >
                                    <Phone className="h-4 w-4 shrink-0 text-gold" />
                                    <span>1800 889 0679</span>
                                </a>
                            </div>
                        </div>

                        {/* Follow Us Section */}
                        <div>
                            <h3 className="mb-4 text-lg font-bold text-gold">Follow Us</h3>
                            <div className="flex items-center gap-3">
                                {SOCIAL_LINKS.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:bg-gold hover:text-black"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-white/60">
                    © {new Date().getFullYear()} Shobhit University Centre for Distance and
                    Online Education. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}