import styles from "./formulaire1.module.css";

export const Form = () => {
  return (
    <div className={styles.Form}>
      <div class={styles.formSection}>
        <div className={styles.section1}>
          <h2 className={styles.titre}>
            DÉBUTEZ VOTRE <br /> FORMATION <br />
            <span className="text-[40px]">
            DIPLÔMANTE
              </span>
          </h2>
        </div>
        <form className={styles.section2}>
          <div className="flex flex-col gap-[10px] w-[400px] ">
            <input type="text" name="" id="" placeholder="Votre Nom" className="rounded-[8px] px-[10px] py-[5px] bg-rose-200 text-white italic"/>
            <input type="text" name="" id="" placeholder="Votre Prénom" className="rounded-[8px] px-[10px] py-[5px] bg-rose-200 text-white italic"/>
            <input type="email" name="" id="" placeholder="Votre Email"className="rounded-[8px] px-[10px] py-[5px] bg-rose-200 text-white italic "/>
          </div>

          <div className="flex gap-[10px]  w-[400px]">
            <input type="text" name="" id="" placeholder="Pays (indicatif)" className="w-full rounded-[8px] px-[10px] py-[5px] bg-rose-200 text-white italic "/>
            <input type="tel" name="" id="" placeholder="Téléphone" className="w-full rounded-[8px] px-[10px] py-[5px] bg-rose-200 text-white italic "/>
          </div>

          <div className="flex flex-row gap-[10px] mt-[10px]">
            <input type="checkbox" name="" id="" className="w-[25px] h-[25px] mt-[5px] rounded-[10px]" />
            <p className="text-white text-[12px]">
            J'accepte de recevoir des communications<br/>
            marketing de la part de Hismusic Institute
            </p>
          </div>

          <button type="submit" className="border-2 border-white text-white font-bold px-[20px] py-[10px] rounded-[10px] mt-[20px]">S'INSCRIRE MAINTENANT</button>
        </form>
        
      </div>
    </div>
  );
};
