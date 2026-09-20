import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center bg-chocolate-dark px-6 pt-[calc(5.5rem+env(safe-area-inset-top))] pb-10 text-center"
    >
      <p className="fade-up text-[0.68rem] tracking-[0.22em] text-gold uppercase sm:tracking-[0.32em]">404</p>
      <h1 className="fade-up fade-up-1 font-display mt-4 max-w-lg text-[clamp(1.85rem,8vw,3rem)] text-balance text-cream sm:text-5xl">
        We can’t find this page
      </h1>
      <p className="fade-up fade-up-2 mt-4 max-w-md text-pretty text-cream/70">
        The page you’re looking for isn’t on the menu. Let’s take you back to something
        sweeter.
      </p>
      <div className="fade-up fade-up-3 mt-8 w-full max-w-xs">
        <Button href="/" className="w-full sm:w-auto">Return Home</Button>
      </div>
    </main>
  );
}
