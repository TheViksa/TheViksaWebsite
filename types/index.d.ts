import { LucideIcon } from "lucide-react";

interface IContactData {
  aPrefix: string;
  value: string;
  label: string;
  icon: LucideIcon;
}

interface IServiceData {
  _id: string;
  hr_title: string;
  en_title: string;
  hr_description: string;
  en_description: string;
  image: {
    asset: ObjectConstructor[];
    _type: string;
    alt: string;
  };
  en_body: any;
  hr_body: any;
  slug: { current: string; _type: string };
}

interface IGridImg {
  id: string;
  content: string;
  className: string;
  thumbnail: string;
}
