import styles from "./section2.module.css";
import { Button } from "./button";
import Link from "next/link";

import Image from "next/image";

export const Section2 = () => {
  return (
    <div className={styles.containe}>
      <div className={styles.box}>
        <div className={styles.inside}>
          <div className={styles.text}>
            <strong className={styles.text1}>
              Devenez un assistant ingénieur du son diplômé. <br />{" "}
            </strong>
            Avec un curriculum professionnel unique dans le monde francophone.
            Accessible où que vous soyez.
          </div>
          <div className={styles.cadre}>
            <div className={styles.element}>
              18 <br /> cours
            </div>
            <div className={styles.element}>
              50 GB <br /> de videos
            </div>
            <div className={styles.element1}>
              Diplôme <br /> d’assistant <br />
              ingénieur
            </div>
            <div className={styles.element}>
              Examens <br />
              pratiques
            </div>
          </div>
          <button className={styles.button}>Debuter la formation</button>
        </div>
      </div>
    </div>
  );
};
