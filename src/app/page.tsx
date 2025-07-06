"use client";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { SectionHero } from "@/components/layout/Section-Hero/SectionHero";
import { SectionCTA } from "@/components/layout/Section-CTA/SectionCTA";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`${styles.main}`}>
        <SectionHero />
        <SectionCTA />
      </main>
      <footer></footer>
    </>
  );
}
