import Link from "next/link";
import { ChapterHeading } from "@/components/shared/ChapterHeading";
import { Panel, PanelColumn } from "@/components/shared/Panel";
import { CategoryFilter } from "@/components/journal/CategoryFilter";
import { TempleFrame } from "@/components/architecture/TempleFrame";
import { JaaliPattern } from "@/components/architecture/JaaliPattern";

export function Journal() {
  return (
    <Panel
      id="journal"
      className="bg-[#f7f1e6] text-ink"
      decor={
        <>
          <JaaliPattern className="text-maroon" opacity={0.05} variant="lotus" patternId="jaali-journal" />
          <TempleFrame tone="ivory" />
        </>
      }
    >
      <PanelColumn className="w-[min(24rem,80vw)]">
        <ChapterHeading
          roman="IV"
          kicker="The journal of ideas"
          title="A manuscript of systems, networks, and notes."
        />
        <Link
          href="/writings"
          className="mt-8 inline-flex font-sans text-[0.68rem] tracking-[0.28em] text-terracotta uppercase hover:text-maroon"
        >
          Full archive →
        </Link>
      </PanelColumn>

      <PanelColumn
        className="border border-maroon/15 bg-[#fbf6ec] px-6 py-5"
      >
        <CategoryFilter layout="horizontal" />
      </PanelColumn>
    </Panel>
  );
}
