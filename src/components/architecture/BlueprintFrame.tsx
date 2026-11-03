import type { ReactNode } from "react";

export function BlueprintFrame({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <figure className="relative overflow-hidden border border-gold/25 bg-forest/5 p-4 sm:p-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(195,166,107,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(195,166,107,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative">{children}</div>
      {caption ? (
        <figcaption className="relative mt-4 font-sans text-[0.65rem] uppercase tracking-[0.28em] text-forest/60">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
