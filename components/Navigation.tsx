"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_PATHS } from "@/static";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "./MobileNavigation";

export const Navigation = () => {
  const localLang = useLocale();
  const pathName = usePathname();

  return (
    <div className="container flex justify-between items-center relative">
      <div className="z-20">
        <Link href="/" className="z-priority cursor-pointer">
          <Image
            src={"/assets/images/logo.png"}
            width={200}
            height={80}
            alt="logo"
            className="relative z-20 object-contain"
          />
        </Link>
      </div>
      <div className="">
        <div className="md:hidden">
          <MobileNavigation />
        </div>
        <ul className="max-md:hidden flex items-center justify-center gap-5 z-priority pr-8">
          {NAV_PATHS["hr"].map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={`/${localLang}/${item.path}`}
                  className={cn(
                    "text-lg uppercase font-sansSerif hover:text-accent transition",
                    pathName === `/${localLang}/${item.path}` && "text-accent"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
