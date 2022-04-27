import React from "react";
import Image from "next/image";

import styles from "./styles/blog-header.module.css";

function BlogHeaderComponent({ title, image }) {
  return (
    <header>
      <h1 className={styles.title}>{title}</h1>
      <Image
        src={image}
        width={200}
        height={150}
        className={styles.image}
        layout="responsive"
      />
    </header>
  );
}

export default BlogHeaderComponent;
