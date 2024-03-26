import React from "react";
import { SectionTitle } from "../ui/SectionTitle";
import Image from "next/image";
import { ABOUT_HOUSE_INFO_POINTS } from "@/static";

export const AboutHouseSection = () => {
  return (
    <div className="relative pt-[50px] md:pt-[100px]">
      <SectionTitle title="O Viksi" />
      <div className="grid  md:grid-cols-3">
        {ABOUT_HOUSE_INFO_POINTS.map((item, i) => {
          return (
            <div
              key={item.id}
              className={i == 1 ? " flex flex-col md:flex-col-reverse  " : ""}
            >
              <div className="w-full h-[400px] relative ">
                <Image
                  src={item.img}
                  fill
                  alt="Image"
                  className="w-full max-md:rounded-md  "
                />
              </div>
              <AboutHouseInfo title={item.title} description={item.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AboutHouseInfo = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className=" text-center p-5 space-y-4">
      <h2 className="text-2xl font-sansSerif">{title}</h2>
      <p>{description}</p>
    </div>
  );
};
