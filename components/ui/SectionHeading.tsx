import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.32em]",
            tone === "dark" ? "text-gold" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-[clamp(1.7rem,6vw,3rem)] leading-[1.15] font-semibold tracking-wide text-balance sm:text-5xl lg:text-6xl",
          tone === "dark" ? "text-cream" : "text-chocolate-dark",
        )}
      >
        {title}
      </h2>
      {align === "center" ? <div className="gold-rule mx-auto mt-6 w-24" /> : (
        <div className="gold-rule-short mt-6" />
      )}
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed font-medium sm:mt-6 sm:text-lg md:text-xl",
            tone === "dark" ? "text-cream/70" : "text-mocha",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
