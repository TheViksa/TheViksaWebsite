import { HeroSection } from "@/components/HomePageComponents/HeroSection";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Index");
  return (
    <main className="pt-10">
      <div>
        <HeroSection />
        <div className="h-screen ">
          <div>
            <p className="z-priority">TEXT</p>
          </div>
        </div>
        <div className="h-screen ">somethijng</div>
        <button>Click</button>
      </div>
    </main>
  );
}
