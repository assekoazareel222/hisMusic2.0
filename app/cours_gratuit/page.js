import styles from "./section.cour.module.css";

export default function Home() {
  return (
    <section className={styles.backgroundContainer}>
      <div className="flex flex-col justify-center items-center">
        <div className="relative -left-[620px]">
        <img
        className="fit-picture"
        src="/Logo Yellow-White.png" // Assurez-vous que le fichier existe dans le dossier `public/media/cc0-images/`
        alt="Grapefruit slice atop a pile of other slices"
        width={50}
        height={25}
      />
          <h1 className="">logo</h1>
        </div>

        <div id="videobox">
  <video
    width={1000}
    height={500}
    id="video"
    src="C:\Users\USER\Desktop\projet\projet-avec asseko\hisMusic2.0\app\public\femme_de_potentiel.mp4"
    autoPlay
    loop
    controls
  />
  </div>
        <h2 className="mt-7">
          CURRICULUM PROFESSIONNEL - UNIQUE DANS LE MONDE FRANCOPHONE - FORMATION DIPLÔMANTE
        </h2>
      </div>
    </section>
  );
}
