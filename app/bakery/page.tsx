import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { FilterBar } from "@/components/product/FilterBar";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getProductsByCategory } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Bakery",
  description:
    "Croissants, donuts, cupcakes, and sundaes from Meem Bakers.",
};

const collections = [
  { label: "All", value: "all" },
  { label: "Pastries", value: "pastries" },
  { label: "Cupcakes", value: "cupcakes" },
  { label: "Sundaes", value: "sundaes" },
];

export default async function BakeryPage({
  searchParams,
}: {
  searchParams: Promise<{ collection?: string }>;
}) {
  const { collection } = await searchParams;
  let items = getProductsByCategory("bakery");

  if (collection && collection !== "all") {
    items = items.filter((product) => product.tags.includes(collection));
  }

  const filters = collections.map((item) => ({
    label: item.label,
    href: item.value === "all" ? "/bakery" : `/bakery?collection=${item.value}`,
    active: (collection ?? "all") === item.value,
  }));

  return (
    <main id="main">
      <PageHero
        eyebrow="Bakery"
        title="Treats From Our Kitchen"
        description="Croissants, donuts, cupcakes, and sundaes — made fresh for you."
        image={images.bakeryCounter}
        imageAlt="Fresh bakery treats"
      />
      <section className="bg-ink py-16 sm:py-24">
        <Container>
          <Reveal>
            <FilterBar filters={filters} />
          </Reveal>
          {items.length > 0 ? (
            <ProductGrid products={items} className="mt-12" />
          ) : (
            <p className="mt-16 text-center text-cream/60">
              Nothing in this collection today. Browse the full bakery instead.
            </p>
          )}
        </Container>
      </section>
    </main>
  );
}
