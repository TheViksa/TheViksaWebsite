import React from "react";
import { HeroGridImages } from "./HeroGridImages";
import { TypewriterEffect } from "../ui/typewriter-effect";
const words = [
  {
    text: "Neka",
  },
  {
    text: "vaši",
  },
  {
    text: "najposebniji",
  },
  {
    text: "trenuci",
  },

  {
    text: "budu",
  },

  {
    text: "Nezaboravni.",
    className: "text-blue-500 dark:text-blue-500",
  },
];
export const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center ">
      <div className="flex-1 max-w-[700px] space-y-4">
        <div className=" ">
          <TypewriterEffect words={words} className="text-left" />
        </div>
        <div>
          Dobrodošli u &quot;The Viksa&quot; - vašu oazu za nezaboravne proslave
          i opuštajuće obiteljske odmore. Smještena u idiličnom okruženju, naša
          vikendica pruža savršen spoj udobnosti, elegancije i prirodnog
          ljepotom, čineći je idealnim odredištem za sve vaše posebne prigode.
        </div>
      </div>
      <div className="h-[400px] lg:h-[600px] lg:flex-1 w-full relative   z-20">
        <HeroGridImages />
      </div>
    </div>
  );
};
