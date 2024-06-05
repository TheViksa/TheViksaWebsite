import { GMapsLocation } from "@/components/GMapsLocation";
import { ContactSection } from "@/components/HomePageComponents/ContactSection";
import React from "react";

const KontaktPage = () => {
  return (
    <main className="pt-10 space-y-[80px] pb-10">
      <div>
        <ContactSection />
      </div>
      <GMapsLocation />
    </main>
  );
};

export default KontaktPage;
