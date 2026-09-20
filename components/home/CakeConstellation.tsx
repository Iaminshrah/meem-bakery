import { Doodle, doodles } from "@/components/brand/Doodle";

const orbit = [
  { src: doodles.donut, width: 160, height: 130 },
  { src: doodles.cakeSlice, width: 150, height: 170 },
  { src: doodles.strawberry, width: 120, height: 120 },
  { src: doodles.wheat, width: 180, height: 130 },
  { src: doodles.spatula, width: 80, height: 170 },
  { src: doodles.baking, width: 240, height: 180 },
] as const;

export function CakeConstellation({ children }: { children: React.ReactNode }) {
  return (
    <div className="cake-orbit @container relative mx-auto w-full max-w-[min(100%,20rem)] sm:max-w-[22.5rem] md:max-w-[24rem] lg:max-w-[19.75rem] xl:max-w-[24.5rem]">
      <div className="cake-orbit-track pointer-events-none" aria-hidden="true">
        <span className="cake-orbit-frame" />
        {orbit.map((item, index) => (
          <div
            key={item.src}
            className="cake-orbit-item"
            style={{ animationDelay: `${(-index * 56) / orbit.length}s` }}
          >
            <Doodle
              src={item.src}
              width={item.width}
              height={item.height}
              className="h-auto max-h-full w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
