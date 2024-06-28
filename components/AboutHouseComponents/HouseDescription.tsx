import Image from "next/image";
import React from "react";

export const HouseDescription = () => {
  return (
    <div className="flex flex-col md:flex-row items-center relative">
      <div className=" flex-1 relative">
        <h2 className="article-h2">Šarm i Udobnost</h2>
        <p className="article-p">
          Naša vikendica savršeno kombinira rustikalni šarm i moderne udubnosti,
          stvarajući jedinstvenu atmosferu za opuštanje i uživanje. Okruženi
          prirodom, ovdje ćete pronaći sve što vam je potrebno za nezaboravan
          odmor.
        </p>
        <p className="article-p">
          The Vixa nudi udobni smještaj za 7+1 osoba u dvije sobe, prostranim
          dnevnim boravkom, potpuno opremljenom kupaonicom te kuhinjom sa
          izlazom na terasu.
        </p>
        <p className="article-p">
          Konoba može ugostiti do 30 ljudi te se funkcijom može prilagoditi
          vrsti proslave i godišnjem dobu. Zimi je potpuno zatvorena sa
          unutarnjim roštiljem/kaminom koji pruža ugodnu atmosferu, a ljeti se
          kliznom stijenom spaja sa dodatnom vanjskom terasom koja pruža pogled
          na bazen i prirodu. Konoba je potpuno opremljena svime što vam treba
          za nezaboravnu proslavu; stolovi sa klupama i stolicama, kupaonica te
          manja kuhinja sa kuhinjskom opremom za 30 ljudi.{" "}
        </p>
        <p className="article-p">
          Vanjski dječji park je ograđen te sadrži dvije ljuljačke, tobogan,
          kućicu sa igračkama, pješčanik i klupicu sa stolićem. Dodatno pored
          dječjeg parka nalazi se također ograđeno zeleno igralište prilagođeno
          za mali nogomet, badminton te ostale vanjske igre. Za dječje proslave
          dodatno nudimo dječje stoliće sa stolicama kako bi i najmlađi imali
          svoj dodatni kutak za jelo i proslave.{" "}
        </p>
        <p className="article-p">
          Bazen i sunčalište nalaze se na donjoj etaži i pružaju pogled prema
          divnoj prirodi.{" "}
        </p>
      </div>
      <div className="md:flex-1 h-[250px] md:h-[400px]  relative ">
        <Image
          src="/assets/images/15.jpg"
          fill
          alt="the viksa house"
          className="object-contain w-full"
        />
      </div>
    </div>
  );
};
