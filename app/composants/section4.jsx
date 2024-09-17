import styles from "./section4.module.css";
import Image from "next/image";
import { Formulaire } from "./formulaire";

export const Section4 = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.contenu}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
          <Formulaire />
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};
