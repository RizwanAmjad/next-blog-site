import Head from "next/head";

import BlogGridComponent from "../../components/BlogGridComponent";

import { getAllBlogs } from "../../lib/db/blogs";

export default function AllBlogsPage({ blogs }) {
  return (
    <>
      <Head>
        <title>Rizwan Amjad | All Blogs</title>
        <meta
          name="description"
          content="Rizwan Amjad web and mobile app developer all blogs"
        />
      </Head>
      <BlogGridComponent blogs={blogs} />
    </>
  );
}

export async function getServerSideProps() {
  const blogs = JSON.parse(JSON.stringify(await getAllBlogs()));
  return {
    props: {
      blogs,
    },
  };
}
