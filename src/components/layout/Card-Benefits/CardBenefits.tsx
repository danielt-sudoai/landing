"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./CardBenefits.module.css";
import { TypeBenefit } from "@/types/Type-Benefit";
import Image from "next/image";

interface ComponentProps {
  data: TypeBenefit;
}

export const CardBenefits = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <div className={styles.container}>
      <div className={styles.box_image}>
        <Image
          src={props.data.imagePath}
          alt={props.data.title[l]}
          width={64}
          className="black-custom-color-filtered"
          height={64}
        />
        <p className={styles.title}>{props.data.title[l]}</p>
      </div>
      <div className={styles.box_content}>
        <p className={styles.subtitle}>{props.data.subtitle[l]}</p>
        <p className={styles.content}>{props.data.content[l]}</p>
      </div>
    </div>
  );
};
