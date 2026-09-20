import type { Metadata } from "next";
import { LegalBlock, LegalPage } from "@/components/page/LegalPage";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers about ordering, custom cakes, allergens, and delivery from Meem Bakers.",
};

export default function FaqPage() {
  return (
    <LegalPage
      eyebrow="Customer Care"
      title="Frequently Asked Questions"
      description="A short guide to ordering, custom cakes, and how we look after your celebration."
    >
      <LegalBlock title="How far in advance should I order?">
        <p>
          Most cakes are happiest with 48 hours’ notice. Wedding and fully custom cakes
          need 7–14 days so we can plan the flavour, finish, and bake.
        </p>
      </LegalBlock>
      <LegalBlock title="Do you offer allergen-aware baking?">
        <p>
          Our kitchen handles gluten, dairy, eggs, and nuts. We can often adapt a recipe —
          tell us in the order notes and we will confirm what is possible before we bake.
        </p>
      </LegalBlock>
      <LegalBlock title="Can I pick up my order?">
        <p>
          Yes. We’ll set a time with you so the cake is finished, chilled, and boxed when
          you arrive.
        </p>
      </LegalBlock>
      <LegalBlock title="How do custom cakes work?">
        <p>
          Share the occasion, servings, flavour, and any reference images on the order
          page. Place order opens WhatsApp so we can reply with a quote and a date.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
