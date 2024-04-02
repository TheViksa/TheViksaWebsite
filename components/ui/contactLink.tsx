import { IContactData } from "@/types";
import React from "react";

export const ContactLink = ({ data }: { data: IContactData }) => {
  return (
    <a
      href={`${data.aPrefix}${data.value}`}
      className="flex gap-2 z-priority group"
    >
      <data.icon className=" group-hover:text-accent transition h-6 w-6" />
      {data.label}
    </a>
  );
};
