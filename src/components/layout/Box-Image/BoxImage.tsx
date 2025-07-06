"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./BoxImage.module.css";
import Image from "next/image";

interface ComponentProps {
  imagePath: string;
  contentPath: string;
}

export const BoxImage = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <div className={styles.box_image}>
      <Image
        src={props.contentPath}
        alt="Box content"
        className={styles.contentPath}
        width={100}
        height={100}
      />
      <Image
        src={props.imagePath}
        alt="Box image"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "right",
        }}
        priority
      />
    </div>
  );
};
