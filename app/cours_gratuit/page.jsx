import styles from "./cour.module.css";
import React from "react";

export default function Home() {
  return (
    <div className={styles.containe}>
      <div className="relative -start-[590px]">
        <h1 className={styles.img}></h1>
      </div>

      <div className="items-center justify-center flex w-[100%] h-[50%]">
        <iframe
          style={{ width: "60%", height: "140%" }} // Utilise les pourcentages ici
          src="https://www.youtube.com/embed/KqEj6X09NSk?si=tXIRE60hOn_OmR33"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="flex text-white text-2xl font-medium mt-5">
        {" "}
        CURRICULUM PROFESSIONNEL -{" "}
        <p className="text-yellow-500">UNIQUE DANS LE MONDE FRANCOPHONE</p> -
        FORMATION DIPLÔMANTE
      </h2>
    </div>
  );
}
