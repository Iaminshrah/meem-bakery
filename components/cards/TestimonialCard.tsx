import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="flex h-full flex-col rounded-lg border border-gold/15 bg-chocolate/35 p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/35 sm:p-5">
      <div className="mb-3 flex gap-1 text-gold" aria-label="5 out of 5 stars">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} className="h-3 w-3 fill-gold" />
        ))}
      </div>
      <p className="font-serif flex-1 text-lg leading-snug font-medium text-pretty text-cream sm:text-xl">
        “{testimonial.quote}”
      </p>
      <footer className="mt-5">
        <cite className="not-italic">
          <span className="block text-sm font-semibold tracking-wide text-gold">
            {testimonial.name}
          </span>
          <span className="mt-0.5 block text-[0.62rem] tracking-[0.2em] text-cream/45 uppercase">
            {testimonial.location}
          </span>
        </cite>
      </footer>
    </blockquote>
  );
}
