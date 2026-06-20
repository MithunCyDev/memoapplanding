interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  inverse?: boolean;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false,
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const textColor = inverse ? "text-white" : "text-(--color-ink)";
  const descriptionColor = inverse ? "text-white/70" : "text-(--color-muted)";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-(--color-info)">
        {eyebrow}
      </p>
      <h2
        className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${textColor}`}
        id={id}
      >
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 sm:text-lg ${descriptionColor}`}>
        {description}
      </p>
    </div>
  );
}
