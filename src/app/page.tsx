import { Navbar } from "@/components/layout/Navbar/Navbar";
import { SectionHero } from "@/components/layout/Section-Hero/SectionHero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`${styles.main}`}>
        <SectionHero />
      </main>
      <footer></footer>
    </>
  );
}
