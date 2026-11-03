import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-charcoal px-6 text-center">
      <p className="font-sans text-[0.7rem] tracking-[0.4em] text-gold uppercase">404</p>
      <h1 className="mt-4 font-display text-5xl text-ivory">This courtyard is empty.</h1>
      <Link href="/" className="mt-8 text-gold-bright underline">
        Return to the prologue
      </Link>
    </main>
  );
}
