import React from "react";
import Image from "next/image";

import styles from "./styles/blog-header.module.css";

function BlogHeaderComponent({ title, image }) {
  return (
    <header>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.image}>
        <Image src={image} width={200} height={150} layout="responsive" />
      </div>
    </header>
  );
}

export default BlogHeaderComponent;
