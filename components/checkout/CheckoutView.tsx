"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { getCartItemPrice, useCart } from "@/lib/cart-context";
import { cakeSizes } from "@/lib/data";
import { todayInputValue } from "@/lib/date";
import { formatPrice } from "@/lib/format";
import { openWhatsApp } from "@/lib/whatsapp";

const fieldClass =
  "h-12 w-full max-w-full rounded-md border border-gold/15 bg-chocolate-dark px-4 text-base text-cream outline-none focus-visible:ring-2 focus-visible:ring-gold sm:text-sm";

const labelClass =
  "mb-2 block text-[0.68rem] tracking-[0.2em] text-cream/70 uppercase";

export function CheckoutView() {
  const router = useRouter();
  const { items, cartTotal, clearCart, ready } = useCart();
  const [placed, setPlaced] = useState(false);
  const [method, setMethod] = useState("");
  const minDate = todayInputValue();

  useEffect(() => {
    if (!ready) return;
    if (items.length === 0 && !placed) {
      router.replace("/cart");
    }
  }, [ready, items.length, placed, router]);

  if (!ready) {
    return (
      <p className="py-8 text-center text-cream/60" role="status">
        Loading your bag…
      </p>
    );
  }

  if (placed) {
    return (
      <div className="py-8 text-center">
        <p className="font-display text-2xl text-cream sm:text-3xl">Order sent</p>
        <p className="mt-3 text-cream/60" role="status">
          WhatsApp is opening with your order. Your bag is now empty.
        </p>
        <div className="mt-8">
          <Button href="/cakes">Explore Cakes</Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return null;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("fullName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const nextMethod = String(data.get("method") ?? "").trim();
    const area = String(data.get("area") ?? "").trim();
    const neededBy = String(data.get("neededBy") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();

    const lines = items.map((item) => {
      const size = cakeSizes.find((entry) => entry.id === item.sizeId);
      const price = getCartItemPrice(item) * item.quantity;
      const sizeLabel = size ? ` (${size.label})` : "";
      return `• ${item.product.name}${sizeLabel} × ${item.quantity} — ${formatPrice(price)}`;
    });

    const message = [
      "Hello Meem Bakers, I would like to place an order.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      ...(email ? [`Email: ${email}`] : []),
      `Pickup or delivery: ${nextMethod}`,
      ...(area ? [`Area / address: ${area}`] : []),
      `Needed by: ${neededBy}`,
      "",
      "Items:",
      ...lines,
      "",
      `Total: ${formatPrice(cartTotal)}`,
      ...(notes ? ["", `Notes: ${notes}`] : []),
    ].join("\n");

    openWhatsApp(message);
    clearCart();
    setPlaced(true);
    window.scrollTo(0, 0);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <form
        onSubmit={handleSubmit}
        className="grid gap-5 rounded-xl border border-gold/15 bg-chocolate/35 p-4 sm:p-8 lg:col-span-7"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              required
              autoComplete="name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={fieldClass}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={labelClass}>
              Email <span className="normal-case tracking-normal text-cream/45">(optional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="method" className={labelClass}>
              Pickup or delivery
            </label>
            <select
              id="method"
              name="method"
              required
              value={method}
              onChange={(event) => setMethod(event.target.value)}
              className={fieldClass}
            >
              <option value="">Select</option>
              <option>Pickup</option>
              <option>Delivery</option>
            </select>
          </div>
          <div>
            <label htmlFor="neededBy" className={labelClass}>
              Needed by
            </label>
            <input
              id="neededBy"
              name="neededBy"
              type="date"
              required
              min={minDate}
              className={fieldClass}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="area" className={labelClass}>
              Area / address
            </label>
            <input
              id="area"
              name="area"
              required={method === "Delivery"}
              autoComplete="street-address"
              className={fieldClass}
              placeholder={
                method === "Delivery"
                  ? "Delivery address"
                  : "For delivery, or pickup notes"
              }
            />
          </div>
        </div>
        <div>
          <label htmlFor="notes" className={labelClass}>
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Inscription, dietary notes, anything we should know..."
            className="w-full rounded-md border border-gold/15 bg-chocolate-dark px-4 py-3 text-base text-cream outline-none focus-visible:ring-2 focus-visible:ring-gold sm:text-sm"
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          <WhatsAppIcon />
          Place Order
        </Button>
      </form>

      <aside className="h-fit rounded-xl border border-gold/20 bg-chocolate-dark p-5 text-cream sm:p-6 lg:col-span-5">
        <h2 className="font-display text-2xl sm:text-3xl">Your order</h2>
        <div className="gold-rule-short mt-4" />
        <ul className="mt-6 space-y-4">
          {items.map((item) => {
            const size = cakeSizes.find((entry) => entry.id === item.sizeId);
            const price = getCartItemPrice(item);
            return (
              <li
                key={`${item.product.id}-${item.sizeId ?? "standard"}`}
                className="flex gap-3"
              >
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-lg text-cream">{item.product.name}</p>
                  <p className="text-sm text-cream/60">
                    {size ? `${size.label} · ` : ""}
                    Qty {item.quantity}
                  </p>
                </div>
                <p className="text-sm text-gold">{formatPrice(price * item.quantity)}</p>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 flex justify-between border-t border-gold/15 pt-4 text-sm">
          <span className="text-cream/70">Total</span>
          <span className="font-semibold text-gold">{formatPrice(cartTotal)}</span>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-cream/55">
          Place order opens WhatsApp with your details so we can confirm the bake.
        </p>
      </aside>
    </div>
  );
}
