import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles/blog-item.module.css";

function BlogItemComponent({ title, description, image, date, slug }) {
  return (
    <Link href={`/blogs/${slug}`}>
      <a>
        <div className={styles.blogItem}>
          <div className={styles.image}>
            <img
              src={`/api/blog-images/${slug}/${image}`}
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h2>{title}</h2>
            <date>{date}</date>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default BlogItemComponent;
