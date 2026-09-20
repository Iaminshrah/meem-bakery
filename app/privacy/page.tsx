import type { Metadata } from "next";
import { LegalBlock, LegalPage } from "@/components/page/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Meem Bakers collects and uses the details you share with us.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Customer Care"
      title="Privacy Policy"
      description="We keep only what we need to bake, deliver, and reply to you — nothing more."
    >
      <LegalBlock title="What we collect">
        <p>
          Name, phone number, email if you share it, pickup or delivery notes, order
          details, and any dietary information you choose to send. Orders and messages
          reach us through WhatsApp.
        </p>
      </LegalBlock>
      <LegalBlock title="How we use it">
        <p>
          To confirm cakes, arrange pickup or delivery, and reply to your questions. We
          do not sell your details. We do not run a separate mailing list — if you ask
          for updates, that request stays in our WhatsApp chat with you.
        </p>
      </LegalBlock>
      <LegalBlock title="How long we keep it">
        <p>
          We keep order notes as long as we need them to fulfil your bake and look after
          food safety. Message us on WhatsApp if you want details updated or removed.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
