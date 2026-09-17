"use client";

import React, { useState } from "react";

const Enquiries = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative">

            {/* Fixed Sticky/Floating Enquiry Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl focus:outline-none"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Enquire Now
            </button>

            {/* Modal Popup */}
            {isModalOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-xl rounded-xl bg-white p-6 shadow-2xl">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Header */}
                        <h3 className="text-xl font-bold text-gray-900">Admissions Enquiry</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Fill out the form below and our admissions team will contact you.
                        </p>

                        {/* Form */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Enquiry submitted successfully!");
                                setIsModalOpen(false);
                            }}
                            className="mt-4 flex flex-col gap-3"
                        >
                            <div>
                                <label className="text-xs font-semibold text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm outline-none focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="name@example.com"
                                    className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm outline-none focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 9999999999"
                                    className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm outline-none focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-700">Course of Interest</label>
                                <select className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm outline-none focus:border-primary">
                                    <option>Bachelor of Commerce</option>
                                    <option>Master of Commerce</option>
                                    <option>Bachelor of Business Administration</option>
                                    <option>Bachelor of Computer Applications</option>
                                </select>
                            </div>

                            {/* message */}
                            <div>
                                <label className="text-xs font-semibold text-gray-700">Message</label>
                                <textarea
                                    rows="4"
                                    required
                                    placeholder="Enter your message"
                                    className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm outline-none focus:border-primary"
                                />
                            </div>

                            <div className="flex gap-2 items-center">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    type="button"
                                    className="mt-2 w-full rounded-md border border-primary text-primary py-2.5 text-sm font-semibold bg-white transition-colors hover:text-primary-dark hover:bg-bg-green"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="mt-2 w-full rounded-md bg-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                                >
                                    Submit Enquiry
                                </button>

                            </div>

                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Enquiries;