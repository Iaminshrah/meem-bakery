import type { Metadata } from "next";
import { LegalBlock, LegalPage } from "@/components/page/LegalPage";

export const metadata: Metadata = {
  title: "Delivery Information",
  description: "How Meem Bakers delivers cakes and treats, and how to care for them on arrival.",
};

export default function DeliveryPage() {
  return (
    <LegalPage
      eyebrow="Customer Care"
      title="Delivery Information"
      description="Cakes travel in chilled boxes, kept upright, and only when they will arrive well."
    >
      <LegalBlock title="Where we deliver">
        <p>
          We deliver locally. If you are further away, ask — we will tell you honestly
          whether the cake will travel well.
        </p>
      </LegalBlock>
      <LegalBlock title="Timing">
        <p>
          Delivery times are booked when your order is confirmed. Celebration cakes are
          planned to arrive 2–4 hours before the event unless you prefer otherwise.
        </p>
      </LegalBlock>
      <LegalBlock title="Care on arrival">
        <p>
          Keep the box level, refrigerate if you will serve later, and bring to room
          temperature 20–30 minutes before cutting. Cream cakes prefer the cool.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
