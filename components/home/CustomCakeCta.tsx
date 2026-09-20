import { CTASection } from "@/components/cta/CTASection";
import { images } from "@/lib/images";

export function CustomCakeCta() {
  return (
    <CTASection
      heading="Dream It. We'll Bake It."
      text="Have something special in mind? Tell us your idea and we’ll bake it into a beautiful custom cake."
      buttonLabel="Create Your Cake"
      buttonHref="/order"
      image={images.customCta}
      imageAlt="A festive celebration cake styled for a special occasion"
    />
  );
}
