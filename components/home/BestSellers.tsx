import { ProductGrid } from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBestsellers } from "@/lib/data";

export function BestSellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="bg-chocolate-dark py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Most Loved"
            title="Best Sellers"
            description="The cakes we’re asked for again and again — layered, finished, and boxed with care."
          />
        </Reveal>
        <Reveal className="mt-14">
          <ProductGrid products={bestsellers.slice(0, 6)} />
        </Reveal>
        <div className="mt-12 flex justify-center">
          <Button href="/cakes" variant="outline" className="w-full max-w-xs sm:w-auto">
            View All Cakes
          </Button>
        </div>
      </Container>
    </section>
  );
}
