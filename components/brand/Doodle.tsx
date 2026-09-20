import Image from "next/image";
import { cn } from "@/lib/cn";

export const doodles = {
  cakeSlice: "/doodles/cake-slice.png",
  donut: "/doodles/donut.png",
  strawberry: "/doodles/strawberry.png",
  baking: "/doodles/baking-badge.png",
  wheat: "/doodles/wheat.png",
  spatula: "/doodles/spatula.png",
} as const;

export function Doodle({
  src,
  className,
  width,
  height,
}: {
  src: string;
  className?: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      aria-hidden="true"
      className={cn("pointer-events-none select-none mix-blend-screen", className)}
    />
  );
}
