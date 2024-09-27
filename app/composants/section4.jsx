import styles from "./section4.module.css";
import Image from "next/image";

export const Section4 = () => {
  return (
    <div className={styles.contain}>
      <div className="">
        <div className="flex flex-row justify-center items-center py-[0px]">
          <div
            className={`${styles.top} text-[5rem] font-extrabold text-[#132254] w-[450px] text-justify`}
          >
            {" "}
            Pourquoi Hismusic Institute ?
          </div>
          <div className=" text-[20px] text-[#132254] w-[900px]  mt-[500px]">
            <p>
              Durant ses passionnantes études d’ingénierie du son aux USA,
              Hyacine do Rego nourrissait le désir de transférer à d’autres le
              rare savoir-faire qu’il avait reçu.
            </p>
            <br />
            <p>
              Quelques années plus tard, après avoir fondé et hissé HDR LIVE
              parmis les meilleures entreprises de sonorisation au Gabon, et
              fort de son succès sur la scène internationale, mixant de grands
              concerts et artistes tels que{" "}
              <strong>Derek Jones, Jonathan Gambela, El-Georges </strong> et
              plusieurs autres, Hyacine do Rego s’est décidé à partager sa
              connaissance avec le plus grand nombre. De là est né Hismusic
              Institute !
            </p>
            <br />
            <p>
              S’inspirant du modèle éducatif américain, ce curriculum associe
              une approche ultra -pratique, avec des cours intégralement en
              Français, faisant de cette formation professionnelle l’unique du
              genre dans le monde francophone.
            </p>

            <button
              type="button"
              className="text-[#fff] bg-[#132254] text-[20px] uppercase ml-[550px] mt-[100px] px-[15px] py-[10px] rounded-[20px]"
            >
              Débuter la Formation
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};
