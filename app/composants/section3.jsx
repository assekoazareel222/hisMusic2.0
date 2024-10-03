import styles from "./setion3.module.css";

export const Section3 = () => {
  return (
    <div className={styles.containe}>
      <section className="w-[100%] h-[100%] justify-start flex flex-col ml-[4%]">
        <h1 className="text-5xl font-extrabold relative top-16 text-blue-950"> Le mot de l’instructeur</h1>
        <div className="relative items-center justify-start flex w-[100%] h-[90%]">
          <iframe
            className=""
            id="youtube-player"
            style={{ width: "60%", height: "75%" }}
            src="https://www.youtube.com/embed/xHDF6XWZqeg?si=Jnd7VhimpMAZBczJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative -top-14 flex flex-col font-semibold text-blue-950">
        <h2 className="font-fasthand font-light text-4xl">Hyacine do Rego</h2>
        <h3 className="text-xl mt-[1%]">Fondateur & Ingénieur en Chef à <span className="font-black">HDR Live</span> <br />
            Fondateur & Instructeur principal à <span className="font-black">HISMUSIC INSTITUTE</span> <br />
            BSc. Audio Engineering Technology, Delta Music Institute, DSU, USA,<br />
            MSc. Music Technology, Purdue School of Engineering & Technology,<br />
            IUPUI, USA</h3>
            </div>
      </section>
    </div>
  );
};

