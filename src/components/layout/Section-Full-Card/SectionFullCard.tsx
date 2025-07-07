"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./SectionFullCard.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ComponentProps {}

export const SectionFullCard = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  function handleCTA() {
    alert("CTA");
  }
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <section className={`${styles.container} padding-page`}>
      <div className={styles.box_image}>
        <Image
          src={"/assets/images/full-card.png"}
          alt="Full card"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "right",
          }}
          priority
        />
        <div className={styles.box_content}>
          <div className={styles.box_content_text}>
            <div className={styles.box_content_text_title}>
              <p className={styles.title}>{text[l].title}</p>
              <p className={styles.subtitle}>{text[l].subtitle}</p>
            </div>
            <Button onClick={handleCTA} color="tertiary">
              {text[l].CTA}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
