import Image from "next/image";
import React from "react";

export const HouseDescription = () => {
  return (
    <div className="flex flex-col md:flex-row  relative">
      <div className=" flex-1 relative">
        <h2 className="article-h2">Šarm i Udobnost</h2>
        <p className="article-p">
          Naša vikendica savršeno kombinira rustikalni šarm i moderne udobnosti,
          stvarajući jedinstvenu atmosferu za opuštanje i uživanje. Okruženi
          prirodom, ovdje ćete pronaći sve što vam je potrebno za nezaboravan
          odmor.
        </p>
        <p className="article-p">
          Naša vikendica savršeno kombinira rustikalni šarm i moderne udobnosti,
          stvarajući jedinstvenu atmosferu za opuštanje i uživanje. Okruženi
          prirodom, ovdje ćete pronaći sve što vam je potrebno za nezaboravan
          odmor.
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
