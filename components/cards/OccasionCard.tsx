import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
interface IOccasionCard {
  img: string;
  name: string;
  description: string;
  href: string;
}
export const OccasionCard = ({
  img,
  name,
  description,
  href,
}: IOccasionCard) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col dark:bg-gray-800 dark:border-gray-700 z-priority h-full hover:shadow-lg  hover:shadow-accent transition">
      <Link href={href}>
        <img
          className="rounded-t-lg h-[300px] w-full object-cover"
          src={img}
          alt=""
        />
      </Link>
      <div className="p-5 flex flex-col gap-5 justify-between h-full">
        <div>
          <Link href={href}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex justify-end">
          <Link href={href}>
            <Button variant="accent">Detalji / Rezervacija</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
