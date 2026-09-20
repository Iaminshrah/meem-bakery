import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Your Bag",
  description: "Review cakes and treats selected from the Meem Bakers collection.",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Bag"
        title="Your Selections"
        description="Everything you’ve chosen, ready when you are."
      />
      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <Reveal>
            <CartView />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
