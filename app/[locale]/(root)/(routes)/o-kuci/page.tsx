import { AboutHouseHeader } from "@/components/AboutHouseComponents/AboutHouseHeader";
import { HouseDescription } from "@/components/AboutHouseComponents/HouseDescription";
import { GMapsLocation } from "@/components/GMapsLocation";
import { ContactSection } from "@/components/HomePageComponents/ContactSection";
import { HeroGridImages } from "@/components/HomePageComponents/HeroGridImages";
import { SwipeCarousel } from "@/components/SwipeCarousel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { HOUSE_GALLERY_IMGS } from "@/static";
import React from "react";

const OKuciPage = () => {
  return (
    <div className=" flex flex-col gap-[80px] pt-[80px]">
      <div>
        <AboutHouseHeader />
      </div>
      <HouseDescription />

      <div className="relative z-priority w-full h-screen pt-[80px]">
        <SectionTitle title="Galerija" />
        <HeroGridImages cards={HOUSE_GALLERY_IMGS} />
      </div>
      <div className="relative  pt-[120px]">
        <SectionTitle title="Lokacija" />
        <GMapsLocation />
      </div>
      <div>
        <ContactSection />
      </div>
    </div>
  );
};

export default OKuciPage;
