"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    openWhatsApp(
      [
        "Hello Meem Bakers, please send me updates about new cakes and offers.",
        "",
        `Email: ${email.trim()}`,
      ].join("\n"),
    );
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="bg-chocolate py-16 sm:py-20">
      <Container className="grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">Stay In Touch</p>
          <h2 className="font-display mt-3 text-3xl text-balance text-cream sm:text-4xl lg:text-5xl">
            New cakes, first.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
            Send your email on WhatsApp and we’ll tell you when something new is ready.
          </p>
        </Reveal>
        <Reveal delay={100}>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setStatus("idle");
            }}
            placeholder="Your email"
            className="h-12 min-w-0 flex-1 rounded-md border border-gold/25 bg-chocolate-dark px-4 text-base text-cream outline-none placeholder:text-cream/40 focus-visible:ring-2 focus-visible:ring-gold sm:text-sm"
          />
          <Button type="submit" className="h-12 w-full sm:w-auto">
            <WhatsAppIcon />
            Subscribe
          </Button>
        </form>
        {status === "success" ? (
          <p className="mt-3 text-sm text-gold" role="status">
            WhatsApp is opening with your email so we can keep you posted.
          </p>
        ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
