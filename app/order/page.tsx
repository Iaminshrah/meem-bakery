import type { Metadata } from "next";
import { OrderForm } from "@/components/forms/OrderForm";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Order Now",
  description: "Order a custom cake from Meem Bakers — flavour, finish, and timing.",
};

export default function OrderPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Custom Cake"
        title="Dream It. We’ll Bake It."
        description="Tell us the occasion, the flavour, and the feeling. Place order opens WhatsApp with your details."
        image={images.customCta}
        imageAlt="A celebration cake ready for a special occasion"
      />
      <section className="bg-ink py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <OrderForm />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
