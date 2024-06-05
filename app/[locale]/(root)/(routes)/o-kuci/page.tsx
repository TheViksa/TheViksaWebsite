import { AboutHouseHeader } from "@/components/AboutHouseComponents/AboutHouseHeader";
import { HouseDescription } from "@/components/AboutHouseComponents/HouseDescription";
import { GMapsLocation } from "@/components/GMapsLocation";
import { ContactSection } from "@/components/HomePageComponents/ContactSection";
import { HeroGridImages } from "@/components/HomePageComponents/HeroGridImages";
import { SwipeCarousel } from "@/components/SwipeCarousel";
import React from "react";

const OKuciPage = () => {
  return (
    <div className=" flex flex-col gap-[80px]">
      <AboutHouseHeader />
      <HouseDescription />
      <div>Sadrzaj</div>
      <div>Usluge</div>
      <div className="relative z-priority w-full h-screen ">
        <HeroGridImages />
      </div>
      <GMapsLocation />
      <div>
        <ContactSection />
      </div>
    </div>
  );
};

export default OKuciPage;
