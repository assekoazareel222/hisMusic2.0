import styles from "./section2.module.css";
import { Button } from "./button";

import Image from "next/image";

export const Section2 = () => {
  return (
    <div className={styles.containe}>
      <div className={styles.img}></div>
      <div className={styles.cadrant}>
        <div className={styles.top}>
          <div className={styles.bull}></div>
          <div className={styles.bull}></div>
          <div className={styles.bull}></div>
        </div>
        <div className={styles.middle}>
          <div className={styles.left}>
            <div className={styles.logo}></div>
            <div className={styles.textM}>
              <p>
                DEVENEZ UN ASSISTANT <br /> INGÉNIEUR DU SON <br />{" "}
                <span className={styles.span}>DIPLÔMÉ</span>{" "}
              </p>
            </div>
            <div className={styles.textB}>
              <p>
                {" "}
                Avec un curriculum professionnel <br />{" "}
                <strong>unnique dans le monde francophone</strong>
                <br /> Accessible où que vous soyez{" "}
              </p>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.inside}>
          <p>
            18 <br />
            Cours{" "}
          </p>
        </div>
        <div className={styles.inside}>
          {" "}
          <p>
            50 GB <br />
            de vidéo{" "}
          </p>
        </div>
        <div className={styles.insides}>
          <p>
            DIPLÔME
            <br />
            D'ASSISTANT <br />
            INGÉNIEUR{" "}
          </p>
          <button className={styles.souscrire}>SOUSCRIRE</button>
        </div>
        <div className={styles.inside}>
          <p>
            Examens
            <br />
            pratiques{" "}
          </p>
        </div>
      </div>
      <button className={styles.btn}>
        <Button />
      </button>
      <div className={styles.form}></div>
    </div>
  );
};
