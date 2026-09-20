"use client";

import Image from "next/image";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { useCart } from "@/lib/cart-context";
import {
  cakeSizes,
  isPricedByPound,
  type CakeSizeId,
  type Product,
} from "@/lib/data";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [added, setAdded] = useState(false);
  const [sizeId, setSizeId] = useState<CakeSizeId>("1lb");
  const wishlisted = isWishlisted(product.id);
  const pricedByPound = isPricedByPound(product);

  function handleAdd() {
    addToCart(product.id, pricedByPound ? sizeId : undefined);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-gold/15 bg-chocolate/45 shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[0_14px_32px_rgba(0,0,0,0.45)]">
      <div className="relative aspect-square overflow-hidden bg-chocolate-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 320px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={wishlisted}
          className="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-cream backdrop-blur-sm transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <Heart
            className={cn("h-3.5 w-3.5", wishlisted && "fill-gold text-gold")}
            strokeWidth={1.6}
          />
        </button>
      </div>
      <div className="flex min-w-0 flex-1 flex-col px-3.5 pt-3.5 pb-3.5 sm:px-4">
        <h3 className="font-display text-lg font-semibold tracking-wide text-pretty text-cream sm:text-xl">{product.name}</h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-cream/60">{product.description}</p>
        {pricedByPound ? (
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            {cakeSizes.map((size) => (
              <button
                key={size.id}
                type="button"
                onClick={() => setSizeId(size.id)}
                className={cn(
                  "min-w-0 rounded-md border px-2 py-1.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                  sizeId === size.id
                    ? "border-gold bg-gold/15 text-gold"
                    : "border-gold/15 text-cream/60 hover:border-gold/40",
                )}
              >
                <span className="block text-[0.62rem] font-semibold tracking-wide uppercase">
                  {size.label}
                </span>
                <span className="mt-0.5 block text-sm font-semibold text-gold">
                  {formatPrice(size.price)}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm font-semibold tracking-wide text-gold">
            {formatPrice(product.price)}
          </p>
        )}
        <div className="mt-3 flex items-center justify-end">
          <button
            type="button"
            onClick={handleAdd}
            aria-live="polite"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-gold/50 px-3 py-2 text-[0.68rem] font-semibold tracking-[0.16em] text-cream uppercase transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:w-auto"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={2} />
            {added ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}
