import React from "react";

import BlogItemComponent from "./BlogItemComponent";

import styles from "./styles/blog-grid.module.css";

function BlogGridComponent({ blogs }) {
  return (
    <div className={styles.blogGrid}>
      {blogs.map((blog) => (
        <BlogItemComponent
          key={blog.slug}
          date={new Date(blog.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          description={blog.description}
          image={`${blog.image}`}
          slug={blog.slug}
          title={blog.title}
        />
      ))}
    </div>
  );
}

export default BlogGridComponent;
