"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./SectionPricing.module.css";
import { HederSection } from "../Heder-Section/HederSection";
import { CardPricing } from "../Card-Pricing/CardPricing";

interface ComponentProps {}

export const SectionPricing = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <section className={`${styles.container} padding-page`}>
      <HederSection
        align="center"
        section_title={text[l].header.section_title}
        title={text[l].header.title}
        subtitle={text[l].header.subtitle}
      />
      <div className={styles.cards_container}>
        <CardPricing
          title="Basic"
          price="10"
          features={["100 projects", "1000 tasks", "10000 items"]}
        />
        <CardPricing
          title="Pro"
          price="20"
          features={["1000 projects", "10000 tasks", "100000 items"]}
        />
        <CardPricing
          title="Pro"
          price="20"
          features={["1000 projects", "10000 tasks", "100000 items"]}
        />
      </div>
    </section>
  );
};
