import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import BlogHeaderComponent from "./BlogHeaderComponent";

import styles from "./styles/blog-detail.module.css";

function BlogDetailComponent({ content, title, image }) {
  return (
    <article className={styles.container}>
      <BlogHeaderComponent title={title} image={image} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

export default BlogDetailComponent;
