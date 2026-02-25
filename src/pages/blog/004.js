import * as React from "react";
import { Link } from "gatsby";

// Components
import BlogPostLayout from "../../components/BlogPostLayout";
import ArticleHeader from "../../components/ArticleHeader";

// Data
import { getPostByLink } from "../../data/blog";

const postMeta = getPostByLink("/blog/004");

const Post = () => (
  <BlogPostLayout>
    <article>
      <ArticleHeader
        title={postMeta?.title ?? "What is coding ?"}
        date={postMeta?.date}
        dateTime={postMeta?.dateTime}
        tags={postMeta?.tags}
      />
      <div className="blog-prose">
        <section className="tldr">
          <p><strong>TL;DR</strong></p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
        <section className="intro-text">
          <p>COMING SOON...</p>
          <p>See ya.</p>
        </section>
      </div>
      <Link to="/blog/" className="blog-back-link">
        {"<- "} Back to blog
      </Link>
    </article>
  </BlogPostLayout>
);

export default Post;

export const Head = () => (
  <title>{postMeta ? `${postMeta.id}. ${postMeta.title}` : "What is coding ?"} | MrSolulu</title>
);
