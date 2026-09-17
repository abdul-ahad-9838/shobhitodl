import SectionHeader from "./SectionHeader";

const faqs = [
    {
        id: 1,
        question:
            "What is the Centre for Distance & Online Education at Shobhit University Meerut?",
        answer:
            "The Centre for Distance & Online Education at Shobhit University Meerut is an initiative aimed at providing quality education to those who cannot pursue traditional on-campus programs due to various constraints. It offers a range of undergraduate and postgraduate programs in the distance mode, allowing students to study at their own pace and convenience.",
    },
    {
        id: 2,
        question:
            "What programs are offered by the Centre for Distance & Online Education?",
        answer:
            "Currently, the Centre offers Bachelor of Business Administration (BBA), Bachelor of Commerce (BCom), and Master of Commerce (MCom) programs in the distance mode. These programs are designed to equip students with the knowledge and skills necessary to excel in their chosen fields.",
    },
    {
        id: 3,
        question:
            "Are the programs offered by the Centre recognized and approved?",
        answer:
            "Yes, all programs offered by the Centre for Distance & Online Education at Shobhit University Meerut are approved by the Distance Education Bureau (DEB) of the University Grants Commission (UGC). This ensures that the programs meet the necessary standards of quality and credibility.",
    },
];

const FAQ = () => {
    return (
        <section id="faqs" className="bg-bg-light py-20 sm:py-24">
            <div className="page-container">
                {/* Section Header */}

                <SectionHeader
                    eyebrow="FAQs"
                    title="Frequently Asked"
                    highlight="Questions"
                    description="Find answers to some of the most common questions about our Centre for Distance & Online Education."
                />

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <details
                            key={faq.id}
                            open={index === 0}
                            className="group overflow-hidden rounded-lg border border-border bg-bg-light open:border-primary/30 open:bg-bg-green open:shadow-sm"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left marker:hidden sm:px-6">
                                <span className="text-sm font-semibold leading-6 text-text transition-colors duration-300 group-open:text-primary sm:text-base">
                                    {faq.question}
                                </span>

                                {/* Icon */}
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-text-secondary transition-all duration-300 group-open:border-primary group-open:bg-primary group-open:text-white">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-transform duration-300 group-open:rotate-180"
                                        aria-hidden="true"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>

                            {/* Answer */}
                            <div className="border-t border-border px-5 pb-5 pt-4 sm:px-6">
                                <p className="text-sm leading-7 text-text-secondary sm:text-base">
                                    {faq.answer}
                                </p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
