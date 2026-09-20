import Image from "next/image";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  eyebrow,
  heading,
  text,
  buttonLabel,
  buttonHref,
  image,
  imageAlt,
  className,
}: {
  eyebrow?: string;
  heading: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
  image: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden", className)}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-chocolate-dark/78" />
      <Container className="relative py-16 text-center sm:py-32">
        <Reveal>
          {eyebrow ? (
            <p className="mb-4 text-[0.68rem] tracking-[0.32em] text-gold uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display mx-auto max-w-3xl text-[clamp(1.85rem,6.5vw,2.5rem)] text-balance text-cream sm:text-6xl">
            {heading}
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {text}
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={buttonHref} className="w-full max-w-xs sm:w-auto">
              {buttonLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
