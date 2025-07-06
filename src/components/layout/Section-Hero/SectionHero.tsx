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
  function handleAppStore() {
    alert("App Store");
  }
  function handleGooglePlay() {
    alert("Google Play");
  }
  function handleWebApp() {
    alert("Web App");
  }
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
        {/* TEXT */}
        <div className={styles.content_text}>
          <h1 className={styles.content_title}>{text[l].title}</h1>
          <h2 className={styles.content_subtitle}>{text[l].subtitle}</h2>
        </div>

        {/* BUTTONS */}
        <div className={styles.content_buttons}>
          <Button
            color="tertiary"
            variant={"default"}
            className={styles.content_buttons_button}
            size="lg"
            onClick={handleAppStore}
          >
            <Image
              src="/assets/icons/app-store.png"
              alt="Apple"
              width={20}
              height={20}
              className="white-custom-color-filtered"
            />
            {text[l].cta.applestore}
          </Button>
          <Button
            color="tertiary"
            variant={"default"}
            size="lg"
            className={styles.content_buttons_button}
            onClick={handleGooglePlay}
          >
            <Image
              src="/assets/icons/play-store.png"
              alt="Google"
              width={20}
              height={20}
              className="white-custom-color-filtered"
            />
            {text[l].cta.googleplay}
          </Button>
          <Button
            color="tertiary"
            variant={"default"}
            size="lg"
            className={styles.content_buttons_button}
            onClick={handleWebApp}
          >
            <Image
              src="/assets/icons/www.png"
              alt="Web App"
              width={20}
              height={20}
              className="white-custom-color-filtered"
            />
            {text[l].cta.www}
          </Button>
        </div>
      </div>
      {/* IMAGE */}
      <div className={styles.content_image}>
        <Image
          src="/assets/images/hero-img.png"
          alt="Hero image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
