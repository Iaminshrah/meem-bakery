import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { footerCare, footerExplore, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="py-16 sm:py-20">
        <div className="grid min-w-0 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-5">
            <Logo imgClassName="h-16 max-w-none sm:h-20 lg:h-24" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
              Cakes, treats, and sundaes made with patience, good ingredients, and a
              love of celebration.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <InstagramIcon />
              </a>
            </div>
          </Reveal>

          <Reveal delay={80} className="min-w-0 lg:col-span-2">
            <h2 className="font-display text-sm font-semibold tracking-[0.16em] text-gold uppercase sm:tracking-[0.22em] xl:tracking-[0.28em]">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {footerExplore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-pretty text-cream/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="min-w-0 lg:col-span-2">
            <h2 className="font-display text-sm font-semibold tracking-[0.16em] text-gold uppercase sm:tracking-[0.22em] xl:tracking-[0.28em]">
              Customer Care
            </h2>
            <ul className="mt-5 space-y-3">
              {footerCare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-pretty text-cream/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="min-w-0 lg:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-[0.16em] text-gold uppercase sm:tracking-[0.22em] xl:tracking-[0.28em]">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-base text-cream/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-gold" />
                <a href={`tel:${site.phoneHref}`} className="hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-gold" />
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp {site.phone.replace(/\s/g, "")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                <span>{site.address}</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </Container>
      <div className="border-t border-gold/10 pb-[env(safe-area-inset-bottom)]">
        <Container className="flex flex-col items-start justify-between gap-2 py-6 text-xs tracking-wide text-cream/45 sm:flex-row sm:items-center">
          <p>© 2026 Meem Bakers. All rights reserved.</p>
          <p>Handcrafted with care. Baked fresh every day.</p>
        </Container>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}
