import React from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { WelcomeIllustration } from "../svgs/welcome-illustration";
import { ContactForm } from "../ContactForm/ContactForm";
import { CONTACT_DATA } from "@/static";
import { ContactLink } from "../ui/contactLink";

export const ContactSection = () => {
  const { email, phone } = CONTACT_DATA;
  return (
    <div className="relative pt-[50px]  md:pt-[150px]">
      <SectionTitle title="Kontakt" />
      <div className="flex flex-col md:flex-row justify-between   shadow-md p-5 py-10">
        <div className=" flex w-full flex-col  justify-center z-priority ">
          <div className="text-center space-y-2">
            <p className="text-4xl ">Stupite s nama u kontakt</p>
            <p>Imate pitanja ili želite rezervirati?</p>
            <p>
              Pošaljite nam poruku preko kontakt forme, direktno na email ili
              nas nazovite!
            </p>
          </div>
          <div className=" max-w-[600px]">
            <ContactForm />
          </div>
        </div>
        <div className="flex  flex-col items-center gap-4  w-full">
          <WelcomeIllustration className="max-h-[600px] max-w-[600px] w-full h-full" />

          <div className="flex gap-6 max-md:flex-col">
            <ContactLink data={email} />
            <ContactLink data={phone} />
          </div>
        </div>
      </div>
    </div>
  );
};
