"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { todayInputValue } from "@/lib/date";
import { openWhatsApp } from "@/lib/whatsapp";

const fieldClass =
  "h-12 w-full max-w-full rounded-md border border-gold/15 bg-chocolate-dark px-4 text-base text-cream outline-none focus-visible:ring-2 focus-visible:ring-gold sm:text-sm";

const areaClass =
  "w-full rounded-md border border-gold/15 bg-chocolate-dark px-4 py-3 text-base text-cream outline-none focus-visible:ring-2 focus-visible:ring-gold sm:text-sm";

const labelClass =
  "mb-2 block text-[0.68rem] tracking-[0.2em] text-cream/70 uppercase";

export function OrderForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const minDate = todayInputValue();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("orderEmail") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const method = String(data.get("method") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();
    const occasion = String(data.get("occasion") ?? "").trim();
    const flavour = String(data.get("flavour") ?? "").trim();
    const size = String(data.get("size") ?? "").trim();
    const servings = String(data.get("servings") ?? "").trim();
    const date = String(data.get("date") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();

    const message = [
      "Hello Meem Bakers, I would like to order a custom cake.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      ...(email ? [`Email: ${email}`] : []),
      `Pickup or delivery: ${method}`,
      `Area / address: ${address}`,
      `Occasion: ${occasion}`,
      `Flavour: ${flavour}`,
      `Size: ${size}`,
      `Servings: ${servings}`,
      `Needed by: ${date}`,
      "",
      `Idea: ${notes}`,
    ].join("\n");

    openWhatsApp(message);
    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-xl border border-gold/15 bg-chocolate/35 p-4 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" required autoComplete="name" />
        <Field id="phone" label="Phone" type="tel" required autoComplete="tel" />
        <Field id="orderEmail" label="Email (optional)" type="email" autoComplete="email" />
        <div>
          <label htmlFor="method" className={labelClass}>
            Pickup or delivery
          </label>
          <select id="method" name="method" required className={fieldClass}>
            <option value="">Select</option>
            <option>Pickup</option>
            <option>Delivery</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="address" className={labelClass}>
            Area / address
          </label>
          <textarea
            id="address"
            name="address"
            required
            autoComplete="street-address"
            rows={3}
            placeholder="Your area, or the full delivery address"
            className={areaClass}
          />
        </div>
        <div>
          <label htmlFor="occasion" className={labelClass}>
            Occasion
          </label>
          <select id="occasion" name="occasion" required className={fieldClass}>
            <option value="">Select</option>
            <option>Birthday</option>
            <option>Wedding</option>
            <option>Anniversary</option>
            <option>Corporate</option>
            <option>Just because</option>
          </select>
        </div>
        <div>
          <label htmlFor="flavour" className={labelClass}>
            Flavour
          </label>
          <select id="flavour" name="flavour" required className={fieldClass}>
            <option value="">Select</option>
            <option>Vanilla Sponge</option>
            <option>Red Velvet</option>
            <option>Pineapple Cream</option>
            <option>Lemon Cake</option>
            <option>Chocolate Fudge</option>
            <option>Black Forest</option>
            <option>Lotus Biscoff</option>
            <option>Butterscotch</option>
            <option>KitKat Cake</option>
            <option>Oreo Cake</option>
            <option>Custom — I’ll describe it</option>
          </select>
        </div>
        <div>
          <label htmlFor="size" className={labelClass}>
            Size
          </label>
          <select id="size" name="size" required className={fieldClass}>
            <option value="">Select</option>
            <option>1 Pound (~0.5 kg) — Rs. 1,500</option>
            <option>2 Pounds (~1 kg) — Rs. 3,000</option>
          </select>
        </div>
        <Field id="servings" label="Servings" type="number" required min={1} />
        <Field id="date" label="Needed by" type="date" required min={minDate} />
      </div>
      <div>
        <label htmlFor="notes" className={labelClass}>
          Your idea
        </label>
        <textarea
          id="notes"
          name="notes"
          required
          rows={5}
          placeholder="Colours, inscription, dietary notes, anything that matters..."
          className={areaClass}
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        <WhatsAppIcon />
        Place Order
      </Button>
      {status === "success" ? (
        <p className="text-sm text-cream/60" role="status">
          WhatsApp is opening with your custom cake details.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  min,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  min?: number | string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        min={min}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </div>
  );
}
