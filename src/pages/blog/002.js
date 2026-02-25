import * as React from "react";
import { Link } from "gatsby";

// Components
import BlogPostLayout from "../../components/BlogPostLayout";
import ArticleHeader from "../../components/ArticleHeader";

// Data
import { getPostByLink } from "../../data/blog";

const postMeta = getPostByLink("/blog/002");

const Post = () => (
  <BlogPostLayout>
    <article>
      <ArticleHeader
        title={postMeta?.title ?? "First contact with code"}
        date={postMeta?.date}
        dateTime={postMeta?.dateTime}
        tags={postMeta?.tags}
      />
      <div className="blog-prose">
        <section className="tldr">
          <p><strong>TL;DR</strong></p>
          <ul>
            <li>
              My first encounter with programming wasn't bad, but it was
              far from what I imagined from movies.
            </li>
            <li>
              I honestly thought coding was just math… turns out, it's a
              whole universe of logic, creativity, and problem-solving.
            </li>
            <li>
              Still figuring it all out wish me luck!
            </li>
          </ul>
        </section>
        <section className="intro-text">
          <p>
            Today (long time ago) marks one month since I first sat in front of a computer
            to write code. To my surprise, it wasn't as terrifying as I'd
            imagined but it also wasn't the glamorous, hacker-in-a-dark-room
            experience I'd seen in movies.
          </p>
          <p>
            Back then, I truly believed programming was just about solving
            equations and doing math. I couldn't have been more wrong.
            Instead, I discovered it's this mix of logic, structure,
            creativity and a surprising amount of patience also a bit of 'it works but I don't know why'.
          </p>
          <p>
            Between physics, chemistry, and mathematics, I now also have
            to wrap my head around <strong>programming logic</strong>,{" "}
            <strong>databases</strong>, <strong>networks</strong>,{" "}
            and{" "}
            <strong>algorithms & data structures</strong>.
          </p>
          <p>
            Thankfully, I have friends and indians on youtube who can help me when things get too confusing.
          </p>
          <p>
            I don't fully understand everything yet, but I'm curious to
            see where this path leads.
          </p>
          <p>Wish me luck!</p>
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
  <title>{postMeta ? `${postMeta.id}. ${postMeta.title}` : "First contact with code"} | MrSolulu</title>
);
