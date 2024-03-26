import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const OccasionCard = ({
  img,
  name,
  description,
}: {
  img: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col dark:bg-gray-800 dark:border-gray-700 z-priority h-full hover:shadow-lg  hover:shadow-accent transition">
      <a href="#">
        <img
          className="rounded-t-lg h-[300px] w-full object-cover"
          src={img}
          alt=""
        />
      </a>
      <div className="p-5 flex flex-col gap-5 justify-between h-full">
        <div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex justify-end">
          <Link href="/">
            <Button variant="accent">Detalji / Rezervacija</Button>
          </Link>
        </div>
        {/* <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a> */}
      </div>
    </div>
  );
};
