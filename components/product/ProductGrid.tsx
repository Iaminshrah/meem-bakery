import { cn } from "@/lib/cn";
import type { Product } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  className,
}: {
  products: Product[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {products.map((product, index) => (
        <Reveal key={product.id} delay={Math.min(index, 5) * 70} className="h-full min-w-0">
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}
