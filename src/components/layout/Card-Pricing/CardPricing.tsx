"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./CardPricing.module.css";

interface ComponentProps {
  title: string;
  price: string;
  features: string[];
}

export const CardPricing = (props: ComponentProps) => {
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
