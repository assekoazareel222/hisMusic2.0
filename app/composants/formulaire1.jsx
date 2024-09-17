import styles from "./formulaire1.module.css";

export const Form = () => {
  return (
    <div className={styles.Form}>
      <div class={styles.formSection}>
        <div className={styles.section1}>
          <h2 className={styles.titre}>
            DÉBUTEZ VOTRE <br /> FORMATION <br />
            DIPLÔMANTE
          </h2>
        </div>
        <form className={styles.section2}></form>
      </div>
    </div>
  );
};
