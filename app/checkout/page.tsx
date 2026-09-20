import type { Metadata } from "next";
import { CheckoutView } from "@/components/checkout/CheckoutView";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Share your details and place your Meem Bakers order on WhatsApp.",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Checkout"
        title="Place Your Order"
        description="Tell us how to reach you. We’ll open WhatsApp with your bag ready to send."
      />
      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <Reveal>
            <CheckoutView />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
