import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Kind Words"
            title="Loved At Every Table"
            description="A few notes from celebrations we were lucky enough to sweeten."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 70}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
