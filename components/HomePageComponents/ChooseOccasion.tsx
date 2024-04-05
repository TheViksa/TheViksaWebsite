import React from "react";
import { OccasionCard } from "../cards/OccasionCard";
import { SectionTitle } from "../ui/SectionTitle";
import { IServiceData } from "@/types";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
export const ChooseOccasion = ({ data }: { data: IServiceData[] }) => {
  return (
    <div className="relative pt-[50px]  md:pt-[100px]">
      <SectionTitle title="Ponuda" />
      <div className="flex justify-center items-center">
        <div className=" grid md:grid-cols-2 items-center justify-around gap-y-[40px] gap-x-[200px]">
          {data.map((item) => {
            const imgUrl = builder
              .image(item.image)
              .width(440)
              .height(220)
              .url();
            const urlPath = `/hr/ponuda/${item.slug.current}`;
            return (
              <OccasionCard
                key={item._id}
                name={item.hr_title}
                img={imgUrl}
                description={item.hr_description}
                href={urlPath}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
