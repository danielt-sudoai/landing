"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./SectionCTA.module.css";
import { Button } from "@/components/ui/button";

interface ComponentProps {}

export const SectionCTA = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <section className={`${styles.container} padding-page padding-section`}>
      {/* TITLE */}
      <div className={styles.title_container}>
        <h3 className={styles.title}>{text[l].title}</h3>
        <p className={styles.title}>{text[l].subtitle}</p>
      </div>
      {/* BUTTONS */}
      <div className={styles.buttons}>
        <Button color="tertiary" variant={"default"} size="lg">
          {text[l].cta.title}
        </Button>
        <p className={styles.subtitle}>{text[l].cta.subtitle}</p>
      </div>
    </section>
  );
};
