"use client";

import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { SearchDialog } from "@/components/layout/SearchDialog";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useCart } from "@/lib/cart-context";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const open = menuPath === pathname;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500",
          scrolled || open
            ? "border-b border-gold/15 bg-chocolate-dark/95 backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <Container className="flex h-16 min-w-0 items-center justify-between gap-1.5 sm:h-20 sm:gap-4 lg:h-24">
          <Logo className="min-w-0" priority />

          <nav className="hidden items-center gap-5 lg:flex xl:gap-9" aria-label="Primary">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs font-medium tracking-[0.12em] uppercase transition-colors hover:text-gold xl:text-[0.95rem] xl:tracking-[0.16em]",
                    active ? "text-gold" : "text-cream",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1 sm:gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full text-cream transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Search className="h-5 w-5" strokeWidth={1.6} />
            </button>
            <Link
              href="/cart"
              aria-label={`Shopping bag, ${cartCount} items`}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-cream transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.6} />
              {cartCount > 0 ? (
                <span className="soft-pop absolute top-1 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[0.6rem] font-semibold text-ink">
                  {cartCount}
                </span>
              ) : null}
            </Link>
            <div className="hidden sm:block">
              <Button href="/order" className="px-5 py-2.5">
                Order Now
              </Button>
            </div>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-cream lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setMenuPath(open ? null : pathname)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-chocolate-dark pt-[calc(4.75rem+env(safe-area-inset-top))] pb-[env(safe-area-inset-bottom)] lg:hidden">
          <nav className="flex min-h-full flex-col px-6 py-8 sm:px-8 sm:py-10" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuPath(null)}
                className="border-b border-gold/10 py-4 font-display text-[1.85rem] font-semibold text-cream transition-colors hover:text-gold sm:py-5 sm:text-4xl"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-10">
              <Button href="/order" className="w-full">
                Order Now
              </Button>
            </div>
          </nav>
        </div>
      ) : null}

      {searchOpen ? (
        <SearchDialog onClose={() => setSearchOpen(false)} />
      ) : null}
    </>
  );
}
