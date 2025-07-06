"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ComponentProps {}

export const Navbar = (props: ComponentProps) => {
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
    <div className={`${styles.container} padding-page`}>
      {/* LOGO */}
      <div className={styles.container_logo}>
        <Image
          className={styles.container_logo_image}
          src="/logo.png"
          alt="logo"
          width={32}
          height={32}
        />
        <span className={styles.container_logo_text}>{text[l].title}</span>
      </div>

      {/* BUTTON */}
      <div className={styles.container_button}>
        <Button onClick={handleCTA} color="tertiary" variant={"default"}>
          {text[l].cta}
        </Button>
      </div>
    </div>
  );
};
