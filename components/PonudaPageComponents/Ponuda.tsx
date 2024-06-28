import React from "react";
import { PonudaBody } from "./PonudaBody";
import Image from "next/image";
import { IServiceData } from "@/types";
import { SectionTitle } from "../ui/SectionTitle";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
const builder = imageUrlBuilder(client);
export const Ponuda = ({ data }: { data: IServiceData }) => {
  const { en_title, hr_title, image, en_body, hr_body } = data;
  const imgUrl = builder.image(data.image).width(440).height(220).url();
  return (
    <article className="flex flex-col gap-[20px]">
      <div className="w-full h-[300px] lg:h-[600px] relative">
        <div className="absolute top-0 left-0 bg-white p-4 rounded-br-xl">
          <p className=" text-headingMMobile md:text-headingL uppercase font-medium text-accent">
            {hr_title}
          </p>
        </div>
        {data?.image ? (
          <>
            <Image
              className=" w-full h-full hidden lg:block object-cover"
              src={builder.image(image).width(1200).height(600).url()}
              width={1200}
              height={600}
              alt={image.alt}
              loading="eager"
            />
            <Image
              className=" w-full h-full lg:hidden object-cover"
              src={builder.image(image).width(600).height(300).url()}
              width={600}
              height={300}
              alt={image.alt}
              loading="eager"
            />
          </>
        ) : null}
      </div>
      <div className="flex flex-col gap-[20px] lg:flex-row">
        <PonudaBody data={hr_body} />
      </div>
    </article>
  );
};
