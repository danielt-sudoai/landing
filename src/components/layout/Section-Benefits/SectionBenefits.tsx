"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./SectionBenefits.module.css";
import { CardBenefits } from "../Card-Benefits/CardBenefits";
import { ConstBenefits } from "@/consts/Const-Benefits";

interface ComponentProps {}

export const SectionBenefits = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <section className={`${styles.container} padding-page`}>
      <div className={styles.box_benefits}>
        {ConstBenefits.map((benefit, index) => (
          <CardBenefits key={index} data={benefit} />
        ))}
      </div>
    </section>
  );
};
