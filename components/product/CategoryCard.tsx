import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Category } from "@/lib/data";

export function CategoryCard({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  return (
    <Link
      href={category.href}
      className={cn(
        "group relative block overflow-hidden rounded-xl transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        className,
      )}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 280px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent transition-colors duration-500 group-hover:from-ink/90" />
        <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
          <p className="text-[0.58rem] tracking-[0.22em] text-gold uppercase">Collection</p>
          <h3 className="font-display mt-1.5 text-xl font-semibold text-cream sm:text-2xl">{category.name}</h3>
          <p className="mt-1.5 max-w-[16rem] text-xs leading-relaxed text-pretty text-cream/70 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
