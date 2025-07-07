"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./Navbar.module.css";
import { Button } from "@/components/ui/button";
import { BoxLogo } from "../Box-Logo/BoxLogo";

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
    <div className={`${styles.container}`}>
      {/* LOGO */}
      <BoxLogo />

      {/* BUTTON */}
      <div className={styles.container_button}>
        <Button onClick={handleCTA} color="tertiary" variant={"default"}>
          {text[l].cta}
        </Button>
      </div>
    </div>
  );
};
