import styles from "./button.module.css";
import Link from "next/link";

export const Button = () => {
  return (
    <button className={styles.button}>
      {" "}
      <Link href="https://hismusicinstitute.com/">SOUSCRIRE MAINTENANT</Link>
    </button>
  );
};
