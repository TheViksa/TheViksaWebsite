import Image from "next/image";
import React from "react";

export const AboutHouseHeader = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[600px]">
      <Image
        width={1400}
        height={400}
        className="h-full object-cover"
        src="/assets/images/about-house-header.jpg"
        alt="the viksa house"
      />
      <div className="absolute w-full h-[100px] bottom-[200px] left-0 z-10 z-priority  bg-white/90 flex flex-col justify-center items-center">
        <h1 className=" text-4xl text-foreground font-medium">
          Dobrodošli u našu vikendicu
        </h1>
        <h1 className=" text-4xl text-accent font-medium">
          Vašu oazu mira i opuštanja.
        </h1>
      </div>
    </div>
  );
};
