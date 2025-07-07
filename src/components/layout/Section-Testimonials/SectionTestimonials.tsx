"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./SectionTestimonials.module.css";
import { ConstTestimonials } from "@/consts/Const-Testimonials";
import { TypeTestimonials } from "@/types/Type-Testimonials";
import { CardTestimonials } from "../Card-Testimonials/CardTestimonials";
import { HederSection } from "../Heder-Section/HederSection";

interface ComponentProps {}

export const SectionTestimonials = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <section className={`${styles.container} padding-page`}>
      <HederSection
        align="center"
        section_title={text[l].header.section_title}
        title={text[l].header.title}
        subtitle={text[l].header.subtitle}
      />
      <div className={styles.testimonials_container}>
        {ConstTestimonials.map(
          (testimonial: TypeTestimonials, index: number) => (
            <CardTestimonials key={index} data={testimonial} />
          )
        )}
      </div>
    </section>
  );
};
