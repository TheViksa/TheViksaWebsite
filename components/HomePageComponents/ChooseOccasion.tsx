import React from "react";
import { OccasionCard } from "../cards/OccasionCard";
import { SectionTitle } from "../ui/SectionTitle";

const PRIGODE = [
  {
    id: 1,
    name: "Djevojačka Proslava",
    description:
      "Pripremite se za nezaboravnu djevojačku zabavu koja će ostaviti snažan dojam i stvoriti trajne uspomene za vašu buduću nevjesticu! U našoj vikendici, slavlje postaje prava čarolija, gdje svaki detalj doprinosi nezaboravnom iskustvu",
    image:
      "https://images.unsplash.com/photo-1503315082045-a2bfb5e7f56e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Vikend Bijeg za Obitelj i Prijatelje",
    description:
      "Zamislite vikend daleko od svega, okruženi prirodom i ljudima koje volite. Naša vikendica pruža savršenu kulisu za opuštajući obiteljski odmor ili nezaboravan vikend s prijateljima.",
    image:
      "https://images.unsplash.com/photo-1503315082045-a2bfb5e7f56e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Proslave i Eventi",
    description:
      "Planirate rođendan ili imate neku posebnu situaciju za proslavit? Naša vikendica je idealno mjesto za organizaciju intimnih i elegantnih proslava. ",
    image:
      "https://images.unsplash.com/photo-1503315082045-a2bfb5e7f56e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Romantični Odmor za Dvoje",
    description:
      "Pobjegnite od svakodnevnog života i ponovno zapalite iskru s našim romantičnim paketom za dvoje. Uživajte u miru i tišini naše vikendice, opustite se uz čašu vina pokraj kamina ili pod zvjezdanim nebom. ",
    image:
      "https://images.unsplash.com/photo-1503315082045-a2bfb5e7f56e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const ChooseOccasion = () => {
  return (
    <div className="relative pt-[50px]  md:pt-[100px]">
      <SectionTitle title="Idealno Za" />
      <div className="flex justify-center items-center">
        <div className=" grid md:grid-cols-2 items-center justify-around gap-y-[40px] gap-x-[200px]">
          {PRIGODE.map((item) => {
            return (
              <OccasionCard
                key={item.id}
                name={item.name}
                img={item.image}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
