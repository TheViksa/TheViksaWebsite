import { ContactBanner } from "@/components/ContactBanner";
import { Navigation } from "@/components/Navigation";
import { BoxesCore } from "@/components/ui/background-boxes";
import React from "react";
interface IRootLayout {
  children: React.ReactNode;
}
const RootLayout = ({ children }: IRootLayout) => {
  return (
    <div className="relative">
      <div className="max-md:hidden">
        <ContactBanner />
      </div>
      <Navigation />
      <div className=" container relative ">
        {children}
        <div className="max-md:hidden fixed left-0 top-0 h-screen w-full overflow-hidden z-10">
          <BoxesCore />
        </div>
      </div>
    </div>
  );
};
export default RootLayout;
