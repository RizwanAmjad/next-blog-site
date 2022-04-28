import Head from "next/head";
import fs from "fs";
import BlogDetailComponent from "../../components/BlogDetailComponent";

import { getBlog } from "../../lib/db/blogs";

export default function IndividualBlogPage({ blog, content }) {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <BlogDetailComponent
        content={content}
        title={blog.title}
        image={`/api/blog-images/${blog.slug}/${blog.image}`}
        slug={blog.slug}
      />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const blog = JSON.parse(JSON.stringify(await getBlog(params.slug)));
  const content = fs.readFileSync(`blogs/${blog.slug}.md`);
  return {
    props: { blog, content: content.toString() },
  };
}
