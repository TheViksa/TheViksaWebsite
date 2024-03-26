import { AboutHouseSection } from "@/components/HomePageComponents/AboutHouseSection";
import { ChooseOccasion } from "@/components/HomePageComponents/ChooseOccasion";
import { HeroSection } from "@/components/HomePageComponents/HeroSection";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Index");
  return (
    <main className="pt-10 space-y-[80px]">
      <div>
        <HeroSection />
      </div>
      <div className="">
        <AboutHouseSection />
      </div>
      <div className="">
        <ChooseOccasion />
      </div>
      <div className="h-screen ">somethijng</div>
      <button>Click</button>
    </main>
  );
}
