import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { FilterBar } from "@/components/product/FilterBar";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getProductsByCategory, type CakeFlavor } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Cakes",
  description:
    "Celebration, birthday, wedding and signature cakes from Meem Bakers — baked to order.",
};

const flavors: Array<{ label: string; value?: CakeFlavor | "all" }> = [
  { label: "All Cakes", value: "all" },
  { label: "Chocolate", value: "chocolate" },
  { label: "Red Velvet", value: "red-velvet" },
  { label: "Lotus Biscoff", value: "lotus" },
  { label: "Vanilla", value: "vanilla" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Lemon", value: "lemon" },
  { label: "Caramel", value: "caramel" },
  { label: "Specialty", value: "specialty" },
];

export default async function CakesPage({
  searchParams,
}: {
  searchParams: Promise<{ flavor?: string; collection?: string }>;
}) {
  const { flavor, collection } = await searchParams;
  let cakes = getProductsByCategory("cakes");

  if (flavor && flavor !== "all") {
    cakes = cakes.filter((product) => product.flavor === flavor);
  }

  if (collection) {
    cakes = cakes.filter((product) => product.tags.includes(collection));
  }

  const filters = flavors.map((item) => ({
    label: item.label,
    href: item.value === "all" ? "/cakes" : `/cakes?flavor=${item.value}`,
    active: (flavor ?? "all") === (item.value ?? "all") && !collection,
  }));

  return (
    <main id="main">
      <PageHero
        eyebrow="Cakes"
        title="Cakes For Every Celebration"
        description="Freshly baked daily. 1 pound (~0.5 kg) Rs. 1,500 · 2 pounds (~1 kg) Rs. 3,000."
        image={images.collection.chocolate}
        imageAlt="A rich chocolate cake from the Meem Bakers collection"
      />
      <section className="bg-ink py-16 sm:py-24">
        <Container>
          <Reveal>
            <FilterBar filters={filters} />
          </Reveal>
          {cakes.length > 0 ? (
            <ProductGrid products={cakes} className="mt-12" />
          ) : (
            <p className="mt-16 text-center text-cream/60">
              Nothing in this flavour yet. Explore the full cake collection instead.
            </p>
          )}
        </Container>
      </section>
    </main>
  );
}
