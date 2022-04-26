import Head from "next/head";
import BlogGridComponent from "../components/BlogGridComponent";
import HeroComponent from "../components/HeroComponent";

import { getFeaturedBlogs } from "../lib/db/blogs";

export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>Rizwan Amjad | Featured Blogs</title>
        <meta
          name="description"
          content="Rizwan Amjad web and mobile app developer Featured blogs"
        />
      </Head>
      <main>
        <HeroComponent />
        <BlogGridComponent blogs={blogs} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const blogs = JSON.parse(JSON.stringify(await getFeaturedBlogs()));
  return {
    props: {
      blogs,
    },
  };
}
