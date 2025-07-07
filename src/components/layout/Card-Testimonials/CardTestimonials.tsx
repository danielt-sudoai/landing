"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./CardTestimonials.module.css";
import { TypeTestimonials } from "@/types/Type-Testimonials";

interface ComponentProps {
  data: TypeTestimonials;
}

export const CardTestimonials = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <div className={styles.container}>
      <p
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: props.data.text[l] }}
      />
      <div>
        <h1 className={styles.name}>{props.data.name}</h1>
        <p className={styles.role}>{props.data.role[l]}</p>
      </div>
    </div>
  );
};
