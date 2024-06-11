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
    img: "/assets/images/5.jpg",
    title: "Udobnost i Luksuz",
    text: "Svaki kutak ove kuće ispunjen je udobnošću i luksuzom. Prostrani dnevni boravak s udobnim kaučem i toplim kaminom poziva vas na opuštanje, dok moderno opremljena kuhinja omogućuje pripremu ukusnih obroka za vaše najdraže. Elegantno uređene spavaće sobe pružaju miran san, dok prostrane terase i vrt nude prekrasan pogled na okolnu prirodu.",
  },
  {
    id: uuid(),
    img: "/assets/images/15.jpg",
    title: "Spoj Tradicije i Moderne",
    text: "Naša vikendica savršeno spaja tradicionalni šarm s modernim udobnostima. Rustikalni drveni elementi kombiniraju se s elegantnim detaljima kako bi stvorili atmosferu koja je istovremeno opuštajuća i luksuzna. Svaki kutak ove kuće priča priču o ljubavi prema detaljima i pažljivoj pažnji prema udobnosti gostiju.",
  },
  {
    id: uuid(),
    img: "/assets/images/17.jpg",
    title: "Prostrani Vanjski Prostor",
    text: "Uživajte u blagodatima prirode na našem prostranom vanjskom prostoru. Velika terasa s udobnim sjedećim garniturama idealna je za opuštanje uz jutarnju kavu ili večernje druženje s prijateljima. Okušajte se u roštiljanju na otvorenom ili organizirajte piknik na travnjaku, dok se djeca mogu igrati slobodno na sigurnom i prostranom dvorištu.",
  },
];

export const HERO_GRID_IMGS = [
  {
    id: 1,
    content: "",
    className: "md:col-span-2  ",
    thumbnail: "/assets/images/2.jpg",
  },
  {
    id: 2,
    content: "",
    className: "col-span-1",
    thumbnail: "/assets/images/4.jpg",
  },
  {
    id: 3,
    content: "",
    className: "col-span-1",
    thumbnail: "/assets/images/8.jpg",
  },
  {
    id: 4,
    content: "",
    className: "md:col-span-2",
    thumbnail: "/assets/images/17.jpg",
  },
];

export const HOUSE_GALLERY_IMGS = [
  {
    id: 1,
    content: "",
    className: "md:col-span-2  ",
    thumbnail: "/assets/images/1.jpg",
  },
  {
    id: 2,
    content: "",
    className: "md:col-span-1  ",
    thumbnail: "/assets/images/2.jpg",
  },
  {
    id: 3,
    content: "",
    className: "md:col-span-1  ",
    thumbnail: "/assets/images/3.jpg",
  },
  {
    id: 4,
    content: "",
    className: "md:col-span-2  ",
    thumbnail: "/assets/images/4.jpg",
  },
  {
    id: 5,
    content: "",
    className: "md:col-span-2  ",
    thumbnail: "/assets/images/5.jpg",
  },
  {
    id: 6,
    content: "",
    className: "md:col-span-1  ",
    thumbnail: "/assets/images/6.jpg",
  },
  {
    id: 7,
    content: "",
    className: "md:col-span-1  ",
    thumbnail: "/assets/images/7.jpg",
  },
  {
    id: 8,
    content: "",
    className: "md:col-span-2  ",
    thumbnail: "/assets/images/8.jpg",
  },
  {
    id: 9,
    content: "",
    className: "md:col-span-2  ",
    thumbnail: "/assets/images/15.jpg",
  },
  {
    id: 10,
    content: "",
    className: "md:col-span-1  ",
    thumbnail: "/assets/images/11.jpg",
  },
  {
    id: 11,
    content: "",
    className: "md:col-span-1  ",
    thumbnail: "/assets/images/17.jpg",
  },
  {
    id: 12,
    content: "",
    className: "md:col-span-2  ",
    thumbnail: "/assets/images/16.jpg",
  },
];
