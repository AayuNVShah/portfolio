"use client";

export function PortalTransition() {
  return (
    <div
      data-architectural-transition
      className="pointer-events-none invisible fixed inset-0 z-[60] overflow-hidden bg-charcoal"
      aria-hidden="true"
    >
      <div
        data-portal-door="left"
        className="absolute inset-y-0 left-0 w-1/2 border-r border-gold/50 bg-charcoal"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(195,166,107,0.08) 0 1px, transparent 1px 22px), repeating-linear-gradient(-45deg, rgba(195,166,107,0.08) 0 1px, transparent 1px 22px), radial-gradient(ellipse at 100% 50%, rgba(195,166,107,0.16), transparent 55%)",
        }}
      />
      <div
        data-portal-door="right"
        className="absolute inset-y-0 right-0 w-1/2 border-l border-gold/50 bg-charcoal"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(195,166,107,0.08) 0 1px, transparent 1px 22px), repeating-linear-gradient(-45deg, rgba(195,166,107,0.08) 0 1px, transparent 1px 22px), radial-gradient(ellipse at 0% 50%, rgba(195,166,107,0.16), transparent 55%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full text-gold"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          data-portal-arch
          d="M120 1000V470C120 250 300 105 500 105S880 250 880 470V1000M180 1000V480C180 290 325 165 500 165S820 290 820 480V1000"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeOpacity="0.9"
        />
        <path
          d="M0 790H1000M0 850H1000M0 910H1000M250 1000V520M750 1000V520"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeOpacity="0.34"
        />
        <circle cx="500" cy="470" r="22" stroke="currentColor" strokeOpacity="0.75" />
        <circle cx="500" cy="470" r="5" fill="currentColor" />
      </svg>
      <p
        data-portal-label
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-sans text-[0.65rem] tracking-[0.48em] text-gold uppercase"
      >
        A new courtyard
      </p>
    </div>
  );
}
