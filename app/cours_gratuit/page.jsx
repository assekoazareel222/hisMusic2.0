"use client"; // Ajoute cette directive en haut du fichier

import styles from "./cour.module.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      new window.YT.Player("youtube-player", {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setVideoEnded(true);
            }
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }
  }, []);

  return (
    <div className={styles.containe}>
      <div className="relative -start-[580px]">
        <h1 className={styles.img}></h1>
      </div>

      <div className="relative items-center justify-center flex w-[100%] h-[50%]">
        <iframe
          id="youtube-player"
          style={{ width: "70%", height: "150%" }}
          src="https://www.youtube.com/embed/KqEj6X09NSk?enablejsapi=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {videoEnded && (
          <div className="absolute inset-0 flex items-center justify-center flex-col rounded-2xl">
            <p className="bg-white w-80 h-24 text-center rounded-tl-xl rounded-tr-xl  justify-center items-center flex font-bold text-xl">POUR CONTINUER,<br /> SOUSCRIVEZ À NOTRE <br />FORMATION ONLINE</p>
            <a
              href="https://www.exemple.com"
              className="bg-yellow-400 hover:bg-yellow-700 rounded-bl-xl rounded-br-xl text-yellow-400 font-bold py-2 px-4 w-80 h-36 flex justify-center items-center"
            >
              <p className="w-36 h-16 bg-white items-center flex justify-center rounded-md text-center">
                {" "}
                S’INCRIRE <br />
                MAINTENANT
              </p>
            </a>
          </div>
        )}
      </div>

      <h2 className="flex text-white text-xl font-medium">
        CURRICULUM PROFESSIONNEL -{" "}
        <p className="text-yellow-500">UNIQUE DANS LE MONDE FRANCOPHONE</p> -
        FORMATION DIPLÔMANTE
      </h2>
    </div>
  );
}
