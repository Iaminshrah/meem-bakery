import Link from "next/link";
import { cn } from "@/lib/cn";

type Filter = {
  label: string;
  href: string;
  active: boolean;
};

export function FilterBar({ filters }: { filters: Filter[] }) {
  return (
    <nav className="flex flex-wrap justify-center gap-2" aria-label="Filter collection">
      {filters.map((filter) => (
        <Link
          key={filter.href + filter.label}
          href={filter.href}
          className={cn(
            "rounded-full border px-3.5 py-2 text-[0.62rem] font-semibold tracking-[0.1em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.16em]",
            filter.active
              ? "border-gold bg-gold text-ink"
              : "border-gold/20 text-cream/70 hover:border-gold/50 hover:text-cream",
          )}
        >
          {filter.label}
        </Link>
      ))}
    </nav>
  );
}
