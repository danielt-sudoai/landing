"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./CardPricing.module.css";
import { TypePricing } from "@/types/type-Pricing";
import { Button } from "@/components/ui/button";

interface ComponentProps {
  pricing: TypePricing;
}

export const CardPricing = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  const handleClick = () => {
    alert("clicked");
  };
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <div
      className={`${styles.container} ${
        props.pricing.isMostPopular ? styles.most_popular : ""
      }`}
    >
      <div className={styles.header}>
        <p className={styles.title}>{props.pricing.title[l]}</p>
        <h1 className={styles.price}>
          {props.pricing.price[l]}
          {props.pricing.currency && (
            <span className={styles.price_currency}>
              {" "}
              {props.pricing.currency.currency[l]} /{" "}
              {props.pricing.currency.recurring[l]}
            </span>
          )}
        </h1>
      </div>
      <div className={styles.features_container}>
        {props.pricing.features[l].map((feature: string, index: number) => (
          <p key={index} className={styles.feature}>
            {feature}
          </p>
        ))}
      </div>
      <Button
        color={props.pricing.isMostPopular ? "tertiary" : "secondary"}
        onClick={handleClick}
        className={styles.button}
      >
        {props.pricing.button[l]}
      </Button>
    </div>
  );
};
