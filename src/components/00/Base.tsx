"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./Base.module.css";

interface ComponentProps {}

export const Base = (_props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <div className={styles.container}>
      <h1>{text[l].title}</h1>
    </div>
  );
};
