const SectionHeader = ({
    eyebrow,
    title,
    highlight,
    description,
    className = "",
}) => {
    return (
        <div className={`mb-10 ${className}`}>
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {eyebrow}
                </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                {title}{" "}
                {highlight && (
                    <span className="text-primary">{highlight}</span>
                )}
            </h2>

            {/* Description */}
            {description && (
                <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
