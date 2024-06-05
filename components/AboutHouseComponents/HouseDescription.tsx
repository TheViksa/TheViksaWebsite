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
          src="https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          alt="the viksa house"
          className="object-contain w-full"
        />
      </div>
    </div>
  );
};
