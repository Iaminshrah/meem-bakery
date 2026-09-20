import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  imgClassName,
  priority = false,
}: {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Meem Bakers home"
      className={cn(
        "inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        className,
      )}
    >
      <Image
        src="/logo.png"
        alt="Meem Bakers"
        width={462}
        height={208}
        priority={priority}
        className={cn(
          "h-9 w-auto max-w-[min(9.25rem,42vw)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:h-14 sm:max-w-none lg:h-16",
          imgClassName,
        )}
      />
    </Link>
  );
}
