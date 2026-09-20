import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call or WhatsApp Meem Bakers about an order or a custom cake.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="We’d Love To Hear From You"
        description="Questions about an order, a flavour, or a wedding cake — we’re here to help."
      />
      <section className="bg-ink py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl text-cream sm:text-4xl">Get In Touch</h2>
            <div className="gold-rule-short mt-5" />
            <dl className="mt-8 space-y-6 text-cream/70">
              <div>
                <dt className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">Pickup</dt>
                <dd className="mt-1">{site.address}</dd>
              </div>
              <div>
                <dt className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">Orders</dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
              <div>
                <dt className="text-[0.68rem] tracking-[0.16em] text-gold uppercase sm:tracking-[0.22em]">Phone / WhatsApp</dt>
                <dd className="mt-1">
                  <a className="transition-colors hover:text-gold" href={`tel:${site.phoneHref}`}>
                    {site.phone}
                  </a>
                  {" · "}
                  <a
                    className="transition-colors hover:text-gold"
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
