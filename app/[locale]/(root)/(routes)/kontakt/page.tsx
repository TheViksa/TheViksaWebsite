import { GMapsLocation } from "@/components/GMapsLocation";
import { ContactSection } from "@/components/HomePageComponents/ContactSection";
import React from "react";

const KontaktPage = () => {
  return (
    <main className="pt-10 space-y-[80px] pb-10">
      <div>
        <ContactSection />
      </div>
      <h1 className="text-center text-3xl">Lokacija</h1>
      <GMapsLocation />
    </main>
  );
};

export default KontaktPage;
