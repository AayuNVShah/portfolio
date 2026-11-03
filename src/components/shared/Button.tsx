import type { ButtonHTMLAttributes, ReactNode } from "react";

type Tone = "gold" | "ghost" | "ivory";

const tones: Record<Tone, string> = {
  gold: "border-gold/70 bg-gold/10 text-gold-bright hover:bg-gold/20",
  ghost: "border-ivory/25 bg-transparent text-ivory hover:border-gold hover:text-gold-bright",
  ivory: "border-charcoal/15 bg-ivory text-charcoal hover:border-gold hover:text-maroon",
};

export function Button({
  children,
  tone = "gold",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; tone?: Tone }) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-sans text-xs tracking-[0.22em] uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${tones[tone]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
