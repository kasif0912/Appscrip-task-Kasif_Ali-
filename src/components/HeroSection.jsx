import React from "react";
import style from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={style["hero-section"]}>
      <h1 className={style["hero-title"]}>DISCOVER OUR PRODUCTS</h1>
      <p className={style["hero-subtitle"]}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </section>
  );
}
