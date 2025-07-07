"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./BoxLogo.module.css";
import Image from "next/image";

interface ComponentProps {}

export const BoxLogo = (_props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <div className={styles.container}>
      <Image
        className={styles.container_logo_image}
        src="/logo.png"
        alt="logo"
        width={32}
        height={32}
      />
      <span className={styles.container_logo_text}>{text[l].title}</span>
    </div>
  );
};
