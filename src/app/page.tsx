import { Prologue } from "@/components/cinematic/Prologue";
import { Person } from "@/components/sections/Person";
import { Craft } from "@/components/sections/Craft";
import { Workshop } from "@/components/sections/Workshop";
import { Journal } from "@/components/sections/Journal";
import { BeyondCode } from "@/components/sections/BeyondCode";
import { Epilogue } from "@/components/sections/Epilogue";

export default function Home() {
  return (
    <main>
      <Prologue />
      <Person />
      <Craft />
      <Workshop />
      <Journal />
      <BeyondCode />
      <Epilogue />
    </main>
  );
}
