import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { NAV_PATHS } from "@/static";
import Link from "next/link";
import Image from "next/image";

export const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-full h-full" side="top">
        <MobileNavigationContent />
      </SheetContent>
    </Sheet>
  );
};

const MobileNavigationContent = () => {
  return (
    <div className="w-full pt-[100px] relative">
      <div className="absolute left-4 top-[-20px]">
        <Image
          src="/assets/images/logo.png"
          width={150}
          height={60}
          alt="The Viksa logo"
        />
      </div>
      <ul className="flex flex-col items-center gap-8">
        {NAV_PATHS["hr"].map((item) => {
          return (
            <li key={item.id}>
              <SheetClose asChild>
                <Link href={item.path} className="text-2xl uppercase">
                  {item.label}
                </Link>
              </SheetClose>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
