"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { openWhatsApp } from "@/lib/whatsapp";

const fieldClass =
  "h-12 w-full rounded-md border border-gold/15 bg-chocolate-dark px-4 text-base text-cream outline-none focus-visible:ring-2 focus-visible:ring-gold sm:text-sm";

const labelClass =
  "mb-2 block text-[0.68rem] tracking-[0.2em] text-cream/70 uppercase";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    openWhatsApp(
      [
        "Hello Meem Bakers, I have a question.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
    );
    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-gold/15 bg-chocolate/35 p-4 sm:p-8">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-gold/15 bg-chocolate-dark px-4 py-3 text-base text-cream outline-none focus-visible:ring-2 focus-visible:ring-gold sm:text-sm"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        <WhatsAppIcon />
        Send Message
      </Button>
      {status === "success" ? (
        <p className="text-sm text-cream/60" role="status">
          WhatsApp is opening with your message.
        </p>
      ) : null}
    </form>
  );
}
