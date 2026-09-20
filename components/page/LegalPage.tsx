import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/page/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export function LegalPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main id="main">
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="bg-ink py-16 sm:py-20">
        <Container className="max-w-3xl space-y-8 text-cream/70">
          <Reveal>{children}</Reveal>
        </Container>
      </section>
    </main>
  );
}

export function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl text-pretty text-cream sm:text-3xl">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed">{children}</div>
    </section>
  );
}
