import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
import {
  buildServiceQuery,
  serviceQuery,
  servicesPathsQuery,
} from "@/sanity/queries/services";
import React from "react";
import { Ponuda } from "@/components/PonudaPageComponents/Ponuda";
import { ContactSection } from "@/components/HomePageComponents/ContactSection";
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(servicesPathsQuery, [], {
    next: {
      revalidate: 120,
    },
  });

  return posts;
}
const PonudaIdPage = async ({
  params,
}: {
  params: { locale: string; ponudaId: string };
}) => {
  const serviceData = await client.fetch(buildServiceQuery(params.ponudaId));
 
  return (
    <div className="pt-10 space-y-[80px] pb-10">
      <Ponuda data={serviceData} />
      <ContactSection />
    </div>
  );
};

export default PonudaIdPage;
