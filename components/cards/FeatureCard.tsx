import { Doodle } from "@/components/brand/Doodle";

export function FeatureCard({
  doodle,
  doodleWidth,
  doodleHeight,
  title,
  description,
}: {
  doodle: string;
  doodleWidth: number;
  doodleHeight: number;
  title: string;
  description: string;
}) {
  return (
    <article className="group rounded-xl border border-gold/15 bg-chocolate/35 p-5 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] sm:p-8">
      <div className="mb-5 flex h-20 items-end sm:mb-6 sm:h-24">
        <Doodle
          src={doodle}
          width={doodleWidth}
          height={doodleHeight}
          className="h-16 w-auto transition-transform duration-500 group-hover:-translate-y-1 sm:h-[5.5rem]"
        />
      </div>
      <h3 className="font-display text-xl font-semibold text-pretty text-cream sm:text-2xl xl:text-3xl">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-cream/60">{description}</p>
    </article>
  );
}
