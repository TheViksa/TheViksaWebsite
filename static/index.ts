import { Facebook, Instagram, Mail, Phone } from "lucide-react";

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

export const FOOTER_SOCIAL_ICONS = [
  {
    id: 1,
    name: "facebook",
    href: "#",
    Icon: Facebook,
  },
  {
    id: 1,
    name: "instagram",
    href: "#",
    Icon: Instagram,
  },
];
export const ABOUT_HOUSE_INFO_POINTS = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1521782462922-9318be1cfd04?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Udobnost i Luksuz",
    text: "Svaki kutak ove kuće ispunjen je udobnošću i luksuzom. Prostrani dnevni boravak s udobnim kaučem i toplim kaminom poziva vas na opuštanje, dok moderno opremljena kuhinja omogućuje pripremu ukusnih obroka za vaše najdraže. Elegantno uređene spavaće sobe pružaju miran san, dok prostrane terase i vrt nude prekrasan pogled na okolnu prirodu.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Spoj Tradicije i Moderne",
    text: "Naša vikendica savršeno spaja tradicionalni šarm s modernim udobnostima. Rustikalni drveni elementi kombiniraju se s elegantnim detaljima kako bi stvorili atmosferu koja je istovremeno opuštajuća i luksuzna. Svaki kutak ove kuće priča priču o ljubavi prema detaljima i pažljivoj pažnji prema udobnosti gostiju.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Prostrani Vanjski Prostor",
    text: "Uživajte u blagodatima prirode na našem prostranom vanjskom prostoru. Velika terasa s udobnim sjedećim garniturama idealna je za opuštanje uz jutarnju kavu ili večernje druženje s prijateljima. Okušajte se u roštiljanju na otvorenom ili organizirajte piknik na travnjaku, dok se djeca mogu igrati slobodno na sigurnom i prostranom dvorištu.",
  },
];
