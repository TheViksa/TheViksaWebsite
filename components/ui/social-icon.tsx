import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface ISocialIcon {
  Icon: LucideIcon;
  href: string;
  name: string;
  className?: string;
}
export const SocialIcon = ({ Icon, href, name, className }: ISocialIcon) => {
  return (
    <a href={href} target="_blank">
      <Icon className={cn("hover:text-accent transition", className)} />
      <span className="sr-only">{name}</span>
    </a>
  );
};
