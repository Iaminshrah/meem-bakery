import { Crown, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import { CakeConstellation } from "@/components/home/CakeConstellation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

const details = [
  { icon: Sparkles, label: "Freshly Baked" },
  { icon: Crown, label: "Premium Ingredients" },
  { icon: Heart, label: "Made With Love" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-x-clip bg-gradient-to-b from-[#1c0f0a] via-[#20120a] to-[#120a06] pt-[calc(5.5rem+env(safe-area-inset-top))] pb-10 sm:pt-[calc(8rem+env(safe-area-inset-top))] sm:pb-16 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_78%_15%,rgba(201,162,39,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_8%_95%,rgba(59,33,22,0.85),transparent_45%)]" />
      <div className="damask-pattern pointer-events-none absolute inset-0 opacity-[0.05]" />

      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-gold/25 px-4 py-8 shadow-[0_50px_140px_rgba(0,0,0,0.55)] sm:rounded-[2rem] sm:px-8 sm:py-14 md:px-10 lg:overflow-visible lg:px-10 lg:py-14 xl:px-14 xl:py-16">
          <div className="corner-flourish pointer-events-none absolute -top-2 -left-2 hidden opacity-70 lg:block" />
          <div className="corner-flourish pointer-events-none absolute -top-2 -right-2 hidden rotate-90 opacity-70 lg:block" />
          <div className="corner-flourish pointer-events-none absolute -bottom-2 -left-2 hidden -rotate-90 opacity-70 lg:block" />
          <div className="corner-flourish pointer-events-none absolute -right-2 -bottom-2 hidden rotate-180 opacity-70 lg:block" />

          <div className="relative grid min-w-0 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-6 xl:gap-10">
            <div className="min-w-0 lg:col-span-6">
              <div className="fade-up flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="hidden h-px w-8 bg-gold/60 sm:block sm:w-10" />
                <p className="font-display flex items-center gap-2 text-[0.58rem] font-semibold tracking-[0.18em] text-gold uppercase sm:text-[0.65rem] sm:tracking-[0.38em]">
                  <Crown className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                  A Royal Bakery
                </p>
                <span className="hidden h-px w-8 bg-gold/60 sm:block sm:w-10" />
              </div>

              <h1 className="fade-up fade-up-1 font-display mt-5 text-[clamp(2.05rem,8vw,2.6rem)] leading-[1.08] font-semibold tracking-wide text-balance text-cream sm:mt-8 sm:text-5xl md:text-6xl lg:text-[2.65rem] xl:text-[4.25rem] 2xl:text-[4.6rem]">
                Baked With{" "}
                <span className="bg-gradient-to-b from-gold-light via-gold to-[#8a6a1f] bg-clip-text text-transparent">
                  Love.
                </span>
                <span className="font-serif mt-2 block text-[clamp(1.55rem,6.4vw,2.05rem)] font-medium text-cream/90 italic sm:mt-3 sm:text-4xl md:text-5xl lg:text-[2.05rem] xl:text-[3.15rem] 2xl:text-[3.4rem]">
                  Crafted To Impress.
                </span>
              </h1>

              <p className="fade-up fade-up-2 mt-5 max-w-md text-base leading-relaxed text-pretty text-cream/70 sm:mt-7 sm:text-lg md:text-xl">
                Handcrafted cakes, sundaes and sweet creations made fresh for every
                special moment.
              </p>

              <div className="fade-up fade-up-3 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button href="/cakes" className="w-full px-9 py-4 text-xs sm:w-auto">
                  Explore Cakes
                </Button>
                <Button href="/order" variant="outline" className="w-full px-9 py-4 text-xs sm:w-auto">
                  Order Now
                </Button>
              </div>

              <ul className="fade-up fade-up-4 mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-4">
                {details.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.14em] text-cream/80 uppercase sm:text-xs sm:tracking-[0.2em]"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-up fade-up-2 min-w-0 px-[clamp(2.5rem,10vw,3.75rem)] pt-[clamp(2.7rem,10vw,3.8rem)] pb-[clamp(3.4rem,12vw,4.4rem)] lg:col-span-6 lg:px-3 lg:py-8 xl:px-5 xl:py-10">
              <CakeConstellation>
                <div className="relative w-full">
                  <div className="absolute inset-x-8 -bottom-3 h-12 rounded-full bg-gold/25 blur-3xl sm:inset-x-10 sm:-bottom-4 sm:h-16" />

                  <div className="cake-window relative border-[3px] border-gold/45 p-2.5 sm:p-3">
                    <div className="cake-window-photo relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={images.heroCake}
                        alt="An elegant celebration cake finished with dark chocolate and gold detail"
                        fill
                        priority
                        sizes="(max-width: 640px) 78vw, (max-width: 1280px) 50vw, 400px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                    </div>
                    <div className="cake-window-inset pointer-events-none absolute inset-1.5 border border-gold/20 sm:inset-2" />
                  </div>

                  <div className="gold-glow absolute -top-2 -left-2 z-10 flex h-14 w-14 flex-col items-center justify-center gap-0.5 rounded-full border border-gold/60 bg-chocolate-dark/95 text-center sm:-top-5 sm:-left-5 sm:h-20 sm:w-20 lg:-top-6 lg:-left-6 lg:h-24 lg:w-24">
                    <Crown className="h-3 w-3 text-gold sm:h-4 sm:w-4 lg:h-5 lg:w-5" strokeWidth={1.5} />
                    <span className="font-display text-[0.38rem] leading-tight font-semibold tracking-[0.08em] text-gold uppercase sm:text-[0.5rem] lg:text-[0.58rem]">
                      Royal
                      <span className="block">Selection</span>
                    </span>
                  </div>

                  <div className="absolute right-0 -bottom-4 max-w-[calc(100%-0.5rem)] rounded-lg border border-gold/30 bg-chocolate-dark/95 px-2.5 py-2 backdrop-blur-sm sm:right-2 sm:-bottom-6 sm:px-5 sm:py-3.5">
                    <p className="text-[0.48rem] tracking-[0.18em] text-gold uppercase sm:text-[0.58rem] sm:tracking-[0.28em]">
                      Since 2018
                    </p>
                    <p className="font-display mt-0.5 text-xs text-pretty text-cream sm:mt-1 sm:text-base lg:text-lg">
                      Baked to order, every day
                    </p>
                  </div>
                </div>
              </CakeConstellation>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
