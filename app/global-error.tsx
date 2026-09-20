"use client";

import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({
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
    <html lang="en">
      <body className="flex min-h-full flex-col bg-[#0b0b0b] text-[#f8f3ea]">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
          <p className="text-[0.68rem] tracking-[0.22em] text-[#c9a227] uppercase">
            Something went wrong
          </p>
          <h1 className="mt-4 max-w-lg text-3xl text-balance sm:text-5xl">
            Meem Bakers couldn’t load
          </h1>
          <p className="mt-4 max-w-md text-pretty text-[#f8f3ea]/70">
            Please try again. If it keeps happening, message us on WhatsApp at 0316 7737208.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {tryAgain ? (
              <button
                type="button"
                onClick={tryAgain}
                className="rounded-md bg-[#c9a227] px-7 py-3.5 text-xs font-semibold tracking-[0.16em] text-[#0b0b0b] uppercase"
              >
                Try again
              </button>
            ) : null}
            {/* Full page load is safer here — this view replaces the root layout. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              className="rounded-md border border-[#c9a227]/70 px-7 py-3.5 text-xs font-semibold tracking-[0.16em] text-[#c9a227] uppercase"
            >
              Return Home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
