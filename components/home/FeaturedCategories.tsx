import { CategoryCard } from "@/components/product/CategoryCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/lib/data";

export function FeaturedCategories() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Menu"
            title="Cakes, Treats, And Sundaes"
            description="From birthdays to a simple sundae — something sweet for every moment."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 70}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
