"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./SectionHero.module.css";
import Image from "next/image";

interface ComponentProps {}

export const SectionHero = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <section className={`${styles.container} padding-page`}>
      <div className={styles.backgroundImage}>
        <Image
          src="/assets/images/hero-bg.png"
          alt="Hero background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
      </div>
      <div className={styles.content}>
        <h1>{text[l].title}</h1>
      </div>
    </section>
  );
};
