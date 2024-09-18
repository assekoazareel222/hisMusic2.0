import styles from "./cour.module.css";
import React from "react";

export default function Home() {
  return (
    <div className={styles.containe}>
      <div className="relative -start-[570px]">
        <h1 className={styles.img}></h1>
      </div>

      <div>
        <iframe
          width="900"
          height="450"
          src="https://www.youtube.com/embed/KqEj6X09NSk?si=tXIRE60hOn_OmR33"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="mt-7 flex text-white text-xl font-medium">
        {" "}
        CURRICULUM PROFESSIONNEL -{" "}
        <p className="text-yellow-500">UNIQUE DANS LE MONDE FRANCOPHONE</p> -
        FORMATION DIPLÔMANTE
      </h2>
    </div>
  );
}
