import React, { cache } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";

export async function generateMetadata({ params }) {
  const { postSlug } = params;

  const { frontmatter } = await loadBlogPost(postSlug);

  return {
    title: `${BLOG_TITLE} • ${frontmatter.title}`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const { postSlug } = params;

  const { frontmatter, content } = await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} />;
      </div>
    </article>
  );
}

export default BlogPost;
