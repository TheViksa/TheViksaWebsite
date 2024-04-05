import { ChooseOccasion } from "@/components/HomePageComponents/ChooseOccasion";
import { client } from "@/sanity/lib/client";
import { getServicesPreviewData } from "@/sanity/queries/services";
import React from "react";

const PonudaPage = async () => {
  const serviceData = await client.fetch(getServicesPreviewData, [], {
    next: {
      revalidate: 120,
    },
  });
  return (
    <main className="pt-10 space-y-[80px] pb-10">
      <ChooseOccasion data={serviceData} />
    </main>
  );
};

export default PonudaPage;
