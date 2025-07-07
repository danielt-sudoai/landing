"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./SectionFAQ.module.css";
import { HederSection } from "../Heder-Section/HederSection";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ConstFaq } from "@/consts/Const-Faq";

interface ComponentProps {}

export const SectionFAQ = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  const email = "info@example.com";
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <section className={`${styles.container} padding-page`}>
      {/* SX BOX */}
      <div className={styles.box_image}>
        <div className={styles.box_header}>
          <HederSection
            section_title={text[l].header.section_title}
            title={text[l].header.title}
            subtitle={text[l].header.subtitle}
          />
          <div className={styles.box_header_content}>
            <p>{text[l].content}</p>
          </div>
          <a href={`mailto:${email}`} className={styles.box_header_email}>
            {email}
          </a>
        </div>
        <Image
          src={"/assets/images/Faq-bg.png"}
          alt="Box image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "right",
          }}
          priority
        />
      </div>
      {/* DX BOX */}
      <div className={styles.box_content}>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {ConstFaq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.title[l]}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {item.content.map((content, index) => (
                  <p key={index}>{content[l]}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
