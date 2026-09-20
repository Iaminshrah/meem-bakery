"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getCartItemPrice, useCart } from "@/lib/cart-context";
import { cakeSizes } from "@/lib/data";
import { formatPrice } from "@/lib/format";

export function CartView() {
  const { items, updateQuantity, removeFromCart, cartTotal, clearCart, ready } = useCart();

  if (!ready) {
    return (
      <p className="py-8 text-center text-cream/60" role="status">
        Loading your bag…
      </p>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="font-display text-2xl text-cream sm:text-3xl">Your bag is empty</p>
        <p className="mt-3 text-cream/60">Add a cake, treat, or sundae and it will wait for you here.</p>
        <div className="mt-8">
          <Button href="/cakes">Explore Cakes</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <ul className="space-y-5 lg:col-span-8">
        {items.map((item) => {
          const size = cakeSizes.find((entry) => entry.id === item.sizeId);
          const price = getCartItemPrice(item);
          return (
            <li
              key={`${item.product.id}-${item.sizeId ?? "standard"}`}
              className="flex flex-col gap-4 rounded-xl border border-gold/15 bg-chocolate/35 p-4 sm:flex-row sm:gap-6"
            >
              <span className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-28">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </span>
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-xl text-pretty text-cream sm:text-2xl">{item.product.name}</h2>
                    {size ? (
                      <p className="mt-1 text-sm text-cream/60">
                        {size.label} ({size.weight})
                      </p>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id, item.sizeId)}
                    aria-label={`Remove ${item.product.name}`}
                    className="rounded-md p-1 text-cream/60 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-1 text-sm text-cream/60">{formatPrice(price)}</p>
                <div className="mt-auto flex items-center gap-3 pt-4">
                  <div className="inline-flex items-center rounded-md border border-gold/15">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      className="p-2 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1, item.sizeId)
                      }
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      className="p-2 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1, item.sizeId)
                      }
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="text-sm font-medium text-gold">
                    {formatPrice(price * item.quantity)}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <aside className="h-fit rounded-xl border border-gold/20 bg-chocolate-dark p-5 text-cream sm:p-6 lg:col-span-4">
        <h2 className="font-display text-2xl sm:text-3xl">Order summary</h2>
        <div className="gold-rule-short mt-4" />
        <div className="mt-6 flex justify-between text-sm">
          <span className="text-cream/70">Subtotal</span>
          <span>{formatPrice(cartTotal)}</span>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-cream/55">
          Freshly baked daily. Checkout to send your order on WhatsApp.
        </p>
        <div className="mt-8 space-y-3">
          <Button href="/checkout" className="w-full">
            Checkout
          </Button>
          <Button variant="outline" className="w-full" onClick={clearCart}>
            Clear bag
          </Button>
        </div>
      </aside>
    </div>
  );
}
