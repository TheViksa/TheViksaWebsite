import React from "react";
import { Rubik_Scribble } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Rubik_Scribble({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <p
      className={cn(
        "absolute left-[-16px] top-[-40px] md:top-[-70px] text-[50px] md:text-[100px] lg:text-[150px] text-accent/50 uppercase z-0 "
      )}
    >
      {title}
    </p>
  );
};
