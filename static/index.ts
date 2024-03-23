import { Mail, Phone } from "lucide-react";

export const CONTACT_DATA = {
  phone: {
    value: "+38501566324",
    label: "+385 01-566-324",
    icon: Phone,
  },
  email: {
    label: "contact@gmail.com",
    value: "contact@gmail.com",
    icon: Mail,
  },
};

export const NAV_PATHS = {
  en: [
    {
      id: 0,
      label: "Home",
      path: "/",
    },
    {
      id: 1,
      label: "About House",
      path: "/o-kuci",
    },
    {
      id: 2,
      label: "Services",
      path: "/ponuda",
    },
    {
      id: 3,
      label: "Contact",
      path: "/kontakt",
    },
  ],
  hr: [
    {
      id: 0,
      label: "Naslovna",
      path: "/",
    },
    {
      id: 1,
      label: "O Kući",
      path: "/o-kuci",
    },
    {
      id: 2,
      label: "Ponuda",
      path: "/ponuda",
    },
    {
      id: 3,
      label: "Kontakt",
      path: "/kontakt",
    },
  ],
};
