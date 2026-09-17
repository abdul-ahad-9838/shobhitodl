"use client";

import React, { useEffect } from "react";

const CourseModal = ({ course, isOpen, onClose }) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !course) return null;

    // Helper function to render any dynamically structured data (strings, arrays, or objects)
    const renderDynamicContent = (data) => {
        if (typeof data === "string") {
            return <p className="text-sm leading-7 text-text-secondary">{data}</p>;
        }

        if (Array.isArray(data)) {
            return (
                <ul className="space-y-2">
                    {data.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                            {typeof item === "object" ? renderDynamicContent(item) : <span>{item}</span>}
                        </li>
                    ))}
                </ul>
            );
        }

        if (typeof data === "object" && data !== null) {
            return (
                <div className="grid gap-4 sm:grid-cols-2">
                    {Object.entries(data).map(([subKey, subVal]) => (
                        <div key={subKey} className="rounded-md border border-border bg-bg p-4">
                            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                                {subKey}
                            </h4>
                            {renderDynamicContent(subVal)}
                        </div>
                    ))}
                </div>
            );
        }

        return null;
    };

    // Standard static keys to filter out from dynamic sections
    const standardKeys = [
        "id",
        "aisheCode",
        "name",
        "programmeMapCode",
        "mode",
        "duration",
        "semesters",
        "overview",
    ];

    // Extract all dynamic custom keys present on the current course object
    const dynamicKeys = Object.keys(course).filter(
        (key) => !standardKeys.includes(key)
    );

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onMouseDown={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="course-modal-title"
                className="relative flex max-h-[90vh] w-full max-w-7xl flex-col overflow-hidden rounded-xl border border-border bg-bg shadow-2xl"
                onMouseDown={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="shrink-0 border-b border-border bg-bg-green px-6 py-5">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                Programme Details
                            </p>
                            <h2 id="course-modal-title" className="text-xl font-bold leading-tight text-text">
                                {course.name}
                            </h2>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close modal"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-text-secondary transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-6">
                    {/* Programme Information Cards */}
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-lg border border-border bg-bg-light p-4">
                            <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Programme Code</p>
                            <p className="mt-1 font-semibold text-text">{course.programmeMapCode}</p>
                        </div>

                        <div className="rounded-lg border border-border bg-bg-light p-4">
                            <p className="text-xs font-medium uppercase tracking-wider text-text-muted">AISHE Code</p>
                            <p className="mt-1 font-semibold text-text">{course.aisheCode}</p>
                        </div>

                        <div className="rounded-lg border border-border bg-bg-light p-4">
                            <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Duration</p>
                            <p className="mt-1 font-semibold text-text">{course.duration || "—"}</p>
                        </div>

                        <div className="rounded-lg border border-border bg-bg-light p-4">
                            <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Mode</p>
                            <p className="mt-1 font-semibold text-primary">{course.mode}</p>
                        </div>
                    </div>

                    {/* Overview Section */}
                    {course.overview && (
                        <section className="mt-6">
                            <h3 className="mb-3 text-lg font-bold text-text">About the Programme</h3>
                            <div className="rounded-lg border border-border bg-bg-light p-5">
                                <p className="text-sm leading-7 text-text-secondary">{course.overview}</p>
                            </div>
                        </section>
                    )}

                    {/* Dynamic Sections (Renders any custom keys like "Eligibility & Special Fees") */}
                    {dynamicKeys.map((sectionKey) => (
                        <section key={sectionKey} className="mt-6">
                            <h3 className="mb-3 text-lg font-bold text-text">{sectionKey}</h3>
                            <div className="rounded-lg border border-border bg-bg-light p-5">
                                {renderDynamicContent(course[sectionKey])}
                            </div>
                        </section>
                    ))}


                    <section className="mt-6">
                        <h3 className="mb-3 text-lg font-bold text-text">
                            Bank Details
                        </h3>

                        <div className="rounded-lg border border-border bg-bg-light p-5">
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="rounded-md border border-border bg-bg p-3.5">
                                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                                        Account Name
                                    </p>
                                    <p className="mt-1 font-semibold text-text">
                                        Shobhit University
                                    </p>
                                </div>

                                <div className="rounded-md border border-border bg-bg p-3.5">
                                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                                        Bank Name
                                    </p>
                                    <p className="mt-1 font-semibold text-text">
                                        Union Bank of India
                                    </p>
                                </div>

                                <div className="rounded-md border border-border bg-bg p-3.5">
                                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                                        Account Number
                                    </p>
                                    <p className="mt-1 font-mono font-semibold text-primary">
                                        496602010027310
                                    </p>
                                </div>

                                <div className="rounded-md border border-border bg-bg p-3.5">
                                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                                        IFSC / RTGS Code
                                    </p>
                                    <p className="mt-1 font-mono font-semibold text-text">
                                        UBIN0569780
                                    </p>
                                </div>

                                <div className="rounded-md border border-border bg-bg p-3.5">
                                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                                        MICR Code
                                    </p>
                                    <p className="mt-1 font-mono font-semibold text-text">
                                        110026138
                                    </p>
                                </div>

                                <div className="rounded-md border border-border bg-bg p-3.5">
                                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                                        Branch & ZIP Code
                                    </p>
                                    <p className="mt-1 font-semibold text-text">
                                        569780 (ZIP: 250110)
                                    </p>
                                </div>

                                <div className="rounded-md border border-border bg-bg p-3.5 sm:col-span-2 lg:col-span-3">
                                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                                        Account Address
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-text-secondary">
                                        C/O Shobhit University Institute of Engineering & Technology Meerut, Modipuram
                                    </p>
                                </div>

                                <div className="rounded-md border border-border bg-bg p-3.5 sm:col-span-2 lg:col-span-3">
                                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                                        Bank Address
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-text-secondary">
                                        Khoda Colony, FA 10 A Deepak Vihar Khoda Colony, Opp Sector 57, Noida - 201301
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>




                    {/* Programme Structure */}
                    {Array.isArray(course.semesters) && course.semesters.length > 0 && (
                        <section className="mt-6">
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div>
                                    <h3 className="text-lg font-bold text-text">Programme Structure</h3>
                                    <p className="mt-1 text-sm text-text-muted">
                                        {course.duration} • {course.semesters.length} semesters
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                {course.semesters.map((semester) => (
                                    <div key={semester.semester} className="overflow-hidden rounded-lg border border-border bg-bg-light">
                                        <div className="border-b border-border bg-bg-green px-4 py-3">
                                            <h4 className="font-semibold text-text">{semester.semester}</h4>
                                        </div>
                                        <div className="p-4">
                                            <ul className="space-y-2">
                                                {semester.subjects.map((subject, index) => (
                                                    <li key={`${semester.semester}-${index}`} className="flex items-start gap-2 text-sm text-text-secondary">
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                        <span>{subject}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Footer */}
                <div className="flex shrink-0 justify-end border-t border-border px-6 py-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseModal;