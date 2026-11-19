import type { ReactNode } from "react";

/**
 * One chamber of the horizontal stepwell.
 *
 * Every panel is exactly one viewport tall. Content never grows downward —
 * if a chapter needs more room it adds columns sideways, so the whole site
 * moves in a single (horizontal) direction.
 */
export function Panel({
  id,
  className = "",
  decor,
  children,
}: {
  id: string;
  className?: string;
  decor?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative h-svh min-w-screen shrink-0 overflow-hidden ${className}`}
    >
      {decor}
      <div className="relative z-20 flex h-full w-max items-center gap-12 px-10 pt-24 pb-24 sm:px-16 lg:gap-16 lg:px-24">
        {children}
      </div>
    </section>
  );
}

/** A fixed-width column inside a Panel. */
export function PanelColumn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`shrink-0 ${className}`}>{children}</div>;
}
