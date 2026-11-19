import { Prologue } from "@/components/cinematic/Prologue";
import { Person } from "@/components/sections/Person";
import { Craft } from "@/components/sections/Craft";
import { Workshop } from "@/components/sections/Workshop";
import { Journal } from "@/components/sections/Journal";
import { BeyondCode } from "@/components/sections/BeyondCode";
import { Epilogue } from "@/components/sections/Epilogue";
import { PillarArcadeDivider } from "@/components/architecture/StepwellCarvings";

export default function Home() {
  return (
    <main
      data-horizontal-main
      className="relative flex min-h-svh w-max flex-row flex-nowrap items-stretch bg-charcoal"
    >
      <Prologue />
      <PillarArcadeDivider roman="I" label="Inner Courtyard" />
      <Person />
      <PillarArcadeDivider roman="II" label="Carved Arcade" />
      <Craft />
      <PillarArcadeDivider roman="III" label="Builders Pavilion" />
      <Workshop />
      <PillarArcadeDivider roman="IV" label="Manuscript Hall" />
      <Journal />
      <PillarArcadeDivider roman="V" label="Raga Mandapa" />
      <BeyondCode />
      <PillarArcadeDivider roman="∞" label="Final Courtyard" />
      <Epilogue />
    </main>
  );
}
