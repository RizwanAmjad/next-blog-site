import Image from "next/image";
import React from "react";

import styles from "./styles/hero.module.css";

function HeroComponent(props) {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/rizwan-image.jpg"
          alt="Image of the Blogger"
          width={250}
          height={250}
        />
      </div>
      <h2>Hi I am Rizwan Amjad!</h2>
      <p>MERN stack | Next JS | React Native | Electron JS | Flask | Android</p>
      <p>I write blogs about Web and Mobile Development etc</p>
    </section>
  );
}

export default HeroComponent;
