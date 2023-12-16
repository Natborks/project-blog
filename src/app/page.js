import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";

async function Home() {
  const blogList = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {/* TODO: Iterate over the data read from the file system! */}
      {blogList.map((blog) => (
        <BlogSummaryCard
          slug={blog.slug}
          title={blog.title}
          abstract={blog.title}
          publishedOn={blog.publishedOn}
        />
      ))}
    </div>
  );
}

export default Home;
