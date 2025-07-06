"use client";
import { useContextLanguage } from "@/context/context-Language";
import styles from "./HederSection.module.css";

interface ComponentProps {
  section_title: string;
  title: string;
  subtitle: string;
  align?: "left" | "center" | "right";
}

export const HederSection = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <div
      className={styles.container}
      style={{
        textAlign: props.align,
      }}
    >
      <div>
        <p className={styles.section_title}>{props.section_title}</p>
        <p className={styles.title}>{props.title}</p>
      </div>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </div>
  );
};
