import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { v4 as uuid } from "uuid";
export const CONTACT_DATA = {
  phone: {
    value: "+385958905561",
    label: "+385 0958905561",
    icon: Phone,
    aPrefix: "tel:",
  },
  email: {
    label: "thevixahouse@gmail.com",
    value: "thevixahouse@gmail.com",
    icon: Mail,
    aPrefix: "mailto:",
  },
};

export const NAV_PATHS = {
  en: [
    {
      id: uuid(),
      label: "Home",
      path: "/",
    },
    {
      id: uuid(),
      label: "About House",
      path: "/o-kuci",
    },
    {
      id: uuid(),
      label: "Services",
      path: "/ponuda",
    },
    {
      id: uuid(),
      label: "Contact",
      path: "/kontakt",
    },
  ],
  hr: [
    {
      id: uuid(),
      label: "Naslovna",
      path: "/",
    },
    {
      id: uuid(),
      label: "O Kući",
      path: "/o-kuci",
    },
    {
      id: uuid(),
      label: "Ponuda",
      path: "/ponuda",
    },
    {
      id: uuid(),
      label: "Kontakt",
      path: "/kontakt",
    },
  ],
};

export const FOOTER_SOCIAL_ICONS = [
  {
    id: uuid(),
    name: "facebook",
    href: "#",
    Icon: Facebook,
  },
  {
    id: uuid(),
    name: "instagram",
    href: "#",
    Icon: Instagram,
  },
];
export const ABOUT_HOUSE_INFO_POINTS = [
  {
    id: uuid(),
    img: "https://images.unsplash.com/photo-1521782462922-9318be1cfd04?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Udobnost i Luksuz",
    text: "Svaki kutak ove kuće ispunjen je udobnošću i luksuzom. Prostrani dnevni boravak s udobnim kaučem i toplim kaminom poziva vas na opuštanje, dok moderno opremljena kuhinja omogućuje pripremu ukusnih obroka za vaše najdraže. Elegantno uređene spavaće sobe pružaju miran san, dok prostrane terase i vrt nude prekrasan pogled na okolnu prirodu.",
  },
  {
    id: uuid(),
    img: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Spoj Tradicije i Moderne",
    text: "Naša vikendica savršeno spaja tradicionalni šarm s modernim udobnostima. Rustikalni drveni elementi kombiniraju se s elegantnim detaljima kako bi stvorili atmosferu koja je istovremeno opuštajuća i luksuzna. Svaki kutak ove kuće priča priču o ljubavi prema detaljima i pažljivoj pažnji prema udobnosti gostiju.",
  },
  {
    id: uuid(),
    img: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Prostrani Vanjski Prostor",
    text: "Uživajte u blagodatima prirode na našem prostranom vanjskom prostoru. Velika terasa s udobnim sjedećim garniturama idealna je za opuštanje uz jutarnju kavu ili večernje druženje s prijateljima. Okušajte se u roštiljanju na otvorenom ili organizirajte piknik na travnjaku, dok se djeca mogu igrati slobodno na sigurnom i prostranom dvorištu.",
  },
];
