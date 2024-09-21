import styles from "./header.module.css";
import Image from "next/image";
import { Form } from "./formulaire1";

export const Header = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.logo}>
        <div className={styles.img}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentTexte}>
          <div className={styles.texte}>
            <p className={styles.titre1}>
              ASSITANT <br /> INGÉNIEUR DU SON
            </p>
            <p className={styles.titre2}>FORMATION</p>
            <div className={styles.group}>
              <p className={styles.titre3}>100%</p>
              <p className={styles.titre4}>ONLINE</p>
            </div>
          </div>
          <div className={styles.textFoot}>
            <p className={styles.nom}>Par Hyacine do rego</p>
            <p>
              Fondateur & Ingénieur en Chef à <strong>HDR Live</strong>
              <br />
              Fondateur & Instructeur principal à{" "}
              <strong>HISMUSIC INSTITUTE</strong>
              <br />
              BSc. Audio Engineering Technology, Delta Music Institute, DSU,
              USA,
              <br />
              MSc. Music Technology, Purdue School of Engineering & Technology,
              IUPUI, USA br
            </p>
          </div>
        </div>
        <div className={styles.Form}>
          <Form />
        </div>
      </div>
      <div className={styles.footer}>
        <ul className={styles.liste}>
          <li className={styles.white}>CURRICULUM PROFESSIONNEL</li>
          <li>- UNIQUE DANS LA FRANCOPHONIE</li>
          <li className={styles.white}>- FORMATION DIPLÔMANTE</li>
        </ul>
      </div>
    </div>
  );
};
