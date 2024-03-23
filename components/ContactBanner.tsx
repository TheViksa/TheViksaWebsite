import { CONTACT_DATA } from "@/static";
import React from "react";

export const ContactBanner = () => {
  const { email, phone } = CONTACT_DATA;
  return (
    <div className="container flex justify-end py-4 px-12 ">
      <div className="flex items-center gap-6">
        <a
          href={`mailto:${email.value}`}
          className="flex gap-2 z-priority group"
        >
          <email.icon className=" group-hover:text-accent transition h-6 w-6" />
          {email.label}
        </a>
        <a
          href={`phoneto:${phone.value}`}
          className="flex gap-2 z-priority group"
        >
          <phone.icon className=" group-hover:text-accent transition" />
          {phone.label}
        </a>
      </div>
    </div>
  );
};
