import styles from "./section4.module.css";
import Image from "next/image";
import { Formulaire } from "./formulaire";

export const Section4 = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.contenu}>
        <div className={styles.left}>
          <div className={styles.titre}>Pourquoi Hismusic Institute ?</div>
          <div className={styles.titre}>
            <p>
              Durant ses passionnantes études d’ingénierie du son aux USA,
              Hyacine do Rego nourrissait le désir de transférer à d’autres le
              rare savoir-faire qu’il avait reçu.
            </p>
            <p>
              Quelques années plus tard, après avoir fondé et hissé HDR LIVE
              parmis les meilleures entreprises de sonorisation au Gabon, et
              fort de son succès sur la scène internationale, mixant de grands
              concerts et artistes tels que <strong></strong> Derek Jones,
              Jonathan Gambela, El-Georges et plusieurs autres, Hyacine do Rego
              s’est décidé à partager sa connaissance avec le plus grand nombre.
              De là est né Hismusic Institute !
            </p>
          </div>
        </div>
        <div className={styles.middle}></div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};
