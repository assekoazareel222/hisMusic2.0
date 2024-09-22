import styles from "./section6.module.css";
import Image from "next/image";
import { Button } from "./button";
export const Section6 = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.left}>
        <h1 className={styles.titre}>
          Les Notions que <br />
          vous Aborderez
        </h1>
        <div className={styles.modules}>
          <div className={styles.svg}></div>
          <div className={styles.module}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Module 1</strong>
              </li>
              <li className={styles.li}>AMPLITUDE</li>
              <li className={styles.li}>FRÉQUENCES</li>
              <li className={styles.li}>ÉCOUTE CRITIQUE</li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Module 2</strong>
              </li>
              <li className={styles.li}>TRANSDUCTEURS</li>
              <li className={styles.li}>PROCESSEURS</li>
              <li className={styles.li}>CÂBLAGE</li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Module 3</strong>
              </li>
              <li className={styles.li}>EQ GRAPHIQUE</li>
              <li className={styles.li}>EQ PARAMETRE</li>
              <li className={styles.li}>TECHNIQUE D'EQ</li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Module 4</strong>
              </li>
              <li className={styles.li}>COMPRESSION</li>
              <li className={styles.li}>LIMITING</li>
              <li className={styles.li}>GATING</li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Module 5</strong>
              </li>
              <li className={styles.li}>GAIN STAGING</li>
              <li className={styles.li}>MONITORING</li>
              <li className={styles.li}>FEEDBACK</li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Module 6</strong>
              </li>
              <li className={styles.li}>GROUP & VCAS</li>
              <li className={styles.li}>SIGNAL FLOW</li>
              <li className={styles.li}>SOUNDCHECK/MIXAGE LIVE</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {" "}
        <div className={styles.Image}>
          <div className={styles.laptop}></div>
          <div className={styles.phone}></div>
          <div className={styles.form}></div>
          <button className={styles.button}>
            <Button />
          </button>
        </div>
      </div>
    </div>
  );
};
