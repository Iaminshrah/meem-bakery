import Image from "next/image";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-chocolate-dark pt-[calc(5.5rem+env(safe-area-inset-top))] pb-14 sm:pt-[calc(10rem+env(safe-area-inset-top))] sm:pb-24">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-chocolate-dark/80 to-chocolate-dark" />
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.12),transparent_42%)]" />
      )}
      <Container className="relative">
        <p className="fade-up font-display text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase sm:text-sm sm:tracking-[0.32em]">{eyebrow}</p>
        <h1
          className={cn(
            "fade-up fade-up-1 font-display mt-4 max-w-3xl text-[clamp(2rem,8vw,2.75rem)] leading-[1.1] font-semibold tracking-wide text-balance text-cream sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl",
          )}
        >
          {title}
        </h1>
        <div className="gold-rule-short rule-draw fade-up-2 mt-6" />
        <p className="fade-up fade-up-3 mt-5 max-w-xl text-base leading-relaxed font-medium text-cream/80 sm:mt-6 sm:text-lg md:text-xl">
          {description}
        </p>
      </Container>
    </section>
  );
}
