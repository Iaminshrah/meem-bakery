"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
  retry,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
  retry?: () => void;
}) {
  const tryAgain = retry ?? reset;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main"
      className="flex min-h-[70vh] flex-col items-center justify-center bg-chocolate-dark px-6 py-20 text-center"
    >
      <p className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">Something went wrong</p>
      <h1 className="font-display mt-4 max-w-lg text-[clamp(1.85rem,8vw,3rem)] text-balance text-cream">
        This page didn’t load
      </h1>
      <p className="mt-4 max-w-md text-pretty text-cream/70">
        Please try again. If it keeps happening, WhatsApp us and we’ll help you order.
      </p>
      <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        {tryAgain ? (
          <Button type="button" onClick={tryAgain} className="w-full sm:w-auto">
            Try again
          </Button>
        ) : null}
        <Button href="/" variant="outline" className="w-full sm:w-auto">
          Return Home
        </Button>
      </div>
    </main>
  );
}
