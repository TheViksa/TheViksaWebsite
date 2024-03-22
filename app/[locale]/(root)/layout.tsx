import { BoxesCore } from "@/components/ui/background-boxes";
import React from "react";
interface IRootLayout {
  children: React.ReactNode;
}
const RootLayout = ({ children }: IRootLayout) => {
  return (
    <div className="relative">
      <div>InfoBanner</div>
      <div>Navigation</div>
      <div className=" container relative z-20">
        {children}
        <div className="fixed left-0 top-0 h-screen w-full overflow-hidden z-10">
          <BoxesCore />
        </div>
      </div>
    </div>
  );
};
export default RootLayout;
