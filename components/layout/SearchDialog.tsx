"use client";

import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { cakeSizes, isPricedByPound, searchProducts } from "@/lib/data";
import { formatPrice } from "@/lib/format";

export function SearchDialog({ onClose }: { onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchProducts(query).slice(0, 6), [query]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-3 pt-[calc(4.5rem+env(safe-area-inset-top))] sm:px-4 sm:pt-32">
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[min(34rem,calc(100dvh-5.5rem-env(safe-area-inset-top)))] w-full max-w-xl overflow-hidden rounded-xl border border-gold/20 bg-chocolate-dark shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-gold/10 px-4 py-4 sm:px-5">
          <Search className="h-4 w-4 text-gold" />
          <h2 id={titleId} className="sr-only">
            Search the bakery
          </h2>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search cakes, treats & sundaes..."
            className="w-full min-w-0 bg-transparent text-base text-cream outline-none placeholder:text-cream/35 sm:text-sm"
            aria-label="Search products"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="rounded-md p-1 text-cream/70 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-[22rem] overflow-y-auto p-3">
          {query && results.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-cream/55">
              No matches for “{query}”.
            </p>
          ) : null}
          {results.map((product) => (
            <Link
              key={product.id}
              href={product.category === "cakes" ? "/cakes" : "/bakery"}
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:gap-4"
            >
              <span className="relative h-14 w-14 overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg text-cream">
                  {product.name}
                </span>
                <span className="block truncate text-xs text-cream/55">
                  {product.description}
                </span>
              </span>
              <span className="shrink-0 text-xs text-gold sm:text-sm">
                {formatPrice(
                  isPricedByPound(product) ? cakeSizes[0].price : product.price,
                )}
              </span>
            </Link>
          ))}
          {!query ? (
            <p className="px-3 py-8 text-center text-sm text-cream/55">
              Try “lotus”, “croissant”, or “red velvet”.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
