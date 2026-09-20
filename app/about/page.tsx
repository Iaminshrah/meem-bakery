import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Meem Bakers — cakes baked with patience and good ingredients.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Our Story"
        title="Cakes Made With Love"
        description="Meem Bakers began in a small kitchen with a serious sweet tooth and a belief that celebration deserves care."
        image={images.aboutAtelier}
        imageAlt="Warm bakery shelves filled with fresh bread and cakes"
      />
      <section className="bg-ink py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">How We Bake</p>
            <h2 className="font-display mt-3 text-3xl text-balance text-cream sm:text-5xl">
              Slow baking. Careful finishing.
            </h2>
            <div className="gold-rule-short mt-6" />
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              We bake the old-fashioned way. Chocolate is melted, not rushed. Butter is
              given time. Fruit is chosen because it smells as good as it looks. Every cake
              is made for the table it will sit on — a birthday, a wedding, or a Tuesday
              that needed something special.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              We bake in small batches, tasting as we go, so every layer holds. If you can
              dream it, we will find a way to bake it — with the same care we give our
              favourites.
            </p>
          </Reveal>
          <Reveal delay={100}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src={images.aboutCraft}
              alt="Golden croissants cooling after baking"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          </Reveal>
        </Container>
      </section>
      <section className="bg-chocolate-dark py-20">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">Say Hello</p>
          <h2 className="font-display mt-4 text-3xl text-balance text-cream sm:text-5xl">
            Let’s bake something together
          </h2>
          <p className="mt-5 text-cream/70">
            Call or WhatsApp to order, arrange pickup, or talk through a custom cake.
            We’ll confirm the flavour, the date, and the time with you.
          </p>
          <div className="mt-8">
            <Button href="/contact" className="w-full max-w-xs sm:w-auto">
              Get In Touch
            </Button>
          </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
