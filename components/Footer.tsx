import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "./ui/social-icon";
import { FOOTER_SOCIAL_ICONS, NAV_PATHS } from "@/static";
//TODO srediti linkove leagal, dodati intl
export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 z-priority">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/logo.png"
                className=" object-contain"
                width={130}
                height={110}
                alt="The Viksa Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Stranice
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {NAV_PATHS["hr"].map((item) => {
                  return (
                    <li className="mb-4" key={item.id}>
                      <Link
                        href={item.path}
                        className="hover:text-accent capitalize"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Pratite Nas
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {FOOTER_SOCIAL_ICONS.map((item) => {
                  return (
                    <li className="mb-4" key={item.id}>
                      <a
                        href={item.href}
                        className="hover:text-accent capitalize"
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:text-accent capitalize">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent capitalize">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-accent/50 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 z-priority">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              The Viksa™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 z-priority gap-4">
            {FOOTER_SOCIAL_ICONS.map((item) => {
              return (
                <SocialIcon
                  {...item}
                  key={item.id}
                  className="w-6 h-6 text-gray-500"
                />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
