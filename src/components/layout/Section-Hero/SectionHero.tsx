"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./SectionHero.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
      {/* BACKGROUND IMAGE */}
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
      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.content_text}>
          <h1 className={styles.content_title}>{text[l].title}</h1>
          <h2 className={styles.content_subtitle}>{text[l].subtitle}</h2>
        </div>

        <div className={styles.content_buttons}>
          <Button
            color="tertiary"
            variant={"default"}
            className={styles.content_buttons_button}
          >
            <Image
              src="/assets/icons/app-store-w.png"
              alt="Apple"
              width={20}
              height={20}
            />
            {text[l].cta.applestore}
          </Button>
          <Button
            color="tertiary"
            variant={"default"}
            className={styles.content_buttons_button}
          >
            <Image
              src="/assets/icons/play-store-w.png"
              alt="Google"
              width={20}
              height={20}
            />
            {text[l].cta.googleplay}
          </Button>
        </div>
      </div>
    </section>
  );
};
