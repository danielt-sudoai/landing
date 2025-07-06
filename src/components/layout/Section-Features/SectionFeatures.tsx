"use client";
import styles from "./SectionFeatures.module.css";
import { BoxImage } from "../Box-Image/BoxImage";
import { HederSection } from "../Heder-Section/HederSection";
import { ItemFeature } from "../Item-Feature/ItemFeature";

interface ComponentProps {
  imagePath: string;
  contentPath: string;
  header: {
    section_title: string;
    title: string;
    subtitle: string;
  };
  features: {
    iconPath: string;
    title: string;
    description: string;
  }[];
  direction: "left" | "right";
}

export const SectionFeatures = (props: ComponentProps) => {
  // VARIABLES --------------------
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <section
      className={`${styles.container} padding-page ${
        props.direction === "left"
          ? styles.direction_left
          : styles.direction_right
      }`}
    >
      {/* BOX 1 */}
      <div className={styles.box_image}>
        <BoxImage imagePath={props.imagePath} contentPath={props.contentPath} />
      </div>
      {/* BOX 2 */}
      <div className={styles.box_content}>
        <HederSection
          section_title={"Features"}
          title={"Fondamenta per il Successo"}
          subtitle={
            "Tutto quello che ti serve per organizzare e completare i tuoi progetti"
          }
        />
        <div className={styles.box_features}>
          {props.features.map((feature, index) => (
            <ItemFeature
              key={index}
              iconPath={feature.iconPath}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
