"use client";

import Link from "next/link";
import { chapters } from "@/data/navigation";
import { profile } from "@/data/profile";
import { AmbientToggle } from "@/components/audio/AmbientToggle";
import { VoiceControl } from "@/components/voice/VoiceControl";
import { scrollToChapter } from "@/lib/navigation/scroll";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto flex max-w-[90rem] items-center justify-between gap-4 bg-charcoal/55 px-4 py-3 backdrop-blur-md sm:px-6">
        <Link href="/" className="font-display text-lg tracking-wide text-ivory">
          {profile.name}
        </Link>
        <nav
          className="hidden items-center gap-1 overflow-x-auto lg:flex"
          aria-label="Chapters"
        >
          {chapters.map((chapter) =>
            home ? (
              <button
                key={chapter.id}
                type="button"
                onClick={() => scrollToChapter(chapter.id)}
                className="rounded-full px-2.5 py-1 font-sans text-[0.62rem] tracking-[0.18em] text-ivory/75 uppercase hover:text-gold-bright"
              >
                {chapter.roman}
              </button>
            ) : (
              <Link
                key={chapter.id}
                href={`/${chapter.href}`}
                className="rounded-full px-2.5 py-1 font-sans text-[0.62rem] tracking-[0.18em] text-ivory/75 uppercase hover:text-gold-bright"
              >
                {chapter.roman}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2 mix-blend-normal">
          <VoiceControl />
          <AmbientToggle />
        </div>
      </div>
    </header>
  );
}
