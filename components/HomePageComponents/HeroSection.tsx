import React from "react";
import { HeroGridImages } from "./HeroGridImages";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { HERO_GRID_IMGS } from "@/static";
const textTypewriterStyle =
  "md:text-left text-4xl lg:text-5xl lg:leading-[100px]";
const words = [
  {
    text: "Neka",
    className: textTypewriterStyle,
  },
  {
    text: "vaši",
    className: textTypewriterStyle,
  },
  {
    text: "najposebniji",
    className: textTypewriterStyle,
  },
  {
    text: "trenuci",
    className: textTypewriterStyle,
  },

  {
    text: "budu",
    className: textTypewriterStyle,
  },

  {
    text: "Nezaboravni.",
    className: textTypewriterStyle + " text-accent leading-[100px]",
  },
];
export const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
      <div className="flex-1 max-w-[600px] space-y-4 md:space-y-6">
        <div className=" font-serif z-priority">
          <TypewriterEffect words={words} className="md:text-left " />
        </div>

        <p>
          Dobrodošli u &quot;The Viksa&quot; - vašu oazu za nezaboravne proslave
          i opuštajuće obiteljske odmore. Smještena u idiličnom okruženju, naša
          vikendica pruža savršen spoj udobnosti, elegancije i prirodnog
          ljepotom, čineći je idealnim odredištem za sve vaše posebne prigode.
        </p>
      </div>
      <div className="h-[400px] lg:h-[600px] lg:flex-1 w-full relative   z-20">
        <HeroGridImages cards={HERO_GRID_IMGS} />
      </div>
    </div>
  );
};
