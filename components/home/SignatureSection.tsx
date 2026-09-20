import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";

export function SignatureSection() {
  return (
    <section className="bg-cream py-20 sm:py-0">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-gold/15 sm:aspect-[5/6]">
            <Image
              src={images.signatureCake}
              alt="A tall layered celebration cake with berries and cream"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>
        <Reveal delay={120} className="py-6 lg:py-28">
          <p className="text-[0.68rem] font-medium tracking-[0.32em] text-gold uppercase">
            Our Signature
          </p>
          <h2 className="font-display mt-5 max-w-md text-3xl leading-tight text-balance text-chocolate-dark sm:text-5xl lg:text-6xl">
            Made For Moments That Matter
          </h2>
          <div className="gold-rule-short mt-6" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-mocha sm:text-lg">
            Every cake begins with the occasion itself. We bake with good chocolate,
            real butter, fresh fruit, and the kind of care you can taste —
            then finish each piece so it arrives as a gift, not just a dessert.
          </p>
          <div className="mt-10">
            <Button href="/about" className="w-full max-w-xs sm:w-auto">Discover Our Story</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
