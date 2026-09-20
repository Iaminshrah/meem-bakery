import { BestSellers } from "@/components/home/BestSellers";
import { CakeCollection } from "@/components/home/CakeCollection";
import { CustomCakeCta } from "@/components/home/CustomCakeCta";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { Hero } from "@/components/home/Hero";
import { InstagramSection } from "@/components/home/InstagramSection";
import { Newsletter } from "@/components/home/Newsletter";
import { SignatureSection } from "@/components/home/SignatureSection";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <SignatureSection />
      <WhyChooseUs />
      <CakeCollection />
      <CustomCakeCta />
      <Testimonials />
      <InstagramSection />
      <Newsletter />
    </main>
  );
}
