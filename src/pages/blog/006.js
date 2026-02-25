import * as React from "react";
import { Link } from "gatsby";

// Components
import BlogPostLayout from "../../components/BlogPostLayout";
import ArticleHeader from "../../components/ArticleHeader";

// Data
import { getPostByLink } from "../../data/blog";

const postMeta = getPostByLink("/blog/006");

const Post = () => (
  <BlogPostLayout>
    <article>
      <ArticleHeader
        title={postMeta?.title ?? "To be determined"}
        date={postMeta?.date}
        dateTime={postMeta?.dateTime}
        tags={postMeta?.tags}
      />
      <div className="blog-prose">
        <section className="intro-text">
          <p>Coming soon.</p>
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
  <title>{postMeta ? `${postMeta.id}. ${postMeta.title}` : "006. To be determined"} | MrSolulu</title>
);
