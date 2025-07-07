"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./SectionPricing.module.css";
import { HederSection } from "../Heder-Section/HederSection";
import { CardPricing } from "../Card-Pricing/CardPricing";
import { const_pricing } from "@/consts/Const-Pricing";
import { TypePricing } from "@/types/type-Pricing";

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
        {const_pricing.map((pricing: TypePricing, index: number) => (
          <CardPricing key={index} pricing={pricing} />
        ))}
      </div>
    </section>
  );
};
