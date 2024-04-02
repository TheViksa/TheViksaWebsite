import { CONTACT_DATA } from "@/static";
import React from "react";
import { ContactLink } from "./ui/contactLink";

export const ContactBanner = () => {
  const { email, phone } = CONTACT_DATA;
  return (
    <div className="container flex justify-end py-4 px-12 ">
      <div className="flex items-center gap-6">
        <ContactLink data={email} />
        <ContactLink data={phone} />
      </div>
    </div>
  );
};
