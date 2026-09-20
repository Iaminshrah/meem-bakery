import type { Metadata } from "next";
import { LegalBlock, LegalPage } from "@/components/page/LegalPage";

export const metadata: Metadata = {
  title: "Returns",
  description: "The Meem Bakers approach to fresh food, quality, and making things right.",
};

export default function ReturnsPage() {
  return (
    <LegalPage
      eyebrow="Customer Care"
      title="Returns"
      description="Because everything is baked fresh, we do not accept returns of uneaten cake. We do make things right when we should have done better."
    >
      <LegalBlock title="Freshly baked, made to order">
        <p>
          Cakes and treats are perishable and prepared specifically for you. We cannot
          accept returns for a change of mind once baking has begun.
        </p>
      </LegalBlock>
      <LegalBlock title="If something is not right">
        <p>
          If a cake arrives damaged, incorrect, or not as confirmed, write to us within
          24 hours with photographs. We will replace, remake, or refund as the situation
          deserves.
        </p>
      </LegalBlock>
      <LegalBlock title="Cancellations">
        <p>
          Standard cakes can be cancelled up to 24 hours before the bake. Custom and
          wedding cakes follow the timeline agreed in your confirmation email.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
