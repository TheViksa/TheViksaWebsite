import { AboutHouseSection } from "@/components/HomePageComponents/AboutHouseSection";
import { ChooseOccasion } from "@/components/HomePageComponents/ChooseOccasion";
import { ContactSection } from "@/components/HomePageComponents/ContactSection";
import { HeroSection } from "@/components/HomePageComponents/HeroSection";
import { client } from "@/sanity/lib/client";
import { getServicesPreviewData } from "@/sanity/queries/services";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const serviceData = await client.fetch(getServicesPreviewData, [], {
    next: {
      revalidate: 120,
    },
  });
  const t = await getTranslations("Index");
  /* console.log("service data", serviceData); */
  return (
    <main className="pt-10 space-y-[80px] pb-10">
      <div>
        <HeroSection />
      </div>
      <div className="">
        <AboutHouseSection />
      </div>
      <div className="">
        <ChooseOccasion />
      </div>
      <div>
        <ContactSection />
      </div>
    </main>
  );
}
