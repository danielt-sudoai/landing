"use client";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { SectionHero } from "@/components/layout/Section-Hero/SectionHero";
import { SectionCTA } from "@/components/layout/Section-CTA/SectionCTA";
import { SectionFeatures } from "@/components/layout/Section-Features/SectionFeatures";
import styles from "./page.module.css";
import { text } from "./page-text";
import { useContextLanguage } from "@/context/context-Language";
import { SectionPricing } from "@/components/layout/Section-Pricing/SectionPricing";

export default function Home() {
  const { l } = useContextLanguage();
  return (
    <>
      <Navbar />
      <main className={`${styles.main}`}>
        <SectionHero />
        <SectionCTA />
        <SectionFeatures
          imagePath="/assets/images/box-f-1.png"
          contentPath="/assets/images/phone.png"
          header={{
            section_title: text[l].features[0].header.section_title,
            title: text[l].features[0].header.title,
            subtitle: text[l].features[0].header.subtitle,
          }}
          features={[
            {
              iconPath: "/assets/icons/target.png",
              title: text[l].features[0].features[0].title,
              description: text[l].features[0].features[0].description,
            },
            {
              iconPath: "/assets/icons/calendar.png",
              title: text[l].features[0].features[1].title,
              description: text[l].features[0].features[1].description,
            },
            {
              iconPath: "/assets/icons/route.png",
              title: text[l].features[0].features[2].title,
              description: text[l].features[0].features[2].description,
            },
          ]}
          direction="left"
        />
        <SectionFeatures
          imagePath="/assets/images/bg-hero.png"
          contentPath="/assets/images/phone.png"
          header={{
            section_title: text[l].features[1].header.section_title,
            title: text[l].features[1].header.title,
            subtitle: text[l].features[1].header.subtitle,
          }}
          features={[
            {
              iconPath: "/assets/icons/target.png",
              title: text[l].features[1].features[0].title,
              description: text[l].features[1].features[0].description,
            },
            {
              iconPath: "/assets/icons/calendar.png",
              title: text[l].features[1].features[1].title,
              description: text[l].features[1].features[1].description,
            },
            {
              iconPath: "/assets/icons/route.png",
              title: text[l].features[1].features[2].title,
              description: text[l].features[1].features[2].description,
            },
          ]}
          direction="right"
        />
        <SectionPricing />
      </main>
      <footer></footer>
    </>
  );
}
