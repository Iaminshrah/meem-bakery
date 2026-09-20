"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";

const layers = [
  {
    name: "Chocolate sponge",
    note: "Baked the same day, so the crumb is still soft.",
  },
  {
    name: "Oreo & fresh cream",
    note: "Real cream and crushed biscuit, folded by hand.",
  },
  {
    name: "Chocolate ganache",
    note: "Poured so it drips the way it should.",
  },
  {
    name: "Chocolate sponge",
    note: "A second layer, so every slice holds.",
  },
];

function setShift(node: HTMLElement | null, y: number) {
  if (!node) return;
  node.style.transform = `translate3d(0, ${y}px, 0)`;
}

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const cakeRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const shift = Math.min(1, Math.max(0, progress)) * 2 - 1;
      const depth = window.innerWidth < 1024 ? 0.55 : 1;

      setShift(patternRef.current, shift * -24 * depth);
      setShift(copyRef.current, shift * 28 * depth);
      setShift(cakeRef.current, shift * -72 * depth);
      setShift(listRef.current, shift * 40 * depth);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-x-clip bg-[#824B36] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_8%_18%,rgba(201,162,39,0.1),transparent_55%)]" />
      <div
        ref={patternRef}
        className="damask-pattern pointer-events-none absolute -inset-16 opacity-[0.06] will-change-transform"
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-2">
          <Reveal className="min-w-0 lg:col-span-5">
            <div ref={copyRef} className="will-change-transform">
              <p className="font-display text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase sm:text-sm sm:tracking-[0.32em]">
                Why Choose Us
              </p>
              <h2 className="font-display mt-4 text-[clamp(2rem,6vw,3.4rem)] leading-[1.12] font-semibold tracking-wide text-balance text-cream">
                See What’s Inside
              </h2>
              <div className="gold-rule-short mt-6" />
              <p className="font-serif mt-6 max-w-md text-xl leading-relaxed text-cream/90 italic sm:text-2xl">
                A cake is not one thing. It is sponge, cream, and chocolate — stacked with care.
              </p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">
                This is how we build a Chocolate Oreo. Every flavour is made the same way:
                fresh layers, finished by hand.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="min-w-0 lg:col-span-7 lg:row-span-2">
            <div ref={cakeRef} className="will-change-transform">
              <div className="layer-art relative mx-auto max-w-xl sm:max-w-2xl lg:max-w-none">
                <Image
                  src={images.layers.oreo}
                  alt="Chocolate Oreo cake shown in layers: chocolate sponge, Oreo and fresh cream, chocolate ganache, and chocolate sponge"
                  width={880}
                  height={1100}
                  sizes="(max-width: 1024px) 90vw, 52vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="min-w-0 lg:col-span-5">
            <div ref={listRef} className="will-change-transform">
              <ol className="relative space-y-6 before:absolute before:top-3 before:bottom-3 before:left-[0.95rem] before:w-px before:bg-gold/30">
                {layers.map((layer, index) => (
                  <li key={`${layer.name}-${index}`} className="flex gap-4">
                    <span className="font-display relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-[#2a140e] text-[0.7rem] tracking-[0.16em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-lg tracking-wide text-cream">{layer.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-cream/70">{layer.note}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
