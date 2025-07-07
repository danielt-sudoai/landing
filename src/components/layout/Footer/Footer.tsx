"use client";
import { useContextLanguage } from "@/context/context-Language";
import { text } from "./text";
import styles from "./Footer.module.css";
import { BoxLogo } from "../Box-Logo/BoxLogo";
import { ConstLinks, ConstLegal } from "@/consts/ConstLinks";
import { TypeLink } from "@/types/tyle-Link";
import Image from "next/image";

interface ComponentProps {}

export const Footer = (props: ComponentProps) => {
  // VARIABLES --------------------
  const { l } = useContextLanguage();
  // STATES -----------------------
  // FUNCTIONS --------------------
  // EFFECTS ----------------------
  // RENDER -----------------------
  return (
    <footer className={`${styles.container} padding-page`}>
      <div className={styles.content}>
        <BoxLogo />
        {/* QUICK LINKS */}
        <div className={styles.content_box}>
          <p className={styles.content_box_title}>Quick Links</p>
          <div className={styles.content_box_elements}>
            {ConstLinks.map((link: TypeLink) => (
              <a
                className={styles.content_box_element}
                href={`#${link.UID}`}
                key={link.UID}
              >
                {link.label[l]}
              </a>
            ))}
          </div>
        </div>
        {/* LEGAL */}
        <div className={styles.content_box}>
          <p className={styles.content_box_title}>Legal</p>
          <div className={styles.content_box_elements}>
            {ConstLegal.map((link: TypeLink) => (
              <a
                className={styles.content_box_element}
                href={`#${link.UID}`}
                key={link.UID}
              >
                {link.label[l]}
              </a>
            ))}
          </div>
        </div>
        {/* CONTACT */}
        <div className={styles.content_box}>
          <p className={styles.content_box_title}>Contact</p>
          <div className={styles.content_box_elements}>
            {/* SOCIALS */}
            <div className={styles.content_box_socials}>
              <a href="https://www.facebook.com/motivami" target="_blank">
                <Image
                  className={"black-custom-color-filtered"}
                  src="/assets/icons/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.instagram.com/motivami" target="_blank">
                <Image
                  className={"black-custom-color-filtered"}
                  src="/assets/icons/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.instagram.com/motivami" target="_blank">
                <Image
                  className={"black-custom-color-filtered"}
                  src="/assets/icons/tik-tok.png"
                  alt="TikTok"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.twitter.com/motivami" target="_blank">
                <Image
                  className={"black-custom-color-filtered"}
                  src="/assets/icons/twitter.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <div className={styles.content_box_contact}>
              <a
                className={styles.content_box_contact_email}
                href="mailto:info@motivami.com"
              >
                info@motivami.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.content_copyright}>
        <p className={styles.content_copyright_text}>
          Made with ❤️ by <a href="https://www.motivami.com">@daniel_ntll</a>
        </p>
      </div>
    </footer>
  );
};
