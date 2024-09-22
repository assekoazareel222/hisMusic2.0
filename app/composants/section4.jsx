import styles from "./section4.module.css";
import Image from "next/image";
import { Formulaire } from "./formulaire";
import { Form } from "./formulaire1";

export const Section4 = () => {
  return (
    <div className={styles.contain}>
      <div className="flex flex-row justify-evenly items-baseline">
        <div className="w-[400px] h-[600px]">
          <div className="text-[40px] font-extrabold text-gray-500"> Pourquoi <br/> Hismusic Institute ?</div>
          <div className="mt-[20px] text-[16px]">
            <p>
              Durant ses passionnantes études d’ingénierie du son aux USA,
              Hyacine do Rego nourrissait le désir de transférer à d’autres le
              rare savoir-faire qu’il avait reçu.
            </p>
            <br/>
            <p>
              Quelques années plus tard, après avoir fondé et hissé HDR LIVE
              parmis les meilleures entreprises de sonorisation au Gabon, et
              fort de son succès sur la scène internationale, mixant de grands
              concerts et artistes tels que <strong>Derek Jones,
              Jonathan Gambela, El-Georges </strong> et plusieurs autres, Hyacine do Rego
              s’est décidé à partager sa connaissance avec le plus grand nombre.
              De là est né Hismusic Institute !
            </p>
            <br/>
            <p>
                S’inspirant du modèle éducatif américain, ce curriculum
                associe une approche ultra  -pratique, avec des cours
                intégralement en Français, faisant de cette formation
                professionnelle l’unique du genre dans le monde
                francophone.
            </p>
          </div>
        </div>
        <div className={styles.middle}>
         <Form/>
        </div>

        <div className={styles.right}>
        <Formulaire />
        </div>
      </div>
    </div>
  );
};
