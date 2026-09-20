export default function Loading() {
  return (
    <main
      id="main"
      className="flex min-h-screen items-center justify-center bg-chocolate-dark"
      aria-busy="true"
      aria-live="polite"
    >
      <p className="font-display text-3xl italic text-cream">Loading Meem Bakers</p>
    </main>
  );
}
