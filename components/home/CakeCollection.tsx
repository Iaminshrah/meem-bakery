import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { cakeCollection } from "@/lib/data";

export function CakeCollection() {
  return (
    <section className="bg-chocolate-dark py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Flavours"
            title="Cake Collection"
            description="Chocolate drip, Oreo, red velvet, lotus, lemon, caramel — and cakes imagined just for you."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
          {cakeCollection.map((item, index) => (
            <Reveal key={item.id} delay={index * 50} className={cn("min-w-0", item.span)}>
              <Link
                href={item.href}
                className="group relative block h-full min-h-[14rem] overflow-hidden rounded-xl transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:min-h-[16rem]"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-gold uppercase sm:text-xs sm:tracking-[0.28em]">Flavour</p>
                  <h3 className="font-display mt-1 text-2xl font-semibold text-pretty text-cream sm:text-4xl">{item.name}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
