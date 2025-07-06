"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./ItemFeature.module.css";
import Image from "next/image";

interface ComponentProps {
  iconPath: string;
  title: string;
  description: string;
}

export const ItemFeature = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <div className={styles.container}>
      <div className={styles.box_icon}>
        <Image src={props.iconPath} alt="icon" width={64} height={64} />
      </div>
      <div className={styles.box_content}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};
