import styles from "./setion3.module.css";
import { Button } from "./button";
import Link from "next/link";

import Image from "next/image";

export const Section3 = () => {
  return (
    <div className={styles.containe}>
      <div className={styles.contentText}>
        <div className={styles.titre}>Le mot de l’instructeur</div>

        <div className={styles.text}>
          <div className={styles.nom}>Hyasine Do Rego</div>
          <p>
            Fondateur & Ingénieur en Chef à <strong>HDR Live</strong> <br />
            Fondateur & Instructeur principal à{" "}
            <strong>HISMUSIC INSTITUTE</strong> <br />
            BSc. Audio Engineering Technology, Delta Music Institute, DSU, USA,{" "}
            <br /> MSc. Music Technology, Purdue School of Engineering &
            Technology, IUPUI, USA
          </p>
        </div>
        <div className={styles.video}></div>
      </div>

      <div className={styles.contentR}>
        <div className={styles.image}></div>
        <div className={styles.formBtn}>
<<<<<<< HEAD
          <button className={styles.btn}>SOUSCRIRE MAINTENANT</button>
=======
          <button className={styles.btn}>
            <Link href="https://hismusicinstitute.com/">
              SOUSCRIRE MAINTENANT
            </Link>
          </button>
>>>>>>> 8ee64f658465766c28e3290506ef14805c4fd5bd
          <div className={styles.form}></div>
        </div>
      </div>
    </div>
  );
};
