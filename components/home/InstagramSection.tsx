import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/data";
import { images } from "@/lib/images";

export function InstagramSection() {
  return (
    <section className="bg-chocolate-dark py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Recent Bakes"
            title="Sweet Moments @meembakers.official"
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.instagram.map((src, index) => (
            <Reveal key={src} delay={index * 40}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Image
                  src={src}
                  alt="A recent cake from Meem Bakers"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-chocolate-dark/0 transition-colors group-hover:bg-chocolate-dark/25" />
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={site.instagram} variant="outline" className="w-full max-w-xs sm:w-auto">
            Follow Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
