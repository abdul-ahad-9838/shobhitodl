// components/Courses.jsx

"use client";

import React, { useState } from "react";
import CourseModal from "./CourseModal";
import SectionHeader from "./SectionHeader";

const courses = [
    {
        id: 1,
        aisheCode: "U-0542",
        name: "Bachelor of Commerce",
        programmeMapCode: "ODL54201",
        mode: "Open and Distance Learning (ODL)",
        duration: "3 Years",
        semesters: 6,

        overview:
            "Bachelor of Commerce is one of the most sought after programs in the Commerce stream. It is a career-oriented professional program that opens up countless career options and opportunities for aspiring students in India and abroad among corporates – national and multinational. This program also provides scope for entrepreneurship. During the course of study, students are exposed to general business principles, accounting, economics and quantitative skills. Knowledge to cope with contemporary developments at the local, national and global levels is provided through effective curricular and co-curricular activities.",

        "Eligibility & Special Fees": [
            {
                "Fee Details": [
                    "Fee: Rs.20,000/- (Per Annum)",
                    "Total Course Fee: Rs.60,000/- (for Three Years)",
                    "Examination Charges: Rs.3000/- (Per Annum)",
                    "Admission Charges: Rs.500/- (One time at the time of Admission)",
                    "Back Paper/Absent Fee for Examination: ₹500/- (per subject)",
                ],

                "Eligibility": [
                    "12th pass with qualifying marks in written examination and interview, which is common to all aspirants."
                ],

                "Documents": [
                    "10th Marksheet",
                    "12th Marksheet",
                    "Recent Passport Size Photograph",
                    "Valid Government ID Proof",
                    "Migration Certificate, if applicable",
                    "Transfer Certificate, if applicable"
                ],

                "Payment Mode": [
                    "Debit Card",
                    "Credit Card",
                    "UPI",
                    "Wallets",
                    "Net Banking"
                ]
            }
        ],


        semesters: [
            {
                semester: "Semester 1",
                subjects: [
                    "Environmental Studies",
                    "Microeconomics",
                    "Financial Accounting",
                    "Management Practices & Applications",
                ],
            },
            {
                semester: "Semester 2",
                subjects: [
                    "Business Law",
                    "Business Communication",
                    "Cost Accounting",
                    "Business Mathematics",
                ],
            },
            {
                semester: "Semester 3",
                subjects: [
                    "Macroeconomics",
                    "Corporate Laws",
                    "Human Resource Management",
                    "Computer Applications in Business",
                    "Income Tax & Practices",
                ],
            },
            {
                semester: "Semester 4",
                subjects: [
                    "Business Statistics",
                    "Principles of Marketing",
                    "Indian Economy",
                    "E-Commerce",
                    "Entrepreneurship",
                ],
            },
            {
                semester: "Semester 5",
                subjects: [
                    "Fundamentals of Financial Management",
                    "Auditing and Corporate Governance",
                    "DSE - 1 (Any one of Group A)",
                    "DSE - 2 (Any one of Group A)",
                ],
            },
            {
                semester: "Semester 6",
                subjects: [
                    "Corporate Accounting",
                    "Goods and Services Tax and Customs Law",
                    "DSE - 3 (Any one of Group B)",
                    "DSE - 4 (Any one of Group B)",
                ],
            },
        ],
    },

    {
        id: 2,
        aisheCode: "U-0542",
        name: "Master of Commerce",
        programmeMapCode: "ODL54202",
        mode: "Open and Distance Learning (ODL)",
        overview: "Master of Commerce is one of the most versatile professional programs. It opens up numerous opportunities for students to work in almost all sectors of the economy. A master’s degree imparts logical reasoning, analytical skills, and business management skills. The program introduces students to the numerous functional domains of commerce that are relevant in today’s world. This program prepares applicants for career in corporate, research, and academics by providing them with a comprehensive understanding of all aspects as well as relevant practical experience.",
        duration: "2 Years",
        semesters: 4,
        "Eligibility & Special Fees": [
            {
                "Fee Details": [
                    "Fee: Rs.25,000/- (Per Annum)",
                    "Total Course Fee: Rs.50,000/- (for Two Years)",
                    "Examination Charges: Rs.3000/- (Per Annum)",
                    "Admission Charges: Rs.500/- (One time at the time of Admission)",
                    "Back Paper/Absent Fee for Examination: ₹500/- (per subject)",
                ],

                "Eligibility": [
                    "Graduation in any discipline as specified in the university notification and the candidate must have studied Commerce or Accounting as a subject during graduation. Candidates who have not studied the aforesaid courses are recognized as non-cognate students, He may be given eligibility to pursue the course subject to the candidate undergo a bridge course and successfully complete the same."
                ],

                "Documents": [
                    "10th standard marks card.",
                    "12th standard marks card/Diploma marks card along with completion certificate. ITI all semester marks card and ITI certificate.",
                    "All semester/year degree marks sheet.",
                    "Passport size photo (Selfies not allowed) , photo should be in jpg format less than 50kb.",
                    "Government ID Proof - Page 1 & 2 (showing DD/MM/YYYY) and if only year mentioned then needs to be updated and submitted.",
                    "Application form duly filled in all respects.",
                    "Registered Affidavit - in case of name change/DOB change.",
                ],

                "Payment Mode": [
                    "Students must pay the specified fees through the online portal during admission.",
                    "Fees will be accepted online on the admission portal via Debit Card/Credit Card/UPI/Wallets/Net Banking etc.",
                    "Please ensure that payments are only made to authorized individuals or through university official websites and links. The university will not be held responsible for any", "issues arising from non-compliance with this guideline.",
                ]
            }
        ],

        semesters: [
            {
                semester: "Semester 1",
                subjects: [
                    "Management Concepts & Organisational Behaviour",
                    "Managerial Economics",
                    "Financial Management",
                    "Cost Analysis & Control",
                    "Business and Economic Laws",
                    "Financial Accounting & Analysis",
                ],
            },
            {
                semester: "Semester 2",
                subjects: [
                    "Research Methodology and Statistical Analysis",
                    "Management Accounting",
                    "Marketing Management",
                    "Business Environment",
                    "Project Planning, Appraisal & Control",
                    "Management of Financial Institutions, Market and Service",
                ],
            },
            {
                semester: "Semester 3",
                subjects: [
                    "Strategic Management",
                    "E – Commerce",
                    "International Business",
                    "Corporate Tax Laws & Planning",
                    "Security Analysis and Portfolio Management",
                    "Management Information System",
                ],
            },
            {
                semester: "Semester 4",
                subjects: [
                    "Advanced Corporate Accounting",
                    "Audit & Assurance",
                    "Risk Management",
                    "Business Ethics and Corporate Governance",
                    "Indirect Taxes: GST",
                    "Project Report",
                ],
            },
        ]
    },

    {
        id: 3,
        aisheCode: "U-0542",
        name: "Bachelor of Business Administration",
        programmeMapCode: "OLRE54203",
        mode: "Online (OL)",
        duration: "3 Years",
        semesters: 6,

        overview:
            "Bachelor of Business Administration (BBA) is a comprehensive undergraduate program designed to nurture future business leaders and entrepreneurs. The course covers core aspects of management including operations, finance, marketing, human resources, and strategic planning. Delivered through a flexible online mode, students acquire real-world problem-solving skills, leadership capabilities, and business acumen needed to navigate dynamic global market environments.",

        "Eligibility & Special Fees": [
            {
                "Fee Details": [
                    "Fee: Rs.25,000/- (Per Annum)",
                    "Total Course Fee: Rs.75,000/- (for Three Years)",
                    "Examination Charges: Rs.3000/- (Per Annum)",
                    "Admission Charges: Rs.500/- (One time at the time of Admission)",
                    "Back Paper/Absent Fee for Examination: ₹500/- (per subject)",
                ],

                "Eligibility": [
                    "Students who’ve completed Intermediate / Higher Secondary (10+2) from any recognized board are eligible",
                    "All the details related to fees, admission structure and financial assistance are available on the University Website.",
                ],

                "Documents": [
                    "10th standard marks card.",
                    "12th standard marks card/Diploma marks card along with completion certificate. ITI all semester marks card and ITI certificate.",
                    "Passport size photo (Selfies not allowed) , photo should be in jpg format less than 50kb.",
                    "Aadhar Card – Page 1 & 2  (showing DD/MM/YYYY) and if only year mentioned in Aadhar then needs to be updated and submitted.",
                    "Application form duly filled in all respects.",
                    "Registered Affidavit – in case of name change/DOB change.",
                ],

                "Payment Mode": [
                    "Students must pay the specified fees through the online portal during admission.",
                    "Fees will be accepted online on the admission portal via Debit Card/Credit Card/UPI/Wallets/Net Banking etc.",
                    "Please ensure that payments are only made to authorized individuals or through university official websites and links. The university will not be held responsible for any", "issues arising from non-compliance with this guideline.",
                ]
            }
        ],

        semesters: [
            {
                semester: "Semester 1",
                subjects: [
                    "Principles of Management",
                    "Business Communication",
                    "Financial Accounting",
                    "Business Economics"
                ]
            },
            {
                semester: "Semester 2",
                subjects: [
                    "Organizational Behavior",
                    "Business Statistics",
                    "Marketing Management",
                    "Business Environment"
                ]
            },
            {
                semester: "Semester 3",
                subjects: [
                    "Human Resource Management",
                    "Corporate Accounting",
                    "Business Law",
                    "Management Information Systems",
                    "Production & Operations Management"
                ]
            },
            {
                semester: "Semester 4",
                subjects: [
                    "Financial Management",
                    "Cost & Management Accounting",
                    "Research Methodology",
                    "Entrepreneurship Development",
                    "Supply Chain Management"
                ]
            },
            {
                semester: "Semester 5",
                subjects: [
                    "Strategic Management",
                    "International Business",
                    "Elective - I (Specialization)",
                    "Elective - II (Specialization)"
                ]
            },
            {
                semester: "Semester 6",
                subjects: [
                    "Business Ethics & Governance",
                    "Digital Marketing",
                    "Elective - III (Specialization)",
                    "Project Work / Dissertation"
                ]
            }
        ],
    },

    {
        id: 4,
        aisheCode: "U-0542",
        name: "Bachelor of Computer Applications",
        programmeMapCode: "OLRE54204",
        mode: "Online (OL)",
        duration: "3 Years",
        semesters: 6,

        overview:
            "Bachelor of Computer Applications (BCA) is a specialized software-centric undergraduate degree tailored for tech enthusiasts. The curriculum builds a strong foundation in computer programming, software engineering, database administration, web development, and cloud systems. Designed to match industry standards, this program equips learners with practical programming knowledge and problem-solving skills required for high-growth tech careers in software development and IT consultation.",

        "Eligibility & Special Fees": [
            {
                "Fee Details": [
                    "Fee: Rs.24,000/- (Per Annum)",
                    "Total Course Fee: Rs.72,000/- (for Three Years)",
                    "Examination Charges: Rs.3000/- (Per Annum)",
                    "Admission Charges: Rs.500/- (One time at the time of Admission)",
                    "Back Paper/Absent Fee for Examination: ₹500/- (per subject)",
                ],

                "Eligibility": [
                    "10+2 pass from any recognized board with Mathematics/Computer Science/Information Technology/IP as a subject, or equivalent diploma course."
                ],

                "Documents": [
                    "10th Marksheet & Certificate",
                    "12th Marksheet & Certificate",
                    "Recent Passport Size Photograph",
                    "Valid Government ID Proof",
                    "Migration Certificate, if applicable",
                    "Transfer Certificate, if applicable"
                ],

                "Payment Mode": [
                    "Debit Card",
                    "Credit Card",
                    "UPI",
                    "Wallets",
                    "Net Banking"
                ]
            }
        ],

        semesters: [
            {
                semester: "Semester 1",
                subjects: [
                    "Computer Fundamentals & Office Automation",
                    "Programming in C",
                    "Digital Electronics",
                    "Discrete Mathematics",
                ],
            },
            {
                semester: "Semester 2",
                subjects: [
                    "Data Structures using C",
                    "Object-Oriented Programming with C++",
                    "Operating System Concepts",
                    "Computer Architecture",
                ],
            },
            {
                semester: "Semester 3",
                subjects: [
                    "Database Management Systems (DBMS)",
                    "Java Programming",
                    "Software Engineering",
                    "Computer Networks",
                    "Web Technologies (HTML/CSS/JS)",
                ],
            },
            {
                semester: "Semester 4",
                subjects: [
                    "Python Programming",
                    "Design & Analysis of Algorithms",
                    "Computer Graphics & Multimedia",
                    "Cloud Computing",
                    "PHP & MySQL",
                ],
            },
            {
                semester: "Semester 5",
                subjects: [
                    "Full Stack Web Development",
                    "Information & Cyber Security",
                    "Elective - I (AI / Data Science)",
                    "Elective - II (Mobile App Development)",
                ],
            },
            {
                semester: "Semester 6",
                subjects: [
                    "Advanced Java / Frameworks",
                    "E-Commerce & Digital Marketing",
                    "Elective - III (DevOps / IoT)",
                    "Major Capstone Project",
                ],
            },
        ],
    },
];

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    return (
        <>
            <section id="courses" className="bg-bg-light py-20 sm:py-24">
                <div className="page-container">
                    {/* Section Header */}
                    <SectionHeader
                        eyebrow="Our Programmes"
                        title="Explore Our"
                        highlight="Programmes"
                        description="Explore the programmes offered through Online and Open & Distance Learning modes."
                    />

                    {/* Courses */}
                    <div className="grid gap-5 sm:grid-cols-2">
                        {courses.map((course, index) => (
                            <button
                                key={course.id}
                                type="button"
                                onClick={() => setSelectedCourse(course)}
                                className="group relative overflow-hidden rounded-xl border border-border bg-bg-light p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-bg-green hover:shadow-lg"
                            >
                                {/* Number */}
                                <span className="absolute right-5 top-2 text-6xl font-bold text-primary/5">
                                    0{index + 1}
                                </span>

                                <div className="relative">
                                    {/* Icon */}
                                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                        <svg
                                            width="21"
                                            height="21"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 10l9-5 9 5-9 5-9-5Z" />
                                            <path d="M7 12.5V17c3 2 7 2 10 0v-4.5" />
                                            <path d="M21 10v6" />
                                        </svg>
                                    </div>

                                    {/* Name */}
                                    <h3 className="max-w-md text-lg font-bold leading-7 text-text transition-colors duration-300 group-hover:text-primary sm:text-xl">
                                        {course.name}
                                    </h3>

                                    {/* Information */}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-text-secondary">
                                            {course.programmeMapCode}
                                        </span>

                                        <span className="rounded-full bg-gold-soft px-3 py-1.5 text-xs font-medium text-gold-dark">
                                            {course.mode === "Online (OL)" ? "Online" : "ODL"}
                                        </span>
                                    </div>

                                    {/* View Details */}
                                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                                        View Details

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
                                    </div>
                                </div>

                                {/* Hover Line */}
                                <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                    </div>

                    {/* Note */}
                    <div className="mt-8 rounded-lg border border-gold/30 bg-gold-soft px-5 py-4">
                        <p className="text-xs leading-5 text-text-secondary sm:text-sm">
                            <span className="font-semibold text-text">Note:</span>{" "}
                            Programme names are displayed for programme-code assignment and
                            data mapping purposes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <CourseModal
                course={selectedCourse}
                isOpen={!!selectedCourse}
                onClose={() => setSelectedCourse(null)}
            />
        </>
    );
};

export default Courses;